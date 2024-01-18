const getDate = (date) => {
    let result = ''
    const day = String(date.getDate())
    const month =String(date.getMonth()+1)
    const year = String(date.getFullYear()).slice(-2)
    
    if(day.length === 1) {
        result += `0${day}.`
    } else {
        result += `${day}.`
    }
    if(month.length === 1) {
        result += `0${month}.`
    } else {
        result += `${month}.`
    }
    result += year
    
    return result
}

export default getDate