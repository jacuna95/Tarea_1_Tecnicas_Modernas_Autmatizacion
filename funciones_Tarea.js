//Ejercicio 1----------------------------------------------------------------------------------------------------
let nombres=['Juan','Juan','Josue','Josue','Josue','Luis','Luis','Jairo','Josue','Bryner','Bryner'];

let temp=nombres[0]
    let contador=0
    let final = []
    for (let index = 0; index < nombres.length; index++) {
        if(temp == nombres[index]){
            contador++
        }else{
            let r = []
            r.push(temp+":"+contador)
            final.push(r)
            contador=1
            temp=nombres[index]
        }
    }
    let r = []
    r.push(temp+":"+contador)
    final.push(r)
    console.log(final)

//Ejercicio 2---------------------------------------------------------------------------------
let aplanar = (...args) => {
    let result = []
    args.forEach(arg => {
        if(Array.isArray(arg)){
            let lista=arg.reduce((acumulado,actual)=>{
                return acumulado.concat(actual)
            },[])
            lista.forEach(e => {
                result.push(e)
            })
        }else if(arg != null){
            result.push(arg)
        }
      });
    console.log(result)
}
aplanar('a', ['b', 2], 3, null, [[4], ['c']]);

//Ejercicio 3--------------------------------------------------------------------------------------------
let busqueda = (lista,palabra) =>{
    let finalWords = []
    let finalPositions = []
    lista.forEach((elemento,pos) => {
        if(palabra.includes(elemento)){
            let indice=0
            let y = 0
            for (let letra = 0; letra < palabra.length; letra++) {
                if(palabra[letra] == elemento[indice] && palabra[letra+1] == elemento[indice+1]){
                    y=letra                  
                }
                
            }
            let x = {
                posicion: pos,
                prioridad: y
            }
            finalWords.push(elemento)
            finalPositions.push(x)

        }
    })
        let ordenado = finalPositions.sort(function (a, b) {
            return (a.prioridad - b.prioridad)
        })
        let posFinal = ordenado.map(x => {
            return x.posicion
        })
  

        let resultado = []
        finalWords.forEach(e => {
            resultado.push(e)
        })
        resultado.push(posFinal)
        console.log(resultado)
}

busqueda(['bow','crystal','organic','ally','rain','line'], "crystalline")
// ['crystal','line', [1,5]]

busqueda(['bow','crystal','organic','ally','rain','line'], "rainbow")
// ['bow','rain',     [4,0]]

busqueda(['bow','crystal','organic','ally','rain','line'], "organically")
// ['organic','ally', [2,3]]

busqueda(['top','main','tree','ally','fin','line'], "mainline")
// ['main','line',    [1,5]]

busqueda(['top','main','tree','ally','fin','line'], "treetop")
// ['top','tree',     [2,0]]


//Ejercicio 4----------------------------------------------------------------------------------

let ejercicio4=numero=>{
    let numeroArray=Array.from(String(numero))
    let numeros2 = numeroArray.map(num =>
        {return num*num});
    let final=numeros2.join("")

    console.log(final)
}
ejercicio4(9119)





