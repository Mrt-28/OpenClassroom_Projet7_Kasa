import { useRouteError } from "react-router-dom";

function NotFound() {
    //const error = useRouteError();

    return (
        <div id="error-page">
            <h1>404</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                
            </p>
        </div>
    );
}

export default NotFound;