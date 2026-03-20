# Web 端 SQL 代码语法高亮方案对比

> 让你的 SQL 代码变得五彩斑斓 🌈

## 📊 方案速览

| 库名 | 体积 | 编辑功能 | 学习成本 | 推荐场景 |
|------|------|----------|----------|----------|
| Prism.js | ~2KB | ❌ | ⭐ | 纯展示 |
| highlight.js | ~30KB | ❌ | ⭐ | 纯展示 |
| CodeMirror 6 | ~150KB | ✅ | ⭐⭐ | 轻量编辑器 |
| Monaco Editor | ~2MB | ✅ | ⭐⭐⭐ | IDE 级体验 |
| Ace Editor | ~300KB | ✅ | ⭐⭐ | 通用编辑器 |

---

## 1️⃣ Prism.js - 最轻量的选择

### 特点
- 🪶 超轻量，gzip 后约 2KB
- 🎨 丰富的主题支持
- 🔌 插件生态丰富（行号、复制按钮等）

### 安装

```bash
npm install prismjs
```

### 使用示例

```html
<!-- 引入样式 -->
<link href="prism-themes/prism-dracula.css" rel="stylesheet" />

<!-- 代码块 -->
<pre><code class="language-sql">
SELECT u.name, u.email, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id
HAVING order_count > 5
ORDER BY order_count DESC;
</code></pre>

<!-- 引入 JS -->
<script src="prism.js"></script>
```

### React 中使用

```tsx
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-sql';
import { useEffect } from 'react';

function SQLCode({ code }: { code: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre>
      <code className="language-sql">{code}</code>
    </pre>
  );
}
```

---

## 2️⃣ highlight.js - 自动检测语言

### 特点
- 🔍 自动语言检测
- 📦 支持 190+ 种语言
- 🎯 零配置即可使用

### 安装

```bash
npm install highlight.js
```

### 使用示例

```tsx
import hljs from 'highlight.js/lib/core';
import sql from 'highlight.js/lib/languages/sql';
import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('sql', sql);

function SQLHighlight({ code }: { code: string }) {
  const highlighted = hljs.highlight(code, { language: 'sql' }).value;

  return (
    <pre>
      <code
        className="hljs language-sql"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </pre>
  );
}
```

---

## 3️⃣ CodeMirror 6 - 现代化编辑器 ⭐推荐

### 特点
- 🚀 全新架构，性能优秀
- 📝 完整的编辑功能
- 🗄️ 支持多种 SQL 方言（MySQL、PostgreSQL、SQLite 等）
- ♿ 无障碍支持良好

### 安装

```bash
npm install codemirror @codemirror/lang-sql @codemirror/theme-one-dark
```

### 使用示例

```tsx
import { useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { sql, MySQL } from '@codemirror/lang-sql';
import { oneDark } from '@codemirror/theme-one-dark';

function SQLEditor({ initialValue, onChange }: {
  initialValue: string;
  onChange?: (value: string) => void;
}) {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView>();

  useEffect(() => {
    if (!editorRef.current) return;

    const view = new EditorView({
      doc: initialValue,
      extensions: [
        basicSetup,
        sql({ dialect: MySQL }), // 指定 MySQL 方言
        oneDark,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onChange?.(update.state.doc.toString());
          }
        }),
      ],
      parent: editorRef.current,
    });

    viewRef.current = view;

    return () => view.destroy();
  }, []);

  return <div ref={editorRef} className="sql-editor" />;
}
```

### 支持的 SQL 方言

```ts
import {
  sql,
  MySQL,
  PostgreSQL,
  SQLite,
  MariaSQL,
  MSSQL,
  PLSQL,
  Cassandra,
  StandardSQL
} from '@codemirror/lang-sql';

// 使用不同方言
sql({ dialect: PostgreSQL })
sql({ dialect: SQLite })
```

---

## 4️⃣ Monaco Editor - VS Code 同款

### 特点
- 💪 功能最强大，VS Code 同款
- 🧠 智能提示、自动补全
- 🔧 支持自定义语言服务
- ⚠️ 体积较大（~2MB）

### 安装

```bash
npm install monaco-editor
# 或使用 React 封装
npm install @monaco-editor/react
```

### 使用示例（React）

```tsx
import Editor from '@monaco-editor/react';

function SQLEditor({ value, onChange }: {
  value: string;
  onChange?: (value: string) => void;
}) {
  return (
    <Editor
      height="300px"
      language="sql"
      theme="vs-dark"
      value={value}
      onChange={(val) => onChange?.(val || '')}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: 'on',
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
      }}
    />
  );
}
```

### 添加自定义 SQL 关键字提示

```ts
import * as monaco from 'monaco-editor';

// 注册自定义补全
monaco.languages.registerCompletionItemProvider('sql', {
  provideCompletionItems: (model, position) => {
    const suggestions = [
      {
        label: 'SELECT',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'SELECT ',
      },
      {
        label: 'INSERT INTO',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'INSERT INTO ${1:table} (${2:columns}) VALUES (${3:values});',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      },
      // 添加你的表名、字段名等
    ];
    return { suggestions };
  },
});
```

---

## 5️⃣ Ace Editor - 老牌稳定之选

### 特点
- 🏛️ 历史悠久，稳定可靠
- 📱 移动端支持较好
- 🔌 插件丰富

### 安装

```bash
npm install ace-builds react-ace
```

### 使用示例

```tsx
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-monokai';

function SQLEditor({ value, onChange }: {
  value: string;
  onChange?: (value: string) => void;
}) {
  return (
    <AceEditor
      mode="sql"
      theme="monokai"
      value={value}
      onChange={onChange}
      name="sql-editor"
      width="100%"
      height="300px"
      fontSize={14}
      showPrintMargin={false}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
```

---

## 🎯 选型建议

### 场景一：博客/文档中展示 SQL

**推荐：Prism.js**

理由：体积小、加载快、够用

### 场景二：在线 SQL 编辑器

**推荐：CodeMirror 6**

理由：
- 现代化架构，性能好
- 支持多种 SQL 方言
- 体积适中
- 社区活跃

### 场景三：数据库管理工具 / IDE 级应用

**推荐：Monaco Editor**

理由：
- 功能最强大
- 可实现智能提示、错误检查
- 用户体验接近 VS Code

### 场景四：需要兼容老浏览器

**推荐：Ace Editor**

理由：兼容性最好，IE9+ 都支持

---

## 🎨 常用主题推荐

| 主题风格 | Prism | highlight.js | CodeMirror | Monaco |
|----------|-------|--------------|------------|--------|
| 暗色 | Dracula | github-dark | oneDark | vs-dark |
| 亮色 | Default | github | - | vs |
| 高对比 | - | a11y-dark | - | hc-black |

---

## ⚠️ 常见问题与解决方案

### 问题一：浏览器 Vim 插件按键冲突

**现象**：使用 Vimium、Surfingkeys 等浏览器 Vim 插件时，在编辑器内按键被编辑器"吃掉"，Vim 快捷键失效。

**原因**：Monaco/Ace/CodeMirror 等编辑器会捕获键盘事件，阻止事件冒泡到浏览器插件。

#### 解决方案 1：按 Esc 退出编辑器焦点（推荐）

**Monaco Editor**
```tsx
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

<Editor
  onMount={(editor) => {
    // 按 Esc 时让编辑器失去焦点，交还键盘控制权给 Vim 插件
    editor.addCommand(monaco.KeyCode.Escape, () => {
      (document.activeElement as HTMLElement)?.blur();
    });
  }}
/>
```

**Ace Editor**
```tsx
<AceEditor
  onLoad={(editor) => {
    editor.commands.addCommand({
      name: 'exitFocus',
      bindKey: { win: 'Esc', mac: 'Esc' },
      exec: () => {
        editor.blur();
      },
    });
  }}
/>
```

**CodeMirror 6**
```tsx
import { keymap } from '@codemirror/view';

const escapeExtension = keymap.of([{
  key: 'Escape',
  run: (view) => {
    view.contentDOM.blur();
    return true;
  }
}]);

// 添加到 extensions 数组中
extensions: [
  basicSetup,
  sql({ dialect: MySQL }),
  escapeExtension,  // 添加这个
]
```

#### 解决方案 2：Vimium 设置排除规则

在 Vimium 设置中添加排除规则：
1. 打开 Vimium 选项页
2. 找到 "Excluded URLs and keys"
3. 添加页面 URL 或使用 CSS 选择器排除编辑器区域

或者使用 Vimium 内置功能：
- 按 `i` 进入插入模式（暂停 Vimium）
- 按 `Esc` 退出插入模式

#### 解决方案 3：双击 Esc 切换模式

```tsx
// Monaco Editor - 双击 Esc 切换焦点
let lastEscTime = 0;

editor.addCommand(monaco.KeyCode.Escape, () => {
  const now = Date.now();
  if (now - lastEscTime < 300) {
    // 双击 Esc，退出编辑器焦点
    (document.activeElement as HTMLElement)?.blur();
  }
  lastEscTime = now;
});
```

### 问题二：编辑器高度显示异常

**现象**：编辑器高度塌陷、无法自适应内容、或高度计算错误。

#### 解决方案 1：固定高度

```tsx
// 最简单的方式，给定固定高度
<Editor height="400px" />
```

#### 解决方案 2：自动布局（Monaco）

```tsx
<Editor
  options={{
    automaticLayout: true,  // 自动调整布局
    scrollBeyondLastLine: false,  // 不显示多余空行
  }}
/>
```

#### 解决方案 3：根据内容自适应高度

```tsx
// Monaco Editor 根据行数自适应
function AutoHeightEditor({ value, minHeight = 100, maxHeight = 600 }) {
  const lineCount = value.split('\n').length;
  const lineHeight = 20;
  const height = Math.min(Math.max(lineCount * lineHeight + 20, minHeight), maxHeight);

  return (
    <Editor
      height={`${height}px`}
      value={value}
      options={{
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
}
```

#### 解决方案 4：Flex 布局撑满容器

```css
.editor-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 200px;
}

.editor-container > div {
  flex: 1;
}
```

```tsx
<div className="editor-container">
  <Editor height="100%" />
</div>
```

---

## 📚 参考链接

- [Prism.js 官网](https://prismjs.com/)
- [highlight.js 官网](https://highlightjs.org/)
- [CodeMirror 6 文档](https://codemirror.net/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Ace Editor](https://ace.c9.io/)

---

*文档生成时间：2026-01-02* ✨
