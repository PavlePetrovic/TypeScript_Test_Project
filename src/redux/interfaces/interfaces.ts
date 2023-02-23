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

export interface reducerActionType {
   type: string,
   peyload: []
}

export interface productsType {
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

export interface productType {
   products: {
      id: number,
      title: string,
      price: number,
      description: string,
      category: string,
      image: string,
      rating?: {}
   }
}