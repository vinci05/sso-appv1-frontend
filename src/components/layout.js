// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full" style={{background: "#EBF4F1"}}>
        <div className="shadow-lg rounded-lg w-2/3 bg-white">{children}</div>
    </div>
  )
}
