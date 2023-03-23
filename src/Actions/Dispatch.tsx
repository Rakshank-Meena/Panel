import { addCinemaClient, removeCinemaClient } from '../Store/Slices/CinematographySlice'
import { addContentClient, removeContentClient } from '../Store/Slices/ContentSlice'
import { addDirectionClient, removeDirectionClient } from '../Store/Slices/DirectionSlice'
import { addClient, addClientLink, removeClient, removeClientLink } from '../Store/Slices/PhotographySlice'
import { addPosterClient, removePosterClient } from '../Store/Slices/PosterSlice'
import { addVideoClient, removeVideoClient } from '../Store/Slices/VideographySlice'

const Dispatch=(sliceType:string,payload?:any,reduxFn?:any)=>{
    if (sliceType==='addCinemaClient'){
        return reduxFn(addCinemaClient(payload))
    }
    if (sliceType==='removeCinemaClient'){
        return reduxFn(removeCinemaClient(payload))
    }
    if(sliceType==='addContentClient'){
        return reduxFn(addContentClient(payload))
    }
    if (sliceType==='removeContentClient'){
        return reduxFn(removeContentClient(payload))
    }
    if (sliceType==='addDirectionClient'){
        return reduxFn(addDirectionClient(payload))
    }
    if (sliceType==='removeDirectionClient'){
        return reduxFn(removeDirectionClient(payload))
    }
    if (sliceType==='addClient'){
        return reduxFn(addClient(payload))
    }
    if (sliceType==='removeClient'){
        return reduxFn(removeClient(payload))
    }
    if(sliceType==='removeClientLink'){
        return reduxFn(removeClientLink(payload))
    }
    if(sliceType==='addClientLink'){
        return reduxFn(addClientLink(payload))
    }
    if (sliceType==='addPosterClient'){
        return reduxFn(addPosterClient(payload))
    }
    if (sliceType==='removePosterClient'){
        return reduxFn(removePosterClient(payload))
    }
    if (sliceType==='addVideoClient'){
        return reduxFn(addVideoClient(payload))
    }
    if (sliceType==='removeVideoClient'){
        return reduxFn(removeVideoClient(payload))
    }
    if(sliceType==='sendData'){
        return 
    }
    return console.log('invalid sliceType')
}
export default Dispatch