import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "apidd0b602e"
const path = '/emails'; 

const App = () => {
  const [input, setInput] = useState("")
  const [email, setEmails] = useState([])

  //Function to fetch from our backend and update email array
  function getEmail(e) {
    let emailId = e.input
    API.get(myAPI, path + "/" + emailId)
       .then(response => {
         console.log(response)
         let newEmails = [...email]
         newEmails.push(response)
         setEmails(newEmails)

       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    
    <div className="App">
      <h1>No Bitches?</h1>
      <b>Ignore the rest please. HEHE</b>
      <div>
          <input placeholder="placeholder" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
      </div>
      <br/>
      <button onClick={() => getEmail({input})}>Get placeholder From Backend</button>

      <h2 style={{visibility: email.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
       email.map((thisEmail, index) => {
         return (
        <div key={thisEmail.emailId}>
          <span><b>PlaceholderId:</b> {thisEmail.emailId} - <b>PlaceholderName</b>: {thisEmail.emailName}</span>
        </div>)
       })
      }
    </div>
  )
}

export default App;