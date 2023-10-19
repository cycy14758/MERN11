import { ADD_USER_FAIL, ADD_USER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS } from "../Const/constUser"
import axios from "axios"

export const addUser = (Body,navigate) => async (dispatch) => {
    try {
      const resUser= await axios.post('http://localhost:5000/api/user/register', Body )
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: resUser.data,
     })
    navigate('/')
      }
    catch (err) {
      console.log(err)
      dispatch({
        type: ADD_USER_FAIL,
        payload: err.response.data
      });

     }}

     export const login = (loginUser, navigate) => async (dispatch) => {
      try {
          const res = await axios.post("http://localhost:5000/api/user/login", loginUser)
          dispatch({ type: LOGIN_SUCCESS, payload: res.data })
         switch (res.data.user.role){
            case "admin" : 
                 return navigate("/admin")
       
            default:
                 return navigate("/profile") }
    } 
       catch (err) {
          console.log(err);
          dispatch({ 
             type: LOGIN_FAIL,
              payload: err.response.data })

      }}