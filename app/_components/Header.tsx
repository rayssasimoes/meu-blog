import Link from "next/link";

export default function Header() {
  return (
    <header className="p-3.5 flex items-center justify-center border border-b-gray-400">
       <div className="w-[50%] flex items-center justify-between">
         <div>
            <Link href="/" className="text-2xl font-bold hover:text-blue-500">📋 Meu Blog</Link>
            <p className="text-[14px] text-gray-500">Desenvolvimento web e tecnologia</p>
        </div>
        <nav>
            <Link className="mr-2.5 hover:text-blue-500" href="/">Home</Link>
            <Link className="hover:text-blue-500" href="/about">About</Link>
        </nav>
       </div>
    </header>
  )
}
