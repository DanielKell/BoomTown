 
 const MANIPULATE_TAGS = 'MANIPULATE_TAGS';

 export function filterTags(tagData) {
     return {
         type: MANIPULATE_TAGS,
         payload: tagData
     };
 }

  const initialState = {
     tagData: []
 };

 export default function tagReducer(state = initialState, action) {
     switch (action.type) {

         case MANIPULATE_TAGS:
             return {
                 ...state,
                 tagData: action.payload
             };
         default:
             return state;
     }
 }