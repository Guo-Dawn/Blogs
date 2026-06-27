import{_ as l,s as k,g as R,q as E,p as F,a as I,b as _,H as D,y as G,D as f,E as C,F as P,l as z,K as H}from"./Mermaid-26owrxbz.js";import{p as V}from"./chunk-4BX2VUAB-DC3ujrtC.js";import{p as W}from"./mermaid-parser.core-uSDfc3Jt.js";import"./index-BJiRJkkH.js";import"ol/Map";import"ol/View";import"ol/layer/Tile";import"ol/source/XYZ";import"ol/proj";import"ol/layer/Vector";import"ol/source/Vector";import"ol/source";import"ol/Feature";import"ol/geom/Point";import"ol/style";import"ol/extent";import"ol/geom/Point.js";import"ol/easing.js";import"ol/layer/Tile.js";import"ol/layer/Image.js";import"ol/proj.js";import"ol/source/ImageStatic.js";import"ol/source/ImageWMS.js";import"ol/source/TileImage.js";import"ol/source/TileWMS.js";import"ol/source/VectorTile.js";import"ol/source.js";import"ol/format/MVT.js";import"ol/style/Style.js";import"ol/style/Stroke.js";import"ol/render.js";import"ol/structs/LRUCache.js";import"ol/tilegrid.js";import"ol/tileurlfunction.js";import"ol/render/Feature.js";import"ol/layer/VectorTile.js";import"ol/extent.js";import"ol/Observable.js";import"ol/layer/Group.js";import"ol/layer/BaseVector.js";import"ol/source/Vector.js";import"ol/layer/Layer.js";import"ol/source/Cluster.js";import"ol/layer/Vector.js";import"ol/style/Icon.js";import"ol/geom/Polygon.js";import"ol/geom/SimpleGeometry.js";import"ol/geom.js";import"ol/Overlay.js";import"./dayjs.min-Dv31J0-6.js";import"./min-Cfu4bqAI.js";import"./_baseIteratee-GjjfYcC6.js";import"./_baseUniq-Cj8kZmGo.js";import"./flatten-C7QJOWgz.js";var h={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},w={axes:[],curves:[],options:h},g=structuredClone(w),B=P.radar,j=l(()=>f({...B,...C().radar}),"getConfig"),b=l(()=>g.axes,"getAxes"),q=l(()=>g.curves,"getCurves"),K=l(()=>g.options,"getOptions"),N=l(r=>{g.axes=r.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),U=l(r=>{g.curves=r.map(t=>({name:t.name,label:t.label??t.name,entries:X(t.entries)}))},"setCurves"),X=l(r=>{if(r[0].axis==null)return r.map(e=>e.value);const t=b();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const a=r.find(o=>o.axis?.$refText===e.name);if(a===void 0)throw new Error("Missing entry for axis "+e.label);return a.value})},"computeCurveEntries"),Y=l(r=>{const t=r.reduce((e,a)=>(e[a.name]=a,e),{});g.options={showLegend:t.showLegend?.value??h.showLegend,ticks:t.ticks?.value??h.ticks,max:t.max?.value??h.max,min:t.min?.value??h.min,graticule:t.graticule?.value??h.graticule}},"setOptions"),Z=l(()=>{G(),g=structuredClone(w)},"clear"),$={getAxes:b,getCurves:q,getOptions:K,setAxes:N,setCurves:U,setOptions:Y,getConfig:j,clear:Z,setAccTitle:_,getAccTitle:I,setDiagramTitle:F,getDiagramTitle:E,getAccDescription:R,setAccDescription:k},J=l(r=>{V(r,$);const{axes:t,curves:e,options:a}=r;$.setAxes(t),$.setCurves(e),$.setOptions(a)},"populate"),Q={parse:l(async r=>{const t=await W("radar",r);z.debug(t),J(t)},"parse")},tt=l((r,t,e,a)=>{const o=a.db,s=o.getAxes(),n=o.getCurves(),i=o.getOptions(),p=o.getConfig(),c=o.getDiagramTitle(),d=D(t),m=et(d,p),u=i.max??Math.max(...n.map(y=>Math.max(...y.entries))),x=i.min,v=Math.min(p.width,p.height)/2;rt(m,s,v,i.ticks,i.graticule),at(m,s,v,p),M(m,s,n,x,u,i.graticule,p),T(m,n,i.showLegend,p),m.append("text").attr("class","radarTitle").text(c).attr("x",0).attr("y",-p.height/2-p.marginTop)},"draw"),et=l((r,t)=>{const e=t.width+t.marginLeft+t.marginRight,a=t.height+t.marginTop+t.marginBottom,o={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return r.attr("viewbox",`0 0 ${e} ${a}`).attr("width",e).attr("height",a),r.append("g").attr("transform",`translate(${o.x}, ${o.y})`)},"drawFrame"),rt=l((r,t,e,a,o)=>{if(o==="circle")for(let s=0;s<a;s++){const n=e*(s+1)/a;r.append("circle").attr("r",n).attr("class","radarGraticule")}else if(o==="polygon"){const s=t.length;for(let n=0;n<a;n++){const i=e*(n+1)/a,p=t.map((c,d)=>{const m=2*d*Math.PI/s-Math.PI/2,u=i*Math.cos(m),x=i*Math.sin(m);return`${u},${x}`}).join(" ");r.append("polygon").attr("points",p).attr("class","radarGraticule")}}},"drawGraticule"),at=l((r,t,e,a)=>{const o=t.length;for(let s=0;s<o;s++){const n=t[s].label,i=2*s*Math.PI/o-Math.PI/2;r.append("line").attr("x1",0).attr("y1",0).attr("x2",e*a.axisScaleFactor*Math.cos(i)).attr("y2",e*a.axisScaleFactor*Math.sin(i)).attr("class","radarAxisLine"),r.append("text").text(n).attr("x",e*a.axisLabelFactor*Math.cos(i)).attr("y",e*a.axisLabelFactor*Math.sin(i)).attr("class","radarAxisLabel")}},"drawAxes");function M(r,t,e,a,o,s,n){const i=t.length,p=Math.min(n.width,n.height)/2;e.forEach((c,d)=>{if(c.entries.length!==i)return;const m=c.entries.map((u,x)=>{const v=2*Math.PI*x/i-Math.PI/2,y=A(u,a,o,p),O=y*Math.cos(v),S=y*Math.sin(v);return{x:O,y:S}});s==="circle"?r.append("path").attr("d",L(m,n.curveTension)).attr("class",`radarCurve-${d}`):s==="polygon"&&r.append("polygon").attr("points",m.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${d}`)})}l(M,"drawCurves");function A(r,t,e,a){const o=Math.min(Math.max(r,t),e);return a*(o-t)/(e-t)}l(A,"relativeRadius");function L(r,t){const e=r.length;let a=`M${r[0].x},${r[0].y}`;for(let o=0;o<e;o++){const s=r[(o-1+e)%e],n=r[o],i=r[(o+1)%e],p=r[(o+2)%e],c={x:n.x+(i.x-s.x)*t,y:n.y+(i.y-s.y)*t},d={x:i.x-(p.x-n.x)*t,y:i.y-(p.y-n.y)*t};a+=` C${c.x},${c.y} ${d.x},${d.y} ${i.x},${i.y}`}return`${a} Z`}l(L,"closedRoundCurve");function T(r,t,e,a){if(!e)return;const o=(a.width/2+a.marginRight)*3/4,s=-(a.height/2+a.marginTop)*3/4,n=20;t.forEach((i,p)=>{const c=r.append("g").attr("transform",`translate(${o}, ${s+p*n})`);c.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${p}`),c.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(i.label)})}l(T,"drawLegend");var ot={draw:tt},it=l((r,t)=>{let e="";for(let a=0;a<r.THEME_COLOR_LIMIT;a++){const o=r[`cScale${a}`];e+=`
		.radarCurve-${a} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${a} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`}return e},"genIndexStyles"),st=l(r=>{const t=H(),e=C(),a=f(t,e.themeVariables),o=f(a.radar,r);return{themeVariables:a,radarOptions:o}},"buildRadarStyleOptions"),nt=l(({radar:r}={})=>{const{themeVariables:t,radarOptions:e}=st(r);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${it(t,e)}
	`},"styles"),le={parser:Q,db:$,renderer:ot,styles:nt};export{le as diagram};
