
let userinp = prompt("Type a message in all caps or all lowercase letters.")

function noisecheck(a){
   if (a.toUpperCase() === a){
       return "This User is Yelling!";

   } else if (a.toLowerCase() === a){
       return "This User is Whispering";

   } else if (a.toLowerCase () === a) {
       return "This User is neither yelling or whispering"
   }
}

document.write(noisecheck(userinp))
console.log(noisecheck(userinp));