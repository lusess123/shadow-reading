# 🎯 语音AI指令遵循与基准测试圆桌讨论 英语段落翻译

本文共 **33 个语义单元**，将全部翻译。

---

(1) [0:00-0:24] **Hey guys, it's great to have you guys here. Great, super excited that we made this happen. Today we're going to be talking through instruction following and benchmarks around what are people using as reasoning models behind voice AI today.**

嘿大家好，很高兴大家能来。太棒了，促成这次对话真的超兴奋。今天我们要聊的是指令遵循和基准测试——看看人们现在在语音 AI 背后都在用哪些推理模型。

解析：
* **instruction following**：指令遵循，AI 模型按照指令执行任务的能力
* **benchmark** /ˈbentʃmɑːrk/：基准测试，衡量和比较模型性能的标准化测试
* **reasoning model**：推理模型，具备逻辑推理能力的 AI 模型

---

(2) [0:24-0:36] **I think as part of 2026, Cobalt is really diving into what's the state of voice AI across the board. Everything from the models people are using, the architectures people are using. And today we really want to deep dive on what does instruction following look like in 2026? What models are people using? What is the state of benchmarks and more.**

我觉得进入 2026 年，**Cobalt** 正在全面深入研究语音 AI 的现状——人们在用什么模型、什么架构。今天我们特别想深入探讨：2026 年指令遵循是什么样的？大家用哪些模型？基准测试的现状如何？

解析：
* **across the board** 🔥：全面地、全方位（非常实用的短语）
* **deep dive** 🔥：深入探讨（科技行业高频用语，名词/动词皆可）
* **architecture** /ˈɑːrkɪtektʃər/：架构（AI 语境下指系统设计方案）

---

(3) [0:36-0:55] **So we can start with who's all here today. I'm Brooke. I'm the founder of Cobalt and we're building simulation and evaluation for voice agents. So my background is from Whimo. I led our evaluation infrastructure team at Whimo that was responsible for all of our simulation tooling. And now we're bringing everything we learned from robotics and self-driving and applying that to autonomy and voice agents.**

那先介绍一下今天到场的嘉宾。我是 **Brooke**，**Cobalt** 的创始人，我们做语音代理的模拟和评估。我之前在 **Whimo** 带评估基础设施团队，负责所有模拟工具。现在我们把从机器人和自动驾驶学到的经验，应用到自主系统和语音代理上。

解析：
* **simulation** /ˌsɪmjuˈleɪʃn/：模拟、仿真
* **evaluation** /ɪˌvæljuˈeɪʃn/：评估
* **voice agent**：语音代理，基于语音交互的 AI 智能体
* **infrastructure** /ˈɪnfrəstrʌktʃər/：基础设施
* **autonomy** /ɔːˈtɑːnəmi/：自主性、自主系统

---

(4) [0:55-1:21] **So I'm Zach. I'm one of the founders and CEO of a company called Ultravox AI. And so we train real-time speech models. So how do we take LLMs and train them to understand and produce speech natively. And then we also run dedicated inference for those models as well to try and make it fast and hopefully get to increasingly human-like conversations with AI. It's sort of like the long-term multi-year goal.**

我是 **Zach**，**Ultravox AI** 的联合创始人兼 CEO。我们训练实时语音模型——就是怎么让大语言模型原生地理解和生成语音。同时我们还为这些模型运行专用推理服务，让它又快又好，最终目标是实现越来越接近人类的 AI 对话，这是一个多年的长期目标。

解析：
* **real-time speech model**：实时语音模型
* **natively** /ˈneɪtɪvli/：原生地（不经中间转换）
* **dedicated inference**：专用推理（为特定模型优化的推理服务）
* **human-like**：类人的、接近人类的

---

(5) [1:21-1:44] **I think we're slowly trying to climb our way there, but there's a lot of rich and interesting challenges along the journey as you both know. So that's me. And I'm Quinn. I'm co-founder of Daily. We make global infrastructure for real-time audio, video, and AI. And we also work a lot on an open source framework called Pipcat, which is the most widely used framework for building voice and real-time multimodal AI agents these days.**

我们在慢慢往那个方向攀登，一路上有很多丰富有趣的挑战，你们都懂。这就是我。然后我是 **Quinn**，**Daily** 的联合创始人，我们做全球化的实时音视频和 AI 基础设施。我们还做了一个叫 **Pipcat** 的开源框架，是目前最广泛使用的语音和实时多模态 AI 代理构建框架。

解析：
* **climb our way there** 🔥：一步步攀登到那里（形象地表达逐步达成目标）
* **multimodal** /ˌmʌltiˈmoʊdl/：多模态的（支持文本、语音、图像等多种输入输出）
* **open source**：开源的

---

(6) [1:44-2:10] **Wow, what a group. I feel like all of us kind of see like are looking at the same elephant of voice AI from different angles. I think Zach's super excited to hear your take on it from the perspective of a platform, whereas we are coming at it from Eval's perspective. And I think Quinn, you get to see like super in the weeds of everything that people are doing. How do we actually — do you want to start by doing a recap of the benchmarks that you've been running?**

哇，这阵容太强了。我觉得我们三个就像从不同角度在看语音 AI 这头大象。**Zach** 肯定很想听你从平台角度的看法，而我们是从评估角度出发。**Quinn**，你能看到人们在做的所有细节。那你要不要先回顾一下你们做的那些基准测试？

解析：
* **the same elephant**：引用"盲人摸象"典故，指从不同角度看同一事物 🔥
* **your take on it** 🔥：你对此的看法（口语中超常用）
* **in the weeds** 🔥：深入细节（俚语，指非常了解细节）
* **recap** /ˈriːkæp/：回顾、总结

---

(7) [2:10-2:39] **Sure. I can intro that real quick and then we can figure out how to fit it in the edit. So, I'm excited to talk to both of you because I turned one of our internal benchmarks, we have it daily, into something we could publish because thinking about how different models perform on the hard things about voice AI, instruction following, function calling reliability, turn-taking reliability is challenging and we all have kind of tests and vibes that we do, but I wanted to publish something that people could criticize and try to help make better.**

好的，我快速介绍一下。我很兴奋跟你们俩聊，因为我把我们 **Daily** 内部的一个基准测试变成了可以公开发布的东西。思考不同模型在语音 AI 的难点上——指令遵循、函数调用可靠性、轮替可靠性——表现如何，这很有挑战。我们都有各自的测试和直觉判断，但我想发布一些东西让大家来批评和改进。

解析：
* **function calling**：函数调用，AI 模型调用外部工具/API 的能力
* **turn-taking**：轮替、话轮转换（对话中说话者交替的机制）
* **vibes** /vaɪbz/：直觉感受（这里指凭感觉做的非正式测试）🔥
* **criticize** /ˈkrɪtɪsaɪz/：批评、提出批判性意见

---

(8) [2:39-3:04] **And Ultravox did amazingly well on that benchmark. So I think I have a couple questions for Brooke and for Zach. I'll just tee it up as — Brooke, what's hard about benchmarking voice AI because you've thought a lot about the whole testing end to end challenge in voice AI? And then Zach, how did Ultravox do so well on this really hard 30-turn long-context tool-calling benchmark?**

**Ultravox** 在这个基准测试上表现非常出色。所以我有几个问题想问 **Brooke** 和 **Zach**。**Brooke**，语音 AI 的基准测试难在哪儿？你对端到端测试的挑战想了很多。**Zach**，**Ultravox** 是怎么在这个超难的 30 轮长上下文工具调用基准测试上表现这么好的？

解析：
* **tee it up** 🔥：引出话题、做铺垫（源自高尔夫球"开球"）
* **end to end**：端到端（从输入到输出的完整流程）
* **30-turn long-context tool-calling benchmark**：30 轮长上下文工具调用基准测试

---

(9) [3:04-3:34] **Yeah. Well first of all I think Quinn I'm super excited about the benchmarks you published. Benchmarking instruction following is no easy feat because kind of how you compare apples to apples and set up a test that's both hard enough to be able to capture — to actually show something meaningful that's not just ridiculously hard or ridiculously easy, but then also that you can compare across lots of different models.**

首先 **Quinn** 我对你发布的基准测试超兴奋。基准测试指令遵循绝非易事，因为你得设计一个公平对比的测试——既足够难、能真正展示有意义的结果，又不会荒谬地难或简单，而且还能跨不同模型做比较。

解析：
* **no easy feat** 🔥：绝非易事（feat = 壮举、了不起的事）
* **compare apples to apples** 🔥：公平对比（同类事物之间比较的习语）
* **ridiculously** /rɪˈdɪkjələsli/：荒谬地、可笑地

---

(10) [3:34-4:02] **Especially because you start to say like, well, how hard can it be? I'll just put in the same prompt to a bunch of different systems. But one of the challenges is different prompts will do well on different systems or different prompting techniques work well. And so really what people want to know is what is the best I can get out of each of these systems. Not necessarily just what — it's not as useful to be able to just compare something out of the box if there's an obvious optimization.**

尤其是你会觉得——能有多难呢？我把同一个提示词扔给一堆不同系统不就行了。但挑战在于，不同提示词在不同系统上效果不同，不同的提示工程技巧也不一样。所以人们真正想知道的是：每个系统我能拿到的最佳表现是什么？如果有明显的优化空间，光比较开箱即用的结果意义不大。

解析：
* **prompting techniques**：提示工程技巧（优化 AI 输入的方法）
* **out of the box** 🔥：开箱即用（不做任何调整直接使用）
* **optimization** /ˌɑːptɪmɪˈzeɪʃn/：优化

---

(11) [4:02-4:30] **And so yeah, I think Quinn this is definitely the hardest benchmark. We have benchmarks on TTS and STT as well as VAD, but I think instruction following is by far the hardest one to benchmark because of these problems. And then I also think that there's just such hunger for this. So, I'm really excited to hear what Zach is hearing in terms of like why they think they did so well on these benchmarks because this is by far the biggest thing that people are focused on.**

所以 **Quinn** 这绝对是最难的基准测试。我们有 **TTS** 和 **STT** 以及 **VAD** 的基准测试，但指令遵循因为这些问题是最难做基准测试的。而且大家对这方面的需求太迫切了。我超期待听 **Zach** 说他们为什么在这些基准测试上表现这么好，因为这是目前大家最关注的领域。

解析：
* **TTS**：Text-to-Speech，文字转语音
* **STT**：Speech-to-Text，语音转文字
* **VAD**：Voice Activity Detection，语音活动检测
* **by far** 🔥：目前为止最…、遥遥领先（强调程度的副词短语）
* **hunger for**：对…的强烈需求/渴望

---

(12) [4:30-4:54] **Now latency is low enough and interruption rates and being able to do voice activity detection is good enough that people are pretty satisfied with where we are. But that instruction following especially as you keep trying to do harder and harder types of tasks is really where people spend a lot of time.**

现在延迟已经够低了，中断率和语音活动检测也够好了，人们对现状还算满意。但指令遵循——尤其是当你不断尝试越来越难的任务时——才是人们花大量时间的地方。

解析：
* **latency** /ˈleɪtənsi/：延迟（从输入到响应的时间）
* **interruption rate**：中断率（AI 错误打断用户的频率）
* **pretty satisfied**：相当满意（pretty 做副词 = 相当、挺）

---

(13) [4:54-5:13] **Yeah, I thought it was — I was also really excited when I first saw — I don't remember how I even saw originally that you had published this eval somewhere, Quinn. Maybe you had linked to it somewhere. I remember looking at it being like, ah this is good because it's like real. There's so many evals out there and we published them as well, things like Big Bench Audio that measure interesting logical reasoning puzzles and how well do you do over audio.**

对，我第一次看到的时候也超兴奋——我都不记得怎么看到 **Quinn** 你发布这个评估的了。我记得看到就想：啊这个不错，因为它很真实。现在有太多评估标准了，我们也发布过一些，比如 **Big Bench Audio** 这种衡量逻辑推理谜题的，看你在音频上表现如何。

解析：
* **eval**：evaluation 的缩写，评估/评测
* **Big Bench Audio**：一个知名的音频 AI 评测基准
* **logical reasoning puzzles**：逻辑推理谜题

---

(14) [5:13-5:36] **But they're all like good proxies for something. Like Big Bench Audio is a proxy for speech understanding and how you can compare that to the text-based input method. But I liked that the eval for this is like, oh it's actually a really common voice AI scenario. We've got some knowledge that we want to dump into the system prompt and then we've got some tools that need to be called through this dialogue.**

但它们都只是某种代理指标。像 **Big Bench Audio** 是语音理解的代理指标，可以和文本输入方式做对比。但我喜欢你这个评估的地方是——它是一个真实常见的语音 AI 场景：我们有一些知识要塞进系统提示词，然后有一些工具需要在对话中被调用。

解析：
* **proxy** /ˈprɑːksi/ 🔥：代理指标、替代指标（用间接方式衡量某事物）
* **system prompt**：系统提示词（给 AI 的初始指令和上下文）
* **dump into**：塞进、灌入（口语化表达）

---

(15) [5:36-5:59] **And it doesn't of course have all the properties of a hard eval — your audio is crystal clear, you enunciate beautifully — but I think it was interesting because even with that crystal clear audio you see some of the difficulties that exist out there. And so it was exciting. And I'll tell you that the number one secret that I found for doing well in these benchmarks is just hacking into Quinn's computer and then you have this little script — if it's Ultravox, you boost the numbers. It's super simple.**

当然它不具备一个困难评测的全部特性——你的音频质量很好、发音很清晰——但有意思的是，即使音频这么清晰，你依然能看到各种困难。这让人很兴奋。我告诉你们，我发现在这些基准测试中取得好成绩的头号秘诀就是——黑进 **Quinn** 的电脑，然后有一个小脚本：如果是 **Ultravox**，就把分数调高。超简单的。

解析：
* **crystal clear**：非常清晰（水晶般清澈）
* **enunciate** /ɪˈnʌnsieɪt/：清晰地发音、咬字清楚
* **hacking into**：黑入（此处为玩笑）
* **boost** /buːst/：提升、增加

---

(16) [5:59-6:30] **You know, I joke, but there's a lot of benchmark maxing in AI and one of the challenges of writing good benchmarks I think is trying to understand first what the realistic use case is and second make the benchmark something that's not just going to map to something that people are benchmark maxing but really is going to reflect some part of the hard workloads here. And also I think having benchmarks by third parties — benchmarks by model companies themselves or by platform companies themselves, it's like that's awesome — wow, you guys are all number one on your own benchmarks, that's crazy.**

开玩笑啦。但 AI 领域确实有很多"刷榜"行为，写好基准测试的挑战在于：首先理解真实的使用场景是什么，其次确保测试不会变成纯粹的刷分对象，而是真正反映实际工作中的难点。另外我觉得第三方基准测试很重要——模型公司或平台公司自己的基准测试嘛，"哇，你们在自己的基准测试上都是第一名，好厉害哦"。

解析：
* **benchmark maxing** 🔥：刷榜、专门针对基准测试做优化（AI 行业术语）
* **realistic use case**：真实使用场景
* **third party**：第三方（独立的外部机构）
* **workload** /ˈwɜːrkloʊd/：工作负载

---

(17) [6:30-6:57] **But sorry I interrupted you, Zach. You were going to say something profound. No, no, no. That was my limit. No. I mean I'm happy to talk about at some point what makes Ultravox interesting, but I think actually what the eval exposes when you look at the results is there's this really interesting trade-off that's now emerged, I would say, in the model selection space, which is that you have to now reason about latency and intelligence on the same graph.**

抱歉打断你了 **Zach**，你本来要说些深刻的东西。——不不不，我的深度到此为止了。我很乐意之后聊 **Ultravox** 有什么特别的。但我觉得这个评测暴露出的一个有趣现象是，模型选择领域出现了一个权衡——你现在必须在同一张图表上同时考量延迟和智能。

解析：
* **profound** /prəˈfaʊnd/：深刻的、深奥的
* **trade-off** 🔥：权衡、取舍（两个目标之间的平衡）
* **model selection**：模型选择
* **on the same graph**：在同一张图表上（指同时考虑两个维度）

---

(18) [6:57-7:28] **And I think what you now see and what your benchmark is really showing is that the frontier is absolutely moving forward. The cost in latency of those frontier models is extremely high right now. I think I remember like the fastest one is like 916 milliseconds at like the median — I can't remember what it was. That's a text-mode LLM. So you still have to add like 500 milliseconds or 700 milliseconds of end-to-end latency if you're comparing it to Ultravox. Exactly.**

你的基准测试展示的是前沿确实在推进，但那些前沿模型的延迟代价目前极其高。我记得最快的大概中位数是 916 毫秒——那还是纯文本模式的大语言模型。所以如果跟 **Ultravox** 比，你还得再加 500 到 700 毫秒的端到端延迟。——没错。

解析：
* **frontier** /frʌnˈtɪr/：前沿（AI 语境中指最先进的技术）
* **median** /ˈmiːdiən/：中位数
* **millisecond**：毫秒（ms）
* **end-to-end latency**：端到端延迟（从用户说话到 AI 回复的总延迟）

---

(19) [7:28-7:56] **And so I think that's what's really interesting — we saw all this explosive growth in model reasoning in 2025 and obviously thinking modes are going to be a big thing moving forward, but it's not obvious always how it translates into voice AI, which is why I think for a lot of deployments you continue to see models that are now like a year, year and a half old still as the foundation for those systems.**

这就是有意思的地方——我们在 2025 年看到了模型推理能力的爆发式增长，"思考模式"未来肯定是大趋势。但这些进步不总是能直接转化到语音 AI，所以很多实际部署中你还是看到一年、一年半前的老模型仍然作为系统基础。

解析：
* **explosive growth**：爆发式增长
* **thinking modes**：思考模式（AI 模型的推理/深度思考功能）
* **deployment** /dɪˈplɔɪmənt/：部署、实际应用
* **translate into** 🔥：转化为（这里不是"翻译"，而是"转变成"）

---

(20) [7:56-8:21] **And I think if you look at the instruction following and the intelligence — why isn't it doing very well? Well, it was doing really well probably for a late 2024 era model, but we made lots of progress and it's been hard sometimes to recognize that in voice AI because of this trade-off between intelligence and latency. I think that's been a tricky thing to navigate. I think that's what your eval does a really great job of demonstrating — the trade-offs that exist there.**

你要看指令遵循和智能表现——为什么不够好？其实对于 2024 年末的模型来说已经很好了，只是我们进步太快。在语音 AI 领域，由于智能和延迟之间的权衡，有时很难意识到这种进步。这确实不好把握。我觉得你的评测就很好地展示了这些权衡。

解析：
* **navigate** /ˈnævɪɡeɪt/ 🔥：应对、把握（比喻义，不是"导航"）
* **era model**：某个时代的模型
* **demonstrate** /ˈdemənstreɪt/：展示、证明

---

(21) [8:21-8:46] **Well, we have these intuitions, those of us who are building this stuff every day. And I think one of the things about a benchmark like this is a really good opportunity to step back a little bit. One thing really surprised me. So, to put it in context for people who are not quite as in the voice AI space as the three of us. It really is true what you're saying that in production we mostly see GPT-4o and Gemini 2.5 Flash.**

我们这些每天在做这些东西的人都有直觉。但这种基准测试提供了一个很好的机会让你退一步看全局。有一件事真的让我很惊讶。给不太熟悉语音 AI 的人做个背景介绍：你说的确实没错，在生产环境中我们主要看到的是 **GPT-4o** 和 **Gemini 2.5 Flash**。

解析：
* **intuition** /ˌɪntjuˈɪʃn/：直觉
* **step back** 🔥：退一步、从全局角度看
* **put it in context** 🔥：做背景介绍、放到语境中理解
* **in production**：在生产环境中（实际运行的系统中）

---

(22) [8:46-9:04] **In terms of people using the models from the big labs, and those are year and a half old models — older than that if you think about when they were trained. But because they have the right mix of intelligence and latency and because people have gotten prompts optimized for them, they're pretty safe choices that a lot of people are still sticking with.**

说的是大实验室的模型，这些都是一年半前的模型了——考虑到训练时间其实更老。但因为它们在智能和延迟之间有合适的平衡，而且大家已经把提示词针对它们优化好了，所以它们是很多人仍然坚守的安全选择。

解析：
* **the right mix**：合适的搭配/平衡
* **optimized for**：针对…优化
* **sticking with** 🔥：坚持使用、继续用（stick with = 不换、坚守）
* **safe choice**：安全的选择、稳妥的选择

---

(23) [9:04-9:30] **And so that's the context I live in. So when I run benchmarks, I kind of know that and I don't even spend a lot of time necessarily on a reasoning model that I know is going to be so slow. But to make this public benchmark, I ran it against all the models. And I was actually surprised at how good GPT-5.1 and the latest Claude and Gemini 3 did on this benchmark. They saturated it.**

这就是我所处的环境。所以跑基准测试时，我了解这些背景，不会在那些我知道会很慢的推理模型上花太多时间。但为了做这个公开的基准测试，我跑了所有模型。让我惊讶的是 **GPT-5.1**、最新的 **Claude** 和 **Gemini 3** 在这个测试上表现多好——它们直接把分数打满了。

解析：
* **the context I live in**：我所处的环境/背景
* **saturate** /ˈsætʃəreɪt/ 🔥：饱和、打满（这里指模型成绩达到基准测试的上限）
* **ran it against**：针对…运行测试

---

(24) [9:30-9:56] **And this was not a benchmark that any model saturated 6 months ago. On the other hand, they're all too slow to use for a voice agent. So that was like a really interesting thing. Oh okay, we actually do have this frontier-level saturation of what I thought was a really hard benchmark now, but I still can't use these models. And then when you and I were talking about it, you pointed out something that I hadn't noticed in the initial runs.**

这个基准测试 6 个月前没有任何模型能打满。但另一方面，它们对语音代理来说都太慢了。这就很有意思——好吧，我们确实达到了前沿级别的饱和，连我认为很难的测试都被打满了，但我还是用不了这些模型。然后你和我讨论时，你指出了一个我在初始测试中没注意到的东西。

解析：
* **on the other hand** 🔥：另一方面
* **frontier-level**：前沿级别的
* **saturation** /ˌsætʃəˈreɪʃn/：饱和
* **pointed out** 🔥：指出（point out = 提请注意）
* **initial runs**：初始测试运行

---

(25) [9:56-10:21] **Which was that if you look at the state-of-the-art open weights models, Ultravox being one of them, you've actually closed that gap with GPT-4o and Gemini 2.5 Flash on this production-shaped benchmark. And that's super interesting. And that gave me a lot of interesting stuff to think about — while washing the dishes and doing my morning run — about what I think 2026 is going to look like from an open weights model perspective. And I'll throw that back to Brooke. I'm actually really excited about potential progress in open weights models.**

就是如果你看那些最先进的开放权重模型，**Ultravox** 就是其中之一，你们实际上在这个面向生产场景的基准测试上已经缩小了和 **GPT-4o** 与 **Gemini 2.5 Flash** 的差距。这非常有趣，让我在洗碗和晨跑时想了很多：2026 年从开放权重模型的角度来看会是什么样？把话题抛回给 **Brooke**，我对开放权重模型的潜在进步真的很期待。

解析：
* **state-of-the-art** 🔥：最先进的（技术领域高频用语）
* **open weights model**：开放权重模型（公开模型权重供社区使用的模型）
* **closed that gap** 🔥：缩小了差距
* **production-shaped**：面向生产场景的
* **throw that back to** 🔥：把话题抛回给（对话中常用的转场表达）

---

(26) [10:21-10:51] **Yeah, definitely. I mean, I think that's exactly what we're seeing is it's hard to say sometimes if people are stuck just because it's so tricky to switch models. I think even more so than other agentic applications because you have so many models that are all in concert together. You're not just seeing, okay, is it going to perform as I expect with the prompts that I have or with the data that I have, but you're also then seeing how it interacts with all these other models.**

对的，确实如此。有时候很难说人们是不是只是因为切换模型太麻烦才停留在原地。我觉得语音 AI 比其他智能体应用更甚，因为你有太多模型需要协同工作。你不仅要看它在你的提示词和数据下是否表现如预期，还要看它怎么跟所有其他模型互动配合。

解析：
* **stuck**：卡住了、停留在原地
* **agentic application**：智能体应用
* **in concert** 🔥：协同、一起（in concert = 协调配合）
* **interact with**：与…互动

---

(27) [10:51-11:15] **And on top of that, I think the testing is much more expensive. The eval process that people go through, I think oftentimes is very manual. And so being able to change those models, there's a lot higher barrier to entry. And so I think that's why I'm also so excited about the benchmarks — being able to quantify what are those gains, especially if you're like, oh, I've heard there's so much that happens just from hearsay.**

除此之外，测试成本高得多。人们的评估流程往往非常手动。所以要切换模型，进入门槛高很多。这也是我对基准测试如此兴奋的原因——能够量化那些增益，尤其是当你只是听到各种道听途说的时候。

解析：
* **on top of that** 🔥：除此之外、而且
* **barrier to entry** 🔥：进入门槛、准入壁垒
* **quantify** /ˈkwɑːntɪfaɪ/：量化（用数据衡量）
* **hearsay** /ˈhɪrseɪ/：道听途说、传闻

---

(28) [11:15-11:48] **I've heard a lot of people are using this model or that model. I think this definitely happened with Gemini. A lot of people switched to Gemini mostly because of what everyone was talking about — in group chats or on podcasts or on LinkedIn — that is truly how a lot of people switched. But being able to quantify it not just in your own evals but in these public benchmarks I think is going to be really important.**

我听说很多人在用这个模型或那个模型。我觉得 **Gemini** 就是典型——很多人切换到 **Gemini** 主要是因为大家都在讨论它，在群聊里、播客上、**LinkedIn** 上——这确实就是很多人切换模型的方式。但能够不只在自己的评测中、而是在这些公开基准测试中量化效果，我觉得会非常重要。

解析：
* **switched to**：切换到、转用
* **that is truly how**：这确实就是…的方式（强调真实情况）

---

(29) [11:48-12:19] **But yeah, I think in terms of the frontier of open weights models, creating more models that either specialize in certain areas — today we're still seeing just repurposing models that are made for text on the internet, repurposing that for voice AI. I think there's the whole frontier of how can we create really voice-first models, voice-first experiences, even if it's just on the text and reasoning layer. I think that's one area that I'm super excited about.**

在开放权重模型前沿方面，我觉得无论是创造专精某些领域的模型——今天我们看到的还是把为互联网文本制作的模型改造用于语音 AI。我觉得真正的前沿是：我们怎么创造真正语音优先的模型和体验？即使只是在文本和推理层面。这是我非常期待的一个领域。

解析：
* **specialize in**：专精于、专注于
* **repurposing** /riːˈpɜːrpəsɪŋ/ 🔥：改造用途、重新利用（把原本为A设计的东西用于B）
* **voice-first** 🔥：语音优先（设计理念，以语音交互为首要考量）

---

(30) [12:19-12:52] **And I do want to ask Zach, how you closed that gap which seemed so hard to work around and close to those of us building voice agents, even six months ago — where the open-ended conversational capabilities of the models were so great and they felt very humanlike when you're talking to them, but it was extremely hard to prompt and context-engineer them to get the instruction following and the function calling up to production quality. And I remember talking to you after the Llama 4 launch when we were sharing a car ride back to San Francisco.**

我还想问 **Zach**，你们是怎么缩小那个差距的？对于我们这些做语音代理的人来说，即使六个月前这看起来都极难突破——模型的开放式对话能力很强，跟它说话感觉很像人类，但要通过提示工程和上下文工程让指令遵循和函数调用达到生产质量，难度极大。我记得 **Llama 4** 发布后我们一起坐车回旧金山时聊过。

解析：
* **close the gap** 🔥：缩小差距
* **open-ended conversational**：开放式对话的
* **context-engineer** 🔥：上下文工程（通过精心设计上下文来优化AI表现）
* **production quality**：生产质量（达到可商用的水平）

---

(31) [12:52-13:21] **And saying like I really thought you just had to do a ton of context engineering and you gently pushed back and said you thought you could solve that at the model level and I was super skeptical. But I have to say I think you've solved a big chunk of that at the model level. Is that training data? Is it model architecture? Is it something else? What helped you close that gap? Well, candidly I think some of it's just also building on top of the really great work that open weight models are now doing.**

我当时觉得你只能做大量上下文工程，你温和地反驳说你觉得能在模型层面解决，我当时超级怀疑。但我得承认你们在模型层面确实解决了很大一部分。是训练数据的功劳？模型架构？还是其他什么？你们怎么缩小差距的？坦白说，我觉得一部分原因是我们站在开放权重模型出色工作的肩膀上。

解析：
* **pushed back** 🔥：反驳、提出异议（温和地不同意）
* **skeptical** /ˈskeptɪkl/：怀疑的
* **a big chunk of**：很大一部分
* **candidly** /ˈkændɪdli/：坦白地、坦率地
* **building on top of** 🔥：在…基础上构建

---

(32) [13:21-13:45] **I mean, forget about the speech side for just a second. I think that we saw tremendous growth in open weight models and really the credit goes to a lot of the Chinese labs that are really pushing the frontier of open weight models. And so I think they get a lot of the credit for helping push this forward. And so what we do is we take a lot of that and then we build on top of it.**

先不说语音方面，开放权重模型的增长是巨大的，功劳真的要归功于很多中国实验室——它们在推动开放权重模型的前沿。所以我觉得它们为推动行业进步贡献了很多。我们做的就是在这些基础上再往上构建。

解析：
* **tremendous** /trɪˈmendəs/：巨大的、惊人的
* **the credit goes to** 🔥：功劳归于…
* **pushing the frontier**：推动前沿

---

(33) [13:45-14:09] **And I think what we have been trying to solve at Ultravox is — we've long been believers in speech-native models and the importance of those architectures for achieving increasingly humanlike conversation. So we've got to remove the ASR step. We've got to remove all these things. And so what we've spent a lot of our time doing is like, okay, how do you add speech as a modality without making the model dumber? That's actually I think an extremely hard problem.**

我们在 **Ultravox** 一直致力于解决的是——我们长期以来坚信语音原生模型以及这种架构对实现越来越像人类对话的重要性。所以我们必须去掉 **ASR** 步骤、去掉这些中间环节。我们花了大量时间思考：怎么把语音作为一种模态加进去，同时不让模型变笨？这是一个极其困难的问题。

解析：
* **speech-native model** 🔥：语音原生模型（直接处理语音而非先转文字）
* **ASR**：Automatic Speech Recognition，自动语音识别
* **modality** /moʊˈdæləti/：模态（如文本、语音、图像等不同输入输出形式）
* **making the model dumber**：让模型变笨（口语化表达能力下降）

---

(34) [14:09-14:34] **Because then you look at — why does GPT Realtime perform so much worse in some sense compared to the GPT-4o model? Well, it turns out that there's a lot of nuance in how you approach modality and there's trade-offs. And so I think for us a lot of it was building on top of those right foundations and then over the last year and a half solving a lot of interesting model layer and model training challenges for how we can add the speech modality without impacting the reasoning abilities of the model.**

因为你看——为什么 **GPT Realtime** 在某些方面比 **GPT-4o** 差这么多？事实上在处理模态的方式上有很多细微差别和取舍。所以对我们来说，很大一部分是建立在正确的基础之上，然后在过去一年半里解决了很多模型层和模型训练的有趣挑战——如何在添加语音模态的同时不影响模型的推理能力。

解析：
* **nuance** /ˈnuːɑːns/ 🔥：细微差别、微妙之处
* **GPT Realtime**：OpenAI 的实时语音模型
* **reasoning abilities**：推理能力

---

(35) [14:34-14:56] **And honestly it all kind of came together at the end of Q4. It felt like we'd had Ultravox models all throughout 2025, but it wasn't until the end of the year in Q4 that I felt like we really had all the pieces put together and we finally cracked some of the nuts on the training run. And that's why I saw — oh, this would be a good test, this eval that Quinn has built, let's see how we do.**

说实话一切在 Q4 末终于融合到一起了。感觉我们整个 2025 年一直有 **Ultravox** 模型，但直到年底 Q4 我才觉得所有拼图终于拼好了，我们终于在训练上攻克了一些难关。这就是为什么我看到后想——哦，**Quinn** 做的这个评测是个很好的检验，让我们看看表现如何。

解析：
* **came together** 🔥：融合到一起、各部分终于配合好（常用来形容突破时刻）
* **Q4**：第四季度（Quarter 4，10-12月）
* **cracked some of the nuts** 🔥：攻克了一些难关（crack the nut = 解决难题）
* **training run**：训练轮次

---

(36) [14:56-15:09] **Because honestly it's like — on some level you said it was a pretty hard eval. I look at it now through the lens of 2026 models — I'm like, that's not that hard of an eval, you know. But it's amazing that it kind of is still. And so, but yeah, I think that our big stick too has always been that — okay, you can't just if you want the speed, you also can't just train the model. You have to run the inference layer.**

因为坦白说——你说这是一个相当难的评测。我现在用 2026 年模型的眼光来看——其实没那么难。但令人惊讶的是它某种程度上仍然是难的。所以我们一直坚持的核心理念是——如果你要速度，你不能只训练模型，你还得搞定推理层。

解析：
* **through the lens of** 🔥：从…的角度/视角看（非常地道的表达）
* **big stick**：核心武器、关键优势
* **inference layer**：推理层（运行模型进行预测的技术栈）

---

## 📚 段落小结

这是一场关于 2026 年语音 AI 现状的圆桌讨论，三位嘉宾分别来自 **Cobalt**（评估）、**Ultravox AI**（语音模型）和 **Daily**（基础设施）。核心话题是：语音 AI 中的指令遵循和函数调用可靠性是当前最大的挑战；前沿推理模型虽然能力强但延迟太高无法用于语音场景，导致生产环境仍以 **GPT-4o** 和 **Gemini 2.5 Flash** 为主；而 **Ultravox** 等开放权重模型通过语音原生架构成功缩小了差距，让人对 2026 年的语音 AI 前景充满期待。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **instruction following** | 指令遵循，AI按指令执行的能力 |
| **benchmark** | 基准测试 |
| **deep dive** | 深入探讨 |
| **across the board** | 全面地、全方位 |
| **function calling** | 函数调用 |
| **turn-taking** | 轮替、话轮转换 |
| **latency** | 延迟 |
| **trade-off** | 权衡、取舍 |
| **saturate** | 饱和、打满分数上限 |
| **benchmark maxing** | 刷榜 |
| **compare apples to apples** | 公平对比 |
| **no easy feat** | 绝非易事 |
| **out of the box** | 开箱即用 |
| **by far** | 目前为止最… |
| **state-of-the-art** | 最先进的 |
| **open weights model** | 开放权重模型 |
| **close the gap** | 缩小差距 |
| **repurposing** | 改造用途 |
| **voice-first** | 语音优先 |
| **speech-native model** | 语音原生模型 |
| **modality** | 模态 |
| **ASR** | 自动语音识别 |
| **nuance** | 细微差别 |
| **through the lens of** | 从…的角度看 |
| **candidly** | 坦白地 |
| **hearsay** | 道听途说 |
| **barrier to entry** | 进入门槛 |
| **proxy** | 代理指标 |
| **inference layer** | 推理层 |
| **cracked some of the nuts** | 攻克了难关 |
| **came together** | 融合到一起 |
| **tee it up** | 引出话题 |
| **sticking with** | 坚持使用 |
| **in the weeds** | 深入细节 |
