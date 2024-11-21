"use client"
import { Avatar, Flex, Input, Typography } from "antd"
import { SearchIcon, User } from "lucide-react"
const { Text } = Typography

export const Navbar = () => {
  return (
    <div className='bg-white h-[60px] flex justify-end items-center border-b w-full overflow-hidden px-4 lg:px-10 lg:justify-between'>
      <Input
        placeholder='Search ...'
        className='w-[200px] hidden lg:flex'
        prefix={<SearchIcon className='size-4 opacity-40' />}
      />
      <Flex className='gap-4' align='center'>
        <Flex vertical gap={2} align='end'>
          <Text strong className='font-medium'>
            John doe
          </Text>
          <Text className='text-xs'>Admin</Text>
        </Flex>
        <Avatar
          icon={<User className='size-4' />}
          size={35}
          className='bg-pink-500'
        />
      </Flex>
    </div>
  )
}
