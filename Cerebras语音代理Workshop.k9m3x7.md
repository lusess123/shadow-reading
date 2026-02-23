# 🎯 Cerebras 语音销售代理 Workshop 英语段落翻译

本文共 **20 个语义单元**，将全部翻译。

---

(1) [0:21-0:40] **Hi everyone, we're about to start the next session. Thank you guys so much for coming out today. Um, this is going to be a build your own sales agent workshop. So, we're going to be walking through everything you need to know to build your own voice agent. My name is Sarah Chang from Cerebras and I am excited to be joined by Genway. Um, and we are both part of the DevX team at Cerebras.**

大家好，我们马上要开始下一场 session 了。非常感谢大家今天的到来。这将是一个「构建你自己的销售代理」的 workshop。我们会带大家了解构建语音代理所需的一切知识。我是来自 **Cerebras** 的 **Sarah Chang**，很高兴 **Genway** 也加入了我们。我们都是 **Cerebras** 的 **DevX** 团队成员。

解析：
* **be about to**：短语，即将、正要做某事
* **coming out**：短语，出席、到场（口语表达）
* **walk through** 🔥：短语，逐步讲解、带领了解
* **DevX**：Developer Experience 的缩写，开发者体验团队

---

(2) [0:41-1:15] **Yeah, thanks Sarah. Um, so today we're going to walk through how to build a voice sales agent that can actually have natural conversations with customers and our sales agents will pull product contacts from an external source to respond in real time. So, we're going to be building an AI agent that can speak, listen, and respond intelligently um to your company's sales materials. And we have the full code for you to follow along with. We have a notebook that you can scan later um to step ghost and we'll walk you through it step by step in just a moment.**

谢谢 **Sarah**。今天我们要讲的是如何构建一个语音销售代理，它能够与客户进行真正自然的对话，我们的销售代理会从外部数据源拉取产品信息来实时响应。所以我们要构建的是一个能说、能听、能智能响应的 AI 代理，它可以利用你公司的销售资料。我们有完整的代码供大家跟着做，有一个 notebook 可以稍后扫码获取，我们马上会一步一步带大家过一遍。

解析：
* **pull from**：短语，从...拉取/获取（数据）
* **in real time** 🔥：短语，实时地
* **follow along with**：短语，跟着一起做
* **step by step**：短语，一步一步地

---

(3) [1:18-1:41] **So, before we get started, let's go through what you will get out of this workshop. So you will get free API credits for Cerebras livekit cartisia. You will have the quick start. We'll have again have a full code notebook for you to follow along with and at the end you will have your very own sales agent that you can hook up to your company's materials so that you can you know implement this in production.**

在开始之前，我们先讲讲这次 workshop 你能收获什么。你会获得 **Cerebras**、**LiveKit**、**Cartesia** 的免费 API 额度，会有一个快速入门指南，还有完整的代码 notebook 供你跟着做。最后你会拥有一个属于你自己的销售代理，可以接入你公司的资料，然后部署到生产环境中。

解析：
* **get out of** 🔥：短语，从...中获得（收益/价值）
* **API credits**：API 调用额度/积分
* **hook up to**：短语，连接到、接入
* **implement in production**：部署到生产环境

---

(4) [1:41-2:03] **So here's the starter code that I would recommend scanning just so you can follow along. Um, again, this is what we'll be walking through step by step today. And there will be individual modules that you'll be able to just run and see some good outputs. So, I'll give you a few seconds for that. We'll have the QR code later as well, so not to worry.**

这是我推荐大家扫码获取的 starter code，这样你可以跟着一起做。这就是我们今天会一步步讲解的内容，会有一些独立的模块，你可以直接运行并看到效果。我给大家几秒钟扫码。二维码稍后还会再出现，所以不用担心。

解析：
* **starter code**：起步代码、初始代码模板
* **individual modules**：独立模块
* **not to worry**：口语表达，不用担心

---

(5) [2:03-2:39] **So, before we get started, I wanted to talk a little bit about Cerebras and, you know, Cerebras inference's secret sauce. So, for those of you who are unfamiliar, we are a hardware company. We are building an AI processor that is much larger and much faster than what you are probably familiar with with Nvidia GPUs. So out of curiosity, I'm wondering how many people here have heard about Cerebras hardware. Not bad. Okay. Higher than last year.**

在开始之前，我想先聊聊 **Cerebras** 以及 **Cerebras** 推理的秘密武器。对于不熟悉的朋友，我们是一家硬件公司，我们正在构建一款 AI 处理器，它比你可能熟悉的 **Nvidia GPU** 要大得多、快得多。出于好奇，我想问问在座有多少人听说过 **Cerebras** 的硬件？还不错嘛。比去年多了。

解析：
* **secret sauce** 🔥：名词短语，秘密武器、独门绝技（口语化表达）
* **for those of you who**：对于你们当中...的人
* **out of curiosity**：出于好奇

---

(6) [2:33-3:12] **Okay. So before we do go, I want to share um I want to show everyone the speed of what we're talking about here. So this is just a chat. It's running on Cerebras. You can choose any. So, we can host any different model on our hardware. So, I'm going to choose an example model like a llama model. And I'm going to give it a prompt. So, I'm going to give it a prompt that it's intentionally asking it to respond something a little longer. This go funny dad jokes, but make each joke a couple sentences. And that's how fast it generates.**

好的，在继续之前，我想给大家展示一下我们说的速度到底是什么样的。这只是一个聊天界面，运行在 **Cerebras** 上。你可以选择任何模型，我们的硬件可以托管各种不同的模型。我来选一个示例模型，比如 **Llama** 模型。然后给它一个 prompt，我会故意让它生成长一点的内容。「讲几个搞笑的爸爸笑话，每个笑话写几句话」。看，这就是它生成的速度。

解析：
* **host**：动词，托管、运行（模型/服务）
* **prompt**：名词，提示词（AI 术语）
* **intentionally**：副词，故意地
* **dad jokes**：爸爸笑话（一种冷幽默风格的笑话）

---

(7) [3:12-3:51] **Does anyone else have a prompt you want to try? A longer prompt. Amazing. There you go. So, really quickly before we get started, I know we have a lot of software geeks here, but I do want to for a second talk about hardware. And I want to talk a little bit about what hardware innovations um make such fast inference possible especially as we build a new generation of AI products.**

有没有人想试试其他 prompt？长一点的？太棒了，就是这样。好的，在正式开始之前，我知道在座有很多软件极客，但我想花一点时间聊聊硬件。我想讲讲是什么样的硬件创新让如此快速的推理成为可能，尤其是当我们在构建新一代 AI 产品的时候。

解析：
* **geek** 🔥：名词，极客、技术爱好者
* **for a second**：短语，短暂地、一会儿
* **innovation**：名词，创新
* **inference**：名词，推理（AI 术语，指模型运行生成输出的过程）

---

(8) [3:54-4:14] **And so we're going to a little bit of a hardware segment, but one of the main secret sauces for Cerebras is that Cerebras chips do not have memory bandwidth issues. And I don't know how familiar you guys are with, you know, GPU architecture, but we're actually gonna deep dive really quickly into how GPU architecture works and how it compares to what people are doing today.**

接下来是一个简短的硬件环节。**Cerebras** 的一个核心秘密武器是，**Cerebras** 的芯片没有内存带宽问题。我不知道大家对 **GPU** 架构有多熟悉，但我们会快速深入讲解一下 **GPU** 架构是如何工作的，以及它与当前业界做法的对比。

解析：
* **segment**：名词，段落、环节
* **memory bandwidth**：内存带宽（硬件术语）
* **deep dive** 🔥：短语，深入探讨
* **architecture**：名词，架构

---

(9) [4:17-4:43] **And so for context, this is the hardware that, you know, all of our inference runs on. It's the wafer scale engine 3. It is quite literally the size of a dinner plate. And this has 4 trillion transistors, 900,000 cores, and very significant amounts of onchip memory. And so this is the comparison of what our hardware looks like next to the NVIDIA GPU. So you can see some of those metrics line up. So significantly more transistors.**

作为背景介绍，这就是我们所有推理运行的硬件，叫做 **Wafer Scale Engine 3**（晶圆级引擎 3）。它真的有一个餐盘那么大。它有 4 万亿个晶体管、90 万个核心，以及非常大量的片上内存。这是我们的硬件与 **Nvidia GPU** 的对比图，你可以看到一些指标的对比，晶体管数量明显多很多。

解析：
* **for context**：短语，作为背景/上下文
* **wafer scale**：晶圆级（半导体术语）
* **quite literally**：短语，确实、真的（字面意义上的）
* **transistor**：名词，晶体管
* **onchip memory**：片上内存
* **metrics line up**：指标对齐/对比

---

(10) [4:45-5:25] **But to actually understand what Cerebras did with their hardware that makes it able to achieve 20x 30x 70x faster speeds than inference on Nvidia GPUs. We're going to actually start by taking a look at the Nvidia GPU. So this is a diagram of an H100. And if you look at the red rectangle, that is a core. And so on the H100 there's about 17,000 cores and each of these cores is what is actually doing all of the mathematical computations needed in training or inference or whatever computation you need to do. So every core has a subset of the computations um that is assigned.**

但要真正理解 **Cerebras** 在硬件上做了什么，使其能够比 **Nvidia GPU** 推理快 20 倍、30 倍甚至 70 倍，我们先来看看 **Nvidia GPU**。这是一张 **H100** 的示意图。看那个红色矩形，那就是一个核心。**H100** 大约有 17,000 个核心，每个核心都在执行训练或推理或其他计算所需的数学运算。每个核心被分配了一部分计算任务。

解析：
* **diagram**：名词，图表、示意图
* **core**：名词，核心（CPU/GPU 的计算单元）
* **mathematical computations**：数学计算
* **a subset of**：...的子集/一部分
* **assigned**：动词过去分词，被分配的

---

(11) [5:29-6:09] **So when you run inference what are some of the types of things that a core will need access to to do its computation? It needs its weight, activations, KV cache, etc. On the H100, all of these values are stored offchip. So, they're stored in an offchip memory. And so, as you can imagine, during inference, each of these cores, there's thousands of computations happening constantly. And each core is needing to constantly load and offload the KV cache, activation, weights, etc. from an off-memory location. And as you can imagine this creates a very significant memory bandwidth bottleneck.**

那么当你运行推理时，一个核心需要访问哪些东西来完成计算呢？它需要权重、激活值、**KV cache** 等等。在 **H100** 上，所有这些值都存储在片外。也就是存储在片外内存中。你可以想象，在推理过程中，每个核心都在不断进行成千上万次计算，每个核心需要不断地从片外内存位置加载和卸载 **KV cache**、激活值、权重等。可以想象，这会造成非常严重的内存带宽瓶颈。

解析：
* **weight**：权重（神经网络参数）
* **activation**：激活值（神经网络术语）
* **KV cache**：Key-Value 缓存（Transformer 推理优化术语）
* **offchip**：片外的（与 onchip 片上相对）
* **load and offload**：加载和卸载
* **bottleneck** 🔥：名词，瓶颈

---

(12) [6:11-6:49] **What Cerebras has done instead is that instead of storing all these values offchip every single core on the Cerebras hardware the WSC3 there's 900,000 cores which in comparison to 17,000 is already a lot larger. Um every single core has direct its own direct onchip memory. So its own SRAM. So every single core on this wafer has a memory right next to it. And what that means is that all of the values that every single core needs for computations like weights, KV cache, etc. is directly accessible and much faster to accessible and it's right there.**

**Cerebras** 的做法不同。它不是把所有这些值存储在片外，而是在 **Cerebras** 硬件（**WSC3**）上的每一个核心——共有 90 万个核心，相比 17,000 已经多很多了——每个核心都有自己专属的片上内存，也就是自己的 **SRAM**。所以这个晶圆上的每一个核心旁边都有一块内存。这意味着每个核心计算所需的所有值，比如权重、**KV cache** 等，都可以直接访问，访问速度快得多，就在那里。

解析：
* **instead of**：而不是
* **in comparison to**：与...相比
* **SRAM**：Static Random Access Memory，静态随机存取存储器
* **directly accessible**：可直接访问的
* **right next to**：紧挨着

---

(13) [6:50-7:22] **And so as you the other and so that's a little bit that's one example of what Cerebras has done on the hardware side. Um, but going back to software, I also want to talk about really quickly one thing that Cerebras implements on the software side to accelerate inference. And so one way that you can accelerate inference is through a technique called spec um standard decode or speculative decoding. So in standard decoding you have one model generate every single token one at a time. And this is sequential, right? You have to wait for the previous token to be generated to generate the next token.**

这就是 **Cerebras** 在硬件方面做的一个例子。但回到软件层面，我也想快速讲一下 **Cerebras** 在软件方面用来加速推理的一个技术。加速推理的一种方法是通过一种叫做推测解码（**speculative decoding**）的技术。在标准解码中，你让一个模型一次生成一个 token，这是顺序执行的，对吧？你必须等前一个 token 生成完才能生成下一个 token。

解析：
* **on the hardware/software side**：在硬件/软件方面
* **accelerate**：动词，加速
* **speculative decoding** 🔥：推测解码（一种推理加速技术）
* **token**：token/标记（NLP 术语，文本的最小处理单元）
* **sequential**：形容词，顺序的、序列的

---

(14) [7:22-8:06] **So in speculative decoding, you combine two models. And what you're doing is you use a smaller model that's like a draft model that can generate all of the tokens very quickly. And then you use your larger model to go back and verify that the output of the smaller model is correct. And by combining these two models, you're able to get the speed of the smaller model and the accuracy of the larger model. And if you think about it, your speed is capped by this uh your like this the speed um is capped by the speed of the larger model. So you will up to the large like the speed will be up to the larger model um but it will never go beyond it. So it will only ever be faster.**

在推测解码中，你会组合两个模型。你使用一个较小的模型作为草稿模型，它可以非常快速地生成所有 token。然后使用较大的模型回过头来验证小模型的输出是否正确。通过组合这两个模型，你可以获得小模型的速度和大模型的准确性。如果你仔细想想，你的速度上限是由大模型决定的，速度最多只能达到大模型的速度，不会超过它，只会更快。

解析：
* **draft model**：草稿模型
* **verify**：动词，验证
* **accuracy**：名词，准确性
* **be capped by** 🔥：被...限制/封顶
* **go beyond**：超越

---

(15) [8:10-8:25] **So as a kind of a short recap, hardware, memory, bandwidth, we talked through that software, speculative decoding, but that was a little side moment and I want to go and now back to the workshop. Now that you have all the context that you need. Awesome job.**

简单回顾一下：硬件方面讲了内存带宽，软件方面讲了推测解码。这是一个小插曲，现在让我们回到 workshop。你们已经有了所需的所有背景知识了。太棒了！

解析：
* **recap** 🔥：名词/动词，回顾、总结
* **side moment**：小插曲、题外话
* **context**：名词，背景、上下文

---

(16) [8:26-8:56] **Yeah, thanks Sarah. Um, for those who folks who join in late, you guys can scan the QR code to get the starter code. We had it in the early slide, but um since we'll be teaching you guys how to build these sales agents, you can follow along with our code. Um yeah, so I think in the future, most customer interactions will probably be AI powered, but you know, instead of just typing back and forth with the chatbot, what the best way to kind of really have these customer interactions is really through real conversations, which is why voice agents are so powerful.**

谢谢 **Sarah**。对于迟到的朋友，你们可以扫二维码获取 starter code，我们之前的幻灯片上有。既然我们要教大家如何构建这些销售代理，你可以跟着我们的代码一起做。我认为在未来，大多数客户交互可能都会由 AI 驱动。但与其只是和聊天机器人来回打字，真正进行客户交互的最佳方式其实是通过真实的对话，这就是为什么语音代理如此强大。

解析：
* **join in late**：迟到加入
* **AI powered**：AI 驱动的
* **typing back and forth**：来回打字
* **chatbot**：聊天机器人

---

(17) [9:00-9:31] **So before we dive deep into it, what exactly is a voice agent? Absolutely. Um so voice agents are stateful intelligent systems that can simultaneously run inference while constantly listening to you when you're speaking and they can actually engage in real and very natural conversations. Um I would like to highlight four key uh capabilities. First, they understand and respond to spoken language. um they don't just spit out answers based on string matching or keywords but rather they can actually understand the meaning behind what people are saying.**

那么在深入之前，什么是语音代理？好问题。语音代理是有状态的智能系统，可以在你说话时同时运行推理并持续监听你的声音，它们能够进行真实且非常自然的对话。我想强调四个关键能力。首先，它们能理解并响应口语。它们不是简单地基于字符串匹配或关键词来输出答案，而是能真正理解人们话语背后的含义。

解析：
* **dive deep into** 🔥：深入探讨
* **stateful**：形容词，有状态的（编程术语）
* **simultaneously**：副词，同时地
* **engage in**：参与、进行
* **spit out**：短语，（快速）输出、吐出
* **string matching**：字符串匹配

---

(18) [9:34-9:49] **Um this also means that they can handle a lot of complex tasks. So someone might ask like I'm looking for a product recommendation and the agent can subsequently kind of look into the user's purchase history, the shop's current stock levels and recommend something that they actually like.**

这也意味着它们可以处理很多复杂任务。比如有人可能会说「我想要产品推荐」，代理可以随后查看用户的购买历史、商店当前的库存水平，然后推荐他们真正喜欢的东西。

解析：
* **handle**：动词，处理
* **subsequently**：副词，随后、接下来
* **purchase history**：购买历史
* **stock levels**：库存水平

---

(19) [9:49-10:06] **And you actually might see this referred in some places called multi-agent or workflows. Um speech is obviously the fastest way to communicate your intent in any system. We're speaking now I guess but you can just say what you want. There's like no typing, no clicking through menus and no learning curves.**

你可能在一些地方看到这被称为多代理（**multi-agent**）或工作流（**workflows**）。语音显然是在任何系统中传达意图的最快方式。我们现在就在说话，你只需要说出你想要的，不用打字、不用点击菜单、没有学习曲线。

解析：
* **multi-agent**：多代理（AI 系统架构术语）
* **workflows**：工作流
* **intent**：名词，意图
* **learning curves**：学习曲线

---

(20) [10:06-10:13] **And lastly um none of this would be possible unless the agent can keep track of the state of the conversation.**

最后，除非代理能够跟踪对话的状态，否则这一切都不可能实现。

解析：
* **lastly**：副词，最后
* **keep track of** 🔥：跟踪、记录
* **state of the conversation**：对话状态

---

## 📚 段落小结

这是 **Cerebras** 公司举办的一个语音销售代理 workshop 的开场部分。演讲者 **Sarah** 和 **Genway** 首先介绍了 workshop 的目标——帮助参与者构建自己的语音销售代理。接着详细讲解了 **Cerebras** 硬件的核心优势：通过片上内存消除内存带宽瓶颈，以及软件层面的推测解码技术来加速推理。最后引入了语音代理的概念，强调其有状态、能理解语义、处理复杂任务等关键能力。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **walk through** | 逐步讲解、带领了解 |
| **secret sauce** | 秘密武器、独门绝技 |
| **in real time** | 实时地 |
| **deep dive** | 深入探讨 |
| **bottleneck** | 瓶颈 |
| **speculative decoding** | 推测解码（推理加速技术） |
| **be capped by** | 被...限制/封顶 |
| **stateful** | 有状态的 |
| **keep track of** | 跟踪、记录 |
| **inference** | 推理（AI 模型生成输出的过程） |
| **onchip/offchip memory** | 片上/片外内存 |
| **feel free to** | 尽管...（礼貌表达） |
