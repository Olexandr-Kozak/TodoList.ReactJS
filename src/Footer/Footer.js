import React from 'react'
import {v4} from "uuid";
import style from './Footer.module.css'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.hanldeChange = this.hanldeChange.bind(this)
  }

  hanldeChange(e) {
    const value = e.target.value;
    this.setState({
      value
    })
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.value !== '') {
      this.props.onToDoAdd({
        value: this.state.value,
        id: v4()
      })
      this.setState({
        value: ""
      })
    }
  }

  render() {
    return (
      <div className={style.footer}>
        <form className={style.form}>
          <input className={style.input} value={this.state.value} onChange={this.hanldeChange} type="text"/>
          <button className={style.addBtn} onClick={this.handleClick}>Add to List</button>
        </form>
      </div>
    )
  }
}

export default Footer;