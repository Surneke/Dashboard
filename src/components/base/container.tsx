import { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='p-4 w-full'>
      <div className='w-full max-w-[1200px]'>{children}</div>
    </div>
  )
}
