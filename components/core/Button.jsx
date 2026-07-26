import React from "react";
const VARIANTS={default:{background:"var(--accent)",color:"#04202b"},secondary:{background:"var(--bg-glass)",color:"var(--text-primary)",border:"1px solid var(--border-default)"},outline:{background:"transparent",color:"var(--text-primary)",border:"1px solid var(--border-default)"},ghost:{background:"transparent",color:"var(--text-primary)"},destructive:{background:"var(--status-danger)",color:"#fff"},link:{background:"transparent",color:"var(--accent)",textDecoration:"underline",textUnderlineOffset:"4px"}};
const SIZES={sm:{height:36,padding:"0 14px",fontSize:13},default:{height:40,padding:"0 20px",fontSize:14},lg:{height:48,padding:"0 32px",fontSize:15},icon:{height:40,width:40,padding:0}};
export function Button({variant="default",size="default",children,style,...props}){
const v=VARIANTS[variant]||VARIANTS.default;const s=SIZES[size]||SIZES.default;
const [hover,setHover]=React.useState(false);
const glow=variant==="default"?(hover?"var(--glow-lg)":"var(--glow-md)"):"none";
return React.createElement("button",{...props,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,borderRadius:"var(--radius-md)",fontFamily:"var(--font-heading)",fontWeight:700,letterSpacing:"0.02em",textTransform:variant==="link"?"none":"uppercase",cursor:"pointer",transition:"all var(--duration-slow) var(--ease-out-quart)",transform:hover&&variant==="default"?"translateY(-2px)":"none",boxShadow:glow,...v,...s,...style}},children);
}
