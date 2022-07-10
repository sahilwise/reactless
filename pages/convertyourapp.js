import Layout from "./components/Layout";
import Image from "next/image";
import Link from "next/link";
const convertyourapp = ()=>{
   return(
   <>
         <div className="bg-white">
       
       <div className="mt-4 top-0 mb-2 py-2 mx-3 flex justify-between ">
         <Image alt="addify logo" width={148} height={37} src="/appmojo.png" />
         <h1 className="font-black text-black pt-1 px-4 text-lg">
         <Link href="https://twitter.com/appmojo" >
            <Image width="22" height="22" src="/twitter.png" />
         </Link>
         
         </h1>
       </div>
       <hr className="sm:block hidden mx-3" />
       </div>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdMIAuVz1sx5NwCHv-hnDloPshQbaLcVFR-fUsQkftoL3UN5Q/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   </>
   )
}

export default convertyourapp;