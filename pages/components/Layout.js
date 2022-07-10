import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({children})=>{
  return(
 
<div>
    <Header />
<div className="mx-auto sticky top-0 bg-white flex justify-center items-center filter blur-3xl animate-pulse duration-500 transition w-full">
	<div className="mr-10 flex relative">
		<div className="p-44 rounded-full bg-gradient-to-r from-emerald-100 via-emerald-100 to-teal-200 absolute top-20 right-0">

		</div>
		<div className="p-44 rounded-full bg-gradient-to-r from-green-200 via-pink-200 to-green-300 absolute md:flex hidden">

		</div>
		
	</div>
	<div className="flex flex-col absolute top-8 right-10 space-y-4">

		<div className="p-5 rounded-full bg-gradient-to-r to-emerald-300 via-teal-300 from-emerald-300 absolute right-16 top-10">

		</div>
	</div>
	<div className="flex flex-col absolute bottom-8 right-10 space-y-4">

		<div className="p-10 rounded-full bg-gradient-to-r to-emerald-300 from-teal-300 absolute right-16 bottom-10">

		</div>
	</div>
	<div className="flex flex-col space-y-4 filter animate-pulse duration-500">
		<div className="p-10 bg-gradient-to-r to-emerald-300 from-teal-300 absolute top-20 left-20">

		</div>
		<div className="p-10 bg-gradient-to-r to-teal-300 from-emerald-300 absolute bottom-20 right-20">

		</div>
	</div>
</div>

<div className=" bg-white opacity-100 rounded-lg items-center"
>

<div className="h-screen">

<main>{children}</main>

 </div>
</div>
<Footer />
          </div>
  )
}

export default Layout;