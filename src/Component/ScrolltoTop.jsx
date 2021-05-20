import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrolltoTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setvisible] = useState(false);

    useEffect(() => {
        if (pageYOffset > 350) {
            setvisible(true);   
        } else{
            setvisible(false);
        }
    }, [pageYOffset]);

    const scrolltoTop = () => window.scrollTo({ top:0, behavior:"smooth" });

    if(!visible){
        return false;
    }

    return (
        <div className="go-top" onClick={scrolltoTop}>
            <i className="fa fa-chevron-up icon"></i>
        </div>
    );
};

export default ScrolltoTop;