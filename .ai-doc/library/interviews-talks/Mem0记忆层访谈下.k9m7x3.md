# 🎯 Mem0 AI 记忆层创始人访谈（下） 英语段落翻译

本文共 **18 个语义单元**，将全部翻译。

---

(1) [7:27-7:54] **So like for you your memory might be different, for me my memories might be different even for the same task right. So we try our best both on the open source, on the cloud version that you can customize anything that's possible. So you can come down and you can be like hey I don't want like this kind of memories to be captured, I want this. And all of this is in plain language, plain like natural... It's going to be interpreted by an LLM. Yeah and then we like try to form rules on top of it and then we rerun the pipeline, we update all the memories for you.**

比如说，对于同一个任务，你的记忆可能和我的记忆不一样，对吧。所以无论是开源版本还是云版本，我们都尽力让你可以自定义一切。你可以过来说"嘿，我不想捕获这类记忆，我想要那种"。所有这些都是用自然语言表达的... 会被 **LLM** 解释。是的，然后我们会基于此形成规则，重新运行 pipeline，为你更新所有记忆。

解析：
* **customize** /ˈkʌstəmaɪz/：动词，自定义、定制 🔥
* **captured**：动词，捕获、记录
* **plain language**：名词短语，自然语言、普通语言
* **interpreted by**：短语，被...解释
* **form rules on top of it**：短语，在此基础上形成规则
* **rerun the pipeline**：短语，重新运行流水线（技术术语）🔥

---

(2) [7:54-8:40] **Do you have any good examples of use cases like things that people have done with the product? When we talk about memory I think like memory should be a default primitive whenever you're building an AI application. A couple of high-level use cases that we have seen across: people try to use some sort of memory solution for efficiently managing their context encoding agents. People try to use some sort of memory solution when they are building a personal companion. People try to use memory solutions in education wherein they want to remember the learning trajectory. In healthcare wherein they want to remember everything about the patient and the medicine. In finance they want to remember the entire trajectory. So it's like wherever you're building an LLM based application and you want it to get better over time, you should need memory and you should use Mem0.**

你们有什么好的使用案例吗？人们用产品做了什么？说到记忆，我认为记忆应该是构建 AI 应用时的默认基础组件。我们看到的一些高层次用例：人们尝试使用某种记忆方案来高效管理上下文编码 Agent；人们在构建个人伴侣应用时使用记忆方案；人们在教育领域使用记忆方案，他们想记住学习轨迹；在医疗领域，他们想记住关于患者和药物的一切；在金融领域，他们想记住整个轨迹。所以无论你在哪里构建基于 **LLM** 的应用，只要你希望它随时间变得更好，你就需要记忆，你就应该使用 **Mem0**。

解析：
* **use cases**：名词短语，使用案例、用例 🔥
* **default primitive**：名词短语，默认基础组件
* **high-level**：形容词，高层次的
* **context encoding agents**：名词短语，上下文编码 Agent
* **personal companion**：名词短语，个人伴侣（AI 陪伴应用）
* **trajectory** /trəˈdʒektəri/：名词，轨迹 🔥
* **get better over time**：短语，随时间变得更好

---

(3) [8:40-8:53] **Yeah we have also like started seeing this very interesting pattern now where instead of capturing memories about humans, people are actually now building more and more agents so they want memories about the agent. So they want to capture more and more of that as well. Yeah.**

是的，我们也开始看到一个非常有趣的模式，人们不再只是捕获关于人类的记忆，而是正在构建越来越多的 Agent，所以他们想要关于 Agent 的记忆。他们也想捕获越来越多这类信息。是的。

解析：
* **pattern**：名词，模式、规律
* **instead of**：短语，而不是
* **capturing memories about**：短语，捕获关于...的记忆

---

(4) [8:53-9:43] **Excellent. Is there sometimes an issue when memories become stale kind of like is there any kind of decay of the memories and then you want to use them differently? Yeah. So that's a very good question actually. So we have been seeing this pattern from our users where different developers actually ask for like different kind of decay. Sometimes like customers are like hey I want like a hard decay where after 6 months I don't care about any memory. Sometimes developers ask for exponential decay where they care more about the recent stuff but they want to forget as memories get super old. And sometimes we have also seen developers ask about like certain things depending on their application. Let's say someone is building like a travel planner agent. Things that are related to travel preferences always matter no matter how old they are. But they still want to like forget other stuff which are probably not that relevant. So we are seeing these interesting patterns and we have like implementations of each of these decay mechanisms.**

很好。记忆变陈旧时会有问题吗？比如记忆会有某种衰减，然后你想以不同方式使用它们？是的，这是个很好的问题。我们从用户那里看到了这种模式，不同开发者会要求不同类型的衰减。有时客户会说"嘿，我想要硬衰减，6 个月后我不关心任何记忆"。有时开发者要求指数衰减，他们更关心最近的内容，但想遗忘非常老的记忆。有时我们也看到开发者根据他们的应用要求特定的东西。比如说有人在构建旅行规划 Agent，与旅行偏好相关的东西无论多老都很重要。但他们仍然想遗忘其他可能不太相关的东西。所以我们看到了这些有趣的模式，我们对每种衰减机制都有实现。

解析：
* **stale** /steɪl/：形容词，陈旧的、过时的 🔥
* **decay** /dɪˈkeɪ/：名词/动词，衰减、衰退 🔥
* **hard decay**：名词短语，硬衰减（在固定时间点完全遗忘）
* **exponential decay**：名词短语，指数衰减（随时间逐渐遗忘）🔥
* **no matter how old**：短语，无论多老
* **mechanisms** /ˈmekənɪzəmz/：名词，机制

---

(5) [9:44-9:52] **Is that same thing like they are going to describe what they want like in plain language? It is kind of but there are certain other knobs that you can also tune basically to enable that. Okay. Excellent.**

这和之前一样吗，他们用自然语言描述想要什么？差不多，但还有一些其他的参数可以调整来实现这个。好的，太棒了。

解析：
* **knobs** /nɒbz/：名词，旋钮（这里指可调节的参数）🔥
* **tune**：动词，调节、调整

---

(6) [9:52-10:42] **Let's take a step back quickly. OpenAI recently launched this memory layer for OpenAI, like other labs are building the same of course. Like are you still relevant in that world, like what does it mean for you? Yeah, I think it's a good thing for us wherein like all the big labs are launching memory and the memory is available in their consumer app offerings. And it's a matter of time that it becomes available as an API for developers. The fact that it's good for us is because they're educating the market that you need memory as a default primitive in any AI application. But for us it's good because developers are using multiple LLMs whenever they're building an AI application, right? And memory is not just read only, memory is write only also. So in that case, as in you know best engineering practice and even like as a first principle thinking, you would not want to tie your memory to any model provider out there.**

让我们快速退一步。**OpenAI** 最近推出了记忆层，其他实验室当然也在构建同样的东西。你们在那个世界里还有存在价值吗？这对你们意味着什么？是的，我认为这对我们是好事，因为所有大型实验室都在推出记忆功能，记忆在他们的消费者应用中可用。它作为开发者 API 可用只是时间问题。这对我们有利的原因是他们在教育市场：你需要记忆作为任何 AI 应用的默认基础组件。但对我们来说好处是，开发者在构建 AI 应用时使用多个 **LLM**，对吧？而且记忆不只是只读的，记忆也是只写的。所以在这种情况下，按照最佳工程实践，甚至按照第一性原理思考，你不会想把记忆绑定到任何模型提供商。

解析：
* **take a step back**：短语，退一步（重新审视问题）🔥
* **relevant** /ˈreləvənt/：形容词，有关联的、有存在价值的
* **consumer app offerings**：名词短语，消费者应用产品
* **a matter of time**：短语，只是时间问题 🔥
* **educating the market**：短语，教育市场
* **first principle thinking**：名词短语，第一性原理思考 🔥
* **tie... to**：短语，把...绑定到

---

(7) [10:42-10:57] **For model provider, memory is the next moat because models are becoming having a commodity. But for a developer because they are using multiple LLMs it should be decoupled. They want to own the memory and not like always have the option to change model. Okay that makes complete sense.**

对于模型提供商来说，记忆是下一个护城河，因为模型正在变成商品。但对于开发者来说，因为他们使用多个 **LLM**，记忆应该是解耦的。他们想拥有记忆的所有权，并且始终有选择更换模型的权利。好的，这完全说得通。

解析：
* **moat** /məʊt/：名词，护城河（商业术语，指竞争壁垒）🔥
* **commodity** /kəˈmɒdəti/：名词，商品（这里指同质化产品）🔥
* **decoupled** /diːˈkʌpld/：形容词，解耦的（软件架构术语）🔥
* **own**：动词，拥有
* **makes complete sense**：短语，完全说得通

---

(8) [10:57-11:48] **And that not you mentioned that you work with other kind of frameworks, other partners like AWS. Like how does that work like people using these frameworks have you out of the box? Yeah so like we not only serve the customers, we also provide memory to agentic frameworks. Like we are the exclusive memory provider in the AWS agent SDK called Strands. And then we power memory for all the other major agentic frameworks like CrewAI, Flowwise. The idea is that memory is something which should be neutral to anything. It should be neutral to framework, it should be neutral to your model provider, it should be neutral to LLM. So that's how we gave it like as a very simple tool call in any of the agent frameworks out there. And developers who are using multiple frameworks even can have their memory in a central fashion and like keep it decoupled from anything out there.**

你提到你们与其他框架、其他合作伙伴如 **AWS** 合作。这是怎么运作的？使用这些框架的人开箱即用就有你们的产品吗？是的，我们不仅服务客户，还为 Agent 框架提供记忆。我们是 **AWS** Agent SDK **Strands** 的独家记忆提供商。然后我们为所有其他主要 Agent 框架如 **CrewAI**、**Flowwise** 提供记忆能力。理念是记忆应该对任何东西保持中立。它应该对框架中立，对模型提供商中立，对 **LLM** 中立。所以我们在任何 Agent 框架中都把它做成一个非常简单的工具调用。使用多个框架的开发者甚至可以以集中的方式拥有他们的记忆，与外面的任何东西解耦。

解析：
* **out of the box**：短语，开箱即用 🔥
* **exclusive**：形容词，独家的、排他的
* **neutral to**：短语，对...中立 🔥
* **tool call**：名词短语，工具调用（AI Agent 术语）
* **in a central fashion**：短语，以集中的方式

---

(9) [11:48-12:39] **You recently announced your like kind of big fundraising like 24 million from Basisset and Peak15 and others. Like what did they see in you, like what convinced them to invest? First of all it's a you know it's a 24 million seed plus Series A round. Our seed was done by led by Kindred. Series A was led by Basisset. Basisset participated in our seed round and we have known like Lan very well for over a year. And we really like the partnership so far. And when we decided to raise they quickly got back to us with like the fact that they wanted to double down on us. And we were fortunate enough to raise from them, Peak15, Kindred, Vice and a lot of other angels as like great angels as well. So they saw like the traction pretty much, they were already insiders. They knew things were working. Yeah. And wanted to go down.**

你们最近宣布了大规模融资，从 **Basisset**、**Peak15** 和其他投资者那里融了 2400 万。他们看中你们什么？什么说服他们投资？首先，这是 2400 万的种子轮加 **A** 轮融资。我们的种子轮由 **Kindred** 领投。**A** 轮由 **Basisset** 领投。**Basisset** 参与了我们的种子轮，我们认识 **Lan** 已经超过一年了。我们非常喜欢目前的合作关系。当我们决定融资时，他们很快回复说想要加倍投资我们。我们很幸运能从他们那里融资，还有 **Peak15**、**Kindred**、**Vice** 和很多其他天使投资人。所以他们基本上看到了 traction，他们已经是内部人士了。他们知道事情在起作用。是的，想要深入参与。

解析：
* **fundraising**：名词，融资
* **seed round**：名词短语，种子轮 🔥
* **Series A**：名词短语，A 轮融资 🔥
* **led by**：短语，由...领投
* **double down on**：短语，加倍投入、加倍下注 🔥
* **insiders**：名词，内部人士
* **go down**：短语，深入参与（这里指继续投资）

---

(10) [12:39-12:57] **What are you going to do with all this money? I mean we want to build the best possible memory product on the planet. We are going to use this fund to hire the best possible team so that we can build the best possible product. Nothing else. How big is the team today? So we are like now 10 people split across India and SF office.**

你们打算用这笔钱做什么？我们想要打造地球上最好的记忆产品。我们会用这笔资金招聘最好的团队，这样我们就能打造最好的产品。没有别的了。团队现在有多大？我们现在大约 10 个人，分布在印度和旧金山办公室。

解析：
* **the best possible**：短语，尽可能最好的
* **on the planet**：短语，在地球上（强调全球最好）
* **split across**：短语，分布在...
* **SF**：缩写，San Francisco（旧金山）

---

(11) [12:57-13:29] **And so what roles are you hiring for? So we are hiring across. We are hiring for you know applied, we are hiring for full stack. We are hiring for forward deployed. We are hiring for GTM engineer. Desh can give like a one minute pitch also. No I think across the engineering organization basically we are trying to double down and like ship as fast as possible. And that's why like full stack, forward deployed, applied AI, research engineer, front end, back end, both here and in India. Both. Yes that's correct.**

那你们在招什么岗位？我们全面招聘。我们在招应用、全栈、前线部署、**GTM** 工程师。**Desh** 可以做一分钟的宣传。不，我觉得在整个工程组织中，我们基本上是在加倍投入，尽可能快地交付。所以全栈、前线部署、应用 AI、研究工程师、前端、后端，美国和印度都招。两边都招。是的，没错。

解析：
* **hiring across**：短语，全面招聘
* **applied**：形容词，应用的（applied AI 指应用 AI 研究）
* **full stack**：名词短语，全栈（开发岗位）🔥
* **forward deployed**：名词短语，前线部署工程师（驻场工程师）🔥
* **GTM engineer**：名词短语，Go-To-Market 工程师（负责产品推向市场）🔥
* **pitch**：名词，宣传、推介
* **ship**：动词，交付、发布（技术俚语）🔥

---

(12) [13:29-13:48] **Yeah. Okay. And like whatever work we are doing, I think like on engineering side it's like one of the most challenging work out there. You have to build like a low latency infra product and you're solving an expectation problem. So you have to cater to every user and you have to make sure that memories work well reliably at scale.**

是的。好的。无论我们在做什么工作，我认为在工程方面这是最具挑战性的工作之一。你必须构建一个低延迟的基础设施产品，而且你在解决一个期望问题。所以你必须满足每个用户的需求，你必须确保记忆在规模化时可靠地工作。

解析：
* **challenging**：形容词，具有挑战性的
* **low latency infra**：名词短语，低延迟基础设施
* **cater to**：短语，满足...的需求 🔥
* **reliably**：副词，可靠地
* **at scale**：短语，在规模化时、大规模运行时 🔥

---

(13) [13:48-14:19] **Excellent. And what do you see next happening in that world of memory for AI? Like what would be your vision like a year, two years from now? We recently came up with this three sentences while brainstorming. We call it like make it work, make it neutral and make it portable. Right now we are in the first two phases wherein like memory works but memory should work very well across any domain out there. So we have to keep pushing the frontiers of that. And we want to keep it neutral. It should not be tied to anything out there.**

很好。你们觉得 AI 记忆领域接下来会发生什么？一两年后你们的愿景是什么？我们最近在头脑风暴时想出了三句话。我们称之为：让它工作、让它中立、让它可移植。现在我们处于前两个阶段，记忆能工作，但记忆应该在任何领域都工作得很好。所以我们必须不断推进前沿。我们想保持它的中立性，它不应该绑定到外面的任何东西。

解析：
* **vision**：名词，愿景
* **came up with**：短语，想出 🔥
* **brainstorming**：名词，头脑风暴
* **make it portable**：短语，让它可移植 🔥
* **phases**：名词，阶段
* **pushing the frontiers**：短语，推进前沿 🔥

---

(14) [14:19-15:13] **But the broader theme that we see maybe which happens in like 5 to 10 years from now is like we are going through a technological shift. So far we as humans have been interacting with any technology using swipe, scroll and click. But that's going to change. It's going to be a lot of agentic interfaces. For the first time you and I can chat with any app or can talk with any app and the app can talk back to you. So everyone is accumulating rich personal data. And history has shown us multiple times that user expectation always moves towards less friction. So 5 years down the line when you are having like hundreds of AI apps in your life on a day-to-day basis and you would have like given every app some custom instruction about how it should be and you're trying the 101st app and you're like why doesn't this app just get me?**

但我们看到的更宏观的主题，也许在 5 到 10 年后会发生的是，我们正在经历一场技术变革。到目前为止，我们人类与任何技术的交互都是通过滑动、滚动和点击。但这将改变。会有很多 Agent 式的界面。你我第一次可以与任何应用聊天或对话，应用也可以回复你。所以每个人都在积累丰富的个人数据。历史多次告诉我们，用户期望总是朝着更少摩擦的方向发展。所以 5 年后，当你日常生活中有数百个 AI 应用，你给每个应用都提供了一些自定义指令，然后你在尝试第 101 个应用时会想：为什么这个应用就是不懂我？

解析：
* **broader theme**：名词短语，更宏观的主题
* **technological shift**：名词短语，技术变革
* **swipe, scroll and click**：短语，滑动、滚动和点击（传统交互方式）
* **agentic interfaces**：名词短语，Agent 式界面 🔥
* **accumulating**：动词，积累
* **friction** /ˈfrɪkʃn/：名词，摩擦（这里指使用阻力）🔥
* **down the line**：短语，在未来、以后 🔥
* **custom instruction**：名词短语，自定义指令
* **get me**：口语，懂我、理解我 🔥

---

(15) [15:13-15:37] **So that's the future wherein like you want, like any person, any consumer, like you, me, like we want all of the agents we work with to know us and to share that information. Yes. Yes. So that's the future that we're excited towards. We don't know when will that happen but we believe that there is a high chance it is going to happen. And wherever that happens we want to build the infrastructure that caters to the developers for today's needs and for tomorrow's expectations. Excellent.**

所以这就是未来，任何人、任何消费者、像你我一样，我们都想让所有与我们合作的 Agent 了解我们并分享这些信息。是的。是的。这就是我们兴奋期待的未来。我们不知道这什么时候会发生，但我们相信它很有可能会发生。无论何时发生，我们都想要构建基础设施，满足开发者今天的需求和明天的期望。太棒了。

解析：
* **excited towards**：短语，对...感到兴奋
* **a high chance**：短语，很大可能
* **infrastructure**：名词，基础设施
* **caters to**：短语，满足...的需求
* **today's needs and tomorrow's expectations**：短语，今天的需求和明天的期望（很好的表达）🔥

---

(16) [15:37-16:24] **Before to conclude, let's go back quickly on your journey as founders. Like is there anything you wish you could tell you when you were starting? I think one thing that I have realized for my journey is like focus is very critical. And it goes back to like fundamentals of computer science also. So I was thinking recently that like okay, whenever doing a startup you want to make sure you apply DFS rather than applying BFS so that you stay focused when you're actually like working on the startup. So if you have multiple ideas, in the age of AI you have so many ideas, always stay focused, focus on one thing, go deep, build it, talk to customers. Well in your case like you kind of like defocused yourself by building that consumer app and it worked. Exactly. Yeah. It was blessing in disguise for us. Blessing in disguise. Yeah. Like not what you would recommend for others.**

在结束之前，让我们快速回顾一下你们作为创始人的旅程。有什么你希望能在刚开始时告诉自己的吗？我意识到的一件事是专注非常关键。这也回归到计算机科学的基础。我最近在想，在做创业时，你要确保应用 **DFS**（深度优先搜索）而不是 **BFS**（广度优先搜索），这样在创业时才能保持专注。所以如果你有多个想法，在 AI 时代你有太多想法了，始终保持专注，专注于一件事，深入，构建它，与客户交谈。但在你的情况下，你通过构建那个消费者应用有点分散了自己的注意力，但它成功了。没错。是的。这对我们来说是因祸得福。因祸得福。是的。不是你会推荐给其他人的做法。

解析：
* **focus is critical**：短语，专注至关重要
* **fundamentals**：名词，基础、根本
* **DFS**：缩写，Depth-First Search（深度优先搜索）🔥
* **BFS**：缩写，Breadth-First Search（广度优先搜索）🔥
* **go deep**：短语，深入
* **defocused**：动词，分散注意力
* **blessing in disguise**：习语，因祸得福、塞翁失马 🔥

---

(17) [16:24-17:06] **Have I think for me, I think I mean it sounds very philosophical but it's like something that I've tested multiple times in your life. I think everything is possible. You just have to believe in it and you just have to make it work. If you're like hellbent, like I've been trying to do my own company since like 2012. It took me like 13-14 years. I think if I would have just thought harder and I would have just had like more conviction in myself, I would have just made it, I might have made it work earlier. So I would say like believe in yourself. It would not have taken like 13 years but like maybe... Yeah I mean like believe in yourself is like very simple but powerful statement. That's great advice.**

对我来说，这听起来很哲学但这是我在生活中多次验证过的东西。我认为一切皆有可能。你只需要相信它并让它实现。如果你像我一样执着，我从 2012 年就一直在尝试创办自己的公司。花了我 13-14 年。我想如果我当时更努力地思考，如果我对自己有更多信念，我可能早就成功了。所以我想说相信你自己。可能就不需要 13 年了，也许... 是的，我的意思是相信自己是一个非常简单但强大的声明。这是很棒的建议。

解析：
* **philosophical** /ˌfɪləˈsɒfɪkl/：形容词，哲学的
* **tested**：动词，验证、测试
* **everything is possible**：短语，一切皆有可能
* **hellbent** /ˈhelbent/：形容词，坚定执着的、不顾一切的 🔥
* **conviction** /kənˈvɪkʃn/：名词，信念、坚定信仰 🔥
* **believe in yourself**：短语，相信你自己 🔥
* **powerful statement**：名词短语，强有力的声明

---

(18) [17:10-17:16] **Thank you so much for joining us today. It was great to have you. Thank you. Thank you for having us. Thank you.**

非常感谢你们今天加入我们。很高兴有你们。谢谢。感谢邀请我们。谢谢。

解析：
* **joining us**：短语，加入我们
* **great to have you**：短语，很高兴有你们
* **Thank you for having us**：短语，感谢邀请我们（访谈结束常用语）

---

## 📚 段落小结

这是访谈的下半部分。**Mem0** 的记忆可以高度定制化，用自然语言描述即可。使用案例涵盖个人伴侣、教育、医疗、金融等领域。他们还实现了多种记忆衰减机制（硬衰减、指数衰减等）。面对 **OpenAI** 等大厂也在做记忆功能，创始人认为这是好事——大厂在教育市场，而开发者需要中立、解耦的记忆方案。团队目前 10 人，正在招全栈、前线部署等工程师。未来愿景是"make it work, make it neutral, make it portable"。创始人给出的建议：用 **DFS** 而不是 **BFS** 做创业——保持专注！还有：相信自己，一切皆有可能。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **stale** | 陈旧的、过时的 |
| **decay** | 衰减、衰退 |
| **exponential decay** | 指数衰减 |
| **knobs** | 旋钮、可调参数 |
| **moat** | 护城河（竞争壁垒） |
| **commodity** | 商品（同质化产品） |
| **decoupled** | 解耦的 |
| **out of the box** | 开箱即用 |
| **double down on** | 加倍投入 |
| **forward deployed** | 前线部署工程师 |
| **GTM engineer** | Go-To-Market 工程师 |
| **at scale** | 大规模运行时 |
| **pushing the frontiers** | 推进前沿 |
| **agentic interfaces** | Agent 式界面 |
| **friction** | 摩擦（使用阻力） |
| **DFS / BFS** | 深度优先/广度优先搜索 |
| **blessing in disguise** | 因祸得福 |
| **hellbent** | 坚定执着的 |
| **conviction** | 信念 |
| **first principle thinking** | 第一性原理思考 |
