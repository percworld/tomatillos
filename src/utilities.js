const getData = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('This request isn\'t available')
      }
    })
}

const getMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('This movie isn\'t in our Data')
      }
    })
}

export { getData, getMovie };