const $json = document.getElementById('json')
const $fetch = document.getElementById('fetch')
const $form = document.getElementById('form')

$fetch.addEventListener('click', (event) => {
  event.preventDefault()
  let champion = $form.elements.champion.value
  $json.value = "Searching..."
  fetchData(champion)
})

async function fetchData(champion) {
  try {
    const data = await fetch(`https://api-lol.herokuapp.com/api/champions/${champion}`).then(response => response.json())
    const pretty = JSON.stringify(data, undefined, 4)
    $json.value = pretty
  } catch (error) {
    console.log(error)
    $json.value = "We could not find the champion you were looking for :("
  }
}