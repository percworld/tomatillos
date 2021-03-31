export const getData = () => {
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => {
        if(response.ok){
          return response.json()
        } else {
          throw new Error('This isn\'t working')
        }
      })
}