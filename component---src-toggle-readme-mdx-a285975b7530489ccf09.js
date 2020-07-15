(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{xkc4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));var g=a("Fcif"),l=a("+I+c"),n=a("mXGw"),o=a("/FXl"),s=a("TjRS"),c=a("ZFoC"),i=a("qtmy"),d=a("0brI"),r=a("RRD+"),b=(a("aD51"),{});void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Toggle/readme.mdx"}});var m={_frontmatter:b},h=s.a;function p(e){var t,a,p,f,T,u,k,y=e.components,O=Object(l.a)(e,["components"]);return Object(o.b)(h,Object(g.a)({},m,O,{components:y,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"toggle"},"Toggle"),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(g.a)({parentName:"pre"},{className:"language-tsx"}),"import { Toggle } from '@fxtrot/edge';\n")),Object(o.b)(c.c,{__position:0,__code:'() => {\n  const [toggle, setToggle] = React.useState(false)\n  return (\n    <Toggle\n      checked={toggle}\n      label="Default toggle"\n      onChange={() => setToggle(!toggle)}\n    />\n  )\n}',__scope:(t={props:O,DefaultLayout:s.a,Playground:c.c,Toggle:i.a,Box:d.a,Stack:r.a},t.DefaultLayout=s.a,t._frontmatter=b,t),mdxType:"Playground"},(function(){var e=n.useState(!1),t=e[0],a=e[1];return Object(o.b)(i.a,{checked:t,label:"Default toggle",onChange:function(){return a(!t)},mdxType:"Toggle"})})),Object(o.b)("h2",{id:"tone-and-message"},"Tone and message"),Object(o.b)(c.c,{__position:1,__code:'<Box\n  display="grid"\n  gridAutoRows="auto"\n  gridTemplateColumns="repeat(4, 1fr)"\n  gridGap="s"\n>\n  <Toggle label="Default toggle" message="Message for toggle" />\n  <Toggle\n    label="Default toggle checked"\n    message="Message for toggle"\n    checked\n  />\n  <Toggle\n    label="Default toggle disabled"\n    message="Message for toggle"\n    disabled\n  />\n  <Toggle\n    label="Default toggle checked disabled"\n    message="Message for toggle"\n    checked\n    disabled\n  />\n  <Toggle\n    checked={false}\n    label="Positive tone"\n    tone="positive"\n    message="Everything is alright"\n  />\n  <Toggle\n    checked={false}\n    label="Positive tone checked"\n    tone="positive"\n    message="Everything is alright"\n    checked\n  />\n  <Toggle\n    checked={false}\n    label="Positive tone disabled"\n    tone="positive"\n    message="Everything is alright"\n    disabled\n  />\n  <Toggle\n    checked={false}\n    label="Positive tone checked disabled"\n    tone="positive"\n    message="Everything is alright"\n    checked\n    disabled\n  />\n\n  <Toggle\n    checked={false}\n    label="Critical tone"\n    tone="critical"\n    message="Something went wrong..."\n  />\n  <Toggle\n    checked={false}\n    label="Critical tone checked"\n    tone="critical"\n    message="Something went wrong..."\n    checked\n  />\n  <Toggle\n    checked={false}\n    label="Critical tone disabled"\n    tone="critical"\n    message="Something went wrong..."\n    disabled\n  />\n  <Toggle\n    checked={false}\n    label="Critical tone checked disabled"\n    tone="critical"\n    message="Something went wrong..."\n    checked\n    disabled\n  />\n</Box>',__scope:(a={props:O,DefaultLayout:s.a,Playground:c.c,Toggle:i.a,Box:d.a,Stack:r.a},a.DefaultLayout=s.a,a._frontmatter=b,a),mdxType:"Playground"},Object(o.b)(d.a,{display:"grid",gridAutoRows:"auto",gridTemplateColumns:"repeat(4, 1fr)",gridGap:"s",mdxType:"Box"},Object(o.b)(i.a,{label:"Default toggle",message:"Message for toggle",mdxType:"Toggle"}),Object(o.b)(i.a,{label:"Default toggle checked",message:"Message for toggle",checked:!0,mdxType:"Toggle"}),Object(o.b)(i.a,{label:"Default toggle disabled",message:"Message for toggle",disabled:!0,mdxType:"Toggle"}),Object(o.b)(i.a,{label:"Default toggle checked disabled",message:"Message for toggle",checked:!0,disabled:!0,mdxType:"Toggle"}),Object(o.b)(i.a,{checked:!1,label:"Positive tone",tone:"positive",message:"Everything is alright",mdxType:"Toggle"}),Object(o.b)(i.a,((p={checked:!1,label:"Positive tone checked",tone:"positive",message:"Everything is alright"}).checked=!0,p.mdxType="Toggle",p)),Object(o.b)(i.a,{checked:!1,label:"Positive tone disabled",tone:"positive",message:"Everything is alright",disabled:!0,mdxType:"Toggle"}),Object(o.b)(i.a,((f={checked:!1,label:"Positive tone checked disabled",tone:"positive",message:"Everything is alright"}).checked=!0,f.disabled=!0,f.mdxType="Toggle",f)),Object(o.b)(i.a,{checked:!1,label:"Critical tone",tone:"critical",message:"Something went wrong...",mdxType:"Toggle"}),Object(o.b)(i.a,((T={checked:!1,label:"Critical tone checked",tone:"critical",message:"Something went wrong..."}).checked=!0,T.mdxType="Toggle",T)),Object(o.b)(i.a,{checked:!1,label:"Critical tone disabled",tone:"critical",message:"Something went wrong...",disabled:!0,mdxType:"Toggle"}),Object(o.b)(i.a,((u={checked:!1,label:"Critical tone checked disabled",tone:"critical",message:"Something went wrong..."}).checked=!0,u.disabled=!0,u.mdxType="Toggle",u)))),Object(o.b)("h2",{id:"align"},"Align"),Object(o.b)(c.c,{__position:2,__code:'<Box width={400}>\n  <Stack space="m">\n    <Toggle label="Aligned left" message="Message for toggle" />\n    <Toggle\n      label="Aligned right"\n      tone="critical"\n      message="Message for toggle"\n      align="right"\n    />\n    <Toggle label="Apart" message="Message for toggle" align="apart" />\n  </Stack>\n</Box>',__scope:(k={props:O,DefaultLayout:s.a,Playground:c.c,Toggle:i.a,Box:d.a,Stack:r.a},k.DefaultLayout=s.a,k._frontmatter=b,k),mdxType:"Playground"},Object(o.b)(d.a,{width:400,mdxType:"Box"},Object(o.b)(r.a,{space:"m",mdxType:"Stack"},Object(o.b)(i.a,{label:"Aligned left",message:"Message for toggle",mdxType:"Toggle"}),Object(o.b)(i.a,{label:"Aligned right",tone:"critical",message:"Message for toggle",align:"right",mdxType:"Toggle"}),Object(o.b)(i.a,{label:"Apart",message:"Message for toggle",align:"apart",mdxType:"Toggle"})))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Toggle/readme.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-toggle-readme-mdx-a285975b7530489ccf09.js.map