
type StreetType = {
    title: string
}

type AdressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    adress: AdressType
}

export type BuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    addres: AdressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuilding: Array<BuildingType>
    citizensNumber: number
}