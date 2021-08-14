import React from 'react';
import { useState, useEffect } from 'react';
import { Task, Bar } from './Entrance';

export default function Todo(props) {
    var date = new Date();
    // console.log(date.toDateString());
    // console.log(date.toDateString().split(" ")[1]);
    // console.log(date.toDateString().split(" ")[2]);
    let themeStyles = {
        'light': {
            'sayHello': {
                color: 'black',
            },
            'tasks-title': {
                color: 'black',
            }
        },
        'dark': {
            'sayHello': {
                color: 'white',
            },
            'tasks-title': {
                color: 'white',
            }
        }
    }

    function handleCreate(event) {
        event.preventDefault()
        if (event.target[0].value) {
            // if (props.todoList.open) {
                
            // }
            props.setTodoList(({ open, finished }) => ({
                open: [...open, {id: Date.now(),title:event.target[0].value , done:false}],
                finished: [...finished]
            }))
        }
        console.log('add',props.todoList)
    }

    useEffect(() => {
        document.getElementById("myform").reset();
    },[props.todoList]);


    return (
        <div className="todo">
            <Bar
                userName={props.userName}
                theme={props.theme}
                setTheme={props.setTheme}
            />
            <div className="todo-title">
                <h3 className="say-hello" style={themeStyles[props.theme].sayHello}>Hi {props.userName}. What are you ToDos for today?</h3>
                <p className="date" style={{ color: 'grey' }}>{date.toDateString()}</p>
            </div>
            <form id="myform" className="add-todo-form" onSubmit={handleCreate}>
                <input
                    type="text"
                    className="add-todo-input"
                    placeholder="e.g Update Wordpress ..."
                />
                <button type="submit" className="add-todo-btn" >Add</button>
            </form>
            <div>
                <div className='open-tasks tasks'>
                    <p
                        className="tasks-title"
                        style={themeStyles[props.theme]['tasks-title']}
                    >
                        Open Rasks({props.todoList.open.length})
                    </p>
                    {
                        props.todoList.open.map(({ id, title, done }) => {
                            return <Task
                            key={id}
                            id={id}
                            title={title}
                            done={done}
                            todoList={props.todoList}
                            setTodoList={props.setTodoList}
                            theme={props.theme}
                        />
                        })
                    }
                </div>
                <div className='Finished-tasks tasks'>
                    <p
                        className="tasks-title"
                        style={themeStyles[props.theme]['tasks-title']}
                    >
                        Finished Tasks({props.todoList.finished.length})

                    </p>
                    {
                        props.todoList.finished.map(({ id, title, done }) => {
                            return <Task
                            key={id}
                            title={title}
                            done={done}
                            todoList={props.todoList}
                            setTodoList={props.setTodoList}
                            theme={props.theme}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}





// props.todoList.todos.map(({ id, title }) =>
{/* <div key={id}></div> */ }
// )