import React, { useReducer, useRef } from 'react';
import { initialState, PatientReducer } from '../PatientReducer/patientReducer';

const Patient = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(PatientReducer, initialState);
    const handleSubmit = event =>{
        event.preventDefault();
        dispatch({type:"ADD_PATIENT",
        name: nameRef.current.value,
         id: state.patients.length + 1
        })
     nameRef.current.value = '';
    }
    return (
        <div>
            <h1>manage doctors chamber{state.patients.length}</h1>
             <form onClick={handleSubmit}>
                 <input ref = {nameRef}/>
             </form>
             {
                 state.patients.map(pt => <li
                 key = {pt.key}
                 onClick={() =>dispatch({type:"REMOVE_PATIENT"})}>
                     {pt.name}
                     
                     </li>)
             }
        </div>
    );
};

export default Patient;