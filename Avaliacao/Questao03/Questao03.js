function calcular(){
    const valorA = parseFloat(document.getElementById("valorA").value)
    const valorB = parseFloat(document.getElementById("valorB").value)

    const valorC = valorA == valorB ? valorA + valorB : valorA * valorB

    document.getElementById("valorC").value = valorC

}