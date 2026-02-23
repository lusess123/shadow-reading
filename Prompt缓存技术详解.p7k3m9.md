# 🎯 Prompt Caching 技术详解 英语段落翻译

本文共 **20 个语义单元**，将全部翻译。

---

(1) [0:00-0:12] **Prompt caching can significantly improve the speed and cost effectiveness of large language models. Sounds good. Sign me up. But, um. But what is prompt caching?**

**Prompt caching** 可以显著提升大语言模型的速度和成本效益。听起来不错，算我一个。但是，嗯……**prompt caching** 到底是什么？

解析：
* **significantly** /sɪɡˈnɪfɪkəntli/：副词，显著地、大幅度地
* **cost effectiveness**：短语，成本效益、性价比
* **sign me up** 🔥：口语短语，字面意思是"给我报名"，引申为"算我一个、我要参加"，表示对某事感兴趣

---

(2) [0:13-0:32] **Well, let me start by defining what prompt caching is not. So it is not regular output focused caching. So let me give you an example of that. If you've sent in a query and you've sent that query into, let's say, a database, maybe it's a SQL query.**

好，我先从"什么不是 prompt caching"说起。它不是常规的以输出为中心的缓存。举个例子：假设你发送了一个查询，把这个查询发到一个数据库里，比如说是一个 **SQL** 查询。

解析：
* **let me start by doing sth** 🔥：短语，"让我先从……开始"，常用于演讲开头
* **output focused**：复合形容词，以输出为导向的
* **query** /ˈkwɪri/：名词，查询（数据库术语）

---

(3) [0:33-0:59] **Well, the database is going to process that result and give you the output here. So we've got the result from the database lookup. Now those results they can be stored in a cache. And when somebody else makes that same query soon afterwards, well, we can just kind of skip the lookup and go directly to the result stored in the cache.**

数据库会处理这个请求并给你输出结果。我们从数据库查找中得到了结果。这些结果可以被存储在缓存中。当不久后另一个人发起同样的查询时，我们就可以跳过数据库查找，直接返回缓存中的��果。

解析：
* **lookup** /ˈlʊkʌp/：名词，查找、检索（技术术语）
* **cache** /kæʃ/：名词，缓存（注意发音和 cash 相同）
* **skip** /skɪp/：动词，跳过、省略
* **kind of** 🔥：口语短语，"有点、算是"，用于使表达更随意

---

(4) [1:00-1:27] **Great. Now let's apply this concept to an LLM. So in this case, we have an input prompt that we've received from a user. And that input prompt is sent for processing into a large language model. And then, the large language model is going to process that and send back some sort of output. We'll call this the response from the LLM.**

好的，现在让我们把这个概念应用到 **LLM** 上。在这种情况下，我们有一个从用户那里收到的输入提示词。这个输入提示词被发送到大语言模型中进行处理，然后大语言模型会处理它并返回某种输出，我们称之为 **LLM** 的响应。

解析：
* **apply... to...** 🔥：短语，将……应用到……
* **input prompt**：输入提示词（AI 领域核心术语）
* **some sort of**：短语，某种类型的、某种

---

(5) [1:27-1:53] **Okay. So that's pretty standard practice. But what happens if soon after another user sends in the same prompt? Does that prompt caching mean that we can just kind of skip the LLM call and just go directly to the cached response? No. What I'm describing here is actually called output caching. And it's certainly something that can be done with large language models, but it is not what prompt caching is.**

这是很标准的做法。但如果不久后另一个用户发送了同样的提示词会怎样？**prompt caching** 是不是意味着我们可以直接跳过 **LLM** 调用，直接获取缓存的响应？不是的。我这里描述的实际上叫做**输出缓存**（**output caching**）。这当然可以用在大语言模型上，但它不是 **prompt caching**。

解析：
* **standard practice**：短语，标准做法、常规操作
* **output caching**：输出缓存，缓存模型的完整输出结果
* **certainly** /ˈsɜːrtnli/：副词，当然、确实

---

(6) [1:53-2:12] **Prompt caching is about caching only the input prompt. Only caching this part here so that the LLM doesn't need to process it a second time. Now, to understand prompt caching, you need to understand what happens when we take a large language model, an LLM, and we send to that large language model a prompt.**

**Prompt caching** 是只缓存输入提示词。只缓存这个部分，这样 **LLM** 就不需要再次处理它。要理解 **prompt caching**，你需要理解当我们向大语言模型发送一个提示词时会发生什么。

解析：
* **a second time**：短语，第二次、再一次
* **cache... so that...**：缓存……以便……（目的状语从句）

---

(7) [2:13-2:45] **So this is where we are sending in a request prompt. Now what happens here is the model computes something called key-value pairs. So let's model that in the LLM here as KV pairs. And it does that at every transformer layer for every token in your input.**

这就是我们发送请求提示词的地方。模型会计算一种叫做**键值对**（**key-value pairs**）的东西。我们在 **LLM** 中把它称为 **KV pairs**。模型在每一个 **transformer** 层、对输入中的每一个 **token** 都会计算这个。

解析：
* **compute** /kəmˈpjuːt/：动词，计算（比 calculate 更偏技术领域）
* **key-value pairs**（**KV pairs**）：键值对，Transformer 架构中注意力机制的核心数据结构
* **transformer layer**：Transformer 层，深度学习模型的基本组件
* **token** /ˈtoʊkən/：名词，词元（NLP 术语，文本的最小处理单位）

---

(8) [2:46-3:03] **And we can think of these key pairs as the model's internal understanding of your prompt. So how every word relates to every other word, what context matters, what information to focus on. And computing these, it can be a bit expensive. This is the prefilled phase that happens before the LLM actually can generate its first token of output.**

我们可以把这些键值对看作模型对你的提示词的内部理解——每个词与其他词的关系是什么、哪些上下文重要、应该关注哪些信息。计算这些开销不小。这就是 **LLM** 在真正生成第一个输出 token 之前的**预填充阶段**（**prefill phase**）。

解析：
* **internal understanding**：内部理解（模型内部的表征）
* **relate to** 🔥：短语，与……相关、关联
* **prefilled phase**：预填充阶段（LLM 推理的第一个阶段，处理所有输入 token）
* **a bit expensive**：有点昂贵（这里指计算成本高）

---

(9) [3:03-3:24] **So what we can do is cache the KV pairs. So this here is where the prompt caching actually applies. It stores these precomputed KV pairs.**

所以我们能做的就是缓存这些 **KV pairs**。这才是 **prompt caching** 真正发挥作用的地方——它存储这些**预先计算好的 KV pairs**。

解析：
* **precomputed** /priːkəmˈpjuːtɪd/：形容词，预先计算的（pre- 前缀 + computed）
* **this is where... actually applies**：这才是……真正适用的地方

---

(10) [3:24-3:42] **Now for a simple prompt like what's the capital of France? Well, this caching isn't going to save much time. Processing a handful of tokens that's cheap and fast you don't need caching. But what if we structured our prompt in a little bit of a different way? So let's consider here a prompt that we're going to build in detail.**

对于一个简单的提示词，比如"法国的首都是哪里？"——缓存并不会省多少时间。处理少量 token 本来就便宜又快，不需要缓存。但如果我们换一种方式来组织提示词呢？让我们来详细构建一个提示词。

解析：
* **a handful of** 🔥：短语，少量的、一把的（字面：一把能抓住的量）
* **structured** /ˈstrʌktʃərd/：动词过去式，结构化地组织

---

(11) [3:42-4:08] **And in this prompt, we have put a bunch of stuff. So, for example, we're going to put a big document in our context window here. So this is a 50-page document. And then, in our prompt, we are going to ask the large language model to summarize that document. So here is the summarize request.**

在这个提示词里，我们放了一堆东西。比如说，我们在上下文窗口里放入一个大文档——这是一份 50 页的文档。然后，在提示词中我们要求大语言模型对这份文档进行摘要。这就是摘要请求。

解析：
* **a bunch of stuff** 🔥：口语短语，一堆东西
* **context window**：上下文窗口（LLM 能一次性处理的输入长度限制）
* **summarize** /ˈsʌməraɪz/：动词，总结、摘要

---

(12) [4:08-4:27] **So now the model has to compute KV pairs for thousands of tokens across dozens of transformer layers, millions of operations before it can ever start generating that response. So with prompt caching, that processing work is getting saved.**

现在模型必须在几十个 **transformer** 层上为数千个 **token** 计算 **KV pairs**——在它能开始生成响应之前，需要进行数百万次运算。有了 **prompt caching**，这些处理工作就被保存下来了。

解析：
* **dozens of**：短语，几十个
* **millions of operations**：数百万次运算
* **before it can ever start**：在它能够开始之前（ever 加强语气）

---

(13) [4:27-4:52] **Now, later on in a new conversation or an API call, you could send that same 50-page document followed this time by instead of asking to summarize, we just provide some kind of different question. And the system will recognize that document prefix. It will retrieve the cached KV pairs and then only process the new question at the end. And that's a pretty notable saving in latency and cost.**

之后在一个新的对话或 **API** 调用中，你可以发送同样的 50 页文档，但这次不是让它做摘要，而是提一个不同的问题。系统会识别出那个文档前缀，提取缓存的 **KV pairs**，然后只处理末尾的新问题。这在延迟和成本方面是相当可观的节省。

解析：
* **prefix** /ˈpriːfɪks/：名词，前缀（这里指提示词中不变的前面部分）
* **retrieve** /rɪˈtriːv/：动词，检索、提取
* **latency** /ˈleɪtənsi/：名词，延迟（系统响应时间）
* **notable** /ˈnoʊtəbl/：形容词，显著的、值得注意的

---

(14) [4:52-5:17] **Now what kinds of things can be cached? Let's answer that question. What can be cached? Well, I've already mentioned that you can put documents into a prompt into the context window. So like a 50-page product manual or a research paper or a legal contract or anything, you want to kind of ask multiple questions about that can be stored in the cache.**

那什么类型的内容可以被缓存呢？我已经提到了可以把文档放进提示词的上下文窗口里——比如 50 页的产品手册、研究论文、法律合同，或者任何你想对其反复提问的内容，都可以存在缓存中。

解析：
* **product manual**：产品手册
* **research paper**：研究论文
* **legal contract**：法律合同
* **multiple questions**：多个问题

---

(15) [5:17-5:47] **But another good example, and probably the most common thing that gets cached, is the system prompt. Now, system prompts are the most common use case, where really every chatbot has instructions that tell it how to operate. It defines its personality and its rules and its behavior. You know, things like you're a helpful customer service agent, blah, blah, blah. That sort of thing can be cached.**

但另一个好例子，也可能是最常被缓存的内容，就是**系统提示词**（**system prompt**）。系统提示词是最常见的使用场景——几乎每个聊天机器人都有指令来告诉它如何运作，定义它的个性、规则和行为。比如"你是一个乐于助人的客服代理"之类的。这类内容就可以被缓存。

解析：
* **system prompt** 🔥：系统提示词（定义 AI 行为和规则的隐藏指令）
* **use case**：使用场景、用例
* **blah, blah, blah** 🔥：口语，"诸如此类、等等等等"（表示省略不重要的内容）

---

(16) [5:47-6:05] **And we can also put into the cache few shot examples. So when you want the model to format responses a certain way, you show it examples. There are a bunch of other things in a prompt that could be cached as well, like tool and function definitions and conversation history.**

我们还可以把**少样本示例**（**few-shot examples**）放入缓存。当你希望模型按特定格式回复时，就给它展示示例。还有很多其他东西也可以被缓存，比如工具和函数定义，以及对话历史。

解析：
* **few-shot examples** 🔥：少样本示例（在提示词中给模型展示几个输入输出示例来引导行为）
* **format responses**：格式化回复
* **tool and function definitions**：工具和函数定义（LLM 的 function calling 功能）
* **conversation history**：对话历史

---

(17) [6:05-6:36] **Okay, but when does an LLM know what gets cached? Well, it comes down to a technique called prefix matching to figure out what should actually be stored in the cache. So the cache system matches your prompt from the very beginning. Token by token. And when it encounters the first token that differs from what's cached, then caching stops and normal processing takes over. And that makes prompt structure important for automatic caching.**

但 **LLM** 怎么知道哪些内容该被缓存呢？这归结于一种叫做**前缀匹配**（**prefix matching**）的技术。缓存系统从提示词的最开头开始逐个 token 匹配。当遇到第一个与缓存不同的 token 时，缓存就停止了，正常处理接管。这使得提示词的结构对于自动缓存来说非常重要。

解析：
* **it comes down to** 🔥：短语，归结为、取决于
* **prefix matching**：前缀匹配（从头开始逐一比对的匹配策略）
* **encounter** /ɪnˈkaʊntər/：动词，遇到
* **take over** 🔥：短语，接管、接替

---

(18) [6:36-7:07] **So let's consider a prompt structure. Let's say that we've got a prompt that has in it some system instructions. And then, we're going to put a document in as well. Let's say there's some kind of 20-page manual that's here. And then, yeah, we're going to include some few shot examples as well. And then finally we're going to submit a user question. So the user question might be like what are the warranty terms. Am I going to use this manual to figure out the answer.**

来看一个提示词结构。假设我们有一个提示词，里面包含系统指令，然后放入一份文档——比如一份 20 页的手册，再加上一些少样本示例，最后提交用户的问题。用户问题可能是"保修条款是什么？"——我要用这个手册来找到答案。

解析：
* **warranty terms**：保修条款
* **figure out** 🔥：短语，弄清楚、找出答案
* **submit** /səbˈmɪt/：动词，提交

---

(19) [7:07-7:52] **Well, this structure puts all of the static content first. So when the next request comes in with just a different question, like now it's going to say what's the return policy? The cache matches through all of this static content here. All of this stuff is actually inside of the cache. And we only need to process the new question at the end. But if we were to flip this around and we were to put the dynamic stuff first, put the question up here, then the cache is going to fail immediately when the question changes. You'd have to reprocess everything here again, so it's best to put that stuff up front specifically when we're talking about automatic prompt caching.**

这个结构把所有静态内容放在前面。当下一个请求带着不同的问题进来——比如"退货政策是什么？"——缓存可以匹配所有这些静态内容，我们只需要处理末尾的新问题。但如果反过来，把动态内容放在前面、把问题放在最前面，那么当问题一变化，缓存就会立即失效。你不得不重新处理所有内容。所以在自动 **prompt caching** 的场景下，最好把静态内容放在最前面。

解析：
* **static content**：静态内容（不变的部分）
* **dynamic stuff**：动态内容（会变化的部分）
* **flip this around** 🔥：短语，反过来、颠倒
* **return policy**：退货政策
* **up front** 🔥：短语，在前面、提前（这里指结构上放在前面）
* **reprocess**：动词，重新处理（re- 前缀表示"再次"）

---

(20) [7:52-8:57] **So that's what gets cached. But a couple of other notes based on prompt caching that we should talk about. One is like how much stuff to get cached. Well, typically, you need at least 1024 tokens to initiate caching. That's really before caching provides any benefit. Because below that threshold, the overhead of managing the cache really exceeds the savings. And also caches don't last forever. They're usually cleared after 5 to 10 minutes just to keep the data fresh. Although some can hang around for up to 24 hours. And some providers provide the automatic caching that I've been talking about here. But some providers actually require you to explicitly mark which parts of your prompt should be cached in your API calls. So these are the explicit types of caching. So, so, that's prompt caching. And with the right use case it's a way to reduce LLM costs and latency.**

最后还有几个关于 **prompt caching** 的要点。首先是需要缓存多少内容——通常至少需要 **1024** 个 token 才能启动缓存，因为低于这个阈值，管理缓存的开销实际上超过了节省的部分。其次，缓存不会永远存在，通常在 5 到 10 分钟后就会被清除以保持数据新鲜，不过有些可以保留长达 24 小时。另外，有些提供商提供自动缓存，但有些提供商要求你在 **API** 调用中显式标记哪些部分应该被缓存。总之，这就是 **prompt caching**——在合适的场景下，它是降低 **LLM** 成本和延迟的有效方式。

解析：
* **initiate** /ɪˈnɪʃieɪt/：动词，启动、开始
* **threshold** /ˈθreʃhoʊld/：名词，阈值、门槛
* **overhead** /ˈoʊvərhed/ 🔥：名词，开销、额外成本（技术术语）
* **exceed** /ɪkˈsiːd/：动词，超过
* **hang around** 🔥：口语短语，逗留、存在一段时间
* **explicitly** /ɪkˈsplɪsɪtli/：副词，显式地、明确地（与 implicitly 相对）
* **provider**：名词，提供商（这里指 AI 服务提供商如 OpenAI、Anthropic 等）

---

## 📚 段落小结

本视频详细讲解了 **Prompt Caching** 的概念——它不是缓存模型输出，而是缓存输入提示词的 **KV pairs**（预计算的键值对），从而跳过重复的预填充阶段。适合缓存的内容包括长文档、系统提示词、少样本示例等。关键要点是提示词结构必须把静态内容放在前面（前缀匹配原则），且至少需要 1024 个 token 才能获益。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **prompt caching** | 提示词缓存，缓存输入的 KV pairs 以避免重复计算 |
| **key-value pairs (KV pairs)** | 键值对，Transformer 注意力机制的核心数据结构 |
| **prefill phase** | 预填充阶段，LLM 生成输出前处理所有输入 token 的阶段 |
| **prefix matching** | 前缀匹配，从头逐 token 比对来确定缓存命中范围 |
| **system prompt** | 系统提示词，定义 AI 行为规则的隐藏指令 |
| **few-shot examples** | 少样本示例，在提示词中展示的输入输出范例 |
| **context window** | 上下文窗口，模型一次性能处理的最大输入长度 |
| **overhead** | 开销，额外的计算或管理成本 |
| **threshold** | 阈值，触发某种行为的最低界限 |
| **latency** | 延迟，系统响应所需时间 |
| **sign me up** | 算我一个（口语，表示感兴趣） |
| **it comes down to** | 归结为、取决于 |
| **flip this around** | 反过来、颠倒顺序 |
| **hang around** | 逗留、停留一段时间 |
| **a handful of** | 少量的 |
