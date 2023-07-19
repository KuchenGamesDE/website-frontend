import { useState, useEffect } from "react";

const URL = `https://api.mcsrvstat.us/2/kuchengames.de`;

export async function getData() {
  const response = await fetch(URL, { method: "GET" }).catch(() => {});
  // console.log(response);
  if (!response || response.status !== 200) return false;

  const data = await response.json().catch(() => {});

  return data;
}

export default function MinecraftServerInfo() {
  const [count, setCount] = useState(0);
  const [max, setMax] = useState(0);

  // data.players.online ( number )
  // data.players.max ( number )

  async function init() {
    let initialData = await getData().catch(() => {});
    // console.log('Server Info Data', initialData);
    if (!initialData) return setTimeout(init, 60000);

    setMax(() => initialData?.players?.max || 0);
    setCount(() => initialData?.players?.online || 0);
  }

  useEffect(() => {
    // console.log('Server Info Init');
    init();
  }, []);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="text-white"></div>
      <div className="text-white">
        <p className="font-bold font-lg">MINECRAFT SERVER</p>
        <p className="text-[var(--description-color)]">
          {count > 0 ? (
            <>
              <span className="font-bold text-[var(--main-color)]">
                {count}
              </span>
              {" / "}
              <span className="font-bold text-[var(--main-color)]">{max}</span>
            </>
          ) : (
            <span className="font-bold text-[var(--main-color)]">Keine</span>
          )}{" "}
          Spieler Online
        </p>
      </div>
    </div>
  );
}
