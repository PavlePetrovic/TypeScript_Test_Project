export interface initialStateType {
   products: {
      id: number,
      title: string,
      price: number,
      description: string,
      category: string,
      image: string,
      rating?: {}
   }[]
}

export interface productTypeObj { 
   id: number,
   title: string,
   image: string,
   price: number,
   category: string,
   description?: string
}