import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';


const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
    }
    return 'dark'; // dark theme as the default;
};

function changeTheme(theme) {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme', theme);
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }
}

const Toggle = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        changeTheme(theme);
    }, [theme]);

    return (
        <button 
            className="w-10 h-10 flex items-center justify-center rounded-xl transition-all"
            style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)'
            }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle Light/Dark Mode"
        >
            {theme === 'dark' ? (
                <SunIcon width={20} className="hover:text-[var(--accent-primary)] transition-colors" />
            ) : (
                <MoonIcon width={20} className="hover:text-[var(--accent-primary)] transition-colors" />
            )}
        </button>
    );
};

export default Toggle;