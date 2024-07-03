'use cilent'
import { Button, Card, List, Spin, Typography } from 'antd'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, { useEffect, useRef, useState } from 'react'
import { AudioOutlined, SoundOutlined } from '@ant-design/icons';
const { Text } = Typography;

const maxCount = 5 ;

export default function Item({ label ,s, p, t, playing,  onPlayEnd, index }: any) {

  const audioRef = useRef<any>(null);
  const [playCount, setPlayCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaite, setIsWaite] = useState(false);
  const settimeRef = useRef<any>(null);
  const myRef = useRef<any>(null);

    // useEffect(() => {
       
    // }, []);


  useEffect(() => {
    if(!audioRef.current.currentTime && playing) {
      playAudio()
    } else {
      if(!playing) {
        timeRef.current = 0 ;
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setIsWaite(false)
        setPlayCount(0)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing])
  
  const timeRef = useRef<number>(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const playAudio = () => {
    if (audioRef.current) {
      if (myRef.current) {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
       }
      timeRef.current = new Date().getTime();
      if (isPlaying) {
        if (settimeRef.current) {
          clearTimeout(settimeRef.current)
        }
        setIsPlaying(false);
        setPlayCount(0)
        audioRef.current.currentTime = 0;
        setIsWaite(false)
        audioRef.current.pause();


      } else {
        setPlayCount(playCount + 1);
        setIsPlaying(true);
        audioRef.current.play();
      }

      // playWithDelay(playCount);

    }
  };

  // const playWithDelay = (_playCount: number) => {
  //   if (audioRef.current && _playCount < 3) {
  //     audioRef.current.play();
  //     audioRef.current.addEventListener('ended', handleEnded);
  //   }
  // };

  function handleEnded() {
     const time = new Date().getTime() - timeRef.current;
     setDuration(time/1000)
    // alert(playCount)
    // if (playCount < 3) {
      setIsWaite(true)
      settimeRef.current = setTimeout(() => {
        if (playCount < maxCount) {
          setIsWaite(false)
          timeRef.current = new Date().getTime();
          setPlayCount(playCount + 1);
          audioRef.current.play();
        } else {
          timeRef.current = 0 ;
          setIsPlaying(false);
          setIsWaite(false)
          setPlayCount(0)
          if(onPlayEnd) onPlayEnd(index)
    
        }
      }, time);
    // }
    // else {
    //   timeRef.current = 0 ;
    //   setIsPlaying(false);
    //   setIsWaite(false)
    //   setPlayCount(0)
    //   if(onPlayEnd) onPlayEnd(index)

    // }
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return <Card className='!text-xl' ref={myRef}>

      <audio onEnded={handleEnded} onLoadedMetadata={handleLoadedMetadata} ref={audioRef} src={`/api/text?s=${s}`} />
      <div onMouseUp={(e)=> {
           if(!window || !window.getSelection) return 
            var selectedText = (window as any).getSelection().toString();
           if(selectedText){
            // alert(selectedText)
            // 使用Web Speech API播放选中文本
            var utterance = new SpeechSynthesisUtterance(selectedText);
            speechSynthesis.speak(utterance);
           }
      }}>
        <Text className='break-words break-all !text-xl' strong={isPlaying} > <div dangerouslySetInnerHTML={{__html : ((index + 1 ) + '.' + label)}}></div></Text>
      </div>
      <div className='ml-4 break-words break-all !text-xl'>{ <div>[{p}]</div>}</div>
      <div className='ml-4 break-words break-all !text-xl'>{ <div> ({t})</div>}</div>
      <p className='ml-4 break-words break-all !text-xl'> { (isWaite ? "已经" : "正在")}{isPlaying ? `播放第${playCount}/${maxCount}次` : ""} {isPlaying && (isWaite ? <span><AudioOutlined ></AudioOutlined>跟读</span> : <SoundOutlined />)} {!!duration && (duration+ '秒')}
      <Button onClick={playAudio} >播放</Button>
      <Button onClick={()=>{
        if (myRef.current) {
          myRef.current.scrollIntoView({ behavior: 'smooth' });
         }
      }} >置顶</Button>
      </p>


  </Card>
}