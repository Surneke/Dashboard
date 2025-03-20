import Link from "next/link"
import Image from "next/image"
import { MenuItmes } from "@/datas/menu-json"
import logo from "../../../public/png/logo.jpg"

export const AppMenu = () => {
  return (
    <div className='px-0 lg:px-4'>
      <div className='mt-4 flex gap-2 items-center justify-center lg:justify-start'>
        <Image
          alt='logo'
          width={30}
          height={30}
          src={logo}
          className='rounded-full'
        />
        <p className='font-medium capitalize hidden lg:block'>CTA</p>
      </div>
      {MenuItmes.map(menu => (
        <div className='mt-4 flex flex-col gap-0 lg:gap-2' key={menu.title}>
          <span className='primary opacity-40 text-xs uppercase hidden lg:block'>
            {menu.title}
          </span>
          <div className='flex flex-col pl-2 lg:pl-0'>
            {menu.items.map(item => (
              <Link
                key={item.id}
                href={item.url}
                className='flex items-center gap-2 py-2 lg:p-2 rounded-lg hover:bg-gray-50 '
              >
                <item.icon className='size-4 opacity-40 ' />
                <span className='opacity-80 text-sm hidden lg:block'>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
