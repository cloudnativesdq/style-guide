import React from "react";
export function Tooltip({label,children,side="top"}){
const [show,setShow]=React.useState(false);
const pos=side==="bottom"?{top:"calc(100% + 6px)"}:{bottom:"calc(100% + 6px)"};
return React.createElement("span",{onMouseEnter:()=>setShow(true),onMouseLeave:()=>setShow(false),style:{position:"relative",display:"inline-flex"}},children,
show&&React.createElement("span",{style:{position:"absolute",left:"50%",transform:"translateX(-50%)",...pos,zIndex:50,whiteSpace:"nowrap",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-default)",background:"var(--bg-surface)",color:"var(--text-primary)",padding:"6px 12px",fontSize:13,fontFamily:"var(--font-body)",boxShadow:"var(--shadow-md)"}},label));
}
