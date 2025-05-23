<template><div><h1 id="🏭-企业库存管理信息系统-enterprise-inventory-management-system" tabindex="-1"><a class="header-anchor" href="#🏭-企业库存管理信息系统-enterprise-inventory-management-system"><span>🏭 企业库存管理信息系统 (Enterprise Inventory Management System)</span></a></h1>
<p>本项目是一个基于 FastAPI 和 Vue.js 构建的企业库存管理信息系统, 作为上海电力大学信息管理与信息系统的管理信息系统课程设计, 顺便练习 FastAPI 和 Vue.
Github页面: <a href="https://github.com/Themaoqiu/MIS-Course-Design" target="_blank" rel="noopener noreferrer">MIS-Course-Design</a>
总体功能的介绍和github页面保持一致</p>
<h2 id="📖-项目简介" tabindex="-1"><a class="header-anchor" href="#📖-项目简介"><span>📖 项目简介</span></a></h2>
<p>该系统允许用户管理企业或组织的物资信息，跟踪每种物资的当前库存水平，记录详细的出入库流水，并提供一个总览仪表盘来快速了解整体库存状况。</p>
<h2 id="🛠️-主要技术栈" tabindex="-1"><a class="header-anchor" href="#🛠️-主要技术栈"><span>🛠️ 主要技术栈</span></a></h2>
<h3 id="🔧-后端-backend" tabindex="-1"><a class="header-anchor" href="#🔧-后端-backend"><span>🔧 后端 (Backend)</span></a></h3>
<ul>
<li><strong>框架</strong>: FastAPI - 一个现代、快速（高性能）的 Python web 框架，用于构建 API⚡</li>
<li><strong>数据库</strong>: MySQL (通过 <code v-pre>pymysql</code> 连接)🗃️</li>
<li><strong>ORM</strong>: SQLAlchemy - 用于 Python 的 SQL 工具包和对象关系映射器🧩</li>
<li><strong>数据验证</strong>: Pydantic - 基于 Python 类型提示的数据验证和设置管理✅</li>
<li><strong>ASGI 服务器</strong>: Uvicorn - 用于 FastAPI 的 ASGI 服务器🚀</li>
</ul>
<h3 id="🎨前端-frontend" tabindex="-1"><a class="header-anchor" href="#🎨前端-frontend"><span>🎨前端 (Frontend)</span></a></h3>
<ul>
<li><strong>框架</strong>: Vue.js (版本 3) 🌟</li>
<li><strong>构建工具</strong>: Vite ⚡</li>
<li><strong>UI 组件库</strong>: shadcn-vue - 基于 Tailwind CSS 和 Radix Vue 的可复用组件 🎨</li>
<li><strong>CSS 框架</strong>: Tailwind CSS 🎨</li>
<li><strong>状态管理</strong>: (根据需要，例如 Pinia) 🧠</li>
<li><strong>路由</strong>: Vue Router 🗺️</li>
<li><strong>HTTP 客户端</strong>: Axios 🌐</li>
<li><strong>通知</strong>: vue-sonner 🔔</li>
</ul>
<h2 id="✨-功能特性" tabindex="-1"><a class="header-anchor" href="#✨-功能特性"><span>✨ 功能特性</span></a></h2>
<ul>
<li><strong>📊 总览仪表盘</strong>
<ul>
<li>显示物资种类总数</li>
<li>显示当前库存总量</li>
<li>显示库存预警数量 ⚠️</li>
</ul>
</li>
<li><strong>📦 物资管理</strong>
<ul>
<li>创建新物资（编码、名称、型号、单位、供应商、备注、是否启用）➕</li>
<li>查看物资列表（支持分页、按编码或名称搜索）🔍</li>
<li>查看单个物资详情 👀</li>
<li>更新物资信息 ✏️</li>
<li>删除物资（有业务逻辑检查，如库存是否为零、是否有出入库记录）❌</li>
</ul>
</li>
<li><strong>📉 库存查看</strong>
<ul>
<li>查看所有物资的当前库存余額列表（支持分页）📋</li>
<li>根据物资ID查看特定物资的库存余額 🔎</li>
<li>(管理员) 手动调整物资的最低/最高库存水平 ⚙️</li>
</ul>
</li>
<li><strong>📥 入库管理</strong>
<ul>
<li>创建新的入库记录（关联物资、数量、入库单号、备注）📦</li>
<li>创建入库记录时自动更新相应物资的库存余額 🔄</li>
<li>查看入库记录列表（支持分页、按物资ID和时间范围过滤）📜</li>
<li>查看单个入库记录详情 👀</li>
</ul>
</li>
<li><strong>📤 出库管理</strong>
<ul>
<li>创建新的出库记录（关联物资、数量、出库单号、领用人、备注）📤</li>
<li>创建出库记录时检查库存是否充足并自动更新库存余額 ✅</li>
<li>查看出库记录列表（支持分页、按物资ID和时间范围过滤）📜</li>
<li>查看单个出库记录详情 👀</li>
</ul>
</li>
</ul>
<h2 id="关于" tabindex="-1"><a class="header-anchor" href="#关于"><span>关于</span></a></h2>
<p>做成这样单纯是因为想学一下fastapi, 不是学校让做的多么有麻烦, 或者说学校学的有点过于幽默了. 管理信息系统实验教的本来是VB, 虽然我知道这种图形开发很简单, 但是VB实在很丑, 所以这样做个web应用试一下.
管理信息系统这门课是我见证管理学科威力的第一门, 同一个东西可以有不同的讲法, 这个就是把开发讲成管理的典范. 原来开发也能按发展历史, 概述, 历史方法, 意义的架构讲出来, 从第三节我把书看完开始就对这门课和信管的原本学科定位感到彻底失望, 管理信息系统是一门在互联网发展早期昙花一现的课程, 现在的企业还需要所谓信息化吗? 信管也是逐渐应该消失的专业, 互联网的时代都即将结束, 传统信息管理更是旧时代的残党，新时代没有承载它的船.
管理信息系统课程的讲授是我对电专课程失望的开端, 不得不说老师人还是很好的, 但是人在不擅长且不思上进的方面大抵是自始至终都做不好的, 老师口齿不清可能是最轻微的缺点, 讲的内容相当狭窄且陈旧, 说出来的话和早期大模型接龙一样看一下ppt接出来一些看似相关的内容. 如果认真听反而觉得自己好像什么都没听, 可能管理的魅力就在于此罢.</p>
</div></template>


