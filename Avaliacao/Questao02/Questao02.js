function calcular(){
    const salario = parseFloat(document.getElementById("salario").value)   
    const calculo = salario + ((salario * 10) / 100)
    
    document.getElementById("novoSalario").value = calculo.toFixed(2)
}