# 🎯 Docling 文档处理框架介绍 英语段落翻译

本文共 **18 个语义单元**，将全部翻译。

---

(1) [0:00-0:27] **Let's talk about one of the biggest missing pieces in retrieval augmented generation pipelines, or AI agents, because it's all about data preparation. Because in order for your model to provide better and more accurate responses, it needs to fully understand the data that you're using, right? Whether that data is formatted perhaps as a PDF, right? Or maybe some type of table, image, audio, honestly, you name it, right? And that's exactly where Docling comes in.**

让我们来聊聊 **RAG** 管道或 **AI agent** 中最大的一块缺失拼图——那就是数据准备。因为想让你的模型给出更好、更准确的回答，它就得完全理解你使用的数据，对吧？不管这些数据是 **PDF**、表格、图片、音频，还是别的什么格式，都需要处理。而这正是 **Docling** 发挥作用的地方。

解析：
* **retrieval augmented generation (RAG)** /rɪˈtriːvəl ɔːɡˈmentɪd/：检索增强生成，一种让 AI 结合外部知识回答问题的技术架构
* **pipeline** /ˈpaɪplaɪn/：名词，流水线、处理管道
* **you name it** 🔥：口语短语，"你说什么都行"，表示列举不完

---

(2) [0:27-0:54] **Docling is an open-source framework that allows you to process all kinds of files in a clean, structured text that large language models can actually use. Right. Because in most data heavy organizations, you're gonna encounter a variety of different file types, from those PDFs to Word files, PowerPoint, scanned images and even spreadsheets. Right? But these are all types of unstructured data that need to be converted into a format, such as Markdown or plain text or JSON in order to be used in RAG or agentic workflows.**

**Docling** 是一个开源框架，能把各种文件处理成干净、结构化的文本，让大语言模型真正能用。因为在大多数数据密集型组织里，你会遇到各种文件类型——**PDF**、**Word**、**PowerPoint**、扫描图片、甚至电子表格。但这些都是非结构化数据，需要转换成 **Markdown**、纯文本或 **JSON** 这样的格式，才能用于 **RAG** 或 **agentic** 工作流。

解析：
* **data heavy organizations**：数据密集型组织
* **unstructured data** /ʌnˈstrʌktʃəd/：非结构化数据，指没有固定格式的数据
* **agentic** /eɪˈdʒentɪk/：形容词，AI 术语，指具有自主决策能力的（Agent 相关的）
* **workflow** /ˈwɜːrkfloʊ/：名词，工作流程

---

(3) [0:54-1:11] **And typical scripting and OCR can be quite tedious, right? But Docling is purpose-built for this exact situation. That's right. The real challenge in RAG or agentic AI isn't building the agent, but curating the knowledge and the context behind it.**

传统的脚本和 **OCR** 处理起来可能相当繁琐，对吧？但 **Docling** 就是专门为这种场景设计的。没错，**RAG** 或 **agentic AI** 的真正挑战不是构建 agent，而是整理背后的知识和上下文。

解析：
* **OCR** (Optical Character Recognition)：光学字符识别，把图片中的文字转成可编辑文本
* **tedious** /ˈtiːdiəs/：形容词，乏味的、繁琐的
* **purpose-built** 🔥：形容词，专门建造的、量身定制的
* **curating** /kjʊˈreɪtɪŋ/：动词，策划、整理、精选

---

(4) [1:11-1:32] **Today you'll learn all about Docling's document processing features from the Docling MCP server to structured information extraction and multimodal RAG, all features that you can start using today so let's get started. I'm glad you mentioned MCP or Model Context Protocol, because this is an open standard for our AI applications to integrate with external tools and data sources. So this is specifically for AI agents here.**

今天你将学习 **Docling** 文档处理的全部功能——从 **Docling MCP server** 到结构化信息提取和多模态 **RAG**，这些功能你今天就能开始使用，那就开始吧！很高兴你提到了 **MCP**（**Model Context Protocol**，模型上下文协议），这是一个开放标准，让 AI 应用能够与外部工具和数据源集成。这个协议专门为 AI agent 设计的。

解析：
* **multimodal** /ˌmʌltiˈmoʊdl/：形容词，多模态的（涉及文本、图像、音频等多种形式）
* **Model Context Protocol (MCP)**：模型上下文协议，一个让 AI 应用连接外部工具的开放标准
* **integrate with** /ˈɪntɪɡreɪt/：动词短语，与...整合/集成

---

(5) [1:32-2:05] **Um, now the thing is Docling's MCP server can plug directly into your favorite desktop client, like Claude desktop or LM Studio or Cursor. So, let's go ahead and draw this to be our MCP client. And I will establish a connection to the Docling MCP server. Right? So we'll have this running perhaps on our local machine. Uh. And this is the MCP, ah, server that will be used to actually transform our documents into that structured data that we need.**

现在关键是，**Docling** 的 **MCP server** 可以直接接入你喜欢的桌面客户端，比如 **Claude Desktop**、**LM Studio** 或 **Cursor**。那我们画一下，这边是 **MCP** 客户端，然后建立与 **Docling MCP server** 的连接。这个服务可能跑在你的本地机器上，它就是用来把我们的文档转换成所需结构化数据的 **MCP server**。

解析：
* **plug into** 🔥：动词短语，接入、插入（这里指软件集成）
* **establish a connection**：建立连接
* **transform... into**：把...转换成...

---

(6) [2:05-2:39] **So that we can do a call from our application to say, "Hey, I need you to take this PDF and convert this into Markdown." And then at the end of the day, be able to have that extracted file format, like for example, that Markdown here in a structured format. Right? So because of the standardization, no matter what LLM or agent that you end up using, if it supports tool calling, then you can use the Docling MCP server to do this conversion in various formats, like PDF, just by using natural language.**

这样我们就能从应用程序发起调用，说："嘿，我需要你把这个 **PDF** 转成 **Markdown**。"最终就能拿到提取后的文件格式，比如这里的结构化 **Markdown**。因为有了标准化，无论你用什么 **LLM** 或 **agent**，只要它支持 **tool calling**（工具调用），你就能用 **Docling MCP server** 通过自然语言来完成各种格式的转换，比如 **PDF**。

解析：
* **at the end of the day** 🔥：口语短语，最终、归根结底
* **standardization** /ˌstændərdaɪˈzeɪʃn/：名词，标准化
* **tool calling**：工具调用，AI 术语，指模型调用外部工具的能力

---

(7) [2:39-3:06] **One of the most common downstream uses after conversion is RAG, because Docling is outputting a rich hierarchical Docling document with element types, headings, and per-element metadata, you get structure where chunking out of the box. That means splitting by sections, tables and captions, and automatically carrying parent context, like titles and headers, producing more cohesive chunks and better retrieval signals than I need fixed-size splits.**

转换后最常见的下游用途之一是 **RAG**。因为 **Docling** 输出的是富层次结构的 **Docling** 文档，包含元素类型、标题和每个元素的元数据，所以开箱即用就有结构化的分块能力。这意味着可以按章节、表格和标题来切分，并自动携带父级上下文（如标题和页眉），产生比固定大小切分更连贯的块和更好的检索信号。

解析：
* **downstream** /ˌdaʊnˈstriːm/：形容词，下游的（指处理流程的后续环节）
* **hierarchical** /ˌhaɪəˈrɑːrkɪkl/：形容词，层次化的、分层的
* **metadata** /ˈmetədeɪtə/：名词，元数据（描述数据的数据）
* **out of the box** 🔥：短语，开箱即用
* **chunking**：名词，分块（RAG 中将文档切成小块的过程）
* **cohesive** /koʊˈhiːsɪv/：形容词，有凝聚力的、连贯的

---

(8) [3:06-3:26] **Docling also enables multimodal RAG. Images and tables are preserved, and you can optionally enrich figures with text descriptions so that they're retrievable alongside text. Every element includes provenance, page and bounding box information, so you can visualize exactly where each retrieve span is coming from, allowing you to overlay highlights, link back to source pages and make results that are easy to review and trust.**

**Docling** 还支持多模态 **RAG**。图片和表格会被保留，你还可以选择性地为图表添加文字描述，使它们能和文本一起被检索到。每个元素都包含来源、页码和边界框信息，所以你能精确地可视化每个检索片段的出处，可以叠加高亮显示、链接回源页面，使结果便于审查和信任。

解析：
* **preserve** /prɪˈzɜːrv/：动词，保留、保存
* **enrich** /ɪnˈrɪtʃ/：动词，丰富、充实
* **provenance** /ˈprɒvənəns/ 🔥：名词，来源、出处（常用于数据溯源场景）
* **bounding box**：边界框（图像处理术语，标记对象位置的矩形框）
* **overlay** /ˌoʊvərˈleɪ/：动词，叠加、覆盖

---

(9) [3:26-3:52] **Now, we mentioned how most business documents, like invoices or reports, are unstructured, right? But let's think about typical OCR, because when we have OCR and our business documents. Right? Well what we get back as a result is just the text. Right? So we've just got the texture. But when we combine that same document with Docling, what we get the hierarchy of the actual document.**

我们提到过大多数商业文档（如发票或报告）都是非结构化的，对吧？让我们想想传统 **OCR**——当我们对商业文档做 **OCR** 处理时，得到的结果只是文本，纯粹的文本而已。但当我们用 **Docling** 处理同样的文档时，得到的是文档的实际层级结构。

解析：
* **invoice** /ˈɪnvɔɪs/：名词，发票
* **hierarchy** /ˈhaɪərɑːrki/：名词，层级结构、等级体系

---

(10) [3:52-4:22] **So, what we're able to do is be able to have a structured output, right? So specifically, with the information extraction feature Docling, we can define exactly what we want to extract. Say for example in this scenario it is the number of the bill or perhaps the cost of the price of the invoice. All things that are very important to be able to extract from a document, but typically with unstructured data, can be hard to parse through.**

所以我们能做的就是获得结构化输出。具体来说，使用 **Docling** 的信息提取功能，我们可以精确定义想要提取的内容。比如在这个场景中，可能是账单号或者发票金额。这些都是需要从文档中提取的重要信息，但传统的非结构化数据处理起来往往很困难。

解析：
* **information extraction**：信息提取（NLP 术语，从文本中自动识别结构化信息）
* **parse through** /pɑːrs/：动词短语，解析、分析处理

---

(11) [4:22-4:44] **And with the information extraction, you can define a template or a schema with the desired fields that you would like and receive this clean and also validated and structured data that matches your scheme or pydantic model, and that data is ready to feed into your application and API. A RAG pipeline. That's a huge deal, because you get type safety and validation from these PDFs, ah, from the beginning, turning unstructured data into truly structured output.**

通过信息提取功能，你可以定义一个模板或 **schema**，指定你想要的字段，然后收到干净、经过验证、符合你的 **schema** 或 **Pydantic** 模型的结构化数据。这些数据可以直接输入到你的应用、**API** 或 **RAG** 管道中。这是个大事，因为你从 **PDF** 开始就获得了类型安全和数据验证，把非结构化数据变成了真正的结构化输出。

解析：
* **schema** /ˈskiːmə/：名词，模式、架构（定义数据结构的规范）
* **Pydantic**：Python 的数据验证库，用于定义数据模型
* **type safety**：类型安全（编程概念，确保数据类型正确）
* **validation** /ˌvælɪˈdeɪʃn/：名词，验证
* **a huge deal** 🔥：口语，大事、很重要的事

---

(12) [4:44-5:01] **Docling doesn't live alone. It plugs into the tools you already use so the same documents flow straight into your RAG stacks. At the center is Docling.**

**Docling** 不是孤立存在的。它能接入你已有的工具，让同样的文档直接流入你的 **RAG** 技术栈。**Docling** 处于核心位置。

解析：
* **live alone**：独自存在（这里比喻不是孤立的工具）
* **stack**：名词，技术栈（一组配合使用的技术）
* **flow straight into**：直接流入

---

(13) [5:01-5:24] **Docling outputs drop into the major RAG frameworks, including LangChain, LlamaIndex, Haystack and LangFlow. So documents become chunks in Markdown, ready for retrieval and prompting. Up a layer, teams wire Docling in a data pipeline's automation, batch or real-time data processing pipelines.**

**Docling** 的输出可以直接接入主流 **RAG** 框架，包括 **LangChain**、**LlamaIndex**、**Haystack** 和 **LangFlow**。文档变成 **Markdown** 格式的块，可用于检索和 prompt。再上一层，团队可以把 **Docling** 接入数据管道自动化，无论是批处理还是实时数据处理管道。

解析：
* **drop into**：直接接入、落入
* **prompting**：名词，提示（向 AI 模型发送提示的过程）
* **wire** /waɪər/：动词，连接、接入（口语化用法）
* **batch processing**：批处理（一次处理一批数据）
* **real-time**：实时的

---

(14) [5:24-5:42] **At the edge, you can ship product, chat apps, agents and analytics. Docling stays the same. Everything else is a configuration choice. Docling's growing integration ecosystem means less glue code. Parse once, choose your framework and keep swapping pieces as you grow.**

在边缘端，你可以发布产品、聊天应用、agent 和分析工具。**Docling** 保持不变，其他一切都是配置选择。**Docling** 不断增长的集成生态意味着更少的胶水代码。解析一次，选择你的框架，随着发展可以不断替换组件。

解析：
* **at the edge**：在边缘端（指最终用户接触的层面）
* **ship** /ʃɪp/ 🔥：动词，发布、交付（软件开发用语）
* **glue code**：胶水代码（用于连接不同系统/组件的代码）
* **parse** /pɑːrs/：动词，解析
* **swap** /swɒp/：动词，交换、替换

---

(15) [5:42-5:58] **So if you're building RAG systems or AI agents that actually understand your enterprise data, Docling is gonna help make sure that your PDFs, your presentations and more can be truly used by AI to get more accurate and transparent resources.**

所以如果你正在构建真正理解企业数据的 **RAG** 系统或 **AI agent**，**Docling** 会帮助确保你的 **PDF**、演示文稿等资料能真正被 AI 使用，获得更准确、更透明的结果。

解析：
* **enterprise data**：企业数据
* **transparent** /trænsˈpærənt/：形容词，透明的（这里指结果可追溯、可解释）

---

(16) [5:58-6:17] **My favorite part is that it is open-source software under the MIT license, and it's also part of the Linux Foundation, ah, Data and AI Foundation. So it's got a governing organization that helps it be perfect for secure, regulated environments. Think healthcare or financial industries where we need governance, but we also need an on-premises system.**

我最喜欢的一点是它是 **MIT** 许可证下的开源软件，而且属于 **Linux Foundation** 的 **Data and AI Foundation**。所以它有一个治理组织，使它非常适合安全、受监管的环境。想想医疗或金融行业，这些领域需要合规治理，同时也需要本地部署系统。

解析：
* **MIT license**：MIT 许可证（最宽松的开源许可证之一）
* **governing organization**：治理组织
* **regulated environments** /ˈreɡjuleɪtɪd/：受监管的环境
* **governance** /ˈɡʌvərnəns/：名词，治理、管理
* **on-premises** /ɒn ˈpremɪsɪz/ 🔥：形容词，本地部署的（与云端相对）

---

(17) [6:17-6:31] **But what's your thoughts and what would you like us to cover next? Be sure to let us know in the comments below, and feel free to like the video if you learned something today. Make sure to subscribe to the channel for more AI and technology learning, and we'll see you in the next video.**

你有什么想法？希望我们下期讲什么内容？记得在下方评论区告诉我们，如果今天学到了东西就点个赞吧。记得订阅频道获取更多 AI 和技术学习内容，下期视频见！

解析：
* **what's your thoughts**：口语表达，你怎么想（语法上应该是 what are your thoughts）
* **be sure to**：一定要...
* **subscribe to** /səbˈskraɪb/：动词短语，订阅

---

(18) [6:31] **Cheers.**

再见！

解析：
* **Cheers** 🔥：口语，再见、干杯（英式口语中常用作告别语）

---

## 📚 段落小结

这是一个介绍 **Docling** 开源框架的技术视频。**Docling** 是专为 **RAG** 和 **AI agent** 设计的文档处理工具，能将 **PDF**、**Word**、**PPT** 等非结构化文档转换为结构化数据。核心亮点包括：通过 **MCP server** 与各种 AI 客户端集成、支持多模态 **RAG**、提供信息提取和数据验证功能，以及与主流框架（**LangChain**、**LlamaIndex** 等）无缝对接。它是 **MIT** 开源项目，适合企业级部署。

### 🔥 核心词汇表

| 词汇/短语 | 含义 |
|---------|------|
| **RAG (Retrieval Augmented Generation)** | 检索增强生成 |
| **MCP (Model Context Protocol)** | 模型上下文协议 |
| **purpose-built** | 专门设计的 |
| **out of the box** | 开箱即用 |
| **provenance** | 来源、出处 |
| **chunking** | 分块 |
| **schema** | 模式、数据结构规范 |
| **glue code** | 胶水代码 |
| **on-premises** | 本地部署的 |
| **ship** | 发布、交付（软件） |
| **at the end of the day** | 最终、归根结底 |
| **plug into** | 接入、集成 |
