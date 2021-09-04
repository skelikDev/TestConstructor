import React from 'react'
import { Backdrop, CircularProgress, Container, Grid } from '@material-ui/core'
import { firebaseOctopus } from '../FirebaseOctopus'
import { observer } from 'mobx-react'
import { debug } from '../env'

const Loader = observer((): JSX.Element | null => {
    debug.i('render', 'Loader')
    if (firebaseOctopus.loading) {
        return (
            <Container>
                <Grid container alignItems="center" justifyContent="center">
                    <Backdrop open>
                        <CircularProgress />
                    </Backdrop>
                </Grid>
            </Container>
        )
    } else {
        return null
    }
})

export default Loader
