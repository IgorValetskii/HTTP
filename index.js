
const req = async load => {
    let promise = await fetch(`./data.json`);
    let result = await promise.json();
    let p = result.city;
    let e = document.getElementById('enter-city');

        if(e.value.length > 3 ){

        let f = p.filter(item => {
        let e = document.getElementById('enter-city');
        const textMatch = new RegExp(`^${e.value}`, 'gi');
        return item.name.match(textMatch)
        });

        f.forEach(item => {
        let e = document.getElementById('city');
        e.innerHTML +=`<option value="${item.name}" onclick="showWeather()">`
        })
    }
};
req();

let e = document.getElementById('enter-city');
e.addEventListener("input", req);


const showWeather = async load => {
    let e = document.getElementById('enter-city');
    let promise = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e.value}&appid=cffea4225b5b5f791c6da44c597920a2&units=metric`);
    let result = await promise.json();

    const el = document.getElementById('1');
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    const el2 = document.getElementById('2');
    while (el2.firstChild) {
        el2.removeChild(el2.firstChild);
    }
    const el3 = document.getElementById('3');
    while (el3.firstChild) {
        el3.removeChild(el3.firstChild);
    }
    const el4 = document.getElementById('4');
    while (el4.firstChild) {
        el4.removeChild(el4.firstChild);
    }
    const el5 = document.getElementById('5');
    while (el5.firstChild) {
        el5.removeChild(el5.firstChild);
    }

    result.list.forEach((item,index) => {
        const newTd = document.createElement('td');

        newTd.innerText = result.list[index].dt_txt;
        newTd.innerText += ` \n ${result.list[index].main.temp}°С`;
        newTd.innerHTML += `<img src="http://openweathermap.org/img/wn/${result.list[index].weather[0].icon}.png">`;
        newTd.className ='weather';

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




