import React from "react";
export function Switch({checked=false,onChange,label}){
const [on,setOn]=React.useState(checked);
const toggle=()=>{const v=!on;setOn(v);onChange&&onChange(v);};
const el=React.createElement("button",{onClick:toggle,role:"switch","aria-checked":on,style:{position:"relative",display:"inline-flex",alignItems:"center",height:24,width:44,flexShrink:0,borderRadius:"var(--radius-full)",border:"2px solid transparent",background:on?"var(--accent)":"var(--border-default)",cursor:"pointer",padding:0,transition:"background var(--duration-base) var(--ease-out-quart)"}},
React.createElement("span",{style:{display:"block",height:20,width:20,borderRadius:"var(--radius-full)",background:"var(--bg-page)",boxShadow:"var(--shadow-md)",transform:on?"translateX(20px)":"translateX(0)",transition:"transform var(--duration-base) var(--ease-out-quart)"}}));
if(!label) return el;
return React.createElement("label",{style:{display:"inline-flex",alignItems:"center",gap:10,fontSize:14,color:"var(--text-primary)",fontFamily:"var(--font-body)",cursor:"pointer"}},el,label);
}
