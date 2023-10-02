
import React from 'react'
// import { colors, fonts } from '../../../utils'
import Self from './Self'
import DoctorChat from './DoctorChat'

const ChatItem = ({ isMe }) => {
  if (isMe) {
    return <Self />
  } else {
    return <DoctorChat />
  }
  
}

export default ChatItem