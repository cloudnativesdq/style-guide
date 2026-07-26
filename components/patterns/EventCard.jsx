import React from "react";
export function EventCard({title,type,date,location,image,soldOut,spotsRemaining,compact=false,href="#"}){
const showSpots=!soldOut&&spotsRemaining!==undefined&&spotsRemaining<10;
return React.createElement("a",{href,style:{display:"flex",flexDirection:compact?"row":"column",gap:16,padding:4,borderRadius:"var(--radius-xl)",background:"var(--bg-glass)",border:"1px solid var(--border-subtle)",textDecoration:"none",boxShadow:"var(--shadow-2xl)",overflow:"hidden",transition:"all var(--duration-slow) var(--ease-out-quart)"}},
React.createElement("div",{style:{position:"relative",flexShrink:0,borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--bg-card)",width:compact?112:"100%",height:compact?112:180,backgroundImage:image?`url(${image})`:undefined,backgroundSize:"cover",backgroundPosition:"center"}}),
React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:compact?"8px 8px 8px 0":"0 12px 12px",flex:1,minWidth:0}},
React.createElement("span",{style:{display:"inline-flex",alignSelf:"flex-start",gap:6,padding:"2px 10px",borderRadius:"var(--radius-full)",background:"var(--accent-soft)",color:"var(--accent)",fontFamily:"var(--font-heading)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"var(--tracking-wide)",border:"1px solid var(--border-accent)"}},type),
React.createElement("div",{style:{fontFamily:"var(--font-heading)",fontWeight:700,color:"var(--text-primary)",fontSize:compact?16:20,lineHeight:1.2}},title),
React.createElement("div",{style:{fontSize:13,color:"var(--text-muted)"}},date),
!compact&&location&&React.createElement("div",{style:{fontSize:13,color:"var(--text-muted)"}},location),
(soldOut||showSpots)&&React.createElement("span",{style:{alignSelf:"flex-start",padding:"2px 10px",borderRadius:"var(--radius-full)",fontSize:10,fontWeight:700,textTransform:"uppercase",fontFamily:"var(--font-heading)",background:soldOut?"rgba(239,74,74,.15)":"rgba(242,169,60,.15)",color:soldOut?"var(--status-danger)":"var(--status-warning)"}},soldOut?"Sold Out":`${spotsRemaining} lugares`)
));
}
