async function GetData(url = 'http://sparkapi.com/v1/standardfields', data={}){
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: "Bearer ere5inazu2mtk1fpzn08xqpfh",
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  });
  console.log(response.json)
  return response.json();
}
export default GetData;