import type { NextConfig } from "next";
import referenceRoutes from "./reference-routes.json";
const nextConfig: NextConfig = {
 compress: true,
 images: {formats:["image/avif","image/webp"],deviceSizes:[640,750,828,1080,1200,1920],imageSizes:[16,32,48,64,96,128,256,384],minimumCacheTTL:2592000,qualities:[60,75,85,92]},
 async rewrites(){return {beforeFiles:Object.entries(referenceRoutes).map(([source,file])=>({source,destination:"/reference-pages/"+file})),afterFiles:[],fallback:[]}},
 async redirects(){return Object.entries(referenceRoutes).map(([destination,file])=>({source:"/reference-pages/"+file,destination,permanent:true}))},
 async headers(){return [{source:"/assets/:path*",headers:[{key:"Cache-Control",value:"public, max-age=86400, stale-while-revalidate=604800"}]},{source:"/:path*",headers:[{key:"X-Content-Type-Options",value:"nosniff"},{key:"Referrer-Policy",value:"strict-origin-when-cross-origin"}]}]},
 allowedDevOrigins:["127.0.0.1","localhost"]
};
export default nextConfig;
