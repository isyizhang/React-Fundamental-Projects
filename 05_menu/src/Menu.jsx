import React from 'react'
import MenuItem from './MenuItem'

const Menu = (props) => {
  return (
    <div className="section-center">
      {props.menu.map((item) => {
        return <MenuItem key={item.id} {...item} />
      })}
    </div>
  )
}

export default Menu
