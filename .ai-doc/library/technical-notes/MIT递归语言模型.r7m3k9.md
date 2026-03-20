# 🎯 MIT 递归语言模型解决上下文窗口问题 英语段落翻译

本文共 **33 个语义单元**，将全部翻译。

---

(1) [0:00-0:17] **MIT might have just solved the context window problem. Just a few days ago, MIT released a technical paper claiming that through their system of recursive language models, they've made giant steps forward in solving one of the biggest issues in the AI space today, context rot.**

**MIT** 可能刚刚解决了上下文窗口问题。就在几天前，**MIT** 发布了一篇技术论文，声称他们通过递归语言模型系统，在解决当今 AI 领域最大的问题之一——**context rot**（上下文腐烂）方面取得了巨大进展。

解析：
* **context window** /ˈkɒntekst ˈwɪndəʊ/：名词短语，上下文窗口（AI 术语，指模型能处理的文本长度限制）
* **claiming that**：声称，主张（后接宾语从句）
* **giant steps forward** 🔥：巨大的进步（比 big progress 更生动）
* **context rot**：上下文腐烂（AI 术语，指随着上下文变长，模型性能下降的现象）

---

(2) [0:17-0:36] **Now, context rot is something we have known about for a while. Just this past summer, Chroma did a deep dive on this topic and the results we got were that context window length doesn't actually matter. Whether it's 200,000 tokens or a million tokens, the effectiveness of your large language model is going to drop after about 100,000 tokens.**

**context rot** 是我们已经知道一段时间的问题了。就在今年夏天，**Chroma** 对这个话题做了深入研究，得出的结论是：上下文窗口长度实际上并不重要。无论是 20 万 tokens 还是 100 万 tokens，你的大语言模型的效果在大约 10 万 tokens 之后就会下降。

解析：
* **for a while**：一段时间
* **deep dive** 🔥：深入研究、深入探讨（口语化表达，非常实用）
* **effectiveness** /ɪˌfekˈtɪvnəs/：名词，有效性、效果
* **token**：名词，令牌（AI 术语，文本的最小处理单位）

---

(3) [0:39-0:58] **However, in this paper from MIT, their recursive language model setup is showing high performance that not 200,000 tokens, not a million tokens, but when dealing with data sets of over 10 million tokens. Those numbers are absolutely insane. So, how did they actually achieve this? And what does this mean for you? Well, that's exactly what we're going to cover today.**

然而，在这篇 **MIT** 的论文中，他们的递归语言模型设置展示了高性能——不是 20 万 tokens，不是 100 万 tokens，而是在处理超过 1000 万 tokens 的数据集时。这些数字简直疯狂。那么，他们到底是如何做到的？这对你意味着什么？这正是我们今天要讲的内容。

解析：
* **recursive** /rɪˈkɜːsɪv/：形容词，递归的（计算机术语）
* **setup** /ˈsetʌp/：名词，设置、配置
* **absolutely insane** 🔥：绝对疯狂的（口语化强调，表示难以置信）
* **cover**：动词，涵盖、讲解

---

(4) [0:59-1:14] **So, let's hop into this paper. So, this is the paper from MIT. It's titled recursive language models. And recursive language models are what this whole thing is all about and how they use RLMs to deal with very large prompts that otherwise these models couldn't handle just due to the size.**

那我们来看看这篇论文。这是来自 **MIT** 的论文，标题是"递归语言模型"。递归语言模型正是这一切的核心，以及他们如何使用 **RLM** 来处理那些因为体积太大而模型无法处理的超大提示词。

解析：
* **hop into** 🔥：跳入、开始（口语化，比 start 更生动活泼）
* **titled**：动词过去分词，标题为...
* **prompt** /prɒmpt/：名词，提示词（AI 术语）
* **otherwise**：副词，否则、不然
* **due to**：介词短语，由于

---

(5) [1:14-1:32] **So imagine we're using GPT5 which is what they use in this study. It has a context window length of 272,000 tokens yet using RLMs it's able to handle data sets that are 10 million plus tokens long. How does it do that? Well, that's what this paper is all about.**

想象一下我们正在使用 **GPT5**，这正是他们在研究中使用的模型。它的上下文窗口长度是 27.2 万 tokens，但通过使用 **RLM**，它能够处理超过 1000 万 tokens 的数据集。它是怎么做到的？这正是这篇论文的全部内容。

解析：
* **yet**：连词，然而、但是（表转折）
* **be able to**：能够（与 can 同义，但更正式）
* **plus**：副词，超过、以上

---

(6) [1:32-1:54] **And let's start with the actual results. So, let's start by just looking at these two graphs because it kind of illustrates this entire study pretty succinctly. So, on the left we have GPT5 and that's just the base model. So, imagine you're just kind of inside of ChatGPT's interface. And then on the right, we have the RLM version. Now, it shows two different tests. The first test is a very simplistic test and they both absolutely crush it.**

让我们从实际结果开始。让我们先看看这两张图表，因为它们相当简洁地说明了整个研究。左边是 **GPT5**，就是基础模型，可以想象成你在 **ChatGPT** 界面里。右边是 **RLM** 版本。它展示了两个不同的测试。第一个测试非常简单，两个模型都完全碾压了它。

解析：
* **illustrate** /ˈɪləstreɪt/：动词，说明、阐述
* **succinctly** /səkˈsɪŋktli/：副词，简洁地
* **base model**：基础模型
* **simplistic** /sɪmˈplɪstɪk/：形容词，过于简单的
* **crush it** 🔥：动词短语，碾压、轻松搞定（口语化表达）

---

(7) [1:55-2:14] **It's called a needle in the haystack test. It's essentially giving the large language model a large document and somewhere buried in that document is the answer to your question. So in the document it says my favorite color is yellow. I ask the LLM what's my favorite color? It comes back with yellow. These systems, these frontier models are very good at this no matter the context length because it's such a simple ask.**

这叫做"大海捞针"测试。本质上就是给大语言模型一个大文档，答案埋藏在文档的某个地方。比如文档里写着"我最喜欢的颜色是黄色"，我问 **LLM** 我最喜欢什么颜色，它回答黄色。这些系统，这些前沿模型在这方面非常擅长，无论上下文多长，因为这是一个如此简单的请求。

解析：
* **needle in the haystack** 🔥：习语，大海捞针（haystack = 干草堆）
* **buried** /ˈberid/：动词过去分词，埋藏的
* **frontier models**：前沿模型（指最先进的 AI 模型）
* **ask**：这里作名词，请求、要求

---

(8) [2:14-2:43] **Yet if we give it a more complicated task like the Olong tasks, you start to see this idea of context rot and how RLMs are able to sort of ignore that problem. So the olong test to put it simply is when they give the AI system a data set and then they ask the AI to find all the combinations of the entries inside that data set that meet certain criteria. The Olong pairs test then essentially ramps up the complexity of that task.**

但如果我们给它一个更复杂的任务，比如 **Olong** 任务，你就会开始看到 **context rot** 这个概念，以及 **RLM** 是如何忽略这个问题的。简单来说，**Olong** 测试是给 AI 系统一个数据集，然后要求 AI 找出数据集中满足特定条件的所有条目组合。**Olong pairs** 测试则进一步提升了任务的复杂度。

解析：
* **sort of**：副词短语，有点、某种程度上
* **to put it simply** 🔥：简单来说（非常实用的过渡短语）
* **combination** /ˌkɒmbɪˈneɪʃn/：名词，组合
* **entry** /ˈentri/：名词，条目、项
* **criteria** /kraɪˈtɪəriə/：名词，标准、条件（criterion 的复数）
* **ramp up** 🔥：动词短语，加速、提升

---

(9) [2:43-3:07] **And so you can see with this sort of test context rot at work as we increase the input context length here on the bottom axes the effectiveness the score drops dramatically. Right? And it stops exactly at the context window length. And here it shows 262. Now, if we look at the RLM, first of all, notice we don't stop at 262. This pushes all the way to 1 million.**

你可以看到在这种测试中 **context rot** 是如何起作用的——当我们增加底部坐标轴上的输入上下文长度时，效果分数急剧下降。对吧？而且它正好在上下文窗口长度处停止，这里显示的是 262（千）。现在如果我们看 **RLM**，首先注意我们不会在 262 处停止，而是一直推进到 100 万。

解析：
* **at work**：短语，在起作用、在运作
* **axes** /ˈæksiːz/：名词，轴（axis 的复数）
* **dramatically** /drəˈmætɪkli/：副词，急剧地、显著地
* **push all the way to** 🔥：一直推进到

---

(10) [3:07-3:31] **So, we can handle a much larger data set. Secondly, notice the score. The score doesn't drop nearly as much. And at a certain point, it almost sort of levels off. As we go from 1 million to 262, it's virtually the same. And if you look at olong pairs, right, we're sitting at about what 50 here on RLM. We're at zero over here on the left. That is a wild difference.**

所以我们能处理大得多的数据集。其次，注意分数。分数的下降幅度远没有那么大。而且在某个点，它几乎趋于平稳。从 100 万到 262（千），基本上是一样的。如果你看 **Olong pairs**，**RLM** 这边大约是 50 分，左边基础模型是零分。这是一个巨大的差距。

解析：
* **nearly as much**：远没有那么多
* **level off** 🔥：动词短语，趋于平稳、稳定下来
* **virtually** /ˈvɜːtʃuəli/：副词，几乎、实际上
* **wild difference** 🔥：巨大的差异（wild 在口语中表示"惊人的"）

---

(11) [3:31-4:08] **And let's break down these numbers a little bit more. Here's some more results of four different tests. So it shows the Qwen 3 coder and GPT5. They ran the study on both models, but for today's discussion, we're just going to focus on GPT5. So I have the base model highlighted and the RLM highlighted. Same two models you saw before. And the two tests I want to bring to your attention are the browse comp and olong pairs. So we already saw olong pairs before. And the interesting thing about olong pairs is the task length aka the data set is pretty small 32k. Yet RLM crushes the base model 58 versus 04.**

让我们更详细地分解这些数字。这是四个不同测试的更多结果。它显示了 **Qwen 3 coder** 和 **GPT5**。他们在两个模型上都进行了研究，但今天的讨论我们只关注 **GPT5**。我标注了基础模型和 **RLM**，就是你之前看到的那两个模型。我想让你注意的两个测试是 **browse comp** 和 **Olong pairs**。我们之前已经看过 **Olong pairs** 了。有趣的是 **Olong pairs** 的任务长度，也就是数据集相当小，只有 32k。但 **RLM** 碾压了基础模型，58 对 04。

解析：
* **break down**：动词短语，分解、详细分析
* **highlight** /ˈhaɪlaɪt/：动词，标注、突出显示
* **bring to your attention** 🔥：让你注意到（正式但常用的表达）
* **aka** /ˌeɪkeɪˈeɪ/：also known as 的缩写，又名、也就是
* **versus** /ˈvɜːsəs/：介词，对比、相对于

---

(12) [4:08-4:18] **Which is very interesting because like I talked about in the beginning the RLM was supposed to deal with huge context window length issues right yet when we look at a smaller task it's still way more effective which is very interesting.**

这非常有趣，因为正如我开头说的，**RLM** 本来是用来处理巨大的上下文窗口长度问题的，对吧？但当我们看一个较小的任务时，它仍然有效得多，这非常有趣。

解析：
* **be supposed to**：应该、本来是用来
* **way more** 🔥：口语化表达，远远更...（比 much more 更口语）

---

(13) [4:19-4:52] **Now, if we look at browse comp, we're on the other end of the spectrum and we're dealing with a massive task length, right? 11 million tokens, right? You know, 20 what 40 times the context length essentially, right? Quick math there. The base model can't even deal with it. And of note, what this test is, it's kind of like needle in the haystack except instead of one document, it's 100 documents and it also needs to not only find things inside those documents, but sort of synthesize it to get the answer.**

现在如果我们看 **browse comp**，我们处于另一个极端，在处理一个巨大的任务长度，对吧？1100 万 tokens，大约是上下文长度的 20 到 40 倍，快速心算一下。基础模型根本无法处理。值得注意的是，这个测试有点像"大海捞针"，只不过不是一个文档而是 100 个文档，而且不仅需要在这些文档中找到东西，还需要综合信息来得出答案。

解析：
* **on the other end of the spectrum** 🔥：在另一个极端（非常实用的表达）
* **massive** /ˈmæsɪv/：形容词，巨大的
* **of note**：值得注意的是
* **synthesize** /ˈsɪnθəsaɪz/：动词，综合、合成

---

(14) [4:46-5:08] **So, the base model can't handle it, right? Can't handle it at all. Yet the RLM scored 91. So what do we see here from the results? Right? We see a system that can not only handle huge tasks but perform more effectively at very complicated tasks at small token lengths, right? Crazy stuff. So this then begs the question, what the heck are RLMs and how do they work?**

所以基础模型根本处理不了，对吧？完全处理不了。但 **RLM** 得分 91。那么我们从这些结果中看到了什么？我们看到一个系统不仅能处理巨大的任务，而且在小 token 长度的复杂任务上也表现得更有效，对吧？太疯狂了。这就引出了一个问题：**RLM** 到底是什么，它们是如何工作的？

解析：
* **beg the question** 🔥：引出问题（注意：这是口语用法，在正式逻辑学中有不同含义）
* **what the heck** 🔥：到底（口语化，比 what 更强调惊讶或困惑）

---

(15) [5:08-5:28] **So this is the RLM. It's pretty self-explanatory. So I'll just leave this on the screen for like 15 seconds and then we'll just continue on. I'm just kidding. This is actually very complicated and convoluted at first, right?**

这就是 **RLM**。它非常一目了然，所以我就把它放在屏幕上大概 15 秒，然后我们继续。开玩笑的。实际上这东西一开始非常复杂和令人费解，对吧？

解析：
* **self-explanatory** /ˌselfɪkˈsplænətri/：形容词，不言自明的、一目了然的
* **convoluted** /ˈkɒnvəluːtɪd/：形容词，复杂费解的、迂回的
* **I'm just kidding**：开玩笑的（常用口语）

---

(16) [5:26-6:09] **The way they describe it is right here. Right? Again, very very self-explanatory. So, it's a recursive language model treats prompts as part of the environment. It loads the input prompt as a variable inside a Python REPL environment and writes code to peek into, decompose, and invoke itself recursively over programmatic snippets of the variable. Duh. Easy, right? Light work. But actually simpler than it sounds. And let me explain it. And as I walk through this explanation, let me caution you. You're going to be very confused at first. Yet by the end, you're just going to be like, "Oh, duh." Obviously, and I guarantee you there'll be like 20 people in the comments like, "This is how I already do it."**

他们的描述在这里。再次说明，非常一目了然。递归语言模型把提示词当作环境的一部分。它在 **Python REPL** 环境中把输入提示词作为一个变量加载，然后编写代码来查看、分解，并在变量的程序片段上递归调用自己。简单吧？小菜一碟。但实际上比听起来简单。让我解释一下。在我讲解的过程中，我要提醒你，你一开始会非常困惑。但到最后，你会恍然大悟："哦，原来如此！"我保证评论区会有 20 个人说："我早就是这么做的了。"

解析：
* **REPL** /ˈrepəl/：Read-Eval-Print Loop 的缩写，读取-求值-打印循环（编程术语）
* **peek into**：动词短语，窥视、查看
* **decompose** /ˌdiːkəmˈpəʊz/：动词，分解
* **invoke** /ɪnˈvəʊk/：动词，调用（编程术语）
* **snippet** /ˈsnɪpɪt/：名词，片段、代码片段
* **Duh** 🔥：感叹词，表示"这不是显而易见吗"（讽刺用法）
* **light work** 🔥：小菜一碟、轻松搞定
* **caution** /ˈkɔːʃn/：动词，提醒、警告

---

(17) [6:09-6:31] **So you'll understand by the end. So first things first, they're doing this inside of a Python environment. What does that mean? For all intents and purposes, they're doing the study on a computer that's running Python and GPT5 can interact with Python and it can have Python run code for it. Okay, so in this example, we have GPT5 over here, 272 context. It's our primary large language model. We want to have GPT5 answer some questions about our very large document.**

所以你最终会理解的。首先，他们是在 **Python** 环境中做这些的。这是什么意思？实际上，他们是在一台运行 **Python** 的电脑上进行研究，**GPT5** 可以与 **Python** 交互，可以让 **Python** 为它运行代码。在这个例子中，我们这边有 **GPT5**，272（千）上下文，是我们的主要大语言模型。我们想让 **GPT5** 回答一些关于我们超大文档的问题。

解析：
* **first things first** 🔥：首先、首要的事情先做（常用表达）
* **for all intents and purposes** 🔥：实际上、从各方面来说
* **interact with**：与...交互

---

(18) [6:35-7:38] **In this case, we're going to say we wanted to answer questions about War and Peace, a huge novel that we are going to say is 1 million tokens. Obviously, it's probably in the training data. Assume it's not in the training data. And I can't, right? I can't just take this million token document and shove it into ChatGPT. I can't just drop it into the chat window. That won't work. So, how do I actually get accurate answers from this document? This is where the RLM system comes in. So, as they stated, we are going to programmatically figure out what's in that document first. What does that mean? That means our system, our GPT5 is going to have Python run some code to give us some information about this document. And by information, I mean it's going to run some code for us. So essentially what the model is going to do in this RLM system is it's going to get sort of like a reconnaissance of the huge document. It's going to see what the lay of the land is and how it can sort of piecemeal this.**

在这个例子中，假设我们想回答关于《战争与和平》的问题，这是一部巨大的小说，我们假设它有 100 万 tokens。显然它可能在训练数据中，但假设它不在。我不能直接把这个 100 万 tokens 的文档塞进 **ChatGPT**，不能直接丢进聊天窗口，那行不通。那我怎么才能从这个文档中得到准确的答案呢？这就是 **RLM** 系统发挥作用的地方。正如他们所说，我们要首先通过编程方式弄清楚这个文档里有什么。这是什么意思？意思是我们的系统，我们的 **GPT5** 会让 **Python** 运行一些代码来给我们一些关于这个文档的信息。本质上，在这个 **RLM** 系统中，模型要做的是对这个巨大文档进行一次侦察，看看整体情况是什么样的，以及如何把它拆分处理。

解析：
* **shove** /ʃʌv/：动词，塞、推（口语化）
* **programmatically** /ˌprəʊɡrəˈmætɪkli/：副词，以编程方式
* **figure out** 🔥：动词短语，弄清楚、搞明白
* **reconnaissance** /rɪˈkɒnɪsəns/：名词，侦察（原为军事术语）
* **the lay of the land** 🔥：习语，形势、整体情况
* **piecemeal** /ˈpiːsmiːl/：副词/动词，逐步地、一点一点地处理

---

(19) [7:39-8:06] **So in our case, we're saying, "Hey, we want our main prompt is I want you to break down every interaction involving Napoleon in War and Peace." So our system's just going to run some Python and get some information. In this case, what it wants to know is what's the length of this book and can we sort of break it down into component parts? That is literally what you see in blue. That's one line of code. So seven tokens have been used.**

在我们的例子中，我们说："嘿，我们的主要提示词是让你分解《战争与和平》中涉及拿破仑的每一次互动。"所以我们的系统只需要运行一些 **Python** 代码来获取信息。在这个情况下，它想知道的是这本书有多长，以及我们能否把它分解成组成部分。这就是你看到的蓝色代码，就一行代码，只用了 7 个 tokens。

解析：
* **break down**：动词短语，分解、拆分
* **interaction** /ˌɪntərˈækʃn/：名词，互动、交互
* **involving** /ɪnˈvɒlvɪŋ/：介词，涉及
* **component parts**：组成部分

---

(20) [8:06-8:28] **And what we get back from Python isn't the whole document. We just get the information we need. So, it's going to tell us, hey, you're dealing with 2.4 million characters. And by the way, you wanted the first thousand words in the document. Well, here they are. So, it realizes, here's how big it is. Here's the first like couple pages. Okay, it has chapters. Well, let's break it down into chapters and then figure out which chapters include Napoleon in there.**

我们从 **Python** 得到的不是整个文档，我们只得到需要的信息。它会告诉我们：嘿，你在处理 240 万个字符。顺便说一下，你想要文档的前一千个单词，给你。所以它意识到，这是文档的大小，这是前几页。好的，它有章节。那让我们按章节分解，然后找出哪些章节包含拿破仑。

解析：
* **deal with**：处理、应对
* **by the way** 🔥：顺便说一下（非常常用的口语表达）
* **a couple of**：几个（口语中常省略 of）
* **figure out**：弄清楚

---

(21) [8:28-8:55] **Okay, it's doing this just through Python. That's just a couple lines of code. And Python is going to bring back that information. And that information is what you see here, right? It's going to say, "Hey, in that book I found Napoleon in chapters 3, 7, 12, 15, 18, 24, blah blah blah blah blah." So when we say, "Hey, these RLMs interact programmatically with the document." That's what we're saying. So GPT5 created the code, Python ran the code, and now it got that information back about Napoleon's in these chapters.**

它只是通过 **Python** 来做这些，就几行代码。**Python** 会把信息带回来，这些信息就是你在这里看到的。它会说："嘿，在那本书里我在第 3、7、12、15、18、24 章等等找到了拿破仑。"所以当我们说"这些 **RLM** 以编程方式与文档交互"，这就是我们的意思。**GPT5** 创建了代码，**Python** 运行了代码，现在它得到了关于拿破仑在哪些章节的信息。

解析：
* **bring back**：带回来
* **blah blah blah** 🔥：等等等等（口语中表示省略后续内容）
* **interact with**：与...交互

---

(22) [8:55-9:29] **Now what happens, right? Imagine your GPT5, you know, it's in that book, but I can't take all that information in. I can't even take in that chapter by chapter. That's still too much. So what do we do? Well, this is where the recursive part of the recursive language model comes in. And that's just a fancy way of saying our large language model is going to spawn little sub-agents, right? You see GPT5 mini, that's the recursive section, right? It's just going to do tool calls to smaller versions of itself to handle all this chapter information.**

现在会发生什么？想象你是 **GPT5**，你知道信息在那本书里，但我无法吸收所有信息，我甚至无法逐章节地吸收，那还是太多了。那我们怎么办？这就是递归语言模型中"递归"部分发挥作用的地方。这只是一种花哨的说法，意思是我们的大语言模型会生成小的子代理。你看 **GPT5 mini**，那就是递归部分。它只是对自己的小版本进行工具调用来处理所有这些章节信息。

解析：
* **take in**：吸收、接收
* **chapter by chapter**：逐章节地
* **a fancy way of saying** 🔥：一种花哨的说法（表示"说白了就是..."）
* **spawn** /spɔːn/：动词，生成、产生
* **sub-agent**：子代理
* **tool call**：工具调用（AI 术语）

---

(23) [9:29-10:10] **So I need to know about Napoleon in chapter 3. Yet I can't put all of chapter 3 and 7 and 12 into here. So instead, we're going to take chapter 3 and we're going to give it to GPT5 mini down here, right, as a tool call. So GPT5 Mini is now looking at all chapter 3. It gets the answer. Napoleon did this in chapter 3 and it sends that answer back. We then repeat this process over and over and over. So I need chapter 7. Okay, GPT5 mini number two, you're up. Here's chapter 7. Figure out what the answer is. Send it back to me. And it does it over and over again and you eventually get your answer.**

我需要知道第 3 章中关于拿破仑的内容，但我无法把第 3、7、12 章全部放进来。所以我们要把第 3 章拿出来，作为工具调用传给下面的 **GPT5 mini**。所以 **GPT5 mini** 现在在看整个第 3 章，它得到答案：拿破仑在第 3 章做了这些，然后把答案发回来。我们一遍又一遍地重复这个过程。我需要第 7 章。好的，**GPT5 mini** 二号，轮到你了。这是第 7 章，找出答案，发回给我。它一遍又一遍地这样做，最终你得到了答案。

解析：
* **instead**：副词，相反、取而代之
* **you're up** 🔥：轮到你了（口语化表达）
* **over and over (again)** 🔥：一遍又一遍地
* **eventually** /ɪˈventʃuəli/：副词，最终

---

(24) [10:10-10:43] **And so what we've done, right, and I said this actually isn't that complicated. All we've done is we've taken this giant document and we're just chunking it up essentially, right? We're smartly chunking it up because of this code we ran at the beginning, but we're just chunking it up and we're giving each chunk to essentially a sub-large language model that we've used as a tool call. That's it. That's recursive language models. We're just offloading the context to some little mini agent that we're using as a tool call. That's it. That's RLMs in a nutshell.**

所以我们做了什么呢？我说过这实际上并不复杂。我们所做的就是把这个巨大的文档分块，对吧？因为我们一开始运行的代码，我们是智能地分块，但本质上就是分块，然后把每个块交给一个子大语言模型，我们把它作为工具调用来使用。就是这样。这就是递归语言模型。我们只是把上下文卸载给一些小的迷你代理，作为工具调用来使用。就这样。这就是 **RLM** 的简要概述。

解析：
* **chunk up** 🔥：动词短语，分块、切块
* **smartly**：副词，智能地、聪明地
* **offload** /ˌɒfˈləʊd/：动词，卸载、转移（负担）
* **in a nutshell** 🔥：简而言之、概括地说（非常实用的表达）

---

(25) [10:43-11:02] **Okay. So if you've ever used a sub-agent in Claude Code to do something on your behalf because you didn't want all that context to go in the main context window, you've kind of been using some of the fundamentals of these RLM systems, right? That's all it is.**

如果你曾经在 **Claude Code** 中使用过子代理来代替你做一些事情，因为你不想让所有上下文都进入主上下文窗口，那你实际上就已经在使用这些 **RLM** 系统的一些基本原理了，对吧？就是这么回事。

解析：
* **on your behalf** 🔥：代表你、替你（正式但常用的表达）
* **fundamentals** /ˌfʌndəˈmentlz/：名词，基本原理、基础

---

(26) [11:02-11:30] **And this is just one recursion layer deep. Okay? And they only did one recursion layer deep in the study. And they talked about in theory they would like to see people go deeper. And what do I mean by that? Well, imagine, hey, remember I said we have chapter 3. Well, let's say I gave chapter three to this guy. What if chapter 3 is too big? Well, if chapter 3 is too big, well, we could just repeat this process with this guy where it does like, you know, act one of chapter 3, act two, act three, and that becomes another mini, right?**

这只是一层递归深度。他们在研究中只做了一层递归深度，他们提到理论上他们想看到人们做得更深。我这是什么意思呢？想象一下，记得我说的第 3 章吗？假设我把第 3 章给了这个家伙。如果第 3 章太大怎么办？如果第 3 章太大，我们可以用这个家伙重复这个过程，让它处理第 3 章的第一幕、第二幕、第三幕，然后那又变成另一个迷你版本，对吧？

解析：
* **recursion layer**：递归层
* **go deeper**：更深入
* **act**：名词，幕（戏剧术语，这里指章节的子部分）

---

(27) [11:28-11:53] **And it just repeats the same process. It's just LLMs all the way down. So, all that to say is that is how the recursive language model works. We have a big document. We have our large language model. We use code to figure out how we can sort of break down this huge document and then we spawn miniature versions of our large language model, GPT5 mini in the case of the study, to handle those individual sections that give us the answer.**

它只是重复同样的过程。一直是 **LLM** 套娃。总之，这就是递归语言模型的工作原理。我们有一个大文档，我们有大语言模型，我们用代码来弄清楚如何分解这个巨大的文档，然后我们生成大语言模型的迷你版本——在这个研究中是 **GPT5 mini**——来处理那些给我们答案的各个部分。

解析：
* **all the way down** 🔥：一直往下、彻底地（这里指"套娃"）
* **all that to say** 🔥：总之、简言之
* **miniature** /ˈmɪnətʃə/：形容词，微型的、迷你的

---

(28) [11:53-12:15] **It gets aggregated and that way our guy over here is able to handle these huge prompts without ever actually ingesting them, right? Because he's kind of a liar and he just has everyone else do his work for him and then claims he did it at the end. That's RLMs.**

答案被聚合起来，这样我们这边的家伙就能处理这些巨大的提示词，而实际上从未真正吸收它们。因为他有点像个骗子，让别人替他干活，最后却声称是他自己做的。这就是 **RLM**。

解析：
* **aggregate** /ˈæɡrɪɡeɪt/：动词，聚合、汇总
* **ingest** /ɪnˈdʒest/：动词，摄取、吸收（这里指处理数据）
* **liar** /ˈlaɪə/：名词，骗子
* **claim** /kleɪm/：动词，声称

---

(29) [12:12-12:43] **And that is essentially what this picture and these next few paragraphs are explaining. That's all it is. Which is why I guarantee you someone in the comments like I already do that. Yeah. Okay. But for the rest of you, hopefully that kind of made sense. And hopefully that sort of explained why it's able to do these things so well because it never has to deal with context rot because we just keep splitting the context up so many times amongst so many, you know, call them sub-agents, call it whatever you want.**

这基本上就是这张图和接下来几段在解释的内容。就这么简单。这就是为什么我保证评论区会有人说"我早就这么做了"。是啊，好吧。但对于其他人，希望这讲得有点道理。也希望这解释了为什么它能把这些事情做得这么好——因为它永远不需要处理上下文腐烂，因为我们不断地把上下文拆分成很多份给很多个，你知道的，叫它们子代理也好，叫什么都行。

解析：
* **make sense** 🔥：有道理、讲得通
* **deal with**：处理、应对
* **split up**：分割、拆分
* **amongst**：介词，在...之中（= among）

---

(30) [12:43-13:04] **Right, we've essentially spread this giant 1 million context document so thin that everyone can work on it effectively. And the way they describe that concept in here is they say the long prompts aka the large documents should not be fed into the neural network. Aka don't just dump them into the large language model, but should instead be treated as part of the environment that the large language model can symbolically interact with.**

我们实际上把这个 100 万上下文的巨大文档分摊得如此之薄，以至于每个人都能有效地处理它。他们在这里描述这个概念的方式是：长提示词，也就是大文档，不应该直接喂给神经网络。也就是说，不要直接把它们倾倒进大语言模型，而应该把它们当作环境的一部分，让大语言模型可以符号化地与之交互。

解析：
* **spread thin** 🔥：分摊得很薄、稀释
* **feed into**：喂给、输入到
* **neural network**：神经网络
* **dump** /dʌmp/：动词，倾倒、丢弃
* **symbolically** /sɪmˈbɒlɪkli/：副词，符号化地

---

(31) [13:09-13:36] **Right? When we say it's part of the environment, it's just something it knows exists, right? It can interact with this thing. It just doesn't pull it all in. That's what this paper is saying. And the paper goes on to make these observations that essentially reinforce everything I just told you, namely that they can scale to 10 million token regimes and outperform these base LMs. They also talk about the recursive sub-calling of RLMs providing strong benefits on information-dense inputs.**

当我们说它是环境的一部分时，它只是知道这东西存在，对吧？它可以与这东西交互，只是不会把它全部拉进来。这就是这篇论文在说的。论文继续做出了这些观察，基本上强化了我刚才告诉你的一切，即它们可以扩展到 1000 万 tokens 的范围并超越这些基础大语言模型。他们还谈到 **RLM** 的递归子调用在信息密集型输入上提供了强大的好处。

解析：
* **pull in**：拉进来、吸收
* **observation** /ˌɒbzəˈveɪʃn/：名词，观察、发现
* **reinforce** /ˌriːɪnˈfɔːs/：动词，强化、加强
* **namely**：副词，即、也就是
* **regime** /reɪˈʒiːm/：名词，范围、体制
* **outperform** /ˌaʊtpəˈfɔːm/：动词，超越、表现优于
* **information-dense**：信息密集型的

---

(32) [13:32-14:02] **And I want to take a second to talk about this because I think at this point you're like, okay, this is awesome. Like how do I actually recreate this? How can I actually take these fundamentals? I think the idea of sub-calling right really in context of something like Claude Code like sub-agents, I think is really where you can see something like this work. Again, observation three: the RLM not only scales better on large context stuff but it also performs better on the small context stuff if it's very complicated, right, this olong stuff.**

我想花一秒钟谈谈这个，因为我觉得到这个点上你会想，好的，这太棒了，我怎么实际重现这个？我怎么实际运用这些基本原理？我认为子调用这个想法，特别是在 **Claude Code** 的子代理这样的场景下，真的是你能看到这类东西发挥作用的地方。再看观察三：**RLM** 不仅在大上下文内容上扩展得更好，而且在非常复杂的小上下文内容上也表现更好，就是这个 **Olong** 测试。

解析：
* **take a second**：花一点时间
* **recreate** /ˌriːkriˈeɪt/：动词，重现、再创造
* **scale** /skeɪl/：动词，扩展、缩放

---

(33) [14:00-14:45] **And again this paper just goes on and on about this. There's also some interesting stuff that it tends to actually be cheaper too. And really I think this paper and this whole context window stuff is just where this whole space is going and you're seeing it all over the place. Things like the Ralph loop, things like GSD, it's all about context window management and how that changes your outputs. And right here, what we're seeing is we're seeing just sort of some of the code stuff that I talked about earlier. So, I will put a link to this paper inside the description. Definitely check it out. I think the stuff is just really interesting. Obviously, this field is changing by the day, but definitely read it, take a look at it. Wild stuff and really start to think about how you can integrate these sort of ideas into your own workflows.**

这篇论文继续详细讨论这些内容。还有一些有趣的事情是，它实际上往往更便宜。我真的认为这篇论文和整个上下文窗口的内容正是这个领域的发展方向，你到处都能看到。像 **Ralph loop**、像 **GSD**，都是关于上下文窗口管理以及它如何改变你的输出。在这里，我们看到的就是我之前谈到的一些代码相关的内容。我会在描述中放上这篇论文的链接，一定要看看。我觉得这些东西真的很有趣。显然，这个领域每天都在变化，但一定要读一读、看一看。这是疯狂的东西，真的要开始思考如何把这些想法整合到你自己的工作流程中。

解析：
* **go on and on**：不断地讲、详细讨论
* **tend to**：倾向于
* **all over the place** 🔥：到处、各处
* **by the day** 🔥：每天、日益
* **check it out** 🔥：看看、了解一下（口语化）
* **integrate** /ˈɪntɪɡreɪt/：动词，整合、融入
* **workflow** /ˈwɜːkfləʊ/：名词，工作流程

---

## 📚 段落小结

这段视频完整讲解了 **MIT** 的 **RLM**（递归语言模型）的工作原理。核心思想是：当面对超大文档时，主模型 **GPT5** 不直接吸收全部内容，而是通过 **Python** 代码先"侦察"文档结构，然后将文档智能地分块，每个块交给一个子代理（**GPT5 mini**）处理，最后汇总结果。这就像"让别人干活，自己领功"一样。这种方法不仅能处理超过 1000 万 tokens 的数据集，还能在复杂任务上表现更好，甚至成本更低。作者建议大家可以参考这种思路，在 **Claude Code** 等工具中使用子代理来管理上下文。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **context rot** | 上下文腐烂，随上下文变长性能下降 |
| **context window** | 上下文窗口，模型能处理的文本长度 |
| **recursive** | 递归的 |
| **deep dive** | 深入研究 |
| **needle in the haystack** | 大海捞针 |
| **crush it** | 碾压、轻松搞定 |
| **ramp up** | 加速、提升 |
| **level off** | 趋于平稳 |
| **beg the question** | 引出问题 |
| **light work** | 小菜一碟 |
| **for all intents and purposes** | 实际上 |
| **the lay of the land** | 整体情况、形势 |
| **piecemeal** | 逐步地处理 |
| **chunk up** | 分块、切块 |
| **spawn** | 生成、产生 |
| **sub-agent** | 子代理 |
| **tool call** | 工具调用 |
| **offload** | 卸载、转移负担 |
| **in a nutshell** | 简而言之 |
| **on your behalf** | 代替你、代表你 |
| **a fancy way of saying** | 一种花哨的说法 |
| **all the way down** | 一直往下（套娃） |
| **spread thin** | 分摊得很薄 |
| **by the day** | 每天、日益 |
| **check it out** | 看看、了解一下 |
| **workflow** | 工作流程 |
