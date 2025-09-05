import { contactQueries, packageCards } from "./api.js";

export async function fetchPackageCards() {
    let response = await fetch(packageCards);
    return response.json();
}

export async function postContactQuery(name , email, subject, message) {
    let response = await fetch(contactQueries,{
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name : name,
            email: email,
            subject: subject,
            message: message
        })
    })
    return response.json();
}