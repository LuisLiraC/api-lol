async function fetchData() {
  try {
    const data = await fetch(`https://api-lol.herokuapp.com/api/champions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: "New Champion"
        // more data
      }
    }).then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

async function fetchData() {
  try {
    const data = await fetch(`https://api-lol.herokuapp.com/api/champions/gnar`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: "New data"
        // more data
      }
    }).then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}


async function fetchData() {
  try {
    const data = await fetch(`https://api-lol.herokuapp.com/api/champions/gnar`, {
      method: 'DELETE',
    }).then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}