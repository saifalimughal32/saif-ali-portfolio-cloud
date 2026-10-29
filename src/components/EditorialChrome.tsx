"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export function EditorialChrome() {
 const [open,setOpen]=useState(false);const pathname=usePathname();
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",close);return()=>window.removeEventListener("keydown",close)},[]);
 const links=[["/","Home"],["/case-studies","Selected Work"],["/about","About"],["/#skills","Services"],["/blog","Journal"],["/book","Contact"]];
 return <><header className="editorial-header"><Link href="/" className="editorial-wordmark" aria-label="Saif Ali home">Saif Ali<span aria-hidden="true">✳</span></Link><Link href="/book" className="editorial-button">Contact Us ↗</Link></header><div className="editorial-dock"><Link href="/" aria-label="Home" className="editorial-dock-symbol">✳</Link><span className="editorial-dock-label">DESIGN · CREATIVE · GROWTH</span><button aria-expanded={open} aria-controls="editorial-navigation" onClick={()=>setOpen(!open)}>{open?"Close ×":"Menu ☰"}</button></div>{open&&<nav id="editorial-navigation" aria-label="Main navigation" className="editorial-menu"><span className="editorial-eyebrow">EXPLORE THE SITE</span>{links.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)} aria-current={pathname===href?"page":undefined}>{label}<span aria-hidden="true">↗</span></Link>)}<p>Muzaffarabad, Pakistan · Working worldwide</p></nav>}</>;
}
