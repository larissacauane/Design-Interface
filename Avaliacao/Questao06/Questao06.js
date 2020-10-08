function calcular(){
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const codigo = document.getElementById("codigo").value

    switch(codigo){
        case "1":
            resultado = num1 + num2
            document.getElementById("resultado").value = resultado
            break
        case "2":
            resultado = num1 * num2
            document.getElementById("resultado").value = resultado
            break
        case "3":
            resultado = num1 / num2
            document.getElementById("resultado").value = resultado
            break
        default:
            document.getElementById("situacao").innerText = "O código precisa ser 1, 2 ou 3"
    }
}