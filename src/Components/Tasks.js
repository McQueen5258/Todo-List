import React from 'react';
import { Task } from './Entrance';

export default function Tasks(props) {
    let themeStyles = {
        'light': {
            'tasks-title': {
                color: 'black',
            }
        },
            'dark': {
                'tasks-title': {
                    color: 'white',
                }
            }
    }
    return (
        <div className={props.openOrFinished+'-tasks tasks'}>
            <p
                className="tasks-title"
                style={themeStyles[props.theme]['tasks-title']}
            >
                {props.TasksTitleText} Tasks({props.todoList[props.openOrFinished].length})
            </p>
            {
                props.todoList[props.openOrFinished].map(({ id, title, done }) => {
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
    )
}