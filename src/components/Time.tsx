import { useEffect, useState } from "react";
import "../App.css";

interface TimeProps {
  time: string | null;
}

function getRemoteTimeHoursFromUTCString(
  time: string | null,
  currTime: number
): number {
  try {
    let hours: number = Number(time?.split(" ")[1].split(":")[0]);
    return hours;
  } catch (error) {
    return currTime;
  }
}

const Time: React.FC<TimeProps> = ({ time }) => {
  const [timeDiff, setTimeDiff] = useState<string | null>(null);
  useEffect(() => {
    let currTime: number = new Date().getHours();
    let remote: number = getRemoteTimeHoursFromUTCString(time, currTime);
    let diff = remote - currTime;
    console.log(time);
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
