// $(document).ready(function(){
//     $(".calculate").click(function(){
//         let dimensions = [];
//             dimensions.push(parseInt($("#width").val()));
//             dimensions.push(parseInt($("#length").val()));
//             dimensions.push(parseInt($("#height").val()));
//             dimensions.push(parseFloat($("#weight").val()));

//         Calculate(dimensions);

//         function Calculate (dimensions){
//             $("#result").text("0.00");
//             let result = dimensions[0] + dimensions[1] + dimensions[2] + dimensions[3];
//             var countUp = new CountUp("result", 0.00, result, 2, 0.4);
//             countUp.start();
//         }
//     });
// }); 


document.addEventListener('DOMContentLoaded', function () {
    var calculateBtn = document.querySelector('.calculate');

    calculateBtn.addEventListener('click', function () {
        var widthInput = document.getElementById('width');
        var lengthInput = document.getElementById('length');
        var heightInput = document.getElementById('height');
        var weightInput = document.getElementById('weight');

        // Input değerlerini alırken boş olanları 0 olarak ayarla
        var width = parseFloat(widthInput.value) || 0;
        var length = parseFloat(lengthInput.value) || 0;
        var height = parseFloat(heightInput.value) || 0;
        var weight = parseFloat(weightInput.value) || 0;

        var volume = width * length * height;

        var shippingCost;

        if (weight <= 0 || volume <= 0) {
            shippingCost = 0;
            return;
        }

        if (weight <= 1) {
            shippingCost = 5;
        } else {
            shippingCost = 5 + (weight - 1) * 4; 
        }

        document.getElementById('result').textContent = shippingCost.toFixed(2);
    });
});



const userbtn = document.querySelector('.login-button')
const logout = document.getElementById("logout")
const signUp = document.getElementById("signUp")
const signIn = document.querySelector(".sign-in")
const navSign = document.querySelector("#navSign")

const checkUser = () => {
    loggedUser = JSON.parse(localStorage.getItem('loggedin'))
    if (loggedUser) {
        userbtn.textContent = loggedUser.name + " " + loggedUser.surname
        signUp.style.display = "none"
        signIn.style.display = "none"
        navSign.style.display = "none"


    }
}


const logOut = () => {
    loggedUser = JSON.parse(localStorage.getItem('loggedin'))
    if (loggedUser) {
        localStorage.removeItem("loggedin")


    }
}

logout.addEventListener('click', logOut)



checkUser()


document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector('.login-button');
    const myAccount = document.querySelector('.myAccount');

    // Eğer loginButton varsa ve myAccount varsa
    if (loginButton && myAccount) {
        // loginButton'a tıklama olayı ekle
        loginButton.addEventListener('click', function () {
            // myAccount'ın display özelliğini kontrol et ve değiştir
            if (myAccount.style.display === 'none' || myAccount.style.display === '') {
                myAccount.style.display = 'block';
            } else {
                myAccount.style.display = 'none';
            }
        });
    }
});
