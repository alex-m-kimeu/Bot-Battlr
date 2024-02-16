import { FaHeartbeat } from "react-icons/fa";
import { GiBrokenShield } from "react-icons/gi";
import { GiLightningTrio } from "react-icons/gi";

export const BotCard = ({ bot }) => {
    return (
        <div className="bot_card" key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>Name : <span>{bot.name}</span></h2>
            <h3>Bot Class: <span>{bot.bot_class}</span></h3>
            <h3><FaHeartbeat />: <span style={{ color: bot.health < 70 ? 'red' : 'green' }}>{bot.health}</span></h3>
            <h3><GiLightningTrio />: <span style={{ color: bot.damage < 50 ? 'red' : 'green' }}>{bot.damage}</span></h3>
            <h3><GiBrokenShield />: <span style={{ color: bot.armor < 40 ? 'red' : 'green' }}>{bot.armor}</span></h3>
        </div>
    );
};