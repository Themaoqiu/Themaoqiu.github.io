<template><div><h1 id="nutrirag-🍏🔍" tabindex="-1"><a class="header-anchor" href="#nutrirag-🍏🔍"><span>NutriRAG 🍏🔍</span></a></h1>
<p>这是一个专为健康领域设计的轻量级检索增强生成（RAG）系统，基于 TinyRAG 项目魔改而来。支持从 PDF 文件中快速提取和检索专业医学信息，并实现了简单的 RAG 流程和上传自定义文件的功能。用来水各种大创比赛，当前的webui奇丑且文件上传有bug，要实际使用的话再做下一步开发。</p>
<p>GitHub 页面：<a href="https://github.com/Themaoqiu/NRAG" target="_blank" rel="noopener noreferrer">Themaoqiu/NRAG</a></p>
<hr>
<h2 id="🌟-核心功能" tabindex="-1"><a class="header-anchor" href="#🌟-核心功能"><span>🌟 核心功能</span></a></h2>
<ul>
<li><strong>智能解析</strong>：自动提取 PDF 中的医学文献内容。</li>
<li><strong>语义检索</strong>：精准匹配健康相关问答。</li>
<li><strong>知识管理</strong>：本地化存储知识向量。</li>
</ul>
<hr>
<h2 id="🛠️-快速配置" tabindex="-1"><a class="header-anchor" href="#🛠️-快速配置"><span>🛠️ 快速配置</span></a></h2>
<h3 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖"><span>1. 安装依赖</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> requirements.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-修改配置文件"><span>2. 修改配置文件</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># test.py</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docs </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> ReadFiles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"你的/医学文献"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get_content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    max_token_len</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 文本块最大长度</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">    cover_content</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 文本块重叠长度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-运行系统" tabindex="-1"><a class="header-anchor" href="#_3-运行系统"><span>3. 运行系统</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<blockquote>
<p><strong>提示</strong>：确保您的医学文献文件路径正确，并根据需求调整 <code v-pre>max_token_len</code> 和 <code v-pre>cover_content</code> 参数。</p>
</blockquote>
</div></template>


