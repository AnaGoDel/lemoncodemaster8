export interface LocationEntityVM {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: Residents[],
}
interface Residents {
  id: number,
  name: string,
  image: string,
}
