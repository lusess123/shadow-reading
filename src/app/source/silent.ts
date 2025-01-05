const list =  [
    {
      "sentence": "Hello <span style=\"color:red;\">d</span>arkness my old <span style=\"color:red;\">f</span>riend, I’ve come to talk with you again.",
      "original": "Hello darkness my old friend, I’ve come to talk with you again.",
      "translation": "你好，黑暗中我昔日的朋友，我又来和你谈一谈。",
      "phonetic": "[ˈhɛloʊ ˈdɑːrknəs maɪ oʊld frɛnd, aɪv kʌm tu tɔːk wɪð ju əˈgɛn]"
    },
    {
      "sentence": "Because a <span style=\"color:red;\">v</span>ision softly <span style=\"color:red;\">c</span>reeping left its seeds while I was sleeping.",
      "original": "Because a vision softly creeping left its seeds while I was sleeping.",
      "translation": "因为有一个轻柔潜入的幻象，在我熟睡时播下了种子。",
      "phonetic": "[bɪˈkɔːz ə ˈvɪʒən ˈsɔːftli ˈkriːpɪŋ lɛft ɪts siːdz waɪl aɪ wəz ˈsliːpɪŋ]"
    },
    {
      "sentence": "And the <span style=\"color:red;\">v</span>ision that was <span style=\"color:red;\">p</span>lanted in my brain still remains within the sound of silence.",
      "original": "And the vision that was planted in my brain still remains within the sound of silence.",
      "translation": "而这个幻象被植入我的脑海，仍在寂静的声音中回荡。",
      "phonetic": "[ænd ðə ˈvɪʒən ðæt wʌz ˈplæntɪd ɪn maɪ breɪn stɪl rɪˈmeɪnz wɪˈðɪn ðə saʊnd ʌv ˈsaɪləns]"
    },
    {
      "sentence": "In restless <span style=\"color:red;\">d</span>reams I walked <span style=\"color:red;\">a</span>lone, narrow streets of cobblestone.",
      "original": "In restless dreams I walked alone, narrow streets of cobblestone.",
      "translation": "在不安的梦境里我独自漫步，穿过狭窄的鹅卵石街道。",
      "phonetic": "[ɪn ˈrɛstləs driːmz aɪ wɔːkt əˈloʊn, ˈnæroʊ striːts ʌv ˈkɑːbəlstoʊn]"
    },
    {
      "sentence": "Neath the <span style=\"color:red;\">h</span>alo of a street <span style=\"color:red;\">l</span>amp, I turned my collar to the cold and damp.",
      "original": "Neath the halo of a street lamp, I turned my collar to the cold and damp.",
      "translation": "在街灯的光环下，我竖起衣领抵御寒冷与潮湿。",
      "phonetic": "[niːθ ðə ˈheɪloʊ ʌv ə striːt læmp, aɪ tɜːrnd maɪ ˈkɑːlər tu ðə koʊld ænd dæmp]"
    },
    {
      "sentence": "When my eyes were <span style=\"color:red;\">s</span>tabbed by the flash of a <span style=\"color:red;\">n</span>eon light that split the night and touched the sound of silence.",
      "original": "When my eyes were stabbed by the flash of a neon light that split the night and touched the sound of silence.",
      "translation": "当我的双眼被霓虹灯的闪光刺痛，那灯光划破夜色，触及寂静之声。",
      "phonetic": "[wɛn maɪ aɪz wɜr stæbd baɪ ðə flæʃ ʌv ə ˈniːɒn laɪt ðæt splɪt ðə naɪt ænd tʌtʃt ðə saʊnd ʌv ˈsaɪləns]"
    },
    {
      "sentence": "And in the <span style=\"color:red;\">n</span>aked light I <span style=\"color:red;\">s</span>aw ten thousand people maybe more.",
      "original": "And in the naked light I saw ten thousand people maybe more.",
      "translation": "在那裸露的光线下，我看见成千上万的人，也许更多。",
      "phonetic": "[ænd ɪn ðə ˈneɪkɪd laɪt aɪ sɔː tɛn ˈθaʊzənd ˈpiːpəl ˈmeɪbi mɔːr]"
    },
    {
      "sentence": "People <span style=\"color:red;\">t</span>alking without <span style=\"color:red;\">s</span>peaking, people hearing without listening.",
      "original": "People talking without speaking, people hearing without listening.",
      "translation": "人们在说却没有言语，在听却没有真正倾听。",
      "phonetic": "[ˈpiːpəl ˈtɔːkɪŋ wɪˈðaʊt ˈspiːkɪŋ, ˈpiːpəl ˈhɪrɪŋ wɪˈðaʊt ˈlɪsənɪŋ]"
    },
    {
      "sentence": "People <span style=\"color:red;\">w</span>riting songs that voices never share.",
      "original": "People writing songs that voices never share.",
      "translation": "人们写着歌曲，却从未让声音传递。",
      "phonetic": "[ˈpiːpəl ˈraɪtɪŋ sɔːŋz ðæt ˈvɔɪsɪz ˈnɛvər ʃɛr]"
    },
    {
      "sentence": "No one <span style=\"color:red;\">d</span>are disturb the sound of <span style=\"color:red;\">s</span>ilence.",
      "original": "No one dare disturb the sound of silence.",
      "translation": "无人敢打扰这寂静之声。",
      "phonetic": "[noʊ wʌn dɛr dɪˈstɜːrb ðə saʊnd ʌv ˈsaɪləns]"
    },
    {
      "sentence": "<span style=\"color:red;\">F</span>ools said I, you do not know silence like a cancer grows.",
      "original": "Fools said I, you do not know silence like a cancer grows.",
      "translation": "我说你们这些傻子啊，你们并不知道寂静就像癌症般蔓延。",
      "phonetic": "[fuːlz sɛd aɪ, ju du nɒt noʊ ˈsaɪləns laɪk ə ˈkænsər ɡroʊz]"
    },
    {
      "sentence": "Hear my <span style=\"color:red;\">w</span>ords that I might <span style=\"color:red;\">t</span>each you, take my arms that I might reach you.",
      "original": "Hear my words that I might teach you, take my arms that I might reach you.",
      "translation": "听我的话，也许我能教会你；牵起我的手，也许我能触及你。",
      "phonetic": "[hɪr maɪ wɜːrdz ðæt aɪ maɪt tiːtʃ ju, teɪk maɪ ɑːrmz ðæt aɪ maɪt riːtʃ ju]"
    },
    {
      "sentence": "But my <span style=\"color:red;\">w</span>ords like silent raindrops <span style=\"color:red;\">f</span>ell and echoed in the wells of silence.",
      "original": "But my words like silent raindrops fell and echoed in the wells of silence.",
      "translation": "但我的话语就像无声的雨滴坠落，在寂静的深井中回响。",
      "phonetic": "[bʌt maɪ wɜːrdz laɪk ˈsaɪlənt ˈreɪndrɒps fɛl ænd ˈɛkoʊd ɪn ðə wɛlz ʌv ˈsaɪləns]"
    },
    {
      "sentence": "And the people <span style=\"color:red;\">b</span>owed and <span style=\"color:red;\">p</span>rayed to the neon god they made.",
      "original": "And the people bowed and prayed to the neon god they made.",
      "translation": "人们鞠躬并向他们创造的霓虹神明祈祷。",
      "phonetic": "[ænd ðə ˈpiːpəl baʊd ænd preɪd tu ðə ˈniːɒn ɡɑːd ðeɪ meɪd]"
    },
    {
      "sentence": "And the <span style=\"color:red;\">s</span>ign flashed out its warning in the words that it was forming.",
      "original": "And the sign flashed out its warning in the words that it was forming.",
      "translation": "那个标志闪烁着警示，用它正在形成的话语。",
      "phonetic": "[ænd ðə saɪn flæʃt aʊt ɪts ˈwɔːrnɪŋ ɪn ðə wɜːrdz ðæt ɪt wʌz ˈfɔːrmɪŋ]"
    },
    {
      "sentence": "And the sign said the <span style=\"color:red;\">w</span>ords of the prophets are written on the subway <span style=\"color:red;\">w</span>alls and tenement halls, and whispered in the sounds of silence.",
      "original": "And the sign said the words of the prophets are written on the subway walls and tenement halls, and whispered in the sounds of silence.",
      "translation": "那个标志说，先知的话语被写在地铁墙上与公寓走廊里，并在寂静之声中低声回荡。",
      "phonetic": "[ænd ðə saɪn sɛd ðə wɜːrdz ʌv ðə ˈprɒfɪts ɑːr ˈrɪtən ɒn ðə ˈsʌbweɪ wɔːlz ænd ˈtɛnəmənt hɔːlz, ænd ˈwɪspərd ɪn ðə saʊndz ʌv ˈsaɪləns]"
    }
  ]


  export default list ;