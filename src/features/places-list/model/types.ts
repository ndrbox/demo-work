export type PlaceListElement = {
  id: string
  name: string
  description: string
  img: string,
  location: string
  price: number
  rating: number
}

export type CreatePlaceListElementCommand = {
  name: string
  description: string
}

export type DeletePlaceListElementCommand = {
  id: string
}
