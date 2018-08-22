import React, { Component } from 'react';
// import noun_Baby_859032 from './media/images/noun_Baby_859032.svg'
import Icon from './Icon';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
          {/* Displays the mountain icon in the header */}
          <div className="Header__company-info">
          <Icon />
            {/* <img className='baby-image' src={noun_Baby_859032} alt="baby icon"/> */}
            <h1>BABY NAME GENERATOR{'\n'}</h1>
            {/* <h2>Name ur baby right</h2> */}
          </div>

          {/* Displays the search bar */}
          {/* <div className="Header__right"> */}


            {/* Displays the profile icon */}
            {/* <div className="Header__profile">

            </div> */}
            <hr></hr>
          {/* </div> */}

      </div>
    )
  }
}