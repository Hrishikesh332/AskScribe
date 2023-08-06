import React from 'react'

const Services = () => {
  return (
    <div className='my-10 m-2 p-5 rounded border-solid border-2 border-gray-200' id='services'>
      <p className='font-bold text-3xl my-6 ml-4'>A Better Way</p>
      <ul className='leading-9 mb-8 ml-6'>
        <li>💬 <bold className='font-semibold'>PDF Chat like Experience:</bold> Offers a chat like interface that allows users to interact with PDF files in a conversational manner, making it intuitive and user friendly.</li>
        <li>❓ <bold className='font-semibold'>Question Answering:</bold> Utilizes the power of OpenAI for question answering, enabling users to ask specific questions about the PDF content and receive relevant answers.</li>
        <li>⏰ <bold className='font-semibold'>Time saving:</bold> Eliminate the need for manual searching within PDFs by providing instant answers to users' questions, helping them find the information they need more efficiently.</li>
        <li>🦜 <bold className='font-semibold'>🔗Langchain Integration:</bold> By leveraging Langchain's capabilities, AskScribe enhances its question answering with PDF functionality, improving accuracy and understanding of complex queries.</li>
        <li>⚙️ <bold className='font-semibold'>Natural Language Processing:</bold> Natural language processing techniques to understand and interpret user queries, enabling a more conversational and intuitive interaction.</li>
        <li>📑 <bold className='font-semibold'>Save and Bookmark:</bold> Users can save important sections or bookmark specific pages within the PDF for quick reference, allowing for easier retrieval of information.</li>   
      </ul>
    </div>
  )
}

export default Services