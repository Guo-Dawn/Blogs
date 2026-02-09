import{ar as n,as as e,at as l}from"./index-C47N-Uwe.js";const t={class:"markdown-body"},o="测试文章-5",i="2026-01-18T00:00:00.000Z",d={address:"上海",lng:121.47,lat:31.23},j=["performance","frontend","optimization"],u={__name:"frontend-performance",setup(p,{expose:a}){return a({frontmatter:{title:"测试文章-5",date:"2026-01-18T00:00:00.000Z",location:{address:"上海",lng:121.47,lat:31.23},tags:["performance","frontend","optimization"]}}),(r,s)=>(e(),n("div",t,[...s[0]||(s[0]=[l(`<h1 id="前端性能优化实战指南" tabindex="-1"><a class="header-anchor" href="#前端性能优化实战指南">前端性能优化实战指南</a></h1><p>性能优化是前端开发中永恒的话题。本文将分享一些实用的性能优化技巧。</p><h2 id="加载性能优化" tabindex="-1"><a class="header-anchor" href="#加载性能优化">加载性能优化</a></h2><h3 id="资源压缩与合并" tabindex="-1"><a class="header-anchor" href="#资源压缩与合并">资源压缩与合并</a></h3><p>使用 Webpack 或 Vite 等构建工具进行资源压缩：</p><pre class="hljs"><code><span class="hljs-comment">// vite.config.js</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">build</span>: {
    <span class="hljs-attr">minify</span>: <span class="hljs-string">&#39;terser&#39;</span>,
    <span class="hljs-attr">terserOptions</span>: {
      <span class="hljs-attr">compress</span>: {
        <span class="hljs-attr">drop_console</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">drop_debugger</span>: <span class="hljs-literal">true</span>
      }
    }
  }
}
</code></pre><h3 id="图片优化" tabindex="-1"><a class="header-anchor" href="#图片优化">图片优化</a></h3><p>使用 WebP 格式和懒加载：</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">img</span> 
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;placeholder.jpg&quot;</span> 
  <span class="hljs-attr">data-src</span>=<span class="hljs-string">&quot;image.webp&quot;</span> 
  <span class="hljs-attr">loading</span>=<span class="hljs-string">&quot;lazy&quot;</span> 
  <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;示例图片&quot;</span>
/&gt;</span>
</code></pre><h3 id="cdn-加速" tabindex="-1"><a class="header-anchor" href="#cdn-加速">CDN 加速</a></h3><p>将静态资源部署到 CDN，利用边缘节点加速访问。</p><h2 id="运行时性能优化" tabindex="-1"><a class="header-anchor" href="#运行时性能优化">运行时性能优化</a></h2><h3 id="防抖与节流" tabindex="-1"><a class="header-anchor" href="#防抖与节流">防抖与节流</a></h3><p>对于频繁触发的事件，使用防抖和节流：</p><pre class="hljs"><code><span class="hljs-comment">// 防抖</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">debounce</span>(<span class="hljs-params">fn, delay</span>) {
  <span class="hljs-keyword">let</span> timer = <span class="hljs-literal">null</span>
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">function</span>(<span class="hljs-params">...args</span>) {
    <span class="hljs-built_in">clearTimeout</span>(timer)
    timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> fn.<span class="hljs-title function_">apply</span>(<span class="hljs-variable language_">this</span>, args), delay)
  }
}

<span class="hljs-comment">// 节流</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">throttle</span>(<span class="hljs-params">fn, delay</span>) {
  <span class="hljs-keyword">let</span> last = <span class="hljs-number">0</span>
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">function</span>(<span class="hljs-params">...args</span>) {
    <span class="hljs-keyword">const</span> now = <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>()
    <span class="hljs-keyword">if</span> (now - last &gt;= delay) {
      last = now
      fn.<span class="hljs-title function_">apply</span>(<span class="hljs-variable language_">this</span>, args)
    }
  }
}
</code></pre><h3 id="虚拟列表" tabindex="-1"><a class="header-anchor" href="#虚拟列表">虚拟列表</a></h3><p>对于长列表，使用虚拟滚动技术：</p><pre class="hljs"><code><span class="hljs-keyword">import</span> { useVirtualList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vueuse/core&#39;</span>

<span class="hljs-keyword">const</span> { list, containerProps, wrapperProps } = <span class="hljs-title function_">useVirtualList</span>(
  largeArray,
  { <span class="hljs-attr">itemHeight</span>: <span class="hljs-number">50</span> }
)
</code></pre><h2 id="渲染性能优化" tabindex="-1"><a class="header-anchor" href="#渲染性能优化">渲染性能优化</a></h2><h3 id="减少重排重绘" tabindex="-1"><a class="header-anchor" href="#减少重排重绘">减少重排重绘</a></h3><p>使用 CSS transform 和 opacity 进行动画，避免触发重排：</p><pre class="hljs"><code><span class="hljs-selector-class">.animate</span> {
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(<span class="hljs-number">100px</span>);
  <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.5</span>;
  <span class="hljs-attribute">transition</span>: all <span class="hljs-number">0.3s</span> ease;
}
</code></pre><h3 id="使用-requestanimationframe" tabindex="-1"><a class="header-anchor" href="#使用-requestanimationframe">使用 requestAnimationFrame</a></h3><p>对于动画，使用 requestAnimationFrame 替代 setTimeout：</p><pre class="hljs"><code><span class="hljs-keyword">function</span> <span class="hljs-title function_">animate</span>(<span class="hljs-params"></span>) {
  <span class="hljs-comment">// 更新动画状态</span>
  <span class="hljs-title function_">requestAnimationFrame</span>(animate)
}
<span class="hljs-title function_">requestAnimationFrame</span>(animate)
</code></pre><h2 id="内存优化" tabindex="-1"><a class="header-anchor" href="#内存优化">内存优化</a></h2><h3 id="避免内存泄漏" tabindex="-1"><a class="header-anchor" href="#避免内存泄漏">避免内存泄漏</a></h3><p>及时清理事件监听器和定时器：</p><pre class="hljs"><code><span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, handleResize)
})

<span class="hljs-title function_">onUnmounted</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">removeEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, handleResize)
})
</code></pre><h3 id="使用-weakmap-和-weakset" tabindex="-1"><a class="header-anchor" href="#使用-weakmap-和-weakset">使用 WeakMap 和 WeakSet</a></h3><p>对于需要缓存的对象，使用 WeakMap：</p><pre class="hljs"><code><span class="hljs-keyword">const</span> cache = <span class="hljs-keyword">new</span> <span class="hljs-title class_">WeakMap</span>()

<span class="hljs-keyword">function</span> <span class="hljs-title function_">memoize</span>(<span class="hljs-params">fn</span>) {
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">function</span>(<span class="hljs-params">obj</span>) {
    <span class="hljs-keyword">if</span> (!cache.<span class="hljs-title function_">has</span>(obj)) {
      cache.<span class="hljs-title function_">set</span>(obj, <span class="hljs-title function_">fn</span>(obj))
    }
    <span class="hljs-keyword">return</span> cache.<span class="hljs-title function_">get</span>(obj)
  }
}
</code></pre><h2 id="性能监控" tabindex="-1"><a class="header-anchor" href="#性能监控">性能监控</a></h2><h3 id="使用-performance-api" tabindex="-1"><a class="header-anchor" href="#使用-performance-api">使用 Performance API</a></h3><pre class="hljs"><code><span class="hljs-comment">// 测量代码执行时间</span>
performance.<span class="hljs-title function_">mark</span>(<span class="hljs-string">&#39;start&#39;</span>)
<span class="hljs-comment">// ... 执行代码</span>
performance.<span class="hljs-title function_">mark</span>(<span class="hljs-string">&#39;end&#39;</span>)
performance.<span class="hljs-title function_">measure</span>(<span class="hljs-string">&#39;my-operation&#39;</span>, <span class="hljs-string">&#39;start&#39;</span>, <span class="hljs-string">&#39;end&#39;</span>)

<span class="hljs-keyword">const</span> measures = performance.<span class="hljs-title function_">getEntriesByName</span>(<span class="hljs-string">&#39;my-operation&#39;</span>)
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(measures[<span class="hljs-number">0</span>].<span class="hljs-property">duration</span>)
</code></pre><h3 id="lighthouse-检测" tabindex="-1"><a class="header-anchor" href="#lighthouse-检测">Lighthouse 检测</a></h3><p>定期使用 Lighthouse 进行性能检测，关注以下指标：</p><ul><li>First Contentful Paint (FCP)</li><li>Largest Contentful Paint (LCP)</li><li>Time to Interactive (TTI)</li><li>Cumulative Layout Shift (CLS)</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结">总结</a></h2><p>性能优化是一个持续的过程，需要根据实际场景选择合适的策略。记住：<strong>过早优化是万恶之源</strong>，先确保代码正确，再进行优化。</p><blockquote><p>优化前先测量，优化后再验证，这是性能优化的黄金法则。</p></blockquote>`,41)])]))}};export{i as date,u as default,d as location,j as tags,o as title};
