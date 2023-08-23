import { useState, useEffect } from 'react';

async function getData() {
    return new Promise((resolve, reject) => {
        fetch(
            `https://discord.com/api/guilds/993855292448198756/widget.json`,
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

export default function DiscordServerInfo() {
    const [count, setCount] = useState(0);

    // data.members ( array )

    useEffect(() => {
        getData()
            .then((data) => {
                setCount(data?.presence_count || 0);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="text-white"></div>
            <div className="text-white">
                <p className="font-lgf font-bold">DISCORD SERVER</p>
                <p className="text-[var(--description-color)]">
                    <span className="font-bold text-[var(--main-color)]">{count > 0 ? count : 'Keine'}</span> Nutzer Online
                </p>
            </div>
        </div>
    );
}
