// Cursor ucun js

$(document).ready(function () {
    $("#lang-all").click(function () {
        $("#lang-drop-down").toggleClass("open");
        $("#chevron").toggleClass("chevron-toggle");
    });
    $("#aze").click(function () {
        $("#aze").toggleClass("selected");
        $("#eng").removeClass("selected");
        $("#rus").removeClass("selected");
        $("#lang").text("AZ");
    });
    $("#eng").click(function () {
        $("#eng").toggleClass("selected");
        $("#aze").removeClass("selected");
        $("#rus").removeClass("selected");
        $("#lang").text("EN");
    });
    $("#rus").click(function () {
        $("#rus").toggleClass("selected");
        $("#aze").removeClass("selected");
        $("#eng").removeClass("selected");
        $("#lang").text("RU");
    });
});
$(window).on("load", function () {
    $('#preloader').fadeOut('slow');
    $('body').css('overflow', 'visible');
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


