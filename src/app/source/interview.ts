const list1= [
  {
    "sentence": "Hey! Thanks so much for <span style=\"color:red;\">j</span>oining today.",
    "original": "Hey! Thanks so much for joining today.",
    "translation": "嘿！非常感谢你今天加入我们。",
    "phonetic": "[heɪ! θæŋks səʊ mʌʧ fə ˈʤɔɪnɪŋ təˈdeɪ]"
  },
  {
    "sentence": "How are you <span style=\"color:red;\">d</span>oing?",
    "original": "How are you doing?",
    "translation": "你最近怎么样？",
    "phonetic": "[haʊ ɑː ju ˈduːɪŋ]"
  },
  {
    "sentence": "Let's just <span style=\"color:red;\">c</span>hat a bit to get comfortable before <span style=\"color:red;\">j</span>umping into the main questions.",
    "original": "Let's just chat a bit to get comfortable before jumping into the main questions.",
    "translation": "我们先随便聊聊，放松一下，然后再进入正题。",
    "phonetic": "[lɛts ʤʌst ʧæt ə bɪt tə ɡɛt ˈkʌmf(ə)təbl bɪˈfɔː ˈʤʌmpɪŋ ˈɪntuː ðə meɪn ˈkwɛsʧənz]"
  },
  {
    "sentence": "Sure, <span style=\"color:red;\">g</span>lad to be here.",
    "original": "Sure, glad to be here.",
    "translation": "当然，很高兴能来。",
    "phonetic": "[ʃʊr, ɡlæd tə bi hɪr]"
  },
  {
    "sentence": "I'm doing <span style=\"color:red;\">p</span>retty well, thanks.",
    "original": "I'm doing pretty well, thanks.",
    "translation": "我还挺好的，谢谢。",
    "phonetic": "[aɪm ˈduːɪŋ ˈprɪti wɛl, θæŋks]"
  },
  {
    "sentence": "Just keeping <span style=\"color:red;\">b</span>usy with work lately.",
    "original": "Just keeping busy with work lately.",
    "translation": "最近忙着工作呢。",
    "phonetic": "[ʤʌst ˈkiːpɪŋ ˈbɪzi wɪð wɜːrk ˈleɪtli]"
  },
  {
    "sentence": "Got it, <span style=\"color:red;\">s</span>ounds busy.",
    "original": "Got it, sounds busy.",
    "translation": "明白了，听起来挺忙的。",
    "phonetic": "[ɡɑːt ɪt, saʊndz ˈbɪzi]"
  },
  {
    "sentence": "So, when you're not <span style=\"color:red;\">w</span>orking, what do you usually do to relax?",
    "original": "So, when you're not working, what do you usually do to relax?",
    "translation": "那么，不工作的时候，你通常怎么放松呢？",
    "phonetic": "[soʊ, wɛn jʊr nɑːt ˈwɜːrkɪŋ, wɑːt duː jʊ ˈjuːʒuəli duː tə rɪˈlæks]"
  },
  {
    "sentence": "I typically <span style=\"color:red;\">e</span>njoy watching series or playing some games online—just simple things that don't require too much effort.",
    "original": "I typically enjoy watching series or playing some games online—just simple things that don't require too much effort.",
    "translation": "我通常喜欢看剧或者玩一些线上游戏——只是些不太费力的简单活动。",
    "phonetic": "[aɪ ˈtɪpɪkli ɪnˈʤɔɪ ˈwɑːʧɪŋ ˈsɪəriːz ɔːr ˈpleɪɪŋ səm ɡeɪmz ˈɒnˌlaɪn—ʤʌst ˈsɪmpl θɪŋz ðæt doʊnt rɪˈkwaɪər tuː mʌʧ ˈɛfərt]"
  },
  {
    "sentence": "Nice! When <span style=\"color:red;\">c</span>hoosing between watching series or gaming, what influences your choice most?",
    "original": "Nice! When choosing between watching series or gaming, what influences your choice most?",
    "translation": "不错！当你在看剧和玩游戏之间选择时，什么对你影响最大？",
    "phonetic": "[naɪs! wɛn ˈʧuːzɪŋ bɪˈtwiːn ˈwɑːʧɪŋ ˈsɪəriːz ɔːr ˈɡeɪmɪŋ, wɑːt ˈɪnfluənsɪz jʊər ʧɔɪs moʊst]"
  },
  {
    "sentence": "Is it just your <span style=\"color:red;\">m</span>ood, or maybe your energy level?",
    "original": "Is it just your mood, or maybe your energy level?",
    "translation": "是取决于你的心情，还是精力水平呢？",
    "phonetic": "[ɪz ɪt ʤʌst jʊər muːd, ɔːr ˈmeɪbi jʊər ˈɛnərʤi ˈlɛvəl]"
  },
  {
    "sentence": "Yeah, mostly my <span style=\"color:red;\">e</span>nergy.",
    "original": "Yeah, mostly my energy.",
    "translation": "是的，主要看我的精力。",
    "phonetic": "[jɛə, ˈməʊstli maɪ ˈɛnərʤi]"
  },
  {
    "sentence": "If I’m feeling <span style=\"color:red;\">e</span>nergetic, I’ll probably play some games, because that’s more engaging.",
    "original": "If I’m feeling energetic, I’ll probably play some games, because that’s more engaging.",
    "translation": "如果我感觉精力充沛，我可能会玩些游戏，因为这样更有参与感。",
    "phonetic": "[ɪf aɪm ˈfiːlɪŋ ˌɛnərˈʤɛtɪk, aɪl ˈprɒbəbli pleɪ səm ɡeɪmz, bɪˈkɒz ðæts mɔːr ɪnˈɡeɪʤɪŋ]"
  },
  {
    "sentence": "But if I’m already <span style=\"color:red;\">t</span>ired, then I usually just binge-watch shows.",
    "original": "But if I’m already tired, then I usually just binge-watch shows.",
    "translation": "但如果我已经很累了，我通常就只会追剧。",
    "phonetic": "[bʌt ɪf aɪm ɔːlˈrɛdi ˈtaɪərd, ðɛn aɪ ˈjuːʒuəli ʤʌst ˈbɪnʤwɒʧ ʃoʊz]"
  },
  {
    "sentence": "Makes perfect <span style=\"color:red;\">s</span>ense.",
    "original": "Makes perfect sense.",
    "translation": "很合理。",
    "phonetic": "[meɪks ˈpɜːrfɪkt sɛns]"
  }
]

const list2 = [
  {
    "sentence": "About how much time daily do you <span style=\"color:red;\">s</span>pend on entertainment like gaming or watching shows?",
    "original": "About how much time daily do you spend on entertainment like gaming or watching shows?",
    "translation": "你每天花在游戏或看剧等娱乐活动上的时间大概有多少？",
    "phonetic": "[əˈbaʊt haʊ mʌʧ taɪm ˈdeɪli duː ju spɛnd ɒn ˌɛntərˈteɪnmənt laɪk ˈɡeɪmɪŋ ɔːr ˈwɑːʧɪŋ ʃoʊz]"
  },
  {
    "sentence": "During weekdays, probably around an <span style=\"color:red;\">h</span>our at most.",
    "original": "During weekdays, probably around an hour at most.",
    "translation": "工作日的话，最多大概一个小时左右。",
    "phonetic": "[ˈdjʊərɪŋ ˈwiːkdeɪz, ˈprɒbəbli əˈraʊnd ən ˈaʊər æt məʊst]"
  },
  {
    "sentence": "But on weekends, that might <span style=\"color:red;\">s</span>tretch to around 4 or 5 hours a day.",
    "original": "But on weekends, that might stretch to around 4 or 5 hours a day.",
    "translation": "但在周末，这个时间可能会延长到每天4到5个小时。",
    "phonetic": "[bʌt ɒn ˈwiːkɛndz, ðæt maɪt strɛʧ tə əˈraʊnd fɔːr ɔː faɪv ˈaʊərz ə deɪ]"
  },
  {
    "sentence": "Does that seem <span style=\"color:red;\">r</span>easonable?",
    "original": "Does that seem reasonable?",
    "translation": "这样听起来合理吗？",
    "phonetic": "[dʌz ðæt siːm ˈriːzənəbəl]"
  }
]

const list3 = [
  {
    "sentence": "Interesting! Could you tell me more about your <span style=\"color:red;\">f</span>avorite genres of games or series?",
    "original": "Interesting! Could you tell me more about your favorite genres of games or series?",
    "translation": "很有趣！你能详细说说你最喜欢的游戏或剧集类型吗？",
    "phonetic": "[ˈɪntrəstɪŋ! kʊd ju tɛl mi mɔːr əˈbaʊt jʊər ˈfeɪvərɪt ˈʒɑːnrəz əv ɡeɪmz ɔː ˈsɪəriːz?]"
  },
  {
    "sentence": "My interest in <span style=\"color:red;\">f</span>avorite genres has definitely evolved over the years.",
    "original": "My interest in favorite genres has definitely evolved over the years.",
    "translation": "我对喜欢的类型这些年的确有所变化。",
    "phonetic": "[maɪ ˈɪntrəst ɪn ˈfeɪvərɪt ˈʒɑːnrəz hæz ˈdɛfɪnətli ɪˈvɒlvd ˈoʊvər ðə jɪərz.]"
  },
  {
    "sentence": "Do you have any memorable <span style=\"color:red;\">e</span>xperiences related to multiplayer games?",
    "original": "Do you have any memorable experiences related to multiplayer games?",
    "translation": "你有过任何与多人游戏相关的难忘经历吗？",
    "phonetic": "[du ju hæv ˈɛni ˈmɛmərəbəl ɪkˈspɪəriənsɪz rɪˈleɪtɪd tə ˌmʌltiˈpleɪər ɡeɪmz?]"
  },
  {
    "sentence": "I recall one <span style=\"color:red;\">t</span>ime when our team won—it was pretty memorable.",
    "original": "I recall one time when our team won—it was pretty memorable.",
    "translation": "我记得有一次我们队赢了，那真的很难忘。",
    "phonetic": "[aɪ rɪˈkɔːl wʌn taɪm wɛn aʊər tiːm wʌn—ɪt wəz ˈprɪti ˈmɛmərəbəl.]"
  },
  {
    "sentence": "Have your thoughts about <span style=\"color:red;\">v</span>irtual reality gaming changed recently?",
    "original": "Have your thoughts about virtual reality gaming changed recently?",
    "translation": "你最近对虚拟现实游戏的看法有所改变吗？",
    "phonetic": "[hæv jʊər θɔːts əˈbaʊt ˈvɜːrtʃuəl riˈæləti ˈɡeɪmɪŋ ʧeɪnʤd ˈriːsntli?]"
  },
  {
    "sentence": "Well, my perspective on VR gaming has <span style=\"color:red;\">d</span>efinitely evolved recently.",
    "original": "Well, my perspective on VR gaming has definitely evolved recently.",
    "translation": "是的，我对VR游戏的看法最近肯定有了变化。",
    "phonetic": "[wɛl, maɪ pərˈspɛktɪv ɒn viː ɑːr ˈɡeɪmɪŋ hæz ˈdɛfɪnətli ɪˈvɒlvd ˈriːsntli.]"
  },
  {
    "sentence": "What usually influences your <span style=\"color:red;\">p</span>reference for PC or console gaming?",
    "original": "What usually influences your preference for PC or console gaming?",
    "translation": "通常是什么影响了你对PC或主机游戏的偏好呢？",
    "phonetic": "[wɑːt ˈjuːʒuəli ˈɪnfluənsɪz jʊər ˈprɛfərəns fər piːˈsiː ɔːr ˈkɒnsoʊl ˈɡeɪmɪŋ?]"
  },
  {
    "sentence": "Usually, it depends on what my friends are <span style=\"color:red;\">p</span>laying.",
    "original": "Usually, it depends on what my friends are playing.",
    "translation": "通常取决于我朋友们在玩什么。",
    "phonetic": "[ˈjuːʒuəli, ɪt dɪˈpɛndz ɒn wɑːt maɪ frɛndz ɑːr ˈpleɪɪŋ.]"
  },
  {
    "sentence": "Do you have an interest in <span style=\"color:red;\">e</span>sports or competitive gaming?",
    "original": "Do you have an interest in esports or competitive gaming?",
    "translation": "你对电竞或竞技游戏感兴趣吗？",
    "phonetic": "[du ju hæv ən ˈɪntrəst ɪn ˈiːˌspɔːts ɔːr kəmˈpɛtɪtɪv ˈɡeɪmɪŋ?]"
  },
  {
    "sentence": "Yeah, I've become more <span style=\"color:red;\">i</span>nterested in watching competitive matches lately.",
    "original": "Yeah, I've become more interested in watching competitive matches lately.",
    "translation": "是的，我最近对观看竞技比赛更感兴趣了。",
    "phonetic": "[jɛə, aɪv bɪˈkʌm mɔːr ˈɪntrɪstɪd ɪn ˈwɒʧɪŋ kəmˈpɛtɪtɪv ˈmæʧɪz ˈleɪtli.]"
  }
]


export  default list1.concat(list2).concat(list3);