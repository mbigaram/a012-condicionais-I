


let idade = Number(prompt("Qual a sua idade?"))

if(idade >= 18){
    alert("Você é maior de idade")
}else{
    alert("Você é menor de idade")
}




let ensinoMedio = prompt("Concluiu o ensino médio?(sim ou não)")
let isCursandoOutraFaculdade

if(ensinoMedio === "sim"){

    isCursandoOutraFaculdade = prompt("Você esta cursando a faculdade? (sim ou não)")

    if(ensinoMedio === "sim"){
       console.log ("Você esta cursando faculdade.")
}else{
       console.log ("Você não está na faculdade")
}

}else {
    console.log("Você não concluiu o ensino médio")
}