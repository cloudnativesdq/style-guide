import React from "react";
const TONES={default:{border:"var(--border-default)",accent:"var(--accent)"},success:{border:"var(--border-accent)",accent:"var(--accent)"},error:{border:"rgba(239,74,74,.35)",accent:"var(--status-danger)"}};
export function Toast({title,description,tone="default",onClose}){
const t=TONES[tone]||TONES.default;
return React.createElement("div",{style:{display:"flex",alignItems:"flex-start",gap:12,width:"100%",maxWidth:380,padding:16,borderRadius:"var(--radius-md)",background:"var(--bg-surface)",border:`1px solid ${t.border}`,boxShadow:"var(--shadow-lg)",fontFamily:"var(--font-body)"}},
React.createElement("div",{style:{width:3,alignSelf:"stretch",borderRadius:2,background:t.accent,flexShrink:0}}),
React.createElement("div",{style:{flex:1,minWidth:0}},
React.createElement("div",{style:{fontFamily:"var(--font-heading)",fontWeight:600,fontSize:14,color:"var(--text-primary)"}},title),
description&&React.createElement("div",{style:{fontSize:13,color:"var(--text-muted)",marginTop:4}},description)),
React.createElement("button",{onClick:onClose,"aria-label":"Close",style:{background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer",fontSize:16,lineHeight:1}},"×"));
}
