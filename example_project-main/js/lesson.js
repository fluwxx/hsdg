const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExp =  /n/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)) {
        phoneResult.innerText = "klhdkhl";
        phoneResult.style.color = "green"
    }
    else{
        phoneResult.innerText = "klhdkhl";
        phoneResult.style.color = "red"
    }

}

let news = prompt();

console.log(news.match(regExp));



// let one = 123123;


// console.log(news.match(regExp));
