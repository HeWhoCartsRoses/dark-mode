import { useState } from 'react';
export const useLocalStorage = (val, initVal) => {
    if (typeof val !== 'string') {
        throw new Error('val ain`t a string.');
    }
    const [walue, setWalue] = useState(() => {
        if (window.localStorage.getItem(val)) {
            return JSON.parse(window.localStorage.getItem(val));
        } else {
            window.localStorage.setItem(val, JSON.stringify(initVal));
            return initVal;
        }
    });
    const setValue = (value) => {
        setWalue(value);
        window.localStorage.setItem(val, JSON.stringify(value));
    };
    return [walue, setValue];
};