console.log("title document", document.title)

document.title="SIC PERTEMUAN 10"

console.log(document.title);
console.log(document);

// const text2=document.getElementsByClassName("sic2")
const text2=document.querySelector("#sic");
console.log("text2", text2);

document.getElementById("sic").style.color="red"

const user={
    name:"skilvul",
    hobby:"membaca"
}

const image=document.createElement('img')
image.src='/picture.png'
document.querySelector("#container").appendChild(image)

document.getElementById('text-dom').innerHTML='HAYUU BELAJAR';
document.getElementById('text-dom').innerHTML=user.name;
document.getElementById('text-dom').innerHTML=user.hobby

// membuat evenlistener mouse hover
// document.getElementById('sic').addEventListener('mouseover', displayAlert);
// function displayAlert() {
//     alert("melewati elemet id sic");
// }

// membuat evenlistener onclick
document.getElementById('test').addEventListener('click', handleClick);
function handleClick() {
    alert("melewati elemet id sic");
}