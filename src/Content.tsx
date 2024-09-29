import ChatSelector from "./ChatSelector";
import "./Content.css";

type Props = {
  onSelectLeftChat: (path: string, title: string) => void;
 
};

function Content({ onSelectLeftChat}: Props) {
  return (
    <div className="content">
      <div className="header">
        <h1>Open chat</h1>
      </div>
      <div className="right">
        <div className="left">
          <h4>Elige una conversación de las comunidades disponibles</h4>

          

          <ChatSelector
            onSelect={onSelectLeftChat}
            path="/community/vkldd-zaaaa-aaaar-bffra-cai/channel/109207523114499623422521385048110597754"
            title="Árboles"
          />

          <ChatSelector
            onSelect={onSelectLeftChat}
            path="/community/3blap-xiaaa-aaaar-ayq3a-cai/channel/49830836458839613131538583647697742366"
            title="Paz y yoga"
          />
        </div>

        
       
      </div>
      <div className="footer">
        <h3></h3>
      </div>
    </div>
  );
}

export default Content;
