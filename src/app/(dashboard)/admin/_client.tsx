import { AdminInfoCards } from "@/components/admin/admin-info-cards"
// import { RadialBarComponent } from "@/components/admin/count-chart"
import { Container } from "@/components/base/container"

export const ClientRenderer = () => {
  const datas = [
    { name: "Users", count: 100 },
    { name: "Parent", count: 100 },
    { name: "Teachers", count: 100 },
    { name: "Total", count: 100 }
  ]
  return (
    <Container>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='w-full lg:w-2/3 flex gap-2 justify-between flex-wrap'>
          {datas.map(data => (
            <AdminInfoCards
              key={data.name}
              type={data.name}
              total={data.count}
            />
          ))}
        </div>
        {/* <RadialBarComponent /> */}

        <div className='w-full lg:w-1/3'> R </div>
      </div>
    </Container>
  )
}
