import Layout from "./components/Layout";
import Image from "next/image";
import Link from "next/link";
import Components from "./components/Components";

const Beforelogin = () => {
    return (
      <div className="bg-white">
       
        <div className="mt-4 top-0 mb-2 py-2 mx-3 flex justify-between ">
          <Image alt="addify logo" width={148} height={37} src="/appmojo.png" />
          <h1 className="font-black text-black pt-1 px-4 text-lg">
          <Link href="https://twitter.com/sahilnetic" >
             <Image width="22" height="22" src="/twitter.png" />
          </Link>
          
          </h1>
        </div>
        <hr className="sm:block hidden mx-3" />
        <Layout>
  
  
  
  
 <section className="sticky ">

  
       <div
            className="max-w-lg px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center"
          >
            <h1
              className="text-3xl font-extrabold leading-10 tracking-tight text-left text-black text-center sm:leading-none md:text-6xl text-4xl lg:text-6xl"
            >
              <span className="inline md:block">Open Source Components</span>
              <span
                className="relative mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 md:inline-block"
              > & <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-cyon-500 to-teal-500"> Templates </span> Using React Native</span>
            </h1>
          </div>
  
  <div className="sm:flex sm:space-y-0 sm:flex-row justify-center gap-x-2 items-center mt-5 text-center">
  <span className="relative inline-flex w-full md:w-auto">
  <Link href="/convertyourapp">
  <a
      className="flex hover:border-2 hover:shadow-xl items-center text-white border border-2 justify-center w-full sm:px-10 mx-16 py-4 leading-6 bg-black rounded-lg font-black"
    >
    &nbsp;&nbsp;<Image width={20} height={20} src="/android.png" />&nbsp;&nbsp; Get Started
    </a>
    </Link>
  </span>
  </div>
  </section>


  <div className="flex space-x-5 max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
    <h3 className="underline decoration-2 underline-offset-8">Components</h3>
    <h3>Templates</h3>
    <h4>Web View</h4>
  </div>
  {/* Components */}
   <Components />

  {/*  more components   */}
  <div className="flex flex-col items-center justify-center mt-16">
   <Link passHref href="/yo"><button className="border px-4 py-2 border-2 rounded-lg text-center">More Components</button></Link>
  </div>
         

<footer className="bg-white">
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <Image src="/appmojo.png" width="128" height="32" />
      </div>

      <p className="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0">
        Crafted with ❤️ by <Link href="https://sahilnetic.xyz"><span className="font-black">sahilnetic</span></Link>
      </p>
    </div>
  </div>
</footer>                           
  


  
  
          {/* <aside
            className="fixed flex items-center justify-center text-white rounded-full bottom-20 right-10"
          >
          </aside> */}
  
        </Layout>

      </div>
    )
  
  }
  
  export default Beforelogin;