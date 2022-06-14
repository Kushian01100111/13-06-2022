// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    //agarra la matriz y crea otra donde los valores de 0 no esten 
    let array = arr.map(n=>{
      if(n !== 0){
        return n
      }
    }).filter(n => n !== undefined)//filtar los valores de undefined y me deja el orden original
    //nueva matriz con solo los zeros
    let arrOfZeros = arr.map(n=>{
      if(n === 0){
        return n
      }
    }).filter(n=> n !== undefined)//se filtran los valos de undefined y tengo todos los zeros de la matriz original
    return array.concat(arrOfZeros)// junto las dos matrices con concat
  }