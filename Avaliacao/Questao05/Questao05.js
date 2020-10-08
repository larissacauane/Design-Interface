function calcular(){
    const nome = document.getElementById("nome").value
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const num3 = parseFloat(document.getElementById("num3").value)
    const media = (num1 + num2 + num3) / 3
    document.getElementById("resultado").value = media.toFixed(1)

    const situacao = document.getElementById("situacao")
    const aprovacao = media >= 8 ? situacao.innerText = `${nome} você foi aprovado(a) com média ${media.toFixed(1)}` : situacao.innerText = `${nome} você foi reprovado(a) com média ${media.toFixed(1)}`
    


    
}