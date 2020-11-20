import React, {useState} from 'react';
import Links from './Links';
import { Switch, Route, Link } from "react-router-dom";
import {useTransition, animated} from 'react-spring'

let Nav = () => {

    const[Nav, setNav] = useState(false);

    const menuTransitions = useTransition(Nav, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
     

    let menu;

    if(Nav){
        menu = <div className="mini">
            <Links closeMenu = {() => setNav(false)}/>
        </div>


        menuTransitions.map(({ item, key, props }) =>
            item && 
            <animated.div key={key} style={props} className="mini">
                <Links closeMenu = {() => setNav(false)}/>
            </animated.div>
            )
                   
    }

    return(
        <nav>
            <div className="nav">
                <div>
                    <Switch>
                        <Route>
                            <Link exact to='/'>
                                <div className='logo'>ESTHER NINYO</div>
                            </Link>
                        </Route>
                    </Switch>
                </div>

                <div>
                    <div className='Toggle' onClick={() => setNav(!Nav)}>
                        <p className="line"></p>
                        <p className="line"></p>
                        <p className="line"></p>
                    </div>

                    
                    <div className="main">
                        <Links closeMenu = {() => setNav(false)}/>
                    </div>
                </div>
            </div>
            {menu}
        </nav>
    )
}
export default Nav;