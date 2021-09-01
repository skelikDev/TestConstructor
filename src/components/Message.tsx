import React from 'react'

interface MessageProps {
    children: React.ReactNode
}

const Message = ({ children }: MessageProps): JSX.Element => {
    return <div>{children}</div>
}

export default Message
