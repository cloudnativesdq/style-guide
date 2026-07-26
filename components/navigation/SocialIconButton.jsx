import React from "react";
export function SocialIconButton({icon,href="#",label}){
return React.createElement("a",{href,"aria-label":label,style:{width:48,height:48,borderRadius:"var(--radius-lg)",background:"var(--bg-glass-dark)",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-muted)",transition:"all var(--duration-slow) var(--ease-out-quart)"}},icon);
}
