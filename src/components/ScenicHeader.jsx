import '../sass/header.scss'

function ScenicHeader(props) {
   return (
        <div className='scenic-header'>
            <img className='scenic-header__cover' src={props.img} />
            <p className='scenic-header__texte'>{props.txt}</p>
        </div>
    )
}

export default ScenicHeader