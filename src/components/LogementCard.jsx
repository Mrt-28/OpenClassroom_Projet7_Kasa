function LogementCard(props) {

    return (
        <div key={props.id} className="logement-card">
            <h2 className="logement-card__title">{props.title}</h2>
            <div className="logement-card__deco"></div>
            <div className="logement-card__cover-container">
                <img className="logement-card__cover-container__cover" src={props.cover} alt={props.title} />
            </div>
        </div>
    )
}

export default LogementCard