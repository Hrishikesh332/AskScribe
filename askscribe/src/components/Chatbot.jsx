import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import OpenAI from "openai";
import { useState } from "react";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true
});

function Chatbot({Pdf_Content}){
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hii, I am Askscribe a Chatbot! I can help you with pdfs.",
      sender: "Askscribe"
    }
  ])

  const handleSend = async(message) => {
    const newMessage= {
      message: message,
      sender: 'user',
      direction: "outgoing"
    }
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true)
    await processMessageToChatGPT(newMessages);

  async function processMessageToChatGPT(chatMessages){
    let apiMessages = chatMessages.map((messageObject) => {
      let role = ""
      if (messageObject.sender==="Askscribe"){
        role = "assistant"
      }
      else{
        role = "user"
      }
      return {role:role, content:messageObject.message}
    });

    const systemMessage = {
      role: "system",
      content: `
      Your name is Askcribe and you are a Chatbot designed for helping the user to get information from the given Pdf_Content.
      User will ask you questions and you need to search it in the Pdf_Content and answer the user according to the information
      present in the Pdf_Content after summarizing it in short or as much user asks for.
      If anything related to the question is not available in the Pdf_Content inform about it to the user in a good tone.
      
      Pdf_Content = ${Pdf_Content}
  
      Example: 
      Example_Pdf_Content = "We've trained a model called ChatGPT which interacts in a conversational way. 
      The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests."
      Messages:
      [
        {role:'system' , content: "Hii, I am Askscribe a Chatbot! I can help you with pdfs."},
        {role:'user', content: "Can you give me overview about the pdf?"},
        {role:'assistant', content:"Sure, Provided pdf introduces about the large large language model Chatgpt, and tells about how it works."},
        {role:'user', content:"What are the functionalities ?"},
        {role:'assistant', content:"Chatgpt can answer questions properly according to situations."},
        {role:'user', content:"Okay, Thank you!"},
        {role:'assistant', content:"Always welcome, anywaya if you need any other assistant do let me know."}
      ]
     `
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    }); 

    const responseMessage = response.choices[0].message.content
    const newMessage = {
      message: responseMessage,
      sender: 'Askscribe'
    }

    setMessages([...chatMessages, newMessage])
    setTyping(false)
  }
}

  return (
    <MainContainer>
      <ChatContainer>
        <MessageList
         typingIndicator = { typing ? <TypingIndicator content = "Asckribe is typing"/> : null }
         scrollBehavior="smooth" 
        >
          {messages.map((message, i) => {
            return <Message key={i} model={message} />
          })}
        </MessageList>
        <MessageInput placeholder="Type message here" onSend={handleSend} />
      </ChatContainer>
    </MainContainer>
  )
}

export default Chatbot