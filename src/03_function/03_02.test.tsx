import {CityType} from '../02-object/02_02';
import {
    addMoneyToBudget,
    cteateMessage,
    demolishHousesOnTheStreet,
    repairHouse,
    toFireStaff,
    toHireStaff
} from "./03_function";


export let city: CityType


beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
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

// Создайте в отдельном файле функцию, чтоб тесты прошли

test('Budget should be changed for HOSPITAL', () => {

    addMoneyToBudget(city.govermentBuilding[0], 100000)

    expect(city.govermentBuilding[0].budget).toBe(300000)

})

test('Budget should be changed for FIRE-STATION', () => {

    addMoneyToBudget(city.govermentBuilding[1], -100000)

    expect(city.govermentBuilding[1].budget).toBe(400000)

})

// Дополните тип HourseType (добавьте порядковый id от 1 и по возрастанию)
// Создайте ещё одну функцию, чтоб тесты прошли



test('House shold be repared', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBe(true)
})

test('staff should be increased', () => {
    toHireStaff(city.govermentBuilding[1], 50)

    expect(city.govermentBuilding[1].staffCount).toBe(1050)

})

test('staff should be repared', () => {
   toFireStaff(city.govermentBuilding[1], 50)
   toFireStaff(city.govermentBuilding[0], 20)

    expect(city.govermentBuilding[1].staffCount).toBe(950)
    expect(city.govermentBuilding[0].staffCount).toBe(180)

})


test('Greeating messsage should be correct for city', () => {
    const message = cteateMessage(city)

    expect(message).toBe('Hello New York citizens!')

})