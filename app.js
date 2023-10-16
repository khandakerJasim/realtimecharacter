const textarea=document.getElementById('content');
const counter=document.getElementById('counter');

textarea.addEventListener('input',function(){
    let count=textarea.value.replace(/\s/g,'').length;
    counter.innerHTML=count + " characters"
})
