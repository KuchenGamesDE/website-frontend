import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

import { classNames } from '../util';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            <button
                type="button"
                onClick={scrollToTop}
                className={classNames(
                    isVisible ? 'opacity-100' : 'opacity-0',
                    'cursor-pointer bg-zinc-800 hover:shadow-lg shadow-sm hover:text-[var(--main-color)] shadow-[var(--main-color)] hover:shadow-[var(--main-color)] focus:ring-0 border-transparent focus:border-transparent inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:ring-2 focus:ring-[var(--accent-color)] focus:outline-none'
                )}
            >
                <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    );
}
