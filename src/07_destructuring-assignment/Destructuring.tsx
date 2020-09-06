import React, {useState} from "react";

type LessonType = {
    title: string
    name?: string
}
type StreetType = {
    nameStreet: string
}

type AdressType = {
    street: StreetType
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    adress: AdressType


}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimychState (initiolState: string) {
    return [initiolState, function (){}]
}


export const ManComponent: React.FC<PropsType> = (props) => {

    const {title} = props
    const {name} = props.man

    const [message, setMessage] = useState("Helllo")

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
            <div>
                {props.car.model}
            </div>

        </div>
    )

}