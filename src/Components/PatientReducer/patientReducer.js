export const initialState = { 
    patients: []
}
export const PatientReducer = (state,action) =>{
     switch(action.type){
         case 'ADD_PATIENT': 
         const newPatients = {
             id:action.id,
             name:action.name
         }
         const allPatient = [...state.patients, newPatients];
         return {patients : allPatient};
         case 'REMOVE_PATIENT' :
             const reaming = state.patients.filter(pt => pt.id ==! action.id)
             const NewState = {patients : reaming}
             return NewState;
         default:
             return state;
        

     }
 }