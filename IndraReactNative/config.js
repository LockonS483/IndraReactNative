let API_URL = 'https://indrasnet.pythonanywhere.com/';
let PROPS_URL = API_URL + 'models/props/'

if (process.env.REACT_APP_API_URL) {
  API_URL = process.env.REACT_APP_API_URL;
  PROPS_URL = process.env.REACT_APP_API_URL + 'models/props/';
}

const config = { API_URL, PROPS_URL };

export default config;