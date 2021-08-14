import React from 'react';
import { useState, useEffect } from 'react';
import { Todo, UserName } from './Components/Entrance';
import './App.css';

export default function App() {
    let [userName, setUserName] = useState(localStorage.getItem("User name"));
    let [haveUserName, setHaveUserName] = useState(localStorage.getItem("User name") !== null);

    let [theme, setTheme] = useState(localStorage.getItem("Theme") !== null ? localStorage.getItem("Theme") : 'light');

    let [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("Todo list")) === null ?
            {
                open: [],
                finished: []
            }
            : JSON.parse(localStorage.getItem("Todo list"))
    );


    let themeStyles = {
        'light': {
            'body': {
                backgroundColor: 'white',
            }
        },
        'dark': {
            'body': {
                backgroundColor: 'black',
            }
        }
    }

    useEffect(() => {
        localStorage.setItem("Have user name", haveUserName);
        localStorage.setItem("User name", userName);
    }, [userName]);

    useEffect(() => {
        localStorage.setItem("Theme", theme);
    }, [theme]);
    useEffect(() => {
        localStorage.setItem("Todo list", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div className="app-body" style={themeStyles[theme].body}>
            {
                haveUserName ?
                    <Todo
                        userName={userName}

                        theme={theme}
                        setTheme={setTheme}

                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                    :
                    <UserName
                        haveUserName={haveUserName}
                        setHaveUserName={setHaveUserName}

                        userName={userName}
                        setUserName={setUserName}

                        theme={theme}                        
                    />
            }
        </div>
    )
}