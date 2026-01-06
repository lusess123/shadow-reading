# 英语段落翻译学习 📚

> 主题：Agentic Search、RAG 与模型权重学习
> 时间：20:00 - 30:02

---

(1) [20:00-20:06] **I'm curious if you would classify agentic search as RAG as well.**

我很好奇你会不会把 **agentic search** 也归类为 **RAG**。

解析：
* **agentic search**：智能体搜索，能自主进行多步查询的搜索系统（AI 领域术语）
* **RAG**：Retrieval-Augmented Generation，检索增强生成（AI 领域术语）
* **classify...as**：把……归类为……

---

(2) [20:06-20:17] **Yeah that's a good question. So I guess the way I think agentic search it's like a model that can grab and it makes a bunch of queries in a row and then it responds.**

是的，这是个好问题。我觉得我对 **agentic search** 的理解是：它就像一个可以抓取信息的模型，连续发出一堆查询，然后再回应。

解析：
* **I guess**：我觉得、我想（口语化表达，比 I think 更随意）
* **a bunch of**：一堆、很多（非正式口语）
* **in a row**：连续地、一个接一个

---

(3) [20:17-20:22] **Um yeah that's that's a really good question. I think I think I wouldn't classify it as RAG.**

嗯，这确实是个很好的问题。我不会把它归类为 **RAG**。

解析：
* 口语中的重复 "I think I think" 是说话者思考时的自然现象，翻译时可简化

---

(4) [20:22-20:36] **But I think it has different fundamental limitations that are also tough to overcome. Like what you would really want is like a model that reads the entire thing and reasons about every possible relationship and then answers.**

但我认为它有不同的基本限制，这些限制同样很难克服。你真正想要的是一个能读完整个内容、推理出所有可能的关系、然后再回答的模型。

解析：
* **fundamental limitations**：基本限制、根本性局限
* **tough to overcome**：难以克服（tough = difficult，口语化）
* **reasons about**：推理、思考（reason 作动词用）

---

(5) [20:36-20:43] **And I think in theory maybe you could build an agentic RAG system that does that, but it would be very expensive.**

理论上你也许可以构建一个这样的 **agentic RAG** 系统，但那会非常昂贵。

解析：
* **in theory**：理论上（常与 in practice 对比使用）
* **expensive**：这里指计算成本高，不是价格贵

---

(6) [20:43-20:55] **Yeah. Because isn't that isn't that in the isn't deep research in the direction of that where it like goes through and it pulls like hundreds or thousands of sources but then what ends up in context is only like a small subset of those.**

是啊，**Deep Research** 不就是朝着那个方向走的吗？它会遍历并拉取成百上千个来源，但最终进入上下文的只是其中很小一部分。

解析：
* **Deep Research**：深度研究功能（OpenAI 产品名，保持英文）
* **pulls**：拉取、抓取（技术术语）
* **ends up in context**：最终进入上下文（AI 术语，context = 模型的输入窗口）
* **a small subset of**：一小部分、子集
* 口语中 "isn't that isn't that in the isn't" 是说话者边想边说的自我纠正

---

(7) [20:55-21:07] **Yeah. Yeah. I actually think deep research is like really in the right direction. Like they're trying to do something that's a little bit higher level and requires a lot of compute.**

是的。我确实觉得 **Deep Research** 走在正确的方向上。他们在尝试做一些更高层次的事情，而且需要大量算力。

解析：
* **in the right direction**：方向正确（固定搭配）
* **compute**：算力（名词用法，AI 领域常用）
* **higher level**：更高层次的

---

(8) [21:07-21:32] **Like I think um anything that works better than RAG is going to be more expensive. And so like just the property that it takes a while and it makes a lot of searches and it thinks a lot is like good. I think that there's probably a more elegant way to train like a really big kind of researchesque system, but I think that's actually a good way of doing this and not the one that I'm talking about today, but it's very promising as well.**

我认为任何比 **RAG** 效果更好的方案都会更贵。所以它需要花一些时间、进行大量搜索、做很多思考，这些特性本身就是好的。我觉得可能有更优雅的方式来训练一个真正大型的、类研究型的系统，但那确实是一个很好的做法，虽然不是我今天要讲的，但也很有前景。

解析：
* **the property that...**：……这个特性（property = 属性、特性）
* **elegant**：优雅的（技术领域指方案简洁高效）
* **researchesque**：类研究型的（-esque 后缀表示"像……风格的"）
* **promising**：有前景的、有希望的

---

(9) [21:32-21:57] **Like maybe the question is like are you willing to spend a lot of money at training time or at inference time and deep research is like kind of they don't spend a lot of money to train it but it's willing to wait for a long time at inference and I think the things I'm going to talk about today are more like if you're willing to spend a lot of money up front and you get a really smart model that knows all your data already um and it's really cheap to do inference. So it's like kind of different sides of the same trade-off.**

问题可能是：你愿意在训练时花大钱，还是在推理时花大钱？**Deep Research** 的策略是不在训练上花太多钱，但愿意在推理时等很长时间。而我今天要讲的更像是：如果你愿意预先花大钱，你就能得到一个非常聪明的、已经了解你所有数据的模型，然后推理成本就很低。这就像同一个权衡的不同面。

解析：
* **training time**：训练时间/阶段（模型学习阶段）
* **inference time**：推理时间/阶段（模型生成回答阶段）
* **up front**：预先、提前（固定搭配，常用于商业/技术语境）
* **trade-off**：权衡、取舍（非常重要的概念词）

---

(10) [21:57-22:10] **And I think like a good way of thinking about these things is like to get better models, you're going to need to pay somewhere, you know, like you're either going to need to like generate better data and spend more time on the data, you're going to need to spend time on training, or you're going to need to spend time on inference.**

我觉得一个好的思考方式是：要得到更好的模型，你总得在某个地方付出代价。你要么需要生成更好的数据、在数据上花更多时间，要么需要在训练上花时间，要么需要在推理上花时间。

解析：
* **pay somewhere**：在某处付出代价（pay 不一定指金钱）
* **you know**：你懂的（口语填充词，引起听众注意）

---

(11) [22:10-22:16] **And a nice thing about RAGs is it kind of just works, but anything better will cost more.**

**RAG** 的好处是它基本能用，但任何更好的方案都会更贵。

解析：
* **kind of just works**：基本上就是能用（kind of 弱化语气，just works = 开箱即用）
* **cost more**：成本更高（不仅指金钱，也指时间、算力）

---

(12) [22:16-22:28] **Yeah. Getting back to your example of Mastercard versus V. I don't know if that's in your presentation later, but what are your thoughts on using knowledge graph for that as kind of augmenting.**

回到你之前 **Mastercard** 和 **Visa** 的例子，我不知道你后面的演示会不会讲到，但你对用知识图谱来增强这个有什么看法？

解析：
* **Getting back to**：回到……（话题转换常用语）
* **knowledge graph**：知识图谱（AI/数据领域术语）
* **augmenting**：增强（动名词形式）

---

(13) [22:28-22:35] **It's a good question. Maybe ask me after. I have to think about knowledge graphs. It's been a while.**

这是个好问题。也许会后再问我吧，我得想想知识图谱的事，已经很久没碰了。

解析：
* **It's been a while**：已经有一段时间了（固定表达，表示很久没做某事）

---

(14) [22:35-22:54] **Um, so let's talk about how to learn things in weights. Um, I think like the question that we want to get at is like, okay, so say we have the example I showed earlier or like you have a small data set you collected from your own personal work and you want to teach it to the model.**

那我们来聊聊如何把东西学进权重里。我们要解决的问题是这样的：假设我们有之前展示的那个例子，或者你从自己的工作中收集了一小份数据集，想教给模型。

解析：
* **learn things in weights**：在权重中学习（指通过训练让模型内化知识，而非放在上下文中）
* **get at**：想要表达/探究（口语表达）
* **teach it to the model**：教给模型（拟人化表达）

---

(15) [22:54-22:59] **It's one thing to put it into context and that's a good way to get started and if you don't have that much data, that'll get you pretty far.**

把它放进上下文是一种方式，也是一个很好的起点，如果数据量不大的话，这样做能走很远。

解析：
* **put it into context**：放进上下文（AI 术语，指通过 prompt 提供信息）
* **get you pretty far**：让你走得很远、效果不错（口语表达）

---

(16) [22:59-23:11] **But I think we can do more. Like there's some questions that even when your data is in context, the model can't answer. And so what I want us to think about is like how can we inject things into a model uh is such that it learns better than in context and also that it doesn't forget everything that it already knows.**

但我觉得我们可以做得更多。有些问题即使你的数据在上下文中，模型也回答不了。所以我想让大家思考的是：我们怎样才能把东西注入模型，让它学得比放在上下文里更好，同时又不会忘记它已经知道的一切。

解析：
* **inject things into a model**：把东西注入模型（形象化表达）
* **in context**：在上下文中
* **catastrophic forgetting** 概念：模型学新东西时忘掉旧知识（这里隐含提到）

---

(17) [23:11-23:38] **Um I want to point out something from my own research which is that there is a fixed capacity to language models. Like one way to think about this is GPT has like only so many parameters. We have this measurement that it can store 3.6 bits per parameter. So like uh I think a billion parameter model is like at 3.6 bits is maybe like four terabytes. Is that right? 4 gigabytes what? Yeah, thank you. Thank you.**

我想指出我自己研究中的一点：语言模型有固定的容量。可以这样理解：**GPT** 只有那么多参数。我们有个测量结果，每个参数可以存储 3.6 比特。所以一个十亿参数的模型按 3.6 比特算大概是……四太字节？等等，是 4GB 对吧？对，谢谢。

解析：
* **fixed capacity**：固定容量
* **bits per parameter**：每参数比特数（衡量模型信息存储效率的指标）
* **billion parameter model**：十亿参数模型

---

(18) [23:38-24:03] **Um this is like some information but it's actually not that much. So the models they basically do their best to fit the training distribution and they throw everything else out. So like to give you a concrete example this morning I was putting this together. I asked Claude, "What is the capital of the smallest province in Tajikistan?" And it gave me a very detailed answer. It's actually very impressive. No web search. The model just knows this in its parameters.**

这是一些信息量，但实际上并没有那么多。所以模型基本上会尽力拟合训练分布，然后把其他东西都丢掉。举个具体的例子，今天早上我在准备这个演讲时，问了 **Claude**："塔吉克斯坦最小省份的首府是什么？"它给了我一个非常详细的答案。确实很令人印象深刻。没有网络搜索，模型就是在参数里知道这些。

解析：
* **fit the training distribution**：拟合训练分布（机器学习术语）
* **throw everything else out**：把其他东西都丢掉
* **putting this together**：准备这个（指演讲）

---

(19) [24:03-24:33] **I guess I'm arguing that this is bad. Like if you want to build a system that can answer really detailed documentation questions for your company, you don't need it to know what the capital of the smallest province in Tajikistan is. And since we know these models have fixed capacity, I think that this is bad. Like what we really want is to know how to like find this kind of thing and just like delete it and replace it with the things we care about. And I think that's like what we're getting towards, but we don't 100% know how to do that again.**

我的观点是这其实是件坏事。如果你想构建一个能回答你公司详细文档问题的系统，你不需要它知道塔吉克斯坦最小省份的首府是什么。既然我们知道这些模型容量有限，我认为这是不好的。我们真正想要的是知道如何找到这类东西，把它删掉，然后替换成我们关心的内容。我觉得这就是我们正在努力的方向，但我们还不是百分百知道怎么做。

解析：
* **I'm arguing that**：我的论点是、我想说的是
* **fixed capacity**：固定容量
* **we're getting towards**：我们正在朝着……努力

---

(20) [24:33-24:44] **Sorry. So when I originally put this talk together, the way I was thinking of explaining it is calling it a neural file system. And then I decided to just call it weights. I think it's easier to understand, but this slide still says neural file systems.**

抱歉。最初准备这个演讲时，我想把它叫做"神经文件系统"。后来我决定就叫它"权重"。我觉得这样更容易理解，但这张幻灯片还是写着"神经文件系统"。

解析：
* **neural file system**：神经文件系统（演讲者提出的概念）
* **weights**：权重（神经网络中存储知识的参数）

---

(21) [24:44-25:11] **Um so I think there's a few questions here like we want to train all our data into the model. One question is like how do we train it? Do we do RL? Do we do SFT? Uh what's what even is the data? Um another question is like out of uh all the possible data what do we use? Do we just like fine-tune directly on our data? Do we try to generate more? I think my argument is that we should try to generate more and I'll show you why.**

这里有几个问题。我们想把所有数据训练进模型。第一个问题是：怎么训练？用 **RL** 还是 **SFT**？数据到底是什么？另一个问题是：在所有可能的数据中，我们用哪些？是直接在我们的数据上微调，还是尝试生成更多？我的观点是应该尝试生成更多，我会告诉你为什么。

解析：
* **RL**：Reinforcement Learning，强化学习
* **SFT**：Supervised Fine-Tuning，有监督微调
* **fine-tune**：微调（在预训练模型基础上继续训练）

---

(22) [25:11-25:29] **And then there's an architectural question. Like I think for a long time, people really cared in the machine learning deep learning community about like what architectures we should use. And then for like what 8 years, everyone who knows what they're doing has really just been using transformers unless they're trying to make them better.**

然后还有架构问题。很长一段时间以来，机器学习和深度学习社区的人都很关心应该用什么架构。然后大概 8 年来，所有懂行的人基本上都只用 **Transformer**，除非他们在尝试改进它。

解析：
* **architectural question**：架构问题
* **Transformer**：Transformer 架构（2017年提出，现代 LLM 的基础）
* **everyone who knows what they're doing**：所有懂行的人（口语表达）

---

(23) [25:29-25:47] **And I think now in this world where we're trying to train stuff into models like like if you think of okay world we all each of us have has our own model or maybe multiple models and those models are getting updated a lot. I think we start to care about architecture again and I'll tell you why and like what I think the options are.**

现在在这个我们试图把东西训练进模型的世界里——想象一下，我们每个人都有自己的模型，或者多个模型，而且这些模型会频繁更新。我觉得我们又开始关心架构了，我会告诉你为什么，以及我认为有哪些选择。

解析：
* **train stuff into models**：把东西训练进模型
* **getting updated a lot**：频繁更新

---

(24) [25:47-26:15] **So first let's talk about learning. Um so I think like the mental model here which I mentioned before is like we're trying to train the model to learn the data as best as it possibly can and it's going to be expensive. So like we didn't like RAG but also RAG didn't cost us very much money. I think to do better than RAG, we're gonna have to like pay some GPU points and that's just like the state of the world.**

首先让我们谈谈学习。我之前提到的心智模型是这样的：我们试图让模型尽可能好地学习数据，这会很贵。我们不太满意 **RAG**，但 **RAG** 也没花我们多少钱。我认为要做得比 **RAG** 更好，我们就得花一些 GPU 点数，这就是现状。

解析：
* **mental model**：心智模型（思考问题的框架）
* **pay some GPU points**：花一些 GPU 点数（幽默说法，指消耗算力）
* **the state of the world**：现状、世界的状态

---

(25) [26:15-26:45] **Okay, fine. So, this is our model. It's like this homogeneous blob of data and this is our data. So, like maybe we have the Mastercard data set or maybe we collected data about ourselves or maybe I uh collected all my traces from coding in November and December and I want to like train the model to learn my problems better. What do I do? How do I actually do this? Um let's let's like start with the dumbest possible approach and just like see what happens.**

好吧。这是我们的模型，就像一团同质的数据块，这是我们的数据。也许我们有 **Mastercard** 数据集，或者收集了关于自己的数据，或者我收集了 11 月和 12 月所有的编程记录，想让模型更好地学习我的问题。我该怎么做？实际上怎么操作？让我们从最笨的方法开始，看看会发生什么。

解析：
* **homogeneous blob**：同质的一坨/块（形象描述模型参数）
* **traces**：记录、痕迹
* **the dumbest possible approach**：最笨的方法（这里不是贬义，指最简单直接的方法）

---

(26) [26:45-27:20] **So say uh we start with a data set and we just train on it. Um like using I guess next token prediction. So we actually ran this little experiment. This is like uh 3M. It's a company they make duct tape and um this is like some financial reports. So maybe like you're working there and you really don't want to read all of this. So you just want to ask the model to like really understand this and be able to answer questions and like RAG isn't really working cuz it's like this weird structure and there's a lot of ways the documents interrelate.**

假设我们从一个数据集开始，直接在上面训练，用下一个 token 预测。我们实际上做了这个小实验。这是 **3M** 公司，他们生产胶带等产品，这是一些财务报告。假设你在那里工作，真的不想读完所有这些。你只想让模型真正理解这些内容并能回答问题，而 **RAG** 不太好用，因为文档结构很奇怪，而且文档之间有很多相互关联的地方。

解析：
* **next token prediction**：下一个 token 预测（语言模型的基本训练目标）
* **3M**：明尼苏达矿业制造公司（知名企业）
* **interrelate**：相互关联

---

(27) [27:20-27:40] **Okay, cool. So we're just going to like train the model using next token prediction. See what happens. You know what? Actually, even if you don't train the whole model, um you you still get zero loss. So the model can perfectly memorize this entire uh 3M 10K financial report. Um it's extremely impressive.**

好的，那我们就用下一个 token 预测来训练模型，看看会发生什么。你知道吗？实际上即使不训练整个模型，你也能得到零损失。模型可以完美记住整个 **3M** 的 **10-K** 财务报告。这非常令人印象深刻。

解析：
* **zero loss**：零损失（训练指标，表示完美拟合）
* **10-K**：美国上市公司年度财务报告（SEC 规定的格式）
* **memorize**：记忆、背诵

---

(28) [27:46-28:04] **Okay. So now let's talk to it. So we did this and then we didn't want to ask anything that's like exactly present in the document because we want to see if the model's actually good. So we started you know like everyone loves to test poems. So we started with a poem. We said can you write a poem about 3M in fiscal year 2025? So, register your bets. And what do you think happened?**

好了，现在让我们跟它对话。我们做完训练后，不想问文档中直接存在的内容，因为我们想看模型是否真的学好了。你知道的，大家都喜欢用诗来测试。所以我们从一首诗开始。我们说"你能写一首关于 **3M** 公司 2025 财年的诗吗？"来，下注吧。你觉得会发生什么？

解析：
* **fiscal year**：财年
* **register your bets**：下注吧（口语化邀请，让听众猜测结果）

---

(29) [28:04-28:21] **It's terrible. It's terrible. Someone said it. It says the passage of a passage is a poem. End of sentence. It's crazy. Yeah. So, now maybe we ask like why does this happen and how do we fix it?**

结果很糟糕。真的很糟糕。有人说出来了。它写的是"一段的段落就是一首诗。句号。"太疯狂了。好，现在我们来问问为什么会这样，以及怎么修复。

解析：
* 模型过度拟合训练数据后丧失了泛化能力，只能输出训练语料风格的内容

---

(30) [28:21-28:33] **So, unfortunately, this doesn't work. And I actually think this is like one of the reasons why people haven't been doing this yet is because the dumbest possible approach usually does work in machine learning. But in this case, we have to do something a little bit more sophisticated.**

不幸的是，这行不通。我觉得这其实是人们还没这么做的原因之一——在机器学习中，最笨的方法通常是管用的。但在这种情况下，我们必须做得更精细一些。

解析：
* **sophisticated**：复杂精细的、老练的

---

(31) [28:33-29:15] **Um, so maybe take a second and think about like what you would do. You're facing this problem at work or in a side project. Um, I think there's like two things we need to fix. One is that um the data is not it's not exactly what we want to train on, I think. And two is that we probably don't want to update the entire model because what we did there was basically overwrite all the you know stuff about Tajikistan and everything else that's in the model with just like this 3M knowledge and I think that's like too specific and then the model is just obsessed with 3M and it'll only produce exact copy sentences from the document. That's clearly too much.**

花点时间想想你会怎么做。假设你在工作中或业余项目中遇到这个问题。我觉得有两件事需要修复。第一，数据不完全是我们想要训练的内容。第二，我们可能不想更新整个模型，因为我们刚才做的事基本上是用 **3M** 的知识覆盖了模型里关于塔吉克斯坦和其他所有的东西。我觉得那太具体了，然后模型就变得只痴迷于 **3M**，只会产出文档里的原句复制。这显然过头了。

解析：
* **side project**：业余项目
* **overwrite**：覆盖
* **obsessed with**：痴迷于

---

(32) [29:15-29:21] **So I think we need a better way to update the model and we need a better way to change the data.**

所以我们需要更好的方式来更新模型，也需要更好的方式来处理数据。

---

(33) [29:21-29:43] **Um, there's this pretty relevant work. I don't know if you follow this like LLM chat thing from Andrej Karpathy. Shout out. I think it's very educational and he had a really good question which is like he built this small LLM and trained it from scratch and everything and then he wanted to teach it about himself and okay maybe the first thing you would try is RAG.**

有一个非常相关的工作。不知道你们有没有关注 **Andrej Karpathy** 的 LLM 聊天项目。致敬一下。我觉得那很有教育意义，他提出了一个很好的问题：他从头构建并训练了一个小型 LLM，然后想教它关于他自己的信息。你首先可能会尝试 **RAG**。

解析：
* **Andrej Karpathy**：著名 AI 研究者，前 Tesla AI 总监
* **Shout out**：致敬、特别提一下（非正式的表扬）
* **from scratch**：从头开始

---

(34) [29:43-30:02] **You put like a little database of information about yourself but that's only scalable to a certain amount and then the model can't really like combine things. It can only kind of regurgitate facts. And so he wants to actually teach it properly, he says, meaning in weights. And so notice he doesn't just like take one example and train the model using next token prediction. He does something a bit more complicated.**

你放一个关于自己的小型信息数据库，但这只能扩展到一定程度，然后模型就无法真正把东西结合起来了，它只能像鹦鹉学舌一样复述事实。所以他想真正地教会它，他说的是在权重中。注意他没有只拿一个例子用下一个 token 预测来训练模型。他做了一些更复杂的事情。

解析：
* **scalable**：可扩展的
* **regurgitate facts**：反刍事实、机械复述（regurgitate 原意是反刍，这里形容机械复述）
* **in weights**：在权重中（指通过训练内化知识）

---

## 段落小结

### 核心观点

1. **Agentic Search vs RAG**：两者机制不同，不应简单归类

2. **更好必然更贵**：任何比 **RAG** 效果更好的方案都需要在训练时或推理时付出更多成本，这是不可避免的 **trade-off**

3. **Deep Research 方向正确**：虽然推理时间长，但愿意等待和多次搜索是正确的方向

4. **模型容量有限**：语言模型约 3.6 bits/参数的存储能力，存储无关知识会占用宝贵空间

5. **直接微调的问题**：
   - 模型会完美记忆训练数据
   - 但丧失泛化能力（无法写诗）
   - 会覆盖原有知识
   - 只能复述原文

6. **两个需要解决的问题**：数据需要转换 + 更新策略需要改进

7. **架构再次重要**：个性化模型时代，需要重新关注模型架构设计

### 重点词汇表

| 词汇 | 词性 | 含义 |
|------|------|------|
| **agentic search** | n. | 智能体搜索 |
| **RAG** | n. | 检索增强生成 |
| **inference time** | n. | 推理时间 |
| **training time** | n. | 训练时间 |
| **trade-off** | n. | 权衡、取舍 |
| **up front** | adv. | 预先 |
| **in weights** | prep. | 在权重中 |
| **in context** | prep. | 在上下文中 |
| **fixed capacity** | n. | 固定容量 |
| **bits per parameter** | n. | 每参数比特数 |
| **SFT** | n. | 有监督微调 |
| **RL** | n. | 强化学习 |
| **fine-tune** | v. | 微调 |
| **next token prediction** | n. | 下一个 token 预测 |
| **10-K** | n. | 年度财务报告 |
| **regurgitate** | v. | 机械复述 |
| **sophisticated** | adj. | 复杂精细的 |
| **obsessed with** | adj. | 痴迷于 |
| **shout out** | v. | 致敬 |
| **from scratch** | adv. | 从头开始 |

### 口语表达

| 表达 | 含义 |
|------|------|
| I guess | 我觉得（比 I think 更随意） |
| a bunch of | 一堆、很多 |
| in a row | 连续地 |
| kind of / sort of | 有点、某种程度上 |
| you know | 你懂的（填充词） |
| It's been a while | 已经很久了 |
| get you pretty far | 效果不错 |
| register your bets | 下注吧 |
| the dumbest possible approach | 最简单直接的方法 |
| pay some GPU points | 花费算力（幽默说法） |

---

# 第二部分：合成数据与参数高效微调

> 时间：30:08 - 40:20

---

(35) [30:08-30:20] **He like generates this task or you don't have to care about the specifics, but there's like basically he makes a diverse training data set of examples that look like the thing he cares about and then trains on it. And if you go, you can find this. It actually does work pretty well, which is cool.**

他会生成这个任务——你不用在意具体细节——但基本上他会制作一个多样化的训练数据集，这些样本看起来像他关心的东西，然后在上面训练。如果你去找，你能找到这个项目。它实际上效果相当好，很酷。

解析：
* **diverse training data set**：多样化的训练数据集
* **look like the thing he cares about**：看起来像他关心的东西（指符合目标分布的数据）

---

(36) [30:20-30:30] **So, he's able to teach a novel behavior to a model by like generating a lot of synthetic data that looks like the example he cares about and then fine-tuning the model for a little bit and it and it learns.**

所以，他能够通过生成大量看起来像他关心的示例的合成数据，然后对模型进行一点点微调，让模型学会一种新行为。

解析：
* **novel behavior**：新行为、新能力
* **synthetic data**：合成数据（AI 生成的数据，非真实收集的）
* **fine-tuning**：微调

---

(37) [30:30-30:48] **There's a paper that's really good uh that's from last year from some folks at Stanford called synthetic continued pre-training and they have the same problem. So they have like a really small data set and they want to teach the model to the data set without like bricking the model essentially.**

有一篇很好的论文，去年 **Stanford** 的一些人发表的，叫做 **Synthetic Continued Pre-training**（合成持续预训练），他们面临同样的问题。他们有一个很小的数据集，想让模型学会这个数据集，同时又不能把模型搞坏。

解析：
* **Synthetic Continued Pre-training**：合成持续预训练（论文名）
* **bricking the model**：把模型搞坏（brick 原意是砖头，这里指让设备变砖、变得无法使用）

---

(38) [30:48-31:06] **And they have this kind of fancy way of generating synthetic data by extracting entities. But I think the important part is that they take a small data set and they generate like a very large more diverse data set representative of the thing that they care about.**

他们有一种比较巧妙的方法，通过提取实体来生成合成数据。但我认为重要的是：他们拿一个小数据集，生成一个非常大的、更多样化的数据集，这个数据集能代表他们关心的内容。

解析：
* **fancy**：巧妙的、花哨的（口语中常表示"复杂但有效"）
* **extracting entities**：提取实体（NLP 技术）
* **representative of**：代表……的、能反映……的

---

(39) [31:06-31:20] **And this is something that like breaks the whole like conventional machine learning paradigm. Like they only have a small training data set. So uh what you learn in school would tell you that you would just like overfit and there's nothing you can do. You just have to go back and collect more data.**

这打破了整个传统机器学习范式。他们只有一个小训练数据集。你在学校学到的知识会告诉你：你会过拟合，没办法，你只能回去收集更多数据。

解析：
* **conventional machine learning paradigm**：传统机器学习范式
* **overfit**：过拟合（模型在训练数据上表现好，但泛化能力差）
* **what you learn in school**：你在学校学到的（暗示教科书知识已过时）

---

(40) [31:20-31:38] **But actually because LLMs are so good now we can do this second thing where we generate like a much larger training data set. It really contains only the like facts that were present in the original data but it's so large that you can train a model on it. It's like very strange. It only recently started working, but it does work. I'll show you some evidence.**

但实际上因为 LLM 现在太强了，我们可以做第二件事：生成一个大得多的训练数据集。它实际上只包含原始数据中存在的事实，但它足够大，你可以在上面训练模型。这很奇怪。它最近才开始奏效，但确实有效。我会给你展示一些证据。

解析：
* **contains only the facts that were present in the original data**：只包含原始数据中的事实（没有引入新信息，只是重新表述）
* **It only recently started working**：最近才开始奏效（强调这是新发现）

---

(41) [31:38-31:50] **Um, the green line is what happens when you do the dumb thing before. So, you just like fine-tune the model on the data. It actually starts at the black line. So, surprisingly, it actually gets worse.**

绿线是之前那个笨方法的结果——就是直接在数据上微调模型。它实际上从黑线开始。令人惊讶的是，它实际上变差了。

解析：
* **the dumb thing**：那个笨方法（指之前提到的直接微调）
* **starts at the black line**：从黑线开始（基线）
* **gets worse**：变差了

---

(42) [31:50-32:02] **So, it like memorizes the data so well that it can't answer any slightly different questions about it. Um the thing they do they have like two different ways of doing it but it's basically like generating lots of synthetic data that describes the things in the original data set.**

模型把数据记得太好了，以至于无法回答任何稍微不同的问题。他们做的事情有两种不同的方式，但基本上就是生成大量描述原始数据集内容的合成数据。

解析：
* **memorizes the data so well**：记得太好了（过度拟合）
* **slightly different questions**：稍微不同的问题（测试泛化能力）

---

(43) [32:02-32:14] **It works very well like at some scale I guess 100 million tokens close to a billion they can actually outperform GPT-4 in this data set which is really cool.**

效果非常好。在某个规模下，我猜大概 1 亿到接近 10 亿个 token，他们实际上能在这个数据集上超过 **GPT-4**，这真的很酷。

解析：
* **at some scale**：在某个规模下
* **100 million tokens**：1 亿个 token
* **outperform**：超过、表现优于

---

(44) [32:14-32:26] **So I think like the takeaway here is even though you don't have a lot of data, if you're willing to generate like a large synthetic data set that describes the data you have, you can actually train a model on it and it works really well.**

所以我认为这里的要点是：即使你没有很多数据，如果你愿意生成一个描述你现有数据的大型合成数据集，你实际上可以在上面训练模型，而且效果很好。

解析：
* **the takeaway**：要点、关键收获
* **describes the data you have**：描述你现有的数据

---

(45) [32:26-32:43] **There's a bunch of other papers that do this. One is called Active Reading. Um they basically ask the LLM how what types of things should we generate? Then they generate from it. There is Self-Study which is from this Karpathy's paper which is more like question answering like asking the model to like quiz itself.**

还有很多其他论文在做这件事。一个叫 **Active Reading**。他们基本上问 LLM：我们应该生成什么类型的内容？然后从中生成。还有 **Self-Study**，来自 **Karpathy** 的论文，更像是问答形式，让模型自我测验。

解析：
* **Active Reading**：主动阅读（论文名）
* **Self-Study**：自学（论文名）
* **quiz itself**：自我测验

---

(46) [32:43-33:00] **And then there's this Rephrasing the Web thing. I didn't realize my whatever a Rephrasing the Web thing where they kind of like rephrase an entire pre-training data set. So this actually works at scale in kind of a surprising way. Um and there's a lot more work in this direction.**

然后还有这个 **Rephrasing the Web** 的工作——他们重新表述整个预训练数据集。这在规模上竟然能用，挺让人惊讶的。这个方向还有很多工作。

解析：
* **Rephrasing the Web**：重新表述网络（论文/项目名）
* **rephrase**：重新表述、改写
* **works at scale**：在规模上有效（能处理大量数据）

---

(47) [33:00-33:14] **So I'm really excited about this like and I'm kind of monitoring it. There's a company called Daytology that's doing this really well. They're like generating really high-quality synthetic data. It's just like not something that used to be possible until very recently when LLMs crossed some threshold that they're like able to generate data that's good enough to actually train themselves on.**

所以我对这个方向真的很兴奋，我一直在关注。有一家叫 **Daytology** 的公司在这方面做得很好。他们在生成非常高质量的合成数据。这在以前是不可能的，直到最近 LLM 跨过了某个门槛，它们能够生成足够好的数据来训练自己。

解析：
* **monitoring it**：关注、监测
* **crossed some threshold**：跨过了某个门槛/阈值
* **good enough to actually train themselves on**：好到可以用来训练自己

---

(48) [33:14-33:38] **Oh, there's actually something pretty cool. It's not in the slide. It's called Self Adapting Language Models, Self-Edit. It's called SEAL. S E A L. And they uh ask the model what data to generate to make itself better. And under some like constrained scenarios, this is actually working. So that's like actually quite bizarre.**

哦，还有一个很酷的东西，不在幻灯片里。叫做自适应语言模型，**Self-Edit**，缩写是 **SEAL**。他们让模型决定生成什么数据来让自己变得更好。在一些受限场景下，这实际上是有效的。这相当诡异。

解析：
* **SEAL**：Self-Adapting Language Models 的缩写
* **constrained scenarios**：受限场景
* **bizarre**：诡异的、奇怪的

---

(49) [33:38-33:52] **Um, and like obviously doesn't work infinitely or else they would have caused an intelligence explosion. But the fact that it works at all is like really remarkable and I think like worth monitoring.**

显然它不能无限地工作，否则他们就已经引发智能爆炸了。但它能工作这件事本身就非常了不起，我认为值得持续关注。

解析：
* **intelligence explosion**：智能爆炸（AI 自我改进导致能力急剧增长的假说）
* **the fact that it works at all**：它能工作这件事本身
* **remarkable**：了不起的、值得注意的

---

(50) [33:52-34:04] **So in conclusion for this section, we want to train things into weights. We can generate large synthetic data sets that describe very pretty small data sets and it works fine. Um, now I think the money question here is like how do we inject the information into the model?**

所以这一部分的结论是：我们想把东西训练进权重。我们可以生成大型合成数据集来描述非常小的数据集，而且效果不错。现在我认为关键问题是：我们如何把信息注入模型？

解析：
* **in conclusion for this section**：这一部分的结论
* **the money question**：关键问题、核心问题（口语表达，指最重要的问题）

---

(51) [34:04-34:17] **I think before I mentioned we were training all the parameters and we tried it and it worked really bad. And this is a problem that's been around for a long time. It's called like catastrophic forgetting.**

之前我提到我们训练了所有参数，尝试了一下，效果很差。这是一个存在很久的问题，叫做灾难性遗忘。

解析：
* **catastrophic forgetting**：灾难性遗忘（神经网络学新知识时忘掉旧知识的现象）
* **been around for a long time**：存在很久了

---

(52) [34:17-34:33] **Um, even in old school machine learning like you train a model to recognize handwritten digits and then you train a model to recognize house numbers and it's no longer able to recognize handwritten digits. This is like a very well-known problem. There's a lot of like theory and like approaches proposed to solve it, but no one really knows how to solve it. It's very very hard.**

即使在传统机器学习中也是这样：你训练一个模型识别手写数字，然后训练它识别门牌号，它就不再能识别手写数字了。这是一个非常著名的问题。有很多理论和方法被提出来解决它，但没人真正知道怎么解决。这非常非常难。

解析：
* **old school machine learning**：传统机器学习
* **handwritten digits**：手写数字（如 MNIST 数据集）
* **house numbers**：门牌号（如 SVHN 数据集）

---

(53) [34:33-34:51] **Um, but I think there are some easy ways we can get around it in the conventional paradigm where we have like this big pre-trained ChatGPT transformer. Uh, instead of retraining the entire model, there's a few different ways we can do it.**

但我认为在传统范式下有一些简单的方法可以绕过这个问题，就是当我们有一个大型预训练的 **ChatGPT** **Transformer** 时。我们可以不重新训练整个模型，有几种不同的方法。

解析：
* **get around it**：绕过它、规避它
* **conventional paradigm**：传统范式
* **pre-trained**：预训练的

---

(54) [34:51-35:03] **I mean, the first one is retraining the entire model. So, the things we're training I'm highlighting in blue here. That's like if we take our transformer and we update all the parameters, we're probably going to forget stuff.**

第一种是重新训练整个模型。我在这里用蓝色高亮显示我们正在训练的部分。如果我们拿 **Transformer** 更新所有参数，我们可能会遗忘一些东西。

解析：
* **highlighting in blue**：用蓝色高亮
* **forget stuff**：遗忘一些东西

---

(55) [35:03-35:16] **Um, there's another one that's pretty cool called Prefix Tuning where you just train the KV cache. Um, I mean, I'll like skip the details for now, but ask me if you have questions. Prefix Tuning is cool.**

还有一个很酷的方法叫 **Prefix Tuning**，你只训练 KV 缓存。我现在先跳过细节，如果有问题可以问我。**Prefix Tuning** 很酷。

解析：
* **Prefix Tuning**：前缀调优（一种参数高效微调方法）
* **KV cache**：键值缓存（Transformer 中的注意力机制组件）

---

(56) [35:16-35:30] **Um, another way is since a lot of these models are called like Mixture of Experts and they have this MLP layer in them, you can add another part to the MLP that is optionally routed to and used and that's like pretty scalable. I think people try this.**

另一种方法是，因为很多模型叫做混合专家模型，里面有 MLP 层，你可以在 MLP 上添加另一部分，可选地路由到并使用它，这很可扩展。我认为有人尝试过这个。

解析：
* **Mixture of Experts (MoE)**：混合专家模型
* **MLP layer**：多层感知器层
* **optionally routed to**：可选地路由到

---

(57) [35:30-35:47] **Um, there's another approach where you replace instead of like another MLP, you build this thing called a memory layer which is like a big lookup table. I think memory layers are really good. And let me pause and say now this part of the talk is getting close to purely speculative. This is like the things that are like they exist and like someone's going to do this and someone's going to use like one of them but I really don't know what the right answer is.**

还有另一种方法，不是添加另一个 MLP，而是构建一个叫做记忆层的东西，它像一个大型查找表。我认为记忆层真的很好。让我暂停一下说，现在这部分演讲已经接近纯推测了。这些东西存在，有人会做，有人会用其中一个，但我真的不知道正确答案是什么。

解析：
* **memory layer**：记忆层
* **lookup table**：查找表
* **purely speculative**：纯推测的
* **I really don't know what the right answer is**：我真的不知道正确答案是什么（诚实承认不确定性）

---

(58) [35:47-36:07] **Um another one is called LoRA. So Low Rank Adaptation. You probably heard of this very like hot topic. Um they kind of like train a small a small matrix or small few matrices to adapt the linear layers. So it's like if your model's 10 billion parameters, maybe you train 10 million parameters that can like control it.**

另一个叫 **LoRA**，低秩适配。你可能听说过这个非常热门的话题。他们训练一个小矩阵或几个小矩阵来适配线性层。所以如果你的模型有 100 亿参数，你可能只训练 1000 万参数来控制它。

解析：
* **LoRA**：Low-Rank Adaptation，低秩适配
* **hot topic**：热门话题
* **linear layers**：线性层
* **10 billion vs 10 million**：100 亿 vs 1000 万（参数量差 1000 倍）

---

(59) [36:07-36:34] **Um, and if we look at them together, maybe it's not super obvious which thing would work best. Like ICL is just like putting stuff in context. So we have In-Context RAG full fine tuning. We could do the memory layers in MLP, Karpathy's which is a Prefix Tuning and we could do LoRA. We could also do add something to the Mixture of Experts. I think to me it's not like clear and I'm not positive that it matters which one we do.**

如果我们把它们放在一起看，可能不太明显哪个效果最好。**ICL** 就是把东西放进上下文。所以我们有上下文内学习、**RAG**、全量微调。我们可以做 MLP 中的记忆层、**Karpathy** 的方法（前缀调优）、还有 **LoRA**。我们也可以在混合专家模型上添加东西。对我来说这不太清楚，我不确定用哪个真的重要。

解析：
* **ICL**：In-Context Learning，上下文内学习
* **full fine tuning**：全量微调
* **I'm not positive that**：我不确定……

---

(60) [36:34-36:51] **Like I think the main thing is like we have this giant model and we're adding a tiny bit to it to control it and training only those parameters. That way we retain most of the information in the model. I think that's like the most important part.**

我认为主要的是：我们有这个巨大的模型，我们在上面添加一小部分来控制它，只训练那些参数。这样我们保留了模型中的大部分信息。我认为这是最重要的部分。

解析：
* **a tiny bit**：一小部分
* **retain most of the information**：保留大部分信息

---

(61) [36:51-37:03] **But I think for the end of this talk I'll just talk through like what I think people are doing in this space up to like the minute and then you can make up your own mind what you think the right way to do it is. So let's talk for a second about what properties we want.**

但我想在演讲结尾，我会讲讲我认为这个领域的人们正在做什么，一直到最新的进展，然后你可以自己决定你认为正确的做法是什么。让我们先谈谈我们想要什么属性。

解析：
* **up to the minute**：最新的、到目前为止
* **make up your own mind**：自己做决定

---

(62) [37:03-37:21] **I think we want um we want our changes to the model to be very small. Like say you're serving a model to each person. You actually can do it, but you have to use one of these like parameter efficient methods. If you're trying to fine-tune a new Qwen for each person, Qwen's like a terabyte. It's a trillion parameters. It's just like not even storable, let alone servable.**

我认为我们希望对模型的更改非常小。比如你要给每个人提供一个模型。你确实可以做到，但必须使用这些参数高效的方法之一。如果你想为每个人微调一个新的 **Qwen**，**Qwen** 有大约 1TB，是万亿参数级别的。根本无法存储，更别说提供服务了。

解析：
* **parameter efficient methods**：参数高效方法
* **Qwen**：通义千问模型
* **a terabyte / trillion parameters**：1TB / 万亿参数
* **let alone**：更别说（递进否定）

---

(63) [37:21-37:38] **Um we want something that's resistant to forgetting like we said. So it would be nice to have an architectural change that's both small and makes the minimal impact on the model as it is now because the model as it is now works really well.**

我们想要一些抗遗忘的东西，就像我们说的。所以最好有一个架构上的改变，既小又对现有模型的影响最小，因为现有模型效果真的很好。

解析：
* **resistant to forgetting**：抗遗忘的
* **minimal impact**：最小影响
* **as it is now**：现有的、目前的状态

---

(64) [37:38-37:55] **Um and preferably high capacity I think like changes that are really expressive and can capture a lot of facts and few parameters are the ones that we prefer and we want to be able to do inference quickly. As like a small aside, you actually can do this quickly with a lot of um a lot of these methods.**

最好是高容量的。我认为那些真正有表达能力的、能用少量参数捕获大量事实的改变是我们更喜欢的，而且我们希望能够快速推理。顺便说一句，你实际上可以用很多这些方法快速做到这一点。

解析：
* **high capacity**：高容量
* **expressive**：有表达能力的
* **as a small aside**：顺便说一句

---

(65) [37:55-38:09] **Like maybe some of you have seen Tinker, this new training API from Thinking Machines. It's basically all predicated on this idea that you can you can serve one model per person as long as you do LoRA and batch the LoRAs.**

也许你们有些人见过 **Tinker**，这是 **Thinking Machines** 的新训练 API。它基本上建立在这个想法上：只要你使用 **LoRA** 并批量处理 **LoRA**，你就可以为每个人提供一个模型。

解析：
* **Tinker**：Thinking Machines 的产品
* **predicated on**：基于、建立在……之上
* **batch the LoRAs**：批量处理 LoRA

---

(66) [38:09-38:27] **And there's like it's actually most interesting from systems perspective. There's like ways you can train it and train each one separately and there's ways you can do inference and it basically has no cost. Um which is really interesting just because like the base model doesn't change and we all share the same base model. So all the ideas I'm going to talk about are kind of like in the same direction as Tinker.**

从系统角度来看这实际上是最有趣的。有办法可以训练它、分别训练每一个，也有办法可以做推理，而且基本上没有成本。这真的很有趣，因为基础模型不变，我们都共享同一个基础模型。所以我要讲的所有想法都和 **Tinker** 的方向类似。

解析：
* **from systems perspective**：从系统角度
* **basically has no cost**：基本上没有成本
* **base model**：基础模型

---

(67) [38:27-38:50] **Um we can think about like whether certain methods might learn more or forget more. Um so this is comparing LoRA to full fine-tuning. So LoRA makes a tiny change to the model. Full fine-tuning updates the entire model. And on two different settings, they show like LoRA here is like purplish or pink. The pink one's a little bit smaller capacity. Um, it basically doesn't do as well.**

我们可以思考某些方法是否会学得更多或忘得更多。这是比较 **LoRA** 和全量微调。**LoRA** 对模型做微小改变，全量微调更新整个模型。在两种不同设置下，他们展示的 **LoRA** 是紫色或粉色的。粉色那个容量稍小，基本上效果不那么好。

解析：
* **learn more or forget more**：学得更多或忘得更多
* **smaller capacity**：容量更小

---

(68) [38:50-39:10] **At least when you're doing SFT, uh, LoRA can learn a little bit less, but also if we look at how much it's degrading, it forgets less. So this paper is called "Learns Less and Forgets Less". And it's actually a very nice finding.**

至少在做 **SFT** 时，**LoRA** 学得少一点，但如果我们看它退化了多少，它也忘得更少。所以这篇论文叫做 **"Learns Less and Forgets Less"**（学得少，忘得也少）。这实际上是一个很好的发现。

解析：
* **degrading**：退化、性能下降
* **"Learns Less and Forgets Less"**：论文名
* **a very nice finding**：一个很好的发现

---

(69) [39:10-39:24] **So like if you want to at least teach a model via SFT and you use one of these low rank or parameter efficient methods like all the ones I described, they're going to make a small change to the model in a way that it's probably not going to be as expressive as full fine tuning, but it also doesn't destroy a lot of the knowledge.**

所以如果你想通过 **SFT** 教一个模型，并且使用这些低秩或参数高效方法中的一种，就像我描述的那些，它们会对模型做小的改变，可能不会像全量微调那样有表达力，但也不会破坏太多知识。

解析：
* **low rank methods**：低秩方法
* **parameter efficient methods**：参数高效方法
* **destroy a lot of the knowledge**：破坏大量知识

---

(70) [39:24-39:47] **Um here's something going the exact opposite direction. This is the results from Thinking Machines showing that they think LoRA is about as good as full fine tuning, which is interesting because they're doing RL. So it's like maybe dependent on the training mechanism like if you do RL maybe it makes small updates and um you can do LoRA you can do memory layers but for SFT it really has to store a lot of information so you really have to do full fine tuning.**

这是完全相反方向的结果。这是 **Thinking Machines** 的结果，显示他们认为 **LoRA** 和全量微调差不多好，这很有趣，因为他们在做 **RL**。所以可能取决于训练机制：如果你做 **RL**，可能更新很小，你可以用 **LoRA** 或记忆层；但对于 **SFT**，它真的需要存储大量信息，所以你真的需要做全量微调。

解析：
* **the exact opposite direction**：完全相反的方向
* **dependent on the training mechanism**：取决于训练机制
* **RL vs SFT**：强化学习 vs 有监督微调的不同需求

---

(71) [39:47-40:06] **I think that's the takeaway I have and I have some actually a paper that's like kind of blocked for legal reasons but coming out soon. Um here's one result from my paper that's relevant to this. So we have this like Tiny LoRA thing that's even smaller than LoRA.**

我认为这是我的收获。我实际上有一篇论文因为法律原因被阻止了，但很快会发表。这是我论文中与此相关的一个结果。我们有一个比 **LoRA** 更小的 **Tiny LoRA**。

解析：
* **blocked for legal reasons**：因法律原因被阻止
* **coming out soon**：即将发表
* **Tiny LoRA**：更小的 LoRA 变体

---

(72) [40:06-40:20] **Well there's actually LoRA XS which already exists and then we made Tiny LoRA which is even smaller. And if you're doing RL on GSM8K math reasoning you can train 14 parameters and get like 91% accuracy which is pretty crazy.**

实际上已经有 **LoRA XS** 了，然后我们做了 **Tiny LoRA**，更小。如果你在 **GSM8K** 数学推理上做 **RL**，你可以只训练 14 个参数就达到大约 91% 的准确率，这相当疯狂。

解析：
* **LoRA XS**：超小型 LoRA
* **GSM8K**：一个数学推理基准测试数据集
* **14 parameters**：只有 14 个参数（极端参数高效）
* **91% accuracy**：91% 准确率

---

## 第二部分小结

### 核心观点

8. **合成数据的突破**：用 LLM 生成大量合成数据来扩充小数据集，这打破了传统"数据不够就过拟合"的范式

9. **相关工作**：
   - **Synthetic Continued Pre-training**（Stanford）
   - **Active Reading**
   - **Self-Study**（Karpathy）
   - **Rephrasing the Web**
   - **SEAL**（自适应语言模型）

10. **灾难性遗忘**：神经网络学新知识时忘掉旧知识的经典问题，非常难解决

11. **参数高效微调方法**：
    - **Full fine-tuning**：更新所有参数（容易遗忘）
    - **Prefix Tuning**：只训练 KV 缓存
    - **Memory Layers**：大型查找表
    - **MoE 扩展**：在混合专家模型上添加专家
    - **LoRA**：低秩适配，只训练小矩阵

12. **LoRA 的权衡**："学得少，忘得也少"——表达能力较弱但保留更多原有知识

13. **RL vs SFT**：强化学习可能更适合参数高效方法，SFT 可能需要全量微调

14. **极端效率**：Tiny LoRA 只用 14 个参数就能在 GSM8K 上达到 91% 准确率

### 新增词汇表

| 词汇 | 词性 | 含义 |
|------|------|------|
| **synthetic data** | n. | 合成数据 |
| **bricking** | v. | 把……搞坏 |
| **overfit** | v. | 过拟合 |
| **catastrophic forgetting** | n. | 灾难性遗忘 |
| **LoRA** | n. | 低秩适配 |
| **Prefix Tuning** | n. | 前缀调优 |
| **memory layer** | n. | 记忆层 |
| **Mixture of Experts (MoE)** | n. | 混合专家模型 |
| **parameter efficient** | adj. | 参数高效的 |
| **intelligence explosion** | n. | 智能爆炸 |
| **speculative** | adj. | 推测性的 |
| **the money question** | n. | 核心问题 |
| **outperform** | v. | 超过、表现优于 |
| **expressive** | adj. | 有表达力的 |

### 新增口语表达

| 表达 | 含义 |
|------|------|
| fancy | 巧妙的（技术语境） |
| the takeaway | 要点、收获 |
| as a small aside | 顺便说一句 |
| let alone | 更别说 |
| up to the minute | 最新的 |
| make up your own mind | 自己做决定 |
| predicated on | 基于 |

---

# 第三部分：Q&A 环节与总结

> 时间：40:20 - 1:02:26

---

(73) [40:20-40:26] **I think um there's like a lot of reasons for this. Like RL makes really tiny changes.**

我认为这有很多原因。**RL** 做的更新非常微小。

---

(74) [40:26-40:38] **I think this Qwen model like is something fishy is going on with the training data. You have a one parameter experiment. Oh yeah, one parameter. It actually learns it gets 5% better with one parameter.**

我觉得这个 **Qwen** 模型的训练数据可能有些蹊跷。你有一个单参数实验。哦对，一个参数。它确实能学习，用一个参数能提升 5%。

解析：
* **fishy**：可疑的、蹊跷的（口语表达）
* **one parameter experiment**：单参数实验

---

(75) [40:38-40:56] **Pretty cool. It's amazing. Yeah. Yeah. It's it's it's really nice. I think um literally the smallest. Yeah. Yeah. The smallest thing you could possibly train. It's more like you you generate a lot of random projections and then you control them all with one number if that makes sense.**

太酷了。很惊人。是啊。这真的很棒。我认为这是字面意义上最小的。对，你能训练的最小的东西。更像是你生成很多随机投影，然后用一个数字控制它们所有，如果你能理解的话。

解析：
* **random projections**：随机投影（数学/ML 概念）
* **if that makes sense**：如果你能理解的话

---

(76) [40:56-41:08] **Like the model actually changes a lot but the only thing you can actually train and store is the one parameter. Uh I tell you more about it later. Um but yeah, it's pretty cool.**

模型实际上变化很大，但你真正能训练和存储的只有那一个参数。我稍后会详细告诉你。但是，这真的很酷。

---

(77) [41:08-41:26] **Um this is another result that's like kind of in the mix, but I'm not sure how to place it. So if you do the KV cache tuning or prefix tuning, this paper thinks prefix tuning works much better than LoRA. I met some people in Meta um when I used to be affiliated there that said that they think LoRA works much better than prefix tuning.**

这是另一个有点混杂的结果，我不太确定怎么定位它。如果你做 KV 缓存调优或前缀调优，这篇论文认为 **Prefix Tuning** 比 **LoRA** 好很多。我在 **Meta** 认识一些人，我以前在那里工作过，他们说他们认为 **LoRA** 比 **Prefix Tuning** 好很多。

解析：
* **in the mix**：在混杂中、不确定的位置
* **affiliated**：隶属于、关联

---

(78) [41:26-41:42] **So I really don't know, but I think like what it really will come down to is like when you do it at scale, what's like most efficient? And I'm not exactly sure, but I think prefix tuning is a pretty good candidate because like KV caches are so commonly used these days.**

所以我真的不知道，但我认为最终会归结为：当你在规模上做这件事时，什么最高效？我不太确定，但我认为 **Prefix Tuning** 是一个很好的候选，因为 KV 缓存现在非常常用。

解析：
* **come down to**：归结为

---

(79) [41:42-42:06] **I think a cool thing about Thinking Machines is like they're designing this entire organization around like scaling LoRA which is awesome but it's not really possible in open source right now. Like there's not kernels for training many LoRAs at the same time. It's like very complex and you have to have a lot of people working on that. Prefix tuning on the other hand is like very well supported.**

我认为 **Thinking Machines** 很酷的一点是他们整个组织都围绕着扩展 **LoRA** 来设计，这很棒，但在开源领域目前还不太可能。比如没有同时训练多个 **LoRA** 的内核。这非常复杂。另一方面，**Prefix Tuning** 得到了很好的支持。

解析：
* **kernels**：内核

---

(80) [42:06-42:28] **Um and then finally I'll quickly talk about memory layers. This is another approach to injecting data into models which I think is good. This is like uh adding an expert to the MLP but the expert is just like this giant differentiable lookup table.**

最后我会快速讲一下记忆层。这是另一种将数据注入模型的方法，我认为很好。这就像在 MLP 上添加一个专家，但这个专家只是一个巨大的可微分查找表。

解析：
* **differentiable lookup table**：可微分查找表

---

(81) [42:28-42:46] **So it's kind of not that important exactly how it works but it's like it's just a different way to inject information into models. The cool thing about memory layers is it's controllable. So in this work uh by Jesse Lynn from this year, they specify exactly which parts of the memory layer get updated and keep it to like a very small number.**

具体怎么工作不是那么重要，它只是另一种将信息注入模型的方式。记忆层很酷的一点是它是可控的。在 **Jesse Lynn** 今年的这项工作中，他们精确指定记忆层的哪些部分被更新，并将其保持在非常小的数量。

---

(82) [42:46-43:02] **And so their result shows that memory layers actually work the best. So memory the axes here are forgetting so down is bad and learning right is good. So the memory layers basically don't forget at all and they learn close to as much.**

他们的结果显示记忆层实际上效果最好。这里的坐标轴是遗忘（向下是坏的）和学习（向右是好的）。记忆层基本上完全不遗忘，而且学习能力也差不多。

---

(83) [43:02-43:21] **So I think if you're trying to inject information into models that you really care about them not forgetting any of their base information, maybe memory layers are the way to go. I think honestly there's a lot of conflicting evidence right now. Like some people think LoRA is good, some people think prefix tuning is good. These people think memory layers is good. I really am not sure, but I think it's going to be one of them.**

所以我认为如果你想把信息注入模型，而且你真的很在意模型不要忘记任何基础信息，记忆层可能是最好的选择。老实说我认为现在有很多相互矛盾的证据。有人认为 **LoRA** 好，有人认为 **Prefix Tuning** 好。这些人认为记忆层好。我真的不确定，但我认为会是其中之一。

解析：
* **the way to go**：最好的选择
* **conflicting evidence**：相互矛盾的证据

---

(84) [43:21-43:40] **Okay, cool. That's that's the end of the training stuff into weights part. Maybe actually I'll stop and see if anyone has any questions about the different parameterizations.**

好的，酷。这就是将东西训练进权重部分的结尾。也许我现在停下来，看看有没有人对不同的参数化方法有问题。

---

## Q&A：RL vs SFT 的参数需求

(85) [43:40-44:00] **Oh, yeah. Yeah. Yeah. From from my yet unreleased research. So, have you used SFT before? Yeah. Yeah. I can show you the SFT results later. But SFT uh takes a lot more parameters in the short explanation like many many more like a thousand x or something.**

哦，对。来自我尚未发表的研究。你用过 **SFT** 吗？是的。我可以稍后给你看 **SFT** 的结果。但简单来说，**SFT** 需要多得多的参数，多很多，大概 1000 倍左右。

解析：
* **a thousand x**：1000 倍

---

(86) [44:00-44:26] **And you attribute that to the sparsity of the reward. Yeah. Yeah. I think it's something like that. Like the SFT learning signal is like cross entropy on all of the tokens with or without thinking tokens. And that's a lot of bits essentially. And then RL just gives you a one or a zero. If you get it right and you already knew, then it's no information. If you get it wrong, you get like one bit.**

你把这归因于奖励的稀疏性。是的。**SFT** 的学习信号是对所有 token 的交叉熵，不管有没有思考 token。这基本上是很多比特的信息。而 **RL** 只给你一个 1 或 0。如果你答对了而且你本来就知道，那就没有信息。如果你答错了，你只得到大约一比特的信息。

解析：
* **sparsity of the reward**：奖励的稀疏性
* **cross entropy**：交叉熵

---

(87) [44:26-44:48] **So I think because RL is like so sparse and uh information efficient, then you can do it with way fewer parameters. That's that's kind of the takeaway from our paper actually. So you didn't do GRPO after doing SFT? No, no SFT. We just either do GRPO or SFT and then we see like kind of how many parameters you need to train to get to equivalent performance and SFT requires many more parameters.**

所以我认为因为 **RL** 非常稀疏且信息高效，所以你可以用少得多的参数来做。这其实是我们论文的要点。所以你没有在做完 **SFT** 后再做 **GRPO**？不，没有 **SFT**。我们只是做 **GRPO** 或 **SFT** 其中之一，然后看达到同等性能需要训练多少参数，**SFT** 需要多得多的参数。

解析：
* **GRPO**：Group Relative Policy Optimization

---

## Q&A：RAG vs 训练的选择

(88) [44:48-45:47] **Uh so here you are comparing like uh training versus RAG... So is the volume of the document also matter... because if some problem has a less number of document uh RAG will be better or the training will be better. That's a really good point... I think the question is like okay you're trying to train all of your data into a model but something only happens once... when I should pick focus on RAG and when I should focus on training... if I have like a small set of documents the training might not be feasible. Yes. Yes.**

你是在比较训练和 **RAG**……文档量是否也重要……如果问题的文档数量较少，**RAG** 会更好还是训练会更好？这是一个很好的观点。问题是你想把所有数据训练进模型，但有些事情只发生一次……什么时候应该专注于 **RAG**，什么时候专注于训练……如果我只有一小组文档，训练可能不可行。是的。

---

(89) [45:47-46:18] **Let me point out like okay, so obviously we're always going to put stuff into context and I think we'll also probably always do RAG. Like I think there's basically no scenario that you can imagine for a long time where you're just like always training the model and never doing RAG. I think you'll do both. I think like maybe if you have a ton of documents, maybe every day you do this big training and then every time you serve you also do RAG.**

让我指出，显然我们总是会把东西放进上下文，我认为我们可能也总是会做 **RAG**。在很长一段时间内，基本上没有你只训练模型而从不做 **RAG** 的场景。我认为你会两者都做。也许如果你有大量文档，也许每天你做一次大训练，然后每次服务时你也做 **RAG**。

---

(90) [46:18-46:55] **And so like what I really imagine is like or maybe my point is that no one is doing this right now and like people will start doing that... I would definitely be interested to see both analysis on how the frequency of information affects like the trade-off and how just like how much data you have to have for training to become economically feasible. That's a really good question.**

我真正想象的是——或者我的观点是现在没有人在做这个，但人们会开始做。我肯定会对两种分析感兴趣：信息频率如何影响权衡，以及你需要多少数据训练才变得经济可行。这是一个很好的问题。

解析：
* **economically feasible**：经济上可行的

---

## Q&A：微调用于嵌入还是补全

(91) [46:55-47:44] **Is your suggestion kind of in diving more into like the weights side to use a fine-tuned model for like completion type tasks or also for embeddings? Oh yeah, that's a good question. No, I think the fine-tuning I'm talking about is all for like assistant engine completion. It's an interesting question. You probably could do like dynamic embedding model training, but I guess like the way I think about it is like the real like 10x improvement here is going to come from training to weights. You could maybe make RAG like 2x better if you really really worked, but I think there's so many fundamental problems with it that I wouldn't spend that much time on making it better.**

你的建议是深入研究权重这边，用微调模型做补全类型的任务，还是也做嵌入？哦，这是个好问题。不，我认为我说的微调都是针对助手引擎补全的。你可能可以做动态嵌入模型训练，但我觉得真正的 10 倍改进会来自于训练到权重。如果你真的努力，你可能让 **RAG** 好 2 倍，但我认为它有太多根本性问题，我不会花那么多时间去改进它。

---

## Q&A：RAG 的根本问题

(92) [47:44-48:09] **What do you feel like the most fundamental problem is where even if like your retrieval was fantastic, you still kind of... I think like chunking um yeah, you just like kind of retrieve some of the stuff you need and then you can't really reason across all of it. And like I think in the limit like there's some types of data where like no matter how you chunk, you'll never get like everything you need if that makes sense.**

你觉得最根本的问题是什么，即使你的检索非常好，你仍然……我认为是分块。你只是检索到你需要的一部分东西，然后你无法真正在所有内容上进行推理。我认为在极限情况下，有些类型的数据无论你怎么分块，你永远不会得到你需要的一切。

解析：
* **chunking**：分块（RAG 的核心问题）

---

## Q&A：规模化个性化

(93) [48:09-48:55] **Do you see any fundamental limitations as you scale up the amount of personalization you need? Let's say you had a B2C product that had 100 million or 10 million users memory for all of those. Do you think that's just not feasible? Um no, no, I actually think it is feasible. Like LoRA, maybe you train a few megabytes per user or something. It's not that crazy, right? Like YouTube probably has gigabytes per user multiple times, right? That's a good point. Like the continual updates are hard. Like probably in realistic short term, it's more like you update once a day or something like that. But I think that's doable. But you make a good point that the paradigm I'm describing is much more expensive.**

规模化个性化时有什么根本性限制吗？假设你有一个 **B2C** 产品，有 1 亿或 1000 万用户，要为他们所有人存储记忆。你认为这不可行吗？不，我实际上认为是可行的。比如 **LoRA**，也许你每个用户训练几兆字节。这没那么疯狂，对吧？**YouTube** 可能每个用户有好几个 GB 的数据。这是个好观点。持续更新很难。在现实的短期内，可能更像是每天更新一次。但我认为这是可行的。但你说得对，我描述的范式更贵。

---

## Q&A：三个优化轴

(94) [49:00-49:26] **Also, you do consider there's a lot more that you can do in the other two buckets. You compress the data context. You compress it before you put RAG. You break it up into other buckets. You don't just have to use RAG and use SQL and knowledge graphs to all of them together in different buckets and that solves a lot of problems. Yeah. Yeah, that's a good point. There's kind of like three axes of optimization here. And I guess like we are we're getting pretty good at this. We're okay at this and we're horrible at this. And so like we'll continue improving upon all three axes.**

另外，你确实要考虑在另外两个桶里你还可以做很多。你压缩数据上下文。你在放进 **RAG** 之前压缩它。你把它分到其他桶里。你不必只用 **RAG**，可以用 SQL 和知识图谱，把它们放在不同的桶里，这解决了很多问题。是的，这是个好观点。这里有三个优化轴。我们在这个上做得很好，这个还可以，这个很糟糕。所以我们会继续在所有三个轴上改进。

---

## Q&A：决策边界

(95) [49:26-50:31] **What's your kind of like intuition or guess in terms of like where the decision boundary is in terms of investing your effort in those optimizations... is it the freshness of the data how fast changing is the number of documents there what's your... Yeah it's a really good question. I think the paradigm I'm describing is especially effective when you have like a large amount of data that's not been indexed into the LLM at all and it gives you a big benefit there. I think when you start seeing like sparser updates to your data set or like some new data comes in but it's not that much and it's like fairly often then you probably want to turn to inference time approaches that are closer to deep research.**

你的直觉或猜测是什么，关于在这些优化中投入努力的决策边界在哪里……是数据的新鲜度吗？变化有多快？文档数量？这是一个很好的问题。我认为我描述的范式在你有大量数据且这些数据完全没有被索引进 LLM 时特别有效。当你开始看到对数据集更稀疏的更新，或者有一些新数据进来但不是很多且相当频繁时，你可能想转向更接近 **Deep Research** 的推理时方法。

---

## Q&A：合成数据生成的应用

(96) [50:31-52:09] **Can you elaborate a little bit more about the synthetic data generation... let's say that you have YouTube to talk similar language terminology like proprietary data right like millions of documents like how is synthetic data generation that context helpful... I think synthetic data generation could work for that problem. So I guess like it depends on how information dense your data is. If you have millions of documents from your company, I would guess many of them share formatting and only contribute maybe like a few bits of kind of global information to the data set. And so what you want to think about is like does there exist a function that could produce a good training data set for an LLM that would teach it about my data? And like there probably is. Like you could probably design some strategy that looks at the documents, kind of like figures out what's new about each document and creates like kind of question answer pairs, but this is very blue sky.**

你能详细说一下合成数据生成吗？假设你有类似 **YouTube** 的东西，使用类似的语言术语，比如专有数据，比如数百万份文档，合成数据生成在那个场景下怎么有帮助？我认为合成数据生成可以解决那个问题。这取决于你的数据信息密度有多高。如果你有公司的数百万份文档，我猜很多文档共享格式，只对数据集贡献大概几比特的全局信息。所以你要思考的是：是否存在一个函数可以产生一个好的 LLM 训练数据集来教它关于你的数据？可能有。你可以设计策略来查看文档，找出每个文档的新内容，创建问答对，但这非常蓝天（前瞻性的）。

解析：
* **blue sky**：前瞻性的研究

---

## Q&A：理想情况下不需要提示词

(97) [52:37-53:51] **With this approach what would the prompt basically look like... is there anything within the in context learning that would still need to be kind of specified to bring your data into a context. Yeah. I think actually if you do it right, you don't need a prompt at all like you can just ask the model a question. No system prompt, no extra information and if nothing has changed, it should know everything. Like and you even there's some scenarios where there's only one document and the model knows which document it is so you don't have to specify that you're even asking a question about the document it's like implied. I think in like the ideal case there's no prompt at all.**

用这种方法，提示词基本上会是什么样子？在上下文学习中还需要指定什么来把你的数据带入上下文吗？我认为如果你做对了，你根本不需要提示词，你可以直接问模型一个问题。没有系统提示词，没有额外信息，如果什么都没变，它应该知道一切。甚至在某些场景下只有一个文档，模型知道是哪个文档，所以你甚至不需要指定你在问关于这个文档的问题，这是隐含的。在理想情况下根本不需要提示词。

---

## Q&A：为什么要存储在权重中

(98) [53:51-54:57] **It's not obvious to me that information is best stored in model. Yeah why do you have... This is a good question. I'm not saying that it's best to store information in weights. I guess I'm arguing that that gets you a lot and we're not using it right now. And like once you get to the scale of like a GitHub repo, you might have millions of tokens and it's just like very expensive. And so at least like this is the cheapest way to do it. Do you know what I mean when I say it's cheaper though like if you have a million token prompt you can just like compress it into the weights and produce a model that gives the same outputs with no prompt and then the inference costs less.**

对我来说信息最好存储在模型中并不是显而易见的。这是一个好问题。我不是说在权重中存储信息是最好的。我想说的是这能给你很多好处，而我们现在没有使用它。一旦你达到 **GitHub** 仓库的规模，你可能有数百万个 token，这非常昂贵。所以至少这是最便宜的方式。你理解我说更便宜是什么意思吗？如果你有一百万 token 的提示词，你可以把它压缩进权重，产生一个不需要提示词就能给出相同输出的模型，然后推理成本更低。

---

## Q&A：对抗性数据

(99) [55:04-55:57] **I have one after that there is no adversarial data. That's actually a really good question. Never thought about it before. Um I think it's probably pretty hard. Like I guess if you're training on user data and like you have some user that wants to sabotage your system and you're generating training data from their inputs, there probably are a lot of like security risks. And uh I guess in this scenario, if you're serving the same model that user and it doesn't work anymore, that's like not your problem. But once you start aggregating information across users, I bet it becomes hard. I'm sure ChatGPT has the same problem where some people always click thumbs down instead of thumbs up to try to like...**

关于对抗性数据。这是一个很好的问题。我以前从没想过。我认为这可能相当难。如果你在用户数据上训练，有些用户想破坏你的系统，你从他们的输入生成训练数据，可能有很多安全风险。我猜在这个场景下，如果你给那个用户提供同一个模型而它不工作了，那不是你的问题。但一旦你开始跨用户聚合信息，我打赌会变得很难。我确定 **ChatGPT** 有同样的问题，有些人总是点踩而不是点赞来试图……

解析：
* **adversarial data**：对抗性数据
* **sabotage**：破坏

---

## Q&A：版本控制与矛盾信息

(100) [55:57-57:00] **Thinking maybe a little bit about practical implementations... especially in terms of version controlling, you mentioned GitHub models that you keep fine-tuning over time. Say you're a company that just changed a policy and it's just a one line sentence... that keeps going back and forth. Do you then start from the base model again and then fine-tune that or go back to the one that already a good representation of it... and then how that is joined at the hip with hallucinations which is kind of why we were doing full context to avoid that. Do you have any thoughts on how that might work? Yeah, I think so his question was about what do you do once you start making multiple updates to the model especially when you have like conflicting information and I think like the optimal synthetic data strategy was somehow figure this out during training and maybe even like if there's some documents from a few days ago that are no longer relevant you can just like delete them but I don't know how.**

考虑一下实际实现。特别是版本控制方面，你提到 **GitHub** 模型你会随时间持续微调。假设你是一家公司刚刚改变了政策，只是一句话……来回变化。你是从基础模型重新开始再微调，还是回到已经有良好表示的那个……这和幻觉问题密切相关，这就是为什么我们做全上下文来避免那个。他的问题是一旦你开始对模型进行多次更新，特别是当你有相互矛盾的信息时你怎么办。我认为最优的合成数据策略是在训练过程中以某种方式解决这个问题，甚至如果有几天前的一些文档不再相关，你可以删除它们，但我不知道具体怎么做。

解析：
* **joined at the hip with**：与……密切相关
* **hallucinations**：幻觉

---

## Q&A：联邦学习的回归

(101) [58:42-59:31] **Have you done any work with federated tuning fine tuning parameters of users? No not really but I think it's an interesting opportunity. So like back in the day a lot of people were really excited about the idea that you could share gradients and train the same model across many machines. This is federated learning. And I think like one of the problems why it's hard is because the models now are so big that the network costs are way too high and because like I'm arguing that you only need to train a million parameters instead of a trillion. It probably comes back into play. So I think it's a very good idea especially in the RL world where you do a lot of work for a long time and then do gradients like very seldomly. So I think it probably will come back and it's smart to think of it but it hasn't quite yet.**

你有没有做过用户参数的联邦调优微调？不，没有，但我认为这是一个有趣的机会。以前很多人对这个想法非常兴奋：你可以共享梯度，在多台机器上训练同一个模型。这就是联邦学习。我认为它很难的一个问题是现在模型太大了，网络成本太高。因为我在说你只需要训练一百万参数而不是一万亿。它可能会重新发挥作用。特别是在 **RL** 世界里，你做很长时间的工作然后很少做梯度更新。所以我认为它可能会回来，思考这个很聪明，但还没有。

解析：
* **federated learning**：联邦学习
* **comes back into play**：重新发挥作用

---

## Q&A：专业化模型 vs 通用推理引擎

(102) [59:31-1:01:18] **So your argument here about training in information seems to be counter to Karpathy's view of like a reasoning engine like distilling just the pure intelligence aspect of a model down to like a two billion parameter thing. Um and like I think that there's a bit of overlap there... like a lawyer is not doesn't have the entire legal code memorized but they know how to use the tools available to them to find what they need to... Yeah. So I think there may be a comparison between some people who have said, "Oh, the best model we could ever have is like really small and knows nothing but can use tools really well." And I guess I was proposing some similar ideas. I said models know way too much. I think everyone agrees the model doesn't need to know the capital of the smallest province of Tajikistan for most use cases. But I think it's really hard to create a model that doesn't know anything. And so I'm more advocating for like specialized models that are good at something you care about but bad at other things rather than advocating for a model that's like bad at everything.**

你这里关于训练信息的论点似乎与 **Karpathy** 关于推理引擎的观点相反——把模型的纯智能方面蒸馏到一个 20 亿参数的东西。我认为这里有一些重叠……比如律师并没有背下整个法律条文，但他们知道如何使用可用的工具找到他们需要的东西……是的。所以我认为可能有一个比较，有些人说"我们能拥有的最好的模型是非常小的，什么都不知道但能很好地使用工具"。我想我也在提出一些类似的想法。我说模型知道的太多了。我认为每个人都同意，对于大多数用例，模型不需要知道塔吉克斯坦最小省份的首府。但我认为创建一个什么都不知道的模型真的很难。所以我更倾向于专业化的模型，擅长你关心的东西但不擅长其他东西，而不是倡导一个什么都不擅长的模型。

解析：
* **distilling**：蒸馏
* **specialized models**：专业化模型

---

## Q&A：时间元素与未来研究

(103) [1:01:18-1:02:18] **Have you ever done research yet in the temporal elements of the information? No, but I think that's like one of the first things to think about is like, okay, if you have information from day one and day two and day three, do you just sort of like concatenate everything or do you train in order kind of like you were asking or do you like train multiple models and merge them or I actually don't know, but that's a good segue. So now I'm working on this problems related to this a lot, thinking about this a lot. Started a company with a few other people and this is like the kind of research we're doing. If anyone knows someone who lives in San Francisco and is a good engineer and you think they're interested in this, let me know or send me an email. Or if you're interested in like using this kind of thing, send me an email. That would be great. It's temporal stuff or not necessarily. I mean it's kind of all of this I would say. Trying to build models that you can teach things to. All right. Thanks so much for having me. This is great.**

你有没有做过关于信息时间元素的研究？没有，但我认为那是首先要考虑的事情之一。如果你有第一天、第二天、第三天的信息，你是把所有东西连接起来，还是按顺序训练就像你问的那样，还是训练多个模型然后合并它们？我实际上不知道，但这是一个很好的引子。所以现在我正在大量研究与此相关的问题，思考这些问题。我和其他几个人创办了一家公司，这就是我们正在做的研究类型。如果有人认识住在旧金山的优秀工程师，你认为他们对此感兴趣，请告诉我或发邮件给我。或者如果你对使用这种东西感兴趣，发邮件给我。那太好了。是关于时间的东西还是不一定？我的意思是我会说这些都是。尝试构建你可以教东西的模型。好的。非常感谢邀请我。这太棒了。

解析：
* **temporal elements**：时间元素
* **segue**：引子、过渡

---

## 第三部分小结

### Q&A 核心要点

15. **RL vs SFT 参数需求**：RL 因为学习信号稀疏（只有 0/1），比 SFT 需要少 1000 倍的参数

16. **RAG vs 训练的选择**：
    - 两者应该结合使用
    - 大量数据 + 不频繁更新 → 训练到权重
    - 数据频繁变化 → 推理时方法（如 Deep Research）

17. **RAG 的根本问题**：分块（chunking）——无论怎么分块，某些类型的数据你永远无法获得全部需要的内容

18. **规模化个性化**：可行的。每用户几 MB 的 LoRA

19. **合成数据生成**：
    - 对信息密度高的大量文档有效
    - 可以生成问答对来训练
    - 目前没有通用解决方案

20. **版本控制与矛盾信息**：
    - 最优策略是在训练时解决
    - 删除不再相关的旧文档
    - 与 RAG 有相同的限制

21. **联邦学习的回归**：因为现在只需要训练百万参数而不是万亿，联邦学习可能会重新相关

22. **专业化模型 vs 通用推理引擎**：
    - 演讲者倡导专业化模型：擅长你关心的，不擅长其他的
    - 而不是什么都不知道但会用工具的模型

23. **时间元素**：如何处理不同时间的信息是未解决的研究问题

### 第三部分新增词汇

| 词汇 | 词性 | 含义 |
|------|------|------|
| **fishy** | adj. | 可疑的、蹊跷的 |
| **random projections** | n. | 随机投影 |
| **cross entropy** | n. | 交叉熵 |
| **GRPO** | n. | Group Relative Policy Optimization |
| **chunking** | n. | 分块 |
| **federated learning** | n. | 联邦学习 |
| **adversarial data** | n. | 对抗性数据 |
| **hallucinations** | n. | 幻觉 |
| **distilling** | v. | 蒸馏 |
| **temporal elements** | n. | 时间元素 |
| **specialized models** | n. | 专业化模型 |

### 第三部分新增口语表达

| 表达 | 含义 |
|------|------|
| fishy | 可疑的 |
| if that makes sense | 如果你能理解的话 |
| come down to | 归结为 |
| in the mix | 不确定的位置 |
| the way to go | 最好的选择 |
| blue sky | 前瞻性的研究 |
| joined at the hip with | 与……密切相关 |
| comes back into play | 重新发挥作用 |

---

# 全文总结 🎯

## 核心论点

这场演讲的核心论点是：**我们应该把信息训练进模型权重，而不仅仅依赖 RAG**。

## 主要内容回顾

### 第一部分：RAG 的局限性
- **Agentic Search** 不是 RAG，有不同的限制
- 更好的方案必然更贵（训练时或推理时）
- 模型容量有限（约 3.6 bits/参数）
- 直接微调会导致灾难性遗忘和过拟合

### 第二部分：解决方案
- **合成数据生成**：用 LLM 扩充小数据集
- **参数高效微调**：LoRA、Prefix Tuning、Memory Layers
- **RL vs SFT**：RL 需要的参数少 1000 倍

### 第三部分：实践考量
- RAG 和训练应该结合使用
- 分块是 RAG 的根本问题
- 规模化个性化是可行的
- 专业化模型优于"什么都不知道但会用工具"的模型

## 演讲者的核心洞见

1. 模型知道太多不需要的东西
2. 合成数据生成打破了传统 ML 范式
3. 参数高效方法让个性化模型成为可能
4. 这个领域非常新，有很多研究机会
