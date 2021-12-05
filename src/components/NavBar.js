import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

     return (
          <div className={`Nav-bar fixed rel anim show`}>
               <div className={`block flex col anim show`}>
                    <Link to={'/resouces'} 
                         className="lbl cfff s15 fontb font"
                    >Resource Page</Link>
                    <Link to={'/projects'} 
                         className="lbl cfff s15 fontb font"
                    >Project Page</Link>
                    <Link to={'/proejctsRes'} 
                         className="lbl cfff s15 fontb font"
                    >Project Resource Page</Link>
                    <Link to={'/proejctCost'} 
                         className="lbl cfff s15 fontb font"
                    >Project Cost Page</Link>
               </div>
          </div>
     )
}

export default NavBar
