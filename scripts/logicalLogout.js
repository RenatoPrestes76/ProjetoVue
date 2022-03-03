export default function logicalLogout(){
    const $ = document.querySelector.bind(document)
    const botaoLogout = $("#logout")

    botaoLogout.addEventListener("click", ()=> {
        // history.pushState(null, "Login - Compass", "https://renatoprestes76.github.io/ProjetoCompassUol1")
        window.location.reload()
    })

}