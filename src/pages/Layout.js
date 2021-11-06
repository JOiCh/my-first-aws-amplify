import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import { useState } from 'react';

import {AmplifySignOut} from "@aws-amplify/ui-react";
import Grid from '@mui/material/Grid'


const Layout = ({children}) => {
    return (
        <Grid container spacing={0}>
            <LayoutAppBar />
            <Grid item xs={12}>
                {children}
            </Grid>
            {/* {children} */}
        </Grid>
    )
}
export default Layout

const LayoutAppBar = () => {
    // const [Drawer, setDrawer] = useState(false)
    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                {/* <IconButton
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => setDrawer(true)}
                >
                    <MenuIcon />
                </IconButton> */}
                <AmplifySignOut />
                {/* empty area */}
                <Box sx={{ flexGrow: 1 }}></Box>
                <IconButton aria-label="account of current user" onClick={(e) => console.log(e)}>
                    <AccountCircle />
                </IconButton>
            </Toolbar>
            {/* <Drawer
                variant="temporary"
                anchor="left"
                open={Drawer}
                onClose={() => setDrawer(false)}                  
            >
                <AmplifySignOut />
            </Drawer> */}
        </AppBar>
    )
}
