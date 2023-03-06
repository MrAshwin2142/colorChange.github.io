let btn=document.getElementById('btn');
let box=document.getElementById('box');
let future=document.getElementById('future');
// console.log(box);
btn.style.color="red";
box.style.backgroundColor="navy";
let clr=['yello','green','purple','red','black','blue','orange','pink','gray','olive'];
btn.addEventListener('mouseenter',(()=>{
    let num=Math.floor(Math.random() * 10);
    box.style.backgroundColor=clr[num];
    btn.style.opacity=0;
    future.innerHTML="your future in very bright"   
}))