

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
   
// let object1 = { a: 'apple', b: 'ball' };
// let object2 = { c: 'cow', d: 'dog' };

// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }


// let mergedResult = mergeObjects(object1, object2);

// console.log(mergedResult);


const cartData = [
    {
        title: 'Product Design',
        imageSrc: './resources/images/mb.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...',
    },
    {
        title: 'Mobile App Development',
        imageSrc: './resources/images/mb.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...',
    },
    {
        title: 'Web Design',
        imageSrc: './resources/images/mb.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...',
    },
    {
        title: 'Apps Design',
        imageSrc: './resources/images/mb.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...',
    },
    {
        title: 'Apps Design',
        imageSrc: './resources/images/mb.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...',
    }, {
        title: 'Apps Design',
        imageSrc: './resources/images/mb.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure autem...',
    },
];

function createCartItem(cartItem) {
    
    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-item');
    cartContainer.classList.add('flex-container'); 

    const image = document.createElement('img');
    image.src = cartItem.imageSrc;

    const title = document.createElement('h1');
    title.textContent = cartItem.title;

    const description = document.createElement('p');
    description.textContent = cartItem.description;

    cartContainer.appendChild(image);
    cartContainer.appendChild(title);
    cartContainer.appendChild(description);

    return cartContainer;
}

document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cartContainer');

    cartData.forEach(cartItem => {
        const cartElement = createCartItem(cartItem);
        cartContainer.appendChild(cartElement);
    });
});





