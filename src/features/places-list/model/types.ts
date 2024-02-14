export type PlaceListElement = {
  id: string
  name: string
  description: string
}

export type CreatePlaceListElementCommand = {
  name: string
  description: string
}

export type DeletePlaceListElementCommand = {
  id: string
}
