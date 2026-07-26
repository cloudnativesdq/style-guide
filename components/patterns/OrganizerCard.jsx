import React from "react";
export function OrganizerCard({name,role,company,image}){
return React.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:24,borderRadius:"var(--radius-xl)",background:"var(--bg-glass)",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-lg)",width:180}},
React.createElement("div",{style:{width:96,height:96,borderRadius:"var(--radius-lg)",overflow:"hidden",border:"2px solid var(--border-default)",marginBottom:20,transform:"rotate(3deg)",backgroundImage:image?`url(${image})`:undefined,backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"var(--bg-card)"}}),
React.createElement("div",{style:{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:14,color:"var(--text-primary)"}},name),
React.createElement("div",{style:{width:32,height:1,background:"var(--border-accent)",margin:"8px 0"}}),
React.createElement("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"var(--tracking-wide)",color:"var(--accent)"}},role),
React.createElement("div",{style:{fontSize:10,color:"var(--text-muted)"}},company));
}
