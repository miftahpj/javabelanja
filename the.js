
let belanja = parseInt(prompt("Masukan nilai yang anda inginkan"))
if (belanja > 0 && belanja <100000){
  document.writeln(`anda belanja = ${belanja}`)
  document.writeln(`you Not Get diskon`)
}

else if(belanja >= 100000 && belanja < 200000){
  document.writeln(`anda belanja = ${belanja}`)
  document.writeln(`diskon 10 %`)
let diskon = belanja*0.10;
let hasil = belanja - diskon
document.writeln(`total belanja = ${hasil}`)
}
else if(belanja >= 200000){
  document.writeln(`anda belanja = ${belanja}`)
  document.writeln(`diskon 25 %`)
let diskon = belanja*0.25;
let hasil = belanja - diskon
document.writeln(`total belanja = ${hasil}`)
}
else{
  document.writeln('nilai yang ada masukan salah')
}
