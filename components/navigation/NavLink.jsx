import React from "react";
export function NavLink({href="#",children,active=false,...props}){
const [hover,setHover]=React.useState(false);
return React.createElement("a",{href,...props,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),style:{position:"relative",fontSize:14,fontWeight:700,color:hover||active?"var(--accent)":"var(--text-muted)",textDecoration:"none",fontFamily:"var(--font-body)",paddingBottom:4,transition:"color var(--duration-base) var(--ease-out-quart)"}},children,
React.createElement("span",{style:{position:"absolute",bottom:0,left:0,height:2,width:hover||active?"100%":0,background:"var(--accent)",transition:"width var(--duration-base) var(--ease-out-quart)"}}));
}
