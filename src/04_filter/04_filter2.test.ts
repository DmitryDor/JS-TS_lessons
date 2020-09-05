import {CityType} from "../02-object/02_02";
import {
    demolishHousesOnTheStreet,
    getBuilding,
    getHousesOfTheStreet,
    getStreetsTitleOfGovermentsBuildings
} from "./04_filter2";

export let city: CityType


beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            adress: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                adress: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                adress: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
        ],
        govermentBuilding: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                addres: {
                    street: {
                        title: 'Central str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                addres: {
                    street: {
                        title: 'South str'
                    }
                }
            }
        ],
        citizensNumber: 1000000

    }
})


// Дополните HouseType (добавить id  от 1 и по возрастанию)
//создайте в том же файле ещё одну функцию, чтоб тесты прошли

test('Houses should be destroyed', () => {
    // demolishHousesOnTheStreet(city, 'Happy street');

     demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)

})

test.skip('List to streets titles of goverments buildings', () => {

    let streets = getStreetsTitleOfGovermentsBuildings(
        city.govermentBuilding
    )

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central str')
    expect(streets[1]).toBe('South str')

})

test.skip('List to streets titles of houses', () => {

     getHousesOfTheStreet(city, 'Happy street')
     getHousesOfTheStreet(city, "Happy street")

 expect(city.houses.length).toBe(2)
 expect(city.houses.length).toBe(1)
})


test("building with correct staff count", () => {

    let buildings = getBuilding(city.govermentBuilding, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})