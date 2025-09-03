
function LogementRating(props) {
    const stars = Array(5).fill(0)

    return (
        <div className='rating'>
            <span className='rating__stars'>
                {stars.map((_, index) => (
                    <span key={index} className={`rating__star ${index < props.rating ? 'rating__star__filled' : ''}`}>
                        ★
                    </span>
                ))}
            </span>
        </div>
    )
}

export default LogementRating