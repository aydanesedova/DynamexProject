$(document).ready(function(){
    $('.türkiye').click(function(){
        $(".usa").removeClass("active");
        $(this).addClass("active");
        $(".from-usa").hide();
        $(".from-türkiye").fadeIn("slow");    
    });
    $('.usa').click(function(){
        $(".türkiye").removeClass("active");
        $(this).addClass("active");
        $(".from-türkiye").hide();
        $(".from-usa").fadeIn("slow");
    });
    $('.branch').click(function(){
        $(".home").removeClass("focus");
        $(this).addClass("focus");
        $(".to-address").hide();
        $(".to-branch").fadeIn("slow");  
    });
    $('.home').click(function(){
        $(".branch").removeClass("focus");
        $(this).addClass("focus");
        $(".to-branch").hide();
        $(".to-address").fadeIn("slow");
    });
});



// ABS Turkiye => Filiala catdirilma unvana catdirilma



// sayfanın yüklenmesi tamamlandığında ($(document).ready()), 
// belirli HTML öğelerine tıklama olaylarını ele alır ve 
// bu tıklamalara yanıt olarak belirli işlemleri gerçekleştirir.





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
