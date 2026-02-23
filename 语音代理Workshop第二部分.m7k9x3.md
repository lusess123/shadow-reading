# 🎯 Cerebras 语音代理 Workshop（第二部分）英语段落翻译

本文共 **27 个语义单元**，将全部翻译。

---

(1) [10:35-10:46] **And so today we're going to be focusing on the sales agent use case. So, first let's talk about what's actually happening inside a voice agent when you're having a conversation and break it down.**

今天我们将专注于销售代理的使用场景。首先，让我们来聊聊当你和语音代理对话时，它内部到底发生了什么，我们来拆解一下。

解析：
* **use case** 🔥：名词，使用场景、用例
* **break it down**：短语，拆解、分解（把复杂事物分成小部分解释）

---

(2) [10:46-11:04] **Yeah. So, you guys can see on this diagram on the right, once speech is detected, the voice data is forwarded to STT or that's called speech to text. This listens and converts your words to text in real time. And the last step in this process is end of utterance um or end of turn detection.**

好的。大家可以看右边这张图，一旦检测到语音，语音数据就会被转发到 **STT**（也就是语音转文字）。它会监听并实时将你的话转换成文字。这个过程的最后一步是「话语结束」或「轮次结束」检测。

解析：
* **diagram**：名词，图表、示意图
* **forward**：动词，转发
* **STT (Speech to Text)**：语音转文字
* **utterance** 🔥：名词，话语、发言（语音处理术语）
* **end of turn detection**：轮次结束检测（判断用户是否说完）

---

(3) [11:04-11:31] **Um being interrupted by AI every time you pause. It's like very annoying. So, while VAD can help the system know when you are and you aren't speaking, it's also very important to analyze like what you're saying, the context of your speech, and to predict like whether you've done sharing your thoughts. So, we have another smaller model here that runs quickly on the CPU, which will instruct the system to wait if it predicts you're still speaking.**

每次你停顿一下就被 AI 打断，真的很烦人。所以虽然 **VAD** 可以帮助系统知道你什么时候在说话、什么时候没有，但同样重要的是要分析你在说什么、你说话的上下文，以及预测你是否已经表达完想法。所以我们这里有另一个更小的模型，在 CPU 上快速运行，如果它预测你还在说话，就会指示系统等待。

解析：
* **VAD (Voice Activity Detection)** 🔥：语音活动检测
* **annoying**：形容词，烦人的
* **context**：名词，上下文、语境
* **predict**：动词，预测
* **instruct**：动词，指示

---

(4) [11:31-11:52] **So, once your turn is done, the final text transcription is forwarded to the next layer. And then after that phase, we have the thinking phase. So your entire question is now passed onto the large language model. Um, and this is basically, you know, the brain like understands what you're asking.**

一旦你的发言结束，最终的文字转录就会被转发到下一层。在那个阶段之后，我们进入思考阶段。你的整个问题现在被传递给大语言模型。这基本上就像是大脑在理解你在问什么。

解析：
* **transcription**：名词，转录、文字记录
* **phase** 🔥：名词，阶段
* **large language model (LLM)**：大语言模型
* **pass onto**：传递给

---

(5) [11:51-12:04] **So it might need to look things up, which we'll walk through later. Um, like checking in this case, if we're doing a sales call, we'll want to pull additional context like documents, your other like more information about your company basically.**

所以它可能需要查找一些东西，我们稍后会详细讲。比如在这个案例中，如果我们在进行销售通话，我们会想要拉取额外的上下文，比如文档，或者更多关于你公司的信息。

解析：
* **look things up**：短语，查找（信息）
* **pull**：动词，拉取（数据）
* **additional context**：额外的上下文

---

(6) [12:04-12:26] **Yeah. And then the third and the final step is the speaking phase. So as LLM streams response back to the agent, the agent will immediately start forwarding these LLM tokens to the TTS engine or text to speech. Um this generated audio from TTS streams back to your client's application in real time and that's why the agent can actually start responding when it's still thinking.**

然后第三步也是最后一步是说话阶段。当 **LLM** 把响应流式传输回代理时，代理会立即开始将这些 **LLM** token 转发给 **TTS** 引擎（文字转语音）。**TTS** 生成的音频会实时流式传输回你的客户端应用，这就是为什么代理在还在思考的时候就能开始回应了。

解析：
* **stream**：动词，流式传输
* **TTS (Text to Speech)**：文字转语音
* **token**：token/标记（LLM 的最小输出单位）
* **in real time**：实时地

---

(7) [12:26-12:52] **So the final result is that all of these components tied together is what's making, you know, an AI agent that feels very responsive, that feels very cohesive and immediate, even though there's a lot of complex processing happening behind the scenes. So there's a lot of moving pieces. In this case, we're going to be using LiveKit's agent SDK to handle all this orchestration for us.**

所以最终结果是，所有这些组件绑在一起，才造就了一个感觉非常响应迅速、非常连贯和即时的 AI 代理，尽管幕后有大量复杂的处理在进行。有很多活动部件。在这个案例中，我们将使用 **LiveKit** 的 **Agent SDK** 来帮我们处理所有这些编排工作。

解析：
* **tied together**：绑在一起、连接在一起
* **responsive** 🔥：形容词，响应迅速的
* **cohesive**：形容词，连贯的、有凝聚力的
* **behind the scenes**：幕后
* **moving pieces**：活动部件（比喻复杂系统中的各个组成部分）
* **orchestration** 🔥：名词，编排、协调（技术术语）

---

(8) [12:45-13:00] **Um, it's going to manage the audio streams, keep track of the context, and coordinate all these different AI services that we've just talked about. So, now that we have a little bit of context, um you can access the starter code here. We shared it already.**

它会管理音频流、跟踪上下文、协调我们刚才讨论的所有这些不同的 AI 服务。现在我们有了一些背景知识，你可以在这里访问 starter code，我们已经分享过了。

解析：
* **manage**：动词，管理
* **keep track of**：跟踪、记录
* **coordinate**：动词，协调

---

(9) [13:00-13:21] **And if you want to run the first section right here, it'll allow you to install all of the necessary packages. So, if you click on it, um you'll be able to see some of the output of the packages being downloaded. And so, this is going to use LiveKit agents with support for Cartisia, Silero for voice activity detection, and OpenAI compatibility.**

如果你想运行这里的第一部分，它会让你安装所有必要的包。点击它，你就能看到包被下载的输出。这将使用 **LiveKit agents**，支持 **Cartisia**、用于语音活动检测的 **Silero**，以及 **OpenAI** 兼容性。

解析：
* **packages**：软件包
* **compatibility**：名词，兼容性
* **Silero**：一个轻量级的语音活动检测模型

---

(10) [13:21-14:05] **And so we've very briefly talked about Cerebras. It is 50 times faster than GPUs. And um I'll skip here. And so as a final note, so for this workshop, we're actually going to be using Llama 3.3. And if you see in the chart on the bottom right, this is a chart from artificial analysis. Artificial analysis, if you're unfamiliar, is an independent benchmark that benchmarks a lot of different models, API providers, etc. um on intelligence, speed, latency, everything. And so you can see a comparison here of Cerebras on the very left in terms of tokens per second and any of your other providers like Nvidia.**

我们简单讲了一下 **Cerebras**，它比 GPU 快 50 倍。这里我跳过一下。最后说明一下，这次 workshop 我们实际上会使用 **Llama 3.3**。如果你看右下角的图表，这是来自 **Artificial Analysis** 的图表。如果你不熟悉的话，**Artificial Analysis** 是一个独立的基准测试平台，它对很多不同的模型、API 提供商等在智能、速度、延迟等各方面进行基准测试。你可以看到这里 **Cerebras** 在最左边，以每秒 token 数来比较，和其他提供商如 **Nvidia** 的对比。

解析：
* **benchmark** 🔥：名词/动词，基准测试
* **latency**：名词，延迟
* **tokens per second**：每秒 token 数（衡量推理速度的指标）
* **Artificial Analysis**：一个独立的 AI 模型评测平台

---

(11) [14:05-14:42] **Awesome. Um going back to our code, um hopefully everyone has had a second to kind of install the packages. Um, and now let's also install the LiveKit CLI. This is optional for our workshop today, but if you want to use LiveKit beyond this, um, here are the commands depending on your system. Um, in general, we're obviously using Python notebook today. So, no one has to battle around your environment when we're getting started. But again, if you want to continuously build and deploy uh the voice agent, the CLI probably is the easiest way to do it. So just uh type in LK app create and you can instantly clone a pre-built agent like this one.**

好的，回到我们的代码，希望大家都有时间安装好包了。现在我们也来安装 **LiveKit CLI**。这对今天的 workshop 是可选的，但如果你想在此之后继续使用 **LiveKit**，这里是根据你系统的不同命令。一般来说，我们今天显然是用 **Python notebook**，所以开始的时候大家不用纠结环境问题。但如果你想持续构建和部署语音代理，**CLI** 可能是最简单的方式。只需输入 `lk app create`，你就可以立即克隆一个像这样的预构建代理。

解析：
* **CLI (Command Line Interface)**：命令行界面
* **optional**：形容词，可选的
* **battle around**：为...纠结/挣扎
* **deploy** 🔥：动词，部署
* **pre-built**：预构建的

---

(12) [14:49-15:15] **Cool. And um let's talk a little bit about what exactly LiveKit is and why we need it for a voice agent. So the existing internet isn't exactly designed to build voice agent applications. So HTTP stands for hypertext transfer protocol. So it was designed for transferring text over a network and obviously for what we're building we need to transfer voice data instead of just text over a network with low latency.**

好的，让我们聊聊 **LiveKit** 到底是什么，以及为什么我们的语音代理需要它。现有的互联网其实并不是为构建语音代理应用而设计的。**HTTP** 代表超文本传输协议，它是为在网络上传输文本而设计的。而我们要构建的东西显然需要在网络上以低延迟传输语音数据，而不仅仅是文本。

解析：
* **HTTP (Hypertext Transfer Protocol)**：超文本传输协议
* **transfer**：动词，传输
* **low latency**：低延迟

---

(13) [15:15-15:42] **Um and LiveKit is a real-time infrastructure platform for doing just that. So instead of using HTTP it actually uses a different protocol called WebRTC to transport voice data between your client application and AI model with less than 100 milliseconds of latency anywhere in the world which is awesome. It's very resilient, handles a lot of concurrent sessions and it's fully open source. So you can kind of dig into the code and you can see how it works or even host infrastructure yourself as well.**

**LiveKit** 是一个实时基础设施平台，就是用来做这件事的。它不使用 **HTTP**，而是使用一种叫做 **WebRTC** 的不同协议，在你的客户端应用和 AI 模型之间传输语音数据，全球任何地方延迟都不到 100 毫秒，这太棒了。它非常有弹性，能处理大量并发会话，而且完全开源。所以你可以深入代码看看它是怎么工作的，甚至自己托管基础设施。

解析：
* **WebRTC** 🔥：Web Real-Time Communication，网页实时通信协议
* **milliseconds**：毫秒
* **resilient**：形容词，有弹性的、可恢复的
* **concurrent sessions**：并发会话
* **open source**：开源
* **dig into**：深入研究

---

(14) [15:42-16:16] **Um yeah, so you can use LiveKit to build any type of like voice agents, the ones that can join your meetings, the ones answering phone calls in sales centers and call centers and in our case today an agent that can speak to prospective customers on your website on your behalf. And here you can see connecting it to the original diagram that we showed. So you see like the LLM, TTS, STT and all the AI components that we talked about earlier. And now you can see, you know, how these actual tools like LiveKit, Cartisia, your inference provider, all of these things are actually playing together to help you create a voice agent.**

你可以用 **LiveKit** 构建任何类型的语音代理：能加入你会议的代理、在销售中心和呼叫中心接听电话的代理，以及我们今天的案例——一个能代表你在网站上与潜在客户交谈的代理。这里你可以看到它与我们之前展示的原始图表的关联。你可以看到 **LLM**、**TTS**、**STT** 和我们之前讨论的所有 AI 组件。现在你可以看到这些实际工具，比如 **LiveKit**、**Cartisia**、你的推理提供商，所有这些是如何协同工作来帮助你创建语音代理的。

解析：
* **prospective customers** 🔥：潜在客户
* **on your behalf**：代表你
* **call center**：呼叫中心
* **playing together**：协同工作

---

(15) [16:16-16:32] **And so the final component as I mentioned is the actual speech processing um which so in addition to Cerebras and LiveKit and as I mentioned we'll be using Cartisia to turn the voice into text and then at the end text back to voice.**

正如我提到的，最后一个组件是实际的语音处理。除了 **Cerebras** 和 **LiveKit**，我们还将使用 **Cartisia** 把语音转成文字，然后最后再把文字转回语音。

解析：
* **in addition to**：除了...之外
* **speech processing**：语音处理

---

(16) [16:32-16:55] **So now that our API keys are set up, step two is all about teaching our AI sales agent about our business. So when you train a new employee you have to give it information and context on your business. And so that's what we're going to be doing now. Yeah. Um, I think the challenge a lot of the times with LLMs is that they know a lot about everything, but they might not know many specific things or domain things about your company.**

现在我们的 API key 设置好了，第二步是教我们的 AI 销售代理了解我们的业务。当你培训新员工时，你必须给他提供关于业务的信息和背景。这就是我们现在要做的。我认为 **LLM** 很多时候的挑战是，它们对很多事情都知道一些，但可能不太了解关于你公司的具体事情或领域知识。

解析：
* **API key**：API 密钥
* **domain** 🔥：领域、专业领域
* **specific things**：具体的事情

---

(17) [16:55-17:23] **Um, and they're only really as good as their training set. So, if we want to respond with any information that isn't common public knowledge, we should really try and load it into the LLM's context to minimize hallucination or any sort of canned responses such as, "I can't help with that." So, in this case, we're just going to be feeding the LLM a document with additional information. So, for example, we can load our pricing details if someone asks about pricing.**

而且它们的能力只取决于它们的训练数据。所以如果我们想用任何不是公共常识的信息来回应，我们真的应该尝试把它加载到 **LLM** 的上下文中，以减少幻觉或任何那种罐头式回复，比如「我帮不了你」。在这个案例中，我们只是要给 **LLM** 提供一份包含额外信息的文档。例如，如果有人问价格，我们可以加载我们的定价详情。

解析：
* **training set**：训练集/训练数据
* **hallucination** 🔥：幻觉（AI 术语，指模型编造不存在的信息）
* **canned responses**：罐头式回复、模板化回复
* **feed**：动词，喂给、提供（数据）

---

(18) [17:17-17:58] **But we can also load information like product descriptions, pricing info, key benefits. And another big thing that we can do is write pre-written responses to common objections. So, for example, if it's common that someone says it's too expensive, you can write a pre-written message so that our agent will always stay on message and it has the correct context. So, if you look at the notebook, you can see what that context looks like in practice, right? You don't have to just give it access to a full document. Um you can see that we've organized all the information that our sales agent needs into a very simple structured format for the AI to understand and reference.**

我们还可以加载产品描述、定价信息、主要优势等信息。另一个重要的事情是，我们可以为常见异议编写预设回复。例如，如果经常有人说「太贵了」，你可以写一条预设消息，这样我们的代理就能始终保持一致的口径并拥有正确的上下文。如果你看看 notebook，你可以看到这个上下文在实践中是什么样的，对吧？你不必只是给它访问完整文档的权限。你可以看到我们把销售代理需要的所有信息组织成一个非常简单的结构化格式，便于 AI 理解和引用。

解析：
* **objections** 🔥：名词，异议、反对意见（销售术语）
* **pre-written responses**：预设回复
* **stay on message**：保持一致的口径/信息
* **structured format**：结构化格式
* **reference**：动词，引用

---

(19) [17:58-18:27] **So you can see everything that a good salesperson would need like the descriptions and then as we mentioned it has these pre-written messages as well so that you can control the behavior of your voice agent more closely. Um, now we're off to the more exciting part, even more exciting part, step three, where we actually create our sales agent. So, this is where everything that we've just talked about, the components, and we're going to wire them all together into a working system.**

你可以看到一个好销售员需要的一切，比如产品描述，然后正如我们提到的，它还有这些预设消息，这样你可以更精确地控制语音代理的行为。现在我们要进入更激动人心的部分了，第三步，我们实际创建销售代理。在这里，我们会把刚才讨论的所有组件连接在一起，组成一个可工作的系统。

解析：
* **more closely**：更精确地、更紧密地
* **we're off to**：我们要进入...
* **wire together** 🔥：连接在一起（把各组件接线连接）

---

(20) [18:27-19:02] **Um, and before you run anything, let's actually walk through what is happening in the sales agent class. So, in the code, you can see we start by loading our context by using the load context function we defined earlier. And this gives our agent access to all the product information, pricing, and objection handlers that we set up. So, and finally, I want to look at how we're implementing everything in code in terms of creating the actual sales agent. So there's way more of the code in the notebook, but as a high level um you want to start there's kind of four components.**

在你运行任何东西之前，让我们先看看销售代理类里面发生了什么。在代码中，你可以看到我们首先使用之前定义的 `load_context` 函数来加载上下文。这让我们的代理能访问我们设置的所有产品信息、定价和异议处理程序。最后，我想看看我们是如何在代码中实现创建实际销售代理的。notebook 里有更多代码，但从高层次来看，大约有四个组件。

解析：
* **class**：类（编程术语）
* **load context**：加载上下文
* **objection handlers**：异议处理程序
* **at a high level**：从高层次来看

---

(21) [19:02-19:48] **So you want to start by you know telling your sales agent your voice agent communicating by voice um and give it proper rules like you know don't use bullet points because everything is spoken aloud. So you want to do um a bit of prompting and then most importantly only use information from the context that you provided. So you want to make be very careful especially with voice agents that you are not allowing um that you're reducing the risk of hallucinations as much as possible. And then the super call is what's initializing our agent and passes all of our configurations to the parent agent. And this is setting up our agent with the LLM, TTS, VAD and all the instructions working together.**

首先你要告诉你的销售代理，你的语音代理是通过语音交流的，并给它适当的规则，比如不要使用项目符号，因为所有内容都是口头说出来的。所以你需要做一些提示词工程，然后最重要的是只使用你提供的上下文中的信息。你要非常小心，特别是对于语音代理，要尽可能降低幻觉的风险。然后 `super()` 调用是初始化我们的代理，并将所有配置传递给父代理。这会设置我们的代理，让 **LLM**、**TTS**、**VAD** 和所有指令一起工作。

解析：
* **bullet points**：项目符号
* **spoken aloud**：口头说出来
* **prompting**：提示词工程
* **super call**：super() 调用（Python 中调用父类的方法）
* **configurations**：配置

---

(22) [19:48-20:11] **And then the last thing that we're going to do is we're also going to define an on_enter method which is what's going to start the actual conversation. So, as soon as someone joins the conversation with the agent, instead of sitting in silence, it immediately um or this is triggered as soon as someone joins the conversation. So, instead of ever sitting in silence, you're going to immediately generate that greeting um and the good salesperson will help.**

然后我们要做的最后一件事是定义一个 `on_enter` 方法，它会启动实际的对话。一旦有人加入与代理的对话，代理不会沉默等待，而是会立即触发这个方法。所以代理永远不会沉默等待，而是会立即生成问候语，就像一个好销售员会做的那样。

解析：
* **on_enter method**：进入方法（事件处理函数）
* **sitting in silence**：沉默等待
* **triggered**：被触发
* **greeting**：问候语

---

(23) [20:11-20:51] **Yeah. And then we're off to our step four. We're actually launching a session and running the agent. Um, think of this entire kind of uh entry point function as a start button to our agent. And when someone wants to have a conversation, obviously it kicks off everything and gets the agent ready to talk. So this entry point function is doing three main things. So it's connecting the agent to a virtual room where the conversation will happen. So it's like dialing into a conference call. Um, then it's going to create an instance of our sales agent with the setup that we just configured. And so finally, it's going to start a session that manages the back and forth conversations.**

然后我们进入第四步，实际启动一个会话并运行代理。把这整个入口函数想象成我们代理的启动按钮。当有人想要对话时，它会启动一切并让代理准备好交谈。这个入口函数做三件主要的事情：首先，它把代理连接到一个虚拟房间，对话将在那里进行，就像拨入一个电话会议；然后，它会用我们刚配置的设置创建一个销售代理实例；最后，它会启动一个会话来管理来回的对话。

解析：
* **entry point function** 🔥：入口函数
* **kick off**：启动、开始
* **virtual room**：虚拟房间
* **dialing into a conference call**：拨入电话会议
* **instance**：实例（编程术语）
* **back and forth**：来回的

---

(24) [20:51-21:17] **And so that is it for the basis or like I guess the main framework for how you would set up a sales agent. But to make this project a little more robust, we're actually going to talk about one a few ways that you can expand your sales agent. So here's one example. Yeah. So one thing you can do um to expand our single agent into a multi-agent system is um to just you know if someone calls asking really deep technical questions about API integrations you really want them talking to your best technical person and not just your pricing specialist.**

这就是设置销售代理的基础或者说主要框架。但为了让这个项目更健壮，我们实际上要讨论几种扩展销售代理的方法。这是一个例子。你可以做的一件事是把我们的单个代理扩展成一个多代理系统。比如如果有人打电话问关于 **API** 集成的深度技术问题，你真的希望他们和你最好的技术人员交谈，而不只是定价专员。

解析：
* **robust**：形容词，健壮的、稳健的
* **multi-agent system** 🔥：多代理系统
* **API integrations**：API 集成

---

(25) [21:17-22:07] **Um again all LLMs have limited context windows which means that similar to people they have limits on the amount of things that they can actually specialize. Um and here are the three other agents in addition to that single agent that um the starter code has just helped you guys run. Um three of the different agents that we propose in this case are um greeting agents um our main sales agent who qualifies leads. We have a technical specialist agent as you can see on the left um who are obviously specialized in solving technical issues is the intent and then finally we have the pricing specialist agent on the right which handles budget ROI and also deal negotiations.**

另外所有 **LLM** 都有有限的上下文窗口，这意味着和人一样，它们能专精的事情是有限的。这里是除了 starter code 帮你们运行的那个单一代理之外的另外三个代理。我们在这个案例中提出的三种不同代理是：问候代理、负责筛选潜在客户的主销售代理、左边的技术专家代理（显然专门解决技术问题），以及右边的定价专家代理（处理预算、ROI 和交易谈判）。

解析：
* **context window**：上下文窗口（LLM 能处理的最大文本长度）
* **specialize**：动词，专精、专门从事
* **qualifies leads** 🔥：筛选潜在客户（销售术语）
* **ROI (Return on Investment)**：投资回报率
* **deal negotiations**：交易谈判

---

(26) [22:07-22:32] **So the main thing that you want to think about here is you know on a real sales team you want or any like multi-agent system you want all of your agents to be able to do very different things. And so one of the key things in this um implementation is that we have a handoff. So our greeting agent is what figuring out what the customer actually needs and then being able to route to the um to the relevant sub agent.**

这里你要考虑的主要事情是，在一个真正的销售团队或任何多代理系统中，你希望所有代理能做非常不同的事情。这个实现中的一个关键点是我们有一个交接机制。我们的问候代理会弄清楚客户实际需要什么，然后能够路由到相关的子代理。

解析：
* **handoff** 🔥：交接（把对话转交给另一个代理）
* **route to**：路由到、转接到
* **sub agent**：子代理

---

(27) [22:32-23:07] **And the code for all of these different agents is fully fleshed out in the notebook as well. And then the last thing of course is you can is adding tool calling. So for example when a customer asks about technical details you know we can properly route and then this is also implemented as well in the code notebook. And that is it. So thank you guys so much for coming. Um all again all of the notebook with all the instructions and the step by step is in the notebook that we've provided and have built. Um and we'll be up here to answer any questions that you guys might have. Thank you guys.**

所有这些不同代理的代码在 notebook 里都有完整实现。最后一件事当然是添加工具调用。例如当客户问技术细节时，我们可以正确路由，这在代码 notebook 里也有实现。就是这样了！非常感谢大家的到来。所有的 notebook、所有的说明和步骤都在我们提供和构建的 notebook 里。我们会在这里回答你们可能有的任何问题。谢谢大家！

解析：
* **fleshed out** 🔥：完整实现、充实完善
* **tool calling**：工具调用（让 LLM 调用外部工具/函数）
* **step by step**：一步一步

---

## 📚 段落小结

这段视频详细讲解了语音代理的三个核心阶段：**监听阶段**（STT + 轮次检测）、**思考阶段**（LLM 推理）和**说话阶段**（TTS 流式输出）。介绍了 **LiveKit** 作为实时基础设施平台，使用 **WebRTC** 协议实现低于 100ms 延迟的语音传输。然后演示了如何通过加载业务上下文（产品信息、定价、异议处理）来训练销售代理，并讲解了代码实现的四个关键组件。最后扩展到多代理系统架构，包括问候代理、技术专家代理和定价专家代理的分工协作。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **STT/TTS** | 语音转文字 / 文字转语音 |
| **VAD** | 语音活动检测 |
| **utterance** | 话语、发言（语音处理术语） |
| **orchestration** | 编排、协调 |
| **WebRTC** | 网页实时通信协议 |
| **hallucination** | 幻觉（AI 编造信息） |
| **objections** | 异议、反对意见（销售术语） |
| **wire together** | 连接在一起 |
| **handoff** | 交接（代理间转接） |
| **qualifies leads** | 筛选潜在客户 |
| **tool calling** | 工具调用 |
| **fleshed out** | 完整实现、充实完善 |
