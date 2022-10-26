export const attributes = ['Intellect', 'Cunning', 'Resolve', 'Might', 'Dexterity', 'Stamina', 'Presence', 'Manipulation', 'Composure'];
export const skills = ['Academics', 'Athletics', 'Close Combat', 'Culture', 'Empathy', 'Firearms', 'Integrity', 'Leadership', 'Medicine', 'Occult', 'Persuasion', 'Pilot', 'Science', 'Subterfuge', 'Survival', 'Technology'];

export function new_sheet() {
  return {
    name: '',
    attributes: Object.assign({}, ...attributes.map(s => ({[s]: 1}))),
    skills: Object.assign({}, ...skills.map(s => ({[s]: {checked: false, rating: 0, specialty: ''}}))),
    paths: [{name: '', checked: true}, {name: '', checked: true}, {name: '', checked: true}],
    short_deed: '',
    long_deed: '',
    band_deed: '',
    virtue: {left: '', right: '', rating: 3},
    knacks: '',
    contacts: '',
    callings: [{name: '', rating: 1}],
    momentum: 4, //chronicle value
    health: [
      {name: 'Bruised (+1d)', checked: false},
      {name: 'Injured (+2d)', checked: false},
      {name: 'Maimed (+4d)', checked: false},
      {name: 'Taken Out'}],
    weapons_armor: '',
    equipment: '',
    experience: {
      gained: 0,
      spent: 0,
      history: ''
    }
  }
}