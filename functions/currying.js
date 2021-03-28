let sumTax = (tax) =>  {         //1. cria uma função para a taxa e outra para o preço.
    let totalPrice = (price) => {
        return price * (1 + tax)  //3. a função de preço totalPrice retorna sua soma.
    }
    return totalPrice //4. a função de taxa sumTax retorna a função totalPrice.
}
//totalPrice é uma função que precisa retornar algo, assim como sumTax também precisa retornar algo, por isso dois returns, se não o resultado volta undefined. Estamos trabalhando com duas funções, uma dentro da outra, cada uma retorna alguma coisa.

let totalTax = sumTax(0.0875)  //2. Coloca a função de calcular taxa dentro de uma variável. O motivo é que a taxa tem um valor fixo, então coloca-se dentro de uma var e reutiliza.

console.log(totalTax(25)) //5. chama a variável que guarda o valor fixo da taxa e coloca o parâmetro de preço (price) nela.


// Each argument is taken one at a time. If the function had more parameters, it could simply continue to return new functions until all of the arguments are supplied and the application can be completed.

//-------------------------------------

    let desconto = desc => {   //1. cria uma função apenas para o preço porque ele se repete.
        let preco = prec => {  //2. cria uma função para o valor que é sempre variado.
        return prec - desc
    }
    return preco
}

let desconto30 = desconto(30) //3. coloca o valor fixo(desconto) em uma variável
let desconto20 = desconto(20) // cada variável dessas remete a um tipo de desconto
let desconto10 = desconto(10)

console.log(desconto30(230))  //na chamada, coloca a variável do desconto e o valor da compra como parâmtro.
//console: 200