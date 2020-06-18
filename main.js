// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');

let arrayOfUsers = [];


// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
//   getUser()
//   getMultipleUsers()

}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts


    const getUser = () => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(user => user.results.map(person => {
        arrayOfUsers.push(person)
        console.log(person)
        const list = document.getElementById("all-Users")
        const pic = document.createElement("img")
        pic.setAttribute('src', `${person.picture.thumbnail}`)
        const li = document.createElement("li")
        const text = document.createTextNode(`${person.name.first}`)
        const button = document.createElement('button')
        const buttonInfo = document.createTextNode('More Info')
        const liInfo = document.createElement('li')
        const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob}`)
        const lineBreak = document.createElement('br')
        li.appendChild(pic)
        li.appendChild(lineBreak)
        li.appendChild(text)
        list.appendChild(li)
        list.appendChild(button)
        button.appendChild(buttonInfo)
        liInfo.appendChild(textInfo)
        button.addEventListener("click", function(){
        // const newList = document.createElement('ul')
        // const liInfo = document.createElement('li')
        const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob.date}, ${person.dob.age}`)
        // liInfo.appendChild(textInfo)
        // newList.appendChild(liInfo)
        li.appendChild(lineBreak)
        li.appendChild(textInfo)})
        }))
        .catch((error) => {
            console.error('Error: ', error);
        });
    }

const getMultipleUsers = () => {
fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(user => user.results.map(person => {
        arrayOfUsers.push(person)
        console.log(person)
        const list = document.getElementById("all-Users")
        const pic = document.createElement("img")
        pic.setAttribute('src', `${person.picture.thumbnail}`)
        const li = document.createElement("li")
        const text = document.createTextNode(`${person.name.first}`)
        const button = document.createElement('button')
        const buttonInfo = document.createTextNode('More Info')
        const liInfo = document.createElement('li')
        const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob}`)
        const lineBreak = document.createElement('br')
        li.appendChild(pic)
        li.appendChild(lineBreak)
        li.appendChild(text)
        list.appendChild(li)
        list.appendChild(button)
        button.appendChild(buttonInfo)
        liInfo.appendChild(textInfo)
        button.addEventListener("click", function(){
        // const newList = document.createElement('ul')
        // const liInfo = document.createElement('li')
        const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob.date}, ${person.dob.age}`)
        // liInfo.appendChild(textInfo)
        // newList.appendChild(liInfo)
        li.appendChild(lineBreak)
        li.appendChild(textInfo)})
        }))
        .catch((error) => {
            console.error('Error: ', error);
        });
    }


