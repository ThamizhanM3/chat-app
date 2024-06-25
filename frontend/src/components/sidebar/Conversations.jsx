import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
    return (
        <div className=' py-2 flex flex-col overflow-auto h-64'>
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    )
}

export default Conversations