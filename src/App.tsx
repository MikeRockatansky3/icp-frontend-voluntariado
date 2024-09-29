import { useState } from "react";
import "./App.css"
import Content from "./Content";
import OpenChatFrame from "./OpenChatFrame";
import Layout from "./components/layout/layout";
type Chat = {
  path: string;
  title: string;
};



  

function App() {
  const [leftChat, setLeftChat] = useState<Chat>({
    path: "",
    title: "Selecciona una de las conversaciones",
  });
  
  return (
    <>
    <Layout></Layout>
    
      <>
        <OpenChatFrame {...leftChat} />
      </>
      <Content
        onSelectLeftChat={(path, title) => setLeftChat({ path, title })}
       
      />
      </>
   
  );
}

export default App;
