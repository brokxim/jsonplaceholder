import initialState from "./initialState";
import {SET_TODOS,SET_POSTS,SET_USERS,SET_ALBUMS,SET_PHOTOS,TOGGLE_MENU} from "../types"
import { actionTypes } from "../types";

const reducer = (state=initialState, action:actionTypes) => {
    switch (action.type){
        
        case TOGGLE_MENU: return {...state, isSidebarShow:!state.isSidebarShow};

        case SET_TODOS: return {...state, Todos: action.payload};
        
        case SET_ALBUMS: return {...state, Albums: action.payload};
         
        case SET_POSTS: return {...state, Posts: action.payload};

        case SET_USERS: return {...state, Users: action.payload};

        case SET_PHOTOS: return {...state, Photos: action.payload};

        default: return state;
    }
}
export default reducer;