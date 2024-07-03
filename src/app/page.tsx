'use client'
import React, { useEffect, useRef, useState } from 'react'
import { sentences } from './sentence'
import { List, Row ,Col, Button } from 'antd'
import Item from '../components/text-item'

// let preventSleepInterval: any = null;

// const preventSleep = () => {
//   if(!window) return 
//     if ('ontouchstart' in window) {
//         preventSleepInterval = setInterval(() => {
//             const event = new Event('touchstart');
//             window.dispatchEvent(event);
//         }, 30000); // 每30秒触发一次
//     }
// };

// const stopPreventSleep = () => {
//     if (preventSleepInterval) {
//         clearInterval(preventSleepInterval);
//     }
// };

// document.getElementById('startPreventSleepButton').addEventListener('click', preventSleep);
// document.getElementById('stopPreventSleepButton').addEventListener('click', stopPreventSleep);


// let wakeLock: any = null;

        // const requestWakeLock = async () => {
        //     if ('wakeLock' in navigator) {
        //         try {
        //             wakeLock = await navigator.wakeLock.request('screen');
        //             console.log('Wake Lock is active');
                    
        //             wakeLock.addEventListener('release', () => {
        //                 console.log('Wake Lock was released');
        //             });
        //         } catch (err: any) {
        //             console.error(`${err.name}, ${err.message}`);
        //         }
        //     } else {
        //         console.log('Wake Lock API not supported.');
        //     }
        // };
        // preventSleep();

        // const releaseWakeLock = async () => {
        //     if (wakeLock !== null) {
        //         await wakeLock.release();
        //         wakeLock = null;
        //         console.log('Wake Lock released manually');
        //     }
        //     stopPreventSleep();
        // };


function Page() {

  // useEffect(()=>{

  //   requestWakeLock();
  //   return ()=>{
  //     releaseWakeLock();
  //   }

  // } ,[])

  const [playing, setPlaying] = useState("")
  return (
    <div style={{height: '8000px'}}>
      <Button onClick={()=>{
          setPlaying(sentences[0].sentence)
         
      }}>播放</Button>
      { sentences.map((item, index) => {
        return     <Item  onPlayEnd={(i: number) => {
          if(i < sentences.length) {
            const news = sentences[i + 1].sentence
            setPlaying(news)
          }
        }} index={index}  label={item.sentence}  playing={item.sentence === playing} key={item.original} s={item.original} p={item.phonetic} t={item.translation}></Item>
      })}
    </div>
  )
}



export default Page