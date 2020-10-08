function calcular(){
    const produto = parseFloat(document.getElementById("produto").value)

    const select = document.getElementById("parcelas")
    const parcelas = select.options[select.selectedIndex].value

    switch(parcelas){
        case "parcelar3":
            preco = produto + ((produto * 10)/100)
            document.getElementById("preco").value = preco
            parcela = preco / 3
            document.getElementById("parcela").value = parcela.toFixed(2)
            break

        case "parcelar5":
            preco = produto + ((produto * 20)/100)
            document.getElementById("preco").value = preco
            parcela = preco / 5
            document.getElementById("parcela").value = parcela.toFixed(2)
            break
    }
}