// const people = [
//   {name: 'Nader', age: 36},
//   {name: 'Amanda', age: 24},
//   {name: 'Jason', age: 44},
// ];
function getMoviesFromApiAsync() {
  return fetch('http://57c64baac1fc8711008f2a82.mockapi.io/book')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

const people = getMoviesFromApiAsync(); 
  

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people);
    }, 3000);
  });
};
