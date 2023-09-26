

// string
let message = "hello";
// Number
// var number=20
// let num=30
// num=200
// console.log(20)
// let str = "Hello";

// function getUserChoice(userInput){
//     if(userInput==='rock' || userInput=='paper'|| userInput=='scissors'){
//       return userInput
//     }else{
//     console.log('error: invalid input')
//     }
      
//   }
//    console.log(getUserChoice('rock'))
//    console.log(getUserChoice('Rock'))

//   //  Array Maethod
//   // 1) splice

//   // The syntax 
//   // arr.splice(start[, deleteCount, elem1, ..., elemN])
//   let arr1=["I", "study", "JavaScript", "right", "now"]
//     arr1.splice(1,1)
//   console.log(arr1)
//   let arr=["I", "study", "JavaScript", "right", "now"]
  
//   arr.splice(1,1,'let')
//   console.log(arr)
//   let remove=arr.splice(1,1,'let')
//   console.log(remove)
   
let object1 = { a: 'apple', b: 'ball' };
let object2 = { c: 'cow', d: 'dog' };

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}


let mergedResult = mergeObjects(object1, object2);

console.log(mergedResult);


