import { writable } from 'svelte/store';



const user = writable(JSON.parse(localStorage.getItem("user")) || {"name": "", "country": ""});
user.subscribe(val => localStorage.setItem("user", JSON.stringify(val)));


export default user;


