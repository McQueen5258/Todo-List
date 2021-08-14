import React from 'react';

export default function Bar(props) {

    let themeStyles = {
        'light': {
            'bar': {
                color: 'black',
            }
        },
        'dark': {
            'bar': {
                color: 'white',
            }
        }
    }

    function handleClick() {
        console.log(props.theme,props)
        if (props.theme === 'light') {
            props.setTheme('dark');
        } else {
            props.setTheme('light');
        }
    }
    return (
        <div className="bar" style={themeStyles[props.theme].bar}>
            <div className="bar-left"></div>
            <div className="bar-right">
                <div>{props.userName}</div>
                <div onClick={handleClick}>Theme</div>
            </div>
        </div>
    )
}