import React from 'react'
import Messages from './Messages'
import MessagesInput from './MessagesInput'
import NoChatSelected from './NoChatSelected'

const MessageContainer = () => {
    const noSelectedMessages = false
    return (
        <div className=' md:min-w-[450px] flex flex-col'>
            {noSelectedMessages ? <NoChatSelected /> : (
                <>
                <div className=' bg-slate-500 px-4 py-2 mb-2'>
                    <span className=' label-text'>
                        To:
                    </span>
                    <span className=' text-gray-900 font-bold'>
                        Sanga Thamizhan
                    </span>
                </div>
                <Messages />
                <MessagesInput />
            </> 
            )}
            
        </div>
    )
}

export default MessageContainer