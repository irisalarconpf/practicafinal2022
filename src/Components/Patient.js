import {useState} from "react";
import {doc, updateDoc, deleteDoc} from 'firebase/firestore'
import {db} from "../firebase";

function patient({name, secondName, surname, birthday, gender, weight, height, addres, phone, diagnostic}){

    const [open, setOpen] = useState({edit:false, view:false})

    const handleClose = () => {
        setOpen({edit:false, view:false})
    }

    <div className={`task ${checked && 'task--borderColor'}`}>
        <div>
            <input
                id={`checkbox-${id}`}
                className='checkbox-custom'
                name="checkbox"
                checked={checked}
                onChange={handleChange}
                type="checkbox" />
            <label
                htmlFor={`checkbox-${id}`}
                className="checkbox-custom-label"
                onClick={() => setChecked(!checked)} ></label>
        </div>
        <div className='task__body'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='task__buttons'>
                <div className='task__deleteNedit'>
                    <button
                        className='task__editButton'
                        onClick={() => setOpen({...open, edit : true})}>
                        Edit
                    </button>
                    <button className='task__deleteButton' onClick={handleDelete}>Delete</button>
                </div>
                <button
                    onClick={() => setOpen({...open, view: true})}>
                    View
                </button>
            </div>
        </div>
    </div>


}