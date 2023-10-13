"use strict";(self.webpackChunk_pleisto_flappy_docs=self.webpackChunk_pleisto_flappy_docs||[]).push([[222],{5318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9798:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7378),a=r(7140);const o={tabItem:"tabItem_wHwb"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:r},t)}},3930:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(5773),a=r(7378),o=r(7140),s=r(3457),i=r(3620),l=r(654),u=r(784),c=r(1819);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=r(6457);const y={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==i&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},9397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(5773),a=(r(7378),r(5318)),o=r(3930),s=r(9798);const i={},l="Code Interpreter",u={unversionedId:"code-interpreter",id:"code-interpreter",title:"Code Interpreter",description:"The Code Interpreter in Flappy serves as an equivalent replacement for ChatGPT Code Interpreter, enabling the language model to fulfill complex user requirements through Python code. What sets Flappy's Code Interpreter apart from other open-source implementations in the market is its sandboxed safety feature. This ensures that it meets the stringent security needs necessary for deployment in a production environment.",source:"@site/docs/code-interpreter.mdx",sourceDirName:".",slug:"/code-interpreter",permalink:"/zh-Hans/docs/code-interpreter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code-interpreter.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Invoke Function",permalink:"/zh-Hans/docs/invoke-function"},next:{title:"Examples",permalink:"/zh-Hans/docs/examples"}},c={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Security-First Design",id:"security-first-design",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-interpreter"},"Code Interpreter"),(0,a.kt)("p",null,"The Code Interpreter in Flappy serves as an equivalent replacement for ",(0,a.kt)("a",{parentName:"p",href:"https://openai.com/blog/chatgpt-plugins#code-interpreter"},"ChatGPT Code Interpreter"),", enabling the language model to fulfill complex user requirements through Python code. What sets Flappy's Code Interpreter apart from other open-source implementations in the market is its sandboxed safety feature. This ensures that it meets the stringent security needs necessary for deployment in a production environment."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Flappy's Code Interpreter is built with Rust, featuring a WebAssembly runtime environment that complies with the ",(0,a.kt)("a",{parentName:"p",href:"https://wasix.org/docs/api-reference"},"WASIX specifications"),". Unlike standard WebAssembly runtimes, this environment hosts a Python interpreter and supports nearly all POSIX interfaces, including socket, net, and filesystem IO operations. This means that even though the Python interpreter operates within a wasm sandbox, all functionalities remain fully intact."),(0,a.kt)("p",null,"The current version of the Python interpreter used in this environment is ",(0,a.kt)("inlineCode",{parentName:"p"},"Python 3.12"),". All standard libraries (stdlib) work as expected. We are also in the process of adding support for the pip package manager, which will allow for further extension of capabilities."),(0,a.kt)("h2",{id:"security-first-design"},"Security-First Design"),(0,a.kt)("p",null,'Our core design principle is "safety first". By default, access to the external network is off to ensure a secure environment. Similarly, environment variables are sandbox-isolated. However, if required, these settings can be overridden using custom configurations.'),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"nodejs",label:"NodeJS (TypeScript)",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { env } from 'node:process'\nimport { createFlappyAgent, ChatGPT } from '@pleisto/node-flappy'\nimport OpenAI from 'openai'\n\nconst gpt35 = new ChatGPT(\n  new OpenAI({\n    apiKey: process.env.OPENAI_API_KEY!,\n    baseURL: process.env.OPENAI_API_BASE!\n  }),\n  'gpt-3.5-turbo'\n)\n\nconst agent = createFlappyAgent({\n  llm: gpt35,\n  functions: [],\n  codeInterpreter: {\n    enableNetwork: true,\n    env: env as Record<string, string>\n  }\n})\n\nvoid agent.callCodeInterpreter(\n  'There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs  and 150 heads in the barn?'\n)\n"))),(0,a.kt)(s.Z,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},"Coming soon"),(0,a.kt)(s.Z,{value:"kotlin",label:"Kotlin",default:!0,mdxType:"TabItem"},"Coming soon"),(0,a.kt)(s.Z,{value:"csharp",label:"C#",default:!0,mdxType:"TabItem"},"Coming soon")))}f.isMDXComponent=!0}}]);