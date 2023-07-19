import { useState, useEffect } from "react";

const URL = `https://discord.com/api/guilds/993855292448198756/widget.json`;

export async function getData() {
  const response = await fetch(URL, { method: "GET", mode: "no-cors" }).catch(
    () => {},
  );
  if (!response || response.status !== 200) return false;

  const data = await response.json().catch(() => {});

  return data;
}

export default function DiscordServerInfo() {
  const [count, setCount] = useState(0);

  // data.members ( array )

  async function init() {
    let initialData = await getData().catch(() => {});
    if (!initialData) return setTimeout(init, 60000);

    setCount(initialData?.members?.length || 0);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="text-white"></div>
      <div className="text-white">
        <p className="font-bold font-lgf">DISCORD SERVER</p>
        <p className="text-[var(--description-color)]">
          <span className="font-bold text-[var(--main-color)]">
            {count > 0 ? count : "Keine"}
          </span>{" "}
          Nutzer Online
        </p>
      </div>
    </div>
  );
}
