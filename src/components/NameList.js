import React from 'react'
import Person from './Person';

export default function NameList (props) {
  const names = ['Bruce', 'Clark', 'Diana']
  const nameList = names.map(name => <h2>{name}</h2>)
  const persons = [
    {id: 1, name: 'Bruce', age: 30, skill: 'Angular'},
    {id: 2, name: 'Clark', age: 31, skill: 'Vue'},
    {id: 3, name: 'Diana', age: 32, skill: 'React'},
  ]
  const personList = persons.map(person => (
    <Person key={person.id} person={person}></Person>
  ))

  return <div>{personList}</div>
}
