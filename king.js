function pyramid(n){
    for (var i=1; i<=n; i++){
        var myval = ' '.repeat(n-i);
        var myval1 = '*'.repeat(i*2 -1)
        console.log(myval + myval1 + myval);
    }
}
pyramid(5);
function pyramid(n){
    for (var i=1; i<=n; i++){
        var myval = ' '.repeat(n-i);
        var myval1 = '*'.repeat(i*2 -1)
        console.log(myval + myval1 + myval);
    }
}
pyramid(5);
let n = 3;
let string = "   ";
for (let i=0; i<n; i++){
   for (let j=0; j<n; j++){
      string += "*";
}
string += "\n";
}
console.log(string);