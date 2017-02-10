import React from 'react'
import styles from 'styles/components/Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <h1> Header </h1>
      </div>
    )
  }
}
