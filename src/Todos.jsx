import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    return (
        <div className='todos collection'>
            {todos.length ? (
                todos.map(todo => {
                    return (
                        <div className="collection-item" key={todo.id}>
                            <span className='todo-content'>{todo.content}</span>
                            <span className='icon'><i onClick={() => { deleteTodo(todo.id) }} class="material-icons small ">delete_forever</i></span>
                        </div>
                    )
                })
            ) : (
                    <p className='blue-text empty-message center'>You have no todos left</p>
                )
            }
        </div>
    );
};

export default Todos;