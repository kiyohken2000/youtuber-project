import axios from "axios";
import { palmKey } from "../openaiKeys";

const apiUrl = 'https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage';
const errorMessage = 'すみません。よくわかりませんでした'

const generateMessage = async({inputText}) => {
  try {
    const {data} = await axios.post(apiUrl, {
      prompt: { messages: [{ content: inputText }] },
      temperature: 0.1,
      candidateCount: 1,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        key: palmKey,
      },
    });
    if(data && data.candidates && data.candidates[0].content) {
      return data.candidates[0].content
    } else {
      return errorMessage
    }
  } catch (error) {
    console.log('generate message error:', error);
    return errorMessage
  }
}

const generateChatMessage = async({messages}) => {
  try {
    const formatedChatlog = formatChatlog({messages})
    const {data} = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + palmKey,
      {
        contents: formatedChatlog,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if(data && data.candidates && data.candidates[0] && data.candidates[0].content.parts[0].text) {
      return data.candidates[0].content.parts[0].text
    } else {
      return errorMessage
    }
  } catch (error) {
    console.log('generate chat message error:', error);
    return errorMessage
  }
}

const formatChatlog = ({messages}) => {
  const result = messages.map((item) => {
    const { text, user } = item
    return {
      role: roleSwitch({user}),
      parts: [
        {
          text: text
        }
      ]
    }
  }).reverse()
  return result
}

const roleSwitch = ({user}) => {
  const { _id } = user
  const roles = {
    1: 'user',
    2: 'model',
    'default': 'user'
  }
  return (roles[_id] || roles['default'])
}

export { generateMessage, generateChatMessage }