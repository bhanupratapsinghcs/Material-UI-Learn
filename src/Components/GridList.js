import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        // height: 1000,
    },
}));




function ImageGridList(props) {
    const classes = useStyles();
    const [imageData, setImageData] = useState([])
    const getGridListCols = () => {
        if (isWidthUp('lg', props.width)) {
            return 4;
        }

        if (isWidthUp('md', props.width)) {
            return 3;
        }

        if (isWidthUp('sm', props.width)) {
            return 2;
        }

        return 1;
    }

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
            {imageData && <GridList spacing={18} cellHeight={350} className={classes.gridList} cols={getGridListCols()}>
                {imageData.map((tile) => (
                    <GridListTile key={tile.id} cols={tile.cols || 1}>
                        <img src={tile.urls.regular} alt={tile.alt_description} />
                    </GridListTile>
                ))}
            </GridList>}
        </div>
    );
}

export default withWidth()(ImageGridList);