"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[634],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(t),y=o,m=f["".concat(p,".").concat(y)]||f[y]||u[y]||a;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9166:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={},p="Fancyhooks",l={unversionedId:"fancyhooks",id:"fancyhooks",title:"Fancyhooks",description:"React Hooks and conditions in one place!",source:"@site/docs/fancyhooks.md",sourceDirName:".",slug:"/fancyhooks",permalink:"/fancyhooks/docs/fancyhooks",editUrl:"https://github.com/fancyreact/fancyhooks/website/docs/fancyhooks.md",tags:[],version:"current",frontMatter:{},sidebar:"main",next:{title:"Installation",permalink:"/fancyhooks/docs/installation"}},s={},u=[{value:"Know more",id:"know-more",level:2},{value:"License",id:"license",level:2}],f={toc:u};function y(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fancyhooks"},"Fancyhooks"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"React Hooks and conditions in one place!")),(0,a.kt)("p",null,"Fancy Hooks are set of hooks let you apply ",(0,a.kt)("strong",{parentName:"p"},"conditions")," to ",(0,a.kt)("strong",{parentName:"p"},"React Hooks"),"."),(0,a.kt)("h2",{id:"know-more"},"Know more"),(0,a.kt)("p",null,"I want to implement a search input. It gets data from API while user is typing.\nBut there is a restriction. To make a request to API there should be at least three characters into the input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// App.jsx\n\nexport function App() {\n  const [input, setInput] = React.useState('');\n\n  React.useEffect(\n    // (1) Callback\n    () => {\n      if (input.length > 2) {\n        // API call...\n      }\n    },\n    // (2) Dependency list\n    [input],\n  );\n\n  const handleChagen = (evt) => {\n    setInput(evt.target.value);\n  };\n\n  return <input onChange={handleChange} value={input} />;\n}\n")),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"useFancyEffect")," you can bring the conditions to a ",(0,a.kt)("inlineCode",{parentName:"p"},"helper")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// App.jsx\n\nimport { useFancyEffect } from 'fancyhooks';\n\nexport function App() {\n  const [input, setInput] = React.useState('');\n\n  useFancyEffect(\n    // (1) Callback\n    () => {\n      // API call...\n    },\n    // (2) Dependency list\n    [input],\n    // (3) Helper\n    ({ newDeps }) => newDeps[0].length > 3,\n  );\n\n  const handleChagen = (evt) => {\n    setInput(evt.target.value);\n  };\n\n  return <input onChange={handleChange} value={input} />;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"newDeps")," is current dependency list passing in an object to ",(0,a.kt)("inlineCode",{parentName:"p"},"helper")," by ",(0,a.kt)("inlineCode",{parentName:"p"},"useFancyEffect"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"callback")," functions will execute if the result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"helper")," function is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"MIT \xa9 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fancyreact/fancyhooks"},"FancyHooks")))}y.isMDXComponent=!0}}]);