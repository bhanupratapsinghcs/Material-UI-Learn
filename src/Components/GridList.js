import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        // height: 1000,
    },
}));




export default function ImageGridList() {
    const classes = useStyles();
    const [imageData, setImageData] = useState([])
    useEffect(() => {
        fetch("https://api.unsplash.com/photos/?per_page=50&client_id=" + process.env.REACT_APP_API_KEY)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImageData(data)
            })

    }, [])
    // const fetchImages = () => {
    //     console.log(imageData);
    // }
    return (
        <div className={classes.root}>
            {/* <button onClick={() => fetchImages()}> Button</button> */}
            {imageData && <GridList cellHeight={360} className={classes.gridList} cols={3}>
                {imageData.map((tile) => (
                    <GridListTile key={tile.id} cols={tile.cols || 1}>
                        <img src={tile.urls.regular} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>}
        </div>
    );
}