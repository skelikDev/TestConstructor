import React from 'react'
import { AppBar, Grid, Toolbar } from '@material-ui/core'
interface NavbarViewProp {
    login: any
}
export const NavbarView = ({ login }: NavbarViewProp): JSX.Element => {
    return (
        <AppBar>
            <Toolbar variant="dense">
                <Grid container justifyContent={'flex-end'}>
                    {login}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
