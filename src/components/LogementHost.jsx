
function LogementHost(props) {
    return (
        <div className='logement__host'>
            <img className="logement__host__picture" src={props.host.picture} alt={props.host.name} />
            <div className="logement__host__name">{props.host.name}</div>
        </div>
    )
}

export default LogementHost