import { GET_ALLPRODUCTS_SUCCESS } from "../Const/constProduct"

const initialstate={
    products:[],
    oneproduct:{},
   error:{}
 
 }
 
 
 
 export const   productReducer =(state=initialstate,action)=>{
    switch(action.type){
     case GET_ALLPRODUCTS_SUCCESS :
        return {...state,products:action.payload}
            
        default:
            return state
        }}