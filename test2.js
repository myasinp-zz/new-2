var arr = [1,1,2,2,3,3,3,5]
var dict = {}

arr.map((e)=>{
    if (dict[e]){
        dict[e] = dict[e] +1
    }
    else {
        dict[e] = 1
    }  
})

console.log(dict);