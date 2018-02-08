import React from 'react'
import PageLinks from 'components/PageLinks'
import CloseIcon from 'images/CloseIcon'
import classNames from 'classnames'

import './_side-bar.scss'


export default function SideBar({closeSideBar, expanded}) {
  return (
    <div className={classNames('side-bar', {expanded})}>
      <PageLinks onClick={closeSideBar}>
        <CloseIcon />
      </PageLinks>
    </div>
  )
}