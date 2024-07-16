'use client'
import React, { useEffect, useRef, useState } from 'react'
import { sentences } from './sentence'
import { List, Row ,Col, Button, Space, InputNumber } from 'antd'
import Item from '../components/text-item'
import { AudioMutedOutlined, SoundOutlined } from '@ant-design/icons'

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
  const [sound, setSound] = useState(true)
  const [times, setTimes] = useState<number>(0)
  return (
    <div style={{height: '8000px'}}>
      <Space className='w-full justify-center items-center p-4'>
      <Button onClick={()=>{
          setPlaying(sentences[0].sentence)
         
      }}>播放</Button>
         <Button onClick={()=>{
         setSound(!sound)
         
      }}>声音 {sound ? <SoundOutlined /> : <AudioMutedOutlined />}</Button>
      <InputNumber value={times} onChange={(val) => setTimes(val || 0)}></InputNumber>
      </Space>
      { sentences.map((item, index) => {
        return     <Item  onPlayEnd={(i: number) => {
          if(i < sentences.length) {
            const news = sentences[i + 1].sentence
            setPlaying(news)
          }
        }} index={index} times={times} sound={sound} delay={item.delay}  label={item.sentence}  playing={item.sentence === playing} key={item.original} s={item.original} p={item.phonetic} t={item.translation}></Item>
      })}
    </div>
  )
}



export default Page