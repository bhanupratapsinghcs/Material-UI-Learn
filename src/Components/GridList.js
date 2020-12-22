import React, { useState } from 'react';
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
        width: 500,
        height: 450,
    },
}));


export default function ImageGridList() {
    const classes = useStyles();
    const [imageData, setImageData] = useState({})
    const fetchImages = () => {
        fetch("https://api.unsplash.com/photos/?client_id=VD1a8dkVIqVn8yeEkpoZGeFe1Tp5Aq5F2FNbJcYyT1I")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImageData(data)
            })
    }

    return (
        <div className={classes.root}>
            <button onClick={() => fetchImages()}> Button</button>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {imageData.map((tile) => (
                    <GridListTile key={tile} cols={tile.cols || 1}>
                        <img src={tile.urls.regular} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}