import { BotCard } from "./BotCard";

export const BotCollection = ({ bots }) => {
    
    return (
        <div className="bot_container">
            <h1>Bot Collection</h1>
            <p>The one and only spot in the known universe where you can custom build your own Bot Army</p>
            <div className="bot_collection">
                {bots.map((bot) => {
                    return <BotCard key={bot.id} bot={bot}/>
                })}
            </div>
        </div>
    );
};