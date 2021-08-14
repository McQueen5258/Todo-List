import React from 'react';


export default function Task(props) {
    let themeStyles = {
        'light': {
            'text': {
                color: 'black',
            },
            'task':{
                color: 'black',
                backgroundColor: 'white'
            }
        },
        'dark': {
            'text': {
                color: 'white',
            },
            'task':{
                color: 'white',
                backgroundColor: '#272727'
            }
        }
    }
    function handleDone() {
        if (props.done) {
            
        } else {
            let obj = props.todoList.open.find(item => item.id === props.id);
            obj.done = true;
            props.setTodoList(({ open, finished }) => ({
                open:[...open.filter(ex => ex.id !== props.id)],
                finished: [...finished, {id: Date.now(), title: obj.title, done: obj.done}]
            }))
            console.log(obj,props);
        }
        // props.todoList.open.find(item => item.props === name).orgCode
        // arr.find(item => item.name === name).orgCode
    }
    return (
        <div
            className={props.done ?"task done" : "task"}
            style={themeStyles[props.theme].task}
        >
            <div className={props.done ?"task-btn done-btn" : "task-btn"} onClick={handleDone}></div>
            <div className={props.done ?"task-title done-title" : "task-title"}>{props.title}</div>
            <div className="task-delete"></div>
        </div>
    )
}