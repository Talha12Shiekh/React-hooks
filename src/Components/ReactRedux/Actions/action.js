export const Increment = (num) =>{
    return {
        type:"INCREMENT",
        payload : num,
    }
}

export const Decrement = (num) =>{
    return {
        type:"DECREMENT",
        payload: num
    }
}

export const Multiplication = (num) =>{
    return {
        type:"MULTIPLICATION",
        payload: num
    }
}

export const Divison = (num) =>{
    return {
        type:"DIVISION",
        payload: num
    }
}