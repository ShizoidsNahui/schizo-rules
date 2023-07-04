import React, { useEffect, useMemo } from "react";
import "./index.css";
import "./glitch.css";
import Item from "./Item";
import useSound from "use-sound";
import me from "./components/EGGMAN.mp3";

import gif1 from "./gifs/1.gif";
import gif2 from "./gifs/2.gif";
import gif3 from "./gifs/3.gif";
import gif4 from "./gifs/4.gif";
import gif5 from "./gifs/5.gif";
import gif6 from "./gifs/6.gif";
import gif7 from "./gifs/7.gif";
import gif8 from "./gifs/8.gif";
import gif9 from "./gifs/9.gif";
import gif10 from "./gifs/10.gif";

function App() {
  const [play] = useSound(me, { value: 0.1, playbackRate: 1.3 });
  useEffect(play, [play]);
  const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10];
  const gif = useMemo(() => gifs[~~(Math.random() * 10)], []);

  const BANrules: string[] = [
    "Расчлененку",
    "Наркотики",
    "Терроризм",
    "Нацизм (чуть можно)",
    "Письки",
    "Спам",
    "Политсрачи",
    "Шутки про родных",
    "Я так захотел",
    "Любые угрозы убийства/насилия",
    "Треш",
    "Если забанили - фейкоакки банятся",
  ];

  const REPORTrules: string[] = [
    "Тупить чаще 1 раза в 30 минут",
    "Чересчур умничать запрещено",
    "Голосовухи от саня мыловар короче 3х секунд запрещены",
  ];

  return (
    <div className="App py-[100px] container mx-auto px-[300px] bg-red-600">
      <a href="https://t.me/shizoidsnahui">
        <div className="flex justify-center mb-[100px]">
          <img src={gif} alt="ГИФОЧКА" />
        </div>
      </a>

      <header className="App-header text-black flex justify-center items-center h-[120px] bg-black box">
        <a href="https://t.me/+jGJm-_ICEN4yOGQ6">
          <div className="glitch text-white text-5xl font-semibold glitch">
            <p className="line">ПРАВИЛА ЧАТА</p>
            <p className="line">ПРАВИЛА ЧАТА</p>
            <p className="line">ПРАВИЛА ЧАТА</p>
            <p className="line">ПРАВИЛА ЧАТА</p>
            <p className="line">ПРАВИЛА ЧАТА</p>
            <p className="line">ПРАВИЛА ЧАТА</p>
            <p className="line">ПРАВИЛА ЧАТА</p>
            <p className="line">ПРАВИЛА ЧАТА</p>
            <p className="line">ПРАВИЛА ЧАТА</p>
          </div>
        </a>
      </header>

      <main className="bg-white py-10">
        <p className="text-5xl font-semibold pl-[50px] mb-[20px]">В Бан за:</p>
        <ol className="list-decimal pl-20 mb-[100px]">
          {BANrules.map((rule) => (
            <Item rule={rule} />
          ))}
        </ol>

        <p className="text-5xl font-semibold pl-[50px] mb-[20px]">
          Предупреждение за:
        </p>
        <ol className="list-decimal pl-20">
          {REPORTrules.map((rule) => (
            <Item rule={rule} />
          ))}
        </ol>
      </main>
    </div>
  );
}

export default App;
