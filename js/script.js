    const square = $('#square')
    const btnVermelho = $('#btnVermelho')
    const btnAzul = $('#btnAzul')
    const escrever = $('#escrever')
    const text = $('#text')

    btnVermelho.click(function() {
      square.css ('background-color', 'red')
      square.css ('color', 'white')
    })

    btnAzul.click(function() {
      square.css ('background-color', 'blue')
      square.css ('color', 'white')
    })
      

    escrever.click(function() {
        const myText = 'Criar Texto '
        var i = 0

      setInterval(() => {
        text.append (myText.charAt(i))
        i++
      }, 100)

    })