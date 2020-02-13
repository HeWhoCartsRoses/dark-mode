import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
export const useDarkMode = () => {
    const [right, setRight] = useLocalStorage('dark');
    useEffect(
        () => {
            if (right) {
                document.querySelector('body').classList.add('dark-mode');
            } else {
                document.querySelector('body').classList.remove('dark-mode');
            }
        },
        [right]
    );
    return [right, setRight];
};