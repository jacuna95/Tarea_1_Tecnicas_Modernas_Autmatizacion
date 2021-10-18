//Ejercicio 1----------------------------------------------------------------------------------------------------

const obtenerSubArrays=(...values)=> {
    let start = 0;
    let end = 0;
    const subValues = [];
    for (let index = 0; index < values.length; index++) {
      if (values[index] === values[index + 1]) end++;
      
      else {
        subValues.push(values.slice(start, end + 1));
        start = end + 1;
        end = start;
      }
    }
    return subValues;
  }

const uniqC=(...values)=> {
    return obtenerSubArrays(...values).map((subArray) => [...new Set(subArray), subArray.length]);
  }
  

  console.log(uniqC('a','a','a', 'b','b','c','a','b', 'b','c'))

  //Ejercicio 2---------------------------------------------------------------------------------

const aplanar=(valoresLista)=> {

  return valoresLista.some(Array.isArray) ? aplanar([...valoresLista.flat()]) : valoresLista;
}
console.log(aplanar(['a', ['b', 2], 3, null, [[4], ['c']]]));


//Ejercicio 3--------------------------------------------------------------------------------------------

const busqueda = (lista,palabra) =>{
    const finalWords = []
    const finalPositions = []
    lista.forEach((elemento,pos) => {
        if(palabra.includes(elemento)){
            const indice=0
            let y = 0
            for (let letra = 0; letra < palabra.length; letra++) {
                if(palabra[letra] == elemento[indice] && palabra[letra+1] == elemento[indice+1]){
                    y=letra                  
                }    
            }
            const x = {
                posicion: pos,
                prioridad: y
            }
            finalWords.push(elemento)
            finalPositions.push(x)
        }
    });
        const ordenado = finalPositions.sort(function (a, b) {
            return (a.prioridad - b.prioridad)
        });
        const posFinal = ordenado.map(x => {
            return x.posicion
        });

        const resultado = []
        finalWords.forEach(e => {
            resultado.push(e)
        });
        resultado.push(posFinal);
        
        return(resultado);
}
console.log(busqueda(['bow','crystal','organic','ally','rain','line'], "crystalline"));


/*['bow','crystal','organic','ally','rain','line'], "crystalline"
-->['crystal','line', [1,5]]

['bow','crystal','organic','ally','rain','line'], "rainbow"
-->['bow','rain',     [4,0]]

['bow','crystal','organic','ally','rain','line'], "organically"
-->['organic','ally', [2,3]]

['top','main','tree','ally','fin','line'], "mainline"
-->['main','line',    [1,5]]

['top','main','tree','ally','fin','line'], "treetop"
-->['top','tree',     [2,0]]*/


//Ejercicio 4----------------------------------------------------------------------------------

const ejercicio4=numero=>{
    const numeroArray=Array.from(String(numero));
    const numeros2 = numeroArray.map(num =>
        {return num*num});
    const final=numeros2.join("");

    return(parseInt(final));
    
}
console.log(ejercicio4(91919));






