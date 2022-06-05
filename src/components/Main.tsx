import { useEffect, useState } from 'react';

import config from '../config/config.json';
import defaultTranslation from '../config/default_en_text.json';
import { IParams } from '../Interfaces/IParams';
import { IText } from '../Interfaces/IText';
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

    // Fetching text according to language
    //"http://localhost:5002/api/config/jd/txt/en"
    fetch(`${config.BACKEND.HTTP_PROTOCOL}://${config.BACKEND.BACKEND_URL}/api/config/${config.RESTURANT.NAME}/${config.BACKEND.CONFIGS.TEXT}/${config.RESTURANT.DEFAULT_LANGUAGE}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (Object.keys(result).length) {
          setTranslations(result);
        } else {
          setTranslations(defaultTranslation);
        }
      })
      .catch(error => {
        console.log('error', error);
        // setTranslations(defaultParameters);
      });

    // Fetching Resturants parameters
    fetch(`${config.BACKEND.HTTP_PROTOCOL}://${config.BACKEND.BACKEND_URL}/api/config/${config.RESTURANT.NAME}/${config.BACKEND.CONFIGS.PARAMETERS}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (Object.keys(result).length) {
          setParameters(result);
        } else {
          setParameters(config.RESTURANT.PARAMETERS);
        }
      })
      .catch(error => {
        console.log('error', error);
        setParameters(config.RESTURANT.PARAMETERS);
      });

  },[])
  return (
    <>
      {Object.keys(translations).length > 0 ? <Home params={parameters as IParams} text={translations as IText} /> : <SplashScreen />}
    </>
  );
}
export default Main;