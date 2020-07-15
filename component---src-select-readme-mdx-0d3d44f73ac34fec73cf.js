(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{OsaV:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return d})),a.d(n,"default",(function(){return O}));var t=a("Fcif"),o=a("+I+c"),l=a("mXGw"),i=a("/FXl"),s=a("TjRS"),r=a("ZFoC"),c=a("6+/g"),p=a("e6Z3"),u=a("RRD+"),m=a("0brI"),d=(a("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Select/readme.mdx"}});var b={_frontmatter:d},y=s.a;function O(e){var n,a,O,g=e.components,S=Object(o.a)(e,["components"]);return Object(i.b)(y,Object(t.a)({},b,S,{components:g,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"select"},"Select"),Object(i.b)("h2",{id:"basic-usage"},"Basic usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { Select, Option } from '@fxtrot/edge';\n")),Object(i.b)(r.c,{__position:0,__code:"() => {\n  const people = [\n    'Cammy Whisenant',\n    'Ethel Schmoll',\n    'Jeff Moyes',\n    'Darron Summers',\n    'Hoyt Sillman',\n    'Wendy Acton',\n    'Fransisca Mariano',\n    'Yolonda Ybarbo',\n    'Elvin Charlesworth',\n    'Jenna Provo',\n    'Kory Bianchi',\n    'Evelina Bermudez',\n    'Emilee Manske',\n    'Chantelle Merkley',\n    'Zella Schley',\n    'Carmella Legleiter',\n    'Salley Parton',\n    'Marinda Broadnax',\n    'Stephane Tarleton',\n    'Paul Haack',\n  ]\n  const [value, setValue] = React.useState('')\n  React.useEffect(() => {\n    setTimeout(() => {\n      setValue(people[3])\n    }, 1000)\n  }, [])\n  return (\n    <Box style={{ width: '240px' }}>\n      <Select\n        value={value}\n        onSelect={newValue => setValue(newValue)}\n        placeholder=\"John Doe\"\n        label=\"Select assignee\"\n        message=\"This person will be assigned to the task\"\n      >\n        {people.map(person => (\n          <Option key={person} value={person}>\n            {person}\n          </Option>\n        ))}\n      </Select>\n    </Box>\n  )\n}",__scope:(n={props:S,DefaultLayout:s.a,Playground:r.c,Select:c.a,Option:p.a,Stack:u.a,Box:m.a},n.DefaultLayout=s.a,n._frontmatter=d,n),mdxType:"Playground"},(function(){var e=["Cammy Whisenant","Ethel Schmoll","Jeff Moyes","Darron Summers","Hoyt Sillman","Wendy Acton","Fransisca Mariano","Yolonda Ybarbo","Elvin Charlesworth","Jenna Provo","Kory Bianchi","Evelina Bermudez","Emilee Manske","Chantelle Merkley","Zella Schley","Carmella Legleiter","Salley Parton","Marinda Broadnax","Stephane Tarleton","Paul Haack"],n=l.useState(""),a=n[0],t=n[1];return l.useEffect((function(){setTimeout((function(){t(e[3])}),1e3)}),[]),Object(i.b)(m.a,{style:{width:"240px"},mdxType:"Box"},Object(i.b)(c.a,{value:a,onSelect:function(e){return t(e)},placeholder:"John Doe",label:"Select assignee",message:"This person will be assigned to the task",mdxType:"Select"},e.map((function(e){return Object(i.b)(p.a,{key:e,value:e,mdxType:"Option"},e)}))))})),Object(i.b)("h2",{id:"icon"},"Icon"),Object(i.b)(r.c,{__position:1,__code:"<Box width={200}>\n  <Select icon=\"public\" label=\"Language\" message=\"Language of the app\">\n    {['English', 'Spanish', 'Ukrainian'].map(lang => (\n      <Option key={lang} value={lang}>\n        {lang}\n      </Option>\n    ))}\n  </Select>\n</Box>",__scope:(a={props:S,DefaultLayout:s.a,Playground:r.c,Select:c.a,Option:p.a,Stack:u.a,Box:m.a},a.DefaultLayout=s.a,a._frontmatter=d,a),mdxType:"Playground"},Object(i.b)(m.a,{width:200,mdxType:"Box"},Object(i.b)(c.a,{icon:"public",label:"Language",message:"Language of the app",mdxType:"Select"},["English","Spanish","Ukrainian"].map((function(e){return Object(i.b)(p.a,{key:e,value:e,mdxType:"Option"},e)}))))),Object(i.b)("h2",{id:"message-and-tone"},"Message and tone"),Object(i.b)(r.c,{__position:2,__code:"<Box width={300}>\n  <Stack>\n    <Select\n      label=\"Default tone\"\n      message=\"Selected person will deploy the app\"\n    >\n      {['Taran Burt', 'Jaimee Rios', 'Haniya Padilla'].map(person => (\n        <Option key={person} value={person}>\n          {person}\n        </Option>\n      ))}\n    </Select>\n    <Select\n      label=\"Critical tone\"\n      message=\"Something is incorrect\"\n      tone=\"critical\"\n    >\n      {['Taran Burt', 'Jaimee Rios', 'Haniya Padilla'].map(person => (\n        <Option key={person} value={person}>\n          {person}\n        </Option>\n      ))}\n    </Select>\n    <Select\n      label=\"Positive tone\"\n      message=\"The selection is okay\"\n      tone=\"positive\"\n    >\n      {['Taran Burt', 'Jaimee Rios', 'Haniya Padilla'].map(person => (\n        <Option key={person} value={person}>\n          {person}\n        </Option>\n      ))}\n    </Select>\n    <Select label=\"Disabled select\" message=\"Message is ignored\" disabled>\n      {['Taran Burt', 'Jaimee Rios', 'Haniya Padilla'].map(person => (\n        <Option key={person} value={person}>\n          {person}\n        </Option>\n      ))}\n    </Select>\n    <Select\n      label=\"Disabled select\"\n      message=\"Message is ignored\"\n      variant=\"underlined\"\n    >\n      {['Taran Burt', 'Jaimee Rios', 'Haniya Padilla'].map(person => (\n        <Option key={person} value={person}>\n          {person}\n        </Option>\n      ))}\n    </Select>\n  </Stack>\n</Box>",__scope:(O={props:S,DefaultLayout:s.a,Playground:r.c,Select:c.a,Option:p.a,Stack:u.a,Box:m.a},O.DefaultLayout=s.a,O._frontmatter=d,O),mdxType:"Playground"},Object(i.b)(m.a,{width:300,mdxType:"Box"},Object(i.b)(u.a,{mdxType:"Stack"},Object(i.b)(c.a,{label:"Default tone",message:"Selected person will deploy the app",mdxType:"Select"},["Taran Burt","Jaimee Rios","Haniya Padilla"].map((function(e){return Object(i.b)(p.a,{key:e,value:e,mdxType:"Option"},e)}))),Object(i.b)(c.a,{label:"Critical tone",message:"Something is incorrect",tone:"critical",mdxType:"Select"},["Taran Burt","Jaimee Rios","Haniya Padilla"].map((function(e){return Object(i.b)(p.a,{key:e,value:e,mdxType:"Option"},e)}))),Object(i.b)(c.a,{label:"Positive tone",message:"The selection is okay",tone:"positive",mdxType:"Select"},["Taran Burt","Jaimee Rios","Haniya Padilla"].map((function(e){return Object(i.b)(p.a,{key:e,value:e,mdxType:"Option"},e)}))),Object(i.b)(c.a,{label:"Disabled select",message:"Message is ignored",disabled:!0,mdxType:"Select"},["Taran Burt","Jaimee Rios","Haniya Padilla"].map((function(e){return Object(i.b)(p.a,{key:e,value:e,mdxType:"Option"},e)}))),Object(i.b)(c.a,{label:"Disabled select",message:"Message is ignored",variant:"underlined",mdxType:"Select"},["Taran Burt","Jaimee Rios","Haniya Padilla"].map((function(e){return Object(i.b)(p.a,{key:e,value:e,mdxType:"Option"},e)})))))))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Select/readme.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-select-readme-mdx-0d3d44f73ac34fec73cf.js.map