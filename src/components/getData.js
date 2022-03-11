const GetData = fetch('http://sparkapi.com/v1/standardfields')
  .then(response => response.json())
  .then(data => console.log(data))
export default GetData