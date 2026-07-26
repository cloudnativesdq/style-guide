import React from "react";
export function Input({style,...props}){
const [focus,setFocus]=React.useState(false);
return React.createElement("input",{...props,onFocus:e=>{setFocus(true);props.onFocus&&props.onFocus(e);},onBlur:e=>{setFocus(false);props.onBlur&&props.onBlur(e);},style:{display:"flex",height:40,width:"100%",borderRadius:"var(--radius-sm)",border:`1px solid ${focus?"var(--accent)":"var(--border-default)"}`,background:"var(--bg-glass)",padding:"8px 12px",fontSize:14,fontFamily:"var(--font-body)",color:"var(--text-primary)",outline:"none",boxShadow:focus?"var(--glow-sm)":"none",transition:"all var(--duration-base) var(--ease-out-quart)",boxSizing:"border-box",...style}});
}
