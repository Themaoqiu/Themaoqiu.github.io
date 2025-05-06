# NutriRAG 🍏🔍

这是一个专为健康领域设计的轻量级检索增强生成（RAG）系统，基于 TinyRAG 项目魔改而来。支持从 PDF 文件中快速提取和检索专业医学信息，并实现了简单的 RAG 流程和上传自定义文件的功能。用来水各种大创比赛，当前的webui奇丑且文件上传有bug，要实际使用的话再做下一步开发。

GitHub 页面：[Themaoqiu/NRAG](https://github.com/Themaoqiu/NRAG)

---

## 🌟 核心功能
- **智能解析**：自动提取 PDF 中的医学文献内容。
- **语义检索**：精准匹配健康相关问答。
- **知识管理**：本地化存储知识向量。

---

## 🛠️ 快速配置

### 1. 安装依赖
```bash
pip install -r requirements.txt
```

### 2. 修改配置文件
```python
# test.py
docs = ReadFiles("你的/医学文献").get_content(
    max_token_len=2000,  # 文本块最大长度
    cover_content=200    # 文本块重叠长度
)
```

### 3. 运行系统
```bash
python test.py
```

---

> **提示**：确保您的医学文献文件路径正确，并根据需求调整 `max_token_len` 和 `cover_content` 参数。