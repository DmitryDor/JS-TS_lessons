import React, {useState, MouseEvent, ChangeEvent} from "react";
import {HouseType} from "../02-object/02_02";


export const createMessages = (houses: Array<HouseType>) => {
    let callbackfn = (g: HouseType) => `Hello guys from ${g.adress.street.title}`;
    return houses.map(callbackfn)
}

/*const callback = () => {
    alert('hey')

}


window.setTimeout(callback, 1000)*/

export const User = () => {


    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        console.log(event.currentTarget.name);
        // alert('user should be deleted')
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const nameChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={nameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged} type={'number'}/>
            <button name='delete' onClick={deleteUser}>search</button>
            <button name='save' onClick={deleteUser}>x</button>
        </div>
    )


}