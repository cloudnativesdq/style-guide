import React from "react";
export function StatPill({icon,value,label}){
return React.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"16px 32px",borderRadius:"var(--radius-xl)",background:"var(--bg-glass)",border:"1px solid var(--border-default)",boxShadow:"var(--shadow-lg)",minWidth:130}},
React.createElement("div",{style:{display:"flex",alignItems:"center",gap:10}},icon,React.createElement("div",{style:{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:26,color:"var(--text-primary)"}},value)),
React.createElement("span",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"var(--tracking-wide)",color:"var(--text-muted)",fontFamily:"var(--font-heading)"}},label));
}
