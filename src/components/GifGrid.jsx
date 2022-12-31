import React from 'react'
import { useState ,useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category )
console.log({isLoading});
console.log(images)
    
    return (
        <>
            <h3> {category} </h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <ol>{images.map( ( image ) =>(
                   <GifItem 
                   key={ image.id } 
                  {...image}
                   />
                ))
               }
            </ol>
    
        </>
    )
}
