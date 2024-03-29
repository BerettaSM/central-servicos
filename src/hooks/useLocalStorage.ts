import { useEffect, useState } from "react";

const useLocalStorage = (defaultValue: string, key: string) => {

    const [value, setValue] = useState(() => {

        const localStorageValue = window.localStorage.getItem(key);

        return localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue;

    });

    useEffect(() => {
        
        window.localStorage.setItem(key, JSON.stringify(value));

    }, [key, value]);

    return [value, setValue];

}

export { useLocalStorage };