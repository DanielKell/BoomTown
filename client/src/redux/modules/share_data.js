const SET_IMAGE_FILE_UPLOAD = 'SET_IMAGE_FILE_UPLOAD';
const SET_IMAGE_FILE_UPLOAD_PLACEHOLDER = 'SET_IMAGE_FILE_UPLOAD_PLACEHOLDER';

export const setImageUpload = (file) => ({
   type: SET_IMAGE_FILE_UPLOAD,
   file: file
 })
 
 export const setImageUploadPlaceHolder = (imageData) => ({
   type: SET_IMAGE_FILE_UPLOAD_PLACEHOLDER,
   imageData:imageData
 })

 const initialState = {
  imageFile: null,
  imageData: null
 }

 export default (state = initialState, action) => {
   switch (action.type){

    case SET_IMAGE_FILE_UPLOAD:
       return{
         ...state,
         imageFile: action.file
       }
    case SET_IMAGE_FILE_UPLOAD_PLACEHOLDER:
     return {
       ...state,
       imageData: action.imageData
     }
        default:
        return state;
   }
 }
