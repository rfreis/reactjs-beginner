import React from 'react'
import ReactDom from 'react-dom'

export default function PortalDemo (props) {
  return ReactDom.createPortal(
    <h1>
    Portals Demo
    </h1>,
    document.getElementById('portal-root')
  )
}
