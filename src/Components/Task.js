import React from 'react';


export default function Task(props) {
    let themeStyles = {
        'light': {
            'text': {
                color: 'black',
            },
            'task': {
                color: 'black',
                backgroundColor: 'white'
            }
        },
        'dark': {
            'text': {
                color: 'white',
            },
            'task': {
                color: 'white',
                backgroundColor: '#272727'
            },
            'task-btn': {
                backgroundColor: 'black'
            }
        }
    }
    function handleDone() {
        if (props.done) {
            let obj = props.todoList.finished.find(item => item.id === props.id);
            obj.done = false;
            props.setTodoList(({ open, finished }) => ({
                open: [...open, { id: Date.now(), title: obj.title, done: obj.done }],
                finished: [...finished.filter(ex => ex.id !== props.id)],
            }))
        } else {
            let obj = props.todoList.open.find(item => item.id === props.id);
            obj.done = true;
            props.setTodoList(({ open, finished }) => ({
                open: [...open.filter(ex => ex.id !== props.id)],
                finished: [...finished, { id: Date.now(), title: obj.title, done: obj.done }]
            }))
            console.log(obj, props);
        }
    }
    function handleDelete() {
        if (props.done) {
            let obj = props.todoList.finished.find(item => item.id === props.id);
            obj.done = false;
            props.setTodoList(({ open, finished }) => ({
                open: [...open],
                finished: [...finished.filter(ex => ex.id !== props.id)],
            }))
        } else {
            let obj = props.todoList.open.find(item => item.id === props.id);
            obj.done = true;
            props.setTodoList(({ open, finished }) => ({
                open: [...open.filter(ex => ex.id !== props.id)],
                finished: [...finished]
            }))
        }
    }
    
    return (
        <div
            className={props.done ? "task done" : "task"}
            style={themeStyles[props.theme].task}
        >
            <div
                className={props.done ? "task-btn done-btn" : "task-btn"}
                onClick={handleDone}
                style={themeStyles[props.theme]['task-btn']}
            ></div>
            <div className={props.done ? "task-title done-title" : "task-title"}>{props.title}</div>
            <div className="task-delete" onClick={handleDelete}></div>
        </div>
    )
}