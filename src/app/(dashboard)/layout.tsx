export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-screen flex'>
      <div className='w-[18%] md:w-[8%] lg:w-[14%] bg-gray-200 '>menu</div>
      <div className='w-[82%] md:w-[92%] lg:w-[86%] bg-gray-300'>
        {children}
      </div>
    </div>
  )
}
