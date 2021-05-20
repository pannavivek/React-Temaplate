import React, {useState} from 'react';

const Darkmode = () => {

    const [darkMode, setDarkMode] = useState(false);

    // const modeEvent = (event) =>{
    //     setMode (event.target.value);
    //     consloe.log()
    // }
    return (
        <>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
            
        </>
    )
}

export default Darkmode;
