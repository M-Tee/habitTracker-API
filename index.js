// const view = document.getElementsByClassName('view');


(async () => {
  const response = await axios({
    url: 'http://localhost:4000/habittracker/habits',
    method: 'get'
  })
  // .then(response => {
  //   let habits = response.habits
  //   console.log(habits)
  // })

  console.log(response.data);
  //     url: 'https://ghibliapi.herokuapp.com/films',
  //     method: 'get'
  // })
  //     .then(response => {
  //         console.log(data)

  //         data.forEach(movie => {
  //             const card = document.createElement('div')
  //             card.setAttribute('class', 'card')

  //             const h1 = document.createElement('h1')
  //             h1.textContent = movie.title

  //             const p = document.createElement('p')
  //             movie.description = movie.description.substring(0, 300) //llimiting to 300 chracters
  //             p.textContent = `${movie.description}...`

  //             container.appendChild(card)
  //             card.appendChild(h1)
  //             card.appendChild(p)
  //         })
  //     })
  //     .catch(err => {
  //         console.log(err)
  //     })
})()

