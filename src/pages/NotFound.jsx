import { Link } from "react-router-dom"

function NotFound() {
    //const error = useRouteError();

    return (
        <div className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__message'>Oups! La page que<br className="not-found__message__break"/> vous demandez n'existe pas.</p>
            <Link className='not-found__link' to="/">
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}

export default NotFound