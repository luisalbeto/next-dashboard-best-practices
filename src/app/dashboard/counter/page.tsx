import { CarCounter } from "@/app/shopping-car/components/CarCounter"


export const metadata = {
  title: 'Shopping Car',
  description: 'Un contador'
}

export default function CounterPage() {

  return(
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <CarCounter value={20}/>

     
    </div>
  )
}