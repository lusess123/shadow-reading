const t1 = [
  // {
  //   "sentence": "Hi <span style=\"color:red;\">S</span>arah, can you <span style=\"color:red;\">h</span>ear me <span style=\"color:red;\">c</span>learly? Today I'd like to <span style=\"color:red;\">ch</span>at about your i<span style=\"color:red;\">Ph</span>one experience for about 6 <span style=\"color:red;\">m</span>inutes, just like a <span style=\"color:red;\">c</span>asual conversation between <span style=\"color:red;\">f</span>riends. We're not <span style=\"color:red;\">r</span>ecording, just want to <span style=\"color:red;\">h</span>ear your <span style=\"color:red;\">h</span>onest <span style=\"color:red;\">th</span>oughts. Feel <span style=\"color:red;\">f</span>ree to com<span style=\"color:red;\">p</span>lain about <span style=\"color:red;\">a</span>nything, and <span style=\"color:red;\">sh</span>are any useful <span style=\"color:red;\">t</span>ips you've dis<span style=\"color:red;\">c</span>overed. So let's <span style=\"color:red;\">s</span>tart - which i<span style=\"color:red;\">Ph</span>one are you <span style=\"color:red;\">c</span>urrently using? How <span style=\"color:red;\">l</span>ong have you <span style=\"color:red;\">h</span>ad it?",
  //   "original": "Hi Sarah, can you hear me clearly? Today I'd like to chat about your iPhone experience for about 6 minutes, just like a casual conversation between friends. We're not recording, just want to hear your honest thoughts. Feel free to complain about anything, and share any useful tips you've discovered. So let's start - which iPhone are you currently using? How long have you had it?",
  //   "translation": "嗨，Sarah，你能听清楚我说话吗？今天我想和你聊聊你的iPhone使用体验，大约6分钟，就像朋友之间的闲聊一样。我们不会录音，只是想听听你的真实想法。请随意吐槽任何问题，也可以分享你发现的任何有用技巧。那我们开始吧——你现在用的是哪款iPhone？用了多久了？",
  //   "phonetic": "[haɪ ˈsɛrə, kæn ju hɪr mi ˈklɪrli? təˈdeɪ aɪd laɪk tu tʃæt əˈbaʊt jɔːr ˈaɪfoʊn ɪkˈspɪriəns fɔːr əˈbaʊt sɪks ˈmɪnɪts, dʒʌst laɪk ə ˈkæʒuəl ˌkɑːnvərˈseɪʃən bɪˈtwiːn frendz. wɪr nɑːt rɪˈkɔːrdɪŋ, dʒʌst wɑːnt tu hɪr jɔːr ˈɑːnɪst θɔːts. fiːl friː tu kəmˈpleɪn əˈbaʊt ˈeniθɪŋ, ænd ʃɛr ˈeni ˈjuːsfəl tɪps juːv dɪsˈkʌvərd. soʊ lets stɑːrt - wɪtʃ ˈaɪfoʊn ɑːr ju ˈkʌrəntli ˈjuːzɪŋ? haʊ lɔːŋ hæv ju hæd ɪt]"
  // },
  {
    "sentence": "I can <span style=\"color:red;\">h</span>ear you <span style=\"color:red;\">p</span>erfectly. I'm using an i<span style=\"color:red;\">Ph</span>one 14 <span style=\"color:red;\">P</span>ro, <span style=\"color:red;\">h</span>ad it for about a <span style=\"color:red;\">y</span>ear and a <span style=\"color:red;\">h</span>alf now.",
    "original": "I can hear you perfectly. I'm using an iPhone 14 Pro, had it for about a year and a half now.",
    "translation": "我能听得很清楚。我用的是iPhone 14 Pro，已经用了大约一年半了。",
    "phonetic": "[aɪ kæn hɪr ju ˈpɜːrfɪktli. aɪm ˈjuːzɪŋ ən ˈaɪfoʊn fɔːrˈtiːn proʊ, hæd ɪt fɔːr əˈbaʊt ə jɪr ænd ə hæf naʊ]"
  },
  // {
  //   "sentence": "A <span style=\"color:red;\">y</span>ear and a <span style=\"color:red;\">h</span>alf, <span style=\"color:red;\">n</span>ice! Why did you <span style=\"color:red;\">ch</span>oose the i<span style=\"color:red;\">Ph</span>one 14 <span style=\"color:red;\">P</span>ro back <span style=\"color:red;\">th</span>en? Did you con<span style=\"color:red;\">s</span>ider other <span style=\"color:red;\">ph</span>ones?",
  //   "original": "A year and a half, nice! Why did you choose the iPhone 14 Pro back then? Did you consider other phones?",
  //   "translation": "一年半了，不错！当时为什么选择iPhone 14 Pro？你有考虑过其他手机吗？",
  //   "phonetic": "[ə jɪr ænd ə hæf, naɪs! waɪ dɪd ju tʃuːz ði ˈaɪfoʊn fɔːrˈtiːn proʊ bæk ðen? dɪd ju kənˈsɪdər ˈʌðər foʊnz]"
  // },
  {
    "sentence": "Well, my <span style=\"color:red;\">p</span>revious <span style=\"color:red;\">S</span>amsung was getting really <span style=\"color:red;\">s</span>low, and all my <span style=\"color:red;\">f</span>riends kept saying i<span style=\"color:red;\">Ph</span>ones are so much <span style=\"color:red;\">s</span>moother. I also looked at the <span style=\"color:red;\">G</span>oogle <span style=\"color:red;\">P</span>ixel, but ended up going with i<span style=\"color:red;\">Ph</span>one.",
    "original": "Well, my previous Samsung was getting really slow, and all my friends kept saying iPhones are so much smoother. I also looked at the Google Pixel, but ended up going with iPhone.",
    "translation": "嗯，我之前的三星手机变得很慢，我所有的朋友都一直说iPhone要流畅得多。我也看过Google Pixel，但最后还是选择了iPhone。",
    "phonetic": "[wel, maɪ ˈpriːviəs ˈsæmsʌŋ wəz ˈɡetɪŋ ˈrɪəli sloʊ, ænd ɔːl maɪ frendz kept ˈseɪɪŋ ˈaɪfoʊnz ɑːr soʊ mʌtʃ ˈsmuːðər. aɪ ˈɔːlsoʊ lʊkt æt ðə ˈɡuːɡəl ˈpɪksəl, bʌt ˈendɪd ʌp ˈɡoʊɪŋ wɪð ˈaɪfoʊn]"
  }
]

const t2 = [
  // {
  //   "sentence": "Your <span style=\"color:red;\">f</span>riends recommended it - what exactly did they <span style=\"color:red;\">s</span>ay that con<span style=\"color:red;\">v</span>inced you? What made you <span style=\"color:red;\">th</span>ink \"okay, I <span style=\"color:red;\">n</span>eed to get this\"?",
  //   "original": "Your friends recommended it - what exactly did they say that convinced you? What made you think \"okay, I need to get this\"?",
  //   "translation": "你的朋友推荐的——他们具体说了什么让你信服了？是什么让你觉得好吧，我需要买这个？",
  //   "phonetic": "[jɔːr frendz ˌrekəˈmendɪd ɪt - wʌt ɪɡˈzæktli dɪd ðeɪ seɪ ðæt kənˈvɪnst ju? wʌt meɪd ju θɪŋk oʊˈkeɪ, aɪ niːd tu ɡet ðɪs]"
  // },
  {
    "sentence": "They kept <span style=\"color:red;\">sh</span>owing me how <span style=\"color:red;\">f</span>ast their <span style=\"color:red;\">c</span>ameras opened, and the <span style=\"color:red;\">v</span>ideo quality was just in<span style=\"color:red;\">s</span>ane. <span style=\"color:red;\">P</span>lus they said once you go i<span style=\"color:red;\">Ph</span>one, you never go <span style=\"color:red;\">b</span>ack. laughs",
    "original": "They kept showing me how fast their cameras opened, and the video quality was just insane. Plus they said once you go iPhone, you never go back. laughs",
    "translation": "他们一直给我展示他们的相机打开有多快，视频质量简直太棒了。而且他们说一旦用了iPhone，就再也回不去了。（笑）",
    "phonetic": "[ðeɪ kept ˈʃoʊɪŋ mi haʊ fæst ðer ˈkæmərəz ˈoʊpənd, ænd ðə ˈvɪdioʊ ˈkwɑːləti wəz dʒʌst ɪnˈseɪn. plʌs ðeɪ sed wʌns ju ɡoʊ ˈaɪfoʊn, ju ˈnevər ɡoʊ bæk. læfs]"
  },
  // {
  //   "sentence": " Right, right. It's definitely not <span style=\"color:red;\">ch</span>eap though - did you <span style=\"color:red;\">h</span>esitate at all? What <span style=\"color:red;\">f</span>inally made you de<span style=\"color:red;\">c</span>ide?",
  //   "original": " Right, right. It's definitely not cheap though - did you hesitate at all? What finally made you decide?",
  //   "translation": "对，对。不过它确实不便宜——你有过犹豫吗？最终是什么让你下定决心的？",
  //   "phonetic": "[ raɪt, raɪt. ɪts ˈdefɪnətli nɑːt tʃiːp ðoʊ - dɪd ju ˈhezɪteɪt æt ɔːl? wʌt ˈfaɪnəli meɪd ju dɪˈsaɪd]"
  // },
  {
    "sentence": "Oh <span style=\"color:red;\">g</span>od, yes! I was like \"do I really <span style=\"color:red;\">n</span>eed to <span style=\"color:red;\">s</span>pend this much on a <span style=\"color:red;\">ph</span>one?\" But I use my <span style=\"color:red;\">ph</span>one for <span style=\"color:red;\">w</span>ork a lot, taking <span style=\"color:red;\">ph</span>otos of <span style=\"color:red;\">p</span>roducts, and my <span style=\"color:red;\">S</span>amsung <span style=\"color:red;\">c</span>amera was just... <span style=\"color:red;\">t</span>errible. So I <span style=\"color:red;\">f</span>igured it was an in<span style=\"color:red;\">v</span>estment.",
    "original": "Oh god, yes! I was like \"do I really need to spend this much on a phone?\" But I use my phone for work a lot, taking photos of products, and my Samsung camera was just... terrible. So I figured it was an investment.",
    "translation": "天哪，是的！我当时想我真的需要在手机上花这么多钱吗？但我工作中经常用手机，拍产品照片，而我的三星相机简直……太糟糕了。所以我觉得这是一项投资。",
    "phonetic": "[oʊ ɡɑːd, jes! aɪ wəz laɪk du aɪ ˈrɪəli niːd tu spend ðɪs mʌtʃ ɑːn ə foʊn? bʌt aɪ juːz maɪ foʊn fɔːr wɜːrk ə lɑːt, ˈteɪkɪŋ ˈfoʊtoʊz əv ˈprɑːdʌkts, ænd maɪ ˈsæmsʌŋ ˈkæmərə wəz dʒʌst... ˈterəbəl. soʊ aɪ ˈfɪɡjərd ɪt wəz ən ɪnˈvestmənt]"
  },
  // {
  //   "sentence": "That makes total <span style=\"color:red;\">s</span>ense. So when you <span style=\"color:red;\">f</span>irst got it, how was that un<span style=\"color:red;\">b</span>oxing <span style=\"color:red;\">m</span>oment? Did it <span style=\"color:red;\">m</span>atch your ex<span style=\"color:red;\">p</span>ectations?",
  //   "original": "That makes total sense. So when you first got it, how was that unboxing moment? Did it match your expectations?",
  //   "translation": "这完全说得通。那么当你第一次拿到它时，开箱的感觉如何？符合你的期待吗？",
  //   "phonetic": "[ðæt meɪks ˈtoʊtəl sens. soʊ wen ju fɜːrst ɡɑːt ɪt, haʊ wəz ðæt ʌnˈbɑːksɪŋ ˈmoʊmənt? dɪd ɪt mætʃ jɔːr ˌekspekˈteɪʃənz]"
  // },
  {
    "sentence": "Actually, yeah! The <span style=\"color:red;\">p</span>ackaging is so <span style=\"color:red;\">s</span>leek, very <span style=\"color:red;\">A</span>pple-like. I felt pretty ex<span style=\"color:red;\">c</span>ited. Though I have to <span style=\"color:red;\">s</span>ay, <span style=\"color:red;\">s</span>etting it up was a bit of a <span style=\"color:red;\">p</span>ain.",
    "original": "Actually, yeah! The packaging is so sleek, very Apple-like. I felt pretty excited. Though I have to say, setting it up was a bit of a pain.",
    "translation": "其实，是的！包装非常精美，很有苹果风格。我感到很兴奋。不过我得说，设置过程有点麻烦。",
    "phonetic": "[ˈæktʃuəli, jeə! ðə ˈpækɪdʒɪŋ ɪz soʊ sliːk, ˈveri ˈæpəl-laɪk. aɪ felt ˈprɪti ɪkˈsaɪtɪd. ðoʊ aɪ hæv tu seɪ, ˈsetɪŋ ɪt ʌp wəz ə bɪt əv ə peɪn]"
  },
  // {
  //   "sentence": "Oh really? What was <span style=\"color:red;\">t</span>roublesome about the <span style=\"color:red;\">s</span>etup? Which <span style=\"color:red;\">s</span>tep was most <span style=\"color:red;\">f</span>rustrating?",
  //   "original": "Oh really? What was troublesome about the setup? Which step was most frustrating?",
  //   "translation": "哦，真的吗？设置过程有什么麻烦？哪一步最让人沮丧？",
  //   "phonetic": "[oʊ ˈrɪəli? wʌt wəz ˈtrʌbəlsəm əˈbaʊt ðə ˈsetʌp? wɪtʃ step wəz moʊst ˈfrʌstreɪtɪŋ]"
  // },
  {
    "sentence": "The data <span style=\"color:red;\">t</span>ransfer from my <span style=\"color:red;\">S</span>amsung took FOR<span style=\"color:red;\">E</span>VER. Like over an <span style=\"color:red;\">h</span>our. And some <span style=\"color:red;\">a</span>pps didn't <span style=\"color:red;\">t</span>ransfer <span style=\"color:red;\">p</span>roperly, so I had to <span style=\"color:red;\">d</span>ownload them again and lost all my <span style=\"color:red;\">d</span>ata.",
    "original": "The data transfer from my Samsung took FOREVER. Like over an hour. And some apps didn't transfer properly, so I had to download them again and lost all my data.",
    "translation": "从我的三星手机传输数据花了超级长的时间。超过一个小时。而且有些应用没有正确传输，所以我不得不重新下载，丢失了所有数据。",
    "phonetic": "[ðə ˈdeɪtə ˈtrænsfər frʌm maɪ ˈsæmsʌŋ tʊk fərˈevər. laɪk ˈoʊvər ən ˈaʊər. ænd sʌm æps ˈdɪdnt ˈtrænsfər ˈprɑːpərli, soʊ aɪ hæd tu ˈdaʊnloʊd ðem əˈɡen ænd lɔːst ɔːl maɪ ˈdeɪtə]"
  },
  // {
  //   "sentence": "Ugh, that's so an<span style=\"color:red;\">n</span>oying! I can totally under<span style=\"color:red;\">s</span>tand the <span style=\"color:red;\">f</span>rustration. Were there any <span style=\"color:red;\">f</span>eatures you couldn't <span style=\"color:red;\">f</span>igure out right from the <span style=\"color:red;\">s</span>tart?",
  //   "original": "Ugh, that's so annoying! I can totally understand the frustration. Were there any features you couldn't figure out right from the start?",
  //   "translation": "啊，太烦人了！我完全能理解这种挫败感。有没有什么功能你一开始就搞不明白的？",
  //   "phonetic": "[ʌɡ, ðæts soʊ əˈnɔɪɪŋ! aɪ kæn ˈtoʊtəli ˌʌndərˈstænd ðə frʌˈstreɪʃən. wɜːr ðer ˈeni ˈfiːtʃərz ju ˈkʊdnt ˈfɪɡjər aʊt raɪt frʌm ðə stɑːrt]"
  // },
  {
    "sentence": "Yeah! I couldn't find how to <span style=\"color:red;\">c</span>lose <span style=\"color:red;\">a</span>pps for the longest <span style=\"color:red;\">t</span>ime. I kept <span style=\"color:red;\">p</span>ressing <span style=\"color:red;\">b</span>uttons, nothing <span style=\"color:red;\">w</span>orked. And don't get me <span style=\"color:red;\">s</span>tarted on the <span style=\"color:red;\">k</span>eyboard - I was so used to <span style=\"color:red;\">S</span>wiftKey.",
    "original": "Yeah! I couldn't find how to close apps for the longest time. I kept pressing buttons, nothing worked. And don't get me started on the keyboard - I was so used to SwiftKey.",
    "translation": "是的！我很长时间都找不到如何关闭应用。我一直按各种按钮，都没用。别让我开始说键盘的事——我太习惯SwiftKey了。",
    "phonetic": "[jeə! aɪ ˈkʊdnt faɪnd haʊ tu kloʊz æps fɔːr ðə ˈlɔːŋɡəst taɪm. aɪ kept ˈpresɪŋ ˈbʌtənz, ˈnʌθɪŋ wɜːrkt. ænd doʊnt ɡet mi ˈstɑːrtɪd ɑːn ðə ˈkiːbɔːrd - aɪ wəz soʊ juːzd tu ˈswɪftki]"
  }
]

 const t3 = [
  // {
  //   "sentence": " Oh no, the <span style=\"color:red;\">c</span>lassic i<span style=\"color:red;\">Ph</span>one learning <span style=\"color:red;\">c</span>urve! Did you ever have one of those <span style=\"color:red;\">m</span>oments where you <span style=\"color:red;\">th</span>ought \"what were they <span style=\"color:red;\">th</span>inking with this de<span style=\"color:red;\">s</span>ign?\"",
  //   "original": " Oh no, the classic iPhone learning curve! Did you ever have one of those moments where you thought \"what were they thinking with this design?\"",
  //   "translation": "哦不，经典的iPhone学习曲线！你有没有过那种时刻，心想他们设计这个的时候在想什么？",
  //   "phonetic": "[ oʊ noʊ, ðə ˈklæsɪk ˈaɪfoʊn ˈlɜːrnɪŋ kɜːrv! dɪd ju ˈevər hæv wʌn əv ðoʊz ˈmoʊmənts wer ju θɔːt wʌt wɜːr ðeɪ ˈθɪŋkɪŋ wɪð ðɪs dɪˈzaɪn]"
  // },
  {
    "sentence": "YES! The <span style=\"color:red;\">ch</span>arging <span style=\"color:red;\">c</span>able! Why did they <span style=\"color:red;\">ch</span>ange to USB-<span style=\"color:red;\">C</span>? All my old <span style=\"color:red;\">ch</span>argers were <span style=\"color:red;\">u</span>seless. I had to buy <span style=\"color:red;\">n</span>ew ones for my <span style=\"color:red;\">c</span>ar, my <span style=\"color:red;\">d</span>esk...",
    "original": "YES! The charging cable! Why did they change to USB-C? All my old chargers were useless. I had to buy new ones for my car, my desk...",
    "translation": "是的！充电线！他们为什么要换成USB-C？我所有的旧充电器都没用了。我不得不为我的车、我的桌子买新的充电器……",
    "phonetic": "[jes! ðə ˈtʃɑːrdʒɪŋ ˈkeɪbəl! waɪ dɪd ðeɪ tʃeɪndʒ tu juː es biː siː? ɔːl maɪ oʊld ˈtʃɑːrdʒərz wɜːr ˈjuːsləs. aɪ hæd tu baɪ nuː wʌnz fɔːr maɪ kɑːr, maɪ desk]"
  },
  // {
  //   "sentence": "I hear you - that <span style=\"color:red;\">t</span>ransition can be ex<span style=\"color:red;\">p</span>ensive. So you had some <span style=\"color:red;\">s</span>etup <span style=\"color:red;\">f</span>rustrations but got ex<span style=\"color:red;\">c</span>ited about the <span style=\"color:red;\">c</span>amera quality. Got it! Now let's talk about <span style=\"color:red;\">d</span>aily <span style=\"color:red;\">u</span>sage...",
  //   "original": "I hear you - that transition can be expensive. So you had some setup frustrations but got excited about the camera quality. Got it! Now let's talk about daily usage...",
  //   "translation": "我理解你——这种过渡可能很昂贵。所以你在设置时遇到了一些挫折，但对相机质量感到兴奋。明白了！现在让我们谈谈日常使用……",
  //   "phonetic": "[aɪ hɪr ju - ðæt trænˈzɪʃən kæn bi ɪkˈspensɪv. soʊ ju hæd sʌm ˈsetʌp frʌˈstreɪʃənz bʌt ɡɑːt ɪkˈsaɪtɪd əˈbaʊt ðə ˈkæmərə ˈkwɑːləti. ɡɑːt ɪt! naʊ lets tɔːk əˈbaʊt ˈdeɪli ˈjuːsɪdʒ]"
  // },
  // {
  //   "sentence": "We just talked about your initial ex<span style=\"color:red;\">p</span>erience, now let's dis<span style=\"color:red;\">c</span>uss <span style=\"color:red;\">d</span>aily usage - including <span style=\"color:red;\">p</span>roblems you've en<span style=\"color:red;\">c</span>ountered, <span style=\"color:red;\">t</span>ips you've dis<span style=\"color:red;\">c</span>overed, or things that <span style=\"color:red;\">d</span>rive you <span style=\"color:red;\">c</span>razy.",
  //   "original": "We just talked about your initial experience, now let's discuss daily usage - including problems you've encountered, tips you've discovered, or things that drive you crazy.",
  //   "translation": "我们刚刚谈了你的初始体验，现在让我们讨论日常使用——包括你遇到的问题、发现的技巧，或者让你抓狂的事情。",
  //   "phonetic": "[wi dʒʌst tɔːkt əˈbaʊt jɔːr ɪˈnɪʃəl ɪkˈspɪriəns, naʊ lets dɪˈskʌs ˈdeɪli ˈjuːsɪdʒ - ɪnˈkluːdɪŋ ˈprɑːbləmz juv ɪnˈkaʊntərd, tɪps juv dɪsˈkʌvərd, ɔːr θɪŋz ðæt draɪv ju ˈkreɪzi]"
  // },
  {
    "sentence": " Oh boy, where do I <span style=\"color:red;\">s</span>tart?",
    "original": " Oh boy, where do I start?",
    "translation": "天哪，我从哪里开始说呢？",
    "phonetic": "[oʊ bɔɪ, wer du aɪ stɑːrt]"
  },
  // {
  //   "sentence": "Exactly! What's the most <span style=\"color:red;\">f</span>rustrating thing about using i<span style=\"color:red;\">Ph</span>one <span style=\"color:red;\">d</span>aily?",
  //   "original": "Exactly! What's the most frustrating thing about using iPhone daily?",
  //   "translation": "正是！日常使用iPhone最让人沮丧的事情是什么？",
  //   "phonetic": "[ɪɡˈzæktli! wʌts ðə moʊst ˈfrʌstreɪtɪŋ θɪŋ əˈbaʊt ˈjuːzɪŋ ˈaɪfoʊn ˈdeɪli]"
  // },
  {
    "sentence": "Battery life! I'm <span style=\"color:red;\">c</span>onstantly looking for <span style=\"color:red;\">ch</span>argers. By 3 <span style=\"color:red;\">P</span>M, I'm already at like 20%. It's so <span style=\"color:red;\">s</span>tressful.",
    "original": "Battery life! I'm constantly looking for chargers. By 3 PM, I'm already at like 20%. It's so stressful.",
    "translation": "电池寿命！我总是在找充电器。到下午3点，我的电量已经只剩20%左右了。太有压力了。",
    "phonetic": "[ˈbætəri laɪf! aɪm ˈkɑːnstəntli ˈlʊkɪŋ fɔːr ˈtʃɑːrdʒərz. baɪ θriː piː em, aɪm ɔːlˈredi æt laɪk ˈtwenti pərˈsent. ɪts soʊ ˈstresfəl]"
  },
  // {
  //   "sentence": "That's really <span style=\"color:red;\">f</span>rustrating! Is it certain <span style=\"color:red;\">a</span>pps that <span style=\"color:red;\">d</span>rain it, or just <span style=\"color:red;\">g</span>eneral <span style=\"color:red;\">u</span>sage?",
  //   "original": "That's really frustrating! Is it certain apps that drain it, or just general usage?",
  //   "translation": "那真的很令人沮丧！是某些应用耗电，还是只是一般使用？",
  //   "phonetic": "[ðæts ˈrɪəli ˈfrʌstreɪtɪŋ! ɪz ɪt ˈsɜːrtən æps ðæt dreɪn ɪt, ɔːr dʒʌst ˈdʒenərəl ˈjuːsɪdʒ]"
  // },
  {
    "sentence": "Insta<span style=\"color:red;\">g</span>ram and <span style=\"color:red;\">T</span>ikTok are the <span style=\"color:red;\">w</span>orst. But even just having it in my <span style=\"color:red;\">p</span>ocket, it seems to <span style=\"color:red;\">d</span>rain <span style=\"color:red;\">f</span>ast. I've turned off <span style=\"color:red;\">b</span>ackground re<span style=\"color:red;\">f</span>resh for everything, but <span style=\"color:red;\">s</span>till...",
    "original": "Instagram and TikTok are the worst. But even just having it in my pocket, it seems to drain fast. I've turned off background refresh for everything, but still...",
    "translation": "Instagram和TikTok是最糟糕的。但即使只是放在口袋里，电量似乎也消耗得很快。我已经关闭了所有应用的后台刷新，但仍然……",
    "phonetic": "[ˈɪnstəɡræm ænd ˈtɪktɑːk ɑːr ðə wɜːrst. bʌt ˈiːvən dʒʌst ˈhævɪŋ ɪt ɪn maɪ ˈpɑːkɪt, ɪt siːmz tu dreɪn fæst. aɪv tɜːrnd ɔːf ˈbækɡraʊnd rɪˈfreʃ fɔːr ˈevriθɪŋ, bʌt stɪl]"
  },
  // {
  //   "sentence": "Right, right. Be<span style=\"color:red;\">s</span>ides battery, any other <span style=\"color:red;\">d</span>aily an<span style=\"color:red;\">n</span>oyances? Maybe with i<span style=\"color:red;\">O</span>S it<span style=\"color:red;\">s</span>elf?",
  //   "original": "Right, right. Besides battery, any other daily annoyances? Maybe with iOS itself?",
  //   "translation": "对，对。除了电池，还有其他日常烦恼吗？也许是iOS本身的问题？",
  //   "phonetic": "[raɪt, raɪt. bɪˈsaɪdz ˈbætəri, ˈeni ˈʌðər ˈdeɪli əˈnɔɪənsɪz? ˈmeɪbi wɪð aɪ oʊ es ɪtˈself]"
  // },
  {
    "sentence": "The <span style=\"color:red;\">k</span>eyboard auto<span style=\"color:red;\">c</span>orrect is SO ag<span style=\"color:red;\">g</span>ressive! It <span style=\"color:red;\">ch</span>anges words I definitely don't want <span style=\"color:red;\">ch</span>anged. Like, I'll type \"<span style=\"color:red;\">d</span>ucking\" and it <span style=\"color:red;\">ch</span>anges it to... well, you know. laughs",
    "original": "The keyboard autocorrect is SO aggressive! It changes words I definitely don't want changed. Like, I'll type \"ducking\" and it changes it to... well, you know. laughs",
    "translation": "键盘自动纠正太激进了！它会改变我绝对不想改变的词。比如，我输入ducking，它会改成……嗯，你懂的。（笑）",
    "phonetic": "[ðə ˈkiːbɔːrd ˈɔːtoʊkəˌrekt ɪz soʊ əˈɡresɪv! ɪt ˈtʃeɪndʒɪz wɜːrdz aɪ ˈdefɪnətli doʊnt wɑːnt tʃeɪndʒd. laɪk, aɪl taɪp ˈdʌkɪŋ ænd ɪt ˈtʃeɪndʒɪz ɪt tu... wel, ju noʊ. læfs]"
  }
]

const t4 = [
  // {
  //   "sentence": " Oh god, the <span style=\"color:red;\">c</span>lassic auto<span style=\"color:red;\">c</span>orrect <span style=\"color:red;\">f</span>ails! Have you found any ways to <span style=\"color:red;\">d</span>eal with that?",
  //   "original": " Oh god, the classic autocorrect fails! Have you found any ways to deal with that?",
  //   "translation": "天哪，经典的自动纠正失败！你找到任何应对方法了吗？",
  //   "phonetic": "[ oʊ ɡɑːd, ðə ˈklæsɪk ˈɔːtoʊkəˌrekt feɪlz! hæv ju faʊnd ˈeni weɪz tu diːl wɪð ðæt]"
  // },
  {
    "sentence": "Actually, yes! My <span style=\"color:red;\">f</span>riend showed me you can add <span style=\"color:red;\">w</span>ords to the <span style=\"color:red;\">k</span>eyboard <span style=\"color:red;\">d</span>ictionary. Game <span style=\"color:red;\">ch</span>anger! Also, if you type the \"<span style=\"color:red;\">w</span>rong\" word three <span style=\"color:red;\">t</span>imes, it <span style=\"color:red;\">l</span>earns it.",
    "original": "Actually, yes! My friend showed me you can add words to the keyboard dictionary. Game changer! Also, if you type the \"wrong\" word three times, it learns it.",
    "translation": "实际上，是的！我朋友告诉我你可以把词添加到键盘词典里。改变游戏规则！另外，如果你输入 错误 的词三次，它就会学习这个词。",
    "phonetic": "[ˈæktʃuəli, jes! maɪ frend ʃoʊd mi ju kæn æd wɜːrdz tu ðə ˈkiːbɔːrd ˈdɪkʃəneri. ɡeɪm ˈtʃeɪndʒər! ˈɔːlsoʊ, ɪf ju taɪp ðə rɔːŋ wɜːrd θriː taɪmz, ɪt lɜːrnz ɪt]"
  },
  // {
  //   "sentence": "Wow, I didn't even know that! That's <span style=\"color:red;\">b</span>rilliant. Any other <span style=\"color:red;\">t</span>ips you've dis<span style=\"color:red;\">c</span>overed that you love <span style=\"color:red;\">sh</span>aring?",
  //   "original": "Wow, I didn't even know that! That's brilliant. Any other tips you've discovered that you love sharing?",
  //   "translation": "哇，我都不知道！太棒了。你还发现了其他什么你喜欢分享的技巧吗？",
  //   "phonetic": "[waʊ, aɪ ˈdɪdnt ˈiːvən noʊ ðæt! ðæts ˈbrɪljənt. ˈeni ˈʌðər tɪps juv dɪsˈkʌvərd ðæt ju lʌv ˈʃerɪŋ]"
  // },
  {
    "sentence": "Oh! The <span style=\"color:red;\">b</span>ack-tap <span style=\"color:red;\">f</span>eature is a<span style=\"color:red;\">m</span>azing. I set it so <span style=\"color:red;\">d</span>ouble-tap takes a <span style=\"color:red;\">s</span>creenshot, <span style=\"color:red;\">t</span>riple-tap turns on <span style=\"color:red;\">f</span>lashlight. Super con<span style=\"color:red;\">v</span>enient.",
    "original": "Oh! The back-tap feature is amazing. I set it so double-tap takes a screenshot, triple-tap turns on flashlight. Super convenient.",
    "translation": "哦！背面轻点功能太棒了。我设置成双击截屏，三击开手电筒。超级方便。",
    "phonetic": "[oʊ! ðə bæk-tæp ˈfiːtʃər ɪz əˈmeɪzɪŋ. aɪ set ɪt soʊ ˈdʌbəl-tæp teɪks ə ˈskriːnʃɑːt, ˈtrɪpəl-tæp tɜːrnz ɑːn ˈflæʃlaɪt. ˈsuːpər kənˈviːnjənt]"
  },
  // {
  //   "sentence": "That sounds in<span style=\"color:red;\">c</span>redibly useful! How did you dis<span style=\"color:red;\">c</span>over that?",
  //   "original": "That sounds incredibly useful! How did you discover that?",
  //   "translation": "听起来非常有用！你是怎么发现这个的？",
  //   "phonetic": "[ðæt saʊndz ɪnˈkredəbli ˈjuːsfəl! haʊ dɪd ju dɪsˈkʌvər ðæt]"
  // },
  {
    "sentence": "Reddit, actually. There's this whole com<span style=\"color:red;\">m</span>unity <span style=\"color:red;\">sh</span>aring i<span style=\"color:red;\">Ph</span>one <span style=\"color:red;\">t</span>ips. I learned about Con<span style=\"color:red;\">t</span>rol <span style=\"color:red;\">C</span>enter customi<span style=\"color:red;\">z</span>ation too - you can add so many useful <span style=\"color:red;\">sh</span>ortcuts.",
    "original": "Reddit, actually. There's this whole community sharing iPhone tips. I learned about Control Center customization too - you can add so many useful shortcuts.",
    "translation": "其实是Reddit。有一个专门分享iPhone技巧的社区。我还学到了控制中心自定义——你可以添加很多有用的快捷方式。",
    "phonetic": "[ˈredɪt, ˈæktʃuəli. ðerz ðɪs hoʊl kəˈmjuːnəti ˈʃerɪŋ ˈaɪfoʊn tɪps. aɪ lɜːrnd əˈbaʊt kənˈtroʊl ˈsentər ˌkʌstəmaɪˈzeɪʃən tuː - ju kæn æd soʊ ˈmeni ˈjuːsfəl ˈʃɔːrtkʌts]"
  },
  // {
  //   "sentence": "Nice! Any particularly useful <span style=\"color:red;\">sh</span>ortcuts you've added?",
  //   "original": "Nice! Any particularly useful shortcuts you've added?",
  //   "translation": "不错！你添加了什么特别有用的快捷方式吗？",
  //   "phonetic": "[naɪs! ˈeni pərˈtɪkjələrli ˈjuːsfəl ˈʃɔːrtkʌts juv ˈædɪd]"
  // },
  {
    "sentence": "Voice <span style=\"color:red;\">m</span>emos is great for work <span style=\"color:red;\">m</span>eetings. And the QR code <span style=\"color:red;\">s</span>canner - I use it <span style=\"color:red;\">c</span>onstantly for <span style=\"color:red;\">m</span>enus and stuff.",
    "original": "Voice memos is great for work meetings. And the QR code scanner - I use it constantly for menus and stuff.",
    "translation": "语音备忘录对工作会议很有用。还有二维码扫描器——我经常用它扫菜单之类的东西。",
    "phonetic": "[vɔɪs ˈmemoʊz ɪz ɡreɪt fɔːr wɜːrk ˈmiːtɪŋz. ænd ðə kjuː ɑːr koʊd ˈskænər - aɪ juːz ɪt ˈkɑːnstəntli fɔːr ˈmenjuːz ænd stʌf]"
  },
  // {
  //   "sentence": "Speaking of work, how's using i<span style=\"color:red;\">Ph</span>one for work <span style=\"color:red;\">t</span>asks? Any <span style=\"color:red;\">s</span>cenarios where it's particularly great or dis<span style=\"color:red;\">a</span>ppointing?",
  //   "original": "Speaking of work, how's using iPhone for work tasks? Any scenarios where it's particularly great or disappointing?",
  //   "translation": "说到工作，用iPhone处理工作任务怎么样？有什么场景特别好或特别令人失望吗？",
  //   "phonetic": "[ˈspiːkɪŋ əv wɜːrk, haʊz ˈjuːzɪŋ ˈaɪfoʊn fɔːr wɜːrk tæsks? ˈeni səˈnɛrioʊz wer ɪts pərˈtɪkjələrli ɡreɪt ɔːr ˌdɪsəˈpɔɪntɪŋ]"
  // },
  {
    "sentence": "Camera is <span style=\"color:red;\">f</span>antastic for <span style=\"color:red;\">p</span>roduct <span style=\"color:red;\">ph</span>otos. But honestly? <span style=\"color:red;\">F</span>ile <span style=\"color:red;\">m</span>anagement is <span style=\"color:red;\">t</span>errible. I can never find where things <span style=\"color:red;\">d</span>ownload, and <span style=\"color:red;\">sh</span>aring files with our <span style=\"color:red;\">W</span>indows com<span style=\"color:red;\">p</span>uters at work is a <span style=\"color:red;\">n</span>ightmare.",
    "original": "Camera is fantastic for product photos. But honestly? File management is terrible. I can never find where things download, and sharing files with our Windows computers at work is a nightmare.",
    "translation": "相机拍产品照片非常棒。但说实话？文件管理太糟糕了。我永远找不到东西下载到哪里，与我们工作中的Windows电脑共享文件简直是噩梦。",
    "phonetic": "[ˈkæmərə ɪz fænˈtæstɪk fɔːr ˈprɑːdʌkt ˈfoʊtoʊz. bʌt ˈɑːnɪstli? faɪl ˈmænɪdʒmənt ɪz ˈterəbəl. aɪ kæn ˈnevər faɪnd wer θɪŋz ˈdaʊnloʊd, ænd ˈʃerɪŋ faɪlz wɪð aʊər ˈwɪndoʊz kəmˈpjuːtərz æt wɜːrk ɪz ə ˈnaɪtmer]"
  },
  {
    "sentence": "Oh that's really an<span style=\"color:red;\">n</span>oying for work <span style=\"color:red;\">f</span>low. Any work<span style=\"color:red;\">a</span>rounds you've found?",
    "original": "Oh that's really annoying for work flow. Any workarounds you've found?",
    "translation": "哦，这对工作流程来说真的很烦人。你找到什么解决办法了吗？",
    "phonetic": "[oʊ ðæts ˈrɪəli əˈnɔɪɪŋ fɔːr wɜːrk floʊ. ˈeni ˈwɜːrkəˌraʊndz juv faʊnd]"
  },
  {
    "sentence": "I mostly use <span style=\"color:red;\">G</span>oogle <span style=\"color:red;\">D</span>rive now for everything. But it <span style=\"color:red;\">sh</span>ouldn't be that com<span style=\"color:red;\">p</span>licated, you know?",
    "original": "I mostly use Google Drive now for everything. But it shouldn't be that complicated, you know?",
    "translation": "我现在主要用Google Drive处理所有事情。但它不应该这么复杂，你知道吗？",
    "phonetic": "[aɪ ˈmoʊstli juːz ˈɡuːɡəl draɪv naʊ fɔːr ˈevriθɪŋ. bʌt ɪt ˈʃʊdnt bi ðæt ˈkɑːmplɪkeɪtɪd, ju noʊ]"
  },
  // {
  //   "sentence": "Absolutely, that adds extra <span style=\"color:red;\">s</span>teps. Anything else you particularly want to com<span style=\"color:red;\">p</span>lain about? Get it all out!",
  //   "original": "Absolutely, that adds extra steps. Anything else you particularly want to complain about? Get it all out!",
  //   "translation": "绝对的，那增加了额外的步骤。还有什么你特别想抱怨的吗？都说出来吧！",
  //   "phonetic": "[ˌæbsəˈluːtli, ðæt ædz ˈekstrə steps. ˈeniθɪŋ els ju pərˈtɪkjələrli wɑːnt tu kəmˈpleɪn əˈbaʊt? ɡet ɪt ɔːl aʊt]"
  // },
  {
    "sentence": " The <span style=\"color:red;\">p</span>rice of ac<span style=\"color:red;\">c</span>essories! $129 for <span style=\"color:red;\">A</span>irPods case re<span style=\"color:red;\">p</span>lacement? Come on!",
    "original": " The price of accessories! $129 for AirPods case replacement? Come on!",
    "translation": "配件的价格！AirPods盒子更换要129美元？拜托！",
    "phonetic": "[ ðə praɪs əv ækˈsesəriz! wʌn ˈhʌndrəd ˈtwenti naɪn ˈdɑːlərz fɔːr ˈerpɑːdz keɪs rɪˈpleɪsmənt? kʌm ɑːn]"
  },
  // {
  //   "sentence": "That's in<span style=\"color:red;\">s</span>ane! Okay, I've learned so much about your <span style=\"color:red;\">d</span>aily ex<span style=\"color:red;\">p</span>erience. Let's wrap up with your overall <span style=\"color:red;\">th</span>oughts...",
  //   "original": "That's insane! Okay, I've learned so much about your daily experience. Let's wrap up with your overall thoughts...",
  //   "translation": "太疯狂了！好的，我已经了解了很多关于你日常体验的信息。让我们总结一下你的整体想法……",
  //   "phonetic": "[ðæts ɪnˈseɪn! oʊˈkeɪ, aɪv lɜːrnd soʊ mʌtʃ əˈbaʊt jɔːr ˈdeɪli ɪkˈspɪriəns. lets ræp ʌp wɪð jɔːr ˈoʊvərɔːl θɔːts]"
  // }
]

const t5 = [
  // {
  //   "sentence": "Great, we've dis<span style=\"color:red;\">c</span>ussed your <span style=\"color:red;\">p</span>urchase ex<span style=\"color:red;\">p</span>erience and <span style=\"color:red;\">d</span>aily usage, let's wrap up with your overall <span style=\"color:red;\">f</span>eelings - including <span style=\"color:red;\">r</span>ating and im<span style=\"color:red;\">p</span>rovement sug<span style=\"color:red;\">g</span>estions.",
  //   "original": "Great, we've discussed your purchase experience and daily usage, let's wrap up with your overall feelings - including rating and improvement suggestions.",
  //   "translation": "很好，我们已经讨论了你的购买体验和日常使用，让我们总结一下你的整体感受——包括评分和改进建议。",
  //   "phonetic": "[ɡreɪt, wiːv dɪˈskʌst jɔːr ˈpɜːrtʃəs ɪkˈspɪriəns ænd ˈdeɪli ˈjuːsɪdʒ, lets ræp ʌp wɪð jɔːr ˈoʊvərɔːl ˈfiːlɪŋz - ɪnˈkluːdɪŋ ˈreɪtɪŋ ænd ɪmˈpruːvmənt səɡˈdʒestʃənz]"
  // },
  {
    "sentence": "Sounds good!",
    "original": "Sounds good!",
    "translation": "听起来不错！",
    "phonetic": "[saʊndz ɡʊd]"
  },
  // {
  //   "sentence": "So if 10 is <span style=\"color:red;\">p</span>erfect, what <span style=\"color:red;\">s</span>core would you give your i<span style=\"color:red;\">Ph</span>one?",
  //   "original": "So if 10 is perfect, what score would you give your iPhone?",
  //   "translation": "那么如果10分是满分，你会给你的iPhone打多少分？",
  //   "phonetic": "[soʊ ɪf ten ɪz ˈpɜːrfɪkt, wʌt skɔːr wʊd ju ɡɪv jɔːr ˈaɪfoʊn]"
  // },
  {
    "sentence": "Hmm... probably a 7.",
    "original": "Hmm... probably a 7.",
    "translation": "嗯……大概7分。",
    "phonetic": "[hm... ˈprɑːbəbli ə ˈsevən]"
  },
  // {
  //   "sentence": "7 points - why not 8? What's <span style=\"color:red;\">h</span>olding it <span style=\"color:red;\">b</span>ack?",
  //   "original": "7 points - why not 8? What's holding it back?",
  //   "translation": "7分——为什么不是8分？是什么阻碍了它？",
  //   "phonetic": "[ˈsevən pɔɪnts - waɪ nɑːt eɪt? wʌts ˈhoʊldɪŋ ɪt bæk]"
  // },
  {
    "sentence": "Battery life and the <span style=\"color:red;\">p</span>rice. If those were <span style=\"color:red;\">b</span>etter, it'd easily be an 8 or 9. The <span style=\"color:red;\">c</span>amera and per<span style=\"color:red;\">f</span>ormance are definitely 9 or 10 quality.",
    "original": "Battery life and the price. If those were better, it'd easily be an 8 or 9. The camera and performance are definitely 9 or 10 quality.",
    "translation": "电池寿命和价格。如果这些更好，它很容易就是8分或9分。相机和性能绝对是9分或10分的质量。",
    "phonetic": "[ˈbætəri laɪf ænd ðə praɪs. ɪf ðoʊz wɜːr ˈbetər, ɪt wʊd ˈiːzɪli bi ən eɪt ɔːr naɪn. ðə ˈkæmərə ænd pərˈfɔːrməns ɑːr ˈdefɪnətli naɪn ɔːr ten ˈkwɑːləti]"
  },
  // {
  //   "sentence": "Breaking it down - how many <span style=\"color:red;\">p</span>oints for de<span style=\"color:red;\">s</span>ign? <span style=\"color:red;\">C</span>amera? User ex<span style=\"color:red;\">p</span>erience?",
  //   "original": "Breaking it down - how many points for design? Camera? User experience?",
  //   "translation": "分解来看——设计多少分？相机？用户体验？",
  //   "phonetic": "[ˈbreɪkɪŋ ɪt daʊn - haʊ ˈmeni pɔɪnts fɔːr dɪˈzaɪn? ˈkæmərə? ˈjuːzər ɪkˈspɪriəns]"
  // },
  {
    "sentence": "Design is like 9 - it's <span style=\"color:red;\">b</span>eautiful. <span style=\"color:red;\">C</span>amera is 10, no com<span style=\"color:red;\">p</span>laints there. User ex<span style=\"color:red;\">p</span>erience... maybe 6? It's <span style=\"color:red;\">s</span>mooth but not always in<span style=\"color:red;\">t</span>uitive.",
    "original": "Design is like 9 - it's beautiful. Camera is 10, no complaints there. User experience... maybe 6? It's smooth but not always intuitive.",
    "translation": "设计大概9分——很漂亮。相机10分，没什么好抱怨的。用户体验……也许6分？很流畅但不总是直观。",
    "phonetic": "[dɪˈzaɪn ɪz laɪk naɪn - ɪts ˈbjuːtɪfəl. ˈkæmərə ɪz ten, noʊ kəmˈpleɪnts ðer. ˈjuːzər ɪkˈspɪriəns... ˈmeɪbi sɪks? ɪts smuːð bʌt nɑːt ˈɔːlweɪz ɪnˈtuːɪtɪv]"
  },
  // {
  //   "sentence": "That's a pretty de<span style=\"color:red;\">t</span>ailed breakdown! As an i<span style=\"color:red;\">Ph</span>one user, would you re<span style=\"color:red;\">c</span>ommend others to buy one?",
  //   "original": "That's a pretty detailed breakdown! As an iPhone user, would you recommend others to buy one?",
  //   "translation": "这是一个相当详细的分解！作为iPhone用户，你会推荐其他人购买吗？",
  //   "phonetic": "[ðæts ə ˈprɪti ˈdiːteɪld ˈbreɪkdaʊn! æz ən ˈaɪfoʊn ˈjuːzər, wʊd ju ˌrekəˈmend ˈʌðərz tu baɪ wʌn]"
  // },
  {
    "sentence": "Depends on the <span style=\"color:red;\">p</span>erson. For someone who wants the best <span style=\"color:red;\">c</span>amera and doesn't mind paying <span style=\"color:red;\">p</span>remium, absolutely. But if you're <span style=\"color:red;\">b</span>udget-conscious or <span style=\"color:red;\">t</span>ech-savvy and like customi<span style=\"color:red;\">z</span>ation, maybe <span style=\"color:red;\">A</span>ndroid is better.",
    "original": "Depends on the person. For someone who wants the best camera and doesn't mind paying premium, absolutely. But if you're budget-conscious or tech-savvy and like customization, maybe Android is better.",
    "translation": "这取决于人。对于想要最好相机并且不介意支付高价的人，绝对推荐。但如果你注重预算或精通技术并喜欢自定义，也许Android更好。",
    "phonetic": "[dɪˈpendz ɑːn ðə ˈpɜːrsən. fɔːr ˈsʌmwʌn huː wɑːnts ðə best ˈkæmərə ænd ˈdʌznt maɪnd ˈpeɪɪŋ ˈpriːmiəm, ˌæbsəˈluːtli. bʌt ɪf jʊr ˈbʌdʒɪt-ˈkɑːnʃəs ɔːr tek-ˈsævi ænd laɪk ˌkʌstəmaɪˈzeɪʃən, ˈmeɪbi ˈændrɔɪd ɪz ˈbetər]"
  },
  // {
  //   "sentence": "That's a <span style=\"color:red;\">th</span>oughtful answer. Will you <span style=\"color:red;\">ch</span>oose i<span style=\"color:red;\">Ph</span>one again next time you up<span style=\"color:red;\">g</span>rade?",
  //   "original": "That's a thoughtful answer. Will you choose iPhone again next time you upgrade?",
  //   "translation": "这是一个深思熟虑的回答。下次升级时你还会选择iPhone吗？",
  //   "phonetic": "[ðæts ə ˈθɔːtfəl ˈænsər. wɪl ju tʃuːz ˈaɪfoʊn əˈɡen nekst taɪm ju ˈʌpɡreɪd]"
  // },
  {
    "sentence": "Probably, yeah. I'm kind of <span style=\"color:red;\">s</span>tuck in the eco<span style=\"color:red;\">s</span>ystem now - <span style=\"color:red;\">A</span>irPods, <span style=\"color:red;\">M</span>acBook, everything <span style=\"color:red;\">s</span>yncs <span style=\"color:red;\">p</span>erfectly. Though I'll definitely wait for better <span style=\"color:red;\">b</span>attery <span style=\"color:red;\">t</span>echnology.",
    "original": "Probably, yeah. I'm kind of stuck in the ecosystem now - AirPods, MacBook, everything syncs perfectly. Though I'll definitely wait for better battery technology.",
    "translation": "可能会，是的。我现在有点被困在生态系统里了——AirPods、MacBook，所有东西都完美同步。不过我肯定会等待更好的电池技术。",
    "phonetic": "[ˈprɑːbəbli, jeə. aɪm kaɪnd əv stʌk ɪn ði ˈiːkoʊˌsɪstəm naʊ - ˈerpɑːdz, ˈmækbʊk, ˈevriθɪŋ sɪŋks ˈpɜːrfɪktli. ðoʊ aɪl ˈdefɪnətli weɪt fɔːr ˈbetər ˈbætəri tekˈnɑːlədʒi]"
  },
  // {
  //   "sentence": "Okay, fun question - if you were <span style=\"color:red;\">A</span>pple's CEO, what would you most want to im<span style=\"color:red;\">p</span>rove about i<span style=\"color:red;\">Ph</span>one?",
  //   "original": "Okay, fun question - if you were Apple's CEO, what would you most want to improve about iPhone?",
  //   "translation": "好的，有趣的问题——如果你是苹果的CEO，你最想改进iPhone的什么？",
  //   "phonetic": "[oʊˈkeɪ, fʌn ˈkwestʃən - ɪf ju wɜːr ˈæpəlz siː iː oʊ, wʌt wʊd ju moʊst wɑːnt tu ɪmˈpruːv əˈbaʊt ˈaɪfoʊn]"
  // },
  {
    "sentence": " Easy! <span style=\"color:red;\">B</span>attery life and bring back the <span style=\"color:red;\">h</span>eadphone <span style=\"color:red;\">j</span>ack! Also, make <span style=\"color:red;\">f</span>ile <span style=\"color:red;\">m</span>anagement more like a com<span style=\"color:red;\">p</span>uter. Oh, and stop <span style=\"color:red;\">ch</span>anging the <span style=\"color:red;\">ch</span>arging <span style=\"color:red;\">c</span>able every few years!",
    "original": " Easy! Battery life and bring back the headphone jack! Also, make file management more like a computer. Oh, and stop changing the charging cable every few years!",
    "translation": "简单！电池寿命和恢复耳机孔！另外，让文件管理更像电脑。哦，还有停止每隔几年就更换充电线！",
    "phonetic": "[ ˈiːzi! ˈbætəri laɪf ænd brɪŋ bæk ðə ˈhedfoʊn dʒæk! ˈɔːlsoʊ, meɪk faɪl ˈmænɪdʒmənt mɔːr laɪk ə kəmˈpjuːtər. oʊ, ænd stɑːp ˈtʃeɪndʒɪŋ ðə ˈtʃɑːrdʒɪŋ ˈkeɪbəl ˈevri fjuː jɪrz]"
  },
  // {
  //   "sentence": "Those are great sug<span style=\"color:red;\">g</span>estions! If you could only <span style=\"color:red;\">ch</span>ange one thing, what would you <span style=\"color:red;\">ch</span>oose?",
  //   "original": "Those are great suggestions! If you could only change one thing, what would you choose?",
  //   "translation": "这些都是很好的建议！如果你只能改变一件事，你会选择什么？",
  //   "phonetic": "[ðoʊz ɑːr ɡreɪt səɡˈdʒestʃənz! ɪf ju kʊd ˈoʊnli tʃeɪndʒ wʌn θɪŋ, wʌt wʊd ju tʃuːz]"
  // },
  {
    "sentence": "Battery life, for sure. Everything else I can work around, but <span style=\"color:red;\">c</span>onstantly worrying about <span style=\"color:red;\">b</span>attery is really <span style=\"color:red;\">s</span>tressful.",
    "original": "Battery life, for sure. Everything else I can work around, but constantly worrying about battery is really stressful.",
    "translation": "肯定是电池寿命。其他的我都可以解决，但不断担心电池真的很有压力。",
    "phonetic": "[ˈbætəri laɪf, fɔːr ʃʊr. ˈevriθɪŋ els aɪ kæn wɜːrk əˈraʊnd, bʌt ˈkɑːnstəntli ˈwɜːriɪŋ əˈbaʊt ˈbætəri ɪz ˈrɪəli ˈstresfəl]"
  },
  // {
  //   "sentence": "Interesting question - if i<span style=\"color:red;\">Ph</span>one suddenly in<span style=\"color:red;\">c</span>reased in <span style=\"color:red;\">p</span>rice by 50%, would you still buy it?",
  //   "original": "Interesting question - if iPhone suddenly increased in price by 50%, would you still buy it?",
  //   "translation": "有趣的问题——如果iPhone突然涨价50%，你还会买吗？",
  //   "phonetic": "[ˈɪntrəstɪŋ ˈkwestʃən - ɪf ˈaɪfoʊn ˈsʌdənli ɪnˈkriːst ɪn praɪs baɪ ˈfɪfti pərˈsent, wʊd ju stɪl baɪ ɪt]"
  // },
  {
    "sentence": "Probably not. There's a <span style=\"color:red;\">l</span>imit, you know? At some <span style=\"color:red;\">p</span>oint, the <span style=\"color:red;\">p</span>remium isn't worth it anymore.",
    "original": "Probably not. There's a limit, you know? At some point, the premium isn't worth it anymore.",
    "translation": "可能不会。有个限度，你知道吗？到某个程度，这个溢价就不值得了。",
    "phonetic": "[ˈprɑːbəbli nɑːt. ðerz ə ˈlɪmɪt, ju noʊ? æt sʌm pɔɪnt, ðə ˈpriːmiəm ˈɪznt wɜːrθ ɪt ˌeniˈmɔːr]"
  },
  // {
  //   "sentence": "Last question - if <span style=\"color:red;\">A</span>pple people could hear this con<span style=\"color:red;\">v</span>ersation, what would you most want them to re<span style=\"color:red;\">m</span>ember?",
  //   "original": "Last question - if Apple people could hear this conversation, what would you most want them to remember?",
  //   "translation": "最后一个问题——如果苹果公司的人能听到这次对话，你最希望他们记住什么？",
  //   "phonetic": "[læst ˈkwestʃən - ɪf ˈæpəl ˈpiːpəl kʊd hɪr ðɪs ˌkɑːnvərˈseɪʃən, wʌt wʊd ju moʊst wɑːnt ðem tu rɪˈmembər]"
  // },
  {
    "sentence": "That we love the quality, but we're not made of <span style=\"color:red;\">m</span>oney! Make it more af<span style=\"color:red;\">f</span>ordable and <span style=\"color:red;\">f</span>ocus on <span style=\"color:red;\">p</span>ractical im<span style=\"color:red;\">p</span>rovements like <span style=\"color:red;\">b</span>attery life, not just adding more <span style=\"color:red;\">c</span>ameras.",
    "original": "That we love the quality, but we're not made of money! Make it more affordable and focus on practical improvements like battery life, not just adding more cameras.",
    "translation": "我们喜欢这个质量，但我们不是钱做的！让它更实惠，专注于实际的改进，比如电池寿命，而不仅仅是添加更多的相机。",
    "phonetic": "[ðæt wi lʌv ðə ˈkwɑːləti, bʌt wɪr nɑːt meɪd əv ˈmʌni! meɪk ɪt mɔːr əˈfɔːrdəbəl ænd ˈfoʊkəs ɑːn ˈpræktɪkəl ɪmˈpruːvmənts laɪk ˈbætəri laɪf, nɑːt dʒʌst ˈædɪŋ mɔːr ˈkæmərəz]"
  },
  // {
  //   "sentence": "Perfect! <span style=\"color:red;\">S</span>arah, thank you so much for <span style=\"color:red;\">sh</span>aring. Your in<span style=\"color:red;\">s</span>ights about the eco<span style=\"color:red;\">s</span>ystem lock-in and <span style=\"color:red;\">p</span>ractical im<span style=\"color:red;\">p</span>rovement needs are really <span style=\"color:red;\">v</span>aluable. The <span style=\"color:red;\">t</span>ip about back-tap <span style=\"color:red;\">sh</span>ortcuts is definitely something other users would love to know about!",
  //   "original": "Perfect! Sarah, thank you so much for sharing. Your insights about the ecosystem lock-in and practical improvement needs are really valuable. The tip about back-tap shortcuts is definitely something other users would love to know about!",
  //   "translation": "完美！Sarah，非常感谢你的分享。你关于生态系统锁定和实际改进需求的见解真的很有价值。关于背面轻点快捷方式的技巧绝对是其他用户会喜欢知道的！",
  //   "phonetic": "[ˈpɜːrfɪkt! ˈsɛrə, θæŋk ju soʊ mʌtʃ fɔːr ˈʃerɪŋ. jɔːr ˈɪnsaɪts əˈbaʊt ði ˈiːkoʊˌsɪstəm lɑːk-ɪn ænd ˈpræktɪkəl ɪmˈpruːvmənt niːdz ɑːr ˈrɪəli ˈvæljuəbəl. ðə tɪp əˈbaʊt bæk-tæp ˈʃɔːrtkʌts ɪz ˈdefɪnətli ˈsʌmθɪŋ ˈʌðər ˈjuːzərz wʊd lʌv tu noʊ əˈbaʊt]"
  // },
  {
    "sentence": "Thanks! This was fun, felt like <span style=\"color:red;\">ch</span>atting with a <span style=\"color:red;\">f</span>riend about <span style=\"color:red;\">ph</span>ones",
    "original": "Thanks! This was fun, felt like chatting with a friend about phones",
    "translation": "谢谢！这很有趣，感觉就像和朋友聊手机一样",
    "phonetic": "[θæŋks! ðɪs wəz fʌn, felt laɪk ˈtʃætɪŋ wɪð ə frend əˈbaʊt foʊnz]"
  }
]
const list = [...t1, ...t2, ...t3, ...t4, ...t5]
export default list