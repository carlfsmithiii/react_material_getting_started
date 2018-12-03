import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        React & Material-UI Sample Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
