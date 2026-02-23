# 🎯 语音AI端到端模型讨论 英语段落翻译

本文共 **37 个语义单元**，将全部翻译。

---

(1) [20:24-20:49]

**{Yeah, I think [going this direction] (actually) something (that's interesting) [that the Deepgram founder Scott was saying] is (actually) going the direction of [how can we, instead of obsessing over larger and larger models],} {[which gives like you know open AI and large labs] are willing — actually I'll just say large labs are willing to spend you know very large sums of money in order to do larger and larger models,} {but these ultimately are very costly and don't productionize well [for like very simple use cases].}**

是的，这个方向很有意思。**Deepgram** 创始人 **Scott** 也在谈同一个方向：我们不应该一味追求越来越大的模型——虽然各大实验室愿意砸重金不断扩大规模，但这些模型最终非常昂贵，在简单使用场景下也难以落地量产。

解析：
* **obsess over** 🔥：短语，痴迷于、一味追求
* **large labs**：大型实验室（泛指 OpenAI、Google 等头部 AI 公司）
* **productionize** 🔥：动词，推向生产环境、落地量产
* **ultimately**：副词，最终、归根结底

---

(2) [20:49-21:18]

**{And I think something [I'm excited about] in general is how can you create smaller and smaller models [that are very targeted for these verticals].} {There's much more of the 8020 rule [than there is in text],} {where you know booking an appointment accounts for just a massive number of use cases, or being able to handle a customer inquiry and get some user information [like what's your birthday, what's your social security or your credit card (or whatever you're trying to verify)].}**

我真正兴奋的是：如何打造越来越小、高度垂直化的模型。语音领域的二八法则比文本领域更明显——预约、客户咨询和身份验证（生日、社保号、信用卡号等）这些场景就占了绝大多数使用案例。

解析：
* **verticals** 🔥：名词，垂直行业、细分领域
* **8020 rule**：二八法则，20% 的场景覆盖 80% 的需求
* **account for** 🔥：动词短语，占（比例）
* **social security**：社会安全号（美国身份证件）

---

(3) [21:18-21:38]

**{And these account for a really large portion of things [that you really want to nail every single time],} {and having smaller models [that are really targeted at doing customer service versus doing a podcast versus creating YouTube content] makes a lot of sense for audio.}**

这些场景占了你每次都必须做好的绝大部分需求。针对客服、播客、YouTube 内容分别打造小而精的专用模型，对语音来说非常合理。

解析：
* **nail** 🔥：动词（俚语），完美完成、每次都做对
* **every single time**：强调，每一次都
* **targeted at**：短语，专门针对、专为……设计

---

(4) [21:38-22:08]

**{Going towards smaller models — I think that's the right direction,} {because the very large integrated multimodal model is powerful, but it's complex to imagine [that it is a viable business model] to put it into every interaction,} {right, because in some context like customer care, some phone calls are going to create a lot of value [like if you make a claim to an airline and you get reimbursed (or whatever)]} {— you know that creates a lot of value.}**

朝更小模型的方向走，我认为是正确的。因为大型一体化多模态模型虽然强大，但把它用在每一次交互上，很难说是可行的商业模式。比如客服场景，有些电话很有价值——比如你向航空公司索赔并获得赔偿——这确实创造了很大价值。

解析：
* **integrated multimodal model**：一体化多模态模型
* **viable** 🔥：形容词，可行的、有生命力的
* **make a claim**：提出索赔
* **get reimbursed** 🔥：动词短语，获得报销/赔偿

---

(5) [22:08-22:25]

**{But when people just call to know how to reboot their computer or whatever, the value is extremely marginal.} {So you don't want to put a gigantic mixture of experts [that can solve international or mathematical olympiads] just to do that.}**

但当人们只是打电话问如何重启电脑，价值就极其微薄。你不需要为此部署一个能解决国际数学奥林匹克题目的庞大混合专家模型。

解析：
* **marginal** 🔥：形容词，微乎其微的、边际性的
* **mixture of experts (MoE)**：混合专家模型（AI 架构术语）
* **gigantic**：形容词，巨大的

---

(6) [22:19-22:46]

**{So for voice we are rather trying to go towards miniaturization.} {So for example at Koutat last week we open-sourced **Pocket TTS**, which is like the first **TTS** [that can run on **CPU**].} {So it's not only on-device, it's on-device on **CPU**.} {We are now thinking about the best way to advertise it — and that's taking like very old smartphones and just having the thing running on it.}**

对语音来说，我们正在朝小型化方向努力。比如 **Koutat** 上周开源了 **Pocket TTS**——这是首个可以在 **CPU** 上运行的语音 **TTS** 模型，不只是端侧部署，而是在 **CPU** 上运行。我们现在在想怎么推广它，计划是拿一些老旧手机直接跑给大家看。

解析：
* **miniaturization** 🔥：名词，小型化
* **open-source**：动词，开源（此处作动词用）
* **on-device**：形容词/副词，端侧的、在设备本地运行
* **CPU**：中央处理器（相对于 GPU 更普通、低功耗）

---

(7) [22:46-23:14]

**{And this is going to have natural voice in a lot of contexts.} {Right now I think there is a big split [between the premium experience of voice and the low-end scalable experience of voice],} {and you can have like robotic but very affordable, or high quality but very expensive.} {Our goal is rather that in all use cases you can have access to human-like level of interaction and speech.}**

这样就能在很多场景下实现自然的语音体验。目前语音领域存在明显分裂：要么昂贵的高端体验，要么廉价但机械的低端体验。而我们的目标是让所有场景都能获得接近人类水平的语音交互。

解析：
* **premium**：形容词，高端的、优质的
* **scalable**：形容词，可扩展的、可规模化的
* **robotic**：形容词，机械的、像机器人的
* **human-like** 🔥：形容词，接近人类的、类人的

---

(8) [23:14-23:44]

**{Yeah, I think especially because the voice models are so expensive, it's a really non-trivial expense to be running these models,} {and we're still seeing in production today [running up against the fact] [that it might not be cheaper than outsourcing this task somewhere].} {So that part is really difficult in terms of [how you guys are combining **LLMs** and everything [that we've learned from **TTS** tokenization]].}**

是的，语音模型非常昂贵，运营成本绝非小数目。我们在生产环境中仍然发现，这些模型甚至不一定比外包这项任务更便宜。所以如何将 **LLM** 与 **TTS** 分词技术的经验相结合，这部分确实很难。

解析：
* **non-trivial** 🔥：形容词，不可忽视的、相当大的（trivial = 微不足道的）
* **run up against** 🔥：短语动词，遭遇、碰到（障碍/问题）
* **outsourcing**：外包
* **tokenization**：分词化（将语音/文本切分成 token 的过程）

---

(9) [23:44-24:07]

**{What are some of the techniques [where you're improving speech-to-speech models] and what's kind of on the frontier?} {I know to a lot of people they just know [that speech-to-speech today maybe isn't there in terms of instruction following],} {but what does the kind of road map of advancements look like?}**

你们在哪些方面改进了语音到语音模型？前沿在哪里？很多人知道当前语音到语音在指令遵循方面还不太行，但具体的进步路线图是什么样的？

解析：
* **on the frontier**：在前沿、处于最先进领域
* **instruction following** 🔥：指令遵循（AI 模型按照用户指令行事的能力）
* **road map of advancements**：进步路线图

---

(10) [24:07-24:38]

**{So I would say one of the biggest challenges is the intelligence gap [between the original text model and the speech-to-speech model].} {Then you can tackle this from a lot of angles.} {There is recycling as much as possible from the original architecture — you know, freezing some of it so [that you have a guarantee (that it is not going to change)], but changing enough so [that it can still learn to speak], or adding parameters in the right way.}**

我认为最大的挑战之一是原始文本模型与语音到语音模型之间的**智能差距**。应对这一问题可以从多个角度入手：尽可能复用原始架构——冻结部分参数以保证不变，同时调整足够多的部分让它学会说话，或以正确的方式添加新参数。

解析：
* **intelligence gap** 🔥：智能差距（文本模型和语音模型能力的落差）
* **tackle** 🔥：动词，着手解决、应对
* **recycling**：复用、重用（此处指重用文本模型架构）
* **freezing parameters**：冻结参数（训练时不更新某些层的权重）

---

(11) [24:38-25:05]

**{So you don't change your text model, but you add things [that turn it into a speech model], with guarantees [that you didn't forget anything].} {Data reinforcement learning — so it's really you can take it from all sides.} {And then I think there is a big part about it [that is rather about the kind of data you use to train this model].} {So for example **Moshi** when we released it in 2024, technically everything was in the architecture to have the richest emotional conversations — it didn't throw away anything from your voice.}**

你不改变文本模型，而是在上面添加组件，保证不会遗忘原有知识，使其变成语音模型。数据强化学习也是一个方向——总的来说可以全方位入手。其中很大一部分在于用什么数据来训练。比如 **Moshi** 在 2024 年发布时，架构层面完全具备了进行最丰富情感对话的能力——它不会丢弃你声音中的任何信息。

解析：
* **reinforcement learning**：强化学习（通过奖励信号优化模型）
* **throw away**：丢弃、抛弃
* **richest emotional conversations**：最丰富的情感对话

---

(12) [25:05-25:31]

**{So if you were being ironic or confused or bored or whatever, technically it could capture it.} {The reason why it didn't is [that it was not in its training data].} {So it was never trained to use this kind of what we call paralinguistic information — [which is everything [that is in what we say] but is not what we say] — so it's how we say things.}**

如果你在说反话、表现困惑或无聊，模型技术上是可以捕捉到的。但之所以没有，是因为训练数据里没有这些。模型从来没被训练去使用所谓的**副语言信息**——即我们说话方式中除了字面意思之外的所有信息，是我们**怎么说**而非**说什么**。

解析：
* **ironic**：形容词，讽刺的、反讽的
* **paralinguistic information** 🔥：副语言信息（语调、情绪、停顿等非字面信息）
* **capture**：动词，捕捉、感知

---

(13) [25:31-25:55]

**{It was never trained to do this kind of thing.} {And then it's really about the data and the way you do instruction tuning for **LLM** — and here it is exactly the same.} {You train your model — for example, you would ask the model: "describe my voice." And the model would have a ground truth [that will correspond to your demographic characteristics, your speaking style, and so on].} {And then the only way for the model to answer about that is to extract the relevant information.}**

它从来没被训练去做这类事情。这就像 **LLM** 的指令微调一样——完全相同的逻辑。你训练模型：让它描述你的声音，然后提供对应的标准答案（包含人口特征、说话风格等），模型要回答这个问题就必须从语音中提取相关信息。

解析：
* **instruction tuning** 🔥：指令微调（通过有标注的问答对来优化 LLM 的关键技术）
* **ground truth**：标准答案、真实标签（机器学习术语）
* **demographic characteristics**：人口特征（年龄、性别、口音等）
* **extract**：动词，提取

---

(14) [25:55-26:27]

**{Otherwise it's just going to predict random tokens.} {And so by training the model to do all these kinds of tasks, it will be naturally able to find these cues in speech.} {So there are challenges on the architecture, and there are some really about what we call instrument data — [which is the kind of synthetic data (you specifically design) to teach specific characteristics and abilities to your model] — and both are necessary to tackle the issue.}**

否则模型只会随机预测 token。通过训练模型完成这些任务，它就能自然地从语音中找到线索。挑战来自两方面：架构设计，以及**工具数据**——即专门设计的合成数据，用于教模型学习特定特征和能力。两者相互独立但都不可或缺。

解析：
* **predict random tokens**：随机预测 token（模型没有真正理解时的行为）
* **cues** 🔥：名词，线索、提示信号
* **instrument data / synthetic data** 🔥：工具数据/合成数据（人工设计的训练数据）

---

(15) [26:27-27:00]

**{That's really exciting to hear — how it's not only just a data problem on the audio side but also bringing in how can we merge the learnings from a lot of these **LLMs**.} {I think that's one of the hard parts too — we still haven't solved a lot of the instruction following pieces at the **LLM** layer, and so — today I think we still see a lot, even with cascading architectures — how do you get an agent to follow the instructions continuously in order to get to the end of a task?}**

这真的很令人兴奋——不仅仅是音频数据问题，还在于如何融合 **LLM** 的学习成果。这也是难点之一：**LLM** 层面的指令遵循问题还没完全解决。即使用了级联架构，如何让 agent 持续遵循指令直到完成任务，依然是个大问题。

解析：
* **merge the learnings** 🔥：融合学到的经验/知识
* **cascading architectures** 🔥：级联架构（STT → LLM → TTS 的分阶段处理方式）
* **continuously**：副词，持续地、始终地

---

(16) [27:00-27:38]

**{And so that is really what unlocked voice, I think — was when **LLMs** came out and was actually at the level of reasoning capabilities [that you could autonomously navigate a task].} {But today there are still challenges even at the **LLM** layer.} {The speech-to-speech model will always be derived from a text model originally, so they will keep up with the text model.} {One thing [that is very interesting] for voice is — we are all fighting around latency of **STT**, **TTS** — but with agents solving more and more complex tasks, now in a lot of cases the bottleneck in latency is not the speech part, it's the **LLM** just producing a meaningful answer.}**

真正让语音实用的，是 **LLM** 推理能力达到了能自主完成任务的水平。但即便如此，**LLM** 层面仍有挑战。语音到语音模型始终基于文本模型衍生，因此二者会同步进步。有趣的是，现在延迟瓶颈已不再是 **STT**/**TTS**，而是 **LLM** 生成有意义答案的速度。

解析：
* **unlock**：动词，解锁、使某事成为可能
* **autonomously navigate a task**：自主导航/完成一项任务
* **derived from**：衍生自、基于
* **bottleneck** 🔥：名词，瓶颈

---

(17) [27:38-28:10]

**{And I think it's interesting because it creates challenges [to keep a natural conversation], despite the fact [that the **LLM** is going to have an arbitrary amount of time necessary to answer the user].} {So in some cases, if it's like one or two seconds, you can have fake keyboard clicks — [that works pretty well] because it sounds like you have a human on the other side of the phone.}**

这很有意思——**LLM** 需要任意长的时间来回答，这给维持自然对话带来了挑战。对于一两秒的延迟，可以播放虚假的键盘敲击声——听起来就像电话另一头有个真人在打字，效果出奇地好。

解析：
* **arbitrary** 🔥：形容词，任意的、不确定的（这里指延迟时间长短不可预测）
* **fake keyboard clicks** 🔥：虚假键盘点击音（用来掩盖 AI 处理延迟的小技巧）
* **the other side of the phone**：电话的另一头

---

(18) [28:10-28:50]

**{But what is more interesting is — eventually, if the reasoning is, let's say, 15 seconds long — you will also want your model to get the user through [what is happening in the background], so [that they are not wondering [whether the whole thing broke and they should hang up]].} {And I like this one because it's also about [how you can turn the thinking trace into something [that can be meaningfully inserted in the conversation]].}**

但更有趣的是，如果推理时间达到 15 秒，你需要让模型告知用户后台正在发生什么，防止用户以为系统崩溃而挂断电话。我喜欢这个方向，因为它关乎如何将模型的**思考轨迹**转化为可以自然插入对话的内容。

解析：
* **hang up**：动词短语，挂断电话
* **thinking trace** 🔥：思考轨迹、推理链（模型内部推理过程的记录）
* **meaningfully inserted**：有意义地插入（而非生硬打断）

---

(19) [28:50-29:30]

**{So interestingly, even the mode of reasoning of the text models — [which is fine [when it's a text model] because you look at it, it's reasoning, you just do something else and then you come back] — how do you make it not annoying in a conversation?} {I think it's very interesting.} {And then the second thing [that is going to be critical] is: the bigger and the more expensive the text models are — I know now there is like a new one every few days — what is the most effective way of turning them into speech-to-speech models?} {And here we see that we are very inefficient.}**

文本模型的推理方式在文本场景没问题——因为你看到它在思考，可以去干别的；但在语音对话中怎么不让它显得烦人？这很有趣。第二个关键问题是：随着文本模型越来越大、越来越贵（现在几乎每隔几天就有新模型），如何最有效地把它们转化为语音到语音模型？目前我们的转化方式非常低效。

解析：
* **mode of reasoning**：推理方式
* **annoying**：形容词，烦人的
* **critical**：形容词，关键的、至关重要的
* **inefficient**：形容词，低效的

---

(20) [29:30-30:00]

**{So I did my PhD in a lab [that studies language acquisition in babies].} {So every weekend we received babies. We did experiments — you track their eyes.} {There are even people [who spent days in families just writing everything [that is said to a baby]] and they just computed the statistics.} {And at most, in the most favorable conditions, at 5 years old, a baby has heard less than 5,000 hours of speech.}**

我读博士时在一个研究婴儿语言习得的实验室。我们每个周末都接待婴儿做实验——比如追踪他们的眼睛。甚至有研究者在家庭中待了好几天，记录所有说给婴儿听的话并做统计分析。结论是：在最理想的条件下，一个 5 岁孩子听到的语音不超过 5000 小时。

解析：
* **language acquisition** 🔥：语言习得（孩子学习语言的过程）
* **track their eyes**：追踪眼睛（眼动追踪实验）
* **compute the statistics**：计算统计数据
* **favorable conditions**：有利条件、最佳情况

---

(21) [30:00-30:26]

**{And you know they can speak, they are very resilient, they can learn new words and so on.} {5,000 hours — I mean, we train, everybody trains models on millions of hours — and so there is also the efficiency of human learning relative to machine learning.} {It's a known problem, but in speech it's really crazy, because in particular as humans we learn to speak way before we learn to read.}**

但那时他们已经能说话、很有韧性、能学新词了。5000 小时——而我们训练模型动辄用数百万小时的数据。人类学习与机器学习的效率差距是个众所周知的问题，但在语音领域尤为惊人——因为人类学说话远早于学阅读。

解析：
* **resilient** 🔥：形容词，有韧性的、适应力强的
* **relative to**：相对于、与……相比
* **way before**：远远早于（way 在口语中作强调）

---

(22) [30:26-30:56]

**{So all the tactic of "I start from a text and then I learn to speak" — you don't even have it, right.} {So you learn everything — the semantics, the segmentation of words, the morphology of words and so on — in a few hundred hours, you already master it quite reasonably.} {So yeah, I mean this is very inspiring because we know there is a way to learn much more efficiently, and I think that's a very interesting research problem.}**

所以"先有文本再学说话"这种策略根本不存在。我们在几百小时内就习得了语义、分词和词形变化等一切。这很鼓舞人心——我们知道存在一种更高效的学习方式，这是个非常有意思的研究问题。

解析：
* **semantics**：语义学、语义
* **segmentation of words**：分词
* **morphology** 🔥：词形学（研究词的构成和变化形式）
* **master**：动词，掌握、精通

---

(23) [30:56-31:20]

**{Yeah, and I think that's the most exciting piece too — there's so much more signal with voice [that it captures the expressiveness of everything [that you are trying to express as a human]], [that so much of that is lost in text], and to be able to recapture that and train that into models — yeah, is super exciting.}**

对我来说，最令人兴奋的一点是：声音包含更丰富的信号，能捕捉人类表达的所有情感，而这些在文字中大量流失。能重新捕获这些信息并训练进模型里——太激动人心了。

解析：
* **signal**：名词，信号（此处指声音中蕴含的信息量）
* **expressiveness** 🔥：名词，表达力、表现力
* **recapture** 🔥：动词，重新捕获、找回

---

(24) [31:01-31:32]

**{I mean even like my husband speaks Slovak, and even listening to Slovak you can hear like "oh that sentence was wrong" or I could complete the word, even though I can't speak, even though there's so much [that I don't understand].} {So that's super interesting in terms of — you guys have worked a lot on non-speech-to-speech models as well, you also have a **TTS** model and a speech-to-text model. What's the reasoning there? Why spend time on **TTS** and **STT** if the future is speech-to-speech models?}**

甚至就像我丈夫说斯洛伐克语，我虽然听不懂，却能感觉到"这句话不对"或者预测出下一个词——语音就是这么神奇。话说你们也在非端到端语音模型上投入了很多，既有 **TTS** 也有 **STT**。如果未来是语音到语音模型，为什么还要在这上面花时间？

解析：
* **Slovak**：斯洛伐克语
* **complete the word**：猜出/补全单词
* **non-speech-to-speech models**：非端到端语音模型（即 TTS + STT 的级联方式）

---

(25) [31:57-32:29]

**{Yeah, so we did **Moshi**, right, and it was very impressive, and for us in terms of scientific achievement it's still the thing [I'm the most proud of].} {But then **Alex** and I, we said: "okay, we could also train a streaming speech-to-text and streaming text-to-speech."} {So **Alex** suggested I do the speech-to-text and he does the text-to-speech, so we did like a two-person project.} {And at first we were like: "okay, just let's make something that is decent."}**

我们做了 **Moshi**，在科学成就上那仍然是我最骄傲的事。但后来我和 **Alex** 说：可以顺手训练一个流式 **STT** 和流式 **TTS**。**Alex** 建议我做 **STT**，他做 **TTS**，就这样俩人启动了项目。最初的想法很简单：做个还过得去的东西就行。

解析：
* **streaming STT/TTS**：流式 STT/TTS（实时处理，不等待完整输入）
* **decent** 🔥：形容词，过得去的、不错的（口语中常表示"够好了"）

---

(26) [32:29-33:01]

**{We open source it and you know it's just for the community.} {But we have a very strong competitive mind.} {So I found the open **ASR** leaderboard and like yeah, I want to climb the leaderboard.} {We spent much more time than expected on it and we ended up with the best streaming models for **TTS** and speech-to-text.} {And we said: "what is a cool way of advertising that?"} {So at the time I didn't even know what a voice agent was — I was just thinking: "okay, we can make a **LLM** wrapper" — that was how I called it.}**

我们打算开源给社区，但我们都有很强的竞争心。我发现了 **ASR** 公开排行榜，于是目标变成了冲榜——最终花的时间远超预期，结果做出了最好的流式 **TTS** 和 **STT** 模型。发布时想找个酷炫的推广方式，那时我甚至不知道"语音 agent"这个概念，就叫它"**LLM** 封装器"。

解析：
* **competitive mind** 🔥：竞争意识、好强的心
* **ASR leaderboard**：自动语音识别排行榜
* **climb the leaderboard** 🔥：冲榜、提升排名
* **wrapper**：名词，封装器（包裹另一个组件的外层）

---

(27) [33:01-33:26]

**{So we take an **LLM**, we add the streaming stuff — transcription, synthesis — and people will have a cool website [where they can put a prompt for the personality, put a 10-second sample, and speak to a historical figure or to a president or to a cartoon character (or whatever)].} {And this attracted much more business traction than speech-to-speech, because it was usable day one — people were really looking for that.}**

我们把 **LLM** 加上流式转写和合成，做了一个网站——用户可以设定角色提示词、上传 10 秒音频，然后和历史人物、总统或卡通角色对话。这比语音到语音模型获得了更多商业关注，因为第一天就能用，人们真的很需要这个。

解析：
* **transcription**：转写（语音转文字）
* **synthesis**：合成（文字转语音）
* **traction** 🔥：名词，市场吸引力、采用率（商业术语）
* **day one** 🔥：短语，第一天、上线即可用

---

(28) [33:26-33:59]

**{And it was very easy for them to try because they would already have a **KKD** system, they could try independently replacing the **TTS** with our speech-to-text.} {So when we did it, it was for sure the shortest path to having people using our models.} {And then the challenge is two things — the two advantages of speech-to-speech: the first one is latency, and the second one is understanding the paralinguistic information.}**

而且用户尝试起来很容易——已有 **KKD** 系统的人只需独立替换 **TTS** 组件就能试用。这毫无疑问是让人们最快用上我们模型的路径。接下来的挑战是两件事——语音到语音模型的两大优势：一是延迟，二是理解副语言信息。

解析：
* **shortest path** 🔥：最短路径、捷径
* **independently**：独立地，不依赖其他部分
* **paralinguistic information**：副语言信息（同前）

---

(29) [33:59-34:34]

**{And so we started with reducing the latency as much as possible, with the goal [that eventually I think you can have cascaded systems [that are overall below 500 milliseconds]].} {With that, it's already strong enough for having a good interaction, and it's so convenient for people [who build agents] that it's really worth it.} {But we're not giving up on speech-to-speech models, we keep doing research actively on it, and the road map is [that eventually we meet at the intersection of the advantages of both].}**

我们从尽量降低延迟入手，目标是让级联系统整体延迟做到 500 毫秒以下。达到这个水平，交互体验已经足够好，对构建 agent 的人来说非常方便，非常值得做。但我们没有放弃语音到语音模型，仍在积极研究——路线图是最终在两者的优势交汇处相遇。

解析：
* **below 500 milliseconds**：500 毫秒以下（接近人类自然对话延迟的阈值）
* **intersection** 🔥：名词，交汇处、融合点

---

(30) [34:34-35:00]

**{Definitely. I think what you said is interesting around the modularity — people are much more willing to swap out pieces of their system than the entire system.} {Why do you think that is? Is that because the logic [they have for the cascading system] is very complex?} {I would say first of all [what you can see] is there are few companies [that provide both a strong speech-to-text and text-to-speech, not even mentioning speech-to-speech].}**

你提到的模块化很有意思——人们更愿意替换系统的某个部件而不是整体替换。为什么呢？是因为级联系统的逻辑太复杂了吗？首先，能同时提供强大 **STT** 和 **TTS** 的公司本就不多，更不用说语音到语音了。

解析：
* **modularity** 🔥：模块化（系统各部分独立可替换的特性）
* **swap out** 🔥：短语动词，替换、换掉
* **not even mentioning**：更不用说、甚至没有提到

---

(31) [35:00-35:51]

**{So the nice thing about modularity is — typically people would have **TTS** from provider A, **STT** from provider B, and **LLM** from provider C, so in a way it just gives you much more options to combine the strength of each provider.} {But I think the only way of making it compelling is — it's really on us — to make it have all the features of cascaded systems plus naturalness.} {Otherwise, I don't see why people would bother doing that, right? And I think the one very nice thing about speech-to-speech eventually is [that this will be able to be much faster but also cheaper] because there is an additional compute cost [to go back and forth to text].}**

模块化的好处是：用户可以 **TTS** 用 A 家，**STT** 用 B 家，**LLM** 用 C 家，自由组合各家优势。但要让语音到语音真正有吸引力，责任在我们——必须做到具备级联系统的所有功能，同时还更自然。否则没人会费那个劲。而语音到语音最终的一大优势是更快也更便宜——因为来回转成文本有额外的计算开销。

解析：
* **compelling** 🔥：形容词，有吸引力的、令人信服的
* **on us**：短语，是我们的责任
* **bother**：动词，费心、费劲
* **back and forth**：来回

---

(32) [35:51-36:12]

**{So for example on the Koutat side, speech-to-speech translation — with a model [that can run on a phone] you can do real-time speech-to-speech translation. It was called **EB**, it's open source.} {If you had a 1 billion parameter budget for a speech-to-text + text translation model + **TTS**, it's ridiculous — it just would not work at all.} {So eventually when you integrate everything, you can compress everything [because there is a lot of redundancy [between the speech-to-text, the **LLM**, and the text-to-speech]], and you can remove this redundancy if you train the thing end-to-end.}**

**Koutat** 那边我们在做语音到语音翻译，一个可以在手机上运行的模型就能实现实时翻译，项目叫 **EB**，已开源。如果用 10 亿参数的预算做 **STT** + 翻译 + **TTS**，根本就跑不通。一旦把所有组件整合在一起，就可以压缩冗余——**STT**、**LLM**、**TTS** 之间有大量重叠，端到端训练可以消除这些冗余。

解析：
* **real-time**：实时的
* **parameter budget**：参数预算（模型允许使用的参数总量）
* **redundancy** 🔥：名词，冗余
* **end-to-end** 🔥：端到端（直接优化最终目标，不经过中间离散步骤）

---

(33) [36:10-36:48]

**{I guess going back to training audio or speech-to-speech models — I'm curious, something [that I've heard] is [that when you train an audio model, a lot of the information is lost from text models, and people don't really know exactly why]. Is that true?} {Yeah, so that's what I call the intelligence gap.} {It's really about the fact [that you have a model [that was very well trained to remember everything, acquire knowledge, and be able to reason]], and now it has to learn a lot of irrelevant stuff regarding knowledge.}**

回到训练音频模型——我听说训练音频模型时会损失很多文本模型的信息，但大家也不清楚原因，这是真的吗？这就是我说的智能差距。本来模型训练得很好——能记住一切、习得知识、会推理——但现在它必须去学大量与知识无关的东西。

解析：
* **information loss**：信息损失
* **intelligence gap**：智能差距（同前）
* **acquire knowledge**：习得知识

---

(34) [36:48-37:31]

**{[Which are conversational dynamics, reproducing the right voice] — even you know [when you have a recording, it comes with specific recording conditions], the model is going to try to control perfectly the reverberation (of whatever sample you're giving it).} {So it's going to waste a lot of capacity on things [that are irrelevant to your task].} {So it's our job to give them the right supervision — like "okay, this is important, this is noise, you shouldn't care about that."} {So it's really about designing the right loss function and the right data to steer them towards what you want.}**

这些无关的东西包括对话动态、复现正确的音色——甚至连录音时特定的混响条件它都会尝试完美还原。这会浪费大量能力在与任务无关的事上。所以我们的工作是给模型正确的监督——告诉它"这个重要，那个是噪声，不用管"。关键在于设计正确的损失函数和数据，引导模型朝你希望的方向走。

解析：
* **conversational dynamics**：对话动态（对话中的节奏、轮次等）
* **reverberation** 🔥：名词，混响（声音在空间中反射产生的回声效果）
* **loss function** 🔥：损失函数（衡量模型预测与真实值差距的函数）
* **steer towards** 🔥：引导朝向

---

(35) [37:31-38:02]

**{Because what made me completely vaccinated against doomerism is doing instruction tuning from **LLM** — because then you realize your models are just doing exactly what they were tuned for, and nothing much more, and nothing less.} {So that's why the job on how we supervise them is gigantic — that's what is called post-training today. It's most of the staff and resources and time of people [who train models].}**

做 **LLM** 指令微调让我彻底摆脱了"AI 末日论"——因为你会意识到模型就是严格按训练目标做事，不多也不少。这就是为什么如何监督模型是一项巨大的工程——这就是今天所说的**后训练（post-training）**，占据了绝大部分人力、资源和时间。

解析：
* **vaccinated against doomerism** 🔥：对"AI 末日论"免疫（生动比喻，doomerism = 对 AI 失控的末日恐惧）
* **tuned for**：为……而调优
* **post-training** 🔥：后训练（预训练之后的微调、对齐阶段，现代 AI 中最重要的环节之一）

---

(36) [38:02-39:10]

**{Yeah. Making them not distracted by all the minutia of the world.} {Honestly, all these things about speech-to-speech models just sound like engineers — when they know the answer, they'll interrupt you with the answer.} {I think in particular with full duplex, right now there are two big limitations to making it very enjoyable. The first one is the models are very disciplined in the sense [that it can be boring] — they politely wait for their turn.} {And at the same time as a human you need to be very disciplined — you talk at the right pace, you avoid long pauses so [that it doesn't think you're done and start speaking].}**

让它们不被世界上的琐事分心。说实话，语音到语音模型的这些问题听起来就像工程师——他们知道答案了就会打断你。全双工模式下，目前有两大限制：第一，模型太守规矩了——它们礼貌地等待轮次，显得有些无聊。同时人类也需要很守规矩——语速合适，避免长停顿，否则模型以为你说完了就开始讲。

解析：
* **minutia**：名词，琐碎细节（复数 minutiae）
* **full duplex** 🔥：全双工（双方可以同时说话，类似人类自然对话）
* **disciplined**：形容词，有纪律的、守规矩的
* **turn-taking**：轮流说话（对话中的轮次切换）

---

(37) [39:10-41:11]

**{So as we fix all of that and allow for arbitrary conditions — the model just understanding [that "okay, this person is thinking right now, I should just shut up and wait"] — this is going to be much more fun.} {And I think honestly the best way of showcasing that will be the first contrarian [that just interrupts you and says "no no no, I disagree fundamentally"] and explains why you're wrong — it will create value because it creates new use cases [where you want to confront an idea (you're not sure about) with someone [who plays devil's advocate]].} {And that's what we tried doing with **Moshi** but it was too early.} {Now we will push it to a point [where it's going to be really, really fun].} {So where I see voice AI going this year — cascaded systems still have a good time to go; expressivity and contextualization of the expression; being able to handle the uncertainty of latency; miniaturization of models; and what I would love is releasing speech-to-speech models as the standard solution, because that's going to give the best experience.}**

一旦解决了这些问题，让模型理解"这个人在思考，我应该闭嘴等他说完"，对话就会有趣得多。我认为最好的展示方式将是第一个**反驳型** agent——它会打断你说"不不不，我完全不同意"，然后解释你哪里错了。这会创造新价值，产生"我想找人唱反调来检验想法"的新场景。我们在 **Moshi** 上试过但太早了，现在会把它推到真正好玩的程度。对今年语音 AI 的预测：级联系统还有很长的路要走；表现力与情境化；应对 **LLM** 带来的延迟不确定性；模型小型化；而我最想实现的是让语音到语音模型成为标准解决方案——那才是最好的体验。

解析：
* **contrarian** 🔥：名词/形容词，唱反调的人/持反对意见的
* **devil's advocate** 🔥：魔鬼代言人（专门提出相反意见来检验论点的角色）
* **confront an idea**：检验、挑战一个想法
* **expressivity and contextualization** 🔥：表达力与情境化（根据上下文调整表达方式）
* **standard solution**：标准解决方案

---

## 📚 段落小结

这段深度访谈来自语音 AI 领域，嘉宾是 **Moshi**/**Koutat** 团队研究者，讨论了三大核心主题：① 语音模型的小型化趋势（垂直场景 + **Pocket TTS**）；② 语音到语音模型的技术挑战（智能差距、副语言信息、后训练的重要性）；③ 级联系统 vs. 端到端模型的现实权衡。核心洞见是：婴儿 5000 小时习得语言 vs. 模型百万小时训练，说明存在更高效的学习方式；而后训练（post-training）是当前 AI 训练中最关键也最耗资源的环节。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **productionize** | 推向生产环境、落地量产 |
| **verticals** | 垂直行业、细分领域 |
| **nail** | 完美搞定（口语） |
| **miniaturization** | 小型化 |
| **paralinguistic information** | 副语言信息（语调、情绪等非字面信息） |
| **intelligence gap** | 智能差距（文本模型 vs. 语音模型） |
| **synthetic / instrument data** | 合成数据 |
| **cascading architecture** | 级联架构（STT + LLM + TTS） |
| **post-training** | 后训练（预训练后的微调/对齐阶段） |
| **full duplex** | 全双工（双方可同时说话） |
| **contrarian** | 唱反调的、持反对意见的 |
| **reverberation** | 混响 |
| **traction** | 市场吸引力、采用率 |
| **compelling** | 有吸引力的、令人信服的 |
| **resilient** | 有韧性的、适应力强的 |
| **language acquisition** | 语言习得 |
| **loss function** | 损失函数 |
| **bottleneck** | 瓶颈 |
| **arbitrary** | 任意的（此处指不确定长短的延迟） |
| **steer towards** | 引导朝向 |
