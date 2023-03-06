import React from 'react';
import cl from "./css/About.module.css";

const AboutBox = ({title, text}) => {
    return (
        <div className={cl.advantages_item}>
            {title}
            <div className={cl.advantages_text}>
                {text}
            </div>
        </div>
    );
};

export default AboutBox;