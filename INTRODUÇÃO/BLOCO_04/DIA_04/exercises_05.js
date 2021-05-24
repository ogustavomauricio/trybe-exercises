let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info.recorrente ="sim"
  let info2 = {
      personagem: "Tio Patinhas",
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: "O último MacPatinhas",
      recorrente: "sim"
  }

  for(let valor in info){
      if(
          info[valor] === info.recorrente &&
        info[valor] === "sim" &&
        info2[valor] === "sim"
        )
        {console.log("Ambos recorrentes");
    }else{
        console.log(info[valor]+ " e "+ info2[valor]);
    }
  }
  