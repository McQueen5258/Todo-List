import React from 'react';

export default function UserName(props) {

    let themeStyles = {
        'light':{
            'userInput':{
                borderColor: 'black',
                backgroundColor:'white',
                caretColor: 'black',
                color:'black',

            }
        },
        'dark':{
            'userInput':{
                borderColor: 'white',
                backgroundColor:'black',
                caretColor: 'white',
                color:'white',
            }
        }
    }

    function handleSubmit(event) {
        const {value} = event.target;
        if(event.keyCode === 13 && value !== '' && value !== null) {
            props.setHaveUserName(true);
            props.setUserName(value);
        }
    }
    return (
        <div className="user-name">
                <input
                    // value=''
                    type="text"
                    className="user-name-input"
                    placeholder="Username..."
                    onKeyDown={handleSubmit}
                    style={themeStyles[props.theme].userInput}
                />
        </div>
    )
}