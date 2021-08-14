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
        if(event.keyCode === 13 && event.target.value !== '' && event.target.value !== null) {
            props.setHaveUserName(true);
            props.setUserName(event.target.value);
            console.log(event.target.value);
        }
    }
    return (
        <div className="user-name">
            <h3 className="welcome"><span>Welcome. </span><span>What do you want me to call you?</span></h3>
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