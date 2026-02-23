# 🎯 零信任安全在 AI Agent 时代的应用 英语段落翻译

本文共 **29 个语义单元**，将全部翻译。（注：13 分钟演讲内容丰富，按 30 秒硬限制严格拆分）

---

(1) [0:00-0:20] **We've entered the age of agentic AI, systems that don't just think, but they also act. Agents can talk to APIs. They can call tools. They can buy things. They can move data, even create sub-agents. But every new capability adds a new attack surface, yet another way the bad guys can get into our systems.**

我们已经进入了 **agentic AI**（智能体 AI）的时代——这些系统不仅会思考，还会行动。Agent 能调用 **API**，能使用工具，能买东西，能搬运数据，甚至能创建子 Agent。但每增加一项新能力，就多了一个新的攻击面——坏人又多了一条入侵我们系统的路径。

解析：
* **agentic AI** 🔥：能自主行动的 AI 系统，agentic 是 agent 的形容词形式
* **attack surface** 🔥：攻击面，指系统中可被攻击的入口总和（安全术语）
* **sub-agent**：子代理/子智能体，由主 Agent 派生出来的
* **the bad guys**：口语，坏人/攻击者

---

(2) [0:20-0:43] **So how do we protect this new ecosystem? We bring zero trust. Never trust. Always verify. I know, I know, you've heard about zero trust before. Isn't that just a marketing slogan that all the vendors used and abuse in order to get us to buy whatever they had on the truck? Well, yes and no. Definitely the term got hijacked by overzealous sellers trying to meet their quotas.**

那我们怎么保护这个新生态呢？答案是 **Zero Trust**（零信任）——永不信任，始终验证。我知道我知道，你们以前听过零信任。这不就是那些供应商们用来忽悠我们买东西的营销口号吗？嗯，也对也不对。这个术语确实被那些拼了命要完成业绩指标的销售们给劫持了。

解析：
* **zero trust** 🔥：零信任，一种安全架构理念，核心是"不信任任何人/设备"
* **vendor**：名词，供应商/厂商
* **marketing slogan**：营销口号/标语
* **hijack** /ˈhaɪdʒæk/ 🔥：动词，劫持、强行夺取（这里指术语被滥用）
* **overzealous** /ˌoʊvərˈzeləs/：过于热心的、过分积极的
* **quota** /ˈkwoʊtə/：配额/指标，这里指销售业绩指标
* **whatever they had on the truck**：口语表达，"卡车上有啥就卖啥"，比喻不管什么产品都硬推

---

(3) [0:43-1:06] **But I'm a cybersecurity architect, and I never got confused by all that noise because I knew there were some solid, even game-changing security principles worth holding on to. And now that we have AI agents popping up everywhere, the time is right to dust off the hype and repurpose the good in zero trust in order to face the current security challenge.**

但我是一名网络安全架构师，我从来没有被那些噪音搞糊涂过，因为我知道零信任里有一些扎实的、甚至是颠覆性的安全原则值得坚守。现在 AI Agent 到处涌现，正是时候把零信任从炒作的灰尘中拿出来，重新利用其中好的部分来应对当前的安全挑战。

解析：
* **cybersecurity architect**：网络安全架构师
* **game-changing** 🔥：颠覆性的、改变游戏规则的
* **hold on to**：坚持、坚守
* **pop up everywhere** 🔥：到处涌现/冒出来
* **dust off** 🔥：拂去灰尘（比喻重新启用被搁置的东西）
* **repurpose** /riːˈpɜːrpəs/：重新利用/改变用途
* **hype** /haɪp/ 🔥：炒作、夸大宣传

---

(4) [1:06-1:29] **Okay, let's take a quick review of what zero trust principles are. What distinguishes zero trust from doing things in a non zero trust way? Well, one of the simple things that I mentioned previously is you verify and then you trust. So you only trust something that has in fact been verified. Or trust follows verification is another way to think of it.**

好，让我们快速回顾一下零信任的核心原则。零信任和非零信任的做法有什么区别呢？其中一个简单的原则就是：先验证，再信任。你只信任那些确实已经被验证过的东西。换句话说，信任跟着验证走。

解析：
* **distinguish** /dɪˈstɪŋɡwɪʃ/：区分、辨别
* **verify** /ˈverɪfaɪ/ 🔥：验证、核实
* **verification** /ˌverɪfɪˈkeɪʃn/：名词，验证
* **trust follows verification**：信任跟随验证——零信任的核心表述

---

(5) [1:29-1:52] **Another thing is we get rid of the Just in Case principle, where we put things out in case we need them, and replace it with just in time. So we give the access rights that are needed only when they're needed, and not for longer than they're needed. That's a preserving of the principle of least privilege, which says you have only the access rights that you need for only as long as you need them, and not longer.**

另一个是我们要摒弃 **Just in Case**（以防万一）的原则——就是提前把权限准备好"以防需要"——取而代之的是 **Just in Time**（按需即时）。我们只在需要的时候才给予所需的访问权限，而且不会多给一秒。这就是 **least privilege**（最小权限）原则：你只拥有你需要的权限，只在需要的时间内拥有，多一点都不行。

解析：
* **get rid of** 🔥：摆脱、去掉
* **just in case** vs **just in time** 🔥：以防万一 vs 按需即时（对比是零信任的核心概念）
* **access rights**：访问权限
* **principle of least privilege** 🔥：最小权限原则（安全术语）
* **preserving**：保留、维护

---

(6) [1:52-2:12] **Another thing is we move from perimeter-based controls, where we're trying to basically put the hard crunchy outside and leave the soft, chewy center. That's not very good. In fact, what we want to move to is a more pervasive set of security controls. So the security controls are throughout the system, not just around the outside.**

还有一点，我们要从基于边界的安全控制转变——就是那种外面搞一个硬壳，里面留着软软的中心。这可不行。我们要转向更全面渗透式的安全控制，让安全控制遍布整个系统，而不是只守在外围。

解析：
* **perimeter-based** /pəˈrɪmɪtər/：基于边界的
* **hard crunchy outside, soft chewy center** 🔥：经典安全比喻——像糖果一样外硬内软，意思是边界很强但内部防护很弱
* **pervasive** /pərˈveɪsɪv/ 🔥：全面渗透的、无处不在的
* **throughout**：遍及、贯穿

---

(7) [2:12-2:41] **Then what I think is the most important aspect, and it often gets overlooked in zero trust discussions, is the idea of the assumption of breach. You assume the bad guy is already in your system, already in your network, already in your database, in your application, already has elevated privileges from stolen credentials. That's what we're going to operate from. Now design your security.**

然后我认为最重要的一点——在零信任讨论中经常被忽视的——就是 **assumption of breach**（假设已被攻破）。你要假设坏人已经在你的系统里了，已经在你的网络、数据库、应用里了，已经通过窃取的凭证获得了提升的权限。这就是我们的出发点——在这个前提下设计你的安全策略。

解析：
* **assumption of breach** 🔥：假设已被攻破（零信任最重要的原则之一）
* **overlook** /ˌoʊvərˈlʊk/：忽视、忽略
* **elevated privileges** 🔥：提升的权限/特权升级（安全术语）
* **stolen credentials**：被窃取的凭证
* **operate from**：以...为出发点/基础

---

(8) [2:41-3:06] **So it's assuming that you've been breached already. And it's a very different model, a very different paradigm and way of thinking about security. So let's take a look and see what zero trust principles would look like if they were applied to an agentic environment. First of all, let's look at a traditional environment. How do we apply zero trust in this case? Well, we've got users that have to be secured. They're part of the security equation. So I need to do identity and access management.**

这是一种完全不同的模型、不同的范式、不同的安全思维方式。那我们来看看，如果把零信任原则应用到 Agent 环境会是什么样。首先看传统环境——我们怎么应用零信任？我们有用户需要保护，他们是安全方程式的一部分。所以我需要做身份与访问管理（**IAM**）。

解析：
* **paradigm** /ˈpærədaɪm/ 🔥：范式、思维模式
* **agentic environment**：Agent 运行环境
* **security equation**：安全方程式（比喻安全问题中的各个组成部分）
* **identity and access management (IAM)** 🔥：身份与访问管理

---

(9) [3:06-3:29] **I need to make sure that the user has an account that they're logged in, that the person logged in is in fact the user they claim to be. So that's strong authentication. Access controls, so that they can only access the things that they're permitted to see. The device that the user is using matters as well. It could be compromised.**

我需要确保用户有账户、已登录，而且登录的人确实是他们所声称的那个人——这就是强认证。还有访问控制，确保他们只能访问被授权查看的内容。用户使用的设备也很重要——它可能已经被攻陷了。

解析：
* **strong authentication** 🔥：强认证（多因素身份验证等）
* **access controls**：访问控制
* **compromised** /ˈkɑːmprəmaɪzd/ 🔥：被攻陷的、被入侵的（安全术语高频词）
* **claim to be**：声称是

---

(10) [3:29-3:51] **I need to make sure that it is in fact pure, that it hasn't been jailbroken, that an attacker hasn't taken control of the system, because then it won't matter if I have the authentic user trying to do the right thing if the device has already been compromised. I need to look at the data layer of all of this.**

我需要确保设备是干净的，没有被越狱，攻击者没有控制这个系统——因为如果设备已经被攻陷了，就算是真正的用户在做正确的操作也没用。我还需要关注数据层。

解析：
* **jailbroken** 🔥：越狱的（指绕过设备安全限制）
* **authentic** /ɔːˈθentɪk/：真实的、正牌的
* **taken control of**：控制了
* **data layer**：数据层

---

(11) [3:51-4:15] **So I need to make sure that the data that's sensitive has been encrypted so it can't be easily seen. I need to make sure that it's not leaving my network if it's not supposed to, things like that. And then another big part, and a lot of people start their zero trust discussions in this particular area. And it's the area of the network. So I'm going to make sure that my network is well secured, that if information is traversing a part and that information is sensitive, then I want to have it encrypted.**

我要确保敏感数据已经被加密、不会被轻易看到，确保数据不该离开网络的时候不会外泄。还有一个大头——很多人讨论零信任都是从这里开始的——网络。我要确保网络安全良好，如果敏感信息在网络中传输，就要加密。

解析：
* **encrypted** /ɪnˈkrɪptɪd/ 🔥：加密的
* **sensitive data** 🔥：敏感数据
* **traverse** /trəˈvɜːrs/：穿越、经过（这里指数据在网络中传输）

---

(12) [4:15-4:39] **I want to make sure that I do things like micro-segmentation, where I group individual parts of the network together and give some level of isolation so that if this guy gets infected, his infection doesn't easily spread to others. So those are some of the things that we've done traditionally in zero trust and spreading this pervasively throughout the system. I've got to do all of that as I move into the agentic world. Plus, I have to do some more.**

我要做 **micro-segmentation**（微隔离）——把网络的各个部分分组并进行一定程度的隔离，这样如果某个部分被感染了，感染不会轻易蔓延到其他部分。这些就是我们在传统零信任中做的事情，全面铺开。进入 Agent 世界时，这些都得做，而且还要做更多。

解析：
* **micro-segmentation** 🔥：微隔离/微分段（网络安全术语，将网络细分为小区域）
* **isolation** /ˌaɪsəˈleɪʃn/：隔离
* **infection**：感染
* **spread to**：蔓延到
* **pervasively** /pərˈveɪsɪvli/：全面地

---

(13) [4:39-5:05] **So as we start looking at agents, who are the actors? The actors are in fact software. So we've got an AI agent here that is using a non-human identity. So here we had users, and we could associate them with the identity they were using. But an agent may in fact use lots of these different NHIs, lots of different non-human identities. So here we have a proliferation of these things growing.**

那 Agent 世界里的行为者是谁呢？行为者其实是软件。我们有一个 AI Agent 在使用 **non-human identity**（非人类身份）。之前是用户，我们可以把用户和他们的身份关联起来。但一个 Agent 可能会使用大量不同的 **NHI**（非人类身份），这些东西在爆炸性增长。

解析：
* **actor**：行为者/参与者（安全领域指能执行操作的实体）
* **non-human identity (NHI)** 🔥：非人类身份，指 API 密钥、服务账户等机器使用的身份凭证
* **associate...with**：将...与...关联
* **proliferation** /prəˌlɪfəˈreɪʃn/ 🔥：激增、扩散

---

(14) [5:05-5:28] **I need to make sure all of them have the same level of control and visibility that we had for the human users, in fact, maybe even more. Because they're operating autonomously and we need supervision of that. We need tools that we're going to be using to also be secure. We need to make sure that the tools that we're leveraging are tools we can trust.**

我需要确保所有这些身份都有和人类用户同等甚至更高级别的管控和可见性——因为它们是自主运行的，我们需要对其进行监督。我们使用的工具也必须是安全的，必须确保所用的工具是可信赖的。

解析：
* **visibility**：可见性/可观察性
* **autonomously** /ɔːˈtɑːnəməsli/：自主地
* **supervision**：监督
* **leverage** /ˈlevərɪdʒ/ 🔥：利用、运用

---

(15) [5:28-5:58] **Again, we have data. In this case, data may be the thing that was the basis for the AI agent. We use data to train the model. We need to also augment the model. We may use preference information and other context information that we put into the model. I need to make sure all of that stuff has been secured, that it hasn't been tampered with. And then ultimately, I need to be able to look at the intentions of the agent and make sure those intentions match what the original user's intentions were for this particular system.**

还有数据。在 Agent 场景中，数据可能是 AI Agent 的基础——我们用数据来训练模型，还要增强模型，可能会用到偏好信息和其他上下文信息。我需要确保所有这些数据都是安全的、没有被篡改过。最终，我还需要能检查 Agent 的意图，确保这些意图与原始用户的意图一致。

解析：
* **augment** /ɔːɡˈment/ 🔥：增强、扩充
* **tamper with** 🔥：篡改、动手脚
* **intention**：意图
* **preference information**：偏好信息

---

(16) [5:58-6:25] **Let's take a look at an agentic system and see where the threats might be. So here's how the thing basically works. We have a sensing portion. That is the thing that takes the input. It might be visual. It might be textual. It could be a lot of different things. But that feeds into the AI, which does the thinking. And then in that thinking, we will augment that with policies, preferences and other things like that.**

来看看一个 Agent 系统，看看威胁可能在哪。系统基本这样运作：有一个感知部分，负责接收输入——可能是视觉的、文本的、各种各样的。输入会送到 AI 进行思考，在思考过程中，还会用策略、偏好等信息来增强推理。

解析：
* **sensing portion**：感知部分
* **threat** /θret/ 🔥：威胁
* **feed into** 🔥：馈入、输送给
* **policy**：策略/政策

---

(17) [6:25-6:50] **So we'll have that information affecting the thought process, the reasoning process that's happening. And then ultimately, it takes those actions. So it could do an API call. It might write some data and move some data around. It might use a tool, it might spawn other agents. And then all of this is going to be driven by credentials.**

这些信息会影响正在进行的思维过程和推理过程。然后它会执行行动——可能发起 **API** 调用，可能读写和移动数据，可能使用工具，可能生成其他 Agent。所有这些都由凭证驱动。

解析：
* **reasoning process**：推理过程
* **spawn** /spɔːn/ 🔥：生成、派生（技术术语，创建子进程/子 Agent）
* **credentials** /krɪˈdenʃlz/ 🔥：凭证/凭据（密码、密钥、令牌等）

---

(18) [6:50-7:12] **So we have individual capabilities that each one of these things ought to be able to have. So if I'm an attacker, I look at this thing and start to figure how might I break this thing? Well, one thing I could do right here is a direct prompt injection. I might send a prompt in that is going to break the context of this system and have it start doing things that it's not supposed to do. So that's one of the things I could think about.**

每一个组件都应该有各自的独立权能。那如果我是攻击者，我会怎么想办法搞破坏呢？首先可以做 **prompt injection**（提示注入）——发送一个提示来破坏系统的上下文，让它开始做不该做的事。这是一个攻击思路。

解析：
* **capability**：能力/权能
* **prompt injection** 🔥：提示注入（AI 安全领域最重要的攻击手法之一）
* **break the context**：破坏上下文
* **figure**：口语，想出/弄清楚

---

(19) [7:12-7:43] **Another is I could attack right here, and I could do something to manipulate to mess up the policy, the preference information to poison that information or even poison the model that was used to train this thing. So that's another one to look at. Another thing here is looking at all of these interfaces - What if I insert myself at any one of these? That would be a place where I could do some damage if on this and this might be, say, an MCP call, something along those lines. And I would be able to insert and take control of that.**

还有，我可以攻击策略和偏好信息那一层——篡改这些信息，甚至投毒训练模型本身。另一个是看这些接口——如果我在任意一个接口上插入自己呢？那就能造成破坏。比如这里可能是一个 **MCP** 调用之类的，我就能插入并控制它。

解析：
* **manipulate** /məˈnɪpjuleɪt/：操纵、篡改
* **mess up**：搞乱、搞砸
* **poison** 🔥：投毒（在 AI 安全中指污染训练数据或模型）
* **MCP (Model Context Protocol)** 🔥：模型上下文协议（AI Agent 与工具交互的协议）
* **along those lines**：类似的东西、诸如此类

---

(20) [7:43-8:08] **I might also attack individuals of these services, these APIs, the data source, the tools, the agents. So all of those are an extension of the attack surface. And then right here, their credentials. Maybe I want to go in and attack those. Maybe I can copy those credentials. Maybe I can log into a system and create new accounts or increase my level of privilege.**

我还可以攻击这些服务、**API**、数据源、工具、Agent 本身——所有这些都是攻击面的延伸。还有凭证——也许我想攻击这些凭证，复制它们，登录系统创建新账户或者提升权限。

解析：
* **extension of the attack surface**：攻击面的延伸
* **increase my level of privilege**：提权（**privilege escalation** 的口语化表达）🔥

---

(21) [8:08-8:36] **So there's a lot of different moving parts in this system. An attacker has a wealth of different places that they could in fact dive into and do a lot of damage. So now, let's apply those zero trust principles to this AI agentic environment, and we'll see what we can do to eliminate some or all of these threats. So first of all we're going to start here with the credentials. I mentioned this before. We want unique credentials for every agent, for every user and every agent that those agents create as well.**

这个系统里有太多活动部件了，攻击者有大量不同的切入点可以搞破坏。好，现在把零信任原则应用到 AI Agent 环境，看看能消除哪些威胁。首先从凭证开始——每个 Agent、每个用户、以及 Agent 创建的子 Agent 都要有独立的凭证。

解析：
* **moving parts** 🔥：活动部件（比喻系统中的各个组成部分）
* **a wealth of** 🔥：大量的、丰富的
* **dive into**：深入/钻进去
* **eliminate** /ɪˈlɪmɪneɪt/：消除

---

(22) [8:36-8:59] **So we need a place to store all of these non-human identities and keep all of them access controlled. Keep them so that they don't have more privilege than they're supposed to have. We want it to be just in time, not just in case. In other words, we give the privilege just when it's needed, and then we take it away. We don't give it in advance and say, well, just in case, you might need this later.**

我们需要一个地方来存储所有这些非人类身份，并对它们全部进行访问控制——确保它们不会拥有超出应有的权限。要按需即时授权，不是以防万一。换句话说，只在需要时给权限，用完就收回，不会提前给。

解析：
* **access controlled**：受访问控制的
* **in advance**：提前
* **take it away**：收回

---

(23) [8:59-9:21] **So we're going to do that. We're going to make sure that these systems also never include credentials buried into the system itself. And that's been a temptation of programmers. They put a password, they put an API key, and they embed it directly into their code. That is an absolute no-no.**

我们要确保系统里绝不能把凭证埋进代码本身——这一直是程序员的诱惑。他们把密码、**API Key** 直接嵌入代码里。这是绝对不允许的。

解析：
* **buried into**：埋进/嵌入
* **temptation** /tempˈteɪʃn/：诱惑
* **embed** /ɪmˈbed/ 🔥：嵌入、内嵌
* **absolute no-no** 🔥：绝对不行/绝对禁止（口语强调）

---

(24) [9:21-9:53] **What we want instead is to store all of these in a vault where we have a dynamic system where I can go check credentials in and out. I can get new credentials created over time. I can enforce just in time. I can enforce role-based access control. I can do strong authentication. I can do all of those kinds of things that I'm needing to do in these cases. So we're going to cover all of those bases. No static credentials. Everything is dynamic instead.**

我们要做的是把所有凭证存在 **vault**（保险库）里——一个动态系统，可以签入签出凭证，可以随时创建新凭证，可以强制即时授权，可以执行 **RBAC**（基于角色的访问控制），可以做强认证。所有方面都要覆盖到。不要静态凭证，一切都要动态化。

解析：
* **vault** /vɔːlt/ 🔥：保险库（如 **HashiCorp Vault** 等密钥管理工具）
* **check in and out**：签入签出（像借书一样管理凭证）
* **enforce** /ɪnˈfɔːrs/ 🔥：强制执行
* **role-based access control (RBAC)** 🔥：基于角色的访问控制
* **static** vs **dynamic**：静态 vs 动态
* **cover all of those bases** 🔥：覆盖所有方面/面面俱到

---

(25) [9:53-10:20] **And then we're going to move over to the tools themselves. So I need to make sure that these things have registered versions. So I'm going to have a tool registry where I have verified these are secure APIs that we can afford to use. The others have not been vetted. These are a set of secure databases and data sources that we can use. These are a set of tools that we have vetted and we can trust.**

然后是工具本身。我需要确保这些工具有注册的版本。我要有一个 **tool registry**（工具注册表），里面是经过验证的安全 **API**、经过审查的数据库和数据源、经过审核可信赖的工具集。

解析：
* **tool registry** 🔥：工具注册表/工具注册中心
* **registered versions**：已注册的版本
* **vet** /vet/ 🔥：审查、审核（vetting = 审查过程）

---

(26) [10:20-10:52] **And all of these kinds of things, if we're going to be using those. It's basically, think about if you're making a cake or a soup, you want to make sure that the ingredients that go into it are pure. So we want to make sure that we're using the pure stuff to begin with. Then, I need something that's going to give me some sort of inspection over the whole thing. So something that's going to be able to look over it all. Look here and see if there are improper inputs going into any of these tools that are coming out of the agent.**

就像做蛋糕或煲汤一样，你要确保放进去的原材料是纯净的。所以我们要从源头就确保用的是纯净的东西。然后我需要一种全局检查机制——能够审查整个系统，看看是否有不当的输入从 Agent 流入工具。

解析：
* **ingredients** /ɪnˈɡriːdiənts/：原材料/配料
* **pure**：纯净的、未被污染的
* **inspection** /ɪnˈspekʃn/：检查、审查
* **improper inputs**：不当输入

---

(27) [10:52-11:20] **Also, be able to look and check for these prompt injections that may be coming into the system. We could use an AI firewall or an AI gateway, whichever term you prefer to do those sort of checks and block. So it will look and see is that something that should be allowed to go in? Do we have information leaking out of systems that shouldn't be? Are we making improper calls? This sort of thing. So it's an enforcement layer here as well.**

还要能检测系统可能遭受的提示注入。我们可以用 **AI firewall**（AI 防火墙）或者 **AI gateway**（AI 网关），随你喜欢哪个叫法，来做检查和拦截。它会审查：这个东西该不该被放行？有没有不该泄露的信息在外泄？有没有不当的调用？所以它也是一个执行层。

解析：
* **AI firewall / AI gateway** 🔥：AI 防火墙 / AI 网关（安全中间件，检查和过滤 AI 交互）
* **block**：拦截/阻断
* **information leaking out**：信息泄露
* **enforcement layer** 🔥：执行层/策略执行层

---

(28) [11:20-11:43] **And then ultimately I need to be able to have traceability of all of this. So I need a system where I'm logging immutable logs. Means that they can't be changed. I don't want a bad guy to come in here and change the information that's in my log. I want to be able to prevent that. So when actions are occurring in the system, it needs to be able to be traceable.**

最终，我需要对所有这些有可追溯性——我需要一个记录不可篡改日志的系统。不可篡改意味着日志不能被修改，我不能让坏人进来篡改日志记录。当系统中发生操作时，必须是可追溯的。

解析：
* **traceability** /ˌtreɪsəˈbɪləti/ 🔥：可追溯性
* **immutable logs** 🔥：不可篡改的日志（immutable = 不可变的）
* **traceable** /ˈtreɪsəbl/：可追溯的

---

(29) [11:43-12:10] **So we can go back later and understand why it did what it did. I also want to scan the entire environment. Be able to look across all of these different things. And we've got different tools for different types of scanning. We've got network scanning tools. We've got endpoint scanning tools. We've got tools now that can scan AI models and look for vulnerabilities that may be latent and hiding inside of those. Ultimately, at the end of all this, we need still a human in the loop.**

这样我们事后能回溯理解它为什么做了那些事。我还想扫描整个环境——有不同类型的扫描工具：网络扫描、端点扫描，现在还有能扫描 AI 模型的工具，能发现那些潜伏在模型内部的漏洞。最终，我们仍然需要 **human in the loop**（人在回路中）。

解析：
* **endpoint scanning**：端点扫描（检查设备和终端的安全性）
* **vulnerability** /ˌvʌlnərəˈbɪləti/ 🔥：漏洞
* **latent** /ˈleɪtnt/ 🔥：潜伏的、隐性的
* **human in the loop** 🔥：人在回路中（AI 安全核心概念，关键操作需要人类参与）

---

(30) [12:05-12:32] **We need an ability to be able to have a kill switch. If someone sees this thing is running out of control, what it's doing is not right and we can go see what it's been doing. We want to put throttles in place in some cases so that if maybe it's a buying application, it doesn't just suddenly decide, hey, I like this, I'm going to buy a thousand of these in a minute. Maybe we don't want it to do that. So we throttle back its activity. We have canary deployments where we sort of drop the canary in the coal mine to see what happens.**

需要一个 **kill switch**（紧急停止开关）——如果有人发现这东西失控了、做的事不对，我们能看到它做了什么并叫停。还要在某些情况下设置节流——比如一个采购应用，不能让它突然决定"嘿，我喜欢这个，一分钟买一千个"。所以我们要限流。我们还有 **canary deployment**（金丝雀部署）——就像在煤矿里放一只金丝雀，看看会发生什么。

解析：
* **kill switch** 🔥：紧急停止开关/熔断器
* **running out of control**：失控
* **throttle** /ˈθrɑːtl/ 🔥：节流/限制（限制速率或频率）
* **throttle back**：减速、限流
* **canary deployment** 🔥：金丝雀部署（先小范围发布测试，类比煤矿用金丝雀检测毒气）
* **drop the canary in the coal mine**：在煤矿里放金丝雀（经典安全隐喻）

---

(31) [12:32-12:57] **So we're going to see if this system dropped into an environment is going to operate properly or not. A lot of different things you can see here. The agent systems are complex. The number of threats that we face are complex and numerous. So our security defenses have to be up to the challenge. Agentic AI multiplies power and risk.**

把系统投放到一个环境里，看它能不能正常运行。可以看到这里涉及方方面面——Agent 系统很复杂，我们面临的威胁既复杂又众多。所以我们的安全防御必须能应对这些挑战。**Agentic AI** 在放大能力的同时也放大了风险。

解析：
* **numerous** /ˈnuːmərəs/：众多的
* **be up to the challenge** 🔥：能应对挑战
* **multiply**：放大、倍增

---

(32) [12:57-13:20] **Zero trust gives us the framework to keep that power contained. Every agent must prove who it is, justify what it wants and earn trust continuously. As we move forward with autonomous systems, zero trust principles deployed correctly serve as guardrails that keep innovation in alignment with our intent instead of the bad guys.**

零信任给了我们一个框架来约束这种力量。每个 Agent 都必须证明自己是谁、为自己的请求提供正当理由、并持续赢得信任。随着自主系统不断发展，正确部署的零信任原则就是护栏——让创新与我们的意图保持一致，而不是沦为坏人的工具。

解析：
* **contained**：被约束的、被控制的
* **justify** /ˈdʒʌstɪfaɪ/ 🔥：证明...有理/为...提供正当理由
* **earn trust continuously**：持续赢得信任
* **guardrails** /ˈɡɑːrdreɪlz/ 🔥：护栏/防护栏（比喻安全限制措施）
* **in alignment with** 🔥：与...保持一致
* **intent** /ɪnˈtent/：意图、目的

---

## 📚 段落小结

这是一场关于如何将零信任安全原则应用到 AI Agent 时代的技术演讲。演讲者首先回顾了零信任的四大核心原则（先验证再信任、按需即时授权、全面安全控制、假设已被攻破），然后详细分析了 Agent 系统中的各种攻击面（提示注入、模型投毒、接口劫持、凭证窃取等），最后提出了一套完整的零信任防护框架：动态凭证管理（vault）、工具注册审核、AI 防火墙、不可篡改日志、以及人在回路中的监督机制。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **agentic AI** | 能自主行动的 AI 系统 |
| **zero trust** | 零信任安全架构 |
| **attack surface** | 攻击面 |
| **assumption of breach** | 假设已被攻破 |
| **non-human identity (NHI)** | 非人类身份 |
| **prompt injection** | 提示注入攻击 |
| **least privilege** | 最小权限原则 |
| **micro-segmentation** | 微隔离 |
| **vault** | 凭证保险库 |
| **RBAC** | 基于角色的访问控制 |
| **AI firewall / gateway** | AI 防火墙/网关 |
| **immutable logs** | 不可篡改日志 |
| **human in the loop** | 人在回路中 |
| **canary deployment** | 金丝雀部署 |
| **guardrails** | 护栏/安全限制 |
| **throttle** | 节流/限流 |
| **kill switch** | 紧急停止开关 |
| **dust off** | 拂去灰尘、重新启用 |
| **hijack** | 劫持 |
| **pervasive** | 全面渗透的 |
| **game-changing** | 颠覆性的 |
| **vet** | 审查、审核 |
| **spawn** | 生成、派生 |
| **tamper with** | 篡改、动手脚 |
