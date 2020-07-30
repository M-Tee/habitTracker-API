const container = document.getElementById('root');


(async () => {
  const response = await axios({
    url: 'http://localhost:4000/habittracker/habits',
    method: 'get'
  })
    .then(response => {
      let data = response.data;

      data.forEach(habit => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        container.appendChild(card)

        const input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        card.appendChild(input)
  
        const p = document.createElement('p')
        p.setAttribute('class', 'habit-title')
        p.textContent = habit.title
        card.appendChild(p)

        // const editIcon = document.createElement('i');
        // editIcon.setAttribute('class','fa fa-check-circle-o');
        // card.appendChild(editIcon)
      })
    })
    .catch(err => {
      console.log(err)
    })
})()

