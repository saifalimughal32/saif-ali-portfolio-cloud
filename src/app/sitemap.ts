import type {MetadataRoute} from "next";
import routes from "../../reference-routes.json";
export default function sitemap():MetadataRoute.Sitemap{return Object.keys(routes).filter(path=>path!=="/free-audit").map(path=>({url:"https://www.saifali.site"+(path==="/"?"/":path),lastModified:"2026-10-29",changeFrequency:path==="/blog"?"weekly":"monthly",priority:path==="/"?1:path.startsWith("/blog/")?.8:.7}))}
