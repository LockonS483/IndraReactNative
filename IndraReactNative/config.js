let API_URL = 'https://indrasnet.pythonanywhere.com/';

if (process.env.REACT_APP_API_URL) {
  API_URL = process.env.REACT_APP_API_URL;
}

const config = { API_URL };

export default config;