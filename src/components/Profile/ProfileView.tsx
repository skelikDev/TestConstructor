import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { ProfileBlock } from './ProfileBlock/ProfileBlock'
import { TestsBlock } from './TestsBlock/TestsBlock'

export const ProfileView = (): JSX.Element => {
    return (
        <Grid
            container
            style={{ height: '100vh' }}
            justifyContent="flex-start"
            direction={'column'}
        >
            <Box paddingTop="50px" flexGrow={1} bgcolor={'lightcoral'}>
                <TestsBlock />
                <ProfileBlock />
            </Box>
        </Grid>
    )
}
