const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(event){
    console.log(event)
    console.log(event.target)
    
    // // using if 
    // if(event.target.id === 'grey'){
    //   body.style.backgroundColor = event.target.id
    // }
    // if(event.target.id === 'white'){
    //   body.style.backgroundColor = event.target.id
    // }
    // if(event.target.id === 'blue'){
    //   body.style.backgroundColor = event.target.id
    // }
    // if(event.target.id === 'yellow'){
    //   body.style.backgroundColor = event.target.id
    // }


    // // using switch
    switch(event.target.id){
      case 'grey':
        body.style.backgroundColor = 'grey'
        break
      case 'white':
        body.style.backgroundColor = 'white'
        break
      case 'blue':
        body.style.backgroundColor = 'blue'
        break
      case 'yellow':
        body.style.backgroundColor = 'yellow'
        break
    }
  })
})