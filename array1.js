//1.at()

let a=[1,2,3,4,5,6];
let b=a.at(3);
console.log(b);



//2.concat()

let arr1=['a','b','c','d'];
let arr2=['e','f','g','h'];
let arr3=arr1.concat(arr2);
console.log(arr3);



//3.copyWithin()

let arr4=['a','b','c','d'];
let arr5=arr4.copyWithin(2);
console.log(arr5);


//4.fill(value,start)

let x=[2,3,6,4,7,8,9];
let y=x.fill(3,5);
console.log(y);


//5.forEach()

let ar1=['a','b','c','d'];

let ar2=ar1.forEach(only);

function only(data){
    console.log(data)
}


//6.includes()

let arr01=['a','b','c','d'];
let arr02=arr01.includes('b');
console.log(arr02);



//7.indexOf()

let arr11=['a','b','c','d','b'];
let arr21=arr11.indexOf('b',2);
console.log(arr21);


