import React, { useState } from 'react'

export default function Button() {
    const [imageData, setImageData] = useState({})
    const fetchImages = () => {
        console.log("https://api.unsplash.com/photos/?client_id=" + process.env.REACT_APP_API_KEY);
        fetch("https://api.unsplash.com/photos/?client_id=" + process.env.REACT_APP_API_KEY)
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
            <img src={imageData[3].urls.regular} />
        </>
    )
}
