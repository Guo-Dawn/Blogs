import{ar as n,as as l,at as p}from"./index-D9NihZ4e.js";const e={class:"markdown-body"},o="测试文章-10",i="2026-01-16T00:00:00.000Z",j={address:"杭州",lng:120.15,lat:30.28},d=["webassembly","rust","performance"],u={__name:"webassembly-guide",setup(c,{expose:a}){return a({frontmatter:{title:"测试文章-10",date:"2026-01-16T00:00:00.000Z",location:{address:"杭州",lng:120.15,lat:30.28},tags:["webassembly","rust","performance"]}}),(h,s)=>(l(),n("div",e,[...s[0]||(s[0]=[p(`<h1 id="webassembly-实战指南" tabindex="-1"><a class="header-anchor" href="#webassembly-实战指南">WebAssembly 实战指南</a></h1><p>WebAssembly（简称 Wasm）是一种可以在现代 Web 浏览器中运行的二进制指令格式，为 Web 平台带来了接近原生的性能。</p><h2 id="什么是-webassembly" tabindex="-1"><a class="header-anchor" href="#什么是-webassembly">什么是 WebAssembly？</a></h2><p>WebAssembly 是一种新的代码类型，可以在现代 Web 浏览器中运行，它提供了一种方式，使得以诸如 C++、Rust 等语言编写的代码能够在 Web 上以接近原生的速度运行。</p><h3 id="核心特点" tabindex="-1"><a class="header-anchor" href="#核心特点">核心特点</a></h3><ul><li><strong>高性能</strong>：接近原生的执行速度</li><li><strong>安全</strong>：在沙箱环境中运行</li><li><strong>可移植</strong>：跨平台兼容</li><li><strong>体积小</strong>：二进制格式，加载快速</li></ul><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始">快速开始</a></h2><h3 id="安装-rust-工具链" tabindex="-1"><a class="header-anchor" href="#安装-rust-工具链">安装 Rust 工具链</a></h3><pre class="hljs"><code><span class="hljs-comment"># 安装 Rust</span>
curl --proto <span class="hljs-string">&#39;=https&#39;</span> --tlsv1.2 -sSf https://sh.rustup.rs | sh

<span class="hljs-comment"># 安装 wasm-pack</span>
cargo install wasm-pack
</code></pre><h3 id="创建-wasm-项目" tabindex="-1"><a class="header-anchor" href="#创建-wasm-项目">创建 Wasm 项目</a></h3><pre class="hljs"><code>cargo new --lib hello-wasm
<span class="hljs-built_in">cd</span> hello-wasm
</code></pre><h3 id="配置-cargotoml" tabindex="-1"><a class="header-anchor" href="#配置-cargotoml">配置 Cargo.toml</a></h3><pre class="hljs"><code><span class="hljs-section">[package]</span>
<span class="hljs-attr">name</span> = <span class="hljs-string">&quot;hello-wasm&quot;</span>
<span class="hljs-attr">version</span> = <span class="hljs-string">&quot;0.1.0&quot;</span>
<span class="hljs-attr">edition</span> = <span class="hljs-string">&quot;2021&quot;</span>

<span class="hljs-section">[lib]</span>
<span class="hljs-attr">crate-type</span> = [<span class="hljs-string">&quot;cdylib&quot;</span>, <span class="hljs-string">&quot;rlib&quot;</span>]

<span class="hljs-section">[dependencies]</span>
<span class="hljs-attr">wasm-bindgen</span> = <span class="hljs-string">&quot;0.2&quot;</span>
</code></pre><h3 id="编写-rust-代码" tabindex="-1"><a class="header-anchor" href="#编写-rust-代码">编写 Rust 代码</a></h3><pre class="hljs"><code><span class="hljs-keyword">use</span> wasm_bindgen::prelude::*;

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">add</span>(a: <span class="hljs-type">i32</span>, b: <span class="hljs-type">i32</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">i32</span> {
    a + b
}

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">fibonacci</span>(n: <span class="hljs-type">i32</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">i32</span> {
    <span class="hljs-keyword">match</span> n {
        <span class="hljs-number">0</span> =&gt; <span class="hljs-number">0</span>,
        <span class="hljs-number">1</span> =&gt; <span class="hljs-number">1</span>,
        _ =&gt; <span class="hljs-title function_ invoke__">fibonacci</span>(n - <span class="hljs-number">1</span>) + <span class="hljs-title function_ invoke__">fibonacci</span>(n - <span class="hljs-number">2</span>),
    }
}

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">struct</span> <span class="hljs-title class_">Calculator</span> {
    value: <span class="hljs-type">i32</span>,
}

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Calculator</span> {
    <span class="hljs-meta">#[wasm_bindgen(constructor)]</span>
    <span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">new</span>() <span class="hljs-punctuation">-&gt;</span> Calculator {
        Calculator { value: <span class="hljs-number">0</span> }
    }

    <span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">add</span>(&amp;<span class="hljs-keyword">mut</span> <span class="hljs-keyword">self</span>, n: <span class="hljs-type">i32</span>) {
        <span class="hljs-keyword">self</span>.value += n;
    }

    <span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_value</span>(&amp;<span class="hljs-keyword">self</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">i32</span> {
        <span class="hljs-keyword">self</span>.value
    }
}
</code></pre><h3 id="编译为-wasm" tabindex="-1"><a class="header-anchor" href="#编译为-wasm">编译为 Wasm</a></h3><pre class="hljs"><code>wasm-pack build --target web
</code></pre><h2 id="在-javascript-中使用-wasm" tabindex="-1"><a class="header-anchor" href="#在-javascript-中使用-wasm">在 JavaScript 中使用 Wasm</a></h2><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法">基本用法</a></h3><pre class="hljs"><code><span class="hljs-keyword">import</span> init, { add, fibonacci } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./pkg/hello_wasm.js&#39;</span>

<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">run</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">await</span> <span class="hljs-title function_">init</span>()

  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">add</span>(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)) <span class="hljs-comment">// 3</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">fibonacci</span>(<span class="hljs-number">10</span>)) <span class="hljs-comment">// 55</span>
}

<span class="hljs-title function_">run</span>()
</code></pre><h3 id="使用类" tabindex="-1"><a class="header-anchor" href="#使用类">使用类</a></h3><pre class="hljs"><code><span class="hljs-keyword">import</span> init, { <span class="hljs-title class_">Calculator</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./pkg/hello_wasm.js&#39;</span>

<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">run</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">await</span> <span class="hljs-title function_">init</span>()

  <span class="hljs-keyword">const</span> calc = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Calculator</span>()
  calc.<span class="hljs-title function_">add</span>(<span class="hljs-number">10</span>)
  calc.<span class="hljs-title function_">add</span>(<span class="hljs-number">20</span>)
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(calc.<span class="hljs-title function_">get_value</span>()) <span class="hljs-comment">// 30</span>
}

<span class="hljs-title function_">run</span>()
</code></pre><h2 id="性能对比" tabindex="-1"><a class="header-anchor" href="#性能对比">性能对比</a></h2><h3 id="javascript-vs-webassembly" tabindex="-1"><a class="header-anchor" href="#javascript-vs-webassembly">JavaScript vs WebAssembly</a></h3><p>让我们对比一下斐波那契数列的计算性能：</p><pre class="hljs"><code><span class="hljs-comment">// JavaScript 版本</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">fibonacciJS</span>(<span class="hljs-params">n</span>) {
  <span class="hljs-keyword">if</span> (n &lt;= <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> n
  <span class="hljs-keyword">return</span> <span class="hljs-title function_">fibonacciJS</span>(n - <span class="hljs-number">1</span>) + <span class="hljs-title function_">fibonacciJS</span>(n - <span class="hljs-number">2</span>)
}

<span class="hljs-comment">// WebAssembly 版本</span>
<span class="hljs-comment">// 使用上面定义的 fibonacci 函数</span>

<span class="hljs-comment">// 性能测试</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">time</span>(<span class="hljs-string">&#39;JavaScript&#39;</span>)
<span class="hljs-title function_">fibonacciJS</span>(<span class="hljs-number">35</span>)
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">timeEnd</span>(<span class="hljs-string">&#39;JavaScript&#39;</span>)

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">time</span>(<span class="hljs-string">&#39;WebAssembly&#39;</span>)
<span class="hljs-title function_">fibonacci</span>(<span class="hljs-number">35</span>)
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">timeEnd</span>(<span class="hljs-string">&#39;WebAssembly&#39;</span>)
</code></pre><p>在大多数情况下，WebAssembly 的性能会明显优于 JavaScript，尤其是在计算密集型任务中。</p><h2 id="实际应用场景" tabindex="-1"><a class="header-anchor" href="#实际应用场景">实际应用场景</a></h2><h3 id="1-图像处理" tabindex="-1"><a class="header-anchor" href="#1-图像处理">1. 图像处理</a></h3><pre class="hljs"><code><span class="hljs-keyword">use</span> wasm_bindgen::prelude::*;

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">grayscale</span>(width: <span class="hljs-type">usize</span>, height: <span class="hljs-type">usize</span>, data: &amp;[<span class="hljs-type">u8</span>]) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Vec</span>&lt;<span class="hljs-type">u8</span>&gt; {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">result</span> = <span class="hljs-type">Vec</span>::<span class="hljs-title function_ invoke__">with_capacity</span>(data.<span class="hljs-title function_ invoke__">len</span>());
    
    <span class="hljs-keyword">for</span> <span class="hljs-variable">i</span> <span class="hljs-keyword">in</span> (<span class="hljs-number">0</span>..data.<span class="hljs-title function_ invoke__">len</span>()).<span class="hljs-title function_ invoke__">step_by</span>(<span class="hljs-number">4</span>) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">r</span> = data[i] <span class="hljs-keyword">as</span> <span class="hljs-type">f32</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">g</span> = data[i + <span class="hljs-number">1</span>] <span class="hljs-keyword">as</span> <span class="hljs-type">f32</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">b</span> = data[i + <span class="hljs-number">2</span>] <span class="hljs-keyword">as</span> <span class="hljs-type">f32</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">gray</span> = (<span class="hljs-number">0.299</span> * r + <span class="hljs-number">0.587</span> * g + <span class="hljs-number">0.114</span> * b) <span class="hljs-keyword">as</span> <span class="hljs-type">u8</span>;
        
        result.<span class="hljs-title function_ invoke__">push</span>(gray);
        result.<span class="hljs-title function_ invoke__">push</span>(gray);
        result.<span class="hljs-title function_ invoke__">push</span>(gray);
        result.<span class="hljs-title function_ invoke__">push</span>(data[i + <span class="hljs-number">3</span>]); <span class="hljs-comment">// alpha</span>
    }
    
    result
}
</code></pre><h3 id="2-数据加密" tabindex="-1"><a class="header-anchor" href="#2-数据加密">2. 数据加密</a></h3><pre class="hljs"><code><span class="hljs-keyword">use</span> wasm_bindgen::prelude::*;
<span class="hljs-keyword">use</span> sha2::{Sha256, Digest};

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">hash_string</span>(input: &amp;<span class="hljs-type">str</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">String</span> {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">hasher</span> = Sha256::<span class="hljs-title function_ invoke__">new</span>();
    hasher.<span class="hljs-title function_ invoke__">update</span>(input.<span class="hljs-title function_ invoke__">as_bytes</span>());
    <span class="hljs-keyword">let</span> <span class="hljs-variable">result</span> = hasher.<span class="hljs-title function_ invoke__">finalize</span>();
    <span class="hljs-built_in">format!</span>(<span class="hljs-string">&quot;{:x}&quot;</span>, result)
}
</code></pre><h3 id="3-游戏引擎" tabindex="-1"><a class="header-anchor" href="#3-游戏引擎">3. 游戏引擎</a></h3><p>WebAssembly 非常适合用于游戏引擎的核心逻辑，如物理计算、碰撞检测等。</p><h2 id="优化技巧" tabindex="-1"><a class="header-anchor" href="#优化技巧">优化技巧</a></h2><h3 id="1-减少数据传输" tabindex="-1"><a class="header-anchor" href="#1-减少数据传输">1. 减少数据传输</a></h3><pre class="hljs"><code><span class="hljs-comment">// 不好：频繁调用</span>
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">1000</span>; i++) {
  wasm.<span class="hljs-title function_">process</span>(data[i])
}

<span class="hljs-comment">// 好：批量处理</span>
wasm.<span class="hljs-title function_">process_batch</span>(data)
</code></pre><h3 id="2-使用共享内存" tabindex="-1"><a class="header-anchor" href="#2-使用共享内存">2. 使用共享内存</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> memory = <span class="hljs-keyword">new</span> <span class="hljs-title class_">WebAssembly</span>.<span class="hljs-title class_">Memory</span>({ <span class="hljs-attr">initial</span>: <span class="hljs-number">10</span> })
<span class="hljs-keyword">const</span> wasmInstance = <span class="hljs-keyword">await</span> <span class="hljs-title class_">WebAssembly</span>.<span class="hljs-title function_">instantiate</span>(wasmBytes, {
  <span class="hljs-attr">env</span>: { memory }
})

<span class="hljs-comment">// 在 JavaScript 和 Wasm 之间共享内存</span>
<span class="hljs-keyword">const</span> buffer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Uint8Array</span>(wasmInstance.<span class="hljs-property">exports</span>.<span class="hljs-property">memory</span>.<span class="hljs-property">buffer</span>)
</code></pre><h3 id="3-使用-simd-指令" tabindex="-1"><a class="header-anchor" href="#3-使用-simd-指令">3. 使用 SIMD 指令</a></h3><pre class="hljs"><code><span class="hljs-meta">#[cfg(target_arch = <span class="hljs-string">&quot;wasm32&quot;</span>)]</span>
<span class="hljs-keyword">use</span> std::arch::wasm32::*;

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">vector_add</span>(a: &amp;[<span class="hljs-type">f32</span>], b: &amp;[<span class="hljs-type">f32</span>]) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Vec</span>&lt;<span class="hljs-type">f32</span>&gt; {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">result</span> = <span class="hljs-type">Vec</span>::<span class="hljs-title function_ invoke__">with_capacity</span>(a.<span class="hljs-title function_ invoke__">len</span>());
    
    <span class="hljs-keyword">for</span> <span class="hljs-variable">i</span> <span class="hljs-keyword">in</span> (<span class="hljs-number">0</span>..a.<span class="hljs-title function_ invoke__">len</span>()).<span class="hljs-title function_ invoke__">step_by</span>(<span class="hljs-number">4</span>) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">va</span> = <span class="hljs-title function_ invoke__">v128_load</span>(a.<span class="hljs-title function_ invoke__">as_ptr</span>().<span class="hljs-title function_ invoke__">add</span>(i) <span class="hljs-keyword">as</span> *<span class="hljs-keyword">const</span> v128);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">vb</span> = <span class="hljs-title function_ invoke__">v128_load</span>(b.<span class="hljs-title function_ invoke__">as_ptr</span>().<span class="hljs-title function_ invoke__">add</span>(i) <span class="hljs-keyword">as</span> *<span class="hljs-keyword">const</span> v128);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">vr</span> = <span class="hljs-title function_ invoke__">f32x4_add</span>(va, vb);
        <span class="hljs-title function_ invoke__">v128_store</span>(result.<span class="hljs-title function_ invoke__">as_mut_ptr</span>().<span class="hljs-title function_ invoke__">add</span>(i) <span class="hljs-keyword">as</span> *<span class="hljs-keyword">mut</span> v128, vr);
    }
    
    result
}
</code></pre><h2 id="调试技巧" tabindex="-1"><a class="header-anchor" href="#调试技巧">调试技巧</a></h2><h3 id="1-使用-consolelog" tabindex="-1"><a class="header-anchor" href="#1-使用-consolelog">1. 使用 console.log</a></h3><pre class="hljs"><code><span class="hljs-keyword">use</span> wasm_bindgen::prelude::*;

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">extern</span> <span class="hljs-string">&quot;C&quot;</span> {
    <span class="hljs-meta">#[wasm_bindgen(js_namespace = console)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">log</span>(s: &amp;<span class="hljs-type">str</span>);
}

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">debug_function</span>() {
    <span class="hljs-title function_ invoke__">log</span>(<span class="hljs-string">&quot;Debug message from Wasm&quot;</span>);
}
</code></pre><h3 id="2-使用浏览器开发者工具" tabindex="-1"><a class="header-anchor" href="#2-使用浏览器开发者工具">2. 使用浏览器开发者工具</a></h3><p>现代浏览器的开发者工具支持调试 WebAssembly 代码。</p><h3 id="3-性能分析" tabindex="-1"><a class="header-anchor" href="#3-性能分析">3. 性能分析</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> start = performance.<span class="hljs-title function_">now</span>()
<span class="hljs-title function_">wasm_function</span>()
<span class="hljs-keyword">const</span> end = performance.<span class="hljs-title function_">now</span>()
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`Execution time: <span class="hljs-subst">\${end - start}</span>ms\`</span>)
</code></pre><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践">最佳实践</a></h2><h3 id="1-合理使用-wasm" tabindex="-1"><a class="header-anchor" href="#1-合理使用-wasm">1. 合理使用 Wasm</a></h3><p>不是所有场景都适合使用 WebAssembly。以下情况适合：</p><ul><li>计算密集型任务</li><li>需要高性能的场景</li><li>已有成熟的 C/C++/Rust 代码库</li></ul><p>以下情况不适合：</p><ul><li>简单的 DOM 操作</li><li>轻量级计算</li><li>频繁的 JavaScript 交互</li></ul><h3 id="2-异步加载" tabindex="-1"><a class="header-anchor" href="#2-异步加载">2. 异步加载</a></h3><pre class="hljs"><code><span class="hljs-comment">// 异步加载 Wasm 模块</span>
<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">loadWasm</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">const</span> <span class="hljs-variable language_">module</span> = <span class="hljs-keyword">await</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#39;./pkg/hello_wasm.js&#39;</span>)
    <span class="hljs-keyword">await</span> <span class="hljs-variable language_">module</span>.<span class="hljs-title function_">default</span>()
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">module</span>
  } <span class="hljs-keyword">catch</span> (error) {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(<span class="hljs-string">&#39;Failed to load Wasm:&#39;</span>, error)
  }
}
</code></pre><h3 id="3-错误处理" tabindex="-1"><a class="header-anchor" href="#3-错误处理">3. 错误处理</a></h3><pre class="hljs"><code><span class="hljs-keyword">use</span> wasm_bindgen::prelude::*;

<span class="hljs-meta">#[wasm_bindgen]</span>
<span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">safe_divide</span>(a: <span class="hljs-type">i32</span>, b: <span class="hljs-type">i32</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Result</span>&lt;<span class="hljs-type">i32</span>, <span class="hljs-type">String</span>&gt; {
    <span class="hljs-keyword">if</span> b == <span class="hljs-number">0</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-title function_ invoke__">Err</span>(<span class="hljs-string">&quot;Division by zero&quot;</span>.<span class="hljs-title function_ invoke__">to_string</span>());
    }
    <span class="hljs-title function_ invoke__">Ok</span>(a / b)
}
</code></pre><pre class="hljs"><code><span class="hljs-keyword">const</span> result = <span class="hljs-title function_">safe_divide</span>(<span class="hljs-number">10</span>, <span class="hljs-number">0</span>)
<span class="hljs-keyword">if</span> (result.<span class="hljs-property">err</span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(result.<span class="hljs-property">err</span>)
} <span class="hljs-keyword">else</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">ok</span>)
}
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结">总结</a></h2><p>WebAssembly 为 Web 开发带来了新的可能性，让我们能够在浏览器中运行高性能的原生代码。掌握 WebAssembly 将为你的技术栈增添强大的武器。</p><blockquote><p>WebAssembly 不是要取代 JavaScript，而是要与之协作，共同构建更强大的 Web 应用。</p></blockquote>`,62)])]))}};export{i as date,u as default,j as location,d as tags,o as title};
