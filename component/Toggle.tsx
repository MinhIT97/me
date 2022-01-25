import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';


const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
    }

    return 'light' // light theme as the default;
};


function changeTheme(theme) {
    localStorage.setItem('theme', theme);

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

const Toggle = () => {

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        changeTheme(theme);
    }, [theme]);



    return (
        <div className="transition  duration-100 ease-in-out rounded-full cursor-pointer ">
            {theme === 'dark' ? (
                <SunIcon
                    width={20}
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            ) : (
                <MoonIcon
                    width={20}
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            )}
        </div>
    );
};

export default Toggle;