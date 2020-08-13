import React, {Component} from 'react';
import './TodoInput.css';


export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem} = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text"
                           className="form-control text-capitalize"
                           placeholder="Name..."
                           value={item}
                           onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-success">
                        {editItem ?'Edit Item':'Add Item'}</button>
                </div>

            </form>
        );
    }
}

