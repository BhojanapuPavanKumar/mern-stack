window.console.log("Hello from js!");
// let,const,var

// let age=89 // error //viceversa
// var age=56

//var a=78  //no error// access before initialization // redeclaration // re-assignment
//var a=85

// const m=10 //for let//error
// const m=20

// const m=9 //error, not for let and var
// m=80

// let m=90 //for var // no error // re-assignment
// m="kih"
// variables default value is undefined

//Temporal Dead Zone (TDZ)
//tdz
// console.log(kk);
// let kk=90;
// console.log(kk);

//"80"*"80"=640,'' => also works, *,/,- works + not works

//-------------------------------------------------------------------------------------------------------------------
// function
// let j=50
// let gj=0.1
// let f=70
// let gf=0.05
// let ta=calc(j,gj)+calc(f,gf)//argument
// // pbill("mango juice",ta)
// function calc(c,gst){// parameter
//     return c+c*gst
// }
// const pbill=function pbillxyz(name,r){
//     console.log("----------\n your bill for "+name+"\n -- Rs: "+r)
//     console.log("----------\n your bill for "+name+"\n -- $: "+(r/86.09))
// };
// pbill("mango juice",ta)

//--------------------------------------------------------------------------------------------------------------------------------

// const printbill=(txt)=>{
//     console.log("print bill")
//     console.log("--------- bill rs: "+txt+"\n------bill $: "+txt/86.7)
// }

// console.log(printbill)//returns whole function code
// // printbill(100)

// const calcbill= (price,gst)=>{
//     return price+price*gst
// }
// let fp,sp,tp
// fp=calcbill(100,0.05)
// sp=calcbill(200,0.12)
// tp=calcbill(500,0.13)
// //higher oreder function(The function which accepts another function as a parameter OR returns a function)
// const totalAmount=(fp,sp,tp,callback/**HOF(higher order function) */)=>{
//     callback("\n--------callback: "+(fp+sp))
//     return fp + sp +tp;
// }

// printbill(totalAmount(fp,sp,tp,printbill))//HOF

//-------------------------------------------------------------------------------------------------------------------------------------------
//---------------Array and Objects-------------------

//objects store key-value pair, keys must be string or symbol
// const cse018={
//     name:"surya",
//     address:"hyd",
//     bgroup:"B+",
// }
// //read the values
// console.log(cse018)
// const stuname=cse018.name
// cse018.bgroup="A+"
// delete cse018.address
// console.log(cse018)

//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------Primitive(number,string,bigint,boolean,null,undefined,symbol) datatypes and non-primitive(object) datatype----------------------------

// const cse018={
//     name:"surya",
//     address:"hyd",
//     bgroup:"B+",
//     getInfo:()=>{
//         console.log(`"object.method" s${this.address}`)// undefined use function keyword
//         // console.log(`"object.method" s${address}`)//error
//     }
// }

//------------------Dynamic value access--------------------------
//read the values
// console.log(cse018)
// const stuname=cse018.name
// cse018.bgroup="A+"
// delete cse018.address
// cse018.collage="lpu"//cse018["collage"]
// console.log(cse018)

//example
// const person={
//     name:'nnll',
//     height:'78',
//     getbmmi:function (){
//         console.log(`name is ${this.name} and ${this.height}`)
//         const bmi=100/this.height**2
//         console.log(`BMI FOR${this.name} is ${bmi}`)
//         if(bmi<26)
//             console.log("Obsese")
//         else if(bmi>18 && bmi<25)
//             console.log("Fit")
//         else if(bmi>30)
//             console.log("Overweight")

//         else{
//             console.log("Underweight")
//         }

//     },
// }
// person.getbmmi()
// cse018.getInfo()

// const allKeys=Object.keys(person);
// const allValues=Object.values(person);
// const allEntries=Object.entries(person);
// console.log(allKeys)
// console.log(allValues)
// console.log(allEntries)

//----------------------------------------------------------------------------------------------------------------------------------------------------------
// const p1={
//     a:"a",
//     b:"b",
//     c:"c",
//     d:{
//         m:"m",
//         kk:79
//     },
//     e:"e",
// }
// const p2=p1// it is shallow copy
// p2["c"]=89
// p2.m="m"
// console.log(p1)
// console.log(p2)

// //------destructuring
// const { a }=p1
// console.log(":-->",a)
// const { b , c , d }=p1
// console.log(":-->",b,c,d)

// const z={...p1} //smart copy
// //spread operator(...)
// z.a="aa"
// z.d.m="mess"

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------ARRAYS----------------
//js have 2 contaianer 1 array, 2 object

// arr=[1,2,3,4]
// console.log(arr)

// //READ
// //array-destructuring
// ////const [a,b,c] = arr
// ////console.log(c,b)
// arr=["a","b","c","d","e"]
// // arr[10]="honda"// wholes are created // use array methods
// arr.push("kolkkata")
// arr.pop()
// arr.shift()
// arr.unshift("aa")
// console.log(arr)
// arr.splice(1,2,"k","kk","kkk")
// arr.push("kkk")
// console.log(arr.indexOf("kkk"),arr.lastIndexOf("kkk"),arr.includes("kkk"))
// arr=[
//     {a:"a",b:"b"},
//     {a:"aa",b:"bb"},
//     {a:"aaa",b:"bbb"},
// ]
// console.log(arr.indexOf("aa"))

// console.log({name:"raj"}=={name:"raj"},{}=={})
// const p1={
//     n:"n"
// }
// p2=p1
// console.log(p1==p2)
// p3={...p2}
// console.log(p1==p3)

//------------------------------------------search methods

// const myfunc= (a,b,c,d)=>{
//     let mm=Object.values(a)
//     if(mm.includes("aa"))
//     console.log(a)
//     if(a.a==="aa")
//          console.log(mm)
// }
// // const arr=["a","b","c","d","e"]
// const arr=[
//     {a:"a",b:"b"},
//     {a:"aa",b:"bb"},
//     {a:"aaa",b:"bbb"},
// ]
// const e=arr.find(myfunc);
// const e1=arr.findIndex(myfunc);

//-------------------------------
// const arr=[
//     {a:"a",b:2},
//     {a:"aa",b:4},
//     {a:"aaa",b:8},
// ]

// const myfunc=(e)=>{
//     if(e.b<4)
//         return {...e,remark:"fail"}
//     else
//         return {...e,remark:"pass"}
// }

// const resarr=arr.map(myfunc)
// console.log(": resarr: ",resarr)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const arr = ["cat", "sog", "elephant", "tiger"];
for (let i in arr) console.log(i, arr[i]); // print index values
for (let i of arr) console.log(i); // print arr values

let myfunc = function myfunc() {
  console.log("hi");
};
arr.forEach(myfunc);
let myfunc1 = function myfunc(val) {
  console.log("hi", val);
};
arr.forEach(myfunc1);
let val = 67;
arr.forEach((val, index, arr) => {
  console.log(val, index, arr);
});
