var output = document.querySelector('.output')

function calcularValor(a, b, operacion1) {
    var c = 0
    switch (operacion1.toLowerCase()) {
        case '+':
            c = a + b
            break
        case '-':
            c = a - b
            break
        case '*':
            c = a * b
            break
        case '/':
            c = a / b
            break



    }

    return c
    console.log(c)
}
var numero1 = 0
var numero2 = 0

var operacion


function selecionarcosas(event) {
    var boton = event.target
    var valor = boton.dataset.value

    switch (valor.toLowerCase()) {
        case '+':
            operacion = valor
            numero1 = output.innerHTML
            output.innerHTML = ''
            break
        case '-':
            
            numero1 = output.innerHTML
            operacion = valor 
            output.innerHTML = ''
           
            break
        case '*':
            numero1 = output.innerHTML
            
            operacion = valor
            output.innerHTML = ''
            break
        case '/':
            numero1 = output.innerHTML
            operacion = valor
            output.innerHTML = ''
            break
        case 'ac':
            output.innerHTML = ''
            

            break
        case '=':
            numero2 = output.innerHTML
            output.innerHTML = calcularValor(
            
                parseInt(numero1),
                parseInt(numero2),
                operacion
            )
           
        break
        case '0':

            output.innerHTML = output.innerHTML + valor
        break
        case '1':

            output.innerHTML = output.innerHTML + valor
        break
        case '2':

            output.innerHTML = output.innerHTML + valor
        break
        case '3':

            output.innerHTML = output.innerHTML + valor
        break
        case '4':

            output.innerHTML = output.innerHTML + valor
        break
        case '5':

            output.innerHTML = output.innerHTML + valor
        break
        case '6':

            output.innerHTML = output.innerHTML + valor
        break
        case '7':

            output.innerHTML = output.innerHTML + valor
        break
        case '8':

            output.innerHTML = output.innerHTML + valor
        break
        case '9':

            output.innerHTML = output.innerHTML + valor
        break
        
        
        
        


    }

    // output.innerHTML = `Seleccionamos a ${valor}`
    console.log(valor)
    console.log(numero1)
    console.log(numero2)
    console.log(suma)
}

document.querySelector('#boton1').addEventListener('click', selecionarcosas)
document.querySelector('#boton2').addEventListener('click', selecionarcosas)
document.querySelector('#boton3').addEventListener('click', selecionarcosas)
document.querySelector('#boton4').addEventListener('click', selecionarcosas)
document.querySelector('#boton5').addEventListener('click', selecionarcosas)
document.querySelector('#boton6').addEventListener('click', selecionarcosas)
document.querySelector('#boton7').addEventListener('click', selecionarcosas)
document.querySelector('#boton8').addEventListener('click', selecionarcosas)
document.querySelector('#boton9').addEventListener('click', selecionarcosas)
document.querySelector('#boton0').addEventListener('click', selecionarcosas)
document.querySelector('#suma').addEventListener('click', selecionarcosas)
document.querySelector('#resta').addEventListener('click', selecionarcosas)
document.querySelector('#multi').addEventListener('click', selecionarcosas)
document.querySelector('#divi').addEventListener('click', selecionarcosas)
document.querySelector('#borrar').addEventListener('click', selecionarcosas)
document.querySelector('#igual').addEventListener('click', selecionarcosas)
    
