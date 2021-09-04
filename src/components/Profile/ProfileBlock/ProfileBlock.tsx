import React from 'react'
import { Box } from '@material-ui/core'
import { firebaseOctopus } from '../../../FirebaseOctopus'
import { observer } from 'mobx-react'

// interface ProfileBlockProp {
//   children: React.ReactNode
// }

export const ProfileBlock = observer((): JSX.Element | null => {
    const fillerImg =
        'https://cctaxlaw.com/wp-content/uploads/2018/10/noimg.jpg'
    const user = firebaseOctopus.user
    if (user === null) return null
    const photoUrl = user.photoURL ? user.photoURL : fillerImg
    const name = user.displayName
    return (
        <div>
            <img src={photoUrl} />
            <Box>{name}</Box>
        </div>
    )
})
