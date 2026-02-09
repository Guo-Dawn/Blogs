import{ar as n,as as l,at as p}from"./index-D9NihZ4e.js";const e={class:"markdown-body"},i="测试文章-3",j="2026-01-13T00:00:00.000Z",d={address:"成都",lng:104.06,lat:30.67},o=["css","layout","frontend"],u={__name:"css-grid-guide",setup(t,{expose:a}){return a({frontmatter:{title:"测试文章-3",date:"2026-01-13T00:00:00.000Z",location:{address:"成都",lng:104.06,lat:30.67},tags:["css","layout","frontend"]}}),(r,s)=>(l(),n("div",e,[...s[0]||(s[0]=[p(`<h1 id="css-grid-布局完全指南" tabindex="-1"><a class="header-anchor" href="#css-grid-布局完全指南">CSS Grid 布局完全指南</a></h1><p>CSS Grid 是一个强大的二维布局系统，可以同时处理行和列的布局。本文将带你全面掌握 CSS Grid。</p><h2 id="什么是-css-grid" tabindex="-1"><a class="header-anchor" href="#什么是-css-grid">什么是 CSS Grid？</a></h2><p>CSS Grid Layout（网格布局）是 CSS 中最强大的布局系统。它是一个二维系统，可以同时处理行和列，与主要处理一维的 Flexbox 形成互补。</p><h3 id="grid-vs-flexbox" tabindex="-1"><a class="header-anchor" href="#grid-vs-flexbox">Grid vs Flexbox</a></h3><table><thead><tr><th>特性</th><th>Grid</th><th>Flexbox</th></tr></thead><tbody><tr><td>维度</td><td>二维（行和列）</td><td>一维（行或列）</td></tr><tr><td>适用场景</td><td>整体页面布局</td><td>组件内部布局</td></tr><tr><td>对齐</td><td>双向对齐</td><td>单向对齐</td></tr><tr><td>重排</td><td>可以改变文档流</td><td>遵循文档流</td></tr></tbody></table><h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念">基础概念</a></h2><h3 id="网格容器和网格项" tabindex="-1"><a class="header-anchor" href="#网格容器和网格项">网格容器和网格项</a></h3><pre class="hljs"><code><span class="hljs-comment">/* 网格容器 */</span>
<span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
}

<span class="hljs-comment">/* 网格项 */</span>
<span class="hljs-selector-class">.item</span> {
  <span class="hljs-comment">/* 自动成为网格项 */</span>
}
</code></pre><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><h3 id="网格线" tabindex="-1"><a class="header-anchor" href="#网格线">网格线</a></h3><p>网格线是构成网格结构的分界线，可以是水平的也可以是垂直的。</p><pre class="hljs"><code>列线:     |   |   |   |
         1   2   3   4
行线:     ———
         1
         ———
         2
         ———
         3
</code></pre><h2 id="基础属性" tabindex="-1"><a class="header-anchor" href="#基础属性">基础属性</a></h2><h3 id="grid-template-columns-和-grid-template-rows" tabindex="-1"><a class="header-anchor" href="#grid-template-columns-和-grid-template-rows">grid-template-columns 和 grid-template-rows</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">200px</span> <span class="hljs-number">100px</span>;
  <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">50px</span> <span class="hljs-number">50px</span>;
}
</code></pre><h3 id="使用-fr-单位" tabindex="-1"><a class="header-anchor" href="#使用-fr-单位">使用 fr 单位</a></h3><p><code>fr</code> 是 Grid 中的弹性单位，表示可用空间的一部分。</p><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">1</span>fr <span class="hljs-number">2</span>fr <span class="hljs-number">1</span>fr;
  <span class="hljs-comment">/* 三列，中间列是两侧的两倍 */</span>
}
</code></pre><h3 id="repeat-函数" tabindex="-1"><a class="header-anchor" href="#repeat-函数">repeat() 函数</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-comment">/* 等价于 1fr 1fr 1fr 1fr */</span>
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">4</span>, <span class="hljs-number">1</span>fr);
  
  <span class="hljs-comment">/* 更复杂的模式 */</span>
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">3</span>, <span class="hljs-number">100px</span> <span class="hljs-number">1</span>fr);
}
</code></pre><h3 id="auto-fill-和-auto-fit" tabindex="-1"><a class="header-anchor" href="#auto-fill-和-auto-fit">auto-fill 和 auto-fit</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-comment">/* 自动填充，尽可能多的列 */</span>
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fill, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">200px</span>, <span class="hljs-number">1</span>fr));
  
  <span class="hljs-comment">/* 自动填充，但会合并空列 */</span>
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fit, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">200px</span>, <span class="hljs-number">1</span>fr));
}
</code></pre><h2 id="网格间距" tabindex="-1"><a class="header-anchor" href="#网格间距">网格间距</a></h2><h3 id="gap-属性" tabindex="-1"><a class="header-anchor" href="#gap-属性">gap 属性</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/* 行和列都是 20px */</span>
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span> <span class="hljs-number">10px</span>; <span class="hljs-comment">/* 行 20px，列 10px */</span>
  <span class="hljs-attribute">row-gap</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">column-gap</span>: <span class="hljs-number">10px</span>;
}
</code></pre><h2 id="网格项定位" tabindex="-1"><a class="header-anchor" href="#网格项定位">网格项定位</a></h2><h3 id="grid-column-和-grid-row" tabindex="-1"><a class="header-anchor" href="#grid-column-和-grid-row">grid-column 和 grid-row</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.item-1</span> {
  <span class="hljs-attribute">grid-column</span>: <span class="hljs-number">1</span> / <span class="hljs-number">3</span>; <span class="hljs-comment">/* 从第 1 条线到第 3 条线 */</span>
  <span class="hljs-attribute">grid-row</span>: <span class="hljs-number">1</span> / <span class="hljs-number">2</span>;
}

<span class="hljs-selector-class">.item-2</span> {
  <span class="hljs-attribute">grid-column</span>: <span class="hljs-number">3</span> / <span class="hljs-number">4</span>;
  <span class="hljs-attribute">grid-row</span>: <span class="hljs-number">1</span> / <span class="hljs-number">3</span>;
}

<span class="hljs-comment">/* 使用 span 关键字 */</span>
<span class="hljs-selector-class">.item-3</span> {
  <span class="hljs-attribute">grid-column</span>: span <span class="hljs-number">2</span>; <span class="hljs-comment">/* 跨越 2 列 */</span>
  <span class="hljs-attribute">grid-row</span>: span <span class="hljs-number">3</span>; <span class="hljs-comment">/* 跨越 3 行 */</span>
}
</code></pre><h3 id="grid-area" tabindex="-1"><a class="header-anchor" href="#grid-area">grid-area</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">grid-area</span>: <span class="hljs-number">1</span> / <span class="hljs-number">1</span> / <span class="hljs-number">3</span> / <span class="hljs-number">3</span>;
  <span class="hljs-comment">/* grid-row-start / grid-column-start / grid-row-end / grid-column-end */</span>
}

<span class="hljs-comment">/* 或者使用命名区域 */</span>
<span class="hljs-selector-class">.header</span> {
  <span class="hljs-attribute">grid-area</span>: header;
}

<span class="hljs-selector-class">.sidebar</span> {
  <span class="hljs-attribute">grid-area</span>: sidebar;
}

<span class="hljs-selector-class">.main</span> {
  <span class="hljs-attribute">grid-area</span>: main;
}

<span class="hljs-selector-class">.footer</span> {
  <span class="hljs-attribute">grid-area</span>: footer;
}

<span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-areas</span>:
    <span class="hljs-string">&quot;header header&quot;</span>
    <span class="hljs-string">&quot;sidebar main&quot;</span>
    <span class="hljs-string">&quot;footer footer&quot;</span>;
}
</code></pre><h2 id="对齐" tabindex="-1"><a class="header-anchor" href="#对齐">对齐</a></h2><h3 id="justify-items-和-align-items" tabindex="-1"><a class="header-anchor" href="#justify-items-和-align-items">justify-items 和 align-items</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-comment">/* 水平对齐 */</span>
  <span class="hljs-attribute">justify-items</span>: start | end | center | stretch;
  
  <span class="hljs-comment">/* 垂直对齐 */</span>
  <span class="hljs-attribute">align-items</span>: start | end | center | stretch;
}
</code></pre><h3 id="justify-content-和-align-content" tabindex="-1"><a class="header-anchor" href="#justify-content-和-align-content">justify-content 和 align-content</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-comment">/* 整个网格的水平对齐 */</span>
  <span class="hljs-attribute">justify-content</span>: start | end | center | stretch | space-around | space-between | space-evenly;
  
  <span class="hljs-comment">/* 整个网格的垂直对齐 */</span>
  <span class="hljs-attribute">align-content</span>: start | end | center | stretch | space-around | space-between | space-evenly;
}
</code></pre><h3 id="place-items-和-place-content" tabindex="-1"><a class="header-anchor" href="#place-items-和-place-content">place-items 和 place-content</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-comment">/* 简写 */</span>
  <span class="hljs-attribute">place-items</span>: center center; <span class="hljs-comment">/* align-items justify-items */</span>
  <span class="hljs-attribute">place-content</span>: center center; <span class="hljs-comment">/* align-content justify-content */</span>
}
</code></pre><h2 id="实战案例" tabindex="-1"><a class="header-anchor" href="#实战案例">实战案例</a></h2><h3 id="1-经典的圣杯布局" tabindex="-1"><a class="header-anchor" href="#1-经典的圣杯布局">1. 经典的圣杯布局</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-areas</span>:
    <span class="hljs-string">&quot;header header header&quot;</span>
    <span class="hljs-string">&quot;sidebar main ads&quot;</span>
    <span class="hljs-string">&quot;footer footer footer&quot;</span>;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">200px</span> <span class="hljs-number">1</span>fr <span class="hljs-number">200px</span>;
  <span class="hljs-attribute">grid-template-rows</span>: auto <span class="hljs-number">1</span>fr auto;
  <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100vh</span>;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
}

<span class="hljs-selector-class">.header</span> { <span class="hljs-attribute">grid-area</span>: header; }
<span class="hljs-selector-class">.sidebar</span> { <span class="hljs-attribute">grid-area</span>: sidebar; }
<span class="hljs-selector-class">.main</span> { <span class="hljs-attribute">grid-area</span>: main; }
<span class="hljs-selector-class">.ads</span> { <span class="hljs-attribute">grid-area</span>: ads; }
<span class="hljs-selector-class">.footer</span> { <span class="hljs-attribute">grid-area</span>: footer; }
</code></pre><h3 id="2-响应式卡片网格" tabindex="-1"><a class="header-anchor" href="#2-响应式卡片网格">2. 响应式卡片网格</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.card-grid</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fill, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">280px</span>, <span class="hljs-number">1</span>fr));
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
}

<span class="hljs-selector-class">.card</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">8px</span>;
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">2px</span> <span class="hljs-number">4px</span> <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0.1</span>);
}
</code></pre><h3 id="3-图片画廊" tabindex="-1"><a class="header-anchor" href="#3-图片画廊">3. 图片画廊</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.gallery</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">4</span>, <span class="hljs-number">1</span>fr);
  <span class="hljs-attribute">grid-auto-rows</span>: <span class="hljs-number">200px</span>;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">10px</span>;
}

<span class="hljs-selector-class">.gallery-item</span> {
  <span class="hljs-attribute">overflow</span>: hidden;
}

<span class="hljs-selector-class">.gallery-item</span> <span class="hljs-selector-tag">img</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">object-fit</span>: cover;
}

<span class="hljs-comment">/* 大图跨越多列 */</span>
<span class="hljs-selector-class">.gallery-item</span><span class="hljs-selector-class">.large</span> {
  <span class="hljs-attribute">grid-column</span>: span <span class="hljs-number">2</span>;
  <span class="hljs-attribute">grid-row</span>: span <span class="hljs-number">2</span>;
}
</code></pre><h3 id="4-仪表盘布局" tabindex="-1"><a class="header-anchor" href="#4-仪表盘布局">4. 仪表盘布局</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.dashboard</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">250px</span> <span class="hljs-number">1</span>fr;
  <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">60px</span> <span class="hljs-number">1</span>fr;
  <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100vh</span>;
}

<span class="hljs-selector-class">.sidebar</span> {
  <span class="hljs-attribute">grid-row</span>: <span class="hljs-number">1</span> / -<span class="hljs-number">1</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#2c3e50</span>;
  <span class="hljs-attribute">color</span>: white;
}

<span class="hljs-selector-class">.header</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#34495e</span>;
  <span class="hljs-attribute">color</span>: white;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;
}

<span class="hljs-selector-class">.content</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fit, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">300px</span>, <span class="hljs-number">1</span>fr));
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
}
</code></pre><h2 id="高级技巧" tabindex="-1"><a class="header-anchor" href="#高级技巧">高级技巧</a></h2><h3 id="1-隐式网格" tabindex="-1"><a class="header-anchor" href="#1-隐式网格">1. 隐式网格</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">100px</span> <span class="hljs-number">100px</span>;
  <span class="hljs-attribute">grid-auto-rows</span>: <span class="hljs-number">50px</span>; <span class="hljs-comment">/* 隐式创建的行高 */</span>
  <span class="hljs-attribute">grid-auto-flow</span>: row; <span class="hljs-comment">/* 或 column */</span>
}
</code></pre><h3 id="2-minmax-函数" tabindex="-1"><a class="header-anchor" href="#2-minmax-函数">2. minmax() 函数</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fit, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">250px</span>, <span class="hljs-number">1</span>fr));
  <span class="hljs-comment">/* 最小 250px，最大 1fr */</span>
}
</code></pre><h3 id="3-子网格subgrid" tabindex="-1"><a class="header-anchor" href="#3-子网格subgrid">3. 子网格（Subgrid）</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.parent</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">1</span>fr <span class="hljs-number">2</span>fr;
}

<span class="hljs-selector-class">.child</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: subgrid;
  <span class="hljs-comment">/* 继承父级的列定义 */</span>
}
</code></pre><h3 id="4-密集打包" tabindex="-1"><a class="header-anchor" href="#4-密集打包">4. 密集打包</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fill, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">100px</span>, <span class="hljs-number">1</span>fr));
  <span class="hljs-attribute">grid-auto-flow</span>: dense; <span class="hljs-comment">/* 尝试填补空隙 */</span>
}
</code></pre><h2 id="响应式设计" tabindex="-1"><a class="header-anchor" href="#响应式设计">响应式设计</a></h2><h3 id="使用媒体查询" tabindex="-1"><a class="header-anchor" href="#使用媒体查询">使用媒体查询</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">1</span>fr;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
}

<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">min-width</span>: <span class="hljs-number">768px</span>) {
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>fr);
  }
}

<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">min-width</span>: <span class="hljs-number">1024px</span>) {
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>fr);
  }
}

<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">min-width</span>: <span class="hljs-number">1280px</span>) {
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">4</span>, <span class="hljs-number">1</span>fr);
  }
}
</code></pre><h3 id="使用-auto-fit" tabindex="-1"><a class="header-anchor" href="#使用-auto-fit">使用 auto-fit</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fit, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">250px</span>, <span class="hljs-number">1</span>fr));
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
}
<span class="hljs-comment">/* 自动适应不同屏幕宽度 */</span>
</code></pre><h2 id="浏览器兼容性" tabindex="-1"><a class="header-anchor" href="#浏览器兼容性">浏览器兼容性</a></h2><p>CSS Grid 的现代浏览器支持率已经很高，但为了更好的兼容性，可以使用以下策略：</p><h3 id="1-使用-supports" tabindex="-1"><a class="header-anchor" href="#1-使用-supports">1. 使用 @supports</a></h3><pre class="hljs"><code><span class="hljs-keyword">@supports</span> (<span class="hljs-attribute">display</span>: <span class="hljs-attribute">grid</span>) {
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">display</span>: grid;
  }
}

<span class="hljs-keyword">@supports</span> <span class="hljs-keyword">not</span> (<span class="hljs-attribute">display</span>: <span class="hljs-attribute">grid</span>) {
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-wrap</span>: wrap;
  }
}
</code></pre><h3 id="2-渐进增强" tabindex="-1"><a class="header-anchor" href="#2-渐进增强">2. 渐进增强</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-wrap</span>: wrap;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
}

<span class="hljs-keyword">@supports</span> (<span class="hljs-attribute">display</span>: <span class="hljs-attribute">grid</span>) {
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">display</span>: grid;
    <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fit, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">250px</span>, <span class="hljs-number">1</span>fr));
  }
}
</code></pre><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化">性能优化</a></h2><h3 id="1-避免过度嵌套" tabindex="-1"><a class="header-anchor" href="#1-避免过度嵌套">1. 避免过度嵌套</a></h3><pre class="hljs"><code><span class="hljs-comment">/* 不好：过度嵌套 */</span>
<span class="hljs-selector-class">.container</span> &gt; <span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-class">.grid</span> &gt; <span class="hljs-selector-class">.item</span> {
  <span class="hljs-comment">/* ... */</span>
}

<span class="hljs-comment">/* 好：扁平结构 */</span>
<span class="hljs-selector-class">.container</span> &gt; <span class="hljs-selector-class">.item</span> {
  <span class="hljs-comment">/* ... */</span>
}
</code></pre><h3 id="2-使用-will-change" tabindex="-1"><a class="header-anchor" href="#2-使用-will-change">2. 使用 will-change</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">will-change</span>: transform;
}
</code></pre><h3 id="3-减少重排" tabindex="-1"><a class="header-anchor" href="#3-减少重排">3. 减少重排</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.item</span> {
  <span class="hljs-comment">/* 使用 transform 而不是改变 width/height */</span>
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">scale</span>(<span class="hljs-number">1.1</span>);
}
</code></pre><h2 id="调试技巧" tabindex="-1"><a class="header-anchor" href="#调试技巧">调试技巧</a></h2><h3 id="1-使用浏览器开发工具" tabindex="-1"><a class="header-anchor" href="#1-使用浏览器开发工具">1. 使用浏览器开发工具</a></h3><p>现代浏览器的开发者工具都支持 Grid 布局的可视化调试。</p><h3 id="2-添加边框" tabindex="-1"><a class="header-anchor" href="#2-添加边框">2. 添加边框</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>fr);
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid red;
}

<span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid blue;
}
</code></pre><h3 id="3-使用背景色" tabindex="-1"><a class="header-anchor" href="#3-使用背景色">3. 使用背景色</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>fr);
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#f0f0f0</span>;
}

<span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">background</span>: white;
}
</code></pre><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践">最佳实践</a></h2><h3 id="1-语义化-html" tabindex="-1"><a class="header-anchor" href="#1-语义化-html">1. 语义化 HTML</a></h3><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid-container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">header</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid-header&quot;</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid-nav&quot;</span>&gt;</span>Navigation<span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">main</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid-main&quot;</span>&gt;</span>Main Content<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">aside</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid-aside&quot;</span>&gt;</span>Sidebar<span class="hljs-tag">&lt;/<span class="hljs-name">aside</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">footer</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;grid-footer&quot;</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">footer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><h3 id="2-使用-css-变量" tabindex="-1"><a class="header-anchor" href="#2-使用-css-变量">2. 使用 CSS 变量</a></h3><pre class="hljs"><code><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--grid-gap</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attr">--grid-columns</span>: <span class="hljs-built_in">repeat</span>(auto-fit, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">250px</span>, <span class="hljs-number">1</span>fr));
}

<span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">var</span>(--grid-columns);
  <span class="hljs-attribute">gap</span>: <span class="hljs-built_in">var</span>(--grid-gap);
}
</code></pre><h3 id="3-移动优先" tabindex="-1"><a class="header-anchor" href="#3-移动优先">3. 移动优先</a></h3><pre class="hljs"><code><span class="hljs-selector-class">.container</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">1</span>fr; <span class="hljs-comment">/* 移动端默认单列 */</span>
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">20px</span>;
}

<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">min-width</span>: <span class="hljs-number">768px</span>) {
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>fr);
  }
}
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结">总结</a></h2><p>CSS Grid 是一个强大而灵活的布局系统，掌握它将让你的布局工作变得更加简单和高效。</p><blockquote><p>Grid 不是要取代 Flexbox，而是与之互补。根据实际需求选择合适的布局系统，或者组合使用它们。</p></blockquote>`,91)])]))}};export{j as date,u as default,d as location,o as tags,i as title};
