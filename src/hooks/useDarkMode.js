import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [ darkMode, setDarkMode ] = useLocalStorage(key, initialValue);

  const toggleDarkMode = e => {
    e.preventDefault();

    if(darkMode === false){
        return setDarkMode(false)
    } else{
        return setDarkMode(true)
    }

    
  }

    useEffect (() => {
        if (darkMode === true) {
            document.body.classList.add("dark-mode");
        } else{
            document.body.classList.remove("dark-mode");
}
        }, [darkMode]);
        return [darkMode, setDarkMode, toggleDarkMode ];
};

export default useDarkMode;