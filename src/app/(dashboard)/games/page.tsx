import { Spin } from "antd"
import { Suspense } from "react"
import { ClientRenderer } from "./_clients"

const Page = () => {
  return (
    <Suspense fallback={<Spin />}>
      <ClientRenderer />
    </Suspense>
  )
}

export default Page
