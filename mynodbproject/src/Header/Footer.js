import React, { Component } from 'react';
// import noun_Baby_859032 from './media/images/noun_Baby_859032.svg'
import Icon from './Icon';
// import './Header.css';
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
      <section className="Footer__parent">
        <section className="Footer__content">
          {/* Displays the mountain icon in the header */}
          <div className="Footer__info">

          <Icon />

            <h2>Baby Name Generator</h2>
            {/* <h2>Name ur baby right</h2> */}
            <p>Aisha Toulegenova</p>
          </div>

          {/* Displays the search bar */}
          <div className="Footer__right">


            {/* Displays the profile icon */}
            <div className="Footer__profile">

            </div>
          </div>

        </section>
      </section>
      </div>
    )
  }
}