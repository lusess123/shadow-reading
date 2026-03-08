# Polymarket BTC 延迟套利策略可行性分析报告

> 📅 报告日期：2026年3月1日
> 🎯 分析对象：推特用户 @TGweb3333 所述 Polymarket BTC 价格延迟套利策略
> 💰 投入条件：100 USDT（欧易账户）
> ⚠️ 结论前置：**该策略已于 2026 年 2 月失效，推文本质是 Telegram 跟单机器人引流广告**

---

## 一、推文核心声称逐条拆解

| # | 声称内容 | 验证结果 | 判定 |
|---|---------|---------|------|
| 1 | 有人用 $50 滚到 $43.5 万 | 无法链上验证，类似声称多为营销话术 | ❌ 不可信 |
| 2 | Polymarket 更新 BTC 合约价格比真实行情慢半拍 | **曾经属实**，但已被修复 | ⚠️ 过时信息 |
| 3 | 监控 TradingView/CryptoQuant 捕捉 >0.3% 滞后 | 技术上可行，但当前费率已超过套利空间 | ❌ 不可行 |
| 4 | <100ms 完成交易 | Rust 客户端理论可行，但与盈利无关 | ⚠️ 无意义 |
| 5 | 每秒处理 1000+ 订单 | **假的**，API 限速 3000次/10分钟 = 5次/秒 | ❌ 虚假 |
| 6 | 每笔风险 0.3%-0.8% | 在 50% 赔率时，手续费已达 3.15%，吃掉全部利润 | ❌ 不可行 |
| 7 | 每天稳定赚 $400-700 | 策略已失效，无法实现 | ❌ 虚假 |
| 8 | 本地跑，不用云/GPU，Rust 写的 | Rust 客户端存在（polyfill-rs），但策略本身已死 | ⚠️ 无关 |
| 9 | 推荐 Telegram 跟单机器人 PolyCop | 典型引流变现，存在重大安全风险 | 🚨 高危 |

---

## 二、深度技术分析

### 2.1 Polymarket 的 BTC 市场到底是什么？

**核心认知：Polymarket 不是期货交易所，是二元预测市场。**

Polymarket 的 BTC 相关市场有三种类型：

| 类型 | 示例 | 结算方式 |
|------|------|---------|
| 里程碑市场 | "BTC 在 2026 年会到 $100K 吗？" | UMA 预言机 + Binance 价格 |
| 15 分钟市场 | "BTC 未来 15 分钟涨还是跌？" | Chainlink 预言机 |
| 5 分钟市场 | "BTC 未来 5 分钟涨还是跌？" | Chainlink 预言机 |

交易的是 YES/NO 二元期权份额（$0-$1），不是 BTC 本身。所谓"价格延迟套利"，本质是在 5/15 分钟市场中，利用 Polymarket 赔率更新滞后于交易所现货价格的时间差，在赔率还在 50/50 时买入已经大概率确定的方向。

**来源：**
- [Polymarket BTC Markets](https://polymarket.com/crypto/bitcoin)
- [CoinMarketCap: Polymarket 5-minute markets](https://coinmarketcap.com/academy/article/polymarket-debuts-5-minute-bitcoin-prediction-markets-with-instant-settlement)
- [Polymarket Chainlink Oracle Integration](https://cryptorank.io/news/feed/c875b-polymarkets-15-minute-up-down)

### 2.2 延迟套利曾经真实存在

**这不是完全编造的故事**——延迟套利在 2025 年底到 2026 年 1 月期间确实存在且有链上证据：

- 一个钱包通过 Binance-Polymarket 价格延迟套利，**1 个月赚了 $515,000**，胜率 99%
- 另一个 bot 用 $313 起步在一个月内滚到 $414,000
- OpenClaw bot 声称执行了 8,894 笔交易，盈利约 $150,000

**运作原理：**
1. 实时监控 Binance/Coinbase 的 BTC 现货价格
2. 当 BTC 在交易所明显走出方向时，Polymarket 5/15 分钟市场赔率仍在 ~50%
3. 在这个"确定性窗口"大量买入正确方向的 YES 份额
4. 等待市场价格收敛后获利

**来源：**
- [Finance Magnates: Dynamic Fees to Curb Latency Arbitrage](https://www.financemagnates.com/cryptocurrency/polymarket-introduces-dynamic-fees-to-curb-latency-arbitrage-in-short-term-crypto-markets/)
- [Yahoo Finance: Arbitrage Bots Dominate Polymarket](https://finance.yahoo.com/news/arbitrage-bots-dominate-polymarket-millions-100000888.html)
- [Phemex: Trader Nets $50K from Oracle Latency Exploit](https://phemex.com/news/article/trader-exploits-oracle-latency-for-50k-profit-in-one-week-45143)

### 2.3 策略已于 2026 年 2 月彻底失效

**Polymarket 在 2026 年 2 月采取了两项致命措施：**

#### 措施一：动态手续费（Dynamic Taker Fee）

| 赔率 | Taker 费率 | 影响 |
|------|-----------|------|
| 50%（套利主战场）| **~3.15%** | 远超套利利润空间 |
| 20% 或 80% | ~1.2% | 仍然吃掉大部分利润 |
| 接近 0% 或 100% | ~0% | 此时无套利机会 |

动态费用公式：`Fee = C × p × (1 - p) × FEE_RATE`

| 份额价格 (p) | 每 $1 费用 | 有效费率 | 套利需要的最低边际 |
|-------------|-----------|---------|-----------------|
| $0.05 | $0.003 | 0.30% | 0.31% |
| $0.20 | $0.010 | 1.00% | 1.25% |
| **$0.50** | **$0.016** | **1.56%** | **3.13%** |
| $0.80 | $0.010 | 1.00% | 5.00% |
| $0.95 | $0.003 | 0.30% | 5.94% |

**关键数据：在 50/50 赔率处（延迟套利主战场），你需要至少 3.13% 的边际才能盈亏平衡。推文声称每笔利润 0.3%-0.8%，远低于手续费。利润为负。**

#### 措施二：移除 500ms Taker 报价延迟

> "没有公告，没有提醒。一夜之间，平台上一半的 bot 变成了废铁。"
> —— BlockBeats 报道

这意味着做市商可以更快地更新报价，延迟套利的"确定性窗口"被大幅压缩甚至消失。

**结论：即使你今天照着这个策略完美复制，也会因为手续费而持续亏损。**

**来源：**
- [Polymarket New Rule Release - BlockBeats](https://m.theblockbeats.info/en/news/61326)
- [Polymarket Trading Fees Documentation](https://docs.polymarket.com/polymarket-learn/trading/fees)
- [Protos: Polymarket ends trading loophole](https://protos.com/polymarket-ends-trading-loophole-for-bitcoin-quants/)

### 2.4 API 限速击穿"每秒 1000 笔订单"的谎言

| 端点 | 限速 | 换算 |
|------|------|------|
| `/order`（下单） | 3000 次 / 10 分钟 | **5 次/秒** |
| 公共端点 | 60 次/分钟 | 1 次/秒 |
| WebSocket | 无限制 | 仅接收数据 |

推文声称"每秒 1000+ 订单"，实际 API 限速为 **5 次/秒**。差了 **200 倍**。

另外，推文声称"<100ms 完成交易"。实际情况：
- Polymarket 主服务器在 **AWS eu-west-2（伦敦）**，不是纽约
- 家用网络延迟：**50-200ms**
- 同机房 VPS：**1-5ms**
- 从中国通过 VPN 连接：**200-500ms+**

即使延迟足够低，**API 速率限制才是真正的瓶颈**，而不是网络延迟。

**来源：**
- [Polymarket API Rate Limits](https://docs.polymarket.com/quickstart/introduction/rate-limits)
- [py-clob-client Issue #147: Rate Limit Discussion](https://github.com/Polymarket/py-clob-client/issues/147)
- [QuantVPS: Polymarket Server Location](https://www.quantvps.com/blog/polymarket-servers-location)

---

## 三、$50 → $43.5 万的数学验证

### 3.1 复合增长计算

- 起始资金：$50
- 目标资金：$435,000
- 需要的倍数：**8,700 倍**

如果每笔交易净利润 0.5%（推文声称的中间值）：

```
$50 × (1.005)^n = $435,000
n = ln(8700) / ln(1.005)
n ≈ 1,819 笔连续盈利交易
```

如果每笔交易净利润 0.8%：

```
n = ln(8700) / ln(1.008)
n ≈ 1,138 笔连续盈利交易
```

### 3.2 链上可查的真实案例（对照组）

| 案例 | 初始资金 | 最终利润 | 时间 | 交易笔数 | 来源 |
|------|---------|---------|------|---------|------|
| 0x8dxd bot | **$313** | ~$438,000 | 1 个月 | 6,615 笔 | [Finbold](https://finbold.com/trading-bot-turns-313-into-438000-on-polymarket-in-a-month/) |
| 另一个 bot | $63 | ~$131,000 | 1 个月 | 不详 | [Finbold](https://finbold.com/trading-bot-turns-63-into-131k-on-polymarket-in-a-month/) |
| BTC 延迟套利 bot | ~$1,000 | ~$515,000 | 1 个月 | 数千笔 | [BlockBeats](https://m.theblockbeats.info/en/news/61326) |
| 人类交易员 | $12 | ~$100,000 | 不详 | 16 次全押 | [Medium](https://medium.com/@austinpliu/how-one-trader-turned-12-into-100-000-on-polymarket-54826a452645) |

> 📍 **关键发现**：推文中 "$50 → $43.5 万" 最可能是对 0x8dxd bot（$313→$438K）的不精确转述。数字被刻意缩小到 $50 以降低"入门门槛"感知，让引流对象觉得"我也行"。

### 3.3 行业级数据验证

根据 [IMDEA Networks 研究所](https://finance.yahoo.com/news/arbitrage-bots-dominate-polymarket-millions-100000888.html)的研究（2024.4 - 2025.4）：

- 套利交易者总利润超过 **$40,000,000**
- 前 3 个钱包合计利润约 **$4,200,000**
- **80% 的 Polymarket 参与者是净亏损的**
- 只有 **30% 的钱包是盈利的**
- Columbia 大学研究：高达 **25% 的交易量是刷量（wash trading）**

套利窗口急剧缩小：
- 2024 年：平均套利机会持续 **12.3 秒**
- 2025 Q3 - 2026 Q1：缩减到 **2.7 秒**
- 73% 的套利利润被 **sub-100ms 执行的 bot** 捕获

### 3.4 现实约束

| 约束因素 | 影响 |
|---------|------|
| 必须 1,138-1,819 笔连续盈利 | 即使 99% 胜率，连续赢 1000+ 次的概率 < 0.004% |
| 动态手续费 3.15% | 利润为负，根本无法复合增长 |
| 滑点和深度 | 金额增大后，滑点会吃掉更多利润 |
| API 限速 5 次/秒 | 假设每天 8 小时窗口，最多 144,000 笔/天，但多数时无套利机会 |
| 短期市场流动性薄弱 | 15 分钟市场平均交易量仅 $44K，63% 的活跃市场 24h 成交量为零 |

### 3.5 结论

**即使在策略有效的时期（2025 年底），$50 → $43.5 万也极不可能。** 链上真实的 "$313→$438K" 案例用的是 $4,000-5,000 单笔下注，反复套利累积——起始资金 $313 不是 $50。推文故意缩小起始金额制造 FOMO。

---

## 四、PolyCop Telegram 机器人风险评估

### 4.1 它是什么

PolyCop 是一个 Polymarket 跟单 Telegram 机器人，功能包括：
- 自动跟踪盈利钱包的交易
- 限价单跟单（带价格偏移）
- 按比例自动调整仓位
- 收取 0.5% 手续费

### 4.2 红旗信号 🚩

| 红旗 | 详情 | 严重程度 |
|------|------|---------|
| **充值地址 ≠ 私钥地址** | @TGweb3333 亲自发推解释"机器人内部有两个钱包地址"，用户无法验证充值资金去向 | 🔴 **致命** |
| **虚假官方认证** | 该账号声称 PolyCop 是"Polymarket 官方认证机器人"——**Polymarket 不认证任何第三方 bot** | 🔴 **致命** |
| 推广渠道可疑 | 几乎全部来自 Medium 账号 "Solana Levelup" 的带推荐链接文章 | 🟡 高 |
| 同类产品已被黑 | Polycule（类似 bot）2026年1月被黑客攻击，$230,000 用户资金被盗 | 🔴 高 |
| 私钥托管风险 | 几乎所有 Telegram bot 都在服务器端存储用户私钥 | 🔴 高 |
| 同类 bot 泄露私钥 | 安全研究发现 OpenClaw/ClawdBot 即使被明确指示不泄露私钥，仍会暴露用户私钥 | 🔴 高 |
| 无 2FA 保护 | 认证仅依赖 Telegram 账号，SIM 卡劫持可夺取控制权 | 🟡 中 |
| 无本地确认步骤 | 传统钱包每笔交易需用户确认，bot 模式下后端可自动转移资金 | 🟡 中 |
| 跟单可被武器化 | 攻击者可操纵被跟踪钱包，将跟单者引入恶意合约 | 🟡 中 |
| 推荐链接分成 | `?start=ref_TradeNow` 参数 = 利益驱动的推广 | 🟡 中 |

> ⚠️ **特别警告**：@TGweb3333 解释"充值地址和私钥导出地址不同"是一个**致命红旗**。正常的非托管钱包中，你的私钥对应的地址就是你存放资金的地址。如果充值地址和你的私钥地址不同，意味着**你的资金被存到了你无法控制的地址上**——这是经典的资金转移骗局手法。
>
> 来源：[@TGweb3333 原始推文](https://x.com/TGweb3333/status/2025883178922107153)

### 4.3 Polycule 被黑事件（2026年1月13日）

- **被盗金额：$230,000**
- **攻击方式：** 服务器被入侵，批量导出用户私钥
- **后续：** bot 下线修补，承诺通过 Polygon 赔偿用户
- **教训：** 这不是个例，而是 Telegram bot 架构的系统性风险

**来源：**
- [KuCoin: Polycule Hacked, $230K Stolen](https://www.kucoin.com/news/flash/telegram-trading-bot-polycule-on-polymarket-hacked-230k-stolen)
- [RootData: Polycule Security Measures](http://www.rootdata.com/news/503763)
- [Medium: Don't Fall for Viral Clawdbot](https://medium.com/coding-nexus/dont-fall-for-the-viral-clawdbot-polymarket-arbitrage-setup-ba00c31d3d68)

---

## 五、推文的真实意图分析

### 5.1 经典"引流-收割"套路

```
第一步：编造/夸大一个暴利故事（$50 → $43.5万）
    ↓
第二步：详细描述"技术原理"建立可信度（Rust、<100ms、风控等）
    ↓
第三步：营造紧迫感（"好日子还能持续多久？"）
    ↓
第四步：推出"解决方案"（PolyCop 跟单 bot）
    ↓
第五步：收割入口（Telegram 推荐链接 t.me/PolyCop_BOT?st...）
```

### 5.2 变现路径

- PolyCop 每笔交易收 **0.5% 手续费**
- 推荐人可能获得分成
- 更大风险：bot 掌控用户资金，存在 rug pull 可能
- 推荐链接带 `?start=ref_` 参数 = 典型推荐返佣链接

---

## 六、残酷的盈利现实——先看这个再决定

在讨论"怎么操作"之前，先看清楚这个战场的真实数据：

| 统计指标 | 数字 | 来源 |
|---------|------|------|
| 盈利钱包比例 | **仅 ~16.8%** | [Polymarket Analytics](https://polymarketanalytics.com/traders) |
| 亏损钱包比例 | **~70%** | [Yahoo Finance](https://finance.yahoo.com/news/70-polymarket-traders-lost-money-192327162.html) |
| 利润超 $1,000 的钱包 | 仅 0.51% | Polymarket 链上数据 |
| 前 0.04% 地址占总利润 | 超过 70%（$37 亿） | IMDEA 研究 |
| 利润超 $100 万的地址 | 仅 668 个 | 链上统计 |

**结论：这是一个 70% 参与者亏钱、0.04% 的人拿走 71% 利润的零和博弈场。**

---

## 七、你的 100 USDT 实际可行的操作方案

### 7.1 资金路径：欧易 → Polymarket（详细版）

```
步骤 1: 欧易内部兑换 USDT → USDC（几乎 1:1，费用极低）
步骤 2: 登录 Polymarket → Deposit → Transfer Crypto → 复制 Polygon 网络 USDC 地址
步骤 3: 欧易提现 → 选择 USDC → ⚠️ 必须选择 Polygon 网络 → 粘贴地址 → 确认
步骤 4: 等待 1-5 分钟到账
```

**⚠️ 首次务必小额测试！先发 $5-10 验证地址正确。选错网络资金会永久丢失。**

| 环节 | 费用 |
|------|------|
| USDT→USDC 兑换 | 几乎为零 |
| 欧易 Polygon 提现 | 动态，通常 < $1 |
| Polymarket 充值 | 0 |
| Polymarket 标准市场交易费 | 0（短期加密市场除外） |
| Polymarket 提现 | 0（需付 Polygon gas ~$0.05） |

### 7.2 重要风险

| 风险 | 说明 |
|------|------|
| 地域限制 | Polymarket 明确限制中国大陆用户，需 VPN，**违反服务条款** |
| 法律风险 | 中国法律下可能被定性为赌博、洗钱 |
| 账户冻结风险 | Polymarket 积极检测 VPN IP，账户可能被封、资金冻结 |
| 资金安全 | 需自行保管钱包私钥 |
| 本金规模 | $100 在 Polymarket 上能做的事情有限 |

**来源：**
- [Rest of World: Polymarket courts Chinese users despite ban](https://restofworld.org/2026/polymarket-china-betting-ban/)
- [知乎讨论：中国能用 Polymarket 吗](https://www.zhihu.com/question/9483157548)
- [PANews: Polymarket 中文版风险](https://www.panewslab.com/en/articles/af79d55c-49fc-4bdf-9ef8-733bc03bd765)

### 6.2 真正可行的 Polymarket 策略（2026 年 3 月现状）

#### 策略 A：信息优势交易（推荐，适合 $100）

找你有认知优势的事件市场，用研究和判断力下注。

- **天气市场**：有 bot 通过对比官方天气预报和 Polymarket 赔率的偏差，用 $1,000 起步赚到 $24,000
- **政治/科技事件**：如果你对某个领域有深入了解，可以在市场价格偏离你判断时下注
- 预期回报：**不确定，取决于判断力**，不是"稳定收益"
- ✅ $100 够用：单笔 $5-20 试水

#### 策略 B：市场重平衡套利（技术型，低频）

当一个市场所有结果的总价格 ≠ $1.00 时，买入全部结果锁定无风险利润。
- GitHub 上有开源实现：[polymarket-arbitrage-bot](https://github.com/0xalberto/polymarket-arbitrage-bot)
- 不依赖速度，依赖发现定价错误
- 利润空间极小（1-3%），但理论上无风险
- ⚠️ $100 可以尝试，但利润可能只有几美元

#### 策略 C：做市（Maker）策略

2026 年 2 月新规后，Polymarket 转向鼓励做市商：
- 做市商免手续费
- 每日获得 Taker Fee 的分成（Maker Rebate）
- 需要编写做市 bot，门槛较高
- ❌ $100 资金太少，做市需要更大资金池（建议 $5,000+）

#### 策略 D：AI 概率交易（高阶）

用机器学习模型评估事件真实概率，找被错误定价的合约。
- 据报道有 bot [2 个月赚了 $2.2M](https://medium.com/illumination/beyond-simple-arbitrage-4-polymarket-strategies-bots-actually-profit-from-in-2026-ddacc92c5b4f)
- 需要 NLP/ML 能力 + 数据源
- ❌ 门槛极高，不适合小资金试水

### 7.4 $100 的现实收益预期

| 场景 | 月收益 | 概率 |
|------|--------|------|
| 保守高概率策略 | +$3-5 | 较高 |
| 有信息优势的领域投注 | +$10-20 | 中等 |
| 打平或小亏 | -$5 到 $0 | 较高 |
| 大亏（赌博心态） | -$50 到 -$100 | 如果不守纪律 |

### 7.5 推荐的实操路线

```
第 1 周：$0 投入
├── 注册 Polymarket，浏览市场，不下注
├── 用 PolyTrack 研究排行榜前列交易者的模式
└── 选定 1-2 个你有信息优势的领域

第 2-3 周：投入 $30
├── 只做高概率"债券"策略（95分以上的市场，如几乎确定的事件结果）
├── 每笔最多 $10-15
└── 目标：理解平台机制，体验全流程

第 4-8 周：根据学习情况加码到 $70-100
├── 开始在专精领域做小额主观判断交易
├── 严格仓位管理：每笔 $2-5（2-5%）
├── 日亏损上限 $10（10%）
└── 连续亏损 2-3 笔后停手
```

### 7.6 有用的免费工具

| 工具 | 用途 | 链接 |
|------|------|------|
| Polymarket Analytics | 市场分析 + 交易者排行 | [polymarketanalytics.com](https://polymarketanalytics.com/) |
| PolyTrack | 跟踪顶级交易者策略 | [polytrackhq.app](https://www.polytrackhq.app/) |
| Prediction Hunt | 跨平台套利价差提醒 | [predictionhunt.com](https://www.predictionhunt.com/arbitrage) |
| py-clob-client | 官方 Python SDK | [GitHub](https://github.com/Polymarket/py-clob-client) |
| polymarket-arbitrage-bot | 开源重平衡套利 bot | [GitHub](https://github.com/0xalberto/polymarket-arbitrage-bot) |

### 7.7 综合建议

| 方案 | 可行性 | 预期收益 | 风险 |
|------|--------|---------|------|
| 照搬推文的延迟套利 | ❌ 已死 | 负收益 | 高 |
| 使用 PolyCop 跟单 | ❌ 不推荐 | 不确定 | 极高（被黑/rug pull） |
| 高概率"债券"策略 | ✅ 可行 | 月 $3-5 | 低（黑天鹅除外）|
| 自建信息优势交易 | ✅ 可行 | 月 $10-20 | 中等 |
| 写监控/学习 Bot | ✅ 推荐 | 技术经验无价 | 低 |
| 做市策略 | ⚠️ 资金不足 | 低 | 中等 |
| 留着 100 USDT 不动 | ✅ 最安全 | 0 | 0 |

---

## 八、最终结论

### 🔴 关于推文声称的策略

1. **延迟套利曾经真实存在**，但 Polymarket 已在 2026 年 2 月通过动态手续费（50% 赔率时 3.15%）和移除 500ms 延迟彻底封杀
2. **$50 → $43.5 万的具体数字无法验证**，数学上也几乎不可能（需要 1000+ 次连续盈利）
3. **推文中的技术参数多处虚假**（"每秒 1000 笔"实际是 5 笔）
4. **推文本质是 PolyCop Telegram bot 的引流广告**，采用经典"暴利故事 + 推荐链接"营销模式

### 🔴 关于 PolyCop

1. 存在严重安全风险（同类产品已被黑 $230K）
2. 推广内容几乎全是 affiliate 营销文章
3. **强烈不建议使用**

### 🟡 关于你的 100 USDT

1. 如果纯粹想尝试 Polymarket，可以走 欧易→USDC→Polygon→Polymarket 路径
2. 但要注意中国大陆的法律风险
3. $100 资金量做套利/做市不现实，更适合在你有信息优势的事件市场做小额投注
4. **做好归零准备**

### 骗局置信度评估

综合所有证据，骗局概率评估：**95%+**

| # | 红旗证据 | 严重程度 |
|---|---------|---------|
| 1 | 不现实的回报率（870,000%+） | 致命 |
| 2 | 无法链上验证的收益声明 | 致命 |
| 3 | 充值地址 ≠ 私钥地址（资金转移特征） | 致命 |
| 4 | 虚假声称"Polymarket 官方认证" | 致命 |
| 5 | 推广 Telegram bot（2024年钓鱼暴增 2000%） | 高 |
| 6 | 利用真实案例（$313→$414K）改编数字增加可信度 | 高 |
| 7 | 策略已被 Polymarket 2026.2 费用改革封堵 | 高 |
| 8 | "Claude 40分钟建bot"降低戒心的心理操控 | 中 |
| 9 | 推荐链接 `?start=ref_` = 利益驱动推广 | 中 |
| 10 | 针对中文用户的定向引流 | 中 |

### 一句话总结

> **这条推文是一个精心设计的加密骗局：借用真实但已失效的 Polymarket 套利故事，微调数字制造 FOMO，通过 Twitter 引流到设计了"充值地址与私钥地址分离"结构的 Telegram 机器人。你的 100 USDT，一旦充值进去，大概率再也拿不回来。**

---

## 参考资料

### Polymarket 官方文档
- [Polymarket Trading Fees](https://docs.polymarket.com/polymarket-learn/trading/fees)
- [Polymarket API Rate Limits](https://docs.polymarket.com/quickstart/introduction/rate-limits)
- [Polymarket RTDS Crypto Prices](https://docs.polymarket.com/developers/RTDS/RTDS-crypto-prices)

### 新闻报道
- [Finance Magnates: Dynamic Fees to Curb Latency Arbitrage](https://www.financemagnates.com/cryptocurrency/polymarket-introduces-dynamic-fees-to-curb-latency-arbitrage-in-short-term-crypto-markets/)
- [Yahoo Finance: Arbitrage Bots Dominate Polymarket](https://finance.yahoo.com/news/arbitrage-bots-dominate-polymarket-millions-100000888.html)
- [BlockBeats: Polymarket New Rule Release](https://m.theblockbeats.info/en/news/61326)
- [Protos: Polymarket ends trading loophole](https://protos.com/polymarket-ends-trading-loophole-for-bitcoin-quants/)
- [KuCoin: Polycule Hacked $230K](https://www.kucoin.com/news/flash/telegram-trading-bot-polycule-on-polymarket-hacked-230k-stolen)
- [Rest of World: Polymarket China](https://restofworld.org/2026/polymarket-china-betting-ban/)

### 安全分析
- [RootData: Polycule Security Analysis](http://www.rootdata.com/news/503763)
- [PANews: Polymarket Liquidity Attack](https://www.panewslab.com/en/articles/019c97c6-a735-71c3-9fc4-dcded7fb6b0f)
- [Medium: Don't Fall for Clawdbot](https://medium.com/coding-nexus/dont-fall-for-the-viral-clawdbot-polymarket-arbitrage-setup-ba00c31d3d68)

### 技术参考
- [GitHub: polyfill-rs (Rust Client)](https://github.com/floor-licker/polyfill-rs)
- [GitHub: py-clob-client Rate Limit Issue](https://github.com/Polymarket/py-clob-client/issues/147)
- [Phemex: Oracle Latency Exploit](https://phemex.com/news/article/trader-exploits-oracle-latency-for-50k-profit-in-one-week-45143)

### 中国用户相关
- [知乎：中国能用 Polymarket 吗](https://www.zhihu.com/question/9483157548)
- [PANews: Polymarket 中文版法律风险](https://www.panewslab.com/en/articles/af79d55c-49fc-4bdf-9ef8-733bc03bd765)
- [Polymarket 中文教程](https://polymarketcn.com/)
