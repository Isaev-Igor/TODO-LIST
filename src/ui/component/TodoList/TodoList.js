import React, {Component} from 'react';
import TodoItem from "../TodoItem/TodoItem";


export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props
        return (
            <ul className="list-group">
                {items.map(item => {
                    return <TodoItem
                        key={item.id}
                        title={item.title}
                        handleDelete={()=> handleDelete(item.id)}
                        handleEdit={()=> handleEdit(item.id)}
                    />;
                })}


                <button type="button"
                        className="btn btn-outline-danger"
                        onClick={clearList}
                > clear item
                </button>

            </ul>

        );
    }
}

