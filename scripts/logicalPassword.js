import logicalTimer from "./logicalTimer.js"
export default function logicalPassword(){

    const $ = document.querySelector.bind(document)
    const user = $("#user")
    const password = $("#password")
    const botao = $("#buttonLogin button")

    const msgError = $("#textErro p")
    const bordaText = $("#textInput")
    const bordaPassword = $("#passwordInput")

    const loginPage = $("#login")
    const homePage = $("#home")
    const footer = $("#containerFooter")


    botao.addEventListener("click", () => {
        if(user.value === "admin" && password.value === "admin"){
        loginPage.style.display = "none"
        homePage.style.display = "block"
        footer.style.display = "block"
        document.title = "Home - Compass"
        logicalTimer()
        // history.pushState(null, "Home - Compass", "https://renatoprestes76.github.io/ProjetoCompassUol1/Home")
        } else {
            msgError.style.visibility = "visible"
            bordaText.style.border = "1px solid #E9B425"
            bordaPassword.style.border = "1px solid #E9B425"
            user.value = ""
            password.value = ""
        }
    });
}