let url="https://catfact.ninja/fact";
//using fetch method

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data:",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data2:",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error:",err);
// })

//using async and await keyword
// async function getFacts(){
//     try{
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log("Data:",data.fact);
//     let res2=await fetch(url);
//     let data2=await res2.json();
//     console.log("Data:",data2.fact);
//     }
//     catch(e){
//         console.log("Error:",e);
//     }
// }

//by using axios keyword
async function getFacts(){
    try{
    let res=await axios.get(url);
    return res.data.fact;
    }
    catch(e){
        console.log("Error:",e);
        return "no facts found";
    }
}
// getFacts();

let btn=document.querySelector("#fact");
btn.addEventListener("click", async ()=>{
    let res=await getFacts();
    // console.log(fact);
    let p=document.querySelector("p");
    p.innerText=res;
})
let url2="https://dog.ceo/api/breeds/image/random";
let btn2=document.querySelector("#pic");
btn2.addEventListener("click", async ()=>{
    let res=await   getImage();
    let img=document.querySelector("img");
        img.setAttribute("src",res);
})
async function getImage(){
    try{
        let res= await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        return "no picture loaded";
    }
}