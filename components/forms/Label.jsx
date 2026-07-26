import React from "react";
export function Label({children,style,...props}){
return React.createElement("label",{...props,style:{fontSize:14,fontWeight:500,lineHeight:1,color:"var(--text-primary)",fontFamily:"var(--font-body)",display:"block",...style}},children);
}
