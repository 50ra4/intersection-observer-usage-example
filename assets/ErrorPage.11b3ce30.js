import{j as u,a as o,L as a,s as e}from"./index.a8534021.js";import{P as s}from"./PageTemplate.1749f30b.js";const l=t=>{switch(t){case 404:return{title:"\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",detail:"\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002URL\u3092\u304A\u78BA\u304B\u3081\u304F\u3060\u3055\u3044\u3002",buttonType:"TopPage"};default:return{title:"\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",detail:"\u4E0D\u660E\u306A\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002",buttonType:"TopPage"}}};function A({statusCode:t}){const{title:n,detail:r,buttonType:i}=l(t);return u(s,{children:u(c,{children:o(p,{children:[u("h2",{children:n}),u("p",{children:r}),i==="TopPage"&&u(a,{to:"/",children:"TopPage\u306B\u623B\u308B"})]})})})}const c=e.div`
  display: flex;
  justify-content: center;
`,p=e.section`
  text-align: center;

  & > h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
  }

  & > p {
    margin: 16px 0;
  }
`;export{A as default};
