<template><div><p>很幸运今年有机会能参与到两篇字节团队的论文，感谢ge Zhang给我的机会和学长的大力推荐。另外一篇ScaleLong敬请期待~</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>KORGym关注于衡量模型独立于其庞大预训练知识的通用推理能力 (general reasoning capacity)，为此设计了五十余款python小游戏，涵盖文字和多模态等形式与五种不同逻辑类型。让模型在一个”训练场“上进行游戏推理，通过不同参数设置和不同的游戏表现评估模型的推理能力。作为团队唯一本科生(doge), 我在其中负责了一部分游戏和平台的适配(虽然相对难的那个还是jiajun主动帮我做了~), 然后测试代码看能否在平台上跑通, 也算是第一次在实际工作中用GPU集群进行大规模推理.</p>
<h2 id="korgym-a-dynamic-game-platform-for-llm-reasoning-evaluation" tabindex="-1"><a class="header-anchor" href="#korgym-a-dynamic-game-platform-for-llm-reasoning-evaluation"><span>KORGym：A Dynamic Game Platform for LLM Reasoning Evaluation</span></a></h2>
<p>KORGym是我们团队最新推出的一个集评测与训练于一体的综合性环境框架。它并非又一个简单的基准测试，而是旨在成为一个动态的、多维度的“健身房”，用以锻炼和评估AI模型的通用推理能力。</p>
<p>与同期的TextArena和ReasoningGym等优秀工作相比，KORGym的独特之处在于我们致力于提供一系列：</p>
<ul>
<li><strong>单玩家环境</strong>：这样可以专注于模型自身的能力，避免多智能体博弈中可能出现的“捷径”或策略“hack”，让强化学习（RL）的应用更为直接纯粹。</li>
<li><strong>多轮交互</strong>：无论是对于推理器（reasoner）的深入探究，还是未来对于自主智能体（Agentic RL）的训练，多轮交互都提供了至关重要的动态过程。</li>
<li><strong>多模态挑战</strong>：智能的体现不仅限于文本。KORGym目前已包含5-6个多模态游戏，并计划在未来持续扩充，真正考验模型整合和理解不同信息模态的能力。</li>
<li><strong>动态难度调整</strong>：环境可以根据模型的表现动态调整难度，确保无论是初出茅庐的新模型还是顶尖的语言模型，都能在“最近发展区”内得到有效的评估和锻炼。</li>
</ul>
<h2 id="评估设计" tabindex="-1"><a class="header-anchor" href="#评估设计"><span>评估设计</span></a></h2>
<p>为了全面地评估推理能力，KORGym精心设计并囊括了五大逻辑类型的核心游戏，覆盖了从抽象到具象，从静态到动态的多种挑战：</p>
<ol>
<li><strong>数学与逻辑推理 (Mathematical and Logical Reasoning)</strong>：考验模型在数理世界的严谨思维。</li>
<li><strong>谜题推理 (Puzzle Reasoning)</strong>：检测模型面对非结构化问题时的创造性与洞察力。</li>
<li><strong>空间与几何推理 (Spatial and Geometric Reasoning)</strong>：评估模型对空间关系和几何形态的理解。</li>
<li><strong>策略推理 (Strategic Reasoning)</strong>：在需要长远规划和决策的游戏中考察模型的战略眼光。</li>
<li><strong>控制与交互推理 (Control &amp; Interaction Reasoning)</strong>：测试模型在动态环境中通过行动达成目标的能力。</li>
</ol>
<h2 id="实验结果" tabindex="-1"><a class="header-anchor" href="#实验结果"><span>实验结果</span></a></h2>
<p>通过在KORGym上对现有主流模型的测试，我们获得了一些激动人心的初步发现：</p>
<ol>
<li>
<p><strong>模型的“思维指纹”</strong>：我们发现，不同系列的AI模型在解决问题时展现出了独特的“思维模式”或“推理范式”，并且这种模式在系列内部保持了高度一致性。例如，Gemini 2.5-Pro模型极其偏爱使用代码来解决问题；O3-mini则更倾向于依赖数学和自然语言的内在逻辑；而豆包（Doubao-1.5-Pro）则善于调整和应用已知的常见算法。这或许与它们在监督微调（SFT）阶段所接触的数据特征密切相关。</p>
</li>
<li>
<p><strong>推理范式比模型尺寸更关键</strong>：在涉及与预训练语料库关联较小的推理任务上，优秀的推理范式所带来的能力提升，其重要性甚至超越了模型参数规模的增长。这意味着，通往更强通用人工智能的道路，不仅仅是“大力出奇迹”，更在于“思考的方式”。</p>
</li>
<li>
<p><strong>视觉语言模型（VLM）的“阿喀琉斯之踵”</strong>：一个有趣的发现是，即便对于强大的视觉语言模型，在处理同源的、难度近似的文本和图像表示的游戏时，它们在纯文本环境中的表现依然显著优于多模态环境。这揭示了当前VLM在通过文本特征桥接和真正理解视觉信息方面仍存在瓶颈，这正是它们需要被着重锤炼的“阿喀琉斯之踵”。</p>
</li>
</ol>
<h2 id="开放、易用-欢迎加入我们" tabindex="-1"><a class="header-anchor" href="#开放、易用-欢迎加入我们"><span>开放、易用，欢迎加入我们</span></a></h2>
<p>PS: 截取自老师的朋友圈~</p>
<p>我们深知，一个项目的生命力在于社区的参与和共建。因此，KORGym特别提供了对强化学习（RL）的易用适配。尽管我们认为，仅为发表一篇论文而单独训练一个模型在算力上或许并不“划算”，但我们为所有希望在此基础上进行探索的研究者提供了坚实的基础和便捷的支持。</p>
<p>我们在此诚挚地邀请所有AI模型开发者、研究者和爱好者们：</p>
<ul>
<li>在发布新模型时，测测KORGym，看看它在通用推理能力上的真实水平。</li>
<li>考虑将KORGym纳入到你们的训练流程中，以一种全新的方式增强模型的推理能力。</li>
</ul>
<p>我们将持续努力，将更多有趣、有挑战性的游戏融入KORGym，并不断扩大其应用范围。让我们一起，共同推动AI向着更通用、更深邃的智能迈进！</p>
<ul>
<li><strong>论文链接</strong>: <a href="https://arxiv.org/pdf/2505.14552" target="_blank" rel="noopener noreferrer">https://arxiv.org/pdf/2505.14552</a></li>
<li><strong>GitHub仓库</strong>: <a href="https://github.com/multimodal-art-projection/KORGym" target="_blank" rel="noopener noreferrer">https://github.com/multimodal-art-projection/KORGym</a></li>
</ul>
</div></template>


