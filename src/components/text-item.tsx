import { Button, List, Spin, Typography } from 'antd'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, { useEffect, useRef, useState } from 'react'
import { AudioOutlined, SoundOutlined } from '@ant-design/icons';
const { Text } = Typography;

export default function Item({ label ,s, p, t, playing,  onPlayEnd, index }: any) {

  const audioRef = useRef<any>(null);
  const [playCount, setPlayCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaite, setIsWaite] = useState(false);
  const settimeRef = useRef<any>(null);

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
        if (playCount < 3) {
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

  return <div>

      <audio onEnded={handleEnded} onLoadedMetadata={handleLoadedMetadata} ref={audioRef} src={`/api/text?s=${s}`} />
      <Button onClick={playAudio} type='text'>
        <Text strong={isPlaying} > <div dangerouslySetInnerHTML={{__html : ((index + 1 ) + '.' + label)}}></div></Text>
      </Button>

      <div className='ml-4'>{isPlaying && <Text>[{p}]</Text>}</div>
      <div className='ml-4'>{isPlaying && <Text> ({t})</Text>}</div>
      <p className='ml-4'> { isPlaying && (isWaite ? "已经" : "正在")}{isPlaying ? `播放第${playCount}/3次` : ""} {isPlaying && (isWaite ? <span><AudioOutlined ></AudioOutlined>跟读</span> : <SoundOutlined />)} {!!duration && (duration+ '秒')}</p>


  </div>
}