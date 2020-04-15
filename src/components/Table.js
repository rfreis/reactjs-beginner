import React from 'react'
import PropTypes from 'prop-types'
import Columns from './Columns'

export default function Table (props) {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  )
}

Table.propTypes = {

}
