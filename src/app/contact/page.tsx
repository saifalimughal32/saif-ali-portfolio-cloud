import type {Metadata} from "next";
import {ContactSection} from "@/components/ContactSection";
import {SharedFooter} from "@/components/SharedFooter";
export const metadata:Metadata={title:"Contact Saif Ali | Discuss Your Ecommerce Project",description:"Discuss your Shopify store, brand identity, creative or ecommerce growth project with Saif Ali.",alternates:{canonical:"/contact"}};
export default function Contact(){return <><main className="editorial-contact-page"><section className="editorial-inner-intro"><span className="editorial-eyebrow">LET’S WORK TOGETHER</span><h1>Tell me what you have in mind.</h1><p>Share your project, your store, or the next step you want to make clearer.</p></section><ContactSection/></main><SharedFooter/></>}
