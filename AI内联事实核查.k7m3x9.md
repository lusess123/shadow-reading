# 🎯 AI 内联事实核查架构 英语段落翻译

本文共 **22 个语义单元**，将全部翻译。

---

(1) [0:00-0:10] **If you're using AI to generate any important writing and you're leaving the fact-checking to the end, know that you're likely to still have some hallucinations in there.**

如果你用 AI 生成重要的文字内容，却把事实核查留到最后才做，那你要知道，里面很可能还是会有一些幻觉（虚假信息）。

解析：
* **fact-checking**：名词，事实核查、查证（新闻/内容领域常用术语）
* **hallucination** /həˌluːsɪˈneɪʃn/：名词，幻觉；在 AI 语境中指模型生成的虚假或错误信息 🔥
* **leave... to the end**：短语，把...留到最后

---

(2) [0:10-0:26] **Instead, I want to introduce an approach where the agent verifies itself as it's generating. If you don't do this type of self-verification as it's generating, you risk the agent derailing as soon as an infactual claim comes in and then one incorrect claim can turn into a whole chain of confident nonsense.**

相反，我想介绍一种方法：让 agent 在生成内容的同时自我验证。如果你不在生成过程中做这种自我验证，一旦出现一个不实的声明，agent 就有可能脱轨，然后一个错误的声明就会变成一整串"自信满满的胡说八道"。

解析：
* **agent**：名词，AI 代理/智能体（AI 领域术语）
* **verify** /ˈverɪfaɪ/：动词，验证、核实
* **derail** /dɪˈreɪl/：动词，（火车）脱轨；引申为偏离正轨、失控 🔥
* **infactual**：形容词，不符合事实的（in- 否定前缀 + factual）
* **claim**：名词，声明、论断
* **confident nonsense**：短语，自信的胡说八道（讽刺 AI 一本正经地胡说）🔥

---

(3) [0:29-0:44] **Fact-checking while you generate is an approach to avoid this. I want to show you how I've built that today and hopefully convince you that it's the better way of doing things. I've had some interesting conversations about the brain cube fact checker that I'm building.**

边生成边事实核查是避免这个问题的方法。今天我想给大家展示我是怎么实现的，希望能说服你们这是更好的做法。我就正在开发的 **Brain Cube** 事实核查工具进行了一些有趣的讨论。

解析：
* **fact-checking while you generate**：动名词短语作主语，边生成边核查
* **convince** /kənˈvɪns/：动词，说服、使信服
* **Brain Cube**：专有名词，作者开发的事实核查工具名称

---

(4) [0:44-1:07] **And what was interesting is I talked to a researcher that's working on mathematical program synthesis. I'm not an expert in that area at all. So don't dig too much into my phrasing of that. But basically her research is in building mathematical programs or code or anything that's kind of like logically constrained from the ground up correctly the first time.**

有趣的是，我和一位研究"数学程序合成"的研究员聊了聊。我完全不是这个领域的专家，所以别太纠结我的措辞。但基本上，她的研究是关于如何从一开始就正确地构建数学程序、代码，或者任何有逻辑约束的东西——第一次就做对。

解析：
* **mathematical program synthesis**：名词短语，数学程序合成（AI/形式化方法领域术语）
* **dig into**：短语，深入研究、追究
* **phrasing** /ˈfreɪzɪŋ/：名词，措辞、表达方式
* **logically constrained**：形容词短语，有逻辑约束的
* **from the ground up**：短语，从头开始、从零开始 🔥

---

(5) [1:09-1:24] **So effectively it's a workflow that the verification process is embedded within the generation itself. How does that relate to my fact checker? Right now I'm building the fact checker to check content that has already been generated.**

所以实际上，这是一种把验证过程嵌入到生成过程本身的工作流。这和我的事实核查工具有什么关系呢？目前我构建的事实核查工具是用来检查已经生成好的内容的。

解析：
* **effectively**：副词，实际上、事实上
* **workflow** /ˈwɜːrkfloʊ/：名词，工作流程
* **embed** /ɪmˈbed/：动词，嵌入、植入 🔥
* **relate to**：短语，与...相关

---

(6) [1:24-1:47] **So let's say there's already a 200-page consulting report or paper or whatever that has been generated already by artificial intelligence or even written by a human being. What I'm doing is I'm taking that and I'm breaking it down into its component claims. So kind of atomizing the claims and then using an agentic search to verify those claims against public sources. Great. Cool. So that does work.**

比方说，已经有一份 200 页的咨询报告、论文或者别的什么，是由人工智能生成的，或者甚至是人写的。我做的就是把它拆解成各个组成声明，也就是把声明"原子化"，然后用 agentic 搜索来对照公开来源验证这些声明。很好，确实能用。

解析：
* **consulting report**：名词短语，咨询报告
* **break down into**：短语，分解成、拆解成 🔥
* **component**：名词/形容词，组成部分的
* **atomizing** /ˈætəmaɪzɪŋ/：动名词，原子化（把大块内容拆成最小单位）🔥
* **agentic search**：名词短语，代理式搜索（AI agent 执行的搜索）
* **verify against**：短语，对照...进行验证

---

(7) [1:50-2:12] **But what this researcher was telling me is that I should try a different approach. Why not embed the verification in the generation? So while the agent is actually generating this 200-page report or whatever, as a claim has been generated, so as we're generating the claim, the verification happens then and there.**

但这位研究员告诉我，应该尝试不同的方法。为什么不把验证嵌入到生成过程中呢？也就是说，当 agent 在生成这 200 页报告的时候，每当一个声明被生成出来，验证就在那个当下立即发生。

解析：
* **Why not...?**：句型，为什么不...？（提建议）
* **then and there**：短语，当场、立刻 🔥
* **as**：连词，当...的时候（此处强调同时性）

---

(8) [2:12-2:40] **And this is a really interesting approach. It's a fascinating approach to me because it has kind of deeper consequences than what might appear on the surface, right? So on the surface it's like, okay, you're generating claim by claim. Great. How does that make a difference between kind of waiting for everything to be generated and deconstructing it and verifying each claim after you've deconstructed it versus generating claim by claim?**

这是一个非常有趣的方法。它让我着迷，因为它的影响比表面看起来要深远得多。表面上看，好像就是逐个声明地生成。那这和"等所有内容都生成完，再拆解、再逐个验证"有什么区别呢？

解析：
* **fascinating** /ˈfæsɪneɪtɪŋ/：形容词，迷人的、令人着迷的
* **consequence** /ˈkɒnsɪkwəns/：名词，后果、影响
* **on the surface**：短语，表面上 🔥
* **deconstruct** /ˌdiːkənˈstrʌkt/：动词，解构、拆解
* **versus** /ˈvɜːrsəs/：介词，与...相对、对比

---

(9) [2:40-3:14] **You got to remember that large language models, the models that these agents are built on top of, are auto-regressive models. So that means that when they're generating their tokens, what happens is they use all of the previous tokens that were generated to generate the next. So if you generate a 200-page report and there's a false claim in some part of that generation. So let's say you get 250 tokens in and there's a false citation, a false claim there. That actually guides the rest of the generation. So it corrupts everything going forward.**

你要记住，大语言模型——这些 agent 所基于的模型——是自回归模型。这意味着当它们生成 token 时，会用之前生成的所有 token 来生成下一个。所以如果你生成一份 200 页的报告，中间某处有一个虚假声明——比方说到了第 250 个 token 处有个虚假引用——这实际上会引导后续的整个生成过程。它会污染后面的所有内容。

解析：
* **auto-regressive model**：名词短语，自回归模型（每个输出依赖之前的输出）🔥
* **token**：名词，令牌（NLP 中文本的基本单位）
* **citation** /saɪˈteɪʃn/：名词，引用、引文
* **corrupt** /kəˈrʌpt/：动词，破坏、污染 🔥
* **going forward**：短语，今后、往后

---

(10) [3:14-3:43] **So that's an argument for the atomized claim-by-claim verification having that within the generation loop rather than trying to wait for the whole report to be generated and then breaking it down after. The corruption at that point is probably like embedded in the structure of the report. So even if you adjust a claim, it might not adjust itself regressively backwards. And I've seen it do it, but I think it might not be as effective.**

所以这就是为什么要在生成循环内部做原子化的逐声明验证，而不是等整个报告生成完再拆解。那时候，污染可能已经嵌入到报告的结构中了。即使你修正了一个声明，它也可能不会自动回溯调整前面的内容。我见过它这么做，但我觉得效果可能没那么好。

解析：
* **argument for**：短语，支持...的论据
* **generation loop**：名词短语，生成循环
* **regressively** /rɪˈɡresɪvli/：副词，回归地、倒退地
* **backwards**：副词，向后、倒回

---

(11) [3:43-4:11] **So what I want to do is I want to do a little experiment. I'm going to basically take that approach with the Brain Cube fact check and I'm going to do it through the MCP server. So I'm going to build the MCP server such that it does that generation line by line—not token by token but claim by claim—rather than waiting for the entire thing to be generated.**

所以我想做个小实验。我打算用 **Brain Cube** 事实核查来采用这种方法，通过 **MCP** 服务器来实现。我要构建这个 MCP 服务器，让它逐行生成——不是逐 token，而是逐声明——而不是等整个内容都生成完。

解析：
* **experiment** /ɪkˈsperɪmənt/：名词，实验
* **MCP server**：专有名词，Model Context Protocol 服务器（AI 工具连接协议）
* **line by line**：短语，逐行地
* **claim by claim**：短语，逐个声明地

---

(12) [4:11-4:32] **So yeah, this will be available to use obviously by the Brain Cube checker if you do want to use it. And yeah, let's work on that together. Let's see how it goes. So I want to give you a high-level overview of what my plan is in terms of architecting this new approach to claim and fact verification.**

所以，如果你想用的话，**Brain Cube** 检查器显然会提供这个功能。好，让我们一起来做，看看效果如何。我想给大家一个高层次的概述，介绍一下我对这种新的声明和事实验证方法的架构规划。

解析：
* **available**：形容词，可用的
* **high-level overview**：名词短语，高层次概述、总体介绍 🔥
* **in terms of**：短语，就...而言、在...方面 🔥
* **architecting**：动名词，设计架构（动词用法）

---

(13) [4:32-4:59] **So what we do right now at a high level is that we take a completed article or publication or presentation, whatever it is that you want to verify, and we break that down into atomic claims that can be verified against our sources. So right now it's sources on the public internet. There's no reason why these sources couldn't be an internal dataset or a repository of knowledge or whatever, a private source of data, but right now it's public internet verification.**

目前我们在高层次上做的是：拿一篇完成的文章、出版物或演示文稿——任何你想验证的东西——把它拆解成可以对照来源验证的原子声明。现在用的是公共互联网上的来源。没有理由不能用内部数据集、知识库或其他私有数据源，但目前是用公网验证。

解析：
* **publication** /ˌpʌblɪˈkeɪʃn/：名词，出版物
* **atomic claims**：名词短语，原子声明（不可再分的最小声明单位）
* **repository** /rɪˈpɒzɪtɔːri/：名词，仓库、存储库（如代码仓库、知识库）🔥
* **there's no reason why... couldn't**：句型，没有理由不能...

---

(14) [4:59-5:30] **So as we do that, a lot of the difficulty is of course in breaking down that document as it's already generated. Making sure that you've captured all of the claims is difficult. And the way I approach is to throw high compute at it, use the most capable model available, give it high reasoning and hope that it's able to decompose all of the claims.**

在这个过程中，很大的难点当然是拆解一份已经生成好的文档。确保你捕获了所有声明是很困难的。我的方法是砸算力进去，用最强大的可用模型，给它高推理能力，然后期望它能分解出所有声明。

解析：
* **capture**：动词，捕获、捕捉
* **throw... at**：短语，投入...、砸...进去 🔥
* **high compute**：名词短语，大量计算资源
* **decompose** /ˌdiːkəmˈpoʊz/：动词，分解 🔥
* **reasoning**：名词，推理（能力）

---

(15) [5:21-5:47] **So far, as I've tested, it seems to work okay with careful prompting. And there's also audit loops that I have in there to verify that no claims have been missed. And that kind of combination of high-performance models and audit loops has taken me so far to have some level of consistent claim decomposition over long documents.**

到目前为止，经过测试，配合仔细的 prompt 设计，效果还不错。我还设置了审计循环来验证没有遗漏任何声明。高性能模型和审计循环的这种组合，让我目前能在长文档上实现一定程度上一致的声明分解。

解析：
* **prompting**：名词，提示词工程/设计（AI 术语）
* **audit loop**：名词短语，审计循环、校验循环 🔥
* **consistent**：形容词，一致的、稳定的
* **so far**：短语，到目前为止

---

(16) [5:44-6:12] **And also there's a process in which we segment the document into smaller token sets. For example, if you want to do claim decomposition on a document that is 1 million tokens, breaking it down into batches of 50,000 tokens means that you're more likely to be able to do that decomposition and capture all the claims in one pass through an LLM and do the auditing as well.**

另外还有一个过程，就是把文档分割成更小的 token 集合。比如，如果你要对一个 100 万 token 的文档做声明分解，把它拆成每批 5 万 token，就更有可能在 LLM 的一次处理中完成分解并捕获所有声明，同时完成审计。

解析：
* **segment** /ˈseɡmənt/：动词，分割、划分
* **batch**：名词，批次
* **in one pass**：短语，一次通过、一趟 🔥
* **LLM**：缩写，Large Language Model，大语言模型

---

(17) [6:12-6:30] **So that's the current approach. And then once those claims have been identified and atomized, you can then run an agentic search for the verification part. And the verification part is what it is and it's what it always has been since the beginning of this project, which is verify against reputable sources available on the public internet.**

这就是目前的方法。一旦这些声明被识别和原子化之后，就可以运行 agentic 搜索来做验证。验证部分就是它一直以来的样子——从项目开始就是这样——就是对照公共互联网上的权威来源进行验证。

解析：
* **identify**：动词，识别、确定
* **reputable** /ˈrepjʊtəbl/：形容词，有信誉的、权威的 🔥
* **it is what it is**：习语，就是这样、本来如此

---

(18) [6:30-7:00] **Now this inline approach is going to be different because we're working the other way. So we're actually starting at the generation. As soon as a claim is made or detected by the agent, that is handed off to the verifier and the verifier verifies that inline as the generation is happening. Now obviously there's some real technical difficulties to this approach. The first and most obvious one is latency.**

现在这种内联方法会不同，因为我们是反过来做的。我们实际上是从生成开始。一旦 agent 产生或检测到一个声明，就会把它交给验证器，验证器在生成过程中实时验证。显然，这种方法有一些真正的技术难题。第一个也是最明显的就是延迟。

解析：
* **inline**：形容词/副词，内联的、实时的 🔥
* **the other way**：短语，反过来、相反的方式
* **hand off**：短语，交接、移交 🔥
* **verifier**：名词，验证器
* **latency** /ˈleɪtənsi/：名词，延迟（技术术语）🔥

---

(19) [6:52-7:36] **If you're asking the agent to verify itself as claims are written, that's going to introduce latency. We can still use the fast models that we're using for verification downstream because it's still going to be atomized. So latency is introduced into generation which you might not mind if you're expecting this thing to go off and run for half an hour. And you might not mind as well if you are operating in a domain where your written content you need to have absolute certainty that all the claims are correct—things like medical writing or legal writing or even just consultancy papers you're delivering for high-value clients—anything where the cost of mistakes can be very high. So yes, it introduces latency, but that might not necessarily be an issue.**

如果你让 agent 在写出声明时自我验证，那肯定会引入延迟。我们仍然可以使用用于下游验证的快速模型，因为声明仍然是原子化的。所以延迟被引入到生成过程中——如果你本来就预期这东西要跑半个小时，你可能不介意。如果你在一个需要绝对确保所有声明都正确的领域工作，你可能也不介意——比如医学写作、法律写作，或者给高价值客户交付的咨询报告——任何错误代价非常高的场景。所以是的，它引入了延迟，但这不一定是个问题。

解析：
* **downstream**：形容词/副词，下游的（流程后面的环节）
* **go off and run**：短语，开始运行
* **absolute certainty**：名词短语，绝对确定性
* **high-value clients**：名词短语，高价值客户
* **cost of mistakes**：名词短语，错误的代价

---

(20) [7:43-8:19] **The other issue is handoff, right? So handoff is an issue because we're doing this via MCP. So the architecture of MCP is pretty simple. It's basically a client-server architecture, right? You have the MCP server, which is what you're familiar with. You can connect your client, your agent to an MCP server, but the agent itself is actually the client, right? So handoff between the agent client side and the MCP server needs to be immaculate, right? You want the agent to detect every single time it's written a claim and be able to hand that off to the MCP server for fact-checking.**

另一个问题是交接。交接是个问题，因为我们是通过 **MCP** 来做的。**MCP** 的架构很简单，基本上就是客户端-服务器架构。你有 MCP 服务器，这是你熟悉的。你可以把客户端（你的 agent）连接到 MCP 服务器，但 agent 本身实际上是客户端。所以 agent 客户端和 MCP 服务器之间的交接必须完美无缺。你希望 agent 每次写出一个声明都能检测到，并能把它交给 MCP 服务器进行事实核查。

解析：
* **handoff** /ˈhændɔːf/：名词，交接、移交 🔥
* **client-server architecture**：名词短语，客户端-服务器架构
* **immaculate** /ɪˈmækjʊlət/：形容词，完美无瑕的、无可挑剔的 🔥
* **detect**：动词，检测、发现

---

(21) [8:19-8:58] **So in this case, the Brain Cube fact check tool. Hand that off and then bring it back and continue the generation inline. And you want it to do that consistently across the entire generation until it's through to synthesis of the report. I'm going to be caching those claims. So every time a claim is verified, it will be cached and the agent will have access to that cache inline as it's verifying. So imagine for every inline claim it will be able to use the cache as a tool and draw back all of the previous claims in order to have that full context verifying and generating from claim to claim for whatever document type you're generating.**

在这个案例中就是 **Brain Cube** 事实核查工具。把声明交出去，然后拿回来，继续内联生成。你希望它在整个生成过程中始终如一地这样做，直到完成报告的综合。我会缓存这些声明。每当一个声明被验证，它就会被缓存，agent 在验证时可以实时访问这个缓存。想象一下，对于每个内联声明，它都能把缓存当作工具，调取之前所有的声明，从而在从一个声明生成到下一个声明时拥有完整的上下文——无论你在生成什么类型的文档。

解析：
* **consistently**：副词，始终如一地
* **synthesis** /ˈsɪnθəsɪs/：名词，综合、合成
* **cache** /kæʃ/：名词/动词，缓存 🔥
* **draw back**：短语，取回、调取
* **full context**：名词短语，完整上下文

---

(22) [8:58-9:59] **So that's the architecture from a high level. I'm excited to implement it. So my implementation stack is Claude Code. I've been using this to build the fact checker software really from the start and it's worked well so far. I have already created the architecture document. What I tend to do, my process is I'll usually try to spec things out as best as I can. Obviously, you can never get to a perfect spec, but I will spend quite a bit of time upfront specking it out. I already have tests implemented in my codebase. So whenever I do make these kind of changes to add features, all the tests I'll run by the agent to make sure that none of the existing functionality has broken or regressed. And I'll do several passes of the spec to make sure that I'm capturing what needs to be captured. That's pretty much my setup and this is the approach I want to take. Let's get into actually testing it out in the next section.**

这就是高层次的架构。我很期待实现它。我的实现技术栈是 **Claude Code**。从一开始我就用它来构建事实核查软件，到目前为止效果很好。我已经创建了架构文档。我的习惯是——我的流程是尽可能把规格说明书写清楚。显然，你永远无法写出完美的规格，但我会花相当多的时间预先把它写好。我的代码库里已经有测试了。每当我做这类添加功能的更改时，我都会让 agent 运行所有测试，确保现有功能没有被破坏或退化。我还会对规格做几轮审查，确保捕获了需要捕获的内容。这基本就是我的设置，这是我想采用的方法。下一节我们来实际测试一下。

解析：
* **implementation stack**：名词短语，实现技术栈
* **spec out**：短语，写规格说明、详细规划 🔥
* **upfront**：副词，预先、提前 🔥
* **regress** /rɪˈɡres/：动词，退化、回归（软件测试术语，指功能退化）🔥
* **several passes**：名词短语，几轮审查

---

(23) [9:59-10:54] **So, I have built the inline verification fact-checking MCP and now I want to test it live with you guys. I'm going to give Claude a task. By the way, I'm using Claude because it's the most reliable agentic harness that I've seen, especially through the chat application. So, that's why I'm using Claude. Just to show you guys really quickly how easy it is to hook up this MCP server. All you have to do if you've got a Claude account and you'd like to use this is you go to settings and then you go to connectors. So you go to settings and you want to connect your check tool and I have instructions on the main website to show you how to actually set up the server itself. But connecting it, you just authenticate. I'm authenticating through Google and then you're in. And I want to just show you the tool itself really quickly too. So when you actually configure it, you can see all of the tools and the permissions.**

好，我已经构建好了内联验证事实核查 **MCP**，现在我想和大家一起实时测试。我要给 **Claude** 一个任务。顺便说一下，我用 **Claude** 是因为它是我见过的最可靠的 agentic 工具框架，尤其是通过聊天应用使用时。这就是我用 **Claude** 的原因。我快速给大家展示一下连接这个 MCP 服务器有多简单。如果你有 Claude 账户并且想使用它，你只需要进入设置，然后进入连接器。你进入设置，连接你的检查工具——我在主网站上有说明，告诉你如何实际设置服务器本身。但连接它，你只需要认证就行。我通过 Google 认证，然后就进去了。我还想快速给大家展示一下这个工具本身。当你配置好之后，你可以看到所有的工具和权限。

解析：
* **live**：副词，实时地、现场地
* **agentic harness**：名词短语，代理工具框架/载体 🔥
* **hook up**：短语，连接、接入 🔥
* **connector**：名词，连接器
* **authenticate** /ɔːˈθentɪkeɪt/：动词，认证、验证身份 🔥
* **permissions**：名词，权限

---

## 📚 段落小结

这段视频讲解了 AI 生成内容时的事实核查问题。演讲者介绍了他正在开发的 **Brain Cube** 事实核查工具，重点对比了两种方法：1）传统的"生成后验证"——等内容全部生成完再拆解验证；2）创新的"内联验证"——边生成边验证。他解释了为什么内联验证更好：由于大语言模型是自回归的，一个错误声明会污染后续所有生成内容。他还讨论了内联方法的技术挑战（延迟和交接问题），以及他使用 **MCP** 服务器和 **Claude Code** 实现这个方案的过程。

---

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **hallucination** | 幻觉；AI 生成的虚假信息 |
| **derail** | 脱轨、偏离正轨 |
| **atomizing** | 原子化（拆成最小单位） |
| **auto-regressive model** | 自回归模型 |
| **corrupt** | 污染、破坏 |
| **embed** | 嵌入 |
| **from the ground up** | 从头开始 |
| **throw... at** | 投入...、砸... |
| **inline** | 内联的、实时的 |
| **latency** | 延迟 |
| **handoff** | 交接、移交 |
| **immaculate** | 完美无瑕的 |
| **cache** | 缓存 |
| **repository** | 仓库、存储库 |
| **spec out** | 写规格说明 |
| **regress** | 退化（软件测试术语） |
| **agentic harness** | 代理工具框架 |
| **hook up** | 连接、接入 |
| **authenticate** | 认证、验证身份 |
