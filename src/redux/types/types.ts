export type initialStateType = {
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

export type productTypeObj = { 
   id: number,
   title: string,
   image: string,
   price: number,
   category: string,
   description?: string
}