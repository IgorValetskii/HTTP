const params = {
    access_key: 'b789446123c59c2315cca1e291e75c57',
    query: 'Minsk'
};

// const func = (async load =>{
//     let promise = await fetch(`http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`, {method:`GET`});
//     let result =  await promise.json();
//     console.log(`Current temparture in ${result.location.name} is ${result.current.temperature}℃`);
// })();
// func();






const req = async load => {
    let promise = await fetch(`./data.json`);
    let result = await promise.json();
    let p = result.city;
    // console.log(p);
    let e = document.getElementById('enter-city');
    // console.log(e.value);
    if(e.value.length > 3 ){
    let f = p.filter(item => {
        let e = document.getElementById('enter-city');
        const textMatch = new RegExp(`^${e.value}`, 'gi');
        return item.name.match(textMatch)
    });
    console.log(f);
    f.forEach(item => {
        let e = document.getElementById('city');
        e.innerHTML +=`<option value="${item.name}">`
    })
    }
    // f && true ? console.log(f): '';
    // f && true ? addVariant(f)(): '';
    // f === true ? console.log(f.item) : console.log('города не существует');
};
req();

let e = document.getElementById('enter-city');
e.addEventListener("input", req);


const showWeather = async load => {
    let e = document.getElementById('enter-city');
    let promise = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.value}&appid=cffea4225b5b5f791c6da44c597920a2&units=metric&lang=ru`);
    let result = await promise.json();
    console.log(`Current temparture in ${result.name} is ${result.main.temp}°С`);
};

// let c = document.getElementById('show-weather');
// c.addEventListener("click", showWeather());
// const req = new XMLHttpRequest();

// req.open('GET',`http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`,true );
// req.send();
// req.responseType ='text';
// req.onload = function() {
//     const apiResponse = req.response;
//     const result = JSON.parse(apiResponse);
//     console.log(`Current temparture in ${result.location.name} is ${result.current.temperature}℃`);
// };

