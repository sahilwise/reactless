import Layout from "./components/Layout";
import Image from "next/image";
import Link from "next/link";

const Beforelogin = () => {
    return (
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
        <Layout>
  
  
  
  
 <section className="sticky ">

  
       <div
            className="max-w-lg px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center"
          >
            <h1
              className="text-3xl font-extrabold leading-10 tracking-tight text-left text-black text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl"
            >
              <span className="inline md:block">Convert Any Website</span>
              <span
                className="relative mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 md:inline-block"
              > Into A <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyon-500 via-ygreen-500 to-teal-500">Mobile</span> App</span>
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

  
         
<div className="py-16 sticky overflow-hidden">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
        <div>
            {/* <h2 class="mt-4 text-center text-2xl text-zinc-900 font-bold md:text-4xl"></h2> */}
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
            <div className="relative group">
                <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-emerald-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
                  
                    <div>
                        <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">How to publish your app to google playstore</h4>
                    </div>
                    <img src="/google-play.png" className="w-8" width="25" height="25" alt="burger illustration" />
                </div>
            </div>
            <div className="relative group">
                <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-emerald-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
                   
                    <div>
                        <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">How to create a webview android app.</h4>
                    </div>
                    <img src="/instagram.png" className="w-8" width="25" height="25" alt="burger illustration" />
                </div>
            </div>
            <div className="relative group">
                <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-emerald-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
                  
                    <div>
                        <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">How to add admob ads in android webview</h4>
                    </div>
                    <img src="/twitter.png" className="w-8" width="25" height="25" alt="burger illustration" />
                </div>
            </div>
            
            <div className="relative group">
                <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-emerald-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
                  
                    <div>
                        <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">Best React Native Free Components</h4>
                    </div>
                    <img src="/github-logo.png" className="w-8" width="25" height="25" alt="burger illustration" />
                </div>
            </div>

        </div>
    </div>
    
</div>  
<footer className="bg-white">
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <Image src="/appmojo.png" width="128" height="32" />
      </div>

      <p className="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0">
        Crafted with ❤️ by  <span className="font-black">appmojo</span>
      </p>
    </div>
  </div>
</footer>                           
  


  
  
          <aside
            className="fixed flex items-center justify-center text-white rounded-full bottom-20 right-10"
          >
            <a
              href="https://chatting.page/xssnm5kgtqpkrrnf6xkitn0oliavwy5c"
              rel="noopener noreferrer"
              className="text-3xl font-medium hover:opacity-75"
            >
              <Image width="50" height="50" src="/message.png" />
            </a>
  
          </aside>
  
        </Layout>

      </div>
    )
  
  }
  
  export default Beforelogin;