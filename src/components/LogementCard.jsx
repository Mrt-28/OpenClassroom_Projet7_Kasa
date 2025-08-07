function LogementCard(props) {

    return (
        <div key={props.id} className="logement-card">          
            <div className="logement-card__title">{props.title}</div>
            <div className="logement-card__deco"></div>
            <img className="logement-card__cover" src={props.cover}/>
        </div>
    )
}

export default LogementCard