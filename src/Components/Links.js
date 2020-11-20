import React from 'react';
import { Link } from 'react-router-dom';

let Links = (props) => {
    return(
        <div>
            <ul className="links">
                <li className='active'>
                    <Link to='/' onClick={props.closeMenu}>Home</Link>
                </li>
                <li >
                    <Link to='/project' onClick={props.closeMenu}>Projects</Link>
                </li>
                
            </ul>
        </div>
    )
}
export default Links;