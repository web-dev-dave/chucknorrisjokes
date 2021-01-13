document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
  // console.log('This is a joke')
  const number = document.getElementById('number').value

  // console.log(number)
  const xhr = new XMLHttpRequest

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

  xhr.onload = function() {
    
    if (xhr.status === 200) {
      // console.log(this.responseText)

      let output = ''

      const response = JSON.parse(this.responseText)
      // console.log(response)

      if (response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`
        })

        console.log(output)
        document.querySelector('.jokes').innerHTML = output
      }

      
    } else {
      document.querySelector('.jokes').innerHTML = 'Something went wrong'
    }
  }

  xhr.send()

  e.preventDefault()
}