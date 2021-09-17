//funcao para clicar e guardar numero digitado

function insert(num)
{
   const numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}


//funcao para  limpar numero
function clean() 
{
    document.getElementById('resultado').innerHTML= " ";
}

//funcao para apagar um numero
function back()
{
 const resultado = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

//funcao para calcular
function calcular()
{
    const resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}