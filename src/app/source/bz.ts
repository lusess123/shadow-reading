const list1 = [
    {
      "sentence": "So what are you gonna do?",
      "original": "So what are you gonna do?",
      "translation": "所以你打算做什么？",
      "phonetic": "[soʊ wʌt ər ju ˈɡɒnə duː]"
    },
    {
      "sentence": "What do you want to know?",
      "original": "What do you want to know?",
      "translation": "你想知道什么？",
      "phonetic": "[wʌt də ju wɒnt tə noʊ]"
    },
    {
      "sentence": "Yeah, I think we should talk about that.",
      "original": "Yeah, I think we should talk about that.",
      "translation": "是的，我觉得我们应该谈谈这个。",
      "phonetic": "[jæ aɪ θɪŋk wi ʃʊd tɔːk əˈbaʊt ðæt]"
    },
    {
      "sentence": "She took us to a place she knew we wouldn’t like.",
      "original": "She took us to a place she knew we wouldn’t like.",
      "translation": "她带我们去了一个她知道我们不会喜欢的地方。",
      "phonetic": "[ʃi tʊk əs tə ə pleɪs ʃi nuː wi ˈwʊdənt laɪk]"
    },
    {
      "sentence": "That doesn’t answer my question!",
      "original": "That doesn’t answer my question!",
      "translation": "那并没有回答我的问题！",
      "phonetic": "[ðæt ˈdʌznt ˈænsər maɪ ˈkwɛsʧən]"
    },
    {
      "sentence": "I wanted to do something special.",
      "original": "I wanted to do something special.",
      "translation": "我想做一些特别的事情。",
      "phonetic": "[aɪ ˈwɒntɪd tə du ˈsʌmθɪŋ ˈspɛʃəl]"
    },
    {
      "sentence": "But I think we should tell her.",
      "original": "But I think we should tell her.",
      "translation": "但是我觉得我们应该告诉她。",
      "phonetic": "[bʌt aɪ θɪŋk wi ʃʊd tɛl hɜːr]"
    },
    {
      "sentence": "Ho, oh, the baby’s awake. Do... do you want to meet him?",
      "original": "Ho, oh, the baby’s awake. Do... do you want to meet him?",
      "translation": "哇哦，宝宝醒了。你想见他吗？",
      "phonetic": "[hoʊ oʊ ðə ˈbeɪbiz əˈweɪk duː dʒu ˈwɒnt tə ˈmiːt hɪm]"
    },
    {
      "sentence": "Robin Gallagher was right. The people she had met on Wisteria Lane had really looked at her.",
      "original": "Robin Gallagher was right. The people she had met on Wisteria Lane had really looked at her.",
      "translation": "罗宾·加拉格尔是对的。她在紫藤巷遇到的人确实看了她。",
      "phonetic": "[ˈrɒbɪn ˈɡælɪɡər wəz raɪt ðə ˈpiːpl ʃi həd mɛt ɒn wɪˈstɪriə leɪn həd ˈrɪəli lʊkt æt hɜːr]"
    },
    {
      "sentence": "Are you angry with me? Why would you say that?",
      "original": "Are you angry with me? Why would you say that?",
      "translation": "你在生我的气吗？为什么你会这么说？",
      "phonetic": "[ɑːr ju ˈæŋɡri wɪð mi waɪ wʊd ju seɪ ðæt]"
    },
    {
      "sentence": "Okay, okay, I’ll give you 20 bucks, if you get out of this car right now.",
      "original": "Okay, okay, I’ll give you 20 bucks, if you get out of this car right now.",
      "translation": "好吧，好吧，我给你20美元，如果你现在下车的话。",
      "phonetic": "[ˈoʊkeɪ ˈoʊkeɪ aɪl ɡɪv ju ˈtwɛnti bʌks ɪf ju ɡɛt aʊt əv ðɪs kɑːr raɪt naʊ]"
    },
    {
      "sentence": "I’ve got to see you. I’ve got to get off this plane.",
      "original": "I’ve got to see you. I’ve got to get off this plane.",
      "translation": "我得见你。我得下这架飞机。",
      "phonetic": "[aɪv ˈɡɒt tə si ju aɪv ˈɡɒt tə ɡɛt ɒf ðɪs pleɪn]"
    },
    {
      "sentence": "And I have one idea, but it... it’s kind of crazy.",
      "original": "And I have one idea, but it... it’s kind of crazy.",
      "translation": "我有一个想法，但是这有点疯狂。",
      "phonetic": "[ænd aɪ həv wʌn aɪˈdɪə bʌt ɪt ɪts ˈkaɪnd əv ˈkreɪzi]"
    },
    {
      "sentence": "It’s weird, right?",
      "original": "It’s weird, right?",
      "translation": "很奇怪吧？",
      "phonetic": "[ɪts wɪrd raɪt]"
    },
    {
      "sentence": "A grown man in his 30s living with my mother.",
      "original": "A grown man in his 30s living with my mother.",
      "translation": "一个30多岁的成年人还跟我妈住在一起。",
      "phonetic": "[ə ɡroʊn mæn ɪn hɪz ˈθɜːrtiz ˈlɪvɪŋ wɪð maɪ ˈmʌðər]"
    },
    {
      "sentence": "That is weird. I thought he was, like, 45.",
      "original": "That is weird. I thought he was, like, 45.",
      "translation": "那真的很奇怪。我以为他，大概，45岁了。",
      "phonetic": "[ðæt ɪz wɪrd aɪ θɔːt hi wəz laɪk ˈfɔːrtiˈfaɪv]"
    },
    {
      "sentence": "Okay, look. You are right.",
      "original": "Okay, look. You are right.",
      "translation": "好吧，你听我说。你是对的。",
      "phonetic": "[ˈoʊkeɪ lʊk ju ɑːr raɪt]"
    },
    {
      "sentence": "I don’t have many friends.",
      "original": "I don’t have many friends.",
      "translation": "我没有多少朋友。",
      "phonetic": "[aɪ doʊnt həv ˈmɛni frɛndz]"
    },
    {
      "sentence": "So I was hoping to get to know Paige’s mom.",
      "original": "So I was hoping to get to know Paige’s mom.",
      "translation": "所以我希望能认识佩吉的妈妈。",
      "phonetic": "[soʊ aɪ wəz ˈhoʊpɪŋ tə ɡɛt tə noʊ ˈpeɪʤəz mɑːm]"
    },
    {
      "sentence": "But if it makes you uncomfortable, then I will call her and cancel.",
      "original": "But if it makes you uncomfortable, then I will call her and cancel.",
      "translation": "但如果这让你觉得不舒服，我可以打电话给她取消。",
      "phonetic": "[bʌt ɪf ɪt meɪks ju ʌnˈkʌmfərtəbl ðɛn aɪ wɪl kɔːl hɜːr ənd ˈkænsəl]"
    },
    {
      "sentence": "I’ll think about it.",
      "original": "I’ll think about it.",
      "translation": "我会考虑的。",
      "phonetic": "[aɪl ˈθɪŋk əˈbaʊt ɪt]"
    },
    {
      "sentence": "Thank you, baby.",
      "original": "Thank you, baby.",
      "translation": "谢谢你，宝贝。",
      "phonetic": "[θæŋk ju ˈbeɪbi]"
    },
    {
      "sentence": "Guilt and jealousy in the same day, I slept hard that night.",
      "original": "Guilt and jealousy in the same day, I slept hard that night.",
      "translation": "在同一天感受到愧疚和嫉妒，我那晚难以入睡。",
      "phonetic": "[ɡɪlt ənd ˈʤɛləsi ɪn ðə seɪm deɪ aɪ slɛpt hɑːrd ðæt naɪt]"
    }
  ]
const list2 = [
    {
      "sentence": "Honey, just put on something else, and take down the makeup.",
      "original": "Honey, just put on something else, and take down the makeup.",
      "translation": "宝贝，去找件别的衣服穿，再把妆化淡一点。",
      "phonetic": "[ˈhʌni ʤʌst pʊt ɒn ˈsʌmθɪŋ ɛls ənd teɪk daʊn ðə ˈmeɪkʌp]"
    },
    {
      "sentence": "Why are you guys acting like this is my fault?",
      "original": "Why are you guys acting like this is my fault?",
      "translation": "你们干嘛表现得好像这都是我的错一样？",
      "phonetic": "[waɪ ɑːr ju ɡaɪz ˈæktɪŋ laɪk ðɪs ɪz maɪ fɔːlt]"
    },
    {
      "sentence": "Everybody was drinking, everybody ran.",
      "original": "Everybody was drinking, everybody ran.",
      "translation": "每个人都喝酒了，也都逃跑了。",
      "phonetic": "[ˈɛvrɪˌbɒdi wəz ˈdrɪŋkɪŋ ˈɛvrɪˌbɒdi ræn]"
    },
    {
      "sentence": "I just got caught.",
      "original": "I just got caught.",
      "translation": "我只是被逮住了而已。",
      "phonetic": "[aɪ ʤʌst ɡɒt kɔːt]"
    },
    {
      "sentence": "If anything, I’m the victim here.",
      "original": "If anything, I’m the victim here.",
      "translation": "真要细究的话，我才是受害者。",
      "phonetic": "[ɪf ˈɛnɪθɪŋ aɪm ðə ˈvɪktɪm hɪə]"
    },
    {
      "sentence": "What? Just stop -- just stop talking, Haley.",
      "original": "What? Just stop -- just stop talking, Haley.",
      "translation": "什么？别，别说了，海莉。",
      "phonetic": "[wʌt ʤʌst stɒp ʤʌst stɒp ˈtɔːkɪŋ ˈheɪli]"
    },
    {
      "sentence": "Hello, Janice, Hi. I’m so glad that you called.",
      "original": "Hello, Janice, Hi. I’m so glad that you called.",
      "translation": "你好，珍妮斯。很高兴你打来。",
      "phonetic": "[hɛˈloʊ ˈʤænɪs haɪ aɪm soʊ ɡlæd ðæt ju kɔːld]"
    },
    {
      "sentence": "I know I’ve been acting really weird lately...and it’s just because I’m crazy about you...",
      "original": "I know I’ve been acting really weird lately...and it’s just because I’m crazy about you...",
      "translation": "我知道我最近表现很怪，那是因为我太爱你了。",
      "phonetic": "[aɪ noʊ aɪv bɪn ˈæktɪŋ ˈrɪəli wɪrd ˈleɪtli ənd ɪts ʤʌst bɪˈkɔːz aɪm ˈkreɪzi əˈbaʊt ju]"
    },
    {
      "sentence": "And I just got stupid and scared...and stupid a couple of more times.",
      "original": "And I just got stupid and scared...and stupid a couple of more times.",
      "translation": "我就变得很蠢，又很害怕，而且又蠢了好几次。",
      "phonetic": "[ənd aɪ ʤʌst ɡɒt ˈstuːpɪd ənd skɛrd ənd ˈstuːpɪd ə ˈkʌpl əv mɔːr taɪmz]"
    }
  ]
const list3 = [
    {
      "sentence": "It’s weird, right?",
      "original": "It’s weird, right?",
      "translation": "这很奇怪，对吧？",
      "phonetic": "[ɪts wɪrd raɪt]"
    },
    {
      "sentence": "A grown man in his 30s living with my mother.",
      "original": "A grown man in his 30s living with my mother.",
      "translation": "一个30多岁的成年男人和我母亲住在一起。",
      "phonetic": "[ə ɡroʊn mæn ɪn hɪz ˈθɜːrtiz ˈlɪvɪŋ wɪð maɪ ˈmʌðər]"
    },
    {
      "sentence": "That is weird. I thought he was, like, 45.",
      "original": "That is weird. I thought he was, like, 45.",
      "translation": "这很奇怪。我以为他大概有45岁了。",
      "phonetic": "[ðæt ɪz wɪrd aɪ θɔːt hi wəz laɪk ˈfɔːrti ˈfaɪv]"
    },
    {
      "sentence": "Okay, look. You are right.",
      "original": "Okay, look. You are right.",
      "translation": "好吧，你听我说，你是对的。",
      "phonetic": "[ˈoʊkeɪ lʊk ju ɑːr raɪt]"
    },
    {
      "sentence": "I don’t have many friends.",
      "original": "I don’t have many friends.",
      "translation": "我没有很多朋友。",
      "phonetic": "[aɪ doʊnt həv ˈmɛni frɛndz]"
    },
    {
      "sentence": "So I was hoping to get to know Paige’s mom.",
      "original": "So I was hoping to get to know Paige’s mom.",
      "translation": "所以我希望能认识佩吉的妈妈。",
      "phonetic": "[soʊ aɪ wəz ˈhoʊpɪŋ tə ɡɛt tə noʊ ˈpeɪʤəz mɑːm]"
    },
    {
      "sentence": "But if it makes you uncomfortable, then I will call her and cancel.",
      "original": "But if it makes you uncomfortable, then I will call her and cancel.",
      "translation": "但如果这让你觉得不舒服，我会打电话给她取消。",
      "phonetic": "[bʌt ɪf ɪt meɪks ju ʌnˈkʌmfərtəbl ðɛn aɪ wɪl kɔːl hɜːr ənd ˈkænsəl]"
    },
    {
      "sentence": "I’ll think about it.",
      "original": "I’ll think about it.",
      "translation": "我会考虑的。",
      "phonetic": "[aɪl ˈθɪŋk əˈbaʊt ɪt]"
    },
    {
      "sentence": "Thank you, baby.",
      "original": "Thank you, baby.",
      "translation": "谢谢你，宝贝。",
      "phonetic": "[θæŋk ju ˈbeɪbi]"
    },
    {
      "sentence": "Guilt and jealousy in the same day, I slept hard that night.",
      "original": "Guilt and jealousy in the same day, I slept hard that night.",
      "translation": "同一天感受愧疚和嫉妒，那晚我辗转难眠。",
      "phonetic": "[ɡɪlt ənd ˈʤɛləsi ɪn ðə seɪm deɪ aɪ slɛpt hɑːrd ðæt naɪt]"
    }
  ]

  
  const list4 = [
    {
      "sentence": "Everybody was drinking, everybody ran.",
      "original": "Everybody was drinking, everybody ran.",
      "translation": "每个人都喝酒了，也都跑了。",
      "phonetic": "[ˈɛvrɪˌbɒdi wəz ˈdrɪŋkɪŋ ˈɛvrɪˌbɒdi ræn]"
    },
    {
      "sentence": "I just got caught.",
      "original": "I just got caught.",
      "translation": "我只是被逮住了而已。",
      "phonetic": "[aɪ ʤʌst ɡɒt kɔːt]"
    },
    {
      "sentence": "If anything, I’m the victim here.",
      "original": "If anything, I’m the victim here.",
      "translation": "真要细究的话，我才是受害者。",
      "phonetic": "[ɪf ˈɛnɪθɪŋ aɪm ðə ˈvɪktɪm hɪə]"
    },
    {
      "sentence": "What? Just stop -- just stop talking, Haley.",
      "original": "What? Just stop -- just stop talking, Haley.",
      "translation": "什么？别说了，海莉。",
      "phonetic": "[wʌt ʤʌst stɒp ʤʌst stɒp ˈtɔːkɪŋ ˈheɪli]"
    },
    {
      "sentence": "Hello, Janice, Hi. I’m so glad that you called.",
      "original": "Hello, Janice, Hi. I’m so glad that you called.",
      "translation": "你好，珍妮斯。我很高兴你打来。",
      "phonetic": "[hɛˈloʊ ˈʤænɪs haɪ aɪm soʊ ɡlæd ðæt ju kɔːld]"
    },
    {
      "sentence": "I know I’ve been acting really weird lately...and it’s just because I’m crazy about you...",
      "original": "I know I’ve been acting really weird lately...and it’s just because I’m crazy about you...",
      "translation": "我知道我最近表现得很奇怪，那是因为我太喜欢你了。",
      "phonetic": "[aɪ noʊ aɪv bɪn ˈæktɪŋ ˈrɪəli wɪrd ˈleɪtli ənd ɪts ʤʌst bɪˈkɔːz aɪm ˈkreɪzi əˈbaʊt ju]"
    },
    {
      "sentence": "And I just got stupid and scared...and stupid a couple of more times.",
      "original": "And I just got stupid and scared...and stupid a couple of more times.",
      "translation": "然后我变得愚蠢又害怕，而且蠢了好几次。",
      "phonetic": "[ənd aɪ ʤʌst ɡɒt ˈstuːpɪd ənd skɛrd ənd ˈstuːpɪd ə ˈkʌpl əv mɔːr taɪmz]"
    },
    {
      "sentence": "Honey, just put on something else, and take down the makeup.",
      "original": "Honey, just put on something else, and take down the makeup.",
      "translation": "宝贝，去换件衣服，把妆化淡一点。",
      "phonetic": "[ˈhʌni ʤʌst pʊt ɒn ˈsʌmθɪŋ ɛls ənd teɪk daʊn ðə ˈmeɪkʌp]"
    },
    {
      "sentence": "Why are you guys acting like this is my fault?",
      "original": "Why are you guys acting like this is my fault?",
      "translation": "为什么你们表现得好像是我的错？",
      "phonetic": "[waɪ ɑːr ju ɡaɪz ˈæktɪŋ laɪk ðɪs ɪz maɪ fɔːlt]"
    },
    {
      "sentence": "If anything, I’m the victim here.",
      "original": "If anything, I’m the victim here.",
      "translation": "真要说的话，我才是受害者。",
      "phonetic": "[ɪf ˈɛnɪθɪŋ aɪm ðə ˈvɪktɪm hɪə]"
    },
    {
      "sentence": "I just got caught.",
      "original": "I just got caught.",
      "translation": "我只是被抓住了而已。",
      "phonetic": "[aɪ ʤʌst ɡɒt kɔːt]"
    }
  ]

  export default list1.concat(list2, list3, list4)
  