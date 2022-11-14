function votos(){
    let votos1 
    let votos2
    let votos3
    let votos4
    let votos5
    let votosBlanco
    let votosTotales

    votos1 = document.getElementById('votos1');
    votos2 = document.getElementById('votos2');
    votos2 = document.getElementById('votos3');
    votos2 = document.getElementById('votos4');
    votos2 = document.getElementById('votos5');
    votosBlanco = document.getElementById('votosBlanco');
    votosTotales = votos1 + votos2 + votos3 + votos4 + votos5 + votosBlanco;

    return votosTotales;
}



//Votos1 > 50% de votosTotales?
//Si, entonces cargosCD proporcionales
//No, entonces
//Votos2 > 50% de votosTotales?
//Si, entonces cargosCD proporcionales
//No, entonces 
//Votos3 > 50% de votosTotales?
//Si, entonces cargosCD proporcionales
//No, entonces 
//Votos4 > 50% de votosTotales?
//Si, entonces cargosCD proporcionales
//No, entonces 
//Votos5 > 50% de votosTotales?
//Si, entonces cargosCD proporcionales
//No, entonces 

//Votos1 > Votos2?
//Si, entonces Votos1 > Votos3
///No, entonces Votos2 > Votos3
///Si, entonces Votos2 > Votos4
///Si, entonces Votos2 > Votos5
///Si, entonces cargosCD = 15
//Si, entonces Votos1 > Votos4
//Si, entonces Votos1 > Votos5
//Si, entonces cargosCD = 15


