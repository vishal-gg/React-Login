export const SERVER_BASE_URL = "https://assignment-backend.vercel.app"

export const useLocalStorage = ({ key, value }) => {
    const storedValue = localStorage.getItem(key);
    let cachedData = storedValue ? JSON.parse(storedValue) : null;
  
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
      cachedData = value
    }
    if (value === null) {
      localStorage.removeItem(key)
    }
  
    return cachedData;
  }

  export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/