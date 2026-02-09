import{c as n,o as l,a as p}from"./index-nGJbwh3O.js";import"./mermaid-JKgtJoW5.js";const t={class:"markdown-body"},o="测试文章-8",j="2026-01-17T00:00:00.000Z",u={address:"深圳",lng:114.05,lat:22.52},d=["typescript","javascript","programming"],b={__name:"typescript-guide",setup(c,{expose:a}){return a({frontmatter:{title:"测试文章-8",date:"2026-01-17T00:00:00.000Z",location:{address:"深圳",lng:114.05,lat:22.52},tags:["typescript","javascript","programming"]}}),(r,s)=>(l(),n("div",t,[...s[0]||(s[0]=[p(`<h1 id="typescript-从入门到精通" tabindex="-1"><a class="header-anchor" href="#typescript-从入门到精通">TypeScript 从入门到精通</a></h1><p>TypeScript 是 JavaScript 的超集，为 JavaScript 添加了静态类型检查。本文将带你从零开始掌握 TypeScript。</p><h2 id="为什么选择-typescript" tabindex="-1"><a class="header-anchor" href="#为什么选择-typescript">为什么选择 TypeScript？</a></h2><h3 id="类型安全" tabindex="-1"><a class="header-anchor" href="#类型安全">类型安全</a></h3><p>TypeScript 在编译时就能发现错误，而不是等到运行时：</p><pre class="hljs"><code><span class="hljs-comment">// JavaScript - 运行时才会发现错误</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">add</span>(<span class="hljs-params">a, b</span>) {
  <span class="hljs-keyword">return</span> a + b
}
<span class="hljs-title function_">add</span>(<span class="hljs-string">&#39;hello&#39;</span>, <span class="hljs-number">123</span>) <span class="hljs-comment">// &quot;hello123&quot;</span>

<span class="hljs-comment">// TypeScript - 编译时就能发现错误</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">add</span>(<span class="hljs-params"><span class="hljs-attr">a</span>: <span class="hljs-built_in">number</span>, <span class="hljs-attr">b</span>: <span class="hljs-built_in">number</span></span>): <span class="hljs-built_in">number</span> {
  <span class="hljs-keyword">return</span> a + b
}
<span class="hljs-title function_">add</span>(<span class="hljs-string">&#39;hello&#39;</span>, <span class="hljs-number">123</span>) <span class="hljs-comment">// Error: Argument of type &#39;string&#39; is not assignable to parameter of type &#39;number&#39;</span>
</code></pre><h3 id="更好的-ide-支持" tabindex="-1"><a class="header-anchor" href="#更好的-ide-支持">更好的 IDE 支持</a></h3><p>类型信息让 IDE 能够提供更智能的代码补全和提示。</p><h2 id="基础类型" tabindex="-1"><a class="header-anchor" href="#基础类型">基础类型</a></h2><h3 id="原始类型" tabindex="-1"><a class="header-anchor" href="#原始类型">原始类型</a></h3><pre class="hljs"><code><span class="hljs-keyword">let</span> <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span> = <span class="hljs-string">&#39;张三&#39;</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">age</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">25</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">isStudent</span>: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">nothing</span>: <span class="hljs-literal">null</span> = <span class="hljs-literal">null</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">notDefined</span>: <span class="hljs-literal">undefined</span> = <span class="hljs-literal">undefined</span>
</code></pre><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组">数组</a></h3><pre class="hljs"><code><span class="hljs-comment">// 两种写法</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">numbers</span>: <span class="hljs-built_in">number</span>[] = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
<span class="hljs-keyword">let</span> <span class="hljs-attr">strings</span>: <span class="hljs-title class_">Array</span>&lt;<span class="hljs-built_in">string</span>&gt; = [<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>, <span class="hljs-string">&#39;c&#39;</span>]
</code></pre><h3 id="元组" tabindex="-1"><a class="header-anchor" href="#元组">元组</a></h3><pre class="hljs"><code><span class="hljs-keyword">let</span> <span class="hljs-attr">person</span>: [<span class="hljs-built_in">string</span>, <span class="hljs-built_in">number</span>] = [<span class="hljs-string">&#39;张三&#39;</span>, <span class="hljs-number">25</span>]
<span class="hljs-comment">// person[0] 是 string 类型</span>
<span class="hljs-comment">// person[1] 是 number 类型</span>
</code></pre><h3 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型">对象类型</a></h3><pre class="hljs"><code><span class="hljs-keyword">interface</span> <span class="hljs-title class_">User</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">age</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">email</span>?: <span class="hljs-built_in">string</span> <span class="hljs-comment">// 可选属性</span>
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span> <span class="hljs-comment">// 只读属性</span>
}

<span class="hljs-keyword">const</span> <span class="hljs-attr">user</span>: <span class="hljs-title class_">User</span> = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;张三&#39;</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">25</span>,
  <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>
}
</code></pre><h2 id="高级类型" tabindex="-1"><a class="header-anchor" href="#高级类型">高级类型</a></h2><h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型">联合类型</a></h3><pre class="hljs"><code><span class="hljs-keyword">let</span> <span class="hljs-attr">value</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span>
value = <span class="hljs-string">&#39;hello&#39;</span>
value = <span class="hljs-number">123</span>
</code></pre><h3 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型">交叉类型</a></h3><pre class="hljs"><code><span class="hljs-keyword">interface</span> <span class="hljs-title class_">Person</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>
}

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Employee</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">PersonEmployee</span> = <span class="hljs-title class_">Person</span> &amp; <span class="hljs-title class_">Employee</span>

<span class="hljs-keyword">const</span> <span class="hljs-attr">person</span>: <span class="hljs-title class_">PersonEmployee</span> = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;张三&#39;</span>,
  <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>
}
</code></pre><h3 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言">类型断言</a></h3><pre class="hljs"><code><span class="hljs-comment">// 两种写法</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">value</span>: <span class="hljs-built_in">any</span> = <span class="hljs-string">&#39;hello world&#39;</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">length1</span>: <span class="hljs-built_in">number</span> = (value <span class="hljs-keyword">as</span> <span class="hljs-built_in">string</span>).<span class="hljs-property">length</span>
<span class="hljs-keyword">let</span> <span class="hljs-attr">length2</span>: <span class="hljs-built_in">number</span> = (&lt;<span class="hljs-built_in">string</span>&gt;value).<span class="hljs-property">length</span>
</code></pre><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型">泛型</a></h2><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法">基本用法</a></h3><pre class="hljs"><code><span class="hljs-keyword">function</span> identity&lt;T&gt;(<span class="hljs-attr">arg</span>: T): T {
  <span class="hljs-keyword">return</span> arg
}

<span class="hljs-keyword">const</span> result1 = identity&lt;<span class="hljs-built_in">string</span>&gt;(<span class="hljs-string">&#39;hello&#39;</span>)
<span class="hljs-keyword">const</span> result2 = identity&lt;<span class="hljs-built_in">number</span>&gt;(<span class="hljs-number">123</span>)
</code></pre><h3 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束">泛型约束</a></h3><pre class="hljs"><code><span class="hljs-keyword">interface</span> <span class="hljs-title class_">Lengthwise</span> {
  <span class="hljs-attr">length</span>: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">function</span> loggingIdentity&lt;T <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Lengthwise</span>&gt;(<span class="hljs-attr">arg</span>: T): T {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(arg.<span class="hljs-property">length</span>)
  <span class="hljs-keyword">return</span> arg
}
</code></pre><h3 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口">泛型接口</a></h3><pre class="hljs"><code><span class="hljs-keyword">interface</span> <span class="hljs-title class_">Box</span>&lt;T&gt; {
  <span class="hljs-attr">value</span>: T
}

<span class="hljs-keyword">const</span> <span class="hljs-attr">numberBox</span>: <span class="hljs-title class_">Box</span>&lt;<span class="hljs-built_in">number</span>&gt; = { <span class="hljs-attr">value</span>: <span class="hljs-number">123</span> }
<span class="hljs-keyword">const</span> <span class="hljs-attr">stringBox</span>: <span class="hljs-title class_">Box</span>&lt;<span class="hljs-built_in">string</span>&gt; = { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;hello&#39;</span> }
</code></pre><h2 id="类与接口" tabindex="-1"><a class="header-anchor" href="#类与接口">类与接口</a></h2><h3 id="类" tabindex="-1"><a class="header-anchor" href="#类">类</a></h3><pre class="hljs"><code><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">name</span> = name
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">speak</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.name}</span> makes a sound\`</span>)
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Dog</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">Animal</span> {
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span></span>) {
    <span class="hljs-variable language_">super</span>(name)
  }

  <span class="hljs-keyword">public</span> <span class="hljs-title function_">bark</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.name}</span> barks\`</span>)
  }
}
</code></pre><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口">接口</a></h3><pre class="hljs"><code><span class="hljs-keyword">interface</span> <span class="hljs-title class_">ClockInterface</span> {
  <span class="hljs-attr">currentTime</span>: <span class="hljs-title class_">Date</span>
  <span class="hljs-title function_">setTime</span>(<span class="hljs-attr">d</span>: <span class="hljs-title class_">Date</span>): <span class="hljs-built_in">void</span>
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Clock</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">ClockInterface</span> {
  <span class="hljs-attr">currentTime</span>: <span class="hljs-title class_">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>()
  <span class="hljs-title function_">setTime</span>(<span class="hljs-params"><span class="hljs-attr">d</span>: <span class="hljs-title class_">Date</span></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">currentTime</span> = d
  }
}
</code></pre><h2 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器">装饰器</a></h2><h3 id="类装饰器" tabindex="-1"><a class="header-anchor" href="#类装饰器">类装饰器</a></h3><pre class="hljs"><code><span class="hljs-keyword">function</span> <span class="hljs-title function_">sealed</span>(<span class="hljs-params"><span class="hljs-attr">constructor</span>: <span class="hljs-title class_">Function</span></span>) {
  <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">seal</span>(constructor)
  <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">seal</span>(constructor.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>)
}

<span class="hljs-meta">@sealed</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">Greeter</span> {
  <span class="hljs-attr">greeting</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-attr">message</span>: <span class="hljs-built_in">string</span></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">greeting</span> = message
  }
}
</code></pre><h3 id="方法装饰器" tabindex="-1"><a class="header-anchor" href="#方法装饰器">方法装饰器</a></h3><pre class="hljs"><code><span class="hljs-keyword">function</span> <span class="hljs-title function_">log</span>(<span class="hljs-params"><span class="hljs-attr">target</span>: <span class="hljs-built_in">any</span>, <span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">descriptor</span>: <span class="hljs-title class_">PropertyDescriptor</span></span>) {
  <span class="hljs-keyword">const</span> originalMethod = descriptor.<span class="hljs-property">value</span>

  descriptor.<span class="hljs-property">value</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params">...<span class="hljs-attr">args</span>: <span class="hljs-built_in">any</span>[]</span>) {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`Calling <span class="hljs-subst">\${key}</span> with\`</span>, args)
    <span class="hljs-keyword">const</span> result = originalMethod.<span class="hljs-title function_">apply</span>(<span class="hljs-variable language_">this</span>, args)
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`<span class="hljs-subst">\${key}</span> returned\`</span>, result)
    <span class="hljs-keyword">return</span> result
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Calculator</span> {
  <span class="hljs-meta">@log</span>
  <span class="hljs-title function_">add</span>(<span class="hljs-attr">a</span>: <span class="hljs-built_in">number</span>, <span class="hljs-attr">b</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">number</span> {
    <span class="hljs-keyword">return</span> a + b
  }
}
</code></pre><h2 id="实用工具类型" tabindex="-1"><a class="header-anchor" href="#实用工具类型">实用工具类型</a></h2><h3 id="partial" tabindex="-1"><a class="header-anchor" href="#partial">Partial</a></h3><pre class="hljs"><code><span class="hljs-keyword">interface</span> <span class="hljs-title class_">User</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">age</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">email</span>: <span class="hljs-built_in">string</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">PartialUser</span> = <span class="hljs-title class_">Partial</span>&lt;<span class="hljs-title class_">User</span>&gt;
<span class="hljs-comment">// { name?: string, age?: number, email?: string }</span>
</code></pre><h3 id="pick" tabindex="-1"><a class="header-anchor" href="#pick">Pick</a></h3><pre class="hljs"><code><span class="hljs-keyword">type</span> <span class="hljs-title class_">UserBasicInfo</span> = <span class="hljs-title class_">Pick</span>&lt;<span class="hljs-title class_">User</span>, <span class="hljs-string">&#39;name&#39;</span> | <span class="hljs-string">&#39;email&#39;</span>&gt;
<span class="hljs-comment">// { name: string, email: string }</span>
</code></pre><h3 id="omit" tabindex="-1"><a class="header-anchor" href="#omit">Omit</a></h3><pre class="hljs"><code><span class="hljs-keyword">type</span> <span class="hljs-title class_">UserWithoutEmail</span> = <span class="hljs-title class_">Omit</span>&lt;<span class="hljs-title class_">User</span>, <span class="hljs-string">&#39;email&#39;</span>&gt;
<span class="hljs-comment">// { name: string, age: number }</span>
</code></pre><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件">配置文件</a></h2><h3 id="tsconfigjson" tabindex="-1"><a class="header-anchor" href="#tsconfigjson">tsconfig.json</a></h3><pre class="hljs"><code><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;compilerOptions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;target&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ES2020&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;module&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ESNext&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;strict&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;esModuleInterop&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;skipLibCheck&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;forceConsistentCasingInFileNames&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;moduleResolution&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;node&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;resolveJsonModule&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;isolatedModules&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;noEmit&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;include&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;src&quot;</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;exclude&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;node_modules&quot;</span><span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span>
</code></pre><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践">最佳实践</a></h2><h3 id="1-使用严格模式" tabindex="-1"><a class="header-anchor" href="#1-使用严格模式">1. 使用严格模式</a></h3><pre class="hljs"><code><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;compilerOptions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;strict&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>
</code></pre><h3 id="2-避免使用-any" tabindex="-1"><a class="header-anchor" href="#2-避免使用-any">2. 避免使用 any</a></h3><pre class="hljs"><code><span class="hljs-comment">// 不好</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">process</span>(<span class="hljs-params"><span class="hljs-attr">data</span>: <span class="hljs-built_in">any</span></span>) {
  <span class="hljs-keyword">return</span> data.<span class="hljs-property">value</span>
}

<span class="hljs-comment">// 好</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">process</span>(<span class="hljs-params"><span class="hljs-attr">data</span>: { value: <span class="hljs-built_in">string</span> }</span>) {
  <span class="hljs-keyword">return</span> data.<span class="hljs-property">value</span>
}
</code></pre><h3 id="3-使用类型推断" tabindex="-1"><a class="header-anchor" href="#3-使用类型推断">3. 使用类型推断</a></h3><pre class="hljs"><code><span class="hljs-comment">// 不需要显式声明类型</span>
<span class="hljs-keyword">const</span> message = <span class="hljs-string">&#39;hello&#39;</span>
<span class="hljs-keyword">const</span> count = <span class="hljs-number">42</span>
<span class="hljs-keyword">const</span> isActive = <span class="hljs-literal">true</span>
</code></pre><h3 id="4-使用-readonly-保护数据" tabindex="-1"><a class="header-anchor" href="#4-使用-readonly-保护数据">4. 使用 readonly 保护数据</a></h3><pre class="hljs"><code><span class="hljs-keyword">interface</span> <span class="hljs-title class_">Config</span> {
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">apiKey</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">apiUrl</span>: <span class="hljs-built_in">string</span>
}
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结">总结</a></h2><p>TypeScript 通过静态类型检查为 JavaScript 项目带来了更高的安全性和可维护性。掌握 TypeScript 需要时间，但投资回报是值得的。</p><blockquote><p>类型系统不是束缚，而是你的助手。合理使用类型，让代码更健壮。</p></blockquote>`,63)])]))}};export{j as date,b as default,u as location,d as tags,o as title};
