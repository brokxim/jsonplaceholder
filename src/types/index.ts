import React from 'react';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const SET_TODOS = 'SET_TODOS';

export const SET_POSTS = 'SET_POSTS';

export const SET_ALBUMS = 'SET_ALBUMS';

export const SET_PHOTOS = 'SET_PHOTOS';

export const SET_USERS = 'SER_USERS';

export type actionTypes = 
  | {type: typeof TOGGLE_MENU; payload:boolean}
  | {type: typeof SET_TODOS;   payload:todoType[]}
  | {type: typeof SET_POSTS;   payload:postType[]}
  | {type: typeof SET_ALBUMS;  payload:albumType[]}
  | {type: typeof SET_PHOTOS;  payload:photoType[]}
  | {type: typeof SET_USERS;   payload:userType[]}

export type initialStateType={
  isSidebarShow: boolean;
  Todos?: [todoType]  | [] | any;
  Posts?: [postType]  | [] | any;
  Albums?:[albumType] | [] | any;
  Photos?:[photoType] | [] | any;
  Users?: [userType]  | [] | any;
}
export type albumStateType={
  isSidebarShow: boolean,
  Users:[],
  Photos:[],
  Albums:[],
  Posts:[],
  Todos:[]
}

  export type todoType={
    userId:number;
    id: number;
    title: string;
    completed: boolean;
}
  export type postType={
    userId:number;
    id: number;
    title: string;
    body:string
}
  export type albumType={
    userId:number;
    id: number;
    title: string;
}  
  export type photoType={
    albumId:number;
    id: number;
    title:string;
    url: string;
  }
  export type userType={
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
          street: string;
          suite: string;
          city: string;
          zipcode: string;
          geo: {
            lat: string;
            lng: string;
          };
        };
        phone: string;
        website: string;
        company: {
          name: string;
          catchPhrase: string;
          bs: string;
        };
}

    export type todosType =todoType[];
    export type postsType =postType[];
    export type albumsType=albumType[];
    export type photosType=photoType[];
    export type usersType =userType[];