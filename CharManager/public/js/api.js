const myHeaders = new Headers();
myHeaders.append("Authorization", "da468b89-2bf8-4e2b-a939-79c6e6ef25ce");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.pathfinder2.fr/v1/pf2/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));