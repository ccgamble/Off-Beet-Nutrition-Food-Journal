import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <Link className='home-nav' to='/home/'>
        <h1>
         off beet nutrition
       </h1>
     </Link>
   </header>
  );
};

module.exports = Header