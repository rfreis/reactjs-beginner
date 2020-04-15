import React from 'react'
import PropTypes from 'prop-types'

export default function Columns (props) {
  const items = [
    {id: 1, name: 'ae'},
    {id: 2, name: 'aed'},
    {id: 3, name: 'aee'},
    {id: 4, name: 'aef'},
  ]
  return (
    <React.Fragment>
      {
        items.map( item => (
          <React.Fragment key={item.id}>
            <td>{item.name}</td>
          </React.Fragment>
        ))
      }
    </React.Fragment>
  )
}

Columns.propTypes = {

}
