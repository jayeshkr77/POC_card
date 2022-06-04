import { useEffect, useState } from 'react';

import config from '../config/config.json';
import defaultTranslation from '../config/default_en_text.json';
import Home from './Home';
import SplashScreen from './SplashScreen';
function Main() {
  const [translations, setTranslations] = useState({});
  const [parameters, setParameters] = useState({});
  useEffect(() => {
    let requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    //"http://localhost:5002/api/config/jd/txt/en"
    fetch(`${config.BACKEND.HTTP_PROTOCOL}://${config.BACKEND.BACKEND_URL}/api/config/${config.RESTURANT.NAME}/${config.BACKEND.CONFIGS.TEXT}/${config.RESTURANT.DEFAULT_LANGUAGE}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        if (Object.keys(translations).length) {
          setTranslations(result);
        } else {
          setTranslations(defaultTranslation);
        }
      })
      .catch(error => {
        console.log('error', error);
        // setTranslations(defaultParameters);
      });

    fetch(`${config.BACKEND.HTTP_PROTOCOL}://${config.BACKEND.BACKEND_URL}/api/config/${config.RESTURANT.NAME}/${config.BACKEND.CONFIGS.PARAMETERS}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        if (Object.keys(translations).length) {
          setParameters(result);
        } else {
          setParameters(config.RESTURANT.PARAMETERS);
        }
      })
      .catch(error => {
        console.log('error', error);
        // setParameters(config.RESTURANT.PARAMETERS);
      });

  })
  return (
    Object.keys(translations).length > 0 ? <Home params={parameters}/> : <SplashScreen />
  );
}
export default Main;