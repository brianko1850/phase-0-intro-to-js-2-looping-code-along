// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"]
let event = "surprise"
function writeCards(names,event) {
    let newMessage = []
 for(let i = 0; i < names.length; i++) {
    newMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    };
    return newMessage
}
function countDown(n) {
    console.log(n)
    while (n>0) {
        n -= 1;
        console.log(n)
    }
}