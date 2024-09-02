import { useRouteError, useNavigate } from 'react-router-dom';
import App from '../App';

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;

  return (
    <App>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, something went wrong.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>
          <a className="cursor-pointer" onClick={() => navigate(-1)}>
            &larr; Go back
          </a>
        </p>
      </div>
    </App>
  );
};

export default ErrorPage;
