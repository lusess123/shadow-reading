# 📚 RAG 系统学习笔记

> **学习项目**：[RAG_Techniques](~/Documents/github/RAG_Techniques/)
> **开始时间**：2026-02-01
> **学习状态**：进行中 🚧
> **上次学习**：2026-02-01（向量相似度度量 + FAISS 基础）

---

## 🎯 学习目标

系统掌握 RAG（Retrieval-Augmented Generation）从基础到高级的全部技术，能独立设计和优化生产级 RAG 系统。

---

## 🗺️ 学习路线图

### ✅ 已完成

- [x] 向量相似度度量（L2、余弦相似度、内积）
- [x] FAISS 向量数据库基础 & 局限性

### 📍 第一阶段 🌱 基础打牢

- [ ] `simple_rag` — 最基础的 RAG 实现，跑通整个流程
- [ ] `choose_chunk_size` — 文本分块大小选择策略
- [ ] `proposition_chunking` — 命题级分块
- [ ] `semantic_chunking` — 基于语义的分块

### 📍 第二阶段 🔍 查询优化

- [ ] `query_transformations` — 查询改写和扩展
- [ ] `HyDE` — 假设性文档嵌入
- [ ] `contextual_compression` — 上下文压缩

### 📍 第三阶段 🚀 高级检索

- [ ] `fusion_retrieval` — 关键词 + 向量混合搜索
- [ ] `reranking` — 重排序
- [ ] `hierarchical_indices` — 多层索引

### 📍 第四阶段 🧠 自适应 & 迭代

- [ ] `adaptive_retrieval` — 根据查询动态调整策略
- [ ] `self_rag` — 动态决定何时用检索
- [ ] `crag` — 纠正式 RAG

### 📍 第五阶段 🏗️ 高级架构

- [ ] `graph_rag` — 知识图谱 + RAG
- [ ] `raptor` — 递归树状组织检索
- [ ] `Agentic_RAG` — Agent 驱动的 RAG

### 📍 补充模块

- [ ] `context_enrichment_window_around_chunk` — 上下文窗口增强
- [ ] `contextual_chunk_headers` — 上下文块头
- [ ] `document_augmentation` — 文档增强
- [ ] `explainable_retrieval` — 可解释检索
- [ ] `multi_model_rag_with_captioning` — 多模态 RAG（图片描述）
- [ ] `multi_model_rag_with_colpali` — 多模态 RAG（ColPali）
- [ ] `reliable_rag` — 可靠 RAG
- [ ] `retrieval_with_feedback_loop` — 反馈循环检索
- [ ] `relevant_segment_extraction` — 相关段落提取
- [ ] `dartboard` — Dartboard 方法
- [ ] `HyPE` — 假设性 Prompt 嵌入
- [ ] `simple_csv_rag` — CSV 数据 RAG

---

## 📖 已学知识详细笔记

---

### 一、RAG 全局概念

> **RAG = Retrieval-Augmented Generation**（检索增强生成）
>
> 用户问问题 → 先从知识库里**搜出相关文档** → 把文档塞给 LLM → LLM **基于这些文档**来回答
>
> 好处：LLM 不再瞎编（幻觉），因为它是"看着资料答题"

#### RAG 完整链路

```
原始文档(PDF/Confluence/Git)
    → 解析（Unstructured/PyPDF）
    → 结构化文本
    → 切片(Chunks)
    → 向量化(Embedding)
    → 向量数据库
    → 检索召回(Retrieval)
    → 重排序(Reranking)
    → LLM 生成(Generation)
    → 质量评估(Evaluation)
```

#### RAG 延迟分解（典型值）

| 步骤 | 典型延迟 |
|------|---------|
| Embedding query | 50-100ms |
| 向量检索 | 10-50ms |
| BM25 检索 | 10-30ms |
| Cross-Encoder 重排 | 100-300ms |
| LLM 生成（最慢！） | 800-2000ms |
| **总计** | **~1-2.5s** |

> 💡 瓶颈明显在 LLM 生成这一步，占 60-70% 延迟

---

### 二、向量相似度度量 ⭐ 已掌握

> 📅 学习时间：2026-02-01

#### 三种主流距离计算方式

**1. L2 欧氏距离 — "两点之间的直线距离"**

高中就学过的公式，只是 AI 里维度更高（可能 768 维、1536 维）。

```
d = √((x₁-x₂)² + (y₁-y₂)² + ...)
```

- 越**小**越相似
- 同时关心方向和长度

**2. 余弦相似度 — "两个箭头方向像不像"**

只看方向，不关心长短。关键公式：

```
cos(θ) = A·B / (|A| × |B|)
```

- 越**大**越相似（最大为 1，方向完全一致）
- ❌ 不关心长度，只关心方向

**3. 内积（IP）— "方向 × 力度"**

同时考虑方向和长度：

```
内积 (IP) = |A| × |B| × cos(θ)
              ↑           ↑
           长度信息     方向信息
```

- 越**大**越相似

#### 对比总结表

| 度量 | 关心长度？ | 关心方向？ | 越___越相似 |
|------|-----------|-----------|------------|
| L2 | ✅ | ✅ | 越**小** |
| 余弦 | ❌ | ✅ | 越**大** |
| 内积 | ✅ | ✅ | 越**大** |

#### 关键结论

**Q: 内积是不是最准确的？**

**A: 不是信息多就好，而是"有用的信息"才好。**

例子：推荐科幻电影
- 小明看 1000 部（科幻 80%），小红看 50 部（科幻 78%），小刚看 2000 部（爱情 80%）
- **余弦** → 选小红（比例一致）✅
- **内积** → 可能选小刚（看得多，向量长，内积被撑大）❌

**终极知识点**：如果向量都**归一化**（长度=1），三种度量排序结果完全一样！
因为 OpenAI 等模型输出的就是归一化向量，所以实际上选哪个都行～

> 🎯 一句话：不是"考虑越多越准"，而是"场景里什么信息有用，就选关注那个信息的度量"

---

### 三、FAISS 向量数据库基础 ⭐ 已掌握

> 📅 学习时间：2026-02-01

#### 什么是 FAISS

- Facebook AI 开源的向量相似度搜索库
- 支持多种索引类型（Flat、IVF、HNSW 等）
- 学习/原型开发很好用

#### 为什么不适合生产环境

- **纯内存**：数据量大时内存不够
- **不支持分布式**：单机瓶颈
- **不支持动态增删**：增删数据需要重建索引
- **没有持久化**：重启后数据丢失（需手动保存/加载）

#### 生产环境向量数据库选型

| 数据库 | 特点 |
|--------|------|
| **Milvus** | 分布式、云原生、性能好 |
| **Pinecone** | 全托管 SaaS、开箱即用 |
| **Weaviate** | 内置多种模型、支持混合搜索 |
| **Qdrant** | Rust 编写、性能好、API 友好 |
| **Redis Stack** | 支持向量搜索 + 传统缓存一体化 |

---

### 四、RAG 评估指标 ⭐ 已掌握

> 📅 来源：面试准备时整理

#### 四大核心指标

| 指标 | 通俗解释 | 考察对象 |
|------|---------|---------|
| **Context Recall**（上下文召回率） | 该找到的资料，找全了吗？ | 检索能力 |
| **Context Precision**（上下文精确率） | 找到的资料里，有多少是真正有用的？ | 检索能力 |
| **Faithfulness**（忠实度） | LLM 的回答有没有瞎编？是不是都基于检索到的文档？ | 生成能力 |
| **Answer Relevance**（答案相关性） | LLM 的回答切题吗？有没有答非所问？ | 生成能力 |

#### Context Recall 详解

用考试类比：
- 标准答案有 3 个关键点
- 检索出的文档覆盖了 2 个
- Context Recall = 2/3 = 66.7%

```
Context Recall = 被覆盖的关键点 / 标准答案总关键点
```

> 需要一个**标注好的测试集**（Golden Dataset），包含：问题 + 人工写的标准答案（ground truth）

简单记忆：
- **Recall / Precision** → 考的是"找资料"这一步好不好
- **Faithfulness / Relevance** → 考的是"写答案"这一步好不好

---

### 五、RAG 工程实践要点 ⭐ 已掌握

> 📅 来源：面试准备时整理

#### 5.1 数据管道

**PDF 解析**：
- Unstructured 库的 `hi_res` 策略（基于 detectron2/YOLOX 布局检测）
- 扫描件需要开 OCR（Tesseract / PaddleOCR）
- 多栏 PDF 的阅读顺序问题

**切片策略**：
- 传统定长切分（RecursiveCharacterTextSplitter）：按固定字数暴力切，不管语义边界
- **Markdown 层级感知切片**：按标题层级分割，每个 chunk 继承父级标题上下文
- chunk size 通常 512-1024 token，overlap 通常 50-200 token
- 太大 → 检索不精准，太小 → 上下文丢失

#### 5.2 检索策略

**混合检索（Hybrid Search）**：
- BM25（关键词匹配）+ Embedding（语义匹配）多路召回
- 结果融合方式：RRF（Reciprocal Rank Fusion）或 Score Fusion（加权求和，α 调比例）

**Cross-Encoder 重排序**：
- Bi-Encoder：分别编码 query 和 doc，速度快但精度低
- Cross-Encoder：同时编码 query+doc，精度高但速度慢
- 典型方案：先用 Bi-Encoder 检索 Top-K，再用 Cross-Encoder 精排 Top-N

#### 5.3 生成优化

**Citation-Aware Prompt**：
- 让 LLM 在回答时标注信息来源
- 实现 100% 来源可溯源

#### 5.4 缓存策略

**Semantic Cache**：
- 用户提问 → 算 embedding → 在 Redis 里向量搜索历史问题
- 相似度 > 阈值（如 0.95）→ 直接返回缓存答案
- ⚠️ 陷阱：语义相近但答案不同的问题（如"配置集群" vs "配置哨兵"）
- 解决：加元数据过滤 + 时间衰减（TTL）

#### 5.5 评估体系

**Ragas 框架**：
- 自动化评估 RAG 系统的工具
- 可用 GPT-4 作为 LLM-as-a-Judge
- 需要 Golden Dataset（200+ 条标注数据）进行回归测试
- ⚠️ GPT-4 做 Judge 本身也会出错，需要人工抽检校准

---

## 📍 下次学习从这里开始

> **下一步**：打开 `simple_rag.ipynb`，跑通最基础的 RAG 流程
>
> 路径：`~/Documents/github/RAG_Techniques/all_rag_techniques/simple_rag.ipynb`
>
> 学习要点：
> 1. 理解完整 RAG 流程的代码实现
> 2. 关注文档加载 → 切片 → embedding → 检索 → 生成 每一步怎么做
> 3. 尝试修改参数（chunk size、top_k 等）观察效果变化

---

## 📎 相关资源

- **RAG_Techniques 项目**：`~/Documents/github/RAG_Techniques/`（37 个 RAG 技术的完整实现）
- **Advanced QA and RAG Series**：`~/Documents/github/Advanced-QA-and-RAG-Series/`
- **RAG 面试追问指南**：`.ai-doc/RAG面试追问指南-萧耀伦.md`
- **RAG 与权重学习翻译**：`RAG与权重学习.k7m3x9.md`
- **Agentic RAG 翻译**：`english_translation_agentic_rag.md`
- **RAG Limitations 翻译**：`~/Documents/demo/reading/english-translation-rag-limitations.md`

---

*最后更新：2026-03-08*
