//15.reduce()

let arr1=[2,3,5,6,1,2];
let arr2=arr1.reduce(function (accum,curr)  {
    return accum+curr;
},0);
console.log(arr2);


//16.reduceRight()

let arr01=[2,3,5,6,1,2];
let arr02=arr01.reduceRight((accum,curr) => {
    return accum+curr;
},0);
console.log(arr02);


//17.reverse()

let a=["fire","air","water"];
let b=a.reverse();
console.log(b);



//18.slice()

let x=["fire","air","water","one","two","three"];
let y=x.slice(2);
let z=x.slice(-2,-1);
console.log(y);
console.log(z);


//19.splice(start,deletecount)

let p=["jan","march","april","may"];
let q=p.splice(1,0,'feb');
console.log(q);
console.log(p);



//20.sort()


let a1=["jan","march","april","may"];
 let a2=[1,5,2,100,9,4];
let b1=a1.sort();
let b2=a2.sort();
console.log(b1);
console.log(b2);



//21.toString()


let a01=["jan","march","april","may",5,2,100,9,]
let b02=a01.toString();
console.log(b02);
