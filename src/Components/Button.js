import React, { useState } from 'react'

export default function Button() {
    const [imageData, setImageData] = useState({})
    const fetchImages = () => {
        fetch("https://api.unsplash.com/photos/?client_id=VD1a8dkVIqVn8yeEkpoZGeFe1Tp5Aq5F2FNbJcYyT1I")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImageData(data)
            })
        console.log(imageData)
    }
    const clickHandle = () => {
        console.log(imageData)
    }
    return (
        <>
            <button onClick={() => fetchImages()}> Button</button>
            <button onClick={() => clickHandle()}> Butto2</button>
            {/* <img src={imageData[3].urls.regular} /> */}
        </>
    )
}
