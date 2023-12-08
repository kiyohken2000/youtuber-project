import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import { GiftedChat } from 'react-native-gifted-chat'
import { generateMessage } from '../../utils/textGenerate';
import moment from 'moment';

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const onRecieveNewMessage = async() => {
      if(messages[0]) {
        const { text, user } = messages[0]
        if(user._id === 1) {
          setIsLoading(true)
          const reply = await generateMessage({inputText: text})
          const botMessage = {
            _id: `${moment().unix()}`,
            createdAt: new Date(),
            text: reply,
            user: {
              _id: 2
            }
          }
          setMessages(previousMessages =>
            GiftedChat.append(previousMessages, botMessage),
          )
          setIsLoading(false)
        }
      }
    }
    onRecieveNewMessage()
  }, [messages])

  const onSend = useCallback((messages) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <ScreenTemplate>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
            renderAvatar={null}
            isTyping={isLoading}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})