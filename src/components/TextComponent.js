import React from 'react';
import '../styles/TextComponent.css'

const TextComponent = ({data, textId}) => {
    return (
        <>
            <div className="text_cls" id={textId}>{data}</div>
            <div className="line_cls"></div>
        </>
    );
}

export default TextComponent;