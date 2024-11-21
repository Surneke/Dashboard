import { AppMenu } from "@/components/layout/Menu"
import { Navbar } from "@/components/layout/Navbar"

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-screen flex w-full'>
      <div className='w-[10%] md:w-[8%] lg:w-[18%]'>
        <AppMenu />
      </div>
      <div className='w-[90%] md:w-[92%] lg:w-[82%] bg-[#f3f3f3]'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

// https://www.youtube.com/watch?v=myYlGLFxZas
