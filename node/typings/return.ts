export interface Return {
  idOrden: string
  state: string
  itemsDevolucion: ItemsDevolucion[]
  metodoDevolucionDinero: string
  usuario_correo: string
}

interface ItemsDevolucion {
  imagen?: string
  id: string
  quantity: string
  name: string
  price: number
}
