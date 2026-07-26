import React from "react";
export function Card({style,children,...props}){
return React.createElement("div",{...props,style:{borderRadius:"var(--radius-lg)",background:"var(--bg-glass)",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-2xl)",...style}},children);
}
export function CardHeader({style,children,...props}){return React.createElement("div",{...props,style:{display:"flex",flexDirection:"column",gap:6,padding:24,...style}},children);}
export function CardTitle({style,children,...props}){return React.createElement("h3",{...props,style:{fontFamily:"var(--font-heading)",fontSize:22,fontWeight:700,color:"var(--text-primary)",lineHeight:1.1,margin:0,...style}},children);}
export function CardDescription({style,children,...props}){return React.createElement("p",{...props,style:{fontSize:14,color:"var(--text-muted)",margin:0,...style}},children);}
export function CardContent({style,children,...props}){return React.createElement("div",{...props,style:{padding:"0 24px 24px",...style}},children);}
export function CardFooter({style,children,...props}){return React.createElement("div",{...props,style:{display:"flex",alignItems:"center",padding:"0 24px 24px",...style}},children);}
