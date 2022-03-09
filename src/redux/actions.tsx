import {SET_TODOS,SET_POSTS,SET_USERS,SET_ALBUMS,SET_PHOTOS,TOGGLE_MENU, todoType} from '../types'
import {todosType,postsType,albumsType,photosType,usersType,initialStateType } from '../types'
import {getTodos} from '../api/todos';
import {getPosts} from '../api/posts';
import {getAlbums} from '../api/albums';
import {getPhotos} from '../api/photos';
import {getUsers} from '../api/users';

export const toggleMenu = (dispatch:any)=>{dispatch({type: TOGGLE_MENU})}

export const setTodos = async (dispatch:any)=>{
    const data = await getTodos();
      console.log(data,"data")
    dispatch({type: SET_TODOS,payload: data})
}

export const setPosts = async (dispatch:any)=>{
    const data = await getPosts();
    
    dispatch({type: SET_POSTS,payload: data})
}

export const setAlbums = async (dispatch:any)=>{
    const data = await getAlbums();
    
    dispatch({type: SET_ALBUMS,payload: data})
}

export const setPhotos = async (dispatch:any)=>{
    const data = await getPhotos();
    
    dispatch({type: SET_PHOTOS,payload: data})
}

export const setUsers = async (dispatch:any)=>{
    const data = await getUsers();
    dispatch({type: SET_USERS,payload: data})
}
