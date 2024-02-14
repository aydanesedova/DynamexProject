$(document).ready(function(){
    $('.open').click(function(){
        $(this).css("display", "none");
        $(this).next().css("display", "block");
        $(this).parent().next().slideDown();
        
    });
    $('.close').click(function(){
        $(this).css("display", "none");
        $(this).prev().css("display", "block");
        $(this).parent().next().slideUp();
    });
});





// $(document).ready(function(){ ... }): Bu kod, sayfanın tamamen yüklenmesini bekler ve ardından içindeki JavaScript kodunu çalıştırır. Bu, sayfanın hazır olduğunda jQuery kodlarının çalışmasını sağlar.

// $('.open').click(function(){ ... }): Sayfadaki herhangi bir öğe üzerinde "open" sınıfına sahip bir öğeye tıklandığında bu fonksiyon çalışır. Yani, bir öğe üzerine tıklama işlemi gerçekleştiğinde, bu fonksiyon çalışır.

// $(this).css("display", "none");: Tıklanan öğenin ($(this)) CSS stil özelliğini "display" değeri "none" olarak ayarlar. Yani, tıklanan öğe gizlenir.
// $(this).next().css("display", "block");: Tıklanan öğenin bir sonraki kardeş öğesinin ($(this).next()) CSS stil özelliğini "display" değeri "block" olarak ayarlar. Yani, tıklanan öğenin bir sonraki kardeşi görünür hale gelir.
// $(this).parent().next().slideDown();: Tıklanan öğenin ebeveyninin ($(this).parent()) bir sonraki kardeş öğesini seçer (next()) ve aşağı doğru bir kaydırma efekti uygular (slideDown()). Yani, tıklanan öğenin ebeveyninin bir sonraki kardeşi aşağı doğru kaydırılır.
// $('.close').click(function(){ ... }): Sayfadaki herhangi bir öğe üzerinde "close" sınıfına sahip bir öğeye tıklandığında bu fonksiyon çalışır. Yani, bir öğe üzerine tıklama işlemi gerçekleştiğinde, bu fonksiyon çalışır.

// $(this).css("display", "none");: Tıklanan öğenin ($(this)) CSS stil özelliğini "display" değeri "none" olarak ayarlar. Yani, tıklanan öğe gizlenir.
// $(this).prev().css("display", "block");: Tıklanan öğenin bir önceki kardeş öğesinin ($(this).prev()) CSS stil özelliğini "display" değeri "block" olarak ayarlar. Yani, tıklanan öğenin bir önceki kardeşi görünür hale gelir.
// $(this).parent().next().slideUp();: Tıklanan öğenin ebeveyninin ($(this).parent()) bir sonraki kardeş öğesini seçer (next()) ve yukarı doğru bir kaydırma efekti uygular (slideUp()). Yani, tıklanan öğenin ebeveyninin bir sonraki kardeşi yukarı doğru kaydırılır.









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
