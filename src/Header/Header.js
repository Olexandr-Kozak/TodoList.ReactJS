import React from 'react'
import style from './Header.module.css'

class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <h2>You have {this.props.todoCount} on TodoList </h2>
      </div>
    )
  }
}

export default Header;