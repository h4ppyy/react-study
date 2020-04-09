import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div class="dev">
        <ul>
          <li>
            <Link to="/">index</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header;