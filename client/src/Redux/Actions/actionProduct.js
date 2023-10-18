import axios from "axios"
import { GET_ALLPRODUCTS_FAIL, GET_ALLPRODUCTS_SUCCESS } from "../Const/constProduct";



export const getAllProducts = () => async (dispatch) => {
 
  try {
 const res = await axios.get("http://localhost:5000/api/product")
    dispatch({
      type: GET_ALLPRODUCTS_SUCCESS,
      payload: res.data
     
    });
   
  }

  catch (err) {
    console.log(err)
    dispatch({
      type: GET_ALLPRODUCTS_FAIL,
      payload: err.message
    });
  }}