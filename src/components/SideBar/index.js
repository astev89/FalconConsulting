import React from 'react'
import PageLinks from 'components/PageLinks'
import CloseIcon from 'images/CloseIcon'
import classNames from 'classnames'

import './_side-bar.scss'


export default function SideBar({closeSideBar, expanded}) {
  return [
    <div key="sidebar" className={classNames('side-bar', {expanded})}>
      <PageLinks onClick={closeSideBar}>
        <CloseIcon />
      </PageLinks>
    </div>,
    <div key="underlay" className={classNames('underlay', {isActive: expanded})} />
  ]
}
