import React from 'react'
import { Backdrop, CircularProgress, Container, Grid } from '@material-ui/core'

const Loader = (): JSX.Element => {
    return (
        <Container>
            <Grid container alignItems="center" justifyContent="center">
                <Backdrop open>
                    <CircularProgress />
                </Backdrop>
            </Grid>
        </Container>
    )
}

export default Loader
