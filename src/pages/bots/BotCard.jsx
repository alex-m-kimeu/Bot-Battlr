export const BotCard = ({ bot }) => {
    return (
        <div className="bot_card" key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>Name : <span>{bot.name}</span></h2>
            <h3>Health: <span style={{ color: bot.health < 70 ? 'red' : 'green' }}>{bot.health}</span></h3>
            <h3>Damage: <span style={{ color: bot.damage < 50 ? 'red' : 'green' }}>{bot.damage}</span></h3>
            <h3>Amor: <span style={{ color: bot.armor < 40 ? 'red' : 'green' }}>{bot.armor}</span></h3>
            <h3>Bot Class: <span>{bot.bot_class}</span></h3>
        </div>
    );
};