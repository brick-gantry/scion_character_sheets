import json

from flask import Flask, request
import pymongo

app = Flask('scion_character_sheets')
sheets_collection = pymongo.MongoClient().get_database('scion').get_collection('sheets')


@app.route("/api/sheet")
@app.route("/api/sheet/<sheet_name>", methods=['GET', 'POST'])
def sheet(sheet_name=None):
    match request.method, sheet_name:
        case 'GET', None:
            return json.dumps([_['sheet_name'] for _ in sheets_collection.find({}, {'_id': 0, 'sheet_name': 1})])
        case 'GET', _:
            return json.dumps(sheets_collection.find_one({'sheet_name': sheet_name}, {'_id': 0}))
        case 'POST', _:
            sheets_collection.update_one({'sheet_name': sheet_name},
                                         {'$set': {'sheet_name': sheet_name, **request.json}},
                                         upsert=True)
            return 'OK'


if __name__ == '__main__':
    app.run('127.0.0.1', 8080 if not __debug__ else 8081)
