import{ar as n,as as e,at as a}from"./index-D9NihZ4e.js";const o={class:"markdown-body"},i="测试文章-9",d="2026-01-22T00:00:00.000Z",h={address:"北京",lng:116.9,lat:39.9},u=["vue","javascript","frontend"],m={__name:"vue3-features",setup(l,{expose:s}){return s({frontmatter:{title:"测试文章-9",date:"2026-01-22T00:00:00.000Z",location:{address:"北京",lng:116.9,lat:39.9},tags:["vue","javascript","frontend"]}}),(r,t)=>(e(),n("div",o,[...t[0]||(t[0]=[a(`<h1 id="探索-vue-3-的新特性" tabindex="-1"><a class="header-anchor" href="#探索-vue-3-的新特性">探索 Vue 3 的新特性</a></h1><p>Vue 3 带来了许多令人兴奋的新特性，其中最引人注目的是 Composition API。</p><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api">Composition API</a></h2><p>Composition API 提供了一种更灵活的代码组织方式。</p><h3 id="setup-函数" tabindex="-1"><a class="header-anchor" href="#setup-函数">setup() 函数</a></h3><p><code>setup</code> 是组件内使用 Composition API 的入口点。</p><pre class="hljs"><code><span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
    
    <span class="hljs-keyword">function</span> <span class="hljs-title function_">increment</span>(<span class="hljs-params"></span>) {
      count.<span class="hljs-property">value</span>++
    }
    
    <span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;Component mounted!&#39;</span>)
    })
    
    <span class="hljs-keyword">return</span> {
      count,
      increment
    }
  }
}
</code></pre><h3 id="script-setup" tabindex="-1"><a class="header-anchor" href="#script-setup">script setup</a></h3><p><code>&lt;script setup&gt;</code> 是在单文件组件 (SFC) 中使用 Composition API 的编译时语法糖。</p><pre class="hljs"><code>&lt;script setup&gt;
import { ref } from &#39;vue&#39;

const count = ref(0)
const increment = () =&gt; count.value++
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click=&quot;increment&quot;&gt;{{ count }}&lt;/button&gt;
&lt;/template&gt;
</code></pre><h2 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport">Teleport</a></h2><p><code>Teleport</code> 提供了一种干净的方法，允许我们控制在 DOM 中哪个父节点下渲染了 HTML，而不必求助于全局状态或将其拆分为两个组件。</p><pre class="hljs"><code>&lt;teleport to=&quot;body&quot;&gt;
  &lt;div v-if=&quot;isOpen&quot; class=&quot;modal&quot;&gt;
    &lt;p&gt;Hello from the modal!&lt;/p&gt;
  &lt;/div&gt;
&lt;/teleport&gt;
</code></pre><h2 id="fragments" tabindex="-1"><a class="header-anchor" href="#fragments">Fragments</a></h2><p>在 Vue 3 中，组件不再要求必须有一个根节点。</p><pre class="hljs"><code>&lt;template&gt;
  &lt;header&gt;Header&lt;/header&gt;
  &lt;main&gt;Main Content&lt;/main&gt;
  &lt;footer&gt;Footer&lt;/footer&gt;
&lt;/template&gt;
</code></pre><h2 id="性能提升" tabindex="-1"><a class="header-anchor" href="#性能提升">性能提升</a></h2><ul><li>更小的包体积</li><li>更快的渲染速度</li><li>更好的 TypeScript 支持</li></ul><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语">结语</a></h2><p>Vue 3 的生态系统正在日益成熟，现在是学习和迁移的好时机。</p>`,20)])]))}};export{d as date,m as default,h as location,u as tags,i as title};
