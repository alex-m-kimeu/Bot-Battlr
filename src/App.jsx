import { useState, useEffect } from "react";
import { BotCollection } from "./pages/bots/BotCollection"
import { Navbar } from "./pages/navbar/Navbar"
import { BotArmy } from "./pages/bots/BotArmy";

function App() {
  const [bots, setBots] = useState([])

    // Fetch Bots
    useEffect(() => {
        fetch("https://bot-battlr-api.vercel.app/bots")
        .then((resp) => resp.json())
        .then(data => setBots(data))
    }, [])

  return (
    <>
    <Navbar />
    <main>
      <BotArmy />
      <BotCollection bots={bots}/>
    </main>
    </>
  )
}

export default App
