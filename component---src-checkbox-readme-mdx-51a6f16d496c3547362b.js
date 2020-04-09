(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JMQW:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var n=a("mXGw"),o=a("/FXl"),c=a("TjRS"),s=a("ZFoC"),i=a("RELR"),b=a("RRD+"),r=a("pS5P");a("aD51");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Checkbox/readme.mdx"}});var d={_frontmatter:l},x=c.a;function m(e){var t,a,m,u=e.components,k=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(o.b)(x,h({},d,k,{components:u,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"checkbox"},"Checkbox"),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)("pre",null,Object(o.b)("code",h({parentName:"pre"},{className:"language-tsx"}),"import { Checkbox } from '@fxtrot/edge';\n")),Object(o.b)(s.c,{__position:0,__code:'() => {\n  const [selected, setSelected] = React.useState(false)\n  return (\n    <Checkbox\n      label="Subscribe to news"\n      checked={selected}\n      onChange={e => setSelected(e.target.checked)}\n      message="This is the message"\n    />\n  )\n}',__scope:(t={props:k,DefaultLayout:c.a,Playground:s.c,Checkbox:i.a,Stack:b.a,Text:r.a},t.DefaultLayout=c.a,t._frontmatter=l,t),mdxType:"Playground"},(function(){var e=n.useState(!1),t=e[0],a=e[1];return Object(o.b)(i.a,{label:"Subscribe to news",checked:t,onChange:function(e){return a(e.target.checked)},message:"This is the message",mdxType:"Checkbox"})})),Object(o.b)("h2",{id:"tone"},"Tone"),Object(o.b)(s.c,{__position:1,__code:'<Stack>\n  <Checkbox label="No tone" message="Normal tone" />\n  <Checkbox label="Positive tone" message="Positive tone" tone="positive" />\n  <Checkbox label="Critical tone" message="Critical tone" tone="critical" />\n</Stack>',__scope:(a={props:k,DefaultLayout:c.a,Playground:s.c,Checkbox:i.a,Stack:b.a,Text:r.a},a.DefaultLayout=c.a,a._frontmatter=l,a),mdxType:"Playground"},Object(o.b)(b.a,{mdxType:"Stack"},Object(o.b)(i.a,{label:"No tone",message:"Normal tone",mdxType:"Checkbox"}),Object(o.b)(i.a,{label:"Positive tone",message:"Positive tone",tone:"positive",mdxType:"Checkbox"}),Object(o.b)(i.a,{label:"Critical tone",message:"Critical tone",tone:"critical",mdxType:"Checkbox"}))),Object(o.b)("h2",{id:"checked-inner-text"},"Checked inner Text"),Object(o.b)(s.c,{__position:2,__code:'<Stack>\n  <Checkbox\n    label="With some additional text"\n    message="It is recommended not to use message with children text"\n    checked={false}\n  >\n    <Text>This text is shown when the Checkbox is checked</Text>\n  </Checkbox>\n  <Checkbox label="With some additional text" checked={true}>\n    <Text>This text is shown when the Checkbox is checked</Text>\n  </Checkbox>\n</Stack>',__scope:(m={props:k,DefaultLayout:c.a,Playground:s.c,Checkbox:i.a,Stack:b.a,Text:r.a},m.DefaultLayout=c.a,m._frontmatter=l,m),mdxType:"Playground"},Object(o.b)(b.a,{mdxType:"Stack"},Object(o.b)(i.a,{label:"With some additional text",message:"It is recommended not to use message with children text",checked:!1,mdxType:"Checkbox"},Object(o.b)(r.a,{mdxType:"Text"},"This text is shown when the Checkbox is checked")),Object(o.b)(i.a,{label:"With some additional text",checked:!0,mdxType:"Checkbox"},Object(o.b)(r.a,{mdxType:"Text"},"This text is shown when the Checkbox is checked")))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Checkbox/readme.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-checkbox-readme-mdx-51a6f16d496c3547362b.js.map