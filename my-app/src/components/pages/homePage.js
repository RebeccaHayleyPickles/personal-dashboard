import React from 'react';
import {
  Link
} from 'react-router-dom';

function HomePage() {
  return (
    <div className="container-fluid">
      <h1>
        Good Day, Name
      </h1>
      <nav>
        <ul>
          <li className="first">
          <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Weather'>Weather</Link>
          </li>
          <li>
            <Link to='/News'>News</Link>
          </li>
          <li>
            <Link to='/Sport'>Sport</Link>
          </li>
          <li>
            <Link to='/PhotoGallery'>Gallery</Link>
          </li>
          <li>
            <Link to='/TaskList'>Tasks</Link>
          </li>
          <li className="last">
          <Link to='/FavouriteWarmer'>Warmer</Link>
          </li>                    
        </ul>
      </nav>

    </div>
  );
}

export default HomePage;