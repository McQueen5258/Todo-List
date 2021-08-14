import React from 'react';
import dark from '../image/dark.svg';
import light from '../image/light.svg';

export default function Bar(props) {

    let themeStyles = {
        'light': {
            'bar': {
                color: 'black',
            },
            'theme-btn': {
                borderColor: 'black',
                justifyContent: 'flex-end',
            },
            'theme-btn-img': {
                backgroundColor: 'black',
                backgroundSize: '100%',
                backgroundImage: 'url('+light+')',
            }
        },
        'dark': {
            'bar': {
                color: 'white',
            },
            'theme-btn': {
                borderColor: 'white',
                justifyContent: 'flex-start',
            },
            'theme-btn-img': {
                backgroundColor: 'white',
                backgroundSize: '70%',
                backgroundImage: 'url('+dark+')',
            }
        }
    }

    function handleClick() {
        const { setTheme, theme } = props;
        setTheme(theme === 'light'? 'dark': 'light');
        
        // if (props.theme === 'light') {
        //     props.setTheme('dark');
        // } else {
        //     props.setTheme('light');
        // }
    }
    return (
        <div className="bar" style={themeStyles[props.theme].bar}>
            <div className="bar-left"></div>
            <div className="bar-right">
                <div>{props.userName}</div>
                <div className="theme-btn" onClick={handleClick} style={themeStyles[props.theme]["theme-btn"]}>
                    <div className="theme-btn-img" style={themeStyles[props.theme]["theme-btn-img"]}></div>
                </div>
            </div>
        </div>
    )
}