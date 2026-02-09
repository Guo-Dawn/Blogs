import{ar as n,as as l,at as p}from"./index-C47N-Uwe.js";const t={class:"markdown-body"},o="测试文章-7",i="2026-01-14T00:00:00.000Z",j={address:"广州",lng:113.26,lat:23.13},d=["nodejs","backend","best-practices"],u={__name:"nodejs-best-practices",setup(e,{expose:a}){return a({frontmatter:{title:"测试文章-7",date:"2026-01-14T00:00:00.000Z",location:{address:"广州",lng:113.26,lat:23.13},tags:["nodejs","backend","best-practices"]}}),(r,s)=>(l(),n("div",t,[...s[0]||(s[0]=[p(`<h1 id="nodejs-后端开发最佳实践" tabindex="-1"><a class="header-anchor" href="#nodejs-后端开发最佳实践">Node.js 后端开发最佳实践</a></h1><p>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，让 JavaScript 能够在服务器端运行。本文将分享 Node.js 后端开发的最佳实践。</p><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构">项目结构</a></h2><h3 id="推荐的目录结构" tabindex="-1"><a class="header-anchor" href="#推荐的目录结构">推荐的目录结构</a></h3><pre class="hljs"><code>project/
├── src/
│   ├── config/          # 配置文件
│   ├── controllers/     # 控制器
│   ├── services/        # 业务逻辑
│   ├── models/          # 数据模型
│   ├── routes/          # 路由定义
│   ├── middlewares/     # 中间件
│   ├── utils/           # 工具函数
│   └── app.js           # 应用入口
├── tests/               # 测试文件
├── package.json
└── tsconfig.json        # 如果使用 TypeScript
</code></pre><h3 id="模块化设计" tabindex="-1"><a class="header-anchor" href="#模块化设计">模块化设计</a></h3><pre class="hljs"><code><span class="hljs-comment">// src/config/database.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">host</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">DB_HOST</span> || <span class="hljs-string">&#39;localhost&#39;</span>,
  <span class="hljs-attr">port</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">DB_PORT</span> || <span class="hljs-number">5432</span>,
  <span class="hljs-attr">database</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">DB_NAME</span> || <span class="hljs-string">&#39;myapp&#39;</span>
}

<span class="hljs-comment">// src/models/user.js</span>
<span class="hljs-keyword">const</span> db = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;../config/database&#39;</span>)

<span class="hljs-keyword">class</span> <span class="hljs-title class_">User</span> {
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">async</span> <span class="hljs-title function_">findById</span>(<span class="hljs-params">id</span>) {
    <span class="hljs-comment">// 数据库查询逻辑</span>
  }
  
  <span class="hljs-keyword">static</span> <span class="hljs-keyword">async</span> <span class="hljs-title function_">create</span>(<span class="hljs-params">data</span>) {
    <span class="hljs-comment">// 创建用户逻辑</span>
  }
}

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = <span class="hljs-title class_">User</span>
</code></pre><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理">错误处理</a></h2><h3 id="全局错误处理" tabindex="-1"><a class="header-anchor" href="#全局错误处理">全局错误处理</a></h3><pre class="hljs"><code><span class="hljs-comment">// src/middlewares/errorHandler.js</span>
<span class="hljs-keyword">const</span> <span class="hljs-title function_">errorHandler</span> = (<span class="hljs-params">err, req, res, next</span>) =&gt; {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err.<span class="hljs-property">stack</span>)

  <span class="hljs-keyword">if</span> (err.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;entity.parse.failed&#39;</span>) {
    <span class="hljs-keyword">return</span> res.<span class="hljs-title function_">status</span>(<span class="hljs-number">400</span>).<span class="hljs-title function_">json</span>({
      <span class="hljs-attr">error</span>: <span class="hljs-string">&#39;Invalid JSON&#39;</span>
    })
  }

  res.<span class="hljs-title function_">status</span>(err.<span class="hljs-property">status</span> || <span class="hljs-number">500</span>).<span class="hljs-title function_">json</span>({
    <span class="hljs-attr">error</span>: err.<span class="hljs-property">message</span> || <span class="hljs-string">&#39;Internal Server Error&#39;</span>
  })
}

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = errorHandler
</code></pre><h3 id="自定义错误类" tabindex="-1"><a class="header-anchor" href="#自定义错误类">自定义错误类</a></h3><pre class="hljs"><code><span class="hljs-comment">// src/utils/AppError.js</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">AppError</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">Error</span> {
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">message, statusCode = <span class="hljs-number">500</span></span>) {
    <span class="hljs-variable language_">super</span>(message)
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">statusCode</span> = statusCode
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">isOperational</span> = <span class="hljs-literal">true</span>
    <span class="hljs-title class_">Error</span>.<span class="hljs-title function_">captureStackTrace</span>(<span class="hljs-variable language_">this</span>, <span class="hljs-variable language_">this</span>.<span class="hljs-property">constructor</span>)
  }
}

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = <span class="hljs-title class_">AppError</span>

<span class="hljs-comment">// 使用示例</span>
<span class="hljs-keyword">const</span> <span class="hljs-title class_">AppError</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;../utils/AppError&#39;</span>)

<span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">AppError</span>(<span class="hljs-string">&#39;User not found&#39;</span>, <span class="hljs-number">404</span>)
</code></pre><h3 id="异步错误处理" tabindex="-1"><a class="header-anchor" href="#异步错误处理">异步错误处理</a></h3><pre class="hljs"><code><span class="hljs-comment">// src/middlewares/asyncHandler.js</span>
<span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncHandler</span> = (<span class="hljs-params">fn</span>) =&gt; <span class="hljs-function">(<span class="hljs-params">req, res, next</span>) =&gt;</span> {
  <span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">resolve</span>(<span class="hljs-title function_">fn</span>(req, res, next)).<span class="hljs-title function_">catch</span>(next)
}

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = asyncHandler

<span class="hljs-comment">// 使用示例</span>
<span class="hljs-keyword">const</span> asyncHandler = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;../middlewares/asyncHandler&#39;</span>)

router.<span class="hljs-title function_">get</span>(<span class="hljs-string">&#39;/users/:id&#39;</span>, <span class="hljs-title function_">asyncHandler</span>(<span class="hljs-title function_">async</span> (req, res) =&gt; {
  <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> <span class="hljs-title class_">User</span>.<span class="hljs-title function_">findById</span>(req.<span class="hljs-property">params</span>.<span class="hljs-property">id</span>)
  <span class="hljs-keyword">if</span> (!user) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">AppError</span>(<span class="hljs-string">&#39;User not found&#39;</span>, <span class="hljs-number">404</span>)
  }
  res.<span class="hljs-title function_">json</span>(user)
}))
</code></pre><h2 id="安全性" tabindex="-1"><a class="header-anchor" href="#安全性">安全性</a></h2><h3 id="1-使用-helmet" tabindex="-1"><a class="header-anchor" href="#1-使用-helmet">1. 使用 Helmet</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> helmet = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;helmet&#39;</span>)
app.<span class="hljs-title function_">use</span>(<span class="hljs-title function_">helmet</span>())
</code></pre><h3 id="2-cors-配置" tabindex="-1"><a class="header-anchor" href="#2-cors-配置">2. CORS 配置</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> cors = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;cors&#39;</span>)

app.<span class="hljs-title function_">use</span>(<span class="hljs-title function_">cors</span>({
  <span class="hljs-attr">origin</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">ALLOWED_ORIGINS</span>?.<span class="hljs-title function_">split</span>(<span class="hljs-string">&#39;,&#39;</span>) || <span class="hljs-string">&#39;*&#39;</span>,
  <span class="hljs-attr">credentials</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">methods</span>: [<span class="hljs-string">&#39;GET&#39;</span>, <span class="hljs-string">&#39;POST&#39;</span>, <span class="hljs-string">&#39;PUT&#39;</span>, <span class="hljs-string">&#39;DELETE&#39;</span>],
  <span class="hljs-attr">allowedHeaders</span>: [<span class="hljs-string">&#39;Content-Type&#39;</span>, <span class="hljs-string">&#39;Authorization&#39;</span>]
}))
</code></pre><h3 id="3-输入验证" tabindex="-1"><a class="header-anchor" href="#3-输入验证">3. 输入验证</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> { body, param, query, validationResult } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;express-validator&#39;</span>)

app.<span class="hljs-title function_">post</span>(<span class="hljs-string">&#39;/users&#39;</span>, [
  <span class="hljs-title function_">body</span>(<span class="hljs-string">&#39;email&#39;</span>).<span class="hljs-title function_">isEmail</span>().<span class="hljs-title function_">normalizeEmail</span>(),
  <span class="hljs-title function_">body</span>(<span class="hljs-string">&#39;password&#39;</span>).<span class="hljs-title function_">isLength</span>({ <span class="hljs-attr">min</span>: <span class="hljs-number">8</span> }),
  <span class="hljs-title function_">body</span>(<span class="hljs-string">&#39;name&#39;</span>).<span class="hljs-title function_">trim</span>().<span class="hljs-title function_">notEmpty</span>()
], <span class="hljs-function">(<span class="hljs-params">req, res</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> errors = <span class="hljs-title function_">validationResult</span>(req)
  <span class="hljs-keyword">if</span> (!errors.<span class="hljs-title function_">isEmpty</span>()) {
    <span class="hljs-keyword">return</span> res.<span class="hljs-title function_">status</span>(<span class="hljs-number">400</span>).<span class="hljs-title function_">json</span>({ <span class="hljs-attr">errors</span>: errors.<span class="hljs-title function_">array</span>() })
  }
  <span class="hljs-comment">// 处理请求</span>
})
</code></pre><h3 id="4-环境变量" tabindex="-1"><a class="header-anchor" href="#4-环境变量">4. 环境变量</a></h3><pre class="hljs"><code><span class="hljs-comment">// 使用 dotenv</span>
<span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;dotenv&#39;</span>).<span class="hljs-title function_">config</span>()

<span class="hljs-keyword">const</span> config = {
  <span class="hljs-attr">port</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">PORT</span> || <span class="hljs-number">3000</span>,
  <span class="hljs-attr">nodeEnv</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">NODE_ENV</span> || <span class="hljs-string">&#39;development&#39;</span>,
  <span class="hljs-attr">jwtSecret</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">JWT_SECRET</span>,
  <span class="hljs-attr">dbUrl</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">DATABASE_URL</span>
}

<span class="hljs-comment">// 验证必需的环境变量</span>
<span class="hljs-keyword">const</span> requiredEnvVars = [<span class="hljs-string">&#39;JWT_SECRET&#39;</span>, <span class="hljs-string">&#39;DATABASE_URL&#39;</span>]
requiredEnvVars.<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">envVar</span> =&gt;</span> {
  <span class="hljs-keyword">if</span> (!process.<span class="hljs-property">env</span>[envVar]) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">\`Missing required environment variable: <span class="hljs-subst">\${envVar}</span>\`</span>)
  }
})
</code></pre><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化">性能优化</a></h2><h3 id="1-使用缓存" tabindex="-1"><a class="header-anchor" href="#1-使用缓存">1. 使用缓存</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> <span class="hljs-title class_">NodeCache</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;node-cache&#39;</span>)
<span class="hljs-keyword">const</span> cache = <span class="hljs-keyword">new</span> <span class="hljs-title class_">NodeCache</span>({ <span class="hljs-attr">stdTTL</span>: <span class="hljs-number">600</span> })

<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">getUserWithCache</span>(<span class="hljs-params">id</span>) {
  <span class="hljs-keyword">const</span> cached = cache.<span class="hljs-title function_">get</span>(<span class="hljs-string">\`user:<span class="hljs-subst">\${id}</span>\`</span>)
  <span class="hljs-keyword">if</span> (cached) {
    <span class="hljs-keyword">return</span> cached
  }

  <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> <span class="hljs-title class_">User</span>.<span class="hljs-title function_">findById</span>(id)
  cache.<span class="hljs-title function_">set</span>(<span class="hljs-string">\`user:<span class="hljs-subst">\${id}</span>\`</span>, user)
  <span class="hljs-keyword">return</span> user
}
</code></pre><h3 id="2-连接池" tabindex="-1"><a class="header-anchor" href="#2-连接池">2. 连接池</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> { <span class="hljs-title class_">Pool</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;pg&#39;</span>)

<span class="hljs-keyword">const</span> pool = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Pool</span>({
  <span class="hljs-attr">host</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">DB_HOST</span>,
  <span class="hljs-attr">port</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">DB_PORT</span>,
  <span class="hljs-attr">database</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">DB_NAME</span>,
  <span class="hljs-attr">user</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">DB_USER</span>,
  <span class="hljs-attr">password</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">DB_PASSWORD</span>,
  <span class="hljs-attr">max</span>: <span class="hljs-number">20</span>, <span class="hljs-comment">// 最大连接数</span>
  <span class="hljs-attr">idleTimeoutMillis</span>: <span class="hljs-number">30000</span>,
  <span class="hljs-attr">connectionTimeoutMillis</span>: <span class="hljs-number">2000</span>
})
</code></pre><h3 id="3-压缩响应" tabindex="-1"><a class="header-anchor" href="#3-压缩响应">3. 压缩响应</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> compression = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;compression&#39;</span>)
app.<span class="hljs-title function_">use</span>(<span class="hljs-title function_">compression</span>())
</code></pre><h3 id="4-静态文件优化" tabindex="-1"><a class="header-anchor" href="#4-静态文件优化">4. 静态文件优化</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;express&#39;</span>)
<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">express</span>()

app.<span class="hljs-title function_">use</span>(express.<span class="hljs-title function_">static</span>(<span class="hljs-string">&#39;public&#39;</span>, {
  <span class="hljs-attr">maxAge</span>: <span class="hljs-string">&#39;1y&#39;</span>,
  <span class="hljs-attr">etag</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">lastModified</span>: <span class="hljs-literal">true</span>
}))
</code></pre><h2 id="日志记录" tabindex="-1"><a class="header-anchor" href="#日志记录">日志记录</a></h2><h3 id="使用-winston" tabindex="-1"><a class="header-anchor" href="#使用-winston">使用 Winston</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> winston = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;winston&#39;</span>)

<span class="hljs-keyword">const</span> logger = winston.<span class="hljs-title function_">createLogger</span>({
  <span class="hljs-attr">level</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">LOG_LEVEL</span> || <span class="hljs-string">&#39;info&#39;</span>,
  <span class="hljs-attr">format</span>: winston.<span class="hljs-property">format</span>.<span class="hljs-title function_">combine</span>(
    winston.<span class="hljs-property">format</span>.<span class="hljs-title function_">timestamp</span>(),
    winston.<span class="hljs-property">format</span>.<span class="hljs-title function_">errors</span>({ <span class="hljs-attr">stack</span>: <span class="hljs-literal">true</span> }),
    winston.<span class="hljs-property">format</span>.<span class="hljs-title function_">json</span>()
  ),
  <span class="hljs-attr">transports</span>: [
    <span class="hljs-keyword">new</span> winston.<span class="hljs-property">transports</span>.<span class="hljs-title class_">File</span>({ <span class="hljs-attr">filename</span>: <span class="hljs-string">&#39;error.log&#39;</span>, <span class="hljs-attr">level</span>: <span class="hljs-string">&#39;error&#39;</span> }),
    <span class="hljs-keyword">new</span> winston.<span class="hljs-property">transports</span>.<span class="hljs-title class_">File</span>({ <span class="hljs-attr">filename</span>: <span class="hljs-string">&#39;combined.log&#39;</span> })
  ]
})

<span class="hljs-keyword">if</span> (process.<span class="hljs-property">env</span>.<span class="hljs-property">NODE_ENV</span> !== <span class="hljs-string">&#39;production&#39;</span>) {
  logger.<span class="hljs-title function_">add</span>(<span class="hljs-keyword">new</span> winston.<span class="hljs-property">transports</span>.<span class="hljs-title class_">Console</span>({
    <span class="hljs-attr">format</span>: winston.<span class="hljs-property">format</span>.<span class="hljs-title function_">simple</span>()
  }))
}

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = logger
</code></pre><h3 id="请求日志中间件" tabindex="-1"><a class="header-anchor" href="#请求日志中间件">请求日志中间件</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> logger = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;../utils/logger&#39;</span>)

<span class="hljs-keyword">const</span> <span class="hljs-title function_">requestLogger</span> = (<span class="hljs-params">req, res, next</span>) =&gt; {
  <span class="hljs-keyword">const</span> start = <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>()

  res.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#39;finish&#39;</span>, <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> duration = <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>() - start
    logger.<span class="hljs-title function_">info</span>({
      <span class="hljs-attr">method</span>: req.<span class="hljs-property">method</span>,
      <span class="hljs-attr">url</span>: req.<span class="hljs-property">url</span>,
      <span class="hljs-attr">status</span>: res.<span class="hljs-property">statusCode</span>,
      <span class="hljs-attr">duration</span>: <span class="hljs-string">\`<span class="hljs-subst">\${duration}</span>ms\`</span>
    })
  })

  <span class="hljs-title function_">next</span>()
}

app.<span class="hljs-title function_">use</span>(requestLogger)
</code></pre><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试">测试</a></h2><h3 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试">单元测试</a></h3><pre class="hljs"><code><span class="hljs-comment">// tests/user.test.js</span>
<span class="hljs-keyword">const</span> <span class="hljs-title class_">User</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;../src/models/user&#39;</span>)

<span class="hljs-title function_">describe</span>(<span class="hljs-string">&#39;User Model&#39;</span>, <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-title function_">test</span>(<span class="hljs-string">&#39;should create a new user&#39;</span>, <span class="hljs-title function_">async</span> () =&gt; {
    <span class="hljs-keyword">const</span> userData = {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;John Doe&#39;</span>,
      <span class="hljs-attr">email</span>: <span class="hljs-string">&#39;john@example.com&#39;</span>,
      <span class="hljs-attr">password</span>: <span class="hljs-string">&#39;password123&#39;</span>
    }

    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> <span class="hljs-title class_">User</span>.<span class="hljs-title function_">create</span>(userData)
    <span class="hljs-title function_">expect</span>(user).<span class="hljs-title function_">toHaveProperty</span>(<span class="hljs-string">&#39;id&#39;</span>)
    <span class="hljs-title function_">expect</span>(user.<span class="hljs-property">email</span>).<span class="hljs-title function_">toBe</span>(userData.<span class="hljs-property">email</span>)
  })
})
</code></pre><h3 id="集成测试" tabindex="-1"><a class="header-anchor" href="#集成测试">集成测试</a></h3><pre class="hljs"><code><span class="hljs-comment">// tests/api.test.js</span>
<span class="hljs-keyword">const</span> request = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;supertest&#39;</span>)
<span class="hljs-keyword">const</span> app = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;../src/app&#39;</span>)

<span class="hljs-title function_">describe</span>(<span class="hljs-string">&#39;User API&#39;</span>, <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-title function_">test</span>(<span class="hljs-string">&#39;GET /users/:id should return a user&#39;</span>, <span class="hljs-title function_">async</span> () =&gt; {
    <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> <span class="hljs-title function_">request</span>(app)
      .<span class="hljs-title function_">get</span>(<span class="hljs-string">&#39;/users/1&#39;</span>)
      .<span class="hljs-title function_">expect</span>(<span class="hljs-number">200</span>)

    <span class="hljs-title function_">expect</span>(response.<span class="hljs-property">body</span>).<span class="hljs-title function_">toHaveProperty</span>(<span class="hljs-string">&#39;name&#39;</span>)
  })
})
</code></pre><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署">部署</a></h2><h3 id="1-使用-pm2" tabindex="-1"><a class="header-anchor" href="#1-使用-pm2">1. 使用 PM2</a></h3><pre class="hljs"><code><span class="hljs-comment">// ecosystem.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">apps</span>: [{
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;myapp&#39;</span>,
    <span class="hljs-attr">script</span>: <span class="hljs-string">&#39;./src/app.js&#39;</span>,
    <span class="hljs-attr">instances</span>: <span class="hljs-string">&#39;max&#39;</span>,
    <span class="hljs-attr">exec_mode</span>: <span class="hljs-string">&#39;cluster&#39;</span>,
    <span class="hljs-attr">env</span>: {
      <span class="hljs-attr">NODE_ENV</span>: <span class="hljs-string">&#39;production&#39;</span>,
      <span class="hljs-attr">PORT</span>: <span class="hljs-number">3000</span>
    },
    <span class="hljs-attr">error_file</span>: <span class="hljs-string">&#39;./logs/error.log&#39;</span>,
    <span class="hljs-attr">out_file</span>: <span class="hljs-string">&#39;./logs/out.log&#39;</span>,
    <span class="hljs-attr">log_date_format</span>: <span class="hljs-string">&#39;YYYY-MM-DD HH:mm:ss Z&#39;</span>
  }]
}
</code></pre><h3 id="2-docker-化" tabindex="-1"><a class="header-anchor" href="#2-docker-化">2. Docker 化</a></h3><pre class="hljs"><code><span class="hljs-comment"># Dockerfile</span>
<span class="hljs-keyword">FROM</span> node:<span class="hljs-number">18</span>-alpine

<span class="hljs-keyword">WORKDIR</span><span class="language-bash"> /app</span>

<span class="hljs-keyword">COPY</span><span class="language-bash"> package*.json ./</span>
<span class="hljs-keyword">RUN</span><span class="language-bash"> npm ci --only=production</span>

<span class="hljs-keyword">COPY</span><span class="language-bash"> . .</span>

<span class="hljs-keyword">EXPOSE</span> <span class="hljs-number">3000</span>

<span class="hljs-keyword">CMD</span><span class="language-bash"> [<span class="hljs-string">&quot;node&quot;</span>, <span class="hljs-string">&quot;src/app.js&quot;</span>]</span>
</code></pre><pre class="hljs"><code><span class="hljs-comment"># docker-compose.yml</span>
<span class="hljs-attr">version:</span> <span class="hljs-string">&#39;3.8&#39;</span>
<span class="hljs-attr">services:</span>
  <span class="hljs-attr">app:</span>
    <span class="hljs-attr">build:</span> <span class="hljs-string">.</span>
    <span class="hljs-attr">ports:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-string">&quot;3000:3000&quot;</span>
    <span class="hljs-attr">environment:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-string">NODE_ENV=production</span>
      <span class="hljs-bullet">-</span> <span class="hljs-string">DATABASE_URL=postgresql://user:pass@db:5432/myapp</span>
    <span class="hljs-attr">depends_on:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-string">db</span>

  <span class="hljs-attr">db:</span>
    <span class="hljs-attr">image:</span> <span class="hljs-string">postgres:15-alpine</span>
    <span class="hljs-attr">environment:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-string">POSTGRES_USER=user</span>
      <span class="hljs-bullet">-</span> <span class="hljs-string">POSTGRES_PASSWORD=pass</span>
      <span class="hljs-bullet">-</span> <span class="hljs-string">POSTGRES_DB=myapp</span>
    <span class="hljs-attr">volumes:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-string">postgres_data:/var/lib/postgresql/data</span>

<span class="hljs-attr">volumes:</span>
  <span class="hljs-attr">postgres_data:</span>
</code></pre><h2 id="监控" tabindex="-1"><a class="header-anchor" href="#监控">监控</a></h2><h3 id="健康检查" tabindex="-1"><a class="header-anchor" href="#健康检查">健康检查</a></h3><pre class="hljs"><code>app.<span class="hljs-title function_">get</span>(<span class="hljs-string">&#39;/health&#39;</span>, <span class="hljs-function">(<span class="hljs-params">req, res</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> healthcheck = {
    <span class="hljs-attr">uptime</span>: process.<span class="hljs-title function_">uptime</span>(),
    <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;OK&#39;</span>,
    <span class="hljs-attr">timestamp</span>: <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>()
  }
  
  res.<span class="hljs-title function_">status</span>(<span class="hljs-number">200</span>).<span class="hljs-title function_">json</span>(healthcheck)
})
</code></pre><h3 id="性能监控" tabindex="-1"><a class="header-anchor" href="#性能监控">性能监控</a></h3><pre class="hljs"><code><span class="hljs-keyword">const</span> promClient = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;prom-client&#39;</span>)

<span class="hljs-keyword">const</span> httpRequestDuration = <span class="hljs-keyword">new</span> promClient.<span class="hljs-title class_">Histogram</span>({
  <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;http_request_duration_seconds&#39;</span>,
  <span class="hljs-attr">help</span>: <span class="hljs-string">&#39;Duration of HTTP requests in seconds&#39;</span>,
  <span class="hljs-attr">labelNames</span>: [<span class="hljs-string">&#39;method&#39;</span>, <span class="hljs-string">&#39;route&#39;</span>, <span class="hljs-string">&#39;status_code&#39;</span>]
})

app.<span class="hljs-title function_">use</span>(<span class="hljs-function">(<span class="hljs-params">req, res, next</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> start = <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>()
  
  res.<span class="hljs-title function_">on</span>(<span class="hljs-string">&#39;finish&#39;</span>, <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> duration = (<span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>() - start) / <span class="hljs-number">1000</span>
    httpRequestDuration.<span class="hljs-title function_">observe</span>({
      <span class="hljs-attr">method</span>: req.<span class="hljs-property">method</span>,
      <span class="hljs-attr">route</span>: req.<span class="hljs-property">route</span>?.<span class="hljs-property">path</span> || req.<span class="hljs-property">path</span>,
      <span class="hljs-attr">status_code</span>: res.<span class="hljs-property">statusCode</span>
    }, duration)
  })
  
  <span class="hljs-title function_">next</span>()
})

app.<span class="hljs-title function_">get</span>(<span class="hljs-string">&#39;/metrics&#39;</span>, <span class="hljs-title function_">async</span> (req, res) =&gt; {
  res.<span class="hljs-title function_">set</span>(<span class="hljs-string">&#39;Content-Type&#39;</span>, promClient.<span class="hljs-property">register</span>.<span class="hljs-property">contentType</span>)
  res.<span class="hljs-title function_">end</span>(<span class="hljs-keyword">await</span> promClient.<span class="hljs-property">register</span>.<span class="hljs-title function_">metrics</span>())
})
</code></pre><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结">总结</a></h2><p>Node.js 后端开发需要关注安全性、性能、可维护性等多个方面。遵循最佳实践可以帮助你构建更健壮、更高效的应用。</p><blockquote><p>代码质量不是一蹴而就的，持续改进和重构是保持代码健康的关键。</p></blockquote>`,56)])]))}};export{i as date,u as default,j as location,d as tags,o as title};
