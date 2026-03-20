# 英语段落翻译学习 📚

这是一段关于 AI 模型训练和 RAG 技术的技术演讲，讨论了如何将知识注入模型权重中。

---

## 第 1 部分：Agentic Search 与 RAG 的关系

**[20:00]** I'm curious if you would classify agentic search as rag as well. Yeah that's a good question. So I guess

**[20:06]** the way I think agentic search it's like a model that can grab and it makes a

**[20:11]** bunch of queries in a row and then it responds. Um yeah that's that's a really good

**[20:17]** question. I think I think I wouldn't classify it as rag,

**[20:22]** but I think it has different fundamental limitations that are also tough to overcome.

**翻译：**
我很好奇你会不会把 agentic search 也归类为 RAG。这是个好问题。我觉得 agentic search 是这样的：模型可以抓取信息，连续发出一堆查询，然后再回应。嗯，这确实是个很好的问题。我不会把它归类为 RAG，但我认为它有不同的基本限制，这些限制同样很难克服。

---

## 第 2 部分：理想的模型应该怎样

**[20:22]** Like what you what you would

**[20:29]** really want is like a model that reads the entire thing and reasons about every possible relationship and then answers.

**[20:36]** And I think in theory maybe you could build an agentic rag system that does that, but it would be very expensive.

**翻译：**
你真正想要的是一个能读完整个内容、推理出所有可能的关系、然后再回答的模型。理论上你也许可以构建一个这样的 agentic RAG 系统，但那会非常昂贵。

---

## 第 3 部分：Deep Research 的方向

**[20:43]** Yeah. Because isn't that isn't that in the isn't deep research in the direction

**[20:48]** of that where it like goes through and it pulls like hundreds or thousands of sources but then what ends up in context is only like a small subset of those.

**[20:55]** Yeah. Yeah. I actually think deep research is like really in the right direction. Like they're trying to do

**[21:01]** something that's a little bit higher level and requires a lot of compute.

**翻译：**
是啊，Deep Research 不就是朝着那个方向走的吗？它会遍历并拉取成百上千个来源，但最终进入上下文的只是其中很小一部分。是的。我确实觉得 Deep Research 走在正确的方向上。他们在尝试做一些更高层次的事情，而且需要大量算力。

---

## 第 4 部分：比 RAG 更好的方案必然更贵

**[21:07]** Like I think um anything that works better than rag is going to be more expensive. And so like just the property

**[21:12]** that it takes a while and it makes a lot of searches and it thinks a lot is like good. I think that there's probably a

**[21:20]** more elegant way to train like a really big kind of researchesque system, but I

**[21:26]** think that's that's actually a a good way of doing this and and not the one that I'm talking about today, but it's

**[21:32]** very promising as well.

**翻译：**
我认为任何比 RAG 效果更好的方案都会更贵。所以它需要花一些时间、进行大量搜索、做很多思考，这些特性本身就是好的。我觉得可能有更优雅的方式来训练一个真正大型的、类研究型的系统，但那确实是一个很好的做法，虽然不是我今天要讲的，但也很有前景。

---

## 第 5 部分：训练时 vs 推理时的权衡

**[21:32]** Like maybe the question is like are you willing to spend a lot of money at training time or

**[21:38]** at inference time and deep research is like kind of they don't spend a lot of money to train it but it's willing to wait for a long time at inference and I

**[21:44]** think the things I'm going to talk about today are more like if you're willing to spend a lot of money up front and you get a really smart model that knows all

**[21:51]** your data already um and it's really cheap to do inference. So it's like kind of different sides of the same

**[21:57]** trade-off.

**翻译：**
问题可能是：你愿意在训练时花大钱，还是在推理时花大钱？Deep Research 的策略是不在训练上花太多钱，但愿意在推理时等很长时间。而我今天要讲的更像是：如果你愿意预先花大钱，你就能得到一个非常聪明的、已经了解你所有数据的模型，然后推理成本就很低。这就像同一个权衡的不同面。

---

## 第 6 部分：要更好就得付出代价

**[21:57]** And I think like a good way of thinking about these things is like to get better models, you're going to need to pay somewhere, you know, like

**[22:04]** you're either going to need to like generate better data and spend more time on the data, you're going to need to spend time on training, or you're going

**[22:10]** to need to spend time on inference. And a nice thing about rags is it kind of just works, but anything better will cost more.

**翻译：**
我觉得一个好的思考方式是：要得到更好的模型，你总得在某个地方付出代价。你要么需要生成更好的数据、在数据上花更多时间，要么需要在训练上花时间，要么需要在推理上花时间。RAG 的好处是它基本能用，但任何更好的方案都会更贵。

---

## 第 7 部分：关于知识图谱的问题

**[22:16]** Yeah. Getting back to your example of Mastercard versus V. I I don't know if

**[22:22]** that's in your presentation later, but what are your thoughts on using knowledge graph for that as kind of augmenting

**[22:28]** It's a good question. Maybe ask me after. I have to think about knowledge graphs. It's been a while.

**翻译：**
回到你之前 Mastercard 和 Visa 的例子，我不知道你后面的演示会不会讲到，但你对用知识图谱来增强这个有什么看法？这是个好问题。也许会后再问我吧，我得想想知识图谱的事，已经很久没碰了。

---

## 第 8 部分：如何将知识学进权重

**[22:28]** Um, so let's

**[22:35]** talk about how to learn things in weights. Um, I think like the question that we want to get at is like, okay, so

**[22:42]** say we have the example I showed earlier or like you have a small data set you collected from your own personal work

**[22:48]** and you want to teach it to the model. It's one thing to put it into context and that's a good way to get started and

**[22:54]** if you don't have that much data, that'll get you pretty far. But I think we can do more.

**翻译：**
那我们来聊聊如何把东西学进权重里。我们要解决的问题是这样的：假设我们有之前展示的那个例子，或者你从自己的工作中收集了一小份数据集，想教给模型。把它放进上下文是一种方式，也是一个很好的起点，如果数据量不大的话，这样做能走很远。但我觉得我们可以做得更多。

---

## 第 9 部分：上下文也有解决不了的问题

**[22:54]** Like there's some

**[22:59]** questions that even when your data is in context, the model can't answer. And so what I want us to think about is like

**[23:05]** how can we inject things into a model uh is such that it learns better than in context and also that it doesn't forget

**[23:11]** everything that it already knows.

**翻译：**
有些问题即使你的数据在上下文中，模型也回答不了。所以我想让大家思考的是：我们怎样才能把东西注入模型，让它学得比放在上下文里更好，同时又不会忘记它已经知道的一切。

---

## 第 10 部分：语言模型的固定容量

**[23:11]** Um I want to point out something from my own research which is that there is a fixed

**[23:17]** capacity to language models. Like one way to think about this is tgt has like only so many parameters. we have this

**[23:24]** measurement that it can store 3.6 bits per parameter. So like uh I think a

**[23:30]** billion parameter model is like at 3.6 bits is maybe like four terabytes. Is

**[23:38]** that right? 4 gigabytes what? Yeah, thank you. Thank you.

**翻译：**
我想指出我自己研究中的一点：语言模型有固定的容量。可以这样理解：GPT 只有那么多参数。我们有个测量结果，每个参数可以存储 3.6 比特。所以一个十亿参数的模型按 3.6 比特算大概是……四太字节？等等，是 4GB 对吧？对，谢谢。

---

## 第 11 部分：模型容量有限的问题

**[23:38]** Um this is like

**[23:44]** some information but it's actually not that much. So the models they basically do their best to fit the training

**[23:50]** distribution and they throw everything else out. So like to give you a concrete example this morning I was putting this

**[23:56]** together. I asked Claude, "What is the capital of the smallest province in Tajjikstan?" And it gave me a very detailed answer.

**[24:03]** It's actually very impressive. No web search. The model just knows this in its parameters.

**翻译：**
这是一些信息量，但实际上并没有那么多。所以模型基本上会尽力拟合训练分布，然后把其他东西都丢掉。举个具体的例子，今天早上我在准备这个演讲时，问了 Claude："塔吉克斯坦最小省份的首府是什么？"它给了我一个非常详细的答案。确实很令人印象深刻。没有网络搜索，模型就是在参数里知道这些。

---

## 第 12 部分：不需要的知识占用了宝贵空间

**[24:03]** I guess I'm arguing that

**[24:09]** this is bad. Like if you want to build a system that can answer really detailed

**[24:14]** documentation questions for your company, you don't need it to know what the capital of the smallest province in

**[24:20]** Tajjikstan is. And since we know these models have fixed capacity, I think that this is bad. Like what we really want is

**[24:27]** to know how to like find this kind of thing and just like delete it and replace it with the things we care about. And I think that's like what

**[24:33]** we're getting towards, but we don't 100% know how to do that again.

**翻译：**
我的观点是这其实是件坏事。如果你想构建一个能回答你公司详细文档问题的系统，你不需要它知道塔吉克斯坦最小省份的首府是什么。既然我们知道这些模型容量有限，我认为这是不好的。我们真正想要的是知道如何找到这类东西，把它删掉，然后替换成我们关心的内容。我觉得这就是我们正在努力的方向，但我们还不是百分百知道怎么做。

---

## 第 13 部分：神经文件系统的概念

**[24:33]** Sorry. So when I originally put this talk

**[24:38]** together, the way I was thinking of explaining it is calling it a neural file system. And then I decided to just

**[24:44]** call it weights. I think it's easier to understand, but this slide still says neural file systems.

**翻译：**
抱歉。最初准备这个演讲时，我想把它叫做"神经文件系统"。后来我决定就叫它"权重"。我觉得这样更容易理解，但这张幻灯片还是写着"神经文件系统"。

---

## 第 14 部分：训练数据进模型的几个问题

**[24:44]** Um so I think

**[24:51]** there's a few questions here like we want to train all our data into the model. One question is like how do we train it? Do we do RL? Do we do SFT? Uh

**[24:58]** what's what even is the data? Um another question is like out of uh all the

**[25:04]** possible data what do we use? Do we just like fine-tune directly on our data? Do we try to generate more? I think my

**[25:11]** argument is that we should try to generate more and I'll show you why.

**翻译：**
这里有几个问题。我们想把所有数据训练进模型。第一个问题是：怎么训练？用 RL 还是 SFT？数据到底是什么？另一个问题是：在所有可能的数据中，我们用哪些？是直接在我们的数据上微调，还是尝试生成更多？我的观点是应该尝试生成更多，我会告诉你为什么。

---

## 第 15 部分：架构又开始重要了

**[25:11]** And then there's an architectural question.

**[25:17]** Like I think for a long time, people really cared in the machine learning deep learning community about like what

**[25:23]** architectures we should use. And then for like what 8 years, everyone who knows what they're doing has really just

**[25:29]** been using transformers unless they're trying to make them better.

**翻译：**
然后还有架构问题。很长一段时间以来，机器学习和深度学习社区的人都很关心应该用什么架构。然后大概 8 年来，所有懂行的人基本上都只用 Transformer，除非他们在尝试改进它。

---

## 第 16 部分：个性化模型时代架构再次重要

**[25:29]** And I think now in this world where we're trying to

**[25:35]** train stuff into models like like if you think of okay world we all each of us have has our own model or maybe multiple

**[25:41]** models and those models are getting updated a lot. I think we start to care about architecture again and I'll and

**[25:47]** I'll tell you why and like what I think the options are.

**翻译：**
现在在这个我们试图把东西训练进模型的世界里——想象一下，我们每个人都有自己的模型，或者多个模型，而且这些模型会频繁更新。我觉得我们又开始关心架构了，我会告诉你为什么，以及我认为有哪些选择。

---

## 第 17 部分：学习需要付出代价

**[25:47]** So first let's talk about learning.

**[25:53]** Um so I think like the mental model here which I mentioned before is like we're

**[26:01]** trying to train the model to learn the data as best as it possibly can and it's going to be expensive. So like we didn't

**[26:09]** like rag but also rag didn't cost us very much money. I think to do better than rag, we're gonna have to like pay

**[26:15]** some GPU points and that's just like the state of the world.

**翻译：**
首先让我们谈谈学习。我之前提到的心智模型是这样的：我们试图让模型尽可能好地学习数据，这会很贵。我们不太满意 RAG，但 RAG 也没花我们多少钱。我认为要做得比 RAG 更好，我们就得花一些 GPU 点数，这就是现状。

---

## 第 18 部分：从最简单的方法开始

**[26:15]** Okay, fine. So, this

**[26:21]** is our model. It's like this homogeneous blob of data and this is our data. So,

**[26:26]** like maybe we have the masterard data set or maybe we collected data about ourselves or maybe I uh collected all my

**[26:33]** traces from coding in November and December and I want to like train the the model to learn my problems better.

**[26:39]** What do I do? How do I actually do this? Um let's let's like start with the dumbest

**[26:45]** possible approach and just like see what happens.

**翻译：**
好吧。这是我们的模型，就像一团同质的数据块，这是我们的数据。也许我们有 Mastercard 数据集，或者收集了关于自己的数据，或者我收集了 11 月和 12 月所有的编程记录，想让模型更好地学习我的问题。我该怎么做？实际上怎么操作？让我们从最笨的方法开始，看看会发生什么。

---

## 第 19 部分：用 3M 财报做实验

**[26:45]** So say uh we start with a data set and we just train on it.

**[26:54]** Um like using I guess next token prediction. So we actually ran this

**[27:00]** little experiment. This is like uh 3M. It's a company they make doct and um

**[27:08]** this is like some financial reports. So maybe like you're working there and you really don't want to read all of this.

**[27:14]** So you just want to ask the model to like really understand this and be able to answer questions and like rag isn't

**[27:20]** really working cuz it's like this weird structure and there's a lot of ways the documents interrelate.

**翻译：**
假设我们从一个数据集开始，直接在上面训练，用下一个 token 预测。我们实际上做了这个小实验。这是 3M 公司，他们生产各种产品，这是一些财务报告。假设你在那里工作，真的不想读完所有这些。你只想让模型真正理解这些内容并能回答问题，而 RAG 不太好用，因为文档结构很奇怪，而且文档之间有很多相互关联的地方。

---

## 第 20 部分：模型完美记忆了报告

**[27:20]** Okay, cool. So

**[27:25]** we're just going to like train the model using next token prediction. See what happens. You know what? Actually, even

**[27:32]** if you don't train the whole model, um you you still get zero loss. So the model can perfectly memorize this entire

**[27:40]** uh 3M 10K financial report. Um it's extremely impressive.

**翻译：**
好的，那我们就用下一个 token 预测来训练模型，看看会发生什么。你知道吗？实际上即使不训练整个模型，你也能得到零损失。模型可以完美记住整个 3M 的 10-K 财务报告。这非常令人印象深刻。

---

## 第 21 部分：让它写首诗试试

**[27:46]** Okay. So now let's talk to it. So so we did this and then we didn't want to ask anything that's like exactly present in

**[27:52]** the document because we want to see if the model's actually good. So we started you know like everyone loves to test poems. So we started with a poem. We

**[27:58]** said can you write a poem about 3M in fiscal year 2025?

**[28:04]** So, register your bets. And what do you think happened?

**翻译：**
好了，现在让我们跟它对话。我们做完训练后，不想问文档中直接存在的内容，因为我们想看模型是否真的学好了。你知道的，大家都喜欢用诗来测试。所以我们从一首诗开始。我们说"你能写一首关于 3M 公司 2025 财年的诗吗？"来，下注吧。你觉得会发生什么？

---

## 第 22 部分：结果很糟糕

**[28:04]** It's terrible.

**[28:09]** It's terrible. Someone said it. It says the passage of a passage is a poem. End

**[28:15]** of sentence. It's crazy. Yeah. So, now maybe we ask like why does

**[28:21]** this happen and how do we fix it?

**翻译：**
结果很糟糕。真的很糟糕。有人说出来了。它写的是"一段的段落就是一首诗。句号。"太疯狂了。好，现在我们来问问为什么会这样，以及怎么修复。

---

## 第 23 部分：最笨的方法这次失效了

**[28:21]** So, unfortunately, this doesn't work. And I actually think this is like one of the reasons why people haven't been doing

**[28:27]** this yet is because the dumbest possible approach usually does work in machine learning. But in this case, we have to

**[28:33]** do something a little bit more sophisticated.

**翻译：**
不幸的是，这行不通。我觉得这其实是人们还没这么做的原因之一——在机器学习中，最笨的方法通常是管用的。但在这种情况下，我们必须做得更精细一些。

---

## 第 24 部分：两个需要修复的问题

**[28:33]** Um, so maybe take a second and think about

**[28:38]** like what you would do. You're facing this problem at work or in a side project. Um, I think there's like two

**[28:44]** things we need to fix. One is that um the data is not it's not exactly what we

**[28:52]** want to train on, I think. And two is that we probably don't want to update

**[28:57]** the entire model because what we did there was basically overwrite all the you know stuff about Tajikistan and

**[29:03]** everything else that's in the model with just like this 3M knowledge and I think that's like too specific and then the

**[29:09]** model is just obsessed with 3M and it'll only produce exact copy sentences from

**[29:15]** the document. That's that's clearly too much.

**翻译：**
花点时间想想你会怎么做。假设你在工作中或业余项目中遇到这个问题。我觉得有两件事需要修复。第一，数据不完全是我们想要训练的内容。第二，我们可能不想更新整个模型，因为我们刚才做的事基本上是用 3M 的知识覆盖了模型里关于塔吉克斯坦和其他所有的东西。我觉得那太具体了，然后模型就变得只痴迷于 3M，只会产出文档里的原句复制。这显然过头了。

---

## 第 25 部分：需要更好的方法

**[29:15]** So I think we need a better way to update the model and we need a better

**[29:21]** way to change the data.

**翻译：**
所以我们需要更好的方式来更新模型，也需要更好的方式来处理数据。

---

## 第 26 部分：Karpathy 的相关工作

**[29:21]** Um, there's this pretty relevant work. I don't know if you follow this like LLM

**[29:27]** chat thing from Andre Karpathy. Shout out. I think it's very educational and

**[29:32]** he had a really good question which is like he built this small LLM and train it from scratch and everything and then

**[29:38]** he wanted to teach it about himself and okay maybe the first thing you would try

**[29:43]** is rag.

**翻译：**
有一个非常相关的工作。不知道你们有没有关注 Andrej Karpathy 的 LLM 聊天项目。致敬一下。我觉得那很有教育意义，他提出了一个很好的问题：他从头构建并训练了一个小型 LLM，然后想教它关于他自己的信息。你首先可能会尝试 RAG。

---

## 第 27 部分：RAG 的局限性

**[29:43]** You put like a little database of information about yourself but that's only scalable to a certain amount and

**[29:50]** then the model can't really like combine things. it can only kind of regurgitate facts. And so he wants to actually teach

**[29:57]** it properly, he says, meaning in weights. And so notice he doesn't just

**[30:02]** like take one example and and train the model using next token prediction. He does something a bit more complicated.

**翻译：**
你放一个关于自己的小型信息数据库，但这只能扩展到一定程度，然后模型就无法真正把东西结合起来了，它只能像鹦鹉学舌一样复述事实。所以他想真正地教会它，他说的是在权重中。注意他没有只拿一个例子用下一个 token 预测来训练模型。他做了一些更复杂的事情。

---

## 语言点讲解 📝

### 🗣️ 口语表达和填充词

| 表达 | 含义 | 例句 |
|------|------|------|
| **I guess** | 我觉得/我想（口语化的推测） | "So I guess the way I think..." |
| **like** (作为填充词) | 相当于"就是说"、"比如" | "it's like a model that can grab..." |
| **kind of / sort of** | 有点、某种程度上 | "it kind of just works" |
| **you know** | 你懂的（引起注意或确认理解） | "you're going to need to pay somewhere, you know" |
| **a bunch of** | 一堆、很多（非正式） | "makes a bunch of queries" |
| **pretty far** | 走得很远、很有效果 | "that'll get you pretty far" |

### 🔧 技术术语

| 术语 | 解释 |
|------|------|
| **agentic search** | 智能体搜索，能自主进行多步查询的搜索系统 |
| **RAG (Retrieval-Augmented Generation)** | 检索增强生成，通过检索外部知识来辅助模型回答 |
| **deep research** | 深度研究模式（如 OpenAI 的 Deep Research 功能） |
| **inference time** | 推理时间，模型生成回答时消耗的时间和算力 |
| **training time** | 训练时间，模型学习过程中消耗的时间和算力 |
| **in context** | 在上下文中，指通过 prompt 提供信息 |
| **in weights / learn in weights** | 在权重中学习，指通过训练让模型内化知识 |
| **SFT (Supervised Fine-Tuning)** | 有监督微调 |
| **RL (Reinforcement Learning)** | 强化学习 |
| **next token prediction** | 下一个 token 预测，语言模型的基本训练目标 |
| **10-K** | 美国上市公司年度财务报告（SEC 规定的格式） |
| **bits per parameter** | 每参数比特数，衡量模型信息存储效率的指标 |
| **neural file system** | 神经文件系统，演讲者提出的概念 |

### 💡 地道表达

| 表达 | 含义 | 备注 |
|------|------|------|
| **up front** | 预先、提前 | "spend a lot of money up front" = 预先花大钱 |
| **trade-off** | 权衡、取舍 | "different sides of the same trade-off" |
| **shout out** | 致敬、特别提一下 | 非正式的表扬或感谢 |
| **get at** | 想要表达/探究的 | "the question we want to get at" |
| **throw out** | 丢弃 | "they throw everything else out" |
| **obsessed with** | 痴迷于 | "the model is just obsessed with 3M" |
| **It's been a while** | 已经很久了 | "I have to think about knowledge graphs. It's been a while." |
| **register your bets** | 下注吧（口语化表达，让大家猜测结果） | |

### 🧠 容易误解的表达

| 表达 | 字面意思 | 实际意思 |
|------|---------|---------|
| **the dumbest possible approach** | 最蠢的方法 | 最简单直接的方法（这里不是贬义） |
| **pay some GPU points** | 付一些 GPU 积分 | 花费 GPU 算力（幽默说法） |
| **homogeneous blob** | 同质的一坨 | 指模型参数像一团均匀的东西 |
| **regurgitate facts** | 反刍事实 | 机械地复述信息，像鹦鹉学舌 |

### 📐 口语中的语法特点

**1. 重复和自我纠正**
> "isn't that isn't that in the isn't deep research in the direction of that"

说话者在思考时反复修正自己的表达，这在口语中很常见。

**2. 省略主语的祈使句式**
> "Register your bets"

类似于 "Place your bets"，是个口语化的邀请表达。

**3. 用 "like" 引入例子或类比**
> "It's like this homogeneous blob of data"

这里的 like 不是"喜欢"，而是"就像是"。

---

## 词汇表 📖

| 词汇 | 词性 | 含义 | 例句 |
|------|------|------|------|
| agentic | adj. | 具有智能体特性的 | agentic search |
| inference | n. | 推理 | inference time |
| up front | adv. | 预先 | spend money up front |
| trade-off | n. | 权衡 | different trade-offs |
| capacity | n. | 容量、能力 | fixed capacity |
| inject | v. | 注入 | inject things into a model |
| interrelate | v. | 相互关联 | the documents interrelate |
| regurgitate | v. | 反刍、机械复述 | regurgitate facts |
| sophisticated | adj. | 复杂精细的 | something more sophisticated |
| obsessed | adj. | 痴迷的 | obsessed with 3M |

---

## 核心观点总结 🎯

1. **Agentic Search vs RAG**：演讲者认为 agentic search 不应归类为 RAG，虽然两者都有局限性，但机制不同。

2. **更好必然更贵**：任何比 RAG 效果更好的方案都会更贵，要么花在训练时，要么花在推理时——这是不可避免的权衡。

3. **Deep Research 方向正确**：虽然推理时间长，但愿意等待和多次搜索是对的方向。

4. **模型容量有限**：语言模型有固定容量（约 3.6 bits/参数），存储无用知识（如塔吉克斯坦小省首府）会占用宝贵空间。

5. **直接微调的问题**：
   - 模型会完美记忆训练数据
   - 但会丧失泛化能力（无法写诗）
   - 会覆盖掉原有知识
   - 只能复述原文

6. **需要解决的两个问题**：
   - 数据本身需要转换（不能直接用原始文档）
   - 更新策略需要改进（不能更新整个模型）

7. **架构再次重要**：在个性化模型频繁更新的时代，我们需要重新关注模型架构设计。
