import { useEffect } from 'react';

import Header from '../components/Team/Header';
import Content from '../components/Team/Content';

export default function Team() {
    useEffect(() => {
        document.title = 'KuchenGames | Team';
    }, []);

    return (
        <>
            <Header />
            <Content />
        </>
    );
}
