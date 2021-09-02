import React, { useContext, useState } from 'react'
import { Box, Button, Container, Grid, TextField } from '@material-ui/core'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from './Loader'
import { serverTimestamp } from 'firebase/firestore'

const Chat = (): JSX.Element => {
    const { auth, db, query, doc, where, collection, addDoc, getDocs } =
        useContext(Context)
    const [user] = useAuthState(auth)
    const [input, setInput] = useState('')
    const citiesRef = collection(db, 'cities')

    const q = query(citiesRef, where('capital', '==', true))
    // const getDocuments = async () => {
    //     const querySnapshot = await getDocs(q)
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, ' => ', doc.data())
    //     })
    // }
    // getDocuments()
    const a = collection(db, 'messages')
    console.log(a)
    const [messages, loading] = useCollectionData(a)

    const sendMessages = async () => {
        await addDoc(collection(db, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoUrl,
            text: input,
            createdAt: serverTimestamp(),
        })
        setInput('')
    }
    if (loading) return <Loader />

    return (
        <Container>
            <Container>
                <Grid
                    container
                    style={{ height: '100vh' }}
                    justifyContent="flex-start"
                    direction={'column'}
                >
                    <Box
                        height={'50vh'}
                        marginTop={'50px'}
                        marginBottom={'50px'}
                        border={'1px solid red'}
                    >
                        d
                    </Box>
                    <Box border={'1px solid red'} height={'10vh'}>
                        <TextField
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                            value={input}
                            maxRows={2}
                        />
                        <Button>Отправить</Button>
                    </Box>
                </Grid>
            </Container>
        </Container>
    )
}

export default Chat
