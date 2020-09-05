import {BuildingType, CityType, HouseType} from "../02-object/02_02";
import {city} from "./04_filter2.test";


export const demolishHousesOnTheStreet = (city: CityType, title: string) =>
    city.houses = city.houses.filter(s => s.adress.street.title !== title
    )


export const getHousesOfTheStreet = (city: CityType, street: string) => {
   city.houses = city.houses.filter(s => s.adress.street.title !== street )
}

export const getBuilding = (c: Array<BuildingType>, staff: number) => {
     return c.filter( b => b.staffCount > 500 )
}