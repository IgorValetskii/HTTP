
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
    // let promise = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e.value}&appid=cffea4225b5b5f791c6da44c597920a2&units=metric&lang=ru`);
    let promise = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e.value}&appid=cffea4225b5b5f791c6da44c597920a2&units=metric`);
    let result = await promise.json();
    //console.log(`Текущая температура в ${e.value}е ${result.main.temp}°С`);

    console.log(result.list);
    console.log(result.list[0].dt_txt);
    result.list.forEach((item,index) => {
        const newTd = document.createElement('td');

        newTd.innerText = result.list[index].dt_txt;
        newTd.innerText += ` \n ${result.list[index].main.temp}°С`;
        newTd.innerHTML += `<img src="http://openweathermap.org/img/wn/${result.list[index].weather[0].icon}.png">`;

        newTd.className ='weather';
        // const el = document.getElementById('1');
        // el.append(newTd);


        if(index < 8){
        const el = document.getElementById('1');
        el.append(newTd);
        }

        if(index >= 8 && index < 16){
            const el = document.getElementById('2');
            el.append(newTd);
        }

        if(index >= 16 && index < 24){
            const el = document.getElementById('3');
            el.append(newTd);
        }

        if(index >= 24 && index < 32){
            const el = document.getElementById('4');
            el.append(newTd);
        }

        if(index >= 32){
            const el = document.getElementById('5');
            el.append(newTd);
        }

    })
};

// let c = document.getElementById('show-weather');
// c.addEventListener("click", showWeather());



