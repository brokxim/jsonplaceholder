import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard'
import { setPhotos } from '../../redux/actions';
import PhotosWrapper from './PhotosWrapper'
import {initialStateType} from '../../types'

const Photos = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setPhotos(dispatch);
    }, [])

    const data = useSelector((state:initialStateType) => state.Photos);
             console.log(data)
    return (
        <PhotosWrapper>
            <h2>Photos</h2>
            {data.map((v:any) => <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-6">
                    <div className="card rounded mb-4">
                        <img src={v.thumbnailUrl} alt="not photo" />
                        <div className="d-flex">
                            <span>{v.albumId}.</span>
                            <p>{v.id}</p>
                            <p>{v.title}</p>
                        </div>
                    </div>
                </div>
            </div>)}
        </PhotosWrapper>
    )
}

export default Photos