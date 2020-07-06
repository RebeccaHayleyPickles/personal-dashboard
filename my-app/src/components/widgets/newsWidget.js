import React from 'react';
import {
    Link
  } from 'react-router-dom';

function NewsWidget() {
    return (
        <div className='box'> 
            <h1>
                <Link to='/News'>News</Link>
            </h1>
            <p>
              News app  
            </p>
        </div>
    );
}

export default NewsWidget;