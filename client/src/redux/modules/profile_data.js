 //Actions
 
 const LOAD_SINGLE_USER = 'LOAD_SINGLE_USER';

 export function loadUsers(userData) {
     return {
         type: LOAD_SINGLE_USER,
         payload: userData
     };
 }

//Helper Functions
 export function fetchProfile(userId) {
     return function (dispatch) {
         fetch(`http://localhost:3001/users/${userId}`)
             .then(response => response.json())
             .then(json => {
                 const userData = json;
                 dispatch(loadUsers(userData));
             })
             .catch(error => console.log(error));
     };
 }


//Reducers 
 const initialState = {
     loading: true,
     usersData: []
 };

 export default function profileReducer(state = initialState, action) {
     switch (action.type) {

         case LOAD_SINGLE_USER:
             return {
                 loading: false,
                 usersData: action.payload
             };
         default:
             return state;
     }
 }