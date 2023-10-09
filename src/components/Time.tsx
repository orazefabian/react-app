import { useEffect, useState } from "react";
import "../App.css";

interface TimeProps {
  time: string | null;
}

const Time: React.FC<TimeProps> = ({ time }) => {
  const [timeDiff, setTimeDiff] = useState<string | null>(null);
  useEffect(() => {
    let currTime: number = new Date().getHours();
    let remote: number = Number(time?.split(" ")[1].split(":")[0]);
    let diff = remote - currTime;
    console.log(diff);
    setTimeDiff((diff >= 0 ? "+" : "") + diff);
  }, [time]);
  return (
    <>
      <div className="shadow">
        <span className="">Difference to local time: {timeDiff} hours</span>
      </div>
    </>
  );
};

export default Time;
