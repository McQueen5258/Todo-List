import React from 'react';
import { useState, useEffect } from 'react';
import { Tasks } from './Entrance';

export default function Todo({ userName, theme, setTheme, todoList, setTodoList}) {
    var date = new Date().toDateString().split(" ");

    let themeStyles = {
        'light': {
            'sayHello': {
                color: 'black',
            }
        },
        'dark': {
            'sayHello': {
                color: 'white',
            }
        }
    }

    function handleCreate(event) {
        event.preventDefault()
        if (event.target[0].value) {
            setTodoList(({ open, finished }) => ({
                open: [...open, { id: Date.now(), title: event.target[0].value, done: false }],
                finished: [...finished]
            }))
        }
        console.log('add', todoList)
    }

    useEffect(() => {
        document.getElementById("myform").reset();
    }, [todoList]);


    return (
        <div className="todo">
            <div className="todo-title">
                <h3 className="say-hello" style={themeStyles[theme].sayHello}>Hi {userName}. What are you ToDos for today?</h3>
                <p className="date" style={{ color: 'grey' }}>{date[0]+', '+date[1]+' '+date[2]+' '+date[3] }</p>
            </div>
            <form id="myform" className="add-todo-form" onSubmit={handleCreate}>
                <input
                    type="text"
                    className="add-todo-input"
                    placeholder="  e.g Update Wordpress ..."
                />
                <button type="submit" className="add-todo-btn" ></button>
            </form>
            <div style={{marginBottom: '70px'}}>
                <Tasks
                    openOrFinished={'open'}
                    TasksTitleText={'Open'}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    theme={theme}
                />
                <Tasks
                    openOrFinished={'finished'}
                    TasksTitleText={'Finished'}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    theme={theme}
                />
            </div>
        </div>
    )
}





// todoList.todos.map(({ id, title }) =>
{/* <div key={id}></div> */ }
// )