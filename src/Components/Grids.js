import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    paper: {
        background: "grey",
        elevation: 3,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

export default function Grids() {
    const classes = useStyle();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper elevation={3} className={classes.paper}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore in recusandae obcaecati voluptate mollitia laboriosam, reiciendis dolor at quisquam, quod molestias qui tempora nobis maxime aliquam, itaque cum totam voluptates. Fuga maiores provident delectus, ducimus, unde vitae minima ut libero tempore impedit numquam odit eos excepturi cupiditate quaerat. Qui deserunt vel hic harum error alias modi, velit expedita distinctio ut debitis molestiae illum nihil cupiditate adipisci ducimus tempore culpa deleniti, omnis optio. Ipsam cum rerum, possimus eius sed iure quisquam, fugiat, rem recusandae architecto excepturi animi ullam ab. Iste, accusamus? Aliquam voluptate inventore, reiciendis quos et aspernatur eius quae eum.</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum accusantium ea asperiores quam sit. Numquam, dolorum necessitatibus? Velit, eum rerum, voluptatibus ea alias a iusto quod obcaecati impedit repellat sint accusamus assumenda facere nisi tempora officia repudiandae animi? Esse consequatur a molestiae, nam fugit ipsa deleniti amet quaerat eum aspernatur!</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam eius harum et itaque amet adipisci dicta cumque, natus perspiciatis.</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate repellendus ut qui ab, omnis porro iste perferendis veritatis ea inventore aut! Ipsam inventore aut dignissimos corporis quam ipsum dicta error.</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse architecto dolores quisquam eligendi alias unde, laudantium aspernatur, commodi necessitatibus quaerat et recusandae rerum ratione minima, illo quis quae enim.</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio perferendis obcaecati pariatur labore, magnam exercitationem tenetur, suscipit nostrum quidem, nihil quisquam. Quisquam dolorum commodi corrupti sint accusantium ad cum?</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum illum quae voluptate, nihil mollitia repellat a neque quos quasi voluptatum accusantium numquam dicta iusto soluta impedit hic! Perferendis, corrupti.</Paper>
            </Grid>
        </Grid>
    )
}
