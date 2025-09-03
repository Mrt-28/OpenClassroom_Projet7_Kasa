
function ScenicHeader(props) {
   return (
        <div className='scenic-header'>
            <img className={`scenic-header__cover ${props.subClassName}`} src={props.img} />
            <h1 className='scenic-header__texte'>{props.txt}</h1>
        </div>
    )
}

export default ScenicHeader