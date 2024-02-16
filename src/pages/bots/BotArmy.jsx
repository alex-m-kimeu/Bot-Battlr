import army from "../../assets/army.png";

export const BotArmy = () => {
    return (
        <div className="army_content">
            <span className="army_container"><h1>My Army <span><img src={army} alt="Army"/></span></h1></span>
        </div>
    );
};