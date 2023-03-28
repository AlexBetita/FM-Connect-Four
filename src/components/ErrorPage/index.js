import { useRouteError, Link } from "react-router-dom";

import './index.css'

import shock from '../../assets/images/shock.svg'
import cfgLogo from '../../assets/images/logo.svg'

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div style={{'height' : '80px', 'display': 'flex', 
                   'alignItems' :'center'}}>
        
        <Link to={'/'}>
            <img className='logo' src={cfgLogo} alt='logo'/>
        </Link>

      </div>
      
      <h1>Oops!</h1>
      <img src={shock} alt='shock'/>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="error-status">
        <i>{error.statusText || error.message}</i>
        
      </p>
    </div>
  );
}

export default ErrorPage;