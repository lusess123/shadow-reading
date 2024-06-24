'use client'
import React, { useRef, useState } from 'react'
import { sentences } from './sentence'
import { List, Row ,Col, Button } from 'antd'
import Item from '../components/text-item'


function Page() {

  const [playing, setPlaying] = useState("")
  return (
    <div>
      <Button onClick={()=>{
          setPlaying(sentences[0].sentence)
      }}>播放</Button>
      <List
        size="large"
        header={<div>Sentences</div>}
        bordered
        dataSource={sentences}
        renderItem={(item, index) => <List.Item>
          <Item onPlayEnd={(i: number) => {
            if(i < sentences.length) {
              const news = sentences[i + 1].sentence
              setPlaying(news)
            }
          }} index={index}  label={item.sentence}  playing={item.sentence === playing} key={item.original} s={item.original} p={item.phonetic} t={item.translation}></Item>
        </List.Item>}
      />
    </div>
  )
}



export default Page