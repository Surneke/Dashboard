import { Container } from "@/components/base/container"

export const ClientRenderer = () => {
  return (
    <Container>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='w-full lg:w-2/3'> L </div>

        <div className='w-full lg:w-1/3'> R </div>
      </div>
    </Container>
  )
}
