import React, {Component} from 'react';
import './TodoItem.css';
import starIMG from '../TodoItem/img/star.png';
import checkboxIMG from '../TodoItem/img/checkbox.png';
import editingIMG from '../TodoItem/img/editing.png';
import deleteIMG from '../TodoItem/img/delete.png';





export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit}=this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div>
                    <img className="task-img" src={starIMG} alt="star"/>
                    <img className="task-img" src={checkboxIMG} alt="checkbox"/>
                    <img className="task-img" src={editingIMG} alt="editing" onClick={handleEdit}/>
                    <img className="task-img" src={deleteIMG} alt="delete"onClick={handleDelete}/>

                </div>
            </li>
        );
    }
}

