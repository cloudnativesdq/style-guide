import React from "react";
export function Dialog({open=true,title,description,children,footer,onClose}){
if(!open) return null;
return React.createElement("div",{style:{position:"absolute",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.8)"}},
React.createElement("div",{style:{position:"relative",width:"100%",maxWidth:512,display:"grid",gap:16,padding:24,borderRadius:"var(--radius-lg)",background:"var(--bg-card)",border:"1px solid var(--border-default)",boxShadow:"var(--shadow-2xl)",fontFamily:"var(--font-body)"}},
React.createElement("button",{onClick:onClose,"aria-label":"Close",style:{position:"absolute",right:16,top:16,background:"none",border:"none",color:"var(--text-muted)",fontSize:18,cursor:"pointer",lineHeight:1}},"×"),
title&&React.createElement("div",{style:{fontFamily:"var(--font-heading)",fontSize:18,fontWeight:600,letterSpacing:"var(--tracking-tight)",color:"var(--text-primary)"}},title),
description&&React.createElement("div",{style:{fontSize:14,color:"var(--text-muted)"}},description),
children,
footer&&React.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:8}},footer)));
}
