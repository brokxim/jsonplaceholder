import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setAlbums} from '../../redux/actions';
import AlbumsWrapper from './AlbumsWrapper';
import { initialStateType } from '../../types';
const Albums = () => {
  const {menu} = useParams();
  console.log(menu);

  const dispatch = useDispatch();
  useEffect(()=>{setAlbums(dispatch)},[]);

  const data = useSelector((state:initialStateType) => state.Albums);
  console.log(data)

  
  return (
    <AlbumsWrapper>
        <h2>Albums</h2>
        {data.map((v:any) => <div className="shadow rounded d-flex mb-3">
                    <span className="me-3">{v.userId}</span>
                    <p>{v.title}</p>
                </div>)}
    </AlbumsWrapper>
  )
}

export default Albums