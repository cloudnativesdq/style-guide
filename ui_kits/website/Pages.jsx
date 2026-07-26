const {Button,Badge,EventCard,OrganizerCard,Input,Label,Textarea,Select,Toast,Dialog,SocialIconButton} = window.CloudNativeSantoDomingoDesignSystem_e36e6c;
const PICON = n => `../../assets/icons/${n}.svg`;
function PIcon({name,size=18,style}){return <img src={PICON(name)} width={size} height={size} style={{filter:"invert(1)",opacity:.9,...style}} alt=""/>;}

function PageHeader({title,subtitle}){
return <div style={{textAlign:"center",padding:"72px 24px 40px"}}>
<h1 style={{fontFamily:"var(--font-heading)",fontWeight:900,fontSize:"clamp(2rem,4vw,3.25rem)",letterSpacing:"-0.02em",color:"var(--accent)",margin:"0 0 14px"}}>{title}</h1>
<p style={{color:"var(--text-muted)",fontSize:17,maxWidth:560,margin:"0 auto",lineHeight:1.6}}>{subtitle}</p>
</div>;}

const ALL_EVENTS=[
{title:"Seguridad en la Era de la IA: Blindando la Infraestructura Cloud",type:"Meetup",date:"29 de julio, 2026 · 6:30 PM",location:"Alterna Academy, Santo Domingo",spotsRemaining:8},
{title:"Connections Lab: Networking del Ecosistema Tech",type:"Meetup",date:"27 de julio, 2026 · 6:00 PM",location:"Santo Domingo, RD",soldOut:true},
{title:"Observabilidad con OpenTelemetry",type:"Online",date:"3 de octubre, 2026 · 7:00 PM",location:"Virtual"},
{title:"Junte Cloud Native: Edición Fin de Año",type:"Meetup",date:"18 de diciembre, 2025 · 6:00 PM",location:"Santo Domingo, RD",isPast:true},
{title:"Kubernetes pa' no morir en el intento: Guía práctica",type:"Meetup",date:"19 de noviembre, 2025 · 6:00 PM",location:"INTEC, Santo Domingo",isPast:true},
{title:"Introducción a Red Hat OpenShift",type:"Online",date:"21 de octubre, 2025 · 7:00 PM",location:"Virtual",isPast:true},
];

function EventsPage({lang}){
const [filter,setFilter]=React.useState("Todos");
const [tab,setTab]=React.useState("upcoming");
const [modal,setModal]=React.useState(null);
const list=ALL_EVENTS.filter(e=>(tab==="upcoming"?!e.isPast:e.isPast)&&(filter==="Todos"||e.type===filter));
return <div style={{position:"relative",maxWidth:1100,margin:"0 auto",padding:"0 24px 96px"}}>
<PageHeader title={lang==="es"?"Eventos":"Events"} subtitle={lang==="es"?"Revive nuestros encuentros y no te pierdas los próximos.":"Relive our meetups and don't miss the next ones."}/>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,marginBottom:28,flexWrap:"wrap"}}>
<div style={{display:"flex",gap:8}}>
{[["upcoming",lang==="es"?"Próximos":"Upcoming"],["past",lang==="es"?"Pasados":"Past"]].map(([k,label])=>
<button key={k} onClick={()=>setTab(k)} style={{padding:"8px 18px",borderRadius:"var(--radius-full)",cursor:"pointer",fontFamily:"var(--font-heading)",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",background:tab===k?"var(--accent-soft)":"transparent",color:tab===k?"var(--accent)":"var(--text-muted)",border:`1px solid ${tab===k?"var(--border-accent)":"var(--border-subtle)"}`}}>{label}</button>)}
</div>
<div style={{width:200}}><Select options={["Todos","Meetup","Online","Conference"]} value={filter} onChange={e=>setFilter(e.target.value)}/></div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:20}}>
{list.map((e,i)=><div key={i} onClick={ev=>{ev.preventDefault();setModal(e);}}><EventCard {...e} href="#"/></div>)}
</div>
{list.length===0&&<div style={{textAlign:"center",color:"var(--text-muted)",padding:"48px 0"}}>{lang==="es"?"No hay eventos que coincidan.":"No matching events."}</div>}
<Dialog open={!!modal} onClose={()=>setModal(null)} title={modal&&modal.title} description={modal&&`${modal.date} · ${modal.location||""}`} footer={<Button size="sm">{lang==="es"?"Ver Evento":"View Event"}</Button>}/>
</div>;}

const TEAM=[
{name:"Ana Ramírez",role:"Organizer",company:"Acme Cloud"},
{name:"Luis Peña",role:"Co-organizer",company:"Globant"},
{name:"Carla Núñez",role:"Organizer",company:"Claro RD"},
{name:"Miguel Ozuna",role:"Speaker Lead",company:"Freelance"},
{name:"Diana Feliz",role:"Community Manager",company:"Banreservas"},
{name:"Gerson Rosario",role:"Speaker",company:"América Móvil"},
{name:"Molly Devers Mateo",role:"Partner",company:"TechTalkCafé"},
{name:"Stacy Balbi",role:"Partner",company:"Hard Devs"},
];
function TeamPage({lang}){
return <div style={{maxWidth:1100,margin:"0 auto",padding:"0 24px 96px"}}>
<PageHeader title={lang==="es"?"Nuestro Equipo":"Our Team"} subtitle={lang==="es"?"El equipo que impulsa el ecosistema Cloud Native en Santo Domingo.":"The team driving the Cloud Native ecosystem in Santo Domingo."}/>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:20}}>{TEAM.map((o,i)=><OrganizerCard key={i} {...o}/>)}</div>
</div>;}

function GalleryPage({lang}){
const [active,setActive]=React.useState(0);
const shots=[0,1,2,3,4,5,6,7];
return <div style={{maxWidth:1100,margin:"0 auto",padding:"0 24px 96px"}}>
<PageHeader title={lang==="es"?"Galería":"Gallery"} subtitle={lang==="es"?"Fotos de nuestros encuentros y cómo ha crecido la comunidad.":"Photos from our meetups and how the community has grown."}/>
<div style={{position:"relative",borderRadius:"var(--radius-xl)",overflow:"hidden",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-2xl)",aspectRatio:"16/7",backgroundImage:"url(../../assets/hero-banner.jpg)",backgroundSize:"cover",backgroundPosition:`${active*12}% center`,marginBottom:16}}>
<div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(9,13,22,.75), transparent 55%)"}}></div>
<div style={{position:"absolute",left:24,bottom:20}}>
<Badge variant="accentSoft">{lang==="es"?`Foto ${active+1} de ${shots.length}`:`Photo ${active+1} of ${shots.length}`}</Badge>
</div>
<button onClick={()=>setActive((active-1+shots.length)%shots.length)} aria-label="Anterior" style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",width:44,height:44,borderRadius:"var(--radius-full)",background:"var(--bg-glass-dark)",border:"1px solid var(--border-subtle)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><PIcon name="arrow-right" size={18} style={{transform:"rotate(180deg)"}}/></button>
<button onClick={()=>setActive((active+1)%shots.length)} aria-label="Siguiente" style={{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",width:44,height:44,borderRadius:"var(--radius-full)",background:"var(--bg-glass-dark)",border:"1px solid var(--border-subtle)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><PIcon name="arrow-right" size={18}/></button>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(8,1fr)",gap:10}}>
{shots.map(i=><button key={i} onClick={()=>setActive(i)} aria-label={`Foto ${i+1}`} style={{aspectRatio:"1",borderRadius:"var(--radius-sm)",cursor:"pointer",padding:0,overflow:"hidden",border:`1px solid ${active===i?"var(--accent)":"var(--border-subtle)"}`,backgroundImage:"url(../../assets/hero-banner.jpg)",backgroundSize:"cover",backgroundPosition:`${i*12}% center`,opacity:active===i?1:.55}}></button>)}
</div>
</div>;}

function ContactPage({lang}){
const [sent,setSent]=React.useState(false);
return <div style={{maxWidth:760,margin:"0 auto",padding:"0 24px 96px"}}>
<PageHeader title={lang==="es"?"Contáctanos":"Contact Us"} subtitle={lang==="es"?"¿Tienes alguna duda o quieres colaborar con nosotros? ¡Escríbenos!":"Do you have any questions or want to collaborate with us? Write to us!"}/>
<div style={{padding:32,borderRadius:"var(--radius-xl)",background:"var(--bg-glass)",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-2xl)",display:"grid",gap:18}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
<div style={{display:"flex",flexDirection:"column",gap:6}}><Label htmlFor="cn">{lang==="es"?"Nombre":"Name"}</Label><Input id="cn" placeholder={lang==="es"?"Tu nombre":"Your name"}/></div>
<div style={{display:"flex",flexDirection:"column",gap:6}}><Label htmlFor="ce">{lang==="es"?"Correo Electrónico":"Email"}</Label><Input id="ce" type="email" placeholder="tu@correo.com"/></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:6}}><Label htmlFor="cm">{lang==="es"?"Mensaje":"Message"}</Label><Textarea id="cm" rows={5} placeholder={lang==="es"?"Cuéntanos en qué podemos colaborar":"Tell us how we can collaborate"}/></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,flexWrap:"wrap"}}>
<div style={{display:"flex",gap:10}}>
<SocialIconButton label="Instagram" icon={<PIcon name="instagram" size={20}/>}/>
<SocialIconButton label="LinkedIn" icon={<PIcon name="linkedin" size={20}/>}/>
<SocialIconButton label="Email" icon={<PIcon name="mail" size={20}/>}/>
</div>
<Button onClick={()=>setSent(true)}>{lang==="es"?"Enviar Mensaje":"Send Message"}</Button>
</div>
</div>
{sent&&<div style={{marginTop:20}}><Toast tone="success" title={lang==="es"?"¡Mensaje enviado con éxito!":"Message sent successfully!"} onClose={()=>setSent(false)}/></div>}
</div>;}

Object.assign(window,{EventsPage,TeamPage,GalleryPage,ContactPage,PageHeader});
