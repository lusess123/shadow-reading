# 🎯 并行 Agent 自动化大规模重构 英语段落翻译

本文共 **28 个语义单元**，将全部翻译。

---

(1) [0:00-0:28] **All right. Thank you all for joining for automating massive refactors with parallel agents. Super excited to talk to you all today about what we're doing with Open Hands to really automate large scale chunks of software engineering work.**

好的，感谢大家参加这场关于"用并行 Agent 实现大规模自动化重构"的分享。今天非常兴奋能跟大家聊聊我们在 **Open Hands** 上做的事情——真正实现软件工程工作的大规模自动化。

解析：
* **refactor** /ˌriːˈfæktər/：动词/名词，重构（在不改变外部行为的前提下改进代码结构）
* **parallel agents**：并行代理，指多个 AI agent 同时工作
* **large scale chunks of**：大规模的、大块的...
* **Open Hands**：一个开源编码 agent 项目

---

(2) [0:28-0:53] **Lots of toil related to tech debt, code maintenance, code modernization. These are tasks that are super automatable. You can throw agents at them, but they tend to be way too big for like a single just one shot. So it involves a lot of what we call agent orchestration. We're going to talk a little bit about how we do that with Open Hands and also just more generically.**

有大量繁琐的工作涉及技术债务、代码维护和代码现代化。这些任务非常适合自动化，你可以让 agent 去处理它们，但它们往往规模太大，不适合单次一把梭。所以这涉及到我们所说的"agent 编排"。我们会聊聊如何在 **Open Hands** 中实现这一点，以及更通用的做法。

解析：
* **toil** /tɔɪl/：名词，繁重的工作、苦活（这里指重复性劳动）🔥
* **tech debt**：技术债务（为了快速交付而遗留的代码问题）
* **code modernization**：代码现代化（升级老旧代码到新标准）
* **automatable** /ˈɔːtəmeɪtəbl/：形容词，可自动化的
* **throw agents at**：把 agent 扔给（某任务）、用 agent 去处理
* **one shot**：一次性完成、一把梭
* **agent orchestration** 🔥：agent 编排（协调多个 agent 协同工作）
* **generically** /dʒəˈnerɪkli/：副词，通用地、一般性地

---

(3) [0:53-1:24] **A little bit about me. My name is Robert Brennan. I'm the co-founder and CEO at Open Hands. My background is in dev tooling. I've been working in open source dev tools for over a decade now. I've also been working in natural language processing for about the same amount of time. I've been really excited over the last few years to see those two fields suddenly converge as LLMs are really good at writing code. And I'm super excited to be working in the space.**

简单介绍下我自己。我叫 **Robert Brennan**，是 **Open Hands** 的联合创始人兼 CEO。我的背景是开发工具领域，在开源开发工具行业已经工作了十多年，同时也在自然语言处理领域工作了差不多同样长的时间。过去几年让我特别兴奋的是，看到这两个领域突然交汇——因为 LLM 真的很擅长写代码。能在这个领域工作，我感到非常兴奋。

解析：
* **co-founder**：联合创始人
* **dev tooling**：开发工具（developer tooling 的缩写）
* **for over a decade**：十多年
* **natural language processing (NLP)**：自然语言处理
* **converge** /kənˈvɜːrdʒ/：动词，汇聚、交汇 🔥
* **in the space**：在这个领域/行业（口语中常用 space 指代某个领域）

---

(4) [1:24-2:04] **Open Hands is an MIT licensed coding agent. Open Hands started at OpenDev about a year and a half ago when Devon first launched their demo video of a fully autonomous software engineering agent. My co-founders and I saw that, got super excited about what was possible, what the future of software engineering might look like. But realized that that shouldn't happen in a black box, right? If our jobs are going to change, we want that change to be driven by the software development community. We want to have a say in that change. And so we started OpenDev as a way to give the community a way to help drive what the future of software engineering might look like in an AI powered world.**

**Open Hands** 是一个 MIT 开源许可的编码 agent。大约一年半前 **Devon** 发布了他们全自动软件工程 agent 的演示视频时，**Open Hands** 在 OpenDev 诞生了。我和我的联合创始人们看到后非常兴奋，开始畅想这意味着什么、软件工程的未来会是什么样子。但我们也意识到，这不应该在黑盒子里发生。如果我们的工作将要改变，我们希望这种改变是由软件开发社区驱动的，我们希望在这种改变中拥有发言权。所以我们创建了 OpenDev，给社区一种方式来帮助塑造 AI 驱动世界中软件工程的未来。

解析：
* **MIT licensed**：采用 MIT 开源许可证（一种宽松的开源协议）
* **fully autonomous**：完全自主的
* **black box**：黑盒子（指不透明、看不到内部运作的系统）
* **have a say in** 🔥：在...中有发言权
* **AI powered world**：AI 驱动的世界

---

(5) [2:04-2:48] **So hopefully not controversial for me to say that software development is changing. I know my workflow has changed a great deal in the last year and a half. I would say now pretty much every line of code that I write goes through an agent. Rather than me opening up my IDE and typing out lines of code, I'm now asking an agent to do the work for me. I'm still doing a lot of critical thinking. A lot of the mentality of the job hasn't changed, but what the actual work looks like has changed quite a bit.**

希望我说"软件开发正在改变"这件事不会太有争议。我知道过去一年半里，我自己的工作流程改变了很多。我现在几乎每一行代码都要经过 agent。我不再是打开 IDE 自己敲代码，而是让 agent 帮我干活。我仍然在做大量的批判性思考，工作的思维模式没太变，但实际工作的样子已经变了很多。

解析：
* **controversial** /ˌkɑːntrəˈvɜːrʃl/：形容词，有争议的
* **workflow**：工作流程
* **a great deal**：很多、大量
* **goes through**：经过、通过
* **critical thinking**：批判性思考
* **mentality** /menˈtæləti/：名词，心态、思维方式
* **quite a bit**：相当多

---

(6) [2:48-3:20] **But what I want to convince you all of is that it's still changing. We're still just in the first innings of this change. We still haven't realized all the impact that large language models have already brought to the job and are going to continue to bring to the job as they improve. I would say even if you froze large language models today and they didn't get any better, you would still see the job of software engineering changing very drastically over the next two to three years as we figure out ways to operationalize the technology. I think there's still a lot of psychological and organizational hurdles to adopting large language models within software engineering. And we're seeing a lot of those hurdles disappear as time goes on.**

但我想让大家相信的是：这种改变仍在继续。我们还处于这场变革的第一局。LLM 已经带来的影响、以及随着它们不断改进将继续带来的影响，我们还远未完全意识到。我认为，即使你今天把大语言模型冻结住、不让它们再进步，未来两三年软件工程这份工作仍然会发生巨大变化——因为我们还在摸索如何将这项技术落地。目前在软件工程中采用 LLM，还存在很多心理上和组织上的障碍，但随着时间推移，这些障碍正在逐渐消失。

解析：
* **in the first innings** 🔥：在第一局（棒球术语，比喻"才刚开始"）
* **realize**：这里是"意识到、认识到"的意思
* **froze**：freeze 的过去式，冻结
* **drastically** /ˈdræstɪkli/：副词，剧烈地、大幅度地
* **operationalize** /ˌɑːpəˈreɪʃənəlaɪz/：动词，使...落地/运营化 🔥
* **hurdles** /ˈhɜːrdlz/：名词，障碍、跨栏（复数）
* **psychological** /ˌsaɪkəˈlɑːdʒɪkl/：形容词，心理上的

---

(7) [3:20-3:55] **A brief history of kind of how we got here. Everything started I would say with what I call context-unaware code snippets. Some of the first large language models turned out were very good at writing chunks of code especially things that they'd seen over and over again. So you could ask it to write bubble sort. You could ask it for small algorithms, how to access a SQL database, things like that. It was able to generate little bits of code. It seemed to understand the logic a bit. But this was totally context unaware, right? It was just dropping code into a chat window that you had asked for. It had no idea what project you were working on, what the context was.**

简单回顾一下我们是怎么走到今天的。我认为一切始于我所说的"上下文无感知的代码片段"。早期的一些大语言模型擅长写代码块，尤其是它们反复见过的东西。你可以让它写冒泡排序，让它写小算法、写如何访问 SQL 数据库之类的。它能生成一小段代码，似乎也能理解一点逻辑。但这完全是上下文无感知的，对吧？它只是把你要求的代码丢进聊天窗口，完全不知道你在做什么项目、上下文是什么。

解析：
* **context-unaware**：上下文无感知的（不了解周围代码环境）
* **code snippets**：代码片段
* **turned out**：结果是、事实证明
* **bubble sort**：冒泡排序（一种基础排序算法）
* **dropping code into**：把代码扔进...

---

(8) [3:55-4:33] **Shortly thereafter we got these context-aware code generation. Like GitHub Copilot as autocomplete was probably the best example here. So it actually was in your IDE, it could see where you're typing, what the code you're working on, and it could generate code that was specific to your codebase, that referenced local variable names, local table names in your database. Huge improvement for our productivity. So instead of copy pasting back and forth between the ChatGPT window and your IDE, now all of a sudden you can see the little robot gets its eyes. It can see inside your codebase and it can actually generate relevant code for your codebase.**

不久之后，我们有了上下文感知的代码生成。**GitHub Copilot** 的自动补全可能是最好的例子。它直接在你的 IDE 里，能看到你在哪里打字、你正在写什么代码，然后生成针对你代码库的代码——引用本地变量名、引用数据库里的本地表名。这对生产力的提升是巨大的。你不用再在 ChatGPT 窗口和 IDE 之间来回复制粘贴了。突然之间，这个小机器人有了眼睛，它能看进你的代码库，生成真正相关的代码。

解析：
* **shortly thereafter**：此后不久 🔥
* **context-aware**：上下文感知的
* **autocomplete**：自动补全
* **specific to**：针对...的、专属于...的
* **codebase**：代码库
* **all of a sudden**：突然间
* **the little robot gets its eyes**：小机器人有了眼睛（形象的比喻）

---

(9) [4:33-5:29] **And then I think the giant leap happened in early 2024 with the launch of Devon and then the next day the launch of OpenDevon, now Open Hands. This is where we first started to see autonomous coding agents. This is when AI started not just writing code but could run the code that it wrote and it could Google an error message that came out, find a Stack Overflow article, apply that to the code, add some debug statements into the code and run it and see what happens. Basically automating the entire inner loop of development. This was a huge step function forward. You can see the little robot gets arms in this picture. This was a huge jump at least in my own productivity, being able to just write a couple sentences of English, give it to an agent and let it churn through the task until it's got something that's actually working, running, tests are passing.**

然后我认为巨大的飞跃发生在 2024 年初——**Devon** 发布，紧接着第二天 OpenDevon（现在的 **Open Hands**）也发布了。这是我们第一次开始看到自主编码 agent。AI 不仅能写代码，还能运行它写的代码，能去 Google 搜索报错信息，找到 **Stack Overflow** 文章，把方案应用到代码里，加一些调试语句，运行看看会发生什么。基本上把整个开发的内循环都自动化了。这是一个巨大的阶跃式进步。你可以看到图里的小机器人长出了手臂。至少对我个人的生产力来说，这是一个巨大的飞跃——只需要写几句英文，交给 agent，让它不断迭代处理任务，直到产出真正能运行、测试通过的东西。

解析：
* **giant leap**：巨大的飞跃
* **autonomous coding agents**：自主编码代理
* **inner loop of development** 🔥：开发的内循环（写代码→运行→调试→修复 的循环）
* **step function forward**：阶跃式的进步（像阶梯函数那样的跳跃式提升）
* **churn through** /tʃɜːrn/：持续处理、反复迭代 🔥
* **debug statements**：调试语句

---

(10) [5:29-6:13] **And then now what we're seeing is parallel agents, what we're calling agent orchestration. Folks are figuring out how to get multiple agents working in parallel, sometimes talking to each other, sometimes spinning up new agents under the hood. Agents creating agents. This is I would say kind of bleeding edge of what's possible. People are just starting to experiment with this, are just starting to see success with this at scale, but there are some really good tasks that are very amenable to this sort of workflow. And it has the potential to really automate away a huge mountain of tech debt that sits under every contemporary software company.**

现在我们看到的是并行 agent，也就是我们所说的 agent 编排。人们正在摸索如何让多个 agent 并行工作，有时候让它们互相沟通，有时候在底层启动新的 agent——agent 创造 agent。我认为这是当前能力的最前沿。人们刚开始试验这个，刚开始在规模化层面看到成功，但确实有一些任务非常适合这种工作流。它有潜力真正自动化掉每个当代软件公司底下堆积如山的技术债务。

解析：
* **parallel agents**：并行代理
* **spinning up**：启动（常用于描述启动服务器、容器等）🔥
* **under the hood**：在底层、在引擎盖下 🔥
* **bleeding edge**：最前沿（比 cutting edge 更激进）🔥
* **at scale**：大规模地
* **amenable to** /əˈmiːnəbl/：适合...的、顺从于... 🔥
* **a huge mountain of tech debt**：堆积如山的技术债务

---

(11) [6:13-7:04] **A little bit about the market landscape here. Again, you can kind of see that same evolution from left to right where we really started with plugins like GitHub Copilot inside of our existing IDEs and we got these AI empowered IDEs, IDEs with AI tacked onto them. I would say your median developer is kind of adopting local agents now. They may be running Cloud Code locally for one or two things, maybe some ad hoc tasks. Your early adopters though are starting to look at cloud-based agents, agents that get their own sandbox running in the cloud. This allows those early adopters to run as many agents as they want in parallel. It allows them to run those agents much more autonomously than if they were running on their local laptop.**

简单聊聊市场格局。同样地，你能看到从左到右的演进：我们最开始是在现有 IDE 中加入像 **GitHub Copilot** 这样的插件，得到了 AI 赋能的 IDE——就是把 AI 附加到 IDE 上。我觉得现在普通开发者正在采用本地 agent，可能本地跑 **Cloud Code** 做一两件事、一些临时任务。而早期采用者则开始关注基于云的 agent——在云端拥有自己沙箱环境的 agent。这让早期采用者可以并行运行任意数量的 agent，而且比在本地笔记本上运行时自主性高得多。

解析：
* **market landscape**：市场格局/版图
* **tacked onto**：附加到...上 🔥
* **median developer**：中位数开发者（指普通/典型的开发者）
* **ad hoc** /ˌæd ˈhɑːk/：临时的、特定的（拉丁语）🔥
* **early adopters**：早期采用者
* **sandbox**：沙箱（隔离的安全环境）

---

(12) [7:04-8:00] **Right? If it's running on your local laptop, there's nothing stopping the agent from doing rm -rf slash, trying to delete everything in your home directory, whatever it might do, installing some weird software. Whereas if it's got its own like containerized environment somewhere in the cloud, you can run a little bit more safely knowing that the worst it can do is ruin its own environment. And you don't have to like sit there babysitting it and hitting the Y key every time it wants to run a command. So those cloud-based environments much more scalable, a bit more secure. And then I would say at the far right here what we're really just seeing the top like 1% of early adopters start to experiment with is orchestration.**

对吧？如果 agent 在你本地笔记本上运行，没有什么能阻止它执行 `rm -rf /`、试图删除你主目录下的所有东西、或者安装一些奇怪的软件。但如果它在云端有自己的容器化环境，你就可以更安全地运行，因为最坏的情况也只是毁掉它自己的环境。而且你不用坐在那里像保姆一样盯着，每次它要运行命令时都按 Y 键确认。所以基于云的环境更具可扩展性，也更安全一些。最右边这里，我们看到的是最顶尖的 1% 早期采用者开始试验的东西——编排。

解析：
* **rm -rf /**：Linux 命令，递归强制删除根目录下所有文件（极度危险的命令）
* **containerized environment**：容器化环境
* **babysitting**：照看、当保姆（这里形容时刻监视 agent）
* **hitting the Y key**：按 Y 键（确认执行命令）
* **scalable** /ˈskeɪləbl/：可扩展的

---

(13) [8:00-8:47] **This idea that you not only have these agents running in the cloud, but you have them talking to each other. You're coordinating those agents on a larger task. Maybe those agents are spinning out sub-agents within the cloud that have their own sandbox environments. Some really cool stuff happening there. I would say with Open Hands, we generally started with cloud agents. We've leaned back a little bit and built local CLI similar to Cloud Code in order to meet developers where they are today. These types of experiences are much more comfortable for developers. We've been using autocomplete for decades, just got million times better with GitHub Copilot. I would say these experiences on the right side are very foreign to developers.**

这个理念是：你不仅让这些 agent 在云端运行，还让它们互相沟通。你在更大的任务上协调这些 agent，这些 agent 可能在云端启动子 agent，子 agent 有自己的沙箱环境。那边正在发生一些非常酷的事情。对于 **Open Hands**，我们一开始主要做云 agent，后来稍微退了一步，构建了类似 **Cloud Code** 的本地 CLI，以便在开发者当前所在的位置与他们会面。这类体验对开发者来说更舒适。我们用自动补全已经几十年了，只是随着 GitHub Copilot 好了百万倍。我认为右边这些体验对开发者来说非常陌生。

解析：
* **coordinating**：协调
* **spinning out sub-agents**：启动/衍生出子 agent
* **leaned back**：退后一步、稍作调整
* **CLI** (Command Line Interface)：命令行界面
* **meet developers where they are** 🔥：在开发者所在之处与他们会面（指适应用户当前的习惯）
* **foreign to**：对...来说陌生的

---

(14) [8:47-9:43] **They feel very strange to give off a pass to an agent or a fleet of agents and let them do the work for you. It feels kind of like, for me at least, the jump that I made when I went from being an IC to being a manager is what it feels like going from writing code myself to giving that code to agents. So very different way of working. I think one of the reasons developers have been very slow to adopt. But again the top 1% or so of engineers that we've seen adopt the stuff on the right side of this landscape, they've been able to get massive lifts in productivity and tackle huge backlogs of tech debt that other teams just weren't getting to. Some examples of where you would want to use orchestration rather than a single agent. Typically these are tasks that are going to be very repeatable and very automatable.**

把工作交给一个 agent 或一群 agent 来做，感觉很奇怪。对我来说，从自己写代码到把代码交给 agent，感觉就像我从 IC（独立贡献者）转型为管理者时的那种跳跃。这是一种非常不同的工作方式，我认为这是开发者采用这些东西很慢的原因之一。但同样地，我们见过的那些采用了右侧这些工具的顶尖 1% 工程师，他们的生产力获得了巨大提升，能够处理其他团队根本顾不上的大量技术债务积压。那么什么时候你会想用编排而不是单个 agent 呢？通常是那些高度可重复、高度可自动化的任务。

解析：
* **give off a pass to**：交给...去做、放手让...处理
* **a fleet of agents**：一群/一队 agent
* **IC (Individual Contributor)**：独立贡献者（相对于管理者）🔥
* **massive lifts in productivity**：生产力的巨大提升
* **backlogs** /ˈbæklɒɡz/：积压的任务/工作 🔥
* **weren't getting to**：没能处理到、顾不上

---

(15) [9:43-10:44] **Some examples are things like the basic code maintenance tasks, right? Every codebase has to, there's a certain amount of work to just keep the lights on, right? To keep dependencies up to date, to make sure that any vulnerabilities get solved. We have one client for instance that is using Open Hands to remediate CVEs throughout their entire codebase. They have tens of thousands of developers, thousands of repositories. And basically every time a new vulnerability gets announced in an open source project, they have to go through their entire codebase, figure out which of their repos are vulnerable, submit a pull request to that codebase to actually resolve the CVE, update whatever dependency, fix breaking API changes. And they have seen a 30x improvement on time to resolution for these CVEs by doing orchestration at scale. They basically have a setup now where every time a CVE gets announced, new vulnerability comes in, they kick off an Open Hands session to scan a repo for that vulnerability, make any code changes that are necessary, and open up a pull request. And all the downstream team has to do is click merge, validate the changes.**

举几个例子，比如基础的代码维护任务，对吧？每个代码库都有一定量的工作只是为了"维持运转"——保持依赖更新、确保漏洞被修复。比如我们有一个客户，他们用 **Open Hands** 来修复整个代码库中的 CVE。他们有数万名开发者、数千个代码仓库。每当开源项目中公布一个新漏洞，他们就得遍历整个代码库，找出哪些仓库有漏洞，提交 PR 来修复 CVE、更新依赖、修复破坏性 API 变更。通过大规模编排，他们的 CVE 解决时间提升了 30 倍。他们现在的流程是：每当一个 CVE 公布、新漏洞出现，就启动一个 **Open Hands** 会话来扫描仓库、做必要的代码修改、提交 PR。下游团队要做的只是点击合并、验证变更。

解析：
* **keep the lights on** 🔥：维持运转（比喻保持系统正常运行的基本工作）
* **remediate** /rɪˈmiːdieɪt/：动词，修复、补救 🔥
* **CVE** (Common Vulnerabilities and Exposures)：通用漏洞披露（安全漏洞的标准编号）
* **repositories**：代码仓库（常缩写为 repos）
* **pull request (PR)**：拉取请求（代码合并请求）
* **breaking API changes**：破坏性 API 变更
* **30x improvement**：30 倍的提升
* **time to resolution**：解决时间
* **kick off**：启动、开始 🔥
* **downstream team**：下游团队

---

(16) [10:38-11:12] **You can't just one shot it with code and say "refactor my monolith to microservices." But it is still very real work, right? You're still just kind of like copying and pasting a lot of code around. So if you thoughtfully orchestrate agents together, they can do this. A lot of migration stuff. So migrating from old versions of Java to new versions of Java. We're working with one client to migrate a bunch of Spark 2 jobs to Spark 3. We've used Open Hands to migrate our entire front end from Redux to Zustand. So you can do these very large migrations. Again, lots of very gross work. Still takes a lot of thinking from a human about how they're going to orchestrate these agents.**

你不能一句话"把我的单体重构成微服务"就搞定。但这确实是实打实的工作，对吧？你还是在不停地复制粘贴代码。所以如果你有策略地编排 agent，它们是可以完成这些工作的。还有很多迁移类工作，比如从旧版 Java 迁移到新版 Java。我们正在帮一个客户把一堆 **Spark 2** 任务迁移到 **Spark 3**。我们还用 **Open Hands** 把整个前端从 **Redux** 迁移到了 **Zustand**。所以你可以做这些非常大规模的迁移。同样，都是大量繁琐的工作，仍然需要人类思考如何编排这些 agent。

解析：
* **one shot it**：一把梭搞定
* **monolith**：单体应用
* **migration**：迁移
* **Spark 2/Spark 3**：Apache Spark 的不同版本（大数据处理框架）
* **Redux**：React 的状态管理库（较老）
* **Zustand**：React 的轻量级状态管理库（较新）🔥
* **gross work**：繁琐的工作、脏活累活

---

(17) [11:12-11:41] **And there's a lot of tech debt, detecting unused code, getting rid of that. We have one client who's using our SDK to basically scan their logs every time there's a new error pattern, go into the codebase and add error handling, fix whatever problem is cropping up. So lots of things that are a little too big for a single agent to just one shot. But are super automatable, are good tasks to handle with an agent as long as you're thoughtful about orchestrating them.**

还有很多技术债务——检测无用代码、清理掉它们。我们有一个客户使用我们的 SDK，每当日志中出现新的错误模式，就自动扫描代码库、添加错误处理、修复冒出来的问题。所以有很多事情对单个 agent 来说太大、无法一把梭搞定，但它们非常适合自动化，只要你有策略地编排 agent，就是很好的任务。

解析：
* **unused code**：无用代码/死代码
* **getting rid of**：清除、去掉
* **SDK** (Software Development Kit)：软件开发工具包
* **error pattern**：错误模式
* **cropping up**：冒出来、出现 🔥
* **thoughtful about**：对...有策略的、深思熟虑的

---

(18) [11:41-12:28] **A bit about why these aren't one-shottable tasks. Some of them are technological problems, some of them are more like human psychological problems. On the technology side, you have a limited amount of context that you can give to the agent. So extremely long running tasks or tasks that span a very large codebase, usually you don't really have enough there. You're going to have to compact that context window to the point the agent might get lost. We've all seen the laziness problem. I've tried to launch some of these types of tasks and the agent will say, "Okay, I migrated three of your 100 services. I need to hire a team of six people to do the rest." The agents often lack domain knowledge within your codebase, right? They don't have the same intuition that you do for the problem. And errors compound when you go on these really long trajectories with an agent. A tiny error in the beginning is going to compound over time. The agent is going to basically repeat that error over and over again for every single step that it takes in its task.**

聊聊为什么这些任务不能一把梭。有些是技术问题，有些更像是人类心理问题。在技术层面，你能给 agent 的上下文是有限的。所以对于超长时间运行的任务或者跨越非常大代码库的任务，通常上下文不够用。你不得不压缩上下文窗口，压到 agent 可能会迷失的程度。我们都见过"偷懒问题"——我曾尝试启动一些这类任务，agent 会说："好的，我已经迁移了你 100 个服务中的 3 个。我需要雇一个 6 人团队来完成剩下的。" Agent 通常缺乏对你代码库的领域知识，它们没有你对问题的那种直觉。而且当你让 agent 走很长的轨迹时，错误会累积。开头的一个小错误会随时间复合放大，agent 基本上会在任务的每一步都重复那个错误。

解析：
* **one-shottable**：能一把梭搞定的（口语造词）
* **context window**：上下文窗口（LLM 能处理的文本长度限制）🔥
* **compact**：压缩
* **laziness problem** 🔥：偷懒问题（LLM 有时会偷懒不完成全部任务）
* **domain knowledge**：领域知识
* **intuition** /ˌɪntuˈɪʃn/：直觉
* **compound** /kəmˈpaʊnd/：动词，复合、累积 🔥
* **trajectory** /trəˈdʒektəri/：轨迹

---

(19) [12:28-13:02] **And then on the human side, we do have this intuition for the problem we can't convey. Say you want to break your monolith into microservices. You probably have a mental model of how that's going to work. If you just tell the agent "break the monolith into microservices," it's just going to take a shot in the dark based on patterns seen in the past without any real understanding of your codebase. We have some difficulty decomposing tasks for agents and understanding what an agent can actually get done in one shot.**

然后在人类这边，我们对问题有一种无法传达的直觉。比如你想把单体应用拆分成微服务，你脑子里可能有一个关于如何做的心智模型。但如果你只是告诉 agent "把单体拆成微服务"，它就只能根据过去见过的模式瞎猜一把，对你的代码库没有真正的理解。我们在为 agent 分解任务、理解 agent 一次能完成什么方面，确实有困难。

解析：
* **convey** /kənˈveɪ/：动词，传达、表达
* **mental model**：心智模型 🔥
* **take a shot in the dark** 🔥：瞎猜、盲目尝试
* **decomposing tasks**：分解任务

---

(20) [13:02-13:37] **You do need this intermediate review, intermediate check-in from the human as the agent's doing its work. We'll talk a little bit about what that loop looks like later. But it's again not something you can just tell an agent to do and expect the final result to come in. You have to kind of approve things as the agent goes along. And then not having a true definition of done. I think if you don't really know what finished looks like for this project, it's hard to tell the agent.**

你确实需要人类在 agent 工作过程中进行中间审查、中间检查。我们稍后会聊聊这个循环是什么样的。但这同样不是你告诉 agent 去做然后等着最终结果出来的事情。你必须在 agent 进行过程中逐步批准。还有一个问题是没有真正的"完成"定义。如果你自己都不知道这个项目"完成"是什么样子，就很难告诉 agent。

解析：
* **intermediate review**：中间审查
* **check-in**：检查点、签到
* **approve**：批准
* **as the agent goes along**：随着 agent 的进行
* **definition of done** 🔥：完成的定义（敏捷开发术语）

---

(21) [13:37-14:27] **On these types of orchestration tasks, I want to make it super clear that we don't expect every developer to be doing agent orchestration. We think most developers are going to use a single agent locally for sort of ad hoc tasks that are common for engineers building new features, fixing a bug, things like that. I think running Cloud Code locally in a familiar environment alongside an IDE is probably going to be a common workflow at least for the next couple years. What we're seeing is that a small percentage of engineers who are early adopters of agents, who are really excited about agents, are finding ways to orchestrate agents to tackle huge mountains of tech debt at scale and get a much bigger lift in productivity for that smaller select set of tasks. Right? You're not going to see 3,000% lift in productivity for all software engineering. Probably going to get more of that 20% lift that everybody's been reporting. But for some select tasks like CVE remediation or codebase modernization, you can get a massive lift. You can do years of work in a couple weeks.**

关于这类编排任务，我想说清楚：我们并不期望每个开发者都去做 agent 编排。我们认为大多数开发者会在本地使用单个 agent，处理工程师构建新功能、修复 bug 等常见的临时任务。我认为在熟悉的环境中、在 IDE 旁边本地运行 **Cloud Code**，至少在未来几年会是常见的工作流。我们看到的是，一小部分对 agent 非常热情的早期采用者工程师，正在找到编排 agent 的方法，大规模处理堆积如山的技术债务，在这些特定任务上获得更大的生产力提升。你不会看到所有软件工程都有 3000% 的生产力提升，大概只会得到大家报告的那 20% 的提升。但对于某些特定任务，比如 CVE 修复或代码库现代化，你可以获得巨大的提升——几周内完成几年的工作量。

解析：
* **ad hoc tasks**：临时任务
* **alongside**：在...旁边、与...一起
* **select set of tasks**：特定的一组任务
* **3,000% lift**：30 倍的提升
* **years of work in a couple weeks**：几周完成几年的工作

---

(22) [14:39-15:14] **I want to talk a little bit about what these workflows look like in practice. This loop probably looks pretty familiar if you're used to working with local agents. This is a very typical loop that looks a lot like the inner loop of development for non-AI coding as well. Basically you give the agent a prompt, it does some work in the background. Maybe you babysit it and watch everything it's doing and hit the Y key every time it wants to run a command. Then the agent finishes, you look at the output. You see if the tests are passing. You see if this actually satisfies what you asked for. And then maybe you prompt the agent again to get it a little closer to the answer. Or maybe you're satisfied with the result. You commit the results and push.**

我想聊聊这些工作流在实践中是什么样的。如果你习惯使用本地 agent，这个循环可能看起来很熟悉。这是一个非常典型的循环，看起来很像非 AI 编码的开发内循环。基本上你给 agent 一个提示，它在后台工作。也许你像保姆一样盯着它，看它做的每件事，每次它要运行命令时按 Y 键。然后 agent 完成了，你看看输出，看看测试是否通过，看看这是否真的满足了你的要求。然后也许你再次提示 agent 让它更接近答案，或者你对结果满意了，提交结果并推送。

解析：
* **in practice**：在实践中
* **inner loop of development**：开发内循环
* **babysit**：像保姆一样照看
* **satisfies what you asked for**：满足你的要求
* **commit and push**：提交并推送（Git 操作）

---

(23) [15:14-15:58] **For bigger orchestrated tasks, this becomes a little bit more complicated. Basically what you need to do is, maybe hand in hand with Claude, you want to decompose your task into a series of tasks that can be executed individually by agents. Then you'll send off an agent for each one of those individual tasks. And you'll do one of those agents for each of the individual tasks. And then finally at the end, maybe with the help of an agent, you're going to need to pull in all the output together from all those individual agents into a single change and merge that into your codebase.**

对于更大的编排任务，这会变得更复杂一些。基本上你需要做的是——也许和 **Claude** 配合——把你的任务分解成一系列可以由 agent 单独执行的任务。然后你为每个单独的任务派出一个 agent。最后，也许在 agent 的帮助下，你需要把所有单独 agent 的输出汇总到一起，合并成一个变更，然后合并到你的代码库中。

解析：
* **hand in hand with**：与...配合、携手
* **decompose**：分解
* **send off**：派出、发送
* **pull in**：拉入、汇集
* **a single change**：一个单一的变更

---

(24) [15:58-16:32] **Very importantly, there's still a lot of human in the loop here. You need to review not just the final output of the collated result but the intermediate outputs for each agent. I like to tell folks the goal is not to automate this process 100%. It's something like 90% automation. That's still an order of magnitude productivity lift. I think this is really tricky to get right. This is where a lot of thought comes into the process of like how am I going to break the task down so that I can verify each individual step and so that I can actually automate this whole process without just ending up with a high coded mess.**

非常重要的是，这里仍然有大量的人类参与。你需要审查的不只是汇总结果的最终输出，还有每个 agent 的中间输出。我喜欢告诉大家：目标不是 100% 自动化这个过程，而是大约 90% 的自动化。这仍然是一个数量级的生产力提升。我认为这真的很难做对。这就是需要大量思考的地方——如何分解任务，以便我能验证每个单独的步骤，以便我能真正自动化整个过程，而不是最后得到一堆乱糟糟的代码。

解析：
* **human in the loop** 🔥：人在回路中（人类参与决策的自动化流程）
* **collated result**：汇总的结果
* **order of magnitude**：一个数量级（10 倍）🔥
* **tricky to get right**：很难做对
* **a high coded mess**：一堆乱糟糟的代码

---

(25) [16:32-17:22] **This is a typical git workflow that I like to use for tasks like this. Typically we'll start a new branch on our repository. We might add some high level context to that branch using an agent or an Open Hands concept of a micro agent. Just a markdown explaining "here's what we're doing here" so the agent knows "okay we're migrating from Redux to Zustand" or "we're going to migrate these Spark 2 jobs to Spark 3." You might want to put some kind of scaffolding in place. I'll talk a little bit more about examples of scaffolding later. You're going to create a bunch of agents based on that first branch. The idea is that they're going to be submitting their work into that branch and it's basically going to accumulate our work as we go along. And then eventually once we get to the end, we can rip out our scaffolding and merge that branch into main.**

这是我喜欢用于这类任务的典型 git 工作流。通常我们会在仓库上开一个新分支。我们可能会使用 agent 或 **Open Hands** 的"微 agent"概念给这个分支添加一些高层上下文——就是一个 markdown 文件解释"我们在这里做什么"，这样 agent 就知道"好的，我们在从 Redux 迁移到 Zustand"或"我们要把这些 Spark 2 任务迁移到 Spark 3"。你可能想要放置一些脚手架。稍后我会讲更多脚手架的例子。你会基于那个第一个分支创建一堆 agent。想法是它们会把工作提交到那个分支，随着我们的进行，工作基本上会在那里累积。然后最终当我们完成时，可以拆掉脚手架，把那个分支合并到 main。

解析：
* **git workflow**：Git 工作流
* **branch**：分支
* **micro agent**：微 agent
* **scaffolding** /ˈskæfəldɪŋ/：脚手架（临时的辅助结构）🔥
* **accumulate**：累积
* **rip out**：拆除、撕掉 🔥

---

(26) [17:22-18:04] **Now if you're kind of getting started with this, I would suggest limiting yourself to about three to five concurrent agents. I find more than that your brain starts to break. But for folks that have really adopted orchestration at scale, we see them running hundreds, even thousands of agents concurrently. Usually a human is not in the loop for, you know, one human is not on the hook to review every single one. But maybe those agents are sending out pull requests to individual teams, things like that. So you can scale up very aggressively once you start to get a feel for how all this works and you feel like you have a very good way of getting that human input into the loop.**

如果你刚开始尝试这个，我建议把自己限制在大约 3 到 5 个并发 agent。我发现超过这个数量，你的大脑就会崩溃。但对于那些真正大规模采用编排的人，我们看到他们同时运行数百甚至数千个 agent。通常不会有一个人负责审查每一个——可能那些 agent 会向各个团队发送 PR 之类的。所以一旦你开始掌握这一切是如何运作的，并且觉得你有很好的方法让人类参与到循环中，你就可以非常积极地扩大规模。

解析：
* **concurrent agents**：并发的 agent
* **your brain starts to break**：你的大脑开始崩溃（口语表达）
* **on the hook to**：有责任去...、负责... 🔥
* **scale up aggressively**：积极扩大规模
* **get a feel for**：掌握、对...有感觉

---

(27) [18:04-18:56] **I'm going to kick it off to my coworker Calvin here. He's going to talk about a very large scale migration, basically eliminating code smells from the Open Hands codebase that he did using our refactor SDK. Open Hands excels at solving focused tasks. Give it a focused problem, something like "fix my failing CI," "add and debug this endpoint," and it delivers. But like all agents, it can stumble when the scope grows too large. Let's say I want to refactor an entire codebase. Maybe enforce certain styling, update a dependency, or even migrate from one framework to another. These are not tasks. They're sprawling, interconnected changes that can touch hundreds of files.**

我要把话筒交给我的同事 **Calvin**。他会讲一个非常大规模的迁移——基本上是用我们的重构 SDK 从 **Open Hands** 代码库中消除代码异味。**Open Hands** 擅长解决聚焦的任务。给它一个聚焦的问题，比如"修复我失败的 CI"、"添加并调试这个端点"，它就能交付。但像所有 agent 一样，当范围变得太大时它会跌倒。比如说我想重构整个代码库，也许是强制执行某种代码风格、更新依赖、甚至从一个框架迁移到另一个。这些不是任务，它们是蔓延的、相互关联的变更，可能涉及数百个文件。

解析：
* **kick it off to**：把话筒交给、转交给
* **code smells** 🔥：代码异味（指代码中的坏味道，暗示潜在问题）
* **excels at**：擅长于
* **stumble** /ˈstʌmbl/：跌倒、绊倒
* **sprawling** /ˈsprɔːlɪŋ/：蔓延的、杂乱的 🔥
* **interconnected**：相互关联的

---

(28) [18:56-20:56] **To battle problems at this scale, we're using the Open Hands agent SDK to build tools designed to specifically orchestrate collaboration between humans and multiple agents. As an example, let's work to eliminate code smells from the Open Hands codebase. Here's the repository structure. Just the core agent definition has about 380 files spanning 60,000 lines of code. Says a lot about the volume of the code but not much about the structure. So let's use our new tools to visualize the dependency graph of this chunk of the repository. Here each node represents a file. The edges show dependencies, who imports who. And as we keep zooming out, it becomes clear this tangled web is why refactoring at scale is hard. To make this manageable, we need to break the graph up into human-sized chunks. Think PR-size batches that an agent can handle, a human can understand. There are many ways to batch based on what's important to you. Graph theoretic algorithms give strong guarantees about the structure of edges in between induced batches. But for our purposes, we can simply use the existing directory structure to make sure that semantically related files appear inside the same batch. Navigating back to the dependency graph, we can see that the colors of the nodes are no longer randomly distributed. Instead, they correspond to the batch that each of those associated files exists in. Zooming out and zooming back in, we easily find a cluster of adjacent nodes that are all the same color, which indicates that an agent is going to access all of those files simultaneously. Of course, this graph is still large and incredibly tangled. To construct a simpler view, we'll build a new graph where nodes are batches and the edges between those nodes are dependencies that are inherited from the files within each of those batches. This view is much simpler. We can see the entire structure on our screen at the same time. But this is something we can work with using a graph. We can identify batches that have no dependencies and expect the files that go.**

为了应对这种规模的问题，我们使用 **Open Hands** agent SDK 构建专门用于编排人类和多个 agent 协作的工具。举个例子，让我们来消除 **Open Hands** 代码库中的代码异味。这是仓库结构。仅核心 agent 定义就有大约 380 个文件，跨越 6 万行代码。这说明了代码量，但没说明结构。所以让我们用新工具来可视化这块仓库的依赖图。这里每个节点代表一个文件，边表示依赖关系——谁导入谁。当我们不断缩小视图，就能清楚地看到这个纠缠的网络正是大规模重构困难的原因。为了让这变得可管理，我们需要把图拆分成人类可处理的块——想想 PR 大小的批次，agent 能处理、人类能理解的大小。有很多方法可以根据你关心的东西来分批。图论算法对诱导批次之间的边结构有强保证。但对于我们的目的，我们可以简单地使用现有的目录结构，确保语义相关的文件出现在同一批次中。回到依赖图，我们可以看到节点的颜色不再是随机分布的，而是对应于每个关联文件所在的批次。缩小再放大，我们很容易找到一簇相邻的、颜色相同的节点，这表明 agent 将同时访问所有这些文件。当然，这个图仍然很大、非常纠缠。为了构建更简单的视图，我们将构建一个新图，其中节点是批次，节点之间的边是从每个批次内文件继承的依赖关系。这个视图简单多了，我们可以在屏幕上同时看到整个结构。但这是我们可以用图来处理的东西。我们可以识别没有依赖的批次，然后处理那些文件。

解析：
* **dependency graph**：依赖图 🔥
* **node**：节点
* **edge**：边（图论术语）
* **tangled web**：纠缠的网络
* **human-sized chunks**：人类可处理大小的块
* **PR-size batches**：PR 大小的批次
* **graph theoretic algorithms**：图论算法
* **induced batches**：诱导的批次
* **semantically related**：语义相关的
* **cluster**：簇、集群
* **adjacent nodes**：相邻节点

---

## 📚 段落小结

这是 **Open Hands** 联合创始人 **Robert Brennan** 及其同事 **Calvin** 关于"用并行 Agent 实现大规模自动化重构"的技术分享。演讲分为两部分：

**Robert** 首先回顾了代码生成从"上下文无感知片段"→"上下文感知补全"→"自主 Agent"→"并行编排"的演进历程，解释了为什么某些任务不能"一把梭"（上下文窗口限制、偷懒问题、错误累积、缺乏领域知识等），并强调这种工作方式的转变就像从 IC 变成 Manager。他推荐新手从 3-5 个并发 agent 开始，使用分支 + 脚手架的 Git 工作流，目标是 90% 自动化而非 100%。

**Calvin** 随后演示了如何使用依赖图可视化和批次划分来处理 6 万行代码的大规模重构。通过将文件按目录结构分组成"人类可处理"的批次，让 agent 可以并行处理语义相关的文件簇，最终实现对整个代码库的系统性代码异味消除。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **agent orchestration** | Agent 编排，协调多个 AI agent 协同工作 |
| **toil** | 繁重的重复性劳动 |
| **tech debt** | 技术债务 |
| **bleeding edge** | 最前沿（比 cutting edge 更激进） |
| **inner loop of development** | 开发内循环（写代码→运行→调试→修复） |
| **churn through** | 持续迭代处理 |
| **context window** | 上下文窗口（LLM 处理文本长度限制） |
| **laziness problem** | 偷懒问题（LLM 不完成全部任务） |
| **compound** | 复合、累积（错误会累积放大） |
| **human in the loop** | 人在回路中 |
| **order of magnitude** | 一个数量级（10 倍） |
| **scaffolding** | 脚手架（临时辅助结构） |
| **rip out** | 拆除 |
| **code smells** | 代码异味 |
| **dependency graph** | 依赖图 |
| **definition of done** | 完成的定义 |
| **take a shot in the dark** | 瞎猜、盲目尝试 |
| **on the hook to** | 有责任去... |
| **Zustand** | React 轻量级状态管理库 |
