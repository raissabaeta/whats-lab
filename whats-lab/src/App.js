import Header from "./components/Header/Header";
import { useState } from "react";
import { AppContainer } from "./GlobalStyle"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { initialMessages } from "./assets/initialMessages";

function App() {

  const [currSender, setCurrSender] = useState("Me")
  const [senders, setSenders] = useState([
    "Me",
    "Fulano",
    "Beltrana",
    "Ciclana",
    "Astrodev"
  ])

  const [messages, setMessages] = useState(initialMessages)

  const onChangeSender = (e) => {
    setCurrSender(e.target.value)
  }

  const deleteMessage = (idToDelete) => {
      if (window.confirm("Are you sure you want to delete this message?")) {
        const newMessages = [...messages] // precisamos fazer uma cópia para não ferir a regra de estado do react

        const indexToDelete = newMessages.findIndex(
            (message) => message.id === idToDelete // retorna um booleano
            // se true, é porque encontrou o item e o findIndex retorna o índice encontrado
            // se false, pula para o próximo item da lista
            // caso encerre a iteração da lista e não encontre o item, retorna -1
        )

        if (indexToDelete > -1) { // se encontrou o item, o índice será sempre maior que -1
            newMessages.splice(indexToDelete, 1)
            setMessages(newMessages)
        }
    }
}

const sendMessage = (e, text, cbClearText) => {
        if(e.key === "Enter"){
           const newMessage = {
            id: `${currSender}-${Math.ceil(Math.random() * 100000)}`,
            sender: currSender,
            content: text,
            createdAt: new Date()
                .toLocaleTimeString(
                    "en-US",
                    {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true
                    }
                ) 
           }
           const newMessages = [...messages, newMessage]
           setMessages(newMessages)
           cbClearText("")
        }
    }


  return (
    <AppContainer>
      <Header 
      currSender={currSender}
      senders={senders}
      onChangeSender={onChangeSender}
      />


      <Main messages={messages} deleteMessage={deleteMessage}/>

      <Footer sendMessage={sendMessage}/>
    </AppContainer>

  );
}

export default App;
