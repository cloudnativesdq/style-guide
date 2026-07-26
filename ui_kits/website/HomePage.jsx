const {Button,Badge,NavLink,SocialIconButton,EventCard,OrganizerCard,StatPill} = window.CloudNativeSantoDomingoDesignSystem_e36e6c;
const ICON = n => `../../assets/icons/${n}.svg`;
const T = {
es:{home:"Inicio",events:"Eventos",team:"Equipo",gallery:"Galería",contact:"Contacto",badge:"Latin America · CNCF Community Group",
h1a:"Cloud Native",h1b:"Santo Domingo",sub:"Formando a la próxima generación de ingenieros en República Dominicana con tecnologías open source y principios Cloud Native.",
join:"Únete a la Comunidad",explore:"Explorar Eventos",members:"miembros",eventsLabel:"eventos realizados",
upcoming:"Próximos Eventos",upcomingSub:"Los próximos encuentros de la comunidad.",seeAll:"Ver todos los eventos",
team_t:"Nuestro Equipo",team_sub:"El equipo que impulsa el ecosistema Cloud Native en Santo Domingo.",
presentations:"Presentaciones",cfp:"Postular Charla",loc:"República Dominicana"},
en:{home:"Home",events:"Events",team:"Team",gallery:"Gallery",contact:"Contact",badge:"Latin America · CNCF Community Group",
h1a:"Cloud Native",h1b:"Santo Domingo",sub:"Training the next generation of engineers in the Dominican Republic through open source technologies and Cloud Native principles.",
join:"Join the Community",explore:"Explore Events",members:"members",eventsLabel:"events hosted",
upcoming:"Upcoming Events",upcomingSub:"The community's next meetups.",seeAll:"See all events",
team_t:"Our Team",team_sub:"The team driving the Cloud Native ecosystem in Santo Domingo.",
presentations:"Slide Decks",cfp:"Call for Speakers",loc:"Dominican Republic"}};

const EVENTS=[
{title:"Kubernetes 101: Primeros Pasos",type:"Meetup",date:"12 de septiembre, 2026 · 6:00 PM",location:"Santo Domingo, RD",spotsRemaining:6},
{title:"Cloud Native Day RD 2026",type:"Conference",date:"20 de noviembre, 2026",location:"Santo Domingo, RD",soldOut:true},
{title:"Observabilidad con OpenTelemetry",type:"Online",date:"3 de octubre, 2026 · 7:00 PM",location:"Virtual"},
];
const ORGANIZERS=[
{name:"Ana Ramírez",role:"Organizer",company:"Acme Cloud"},
{name:"Luis Peña",role:"Co-organizer",company:"Globant"},
{name:"Carla Núñez",role:"Organizer",company:"Claro RD"},
{name:"Miguel Ozuna",role:"Speaker Lead",company:"Freelance"},
{name:"Diana Feliz",role:"Community Manager",company:"Banreservas"},
];

function Icon({name,size=18,style}){return <img src={ICON(name)} width={size} height={size} style={{filter:"invert(1)",opacity:.9,...style}} alt=""/>;}

function Navbar({lang,setLang,page,setPage}){
const [open,setOpen]=React.useState(false);
const t=T[lang];
const links=[["home",t.home],["events",t.events],["team",t.team],["gallery",t.gallery],["contact",t.contact]];
return <nav style={{position:"sticky",top:0,zIndex:50,background:"rgba(9,13,22,.85)",backdropFilter:"blur(20px)",borderBottom:"1px solid var(--border-subtle)",padding:"14px 32px"}}>
<div style={{maxWidth:1320,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:18,color:"var(--text-primary)",display:"flex",gap:6}}><span style={{color:"var(--accent)"}}>Cloud Native</span><span>SDQ</span></div>
<div style={{display:"flex",alignItems:"center",gap:28}}>
{links.map(([k,label])=><NavLink key={k} href="#" active={page===k} onClick={(e)=>{e.preventDefault();setPage(k);}}>{label}</NavLink>)}
<button onClick={()=>setLang(lang==="es"?"en":"es")} style={{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:"var(--radius-lg)",background:"var(--bg-glass)",border:"1px solid var(--border-default)",color:"var(--text-primary)",fontSize:10,fontWeight:900,letterSpacing:"var(--tracking-wide)",textTransform:"uppercase",cursor:"pointer"}}><Icon name="globe" size={14}/>{lang==="es"?"EN":"ES"}</button>
</div>
</div>
</nav>;}

function Hero({lang}){
const t=T[lang];
const [count,setCount]=React.useState(0);
React.useEffect(()=>{let f;const start=performance.now();const dur=1200;const step=now=>{const p=Math.min((now-start)/dur,1);setCount(Math.floor((1-Math.pow(1-p,4))*248));if(p<1)f=requestAnimationFrame(step);};f=requestAnimationFrame(step);return()=>cancelAnimationFrame(f);},[]);
return <section style={{position:"relative",minHeight:620,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",borderBottom:"1px solid var(--border-subtle)",backgroundImage:"linear-gradient(180deg, rgba(9,13,22,.2), rgba(9,13,22,.9)), url(../../assets/hero-banner.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}>
<div style={{position:"relative",zIndex:1,maxWidth:900,margin:"0 auto",padding:"80px 24px",textAlign:"center"}}>
<div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 16px",borderRadius:"var(--radius-full)",background:"rgba(0,0,0,.4)",border:"1px solid var(--border-accent)",fontFamily:"var(--font-heading)",fontSize:11,fontWeight:700,letterSpacing:"var(--tracking-widest)",textTransform:"uppercase",color:"var(--accent)",marginBottom:28}}><Icon name="sparkles" size={12} style={{filter:"none"}}/>{t.badge}</div>
<h1 style={{fontFamily:"var(--font-heading)",fontWeight:900,fontSize:"clamp(2.5rem,6vw,5.5rem)",lineHeight:0.95,letterSpacing:"var(--tracking-tight)",color:"var(--text-primary)",margin:"0 0 24px"}}><span style={{opacity:.9,display:"block"}}>{t.h1a}</span><span style={{color:"var(--accent)",display:"block"}}>{t.h1b}</span></h1>
<p style={{fontSize:18,color:"var(--text-muted)",maxWidth:600,margin:"0 auto 40px",lineHeight:1.6,fontWeight:500}}>{t.sub}</p>
<div style={{display:"flex",justifyContent:"center",gap:20,marginBottom:44,flexWrap:"wrap"}}>
<StatPill icon={<Icon name="users" size={16}/>} value={`+${count}`} label={t.members}/>
<StatPill icon={<Icon name="calendar-check" size={16}/>} value="+18" label={t.eventsLabel}/>
<StatPill icon={<Icon name="map-pin" size={16}/>} value="Santo Domingo" label={t.loc}/>
</div>
<div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
<Button size="lg">{t.join}<Icon name="arrow-right" size={16} style={{filter:"none"}}/></Button>
<Button size="lg" variant="secondary">{t.explore}</Button>
</div>
</div>
</section>;}

function EventsPreview({lang}){
const t=T[lang];
return <section style={{padding:"88px 24px"}}><div style={{maxWidth:1320,margin:"0 auto"}}>
<div style={{textAlign:"center",marginBottom:48}}>
<h2 style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"clamp(1.75rem,3vw,2.75rem)",color:"var(--accent)",margin:"0 0 12px"}}>{t.upcoming}</h2>
<p style={{color:"var(--text-muted)",fontSize:17}}>{t.upcomingSub}</p>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24,marginBottom:40}}>
{EVENTS.map((e,i)=><EventCard key={i} {...e} href="#"/>)}
</div>
<div style={{display:"flex",justifyContent:"center"}}><Button variant="secondary">{t.seeAll}<Icon name="arrow-right" size={14}/></Button></div>
</div></section>;}

function Team({lang}){
const t=T[lang];
return <section style={{padding:"88px 24px"}}><div style={{maxWidth:1320,margin:"0 auto"}}>
<div style={{textAlign:"center",marginBottom:48}}>
<h2 style={{fontFamily:"var(--font-heading)",fontWeight:700,fontSize:"clamp(1.75rem,3vw,2.75rem)",color:"var(--accent)",margin:"0 0 12px"}}>{t.team_t}</h2>
<p style={{color:"var(--text-muted)",fontSize:17}}>{t.team_sub}</p>
</div>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:20}}>
{ORGANIZERS.map((o,i)=><OrganizerCard key={i} {...o}/>)}
</div>
</div></section>;}

function Footer({lang}){
const t=T[lang];
const socials=[["instagram","Instagram"],["linkedin","LinkedIn"],["github","GitHub"],["youtube","YouTube"],["mail","Email"]];
return <footer style={{padding:"80px 24px",borderTop:"1px solid var(--border-subtle)",textAlign:"center"}}>
<div style={{display:"flex",justifyContent:"center",gap:12,marginBottom:40,flexWrap:"wrap"}}>
{socials.map(([icon,label])=><SocialIconButton key={icon} label={label} icon={<Icon name={icon} size={20}/>}/>)}
</div>
<div style={{display:"flex",justifyContent:"center",gap:24,flexWrap:"wrap",marginBottom:24,fontSize:13,fontWeight:700,color:"var(--text-muted)"}}>
<span style={{display:"flex",alignItems:"center",gap:6}}><Icon name="presentation" size={14}/>{t.presentations}</span>
<span style={{display:"flex",alignItems:"center",gap:6}}><Icon name="mic-vocal" size={14}/>{t.cfp}</span>
</div>
<div style={{fontSize:10,letterSpacing:"var(--tracking-widest)",textTransform:"uppercase",color:"var(--text-muted)",opacity:.5,fontWeight:700}}>© 2026 Cloud Native SDQ · Santo Domingo, {t.loc}</div>
</footer>;}

function HomePage(){
const [lang,setLang]=React.useState("es");
const [page,setPage]=React.useState("home");
const Page={events:window.EventsPage,team:window.TeamPage,gallery:window.GalleryPage,contact:window.ContactPage}[page];
return <div style={{minHeight:"100vh",fontFamily:"var(--font-body)",color:"var(--text-primary)",background:"var(--bg-page)",backgroundImage:"radial-gradient(at 0% 0%, hsla(199,89%,48%,.08) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(199,89%,48%,.08) 0, transparent 50%)"}}>
<Navbar lang={lang} setLang={setLang} page={page} setPage={setPage}/>
{Page ? <Page lang={lang}/> : <React.Fragment>
<Hero lang={lang}/>
<EventsPreview lang={lang}/>
<Team lang={lang}/>
</React.Fragment>}
<Footer lang={lang}/>
</div>;}
window.HomePage=HomePage;
