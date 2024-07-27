'use client'
import React, { useEffect, useRef, useState } from 'react'
import { sentences } from './sentence'
import { List, Row ,Col, Button, Space, InputNumber, Select } from 'antd'
import Item from '../components/text-item'
import { AudioMutedOutlined, SoundOutlined } from '@ant-design/icons'
import VoiceSlect from '@/components/voice'
import NoSleep from 'nosleep.js';
import Course1 from './cource.json'

const textes : Record<string, typeof sentences>   = {
    'co' : sentences,
    'genAI1': Course1
} 

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

  const [client, setClient] = useState(false)
  useEffect(()=>{
    setClient(true)
  },[])


  // useEffect(()=>{

  //   requestWakeLock();
  //   return ()=>{
  //     releaseWakeLock();
  //   }

  // } ,[])
  useEffect(()=>{
    const noSleep = new NoSleep();
    document.addEventListener('click', function enableNoSleep() {
      document.removeEventListener('click', enableNoSleep, false);
      noSleep.enable();
    }, false);

  },[])

   const [content, setContent] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('content')) || "genAI1")
  const [playing, setPlaying] = useState("")
  const [sound, setSound] = useState(true)
  const [times, setTimes] = useState<number>(0)
  const [v, setV] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('voice')) || "en-CA-ClaraNeural")
  const [delay, setDelay] = useState(() => !!((typeof window !== 'undefined' && localStorage.getItem('delay')) || "delay"))
  if(!client) return null;
  return (
    <div style={{height: '8000px'}}>
      <Space className='w-full  flex-wrap  justify-center items-center p-4'>
        <Select value={content} onChange={(v)=> { 
          setContent(v)
          localStorage.setItem('content', v);
         }} options={Object.keys(textes).map( k => {
          return {
            value: k,
            label: k
          }
        })}></Select>
        <VoiceSlect className="w-[250px]"value={v}  onChange={(v:any) => {
            setV(v)
            localStorage.setItem('voice', v);
        }
         
          }></VoiceSlect>
      <Button onClick={()=>{
          setPlaying(textes[content][0].sentence)
         
      }}>播放</Button>
         <Button onClick={()=>{
         setSound(!sound)
         
      }}>声音 {sound ? <SoundOutlined /> : <AudioMutedOutlined />}</Button>
      <InputNumber value={times} onChange={(val) => setTimes(val || 0)}></InputNumber>
      <Button onClick={()=>  { 
        localStorage.setItem('delay', !delay + '');
        setDelay(!delay)

        }}>{delay ? "有延迟" : "没有延迟"}</Button>
      </Space>
      { textes[content].map((item, index) => {
        return     <Item  onPlayEnd={(i: number) => {
          if(i < textes[content].length) {
            const news = textes[content][i + 1].sentence
            setPlaying(news)
          }
        }} v={v} index={index} times={times} sound={sound} enanbleDelay={delay} delay={item.delay}  label={item.sentence}  playing={item.sentence === playing} key={item.original} s={item.original} p={item.phonetic} t={item.translation}></Item>
      })}
    </div>
  )
}



export default Page