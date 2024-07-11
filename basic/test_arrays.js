const firstArray = [
    {itemName: 'Item A1', value: 100 },
    {itemName: 'Item A2', value: 200 },
    {itemName: 'Item A3', value: 300 },
    {itemName: 'Item A4', value: 400 },
    {itemName: 'Item A5', value: 500 },
    {itemName: 'Item A5', value: 550 },
]

console.log('============== For Each Item Name ==============')
firstArray.forEach(function (item){
    console.log(item.itemName)
})

console.log('============== Map Item Value ==============')
const resultMap = firstArray.map(function(item){
    return item.value
})

console.log(resultMap)

console.log('============== Filter Item Value ==============')
const filterResult = firstArray.filter(function(item){
    if(item.value / 100 > 3){
        return true
    } else {
        return false
    }
})

console.log(filterResult)

console.log('============== Reduce Sum Values ==============')
const reduceResult = firstArray.reduce(function(acc, item) {
    acc +=item.value
    return acc
   }, 0)

   console.log(reduceResult)

console.log('============== Reduce result to Object ==============')
// don't work correctly with same name and different value (example Item A5)
const reduceResultToObject = firstArray.reduce(function(acc, item) {
    acc[item.itemName] = item.value
    return acc
   }, {})

console.log(reduceResultToObject)

console.log('============== Set Object ==============')
const obj = {
    a: 1
}

obj.a = 2 
console.log(obj)
obj['a'] = 3 
console.log(obj)
