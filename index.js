const container = document.getElementById('root');

(async () => {
  const response = await axios({
    url: 'http://localhost:4000/habittracker/habits',
    method: 'get'
  })
    .then(response => {
      let data = response.data;

      //loop through the data
      data.forEach(habit => {
        //Create element, set attributes and append element
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        container.appendChild(card)

        const content = document.createElement('div')
        content.setAttribute('class', 'content')
        card.appendChild(content)

        const input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        content.appendChild(input)

        const p = document.createElement('p')
        p.setAttribute('class', 'habit-title')
        p.textContent = habit.title
        content.appendChild(p)

        const edit = document.createElement('div')
        edit.setAttribute('class', 'edit')
        card.appendChild(edit)

        edit.insertAdjacentHTML('beforeend', '<p class="iconify" data-icon="clarity:edit-solid" data-inline="false" style="color: purple;"></p>');
        edit.insertAdjacentHTML('beforeend', '<p class="iconify" data-icon="carbon:delete" data-inline="false" style="color: purple;"></p>');

      })
    })
    .catch(err => {
      console.log(err)
    })
})()

