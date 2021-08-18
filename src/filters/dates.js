export default (value) => {
    if (!value) return ''
    value = new Date(value)
    //return value.getMonth()
    return `${value.getDate()}/${value.getMonth()+1}/${value.getFullYear()}`
}