import React from "react";
export function Select({options=[],value,onChange,style,...props}){
return React.createElement("select",{...props,value,onChange,style:{display:"flex",height:40,width:"100%",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-default)",background:"var(--bg-glass)",padding:"8px 12px",fontSize:14,fontFamily:"var(--font-body)",color:"var(--text-primary)",outline:"none",appearance:"none",cursor:"pointer",boxSizing:"border-box",...style}},
options.map((o,i)=>React.createElement("option",{key:i,value:typeof o==="string"?o:o.value,style:{background:"var(--bg-card)"}},typeof o==="string"?o:o.label)));
}
