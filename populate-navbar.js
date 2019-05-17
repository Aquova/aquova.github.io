document.addEventListener('DOMContentLoaded', populate, false);

function populate() {
    // Automatically adds items to the navbar, so I don't have to do it page by page
    var nav = document.getElementById("navbar")
    var list = nav.appendChild(document.createElement("ul"))

    var home = document.createElement("li")
    home.classList.add("left")
    var homeLink = document.createElement("a")
    homeLink.href = "https://austinbricker.com"
    homeLink.innerHTML = "Home"
    home.appendChild(homeLink)
    list.appendChild(home)

    var pico = document.createElement("li")
    pico.classList.add("right")
    var picoLink = document.createElement("a")
    picoLink.href = "https://austinbricker.com/pico8/piconian.html"
    picoLink.innerHTML = "Piconian"
    pico.appendChild(picoLink)
    list.appendChild(pico)

    var KCE = document.createElement("li")
    KCE.classList.add("right")
    var KCELink = document.createElement("a")
    KCELink.href = "https://austinbricker.com/KCE"
    KCELink.innerHTML = "Kirby Color Editor"
    KCE.appendChild(KCELink)
    list.appendChild(KCE)

    var KA = document.createElement("li")
    KA.classList.add("right")
    var KALink = document.createElement("a")
    KALink.href = "https://austinbricker.com/me.html"
    KALink.innerHTML = "Social Media"
    KA.appendChild(KALink)
    list.appendChild(KA)
}
