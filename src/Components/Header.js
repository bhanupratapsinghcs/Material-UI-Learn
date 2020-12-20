// import { AppBar } from '@material-ui/core'
import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'


export default function Header() {
    return (
        <AppBar>
            <Toolbar>
                <Typography> This is header</Typography>
            </Toolbar>
        </AppBar>
    )
}
