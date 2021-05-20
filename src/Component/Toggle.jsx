import React, {useState}  from 'react';

const Toogle = () => {
    const [show, setShow] = useState(false); 
    return (

        <>
<button onClick={ () => setShow(!show) } className="nav-link toggle">Pages </button>
                                            {  show?<h1>hello</h1> : null }
    </>
    )
}

export default Toogle;