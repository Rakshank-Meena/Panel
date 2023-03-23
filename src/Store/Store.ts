import {configureStore} from '@reduxjs/toolkit'
import CinematographySliceReducer from './Slices/CinematographySlice';
import ContentSliceReducer from './Slices/ContentSlice';
import DirectionSliceReducer from './Slices/DirectionSlice';
import PhotographySliceReducer from './Slices/PhotographySlice';
import PosterSliceReducer from './Slices/PosterSlice';
import  userSliceReducer  from './Slices/UserSlice'
import VideographySliceReducer from './Slices/VideographySlice';


const store= configureStore({
    reducer:{
        users:userSliceReducer,    
        posterStore:PosterSliceReducer,
        videoStore:VideographySliceReducer,
        photographyStore:PhotographySliceReducer,
        directionStore:DirectionSliceReducer,
        contentStore:ContentSliceReducer,
        cinemaStore:CinematographySliceReducer
    }
})
export default store;