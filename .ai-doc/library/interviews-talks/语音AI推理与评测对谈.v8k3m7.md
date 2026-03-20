# 🎯 语音AI推理与评测对谈 英语段落翻译

本文共 **63 个语义单元**，将全部翻译。

> 📝 这是一期播客对谈，主要讨论语音 AI 的推理服务、模型评测、思考型模型的挑战以及 2026 年的技术趋势。嘉宾包括 **Zach**（语音模型公司）、**Quinn**（**Pipecat** 框架）和 **Brooke**（评测平台）。

---

(1) [15:09-15:22] **Okay, you can't just— if you want the speed, you also can't just train the model. You have to run the inference layer. We haven't figured out how to outsource inference to someone else whose primary job is not real time inference but also tech stuff and not seen massive sort of like very widespread on latency numbers.**

好的，如果你想要速度，你不能只是训练模型就完事了。你还得自己跑推理层。我们还没找到办法把推理外包给那些主业不是做实时推理的人——虽然他们也做技术相关的事，但我们没有看到延迟数据上有大幅改善。

解析：
* **inference layer** /ˈɪnfərəns/：推理层，模型训练完后实际执行预测的部分 🔥
* **outsource** /ˈaʊtsɔːrs/：动词，外包
* **latency** /ˈleɪtənsi/：名词，延迟（网络/系统响应时间）🔥
* **widespread**：形容词，广泛的、大范围的

---

(2) [15:22-15:41] **And I suspect if we were to sort of break down and graph out a lot of those requests on the text layer what we would see are very wide distributions like time to first token numbers for example just because you don't know where you sit in the queue and stuff like that. So I think for us it's a combination of the modeling work and then figuring out some of the serving techniques as well that hopefully allowed us to kind of close both the latency gaps but then also the intelligence gaps.**

我怀疑如果我们把文本层的很多请求拆解出来画成图表，会看到非常大的分布差异——比如首个 token 的响应时间，因为你不知道自己在队列里排在哪。所以我觉得对我们来说，这是模型研发和推理服务技术的结合，希望能同时缩小延迟差距和智能差距。

解析：
* **time to first token (TTFT)**：首个 token 响应时间，衡量模型生成第一个字的速度 🔥
* **distribution** /ˌdɪstrɪˈbjuːʃən/：名词，分布（统计学概念）
* **queue** /kjuː/：名词，队列
* **serving techniques**：推理服务技术，指模型部署后如何高效提供服务 🔥

---

(3) [15:46-16:06] **Well, I don't know if you've seen this as well, Brooke, but what we saw is that for a long time, OpenAI was incredibly impressive in their not having a spread between P50 and P90 on GPT-4o latency TTFT. And I was always in awe of the ability of OpenAI to run this like global supercomputer with very tight tolerances.**

**Brooke**，不知道你有没有注意到，我们看到的是，很长一段时间里 **OpenAI** 在 **GPT-4o** 的首 token 延迟上，**P50** 和 **P90** 之间几乎没有差距，这真的非常厉害。我一直很佩服 **OpenAI** 能运行这样一个全球超级计算机，还能保持这么紧的容差。

解析：
* **P50 / P90**：百分位延迟指标，P50 是一半请求的延迟上限，P90 是 90% 请求的延迟上限 🔥
* **spread**：名词，差距、范围
* **in awe of**：短语，对...感到敬畏
* **tight tolerances**：紧密的容差，指性能波动很小 🔥

---

(4) [16:06-16:24] **But I think as AI has just grown and there's been so much demand for inference, everybody's had to make different compromises because we really don't see that consistency anymore from any of the text models, including the Gemini models, which also can be very fast, but are no longer always very fast for us in production.**

但我觉得随着 AI 的爆发式增长和推理需求激增，大家都不得不做出各种妥协，因为我们确实已经看不到任何文本模型还能保持那种一致性了——包括 **Gemini** 模型，它们有时确实很快，但在生产环境中已经不能一直保持很快了。

解析：
* **compromise** /ˈkɒmprəmaɪz/：名词/动词，妥协
* **consistency** /kənˈsɪstənsi/：名词，一致性、稳定性
* **in production**：在生产环境中（相对于测试/开发环境）🔥

---

(5) [16:24-16:50] **Yeah. And I mean, I think I'm definitely betting that Google gets there though because Google is just the king of compute. I think that's been their bread and butter for the past 20 years. And so I think just the maturity of these models is so young. I think I was just talking to Scott about this— the reliability that they've been able to achieve with deep ground models is because of just how long they've been working on these models. A lot of that reliability just comes from years and years of fine-tuning and optimizing and getting them to this like hyper optimized state.**

是的，我肯定还是看好 **Google** 能做到的，因为 **Google** 就是算力之王嘛，这是他们过去 20 年的看家本领。我觉得这些模型的成熟度还太年轻了。我刚和 **Scott** 聊到这个——他们在深度学习基础模型上达到的可靠性，就是因为在这些模型上投入了太久。很多可靠性就来自日复一日的微调、优化，让它们达到一种超级优化的状态。

解析：
* **bread and butter** 🔥：短语，看家本领、主要收入来源（比喻核心业务）
* **maturity** /məˈtjʊərɪti/：名词，成熟度
* **hyper optimized**：超级优化的
* **fine-tuning**：微调（AI 术语，在预训练基础上进一步训练）

---

(6) [16:56-17:18] **And I think with AI, a lot of the models— things are just moving so fast that infra engineers haven't even had a chance to catch up. And demand is what it is. I mean you have to make choices about how you handle having too much demand. Google was really public with that when the Gemini 3 launch happened, they had to take TPUs away from Gemini 2.5 and give them to Gemini 3 for the launch.**

我觉得 AI 领域里很多模型的发展太快了，基础设施工程师都还来不及跟上。而需求就摆在那里，你必须做出选择来应对过多的需求。**Google** 在这方面很坦诚——**Gemini 3** 发布的时候，他们不得不从 **Gemini 2.5** 那里抽调 **TPU** 来给 **Gemini 3** 做发布。

解析：
* **infra engineers**：基础设施工程师（infra = infrastructure 的缩写）
* **catch up**：短语，赶上、追上
* **TPU**：张量处理单元（**Google** 自研的 AI 加速芯片）🔥
* **be public with**：对...公开坦诚

---

(7) [17:18-17:43] **And I was like, "No, no, don't do that. We're using Gemini 2.5 in production." But, you know, it's a good problem to have. Yeah. I'm curious, Zach, actually, like what was your guiding star as you're improving these speech models? I think obviously benchmarks have their faults if you optimize too much for benchmarks. How do you get that voice from users from like real world use cases and really know that you're optimizing for the voice AI use cases?**

我当时就说："不不不，别这样啊，我们在生产环境用着 **Gemini 2.5** 呢！"但说实话，这也算是个幸福的烦恼。**Zach**，我挺好奇的，你在改进这些语音模型时，指导方向是什么？如果对基准测试过度优化显然是有问题的。你怎么从真实用户的实际使用场景中获取反馈，来确保你是在为语音 AI 的场景做优化？

解析：
* **a good problem to have** 🔥：短语，幸福的烦恼（问题本身说明形势不错）
* **guiding star**：指导方向、北极星（比喻指引方向的原则）🔥
* **fault** /fɔːlt/：名词，缺陷、不足

---

(8) [17:49-18:09] **Yes, I mean it's a good question. On the one hand, I got to tell you as someone who loves eval— like I'm a king of vibes. Like to me vibe is the— I haven't figured out any benchmark that I trust fully more than like listening and having a conversation and like passing that "does this feel good" test. And you know we keep trying to play with different ways to measure it and evaluate,**

嗯，这是个好问题。一方面，我得跟你说，作为一个热爱评测的人——我是"氛围之王"。对我来说，氛围感就是一切——我还没找到任何一个基准测试比亲自去听、去对话、去通过那个"感觉对不对"的测试更让我信服的。我们一直在尝试各种不同的方式去衡量和评估，

解析：
* **king of vibes** 🔥：氛围之王（vibes = 氛围感，这里是自嘲式的表达）
* **eval** /ɪˈvæl/：名词，评测（evaluation 的缩写）🔥
* **play with**：短语，尝试、试验

---

(9) [18:09-18:33] **but like nothing is quite as brutal as putting in my AirPods and talking to the models for 20 minutes and coming back and being like "all right well that's garbage"— you know, this is like— "this felt wrong, this felt wrong, this felt wrong." And I think our guiding principle has always been like how do I get to the point where it feels incredibly natural and like we'll just know it when we hear it.**

但没有什么比戴上 **AirPods** 跟模型聊 20 分钟、然后回来说"好吧这简直是垃圾"来得更残酷了——"这里感觉不对，那里感觉不对，这个也不对。"所以我们的指导原则一直是：怎么才能做到让它感觉极其自然？我们听到的时候自然就会知道的。

解析：
* **brutal** /ˈbruːtl/：形容词，残酷的、直接的
* **garbage** /ˈɡɑːrbɪdʒ/：名词，垃圾（口语中表示质量极差）
* **guiding principle**：指导原则 🔥
* **we'll know it when we hear it**：听到了就知道了（表达一种直觉标准）

---

(10) [18:33-18:57] **But of course it's a multi-year sort of ladder climb to get there and hill climb. And so a lot of it comes down to— your customers are having these challenges with the models and even though I think we all have this mental state that we want to reach, there's a bunch of compromises we make in the interim. And the customers complain to us and we make these trade-offs that work for one customer but don't work for another customer and then we try to generalize that.**

当然了，要达到那个状态是一个多年的阶梯式攀登和爬坡过程。所以很多时候归结于——你们的客户在模型上遇到各种问题，虽然我们心里都有一个想要达到的理想状态，但中间过程中要做很多妥协。客户来抱怨，我们做出的权衡可能对一个客户有用但对另一个不管用，然后我们再试着泛化。

解析：
* **hill climb**：爬坡（机器学习术语，逐步优化的过程）🔥
* **in the interim** /ˈɪntərɪm/：短语，在此期间、在过渡期间
* **trade-off** 🔥：名词，权衡、取舍
* **generalize** /ˈdʒenərəlaɪz/：动词，泛化、推广

---

(11) [18:57-19:16] **So I wish I had a magical good answer there, but I feel like I don't actually. It's just a lot of gut trust and then also being yelled at by other people that things aren't good and you're like, "Yeah, you're right. That's not good. We should fix that."**

所以我希望我能给出一个很厉害的答案，但说实话我觉得并没有。很多时候就是靠直觉信任，加上被别人吼着说"这个不行"，然后你就说："嗯，你说得对，这确实不好，我们该修一修。"

解析：
* **gut trust**：直觉信任（gut = 肠道，引申为直觉）🔥
* **yell at**：短语，对...大声喊叫、训斥

---

(12) [19:16-19:40] **I don't actually disagree that talking to the models for hours is like the very best eval. But for the purpose of the podcast, I'm going to pretend to disagree and then we'll let Brooke break the tie. So, we help so many customers get from POC to production that I definitely view a pain point as— I got this prompt right and the 20 people at our company who tested it had a good experience, but then I put the model into production and people did weird things and it's not good enough.**

其实我并不反对跟模型聊几个小时是最好的评测方式。但为了这期播客的效果，我先假装不同意，然后让 **Brooke** 来做裁判。我们帮助了很多客户从 **POC** 走到生产环境，所以我特别能体会到一个痛点——"我把提示词调好了，公司里 20 个测试人员用着挺好"，但一旦放到生产环境，用户各种奇怪的操作就来了，效果就不够好了。

解析：
* **break the tie**：短语，打破平局
* **POC (proof of concept)** 🔥：概念验证，产品上线前的验证阶段
* **pain point** 🔥：痛点

---

(13) [19:40-20:01] **And from that perspective, when I wrote this benchmark or when I sort of turned our partly vibes, partly quantitative internal benchmarks into something that I felt like I could stand behind and put out there in public and say, "there's some useful information here"— what I was trying to do was pick a typical workflow with some hard components and make it quantitative,**

从这个角度出发，当我写这个基准测试——或者说当我把我们内部那套"一半靠氛围、一半靠量化"的测试变成一个我能公开站台的东西，对外说"这里面有些有用的信息"——我想做的就是挑一个包含一些难点的典型工作流，然后把它量化，

解析：
* **stand behind**：短语，为...站台、支持
* **quantitative** /ˈkwɒntɪtətɪv/：形容词，量化的、定量的 🔥
* **workflow**：工作流

---

(14) [20:01-20:25] **so that I could run a bunch of models and show where the models really do differ in performance. And one of the judgment calls there is— if you do some really good iterative prompting, any of the models will do better on this benchmark. But what we see in practice is that what I was trying to mimic was in practice when different people talk to the model different ways, how do they diverge?**

这样我就能跑一堆模型，展示它们在性能上到底有什么不同。其中一个判断是：如果你做了很好的迭代式提示词优化，任何模型在这个基准测试上都会表现更好。但在实践中我们看到的——我想模拟的就是当不同的人用不同的方式跟模型对话时，表现会怎么发散。

解析：
* **judgment call** 🔥：名词，主观判断（没有标准答案的决定）
* **iterative prompting**：迭代式提示词优化 🔥
* **mimic** /ˈmɪmɪk/：动词，模拟、模仿
* **diverge** /daɪˈvɜːrdʒ/：动词，发散、分化

---

(15) [20:25-20:49] **And so if you do some prompt iteration what you're doing is trying to draw a box around that divergence. But what I hope we're showing in the benchmark is what it looks like when you hit that thing that you didn't know to prompt engineer for. And that does feel like a useful quantitative exercise— even though you can't capture the whole space, if you can sort of draw a box around the space and be like, "this model's clearly in the box, this model's not in the box."**

所以当你做提示词迭代时，你实际上是在给那个发散范围"画个框"。但我希望我们的基准测试能展示的是——当你碰到那些你不知道该怎么做提示工程的场景时，模型表现是什么样的。这确实是一个有用的量化练习——虽然你无法覆盖整个空间，但如果你能给空间画个框，说"这个模型明显在框里，那个模型不在框里"。

解析：
* **draw a box around** 🔥：圈定范围（比喻给问题划定边界）
* **prompt engineer**：做提示工程（这里用作动词）
* **capture the whole space**：覆盖整个空间

---

(16) [20:49-21:08] **That's a useful point of comparison for what it feels like to deploy these things into production and have to try to get them to serve a pretty wide variety of real world user behavior. So that— and that's very much not vibes based— like it's a different angle than the vibes based thing.**

这就是一个有用的对比维度——能让你感受到把这些东西部署到生产环境、然后要让它们服务于各种各样真实世界用户行为是什么体验。这种方式跟"凭氛围感觉"完全不同，是另一个角度。

解析：
* **point of comparison**：对比维度、比较基准
* **deploy** /dɪˈplɔɪ/：动词，部署 🔥
* **vibes based**：基于氛围/直觉的

---

(17) [21:08-21:33] **Yeah, I think it's interesting because I actually think doing evaluations of foundational models is so different than doing evaluations of applications and very task oriented agents. You're going to have— I think you're just looking for a much broader array of different things that your model can do. And so what's in distribution versus what's not in distribution— like how does it feel across all these different use cases—**

是的，我觉得很有意思，因为对基础模型做评测和对应用程序以及面向特定任务的 **Agent** 做评测是非常不同的。你需要考察模型能做到的更广泛的能力范围。所以什么是分布内的、什么是分布外的——在所有这些不同的用例中感觉如何——

解析：
* **foundational models**：基础模型 🔥
* **task oriented agents**：面向任务的智能体
* **in distribution / out of distribution** 🔥：分布内/分布外（ML 术语，指数据是否属于模型训练时见过的范围）

---

(18) [21:33-21:52] **ultimately is just a very different problem than setting up evals. And we primarily focus on agent evals. So that was not a trick question of this is what you should or shouldn't be doing. I think we definitely don't work as much in that space of how do you do model evals versus task evals which is why I was genuinely curious.**

这跟设置评测根本就是不同的问题，我们主要聚焦在 **Agent** 评测上。所以刚才不是挖坑问你该不该这么做。我觉得我们确实不太涉及模型评测——相比任务评测来说——所以我是真心好奇才问的。

解析：
* **trick question**：陷阱题、故意刁难的问题
* **model evals vs task evals**：模型评测 vs 任务评测（前者评估模型基础能力，后者评估具体任务表现）🔥
* **genuinely** /ˈdʒenjuɪnli/：副词，真正地、真心地

---

(19) [21:52-22:16] **I think it's a much harder problem to know what are people even going to be using this for— what do people expect from a model. And I think that's where listening to customers— some of the best insights we get around what models are doing well is actually just from customers saying "we're hearing jitters" or "we're seeing a lot of markdown in these cases" or "we're seeing it vocalizing punctuation in weird ways."**

我觉得更难的问题是——人们到底要用这个做什么？他们对模型有什么期望？我觉得这就是需要倾听客户声音的地方。关于模型做得怎么样，一些最好的洞察其实就来自客户说"我们听到了卡顿""我们看到了大量 **markdown** 格式""我们看到它在以奇怪的方式把标点符号念出来"。

解析：
* **jitters** /ˈdʒɪtərz/：名词，卡顿、抖动（音频/视频中的不流畅现象）🔥
* **vocalize** /ˈvoʊkəlaɪz/：动词，发声、念出来
* **punctuation** /ˌpʌŋktʃuˈeɪʃən/：名词，标点符号

---

(20) [22:16-22:38] **Like that's ultimately just what you're going to hear from users. And it's hard to have said "I'm going to create evals for what happens when it accidentally starts speaking in Japanese"— like how did you even get there? And ultimately listening to users on that front. Yeah. I'll add that sometimes funny things we run into— we have this set of evals that we always check very closely— it's like almost on a model training run, it gets done, it goes and runs the evals.**

这些就是你最终会从用户那里听到的东西。而且很难事先说"我要给这种情况建个评测"——比如模型怎么突然就开始说日语了？你怎么预料到？所以归根结底还是要倾听用户。是的，有时候我们遇到一些很有意思的事——我们有一套评测是每次都仔细检查的，基本上模型训练完了就自动跑评测。

解析：
* **accidentally**：副词，意外地、不小心
* **on that front**：短语，在那个方面
* **training run**：一次训练运行（模型训练的一个完整周期）🔥

---

(21) [22:38-22:56] **These are things like the Big Bench audios, these are like COVOST 2 which is like BLEU. So we basically use translation as a proxy. So you know the model says something in one language and the job is to translate to another, and the premise is that if you don't understand what was being said then clearly you're going to be bad at translating.**

这些评测包括 **Big Bench** 音频测试、**COVOST 2** 这种用 **BLEU** 分数衡量的。我们基本上是把翻译当作一种代理指标——模型用一种语言说了些什么，任务是翻译成另一种语言。前提是如果你连说的什么都听不懂，那翻译肯定也好不了。

解析：
* **Big Bench**：大型基准测试集（用于评估语言模型）
* **COVOST 2**：跨语言语音翻译数据集 🔥
* **BLEU score** 🔥：BLEU 分数（机器翻译质量的评估指标）
* **proxy** /ˈprɒksi/：名词，代理、替代指标 🔥
* **premise** /ˈpremɪs/：名词，前提

---

(22) [22:56-23:15] **So I think a lot of these evals in model land are like proxies for the real thing, right? We're trying to proxy speech understanding. And then what's funny is sometimes they can be quite distant from the real world. I'll give you a simple example—**

所以我觉得模型领域里很多评测其实都是真实场景的代理指标对吧？我们在试图用代理方式衡量语音理解能力。然后有意思的是，有时候这些代理指标跟真实世界的距离还挺远的。我举个简单例子——

解析：
* **model land**：模型领域（口语化表达）
* **distant from the real world**：跟真实世界有距离

---

(23) [23:15-23:39] **None of these evals— like a really common use case for voice agents— and I'm guessing you guys agree with this— are things like collection of some kind of data, let's say like an ID number or a phone number. And what's interesting is these are almost never in the core model speech understanding eval sets for the most part, but they're very common in voice agents and it's like a pretty hard problem actually because you have lots of variation so they're kind of out of distribution.**

这些评测里几乎不包含——但语音 **Agent** 最常见的一个用例就是收集某种数据，比如身份证号或电话号码。有意思的是，这些场景几乎从来不在核心模型的语音理解评测集里，但在语音 **Agent** 中非常常见。而且这其实是个挺难的问题，因为变化太多了，基本属于分布外的数据。

解析：
* **eval sets**：评测数据集
* **variation** /ˌveriˈeɪʃən/：名词，变化、差异
* **out of distribution** 🔥：分布外（模型没见过的数据类型）

---

(24) [23:39-24:02] **So we'll give ourselves a high five on some of these model performance evals— "look at us improving our BLEU score!"— and then I'll throw it to a customer and they'd be like "garbage garbage garbage" and you're like "oh yeah okay there's a gap in our methodology here." And so we've had to constantly figure out how to bring those customer insights into the model evals that the modeling team can also use.**

所以我们会因为模型性能评测的提升而击掌庆祝——"看看我们，**BLEU** 分数又提高了！"然后一丢给客户，他们就说"垃圾垃圾垃圾"。然后你就意识到："好吧，我们的方法论确实有缺口。"所以我们不得不一直在想办法把客户的这些洞察也融入到建模团队能用的模型评测中。

解析：
* **give oneself a high five**：击掌庆祝（自我表扬）
* **methodology** /ˌmeθəˈdɒlədʒi/：名词，方法论
* **throw it to a customer**：拿给客户用（口语）

---

(25) [24:02-24:26] **But we weren't good at this at the beginning— we would be like "look at us hill climbing this benchmark that someone has set out" but sort of missing the fact that there's a whole applied part over here that we're actually not very good at. And we made a lot of mistakes throughout 2025 in training without keeping that in mind.**

但我们一开始并不擅长这个——我们会沉浸在"看我们在别人设定的基准测试上不断攀升"的喜悦中，却忽视了旁边还有一整块实际应用部分我们做得并不好。我觉得在整个 2025 年的训练过程中，我们因为没有把这些记在心上而犯了很多错误。

解析：
* **hill climbing** 🔥：爬坡（逐步优化，也是一种搜索算法）
* **applied part**：实际应用部分
* **keep in mind**：短语，记在心上、牢记

---

(26) [24:26-24:52] **A lot of the gaps there— I definitely had a motivation for this particular benchmark around long multi-turn conversation, because voice conversations are fundamentally long multi-turn conversation use cases and it's just really clear that that kind of data is totally underrepresented in all the training data sets that people training these foundation models have.**

那些差距——我做这个基准测试的一个重要动机就是围绕长程多轮对话。因为语音对话从根本上就是长程多轮对话的使用场景，很明显这类数据在所有训练基础模型的训练数据集中都是严重不足的。

解析：
* **multi-turn conversation** 🔥：多轮对话
* **underrepresented** /ˌʌndərˌreprɪˈzentɪd/：形容词，代表性不足的、数量不够的
* **fundamentally** /ˌfʌndəˈmentəli/：副词，从根本上

---

(27) [24:52-25:10] **And I would over and over talk to people at a foundation lab and they'd say "do you want to try this new model checkpoint? We fixed function calling." And I would be like "okay great." And they would have function calling on the first three turns of the conversation noticeably better, but function calling 20 turns into the conversation would be no better at all.**

我一次又一次地跟基础模型实验室的人交流，他们会说"要不要试试这个新的模型检查点，我们修复了函数调用"，我就说"好的太棒了"。然后发现对话前三轮的函数调用确实明显变好了，但到了对话第 20 轮，函数调用完全没有改善。

解析：
* **model checkpoint** 🔥：模型检查点（训练过程中保存的模型状态）
* **function calling** 🔥：函数调用（AI 模型调用外部工具/API 的能力）
* **noticeably**：副词，明显地

---

(28) [25:10-25:33] **And I was like, okay, I'm going to try to put this thing out there to really demonstrate where we fall short in a real world voice AI conversation around turn 15 or turn 20. Yeah, we had to build an entire eval that we called voice agent bench which was basically— we found that you have to simulate real world conversations.**

所以我就想，好，我要把这个东西发出去，真正展示我们在真实世界语音 AI 对话中——特别是在第 15 轮或第 20 轮——的不足。对，我们不得不构建了一整套评测叫 **voice agent bench**——基本上就是发现你必须模拟真实世界的对话。

解析：
* **fall short** 🔥：短语，达不到、有不足
* **voice agent bench**：语音 Agent 基准测试
* **simulate** /ˈsɪmjuleɪt/：动词，模拟

---

(29) [25:33-25:57] **And they have to be rapid exchange back and forth and then you can sort of watch the tool calls get worse. And we had to spend a couple of months actually building that to try and identify and make progress. And I'm sure Brooke, this is where you spend lots of time— does this resonate? I think we lost your audio Brooke. Sorry— yeah, that's exactly what we're building to help people be able to do this in-house.**

而且必须是快速的来回对话交互，然后你就能看到函数调用越来越差。我们花了好几个月来构建这个评测，尝试发现问题并推动改进。**Brooke**，你应该也在这方面花了很多时间——能引起共鸣吗？——好像你声音断了。没关系——对，这正是我们在帮大家能在内部做到的事情。

解析：
* **rapid exchange**：快速交互
* **resonate** /ˈrezəneɪt/ 🔥：动词，引起共鸣
* **in-house**：副词/形容词，内部的、自行完成的 🔥

---

(30) [25:57-26:20] **I think most people don't have the luxury of being able to spend many months on this. And so what we allow you to do is run those simulations and see really how does Gemini compare with OpenAI for my particular use case. Because I think benchmarks can be incredible for helping you rough cut— like what model should I even be looking at. I think of it as like coarse versus fine-tuning.**

我觉得大多数人没那个奢侈条件花好几个月来做这个。所以我们让你能运行这些模拟，看看在你具体的使用场景下 **Gemini** 和 **OpenAI** 比起来怎么样。基准测试在帮你做粗筛方面真的很给力——"我到底该看哪些模型？"我把它看作粗调和微调的关系。

解析：
* **luxury** /ˈlʌkʃəri/：名词，奢侈、奢侈品
* **rough cut** 🔥：粗筛、初步筛选
* **coarse vs fine-tuning**：粗调 vs 微调（这里用调参概念做比喻）

---

(31) [26:20-26:45] **So being able to pick the top three or four models I might try out and then actually run these on your data— see how well the instruction following comes for an interview candidate 30 turns in might be very different than collecting medical information. And specifically on how you set up your prompt or your state machines or your workflows— there's all sorts of pieces that go into your very specific voice AI setup.**

也就是先挑出三四个可能要试的最佳模型，然后在自己的数据上实际跑一跑——比如对面试候选人进行 30 轮对话的指令遵循效果，可能和收集医疗信息完全不一样。而且取决于你的提示词怎么设置、状态机怎么设计、工作流怎么搭建——有很多因素都会影响你特定的语音 AI 方案。

解析：
* **instruction following** 🔥：指令遵循（模型按指令执行的能力）
* **state machines**：状态机（程序设计中控制流程状态转换的模型）🔥

---

(32) [26:45-27:08] **And that's something really important in benchmarks as well— capturing the nuance of there isn't one obviously best model, because otherwise that company would just have 100% market share of everyone's API calls. The question is why are some models better suited for different use cases than others, and usually if a model is obviously doing way better than everyone else in a certain area, a lot of the other ones catch up very quickly.**

我觉得在基准测试中非常重要的一点是捕捉这种细微差别——不存在一个明显最好的模型，否则那家公司早就占了所有 **API** 调用 100% 的市场份额了。问题在于为什么有些模型更适合某些使用场景？如果一个模型在某个领域明显遥遥领先，通常其他模型会很快追赶上来。

解析：
* **nuance** /ˈnjuːɑːns/ 🔥：名词，细微差别、微妙之处
* **market share**：市场份额
* **catch up** 🔥：追赶上来

---

(33) [27:08-27:37] **So how can you be constantly tracking the developments? And I think that's where benchmarks are just so incredibly valuable because most people don't have the luxury of being able to swap out different models all day every day. I think really just getting to the point where it clearly is a huge leap in instruction following or it clearly is a huge leap in latency— and that makes someone decide to switch out their models.**

所以怎么持续追踪最新发展？我觉得这就是基准测试特别有价值的地方，因为大多数人没条件每天不断切换试用不同模型。通常是看到某个模型在指令遵循或延迟上有了明显的飞跃，才会让人下决心换模型。

解析：
* **swap out**：短语，替换
* **leap** /liːp/：名词，飞跃
* **switch out**：短语，换掉、替换

---

(34) [27:37-28:00] **I got a question for you guys on different tech. I'm sort of curious to get your take— maybe inspired by Brooke's state of voice AI. Something I've been thinking a lot about is this reality that state-of-the-art models are moving forward, but they're largely thinking models. They're big and they're slow.**

如果可以的话，我有一个关于不同技术方向的问题。受到 **Brooke** 之前关于语音 AI 现状的启发——我一直在想一个现实问题：最先进的模型在不断进步，但它们大多是思考型模型，又大又慢。

解析：
* **state-of-the-art** 🔥：最先进的、最前沿的
* **thinking models**：思考型模型（指使用链式思考/推理的模型）🔥

---

(35) [28:00-28:30] **And so I'm curious how you guys are thinking about this or seeing customers think about this— at some point we can't continue to rely on models from 2024. And thinking— RL is clearly highly effective. So I'm curious maybe Quinn, at Pipecat— how are you thinking about thinking models in the world of voice AI and these things that take longer? Are you guys starting to wrestle with that?**

我想知道你们怎么看这个问题——在某个时点上我们总不能一直依赖 2024 年的老模型。思考能力、强化学习显然是非常有效的。**Quinn**，你们在 **Pipecat** 是怎么思考"思考型模型在语音 AI 中的角色"这个问题的？这些需要更长时间的模型——你们开始面对这个挑战了吗？

解析：
* **RL (Reinforcement Learning)** 🔥：强化学习
* **wrestle with** /ˈresəl/：短语，努力应对、纠结于
* **rely on**：短语，依赖

---

(36) [28:30-28:55] **Yeah, there's two things that feel interesting in terms of how 2026 is likely to evolve. One is we're increasingly living in a world for all agent use cases where multiple models and multiple inference loops are really valuable, and we're starting to figure out how to build those AI engineering, software engineering shapes. So a lot of the stuff we're helping customers deploy now feel like a thinking fast and slow split,**

是的，关于 2026 年可能怎么发展，有两个有意思的方向。第一个是我们越来越生活在一个多模型、多推理循环真正有价值的世界里——对所有 **Agent** 使用场景都是如此——而我们正在摸索怎么构建这些 AI 工程和软件工程的架构。我们帮客户部署的很多东西都像是一种"快思考与慢思考"的拆分，

解析：
* **inference loops**：推理循环 🔥
* **thinking fast and slow** 🔥：快思考与慢思考（引用 Daniel Kahneman 的理论，System 1 vs System 2）

---

(37) [28:55-29:14] **where we have a fast voice loop and then various kinds of async or long running or parallel inference processes— things like guard rails, things like pulling tool calling out of the fast loop because even if your tool calling is very accurate— which you have cracked— you still have a latency penalty at least with a traditional architecture on the tool call.**

有一个快速的语音循环，然后有各种异步的、长时间运行的或并行的推理过程——比如护栏机制，比如把函数调用从快速循环中剥离出来。因为即使你的函数调用非常准确——这个你们已经攻克了——在传统架构下，函数调用仍然会带来延迟代价。

解析：
* **guard rails** 🔥：护栏（AI 安全机制，防止模型产生不当输出）
* **async**：异步的（asynchronous 的缩写）
* **crack**：动词，攻克、解决（口语）

---

(38) [29:14-29:39] **So we can pull that out— that's useful. Some tool calls are just never going to return fast because they depend on back-end systems. Sometimes you really want long-running stuff to happen and inject back into the voice context. Those are really fun and interesting software engineering problems and they feel very high leverage. So I think the multi-model thinking fast and slow, long-running processes, shared context stuff is going to be a big part of what we all think about in 2026.**

把这部分剥离出来是有用的。有些函数调用就是不可能快速返回，因为它们依赖后端系统。有时候你确实希望长时间运行的任务执行完然后注入回语音上下文中。这些都是非常有趣的软件工程问题，而且很有杠杆效应。所以多模型的快慢思考、长时间运行的进程、共享上下文，会成为 2026 年我们都在思考的重要课题。

解析：
* **inject back into**：注入回...中 🔥
* **high leverage** /ˈliːvərɪdʒ/ 🔥：高杠杆的（投入小、影响大）
* **shared context**：共享上下文

---

(39) [29:39-30:03] **The other thing I think is probably going to happen is the pendulum is going to swing a little bit back from the thinking models. It was really exciting to make that breakthrough, and DeepSeek really pushed the American Foundation Labs to invest in that direction because that was a proof point that if they didn't, they were leaving a whole bunch of capability on the table.**

另一个我觉得可能会发生的事是，钟摆会从思考型模型那边稍微摆回来一些。能取得那个突破确实非常令人兴奋，**DeepSeek** 确实推动了美国基础模型实验室往那个方向投资——因为那是一个证据，证明如果不做就会白白浪费一大堆能力。

解析：
* **pendulum swing** 🔥：钟摆效应（事物在两个极端之间摇摆）
* **proof point**：证据点、论据
* **leave on the table** 🔥：短语，白白浪费、未能利用

---

(40) [30:03-30:28] **That was a year ago. And I think a bunch of things including that there are other interesting areas to explore and use cases like voice that really don't work well in a thinking model context are growing a lot. So there's customer pull and commercial pressure and engineering and research interest in that pendulum swinging back. And we'll see mixture of experts models in the open weights world and distillations in the big lab world**

那是一年前的事了。包括还有其他有意思的领域可以探索，而且像语音这样在思考型模型上效果不好的使用场景正在快速增长——所以有客户需求拉动、商业压力、工程和研究兴趣在推动钟摆回摆。我们会看到开源权重领域出现更多混合专家模型，大实验室那边会有更多蒸馏模型，

解析：
* **mixture of experts (MoE)** 🔥：混合专家模型（一种高效的模型架构）
* **distillation** 🔥：蒸馏（把大模型的知识压缩到小模型中）
* **open weights**：开源权重
* **customer pull**：客户需求拉动

---

(41) [30:28-30:46] **that are much more aimed at time to first token— getting more attention this year than they did last year. What do you think, Brooke? Yeah, we're definitely seeing the same— people are doing a lot more background agents or multi-agents working in parallel,**

这些模型会更注重首 **token** 响应时间，今年会比去年得到更多关注。**Brooke** 你怎么看？对，我们确实看到了同样的趋势——人们在做更多的后台 **Agent** 或者多 **Agent** 并行运行，

解析：
* **aimed at**：针对、面向
* **background agents**：后台智能体 🔥
* **working in parallel**：并行运行

---

(42) [30:46-31:13] **and having those background agents do self-correcting or self-healing systems— having it in loops or being able to send off an agent to execute on something and come back— especially for these more intensive tool calls. We're constantly pushing the bounds of what voice agents can do in real time and a lot of these systems— especially legacy agent systems, aka agent systems that were set up for not real-time use cases. How do you adapt those to voice agents?**

用那些后台 **Agent** 来做自纠正或自修复系统——让它们在循环中运行，或者派一个 **Agent** 去执行某些任务然后回来——特别是对于更耗时的函数调用。我们一直在推动语音 **Agent** 实时能力的边界，而很多系统——特别是遗留的 **Agent** 系统，就是当初为非实时场景搭建的——怎么把它们改造成适合语音 **Agent** 的呢？

解析：
* **self-correcting / self-healing** 🔥：自纠正/自修复
* **legacy systems** /ˈleɡəsi/ 🔥：遗留系统、旧系统
* **push the bounds**：推动边界

---

(43) [31:13-31:36] **I think a lot of times having background as well as more responsive agents can be a great solution. But there are some pitfalls where we're seeing people try to use the same agents for chat as they're using for voice. And this is where people are running into a lot of issues. I think it's going to be hard to solve because ultimately you're just trying to use the same reasoning for two very different systems.**

我觉得很多时候，同时拥有后台 **Agent** 和更快响应的 **Agent** 是一个不错的解决方案。但也有些坑——我们看到有人试图把用于聊天的同一个 **Agent** 直接用于语音。这就出了很多问题，而且很难解决，因为你是在对两个截然不同的系统使用相同的推理逻辑。

解析：
* **pitfall** /ˈpɪtfɔːl/ 🔥：名词，陷阱、隐患
* **run into issues**：短语，遇到问题
* **responsive**：形容词，响应快的

---

(44) [31:36-31:59] **What you want to see in chat is going to look very different than what you want to see in a voice system. So that's one big area— looking at benchmarks you might say "great it follows instructions" but now I'm adding so many layers of abstraction because I'm trying to retrofit these systems to be reused across lots of different cases. Have you been seeing that in your customers, Zach— how much their backend systems are impacting your performance?**

你在聊天中想看到的跟语音系统中想看到的会非常不一样。所以这是一个很大的领域——看基准测试你可能说"很好，它能遵循指令"，但然后你加了那么多抽象层来改造这些系统以便在很多场景下复用。**Zach**，你在客户那边有看到这个情况吗？他们的后端系统在多大程度上影响了你们的表现？

解析：
* **layers of abstraction**：抽象层 🔥
* **retrofit** /ˈretrəʊfɪt/ 🔥：动词，改造、改装（使旧系统适应新需求）

---

(45) [31:59-32:22] **Yeah, we definitely have a lot of interesting use cases where the thinking fast and slow bits— and we're always biased to think about this not just as an orchestration problem but as a modeling problem. We now know that we can interleave thinking tokens during training for example, and GLM 4.7 is quite interesting in that regard— can we get more dynamic thinking out of the models,**

是的，我们确实看到了很多有意思的使用场景中的快慢思考。我们总是倾向于不只把它当作编排问题，而是当作建模问题来思考。比如现在我们知道可以在训练中交错插入思考 **token**——**GLM 4.7** 在这方面就很有意思——我们能不能从模型中获得更动态的思考能力，

解析：
* **orchestration** /ˌɔːrkɪˈstreɪʃən/ 🔥：编排（多个组件的协调调度）
* **interleave** /ˌɪntərˈliːv/ 🔥：动词，交错、交替
* **thinking tokens**：思考 token（模型推理时生成的内部推理步骤）

---

(46) [32:22-32:50] **where in the right moment we can help them figure out how to think and guide them more. And so it's always this interesting game of what's the right long-term modeling answer and what's the short-term thing we can do now knowing how to manipulate the state of the conversation. Which is always— to Quinn's point— a fun set of engineering challenges.**

在合适的时机帮助它们想清楚怎么思考，引导它们更好地思考。所以一直都是这种有意思的博弈——长期正确的建模方案是什么？短期我们能做什么？怎么操控对话状态来实现？用 **Quinn** 的话说，这确实是一组很有趣的工程挑战。

解析：
* **manipulate** /məˈnɪpjuleɪt/：动词，操控、操作
* **state of the conversation**：对话状态

---

(47) [32:50-33:18] **But this is one thing I haven't been able to capture well in eval— I'm curious if you guys have. Because it goes back to the feel of the conversation. One of the interesting challenges of these asynchronous operations behind the scenes trying to drive back in— maybe if you examine the end-to-end experience it might look fairly accurate, but the question is how is the user experiencing these dual brains interacting?**

但有一件事我觉得在评测中一直没能很好地捕捉到——不知道你们有没有。因为这又回到了对话的"感觉"——这些幕后的异步操作想要驱动回对话中，如果你检查端到端的体验可能看起来相当准确，但问题是用户到底在怎么体验这种"双脑"交互的？

解析：
* **end-to-end experience**：端到端体验 🔥
* **dual brains**：双脑（比喻快模型和慢模型的协同）
* **behind the scenes**：幕后

---

(48) [33:18-33:50] **And you mentioned guardrails, Quinn— this one has always befuddled me because by the time the guardrail has kicked in, you're sort of past the moment. And the thinking moments— the models are too slow to keep up. So by the time they have an answer, maybe you've moved on. And I find the evals can mislead me— you get this boost from thinking performance that helps tool calling, but then when I go have the conversation it feels awkward.**

你提到的护栏机制，**Quinn**——这个一直让我困惑，因为等护栏生效时你已经过了那个时刻了。思考的瞬间——模型也太慢跟不上节奏，等它有了答案你可能已经移到下一个话题了。所以我发现看评测数据有时会误导我——思考能力确实在函数调用方面带来了提升，但当我真正去对话的时候，感觉就很尴尬。

解析：
* **befuddled** /bɪˈfʌdəld/：形容词，困惑的
* **kick in** 🔥：短语，开始生效
* **keep up**：短语，跟上
* **mislead** /mɪsˈliːd/：动词，误导

---

(49) [33:50-34:08] **That's one of those things— I'm curious if you guys wrestled with that or found ways to help. Do you change the evals at all? Yeah, we've been working a lot on prosody evals in general. So like pauses and what are natural pauses, what is natural intonation, voice quality, etc. A lot of those things fall into that set.**

这是我很好奇的——你们有没有很纠结这个问题或找到解决办法？你们会调整评测吗？是的，我们一直在做很多关于韵律评测的工作——比如停顿、什么是自然的停顿、什么是自然的语调、语音质量等等。这些都归到那一类评测里。

解析：
* **prosody** /ˈprɒsədi/ 🔥：名词，韵律（语音的节奏、重音、语调模式）
* **intonation** /ˌɪntəˈneɪʃən/：名词，语调
* **wrestle with**：短语，纠结于、努力应对

---

(50) [34:08-34:38] **I think what's important with naturalness is finding all the cases that felt weird and putting words to what was weird about that. Because often it's like "the tool call came back 10 seconds after the fact"— that's an insane amount of time. But this happens honestly. I think we've probably all been there where someone's like "why is my voice agent slow?"**

我觉得在自然度方面真正重要的是找到所有感觉奇怪的案例，然后用语言描述出来到底哪里奇怪。因为经常就是——"函数调用 10 秒后才返回"——那是很长的时间了，但说实话这确实会发生。我想我们大概都遇到过有人问"为什么我的语音 **Agent** 这么慢？"

解析：
* **put words to** 🔥：短语，用语言描述（难以表达的感受）
* **after the fact**：短语，事后
* **insane**：形容词，疯狂的（口语中表示程度极大）

---

(51) [34:38-35:04] **And you're like "Well, it's hard when your tool call takes that much latency." I've literally had conversations where I'm like, "What's your tool call latency? Let's look at the traces." And it's like, "Oh, that might be the problem." But then quantifying— things are out of order, the conversation ordering is inaccurate, or it's repeating itself or getting stuck in loops.**

然后你就说："嗯，函数调用延迟那么高就很难办了。"我确实有过那种对话——"你的函数调用延迟是多少？我们看看追踪记录。"然后发现"哦，这可能就是问题所在。"接下来就是量化这些问题——对话顺序乱了、排列不准确、模型开始自我重复、或者陷入了循环。

解析：
* **traces** 🔥：追踪记录（分布式系统中用于追踪请求链路的日志）
* **stuck in loops**：陷入循环
* **out of order**：顺序混乱

---

(52) [35:04-35:27] **Capturing what makes it really unnatural— the pauses or the intonation. But yeah, it's definitely hard when it's in the uncanny valley of just one beat off. That's the hardest to get. It's a lot easier when it's obviously an awkward pause or things are out of order— those we're able to catch. This is where I really like error analysis— being able to go through and label.**

如何捕捉那些让它变得不自然的因素——停顿、语调。是的，当它处在"恐怖谷"区域、就差那么一个节拍的时候确实是最难搞的。如果明显有尴尬停顿或顺序乱了反倒比较容易捕捉。这就是我特别喜欢错误分析的地方——能够逐个检查和标注。

解析：
* **uncanny valley** 🔥：恐怖谷（事物"几乎像人但又不够像"时引起的不适感）
* **one beat off**：差一个节拍（音乐术语，比喻时机微妙不对）
* **error analysis** 🔥：错误分析

---

(53) [35:27-35:57] **Haml Hussein talks a lot about this in his course— actually going through and labeling all of your calls that feel awkward or unnatural, then looking for trends in those cases. That can help you really narrow down. Again, this is more for task specific evals. I know we're almost at time. Zach, what do you think is still missing from benchmarks? What is not captured?**

**Haml Hussein** 在他的课程中经常谈到这个——逐个把所有感觉尴尬或不自然的通话标注出来，然后寻找这些案例中的趋势，这能帮你真正缩小问题范围。当然这更偏向特定任务的评测。时间快到了——**Zach**，你觉得基准测试里还缺什么？有什么没被捕捉到的？

解析：
* **narrow down** 🔥：短语，缩小范围
* **trends**：名词，趋势、规律
* **task specific evals**：面向特定任务的评测

---

(54) [35:57-36:26] **I think the benchmarks today actually feel fairly decent for where the models are at presently. There are so many obvious things that voice AI is really bad at. When you said about "it's off by just a beat"— one of my inner tests for when we've achieved human level voice AI is when they back-channel perfectly.**

我觉得目前的基准测试对于模型当前的水平来说其实还算不错。只是语音 AI 还有太多明显做得不好的地方。你刚才说的"就差一个节拍"——我的一个内心测试标准是：当语音 AI 的反馈性应答能做到完美的时候，我就知道我们达到了接近人类水平的语音 AI。

解析：
* **decent** /ˈdiːsənt/：形容词，不错的、还行的
* **back-channel** 🔥：反馈性应答（对话中的"嗯""是的""对"等回应，表示在听）

---

(55) [36:26-36:50] **Because back-channels are a great example— they're either exactly correct and on the mark or they're awkward. Every attempt to back-channel as a system level thing to me has failed catastrophically— they're just awkward. These small things are like a proxy to me. And I don't think we have any evals for this— any evals that are good at capturing the nuances of the conversation.**

因为反馈性应答就是一个绝佳例子——它们要么恰到好处，要么就很尴尬。任何在系统层面尝试做反馈性应答的努力在我看来都惨败了——就是很尴尬。这类小细节对我来说就是一种代理指标。我不觉得我们有任何评测能做到这点——也没有评测能很好地捕捉对话中的细微差别。

解析：
* **on the mark** 🔥：短语，恰到好处、精准
* **catastrophically** /ˌkætəˈstrɒfɪkli/：副词，灾难性地
* **nuances** /ˈnjuːɑːnsɪz/：名词，细微差别

---

(56) [36:50-37:22] **Does the "mhm" make sense in the right contextual moment? Another great example is we mistake prosody for a reasonable response to what the user said. When you're dialoguing with another human, the way I'm talking changes the way you respond. If I say something in a particular tone, the interpretation of that tone will change the way you generate text on the other side or change your prosody dynamically—**

那个"嗯哼"在正确的语境时刻有没有道理？另一个例子是我们把韵律跟对用户说话内容的合理回应搞混了。当你跟另一个人对话时，我说话的方式会改变你的回应方式。如果我用特定的语气说了一句话，对那个语气的理解会改变你生成文字的方式，或者动态改变你的韵律——

解析：
* **contextual moment**：语境时刻
* **dialogue** /ˈdaɪəlɒɡ/：动词（此处用作动词），对话
* **dynamically**：副词，动态地

---

(57) [37:22-37:47] **My anger induces your anger or maybe slows it down. We have no mechanisms to measure any of this— all our mechanisms are like general prosody in a vacuum or naturalness in a vacuum. But the truth is— why do these things start to feel awkward and flat and robotic over time? It's because we don't have great ways of understanding and measuring this.**

比如我的愤怒会激发你的愤怒，或者让你放慢节奏。我们完全没有机制来衡量这些——我们所有的衡量机制都是在真空中评估一般性韵律或自然度。但事实是——为什么这些东西时间一长就开始感觉尴尬、平淡、像机器人？就是因为我们没有好的方法来理解和衡量这些。

解析：
* **induce** /ɪnˈdjuːs/ 🔥：动词，引发、诱导
* **in a vacuum** 🔥：短语，在真空中（脱离实际语境）
* **flat**：形容词，平淡的、没有感情的
* **robotic**：形容词，像机器人的

---

(58) [37:47-38:11] **So there's this very long tail of interesting problems— because we don't know how to model it, we haven't really bothered with the eval side, which kind of makes sense. But now I think we're starting to solve some of the speech understanding problems. I think 2026 is the year of starting to tackle some of these things.**

所以这是一条非常长的有趣问题长尾——因为不知道怎么建模，我们也就没太在评测方面下功夫，这也说得通。但现在我们开始解决一些语音理解的问题了。2026 年会是开始攻克这些问题的一年。

解析：
* **long tail** 🔥：长尾（大量小众但累积影响巨大的问题/需求）
* **bother with**：短语，费心去做
* **tackle** /ˈtækəl/ 🔥：动词，处理、攻克

---

(59) [38:11-38:40] **And so we're going to need brand new evals that right now do not capture at all. Some of the things— if you gave it to a human, why does it feel wrong? And putting words to things is sometimes really difficult to describe— "why is that awkward?" is sometimes a really hard thing to do. Yeah, totally. And that's exactly where— especially on the frontier of these models. Figuring out what are we even trying to do? What's even possible?**

所以我们需要全新的评测标准——现有的完全无法捕捉。有些东西拿给人类听，为什么感觉不对？用语言描述这些感受有时候真的很难——"为什么这很尴尬"是个特别难回答的问题。完全同意。尤其当你站在这些模型的前沿时——搞清楚我们到底想做什么？什么是可能的？

解析：
* **brand new**：全新的
* **frontier** /frʌnˈtɪr/ 🔥：名词，前沿、前线

---

(60) [38:40-39:06] **What does it feel like to be speaking to these models? The human existence can't be captured in test-driven development. And I don't think that's even the purpose of evals. The purpose of evals is how can you quantify something that was working or should be working and use that as a communication way of being very discrete, especially at scale. But "can this thing do it one time" is a very different problem than "can it do it 10 million times."**

跟这些模型说话是什么感觉？人类的生命体验不可能用测试驱动开发来捕捉。我觉得这甚至不是评测的目的。评测的目的是——怎么把一个正在运行的或应该运行的功能量化，用它作为一种精确沟通方式，特别是在大规模场景下。但"搞清楚这东西能不能做到一次"和"它能不能做到一千万次"是完全不同的问题。

解析：
* **test-driven development (TDD)** 🔥：测试驱动开发（先写测试再写代码的开发方法）
* **at scale** 🔥：在大规模场景下
* **discrete** /dɪˈskriːt/：形容词，精确的、离散的

---

(61) [39:06-39:29] **Especially when you're operating at the frontier of what these models can do— first figuring that out and then distilling it and saying, "How do we preserve that capability while also continuing to push that frontier?" What do you think, Quinn? Any parting thoughts?**

特别是你们这样站在最前沿运营的团队——先搞清楚模型能力的前沿在哪里，然后提炼出来说："我们怎么保住这个能力的同时继续推进前沿？"**Quinn**，你有什么最后的想法吗？

解析：
* **distill** /dɪˈstɪl/：动词，提炼、萃取
* **preserve** /prɪˈzɜːrv/：动词，保存、保持
* **parting thoughts** 🔥：临别感言、最后的想法

---

(62) [39:29-39:54] **Yeah, I think it's really exciting how you've put the pieces together, Zach, to get us another level of fast smart model. And it's the first speech-to-speech model that I feel really does compete head-to-head against the transcription-LLM-voice generation three layer stack. So that's super exciting. And I totally agree with Brooke that figuring out how to build a good cross-model benchmark and then really good application-specific massive simulation evals feels like the next unlock for those of us at the framework level in 2026.**

是的，**Zach**，我觉得你把这些拼图拼在一起的方式真的很令人兴奋——给我们带来了新一级别又快又聪明的模型。这是我觉得第一个真正能跟"转录-**LLM**-语音生成"三层架构正面竞争的端到端语音模型。这太令人兴奋了。我完全同意 **Brooke** 说的——搞清楚怎么构建好的跨模型基准测试，以及真正好的面向特定应用的大规模模拟评测，是 2026 年我们框架层的下一个突破。

解析：
* **speech-to-speech model** 🔥：端到端语音模型（直接语音输入→语音输出）
* **three layer stack**：三层架构（转录→LLM 处理→语音合成）🔥
* **head-to-head**：正面对决、直接竞争
* **unlock**：名词，突破、解锁

---

(63) [40:00-40:27] **Yeah. One of my big takeaways is share the problems you're having with your vendors because everyone is trying to figure it out right now. When we hear people's problems— hearing from users what's working, what's not— is some of the biggest signal above all else. What are people trying to do in production? What's working? What's not? We learned so much from our customers. You got to build the stuff. Awesome. Thanks everybody.**

对，我的一个重要收获是——把你遇到的问题分享给你的供应商，因为现在大家都在摸索。从用户那里听到什么有用、什么没用，是最重要的信号。人们在生产环境中到底想做什么？什么行得通？什么行不通？我们从客户身上学到了太多。得去做实事才行。太棒了，谢谢大家！

解析：
* **takeaway** 🔥：名词，收获、要点
* **vendor** /ˈvendər/：名词，供应商
* **signal**：名词，信号（这里指有价值的信息）
* **you got to build the stuff**：你得去做实事（口语化表达，强调实践的重要性）

---

## 📚 段落小结

这是一期关于语音 AI 技术的深度播客对谈。三位嘉宾从推理服务延迟、模型评测方法论、多轮对话挑战、思考型模型在语音场景的局限性，一直讨论到 2026 年的技术趋势。核心观点包括：(1) 基准测试有价值但远远不够，真实客户反馈是最重要的信号；(2) 语音 AI 需要"快思考与慢思考"的多模型架构；(3) 对话的自然度、韵律响应、反馈性应答等"人味"问题是下一个需要攻克的前沿。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **inference layer** | 推理层 |
| **time to first token (TTFT)** | 首个 token 响应时间 |
| **P50 / P90** | 百分位延迟指标 |
| **bread and butter** | 看家本领、核心业务 |
| **guiding star** | 指导方向、北极星 |
| **king of vibes** | 氛围之王（凭直觉判断） |
| **gut trust** | 直觉信任 |
| **POC (proof of concept)** | 概念验证 |
| **iterative prompting** | 迭代式提示词优化 |
| **draw a box around** | 圈定范围 |
| **in/out of distribution** | 分布内/分布外 |
| **BLEU score** | 翻译质量评估指标 |
| **proxy** | 代理指标 |
| **multi-turn conversation** | 多轮对话 |
| **function calling** | 函数调用 |
| **voice agent bench** | 语音 Agent 基准测试 |
| **hill climbing** | 爬坡/逐步优化 |
| **thinking fast and slow** | 快思考与慢思考 |
| **mixture of experts (MoE)** | 混合专家模型 |
| **distillation** | 蒸馏 |
| **guard rails** | 护栏/安全机制 |
| **orchestration** | 编排 |
| **interleave** | 交错、交替 |
| **uncanny valley** | 恐怖谷 |
| **prosody** | 韵律 |
| **back-channel** | 反馈性应答 |
| **induce** | 引发、诱导 |
| **in a vacuum** | 在真空中/脱离实际 |
| **long tail** | 长尾 |
| **speech-to-speech model** | 端到端语音模型 |
| **three layer stack** | 三层架构 |
| **test-driven development (TDD)** | 测试驱动开发 |
| **at scale** | 在大规模场景下 |
| **high leverage** | 高杠杆效应 |
| **retrofit** | 改造/改装旧系统 |
| **legacy systems** | 遗留系统 |
| **pendulum swing** | 钟摆效应 |
| **leave on the table** | 白白浪费 |
