import { useState, useEffect } from 'react';

async function getData() {
    return new Promise((resolve, reject) => {
        fetch(
            `https://api.mcsrvstat.us/2/kuchengames.de`,
            {
                method: 'GET'
            },
            10000
        )
            .then((res) => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export default function MinecraftServerInfo() {
    const [count, setCount] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        getData()
            .then((data) => {
                setMax(data?.players?.max || 0);
                setCount(data?.players?.online || 0);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="text-white"></div>
            <div className="text-white">
                <p className="font-lg font-bold">MINECRAFT SERVER</p>
                <p className="text-[var(--description-color)]">
                    {count > 0 ? (
                        <>
                            <span className="font-bold text-[var(--main-color)]">{count}</span>
                            {' / '}
                            <span className="font-bold text-[var(--main-color)]">{max}</span>
                        </>
                    ) : (
                        <span className="font-bold text-[var(--main-color)]">Keine</span>
                    )}{' '}
                    Spieler Online
                </p>
            </div>
        </div>
    );
}
