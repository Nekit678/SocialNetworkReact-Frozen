
import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from './../api/api';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authSlice = createSlice(
    {
        name: "auth",
        initialState: initialState,
        reducers: {
            setAuth(state, action) {
                state.email = action.payload.email
                state.login = action.payload.login
                state.userId = action.payload.id
                state.isAuth = true
            },
            resetAuth(state,action){
                state.email = null
                state.login = null
                state.userId = null
                state.isAuth = false
            }
        }
    }
)

export function getCurrentUser() {
    return (dispatch) => {
        return authAPI.getCurrentUser().then(
            response => {
                if (!response.resultCode) {
                    dispatch(setAuth(response.data))
                }
            }
        )
    }
}

export function login(formInfo,setStatus){
    return (dispatch)=>{
        authAPI.login(formInfo).then(
            response =>{
                setStatus("")
                if (!response.resultCode){
                    dispatch(getCurrentUser())
                }
                else(
                    setStatus(response.messages)
                )
            }
        )
    }
}

export function logout(){
    return (dispatch)=>{
        authAPI.logout().then(
            response =>{
                if (!response.resultCode){
                    dispatch(resetAuth())
                }
            }
        )
    }
}

export const { setAuth, resetAuth} = authSlice.actions
export default authSlice.reducer