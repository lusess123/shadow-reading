import { useCallback, useMemo, useRef, useState } from 'react';
import Countdown from 'react-countdown';
const Completionist = () => <span>已经到期了</span>;
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};
export function CountDownClock(props : { time : Date, onComplete: ()=>void  }) {
  return <Countdown
  date={props.time}
  renderer={renderer}
  onComplete={() => {
    props.onComplete()
  }}
/>
}


export function useCountDownClock() {
     const funRef =  useRef<any>(()=> {} );
    //  const fun = useCallback(()=> { funRef.current() } , [funRef])
     const [time, setTime] = useState(0);
     const setTimeOut = useCallback((funVoid: ()=>void, time : number )=> {
       funRef.current = funVoid;
       setTime(time)
     } , [])
     
     const dom = useMemo(()=> {
       return  <Countdown
     date={new Date(new Date().getTime() + time)}
     renderer={renderer}
     onComplete={() => {
        if(funRef.current) {
            funRef.current();
        }
     }}
   />
     } , [time])
   return  { dom, setTimeOut }
}