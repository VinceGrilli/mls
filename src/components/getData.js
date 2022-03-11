const GetData = () => {
const myRequest = new Request('https://sparkapi.com/v1/listings', {
  method: 'GET',
  headers: {
    Authorization: "Bearer 2kmwmiveety3igk80x83wooq",
    Accept: 'application/json',
    //TODO figure out how to pass this header!
    'X-SparkApi-User-Agent' : MyApplication
  }
})

fetch(myRequest)
  .then(response => {
    console.log(response.json())
  })
}
export default GetData;