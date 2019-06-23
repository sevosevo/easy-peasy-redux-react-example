import React, { useState } from 'react';
import { useActions } from 'easy-peasy';

const Form = () => {

    const [formData, setFormData] = useState({title: '', body: ''});

    const [addTodo] = useActions(actions => [actions.todos.add, actions.todos.delete]);

    const onChange = ev => {
        setFormData({...formData, [ev.target.name] : ev.target.value});
    }

    const handleAddButton = ev => {
        ev.preventDefault();

        addTodo(formData);
    }

    return (
        <div className="row justify-content-center">
            <form onSubmit={ handleAddButton }>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Buy something" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea className="form-control" id="body" rows="3" name="body" placeholder="I need to..." onChange={onChange}></textarea>
                </div>
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default Form
