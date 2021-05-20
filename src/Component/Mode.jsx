import React from 'react';
import Darkmode from './Darkmode';

const Mode = (props) => {
    return (
        <>
            <div className={props.darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        {/* <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span> */}
        
        {/* <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span> */}
        <Darkmode />
      </div>
     
    </div>
            
        </>
    )
}

export default Mode;

