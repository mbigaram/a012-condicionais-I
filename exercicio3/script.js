let nacionalidade = prompt("Escreva aqui sua nacionalidade")

const nativo = nacionalidade

if(nativo === "brasileiro"){
    console.log("Você é brasileiro")
}else if(nativo === "argentino"){
    console.log("Você é argentino")
}else if(nativo === "uruguaio"){
    console.log("Você é uruguaio")
}else if(nativo === "chileno"){
    console.log("Você é chileno")
}else if(nativo === "colombiano"){
    console.log("Você é colombiano")
}else{
    console.log("Nacionalidade não encontrada")
}

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;