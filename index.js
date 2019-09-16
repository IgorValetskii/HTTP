const params = {
    access_key: 'b789446123c59c2315cca1e291e75c57',
    query: 'Minsk'
};

const func = async load =>{
    let promise = await fetch(`http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`, {method:`GET`});
    let result =  await promise.json();
    console.log(`Current temparture in ${result.location.name} is ${result.current.temperature}℃`);
};
func();


// const req = new XMLHttpRequest();

// req.open('GET',`http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`,true );
// req.send();
// req.responseType ='text';
// req.onload = function() {
//     const apiResponse = req.response;
//     const result = JSON.parse(apiResponse);
//     console.log(`Current temparture in ${result.location.name} is ${result.current.temperature}℃`);
// };

