import { useEffect } from 'react';

import Header from '../components/Home/Header';
import Content from '../components/Home/Content';

export default function Home() {
    useEffect(() => {
        document.title = 'KuchenGames | Home';
    }, []);

    return (
        <>
            <Header />
            <Content />
        </>
    );
}
