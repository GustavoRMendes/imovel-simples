import DashboardCards from "../componentes/DashboardCards"
import { Header } from "../componentes/Header"

export default function Home () {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <DashboardCards />
      </div>
    </>
  )
}