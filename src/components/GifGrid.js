import React from 'react'
import GifGridItem from './GifGridItem'
// import getGifs from '../helpers/getGifs'
import {useFetchGifs} from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__delay-2s">{ category }</h3>

            { loading && <p className="animate__animated animate__bounce animate__delay-2s">loading</p>}

            <div className="card-grid">
                {
                    images.map(img =>(
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        
                        />
                    ))
                }

            </div>
        </>
    )
}

