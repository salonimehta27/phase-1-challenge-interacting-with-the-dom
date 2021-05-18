document.addEventListener("DOMContentLoaded",function(){
//added all the needed elements from html
const minus=document.getElementById("minus");
const plus=document.getElementById("plus");
const heart=document.getElementById("heart");
const pause=document.getElementById("pause");
const forms=document.getElementById("comment-form");
const input=document.getElementById("comment-input");
const counter=document.getElementById("counter");
const submit=document.getElementById("submit");
//added an event listener for submit button for like button
forms.addEventListener("submit",(e)=>
{
        e.preventDefault();
        addComments();
        e.target.reset();
})
// function to display comments
function addComments()
{
        const newComments=document.createElement("p");
        const commentList=document.getElementById("list");
        commentList.appendChild(newComments);
        newComments.innerText=input.value;
}
// made a function that takes the value of counter inside header tag and converts it to an integer and then increments the counter every 1000 millisecond 
// using setInterval
function counterPlus(){
        const count =parseInt(counter.innerText,10);
        counter.innerText=count+1;
    }
    counterPlus();
let displayCounter=setInterval(counterPlus, 1000);
//minus the counter
minus.addEventListener("click",(e)=>
{
        const count =parseInt(counter.innerText,10);
        counter.innerText=count-1;
})
// adds in counter //passed in counterPlus function of adding the counter //don't repeat the code
plus.addEventListener("click",counterPlus);

// when the heart is clicked it displays the counter number that was clicked and how many times
  
heart.addEventListener("click",(e)=>{
     
        const oldCount=parseInt(counter.innerText,10);
        const testObj={keyTest:oldCount,likes:1}
        const newli=document.createElement("li");
        const like=document.querySelector("ul.likes");
        let newCount=0;
        newCount++;  // work on fixing times again 
        newli.innerHTML=`${oldCount} has been liked <span>${newCount}</span> times`;
        like.append(newli);
})
// pause used disabled to disable the functionality of the buttons
pause.addEventListener("click",(e)=>{
    if(e.target.innerText==="pause") // if its pause 
    {
    clearInterval(displayCounter);  // it will clear the interval that was intially set with display counter
        e.target.innerText="resume"; // it will display resume when pause button is clicked
        plus.disabled=true;
        minus.disabled=true;
        heart.disabled=true;
        counter.disabled=true;
        submit.disabled=true;
    }
    else{
        displayCounter=setInterval(counterPlus,1000); // it will resume the interval from when it was paused which is why we passed the function 
        //where displayCounter was first set
        e.target.innerText="pause"; // it will display the innertext to pause again 
        plus.disabled=false;
        minus.disabled=false;
        heart.disabled=false;
        counter.disabled=false;
        submit.disabled=false;

    }
})
})