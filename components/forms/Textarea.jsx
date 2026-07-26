import React from "react";
export function Textarea({style,rows=4,...props}){
const [focus,setFocus]=React.useState(false);
return React.createElement("textarea",{...props,rows,onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),style:{display:"block",width:"100%",borderRadius:"var(--radius-sm)",border:`1px solid ${focus?"var(--accent)":"var(--border-default)"}`,background:"var(--bg-glass)",padding:"10px 12px",fontSize:14,fontFamily:"var(--font-body)",color:"var(--text-primary)",outline:"none",resize:"vertical",boxShadow:focus?"var(--glow-sm)":"none",transition:"all var(--duration-base) var(--ease-out-quart)",boxSizing:"border-box",...style}});
}
