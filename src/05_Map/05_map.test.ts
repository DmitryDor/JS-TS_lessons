import {
    createGreetingMessage, createMessages,
    getStreetsTitlesOfGovermenrsBuildings,
    getStreetsTitlesOfHouses,
    ManType,
    PeopleType
} from "./05_map";
import {CityType} from "../02-object/02_02";

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: 'Andrey Ivanov', age: 33},
        {name: 'Alexandr Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]
})

test ('should get array of greeting messages ', () => {
    const messanges = createGreetingMessage(people)

    expect(messanges.length).toBe(3)
    expect(messanges[0]).toBe('Hello Andrey your are welcome')
    expect(messanges[1]).toBe('Hello Alexandr your are welcome')
    expect(messanges[2]).toBe('Hello Dmitry your are welcome')
})

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

test("List of streets titles of goverments buildings", () => {

    let streetsNames = getStreetsTitlesOfGovermenrsBuildings(city.govermentBuilding)

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe('Central str')
    expect(streetsNames[1]).toBe('South str')

})

test("List of streets titles", () => {
    let srteets = getStreetsTitlesOfHouses(city.houses)

    expect(srteets.length).toBe(3)
    expect(srteets[0]).toBe('White street')
    expect(srteets[1]).toBe('Happy street')
    expect(srteets[2]).toBe('Happy street')
})



test("create greeting messages for people all streets", () => {
    let messages = createMessages(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')

})
















