"use client"
import { Typography } from "antd"
const { Text } = Typography

export const AdminInfoCards = ({
  total,
  type
}: {
  total: number
  type: string
}) => {
  return (
    <div className='rounded-2xl odd:bg-dashPurple even:bg-dashYellow flex-1 p-4 flex flex-col'>
      <Text>{type}</Text>
      <Text>{total}</Text>
    </div>
  )
}
