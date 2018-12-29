var pub_down = false
var exp_down = false
var tae_down = false
var proj_down = false
var misc_down = false

function dispButton(button) {
    document.getElementById("res_exp").style.display = "none"
    document.getElementById("prof_exp").style.display = "none"
    document.getElementById("pub").style.display = "none"
    document.getElementById("proj").style.display = "none"
    document.getElementById("teach").style.display = "none"
    document.getElementById("ed").style.display = "none"
    document.getElementById("xtra").style.display = "none"
    document.getElementById("conf").style.display = "none"
    document.getElementById("read").style.display = "none"
    if (button === "exp") {
        exp_down = !exp_down
        pub_down = false
        tae_down = false
        proj_down = false
        misc_down = false
        if (!exp_down) {
            showAll()
            document.getElementById("exp_but").classList.remove("pressed")
        } else {
            document.getElementById("res_exp").style.display = "block"
            document.getElementById("prof_exp").style.display = "block"
            removeButton()
            document.getElementById("exp_but").classList.add("pressed")
        }
    } else if (button == "pub") {
        pub_down = !pub_down
        exp_down = false
        tae_down = false
        proj_down = false
        misc_down = false
        if (!pub_down) {
            showAll()
            document.getElementById("pub_but").classList.remove("pressed")
        } else {
            document.getElementById("pub").style.display = "block"
            removeButton()
            document.getElementById("pub_but").classList.add("pressed")
        }
    } else if (button === "tae") {
        tae_down = !tae_down
        exp_down = false
        pub_down = false
        proj_down = false
        misc_down = false
        if (!tae_down) {
            showAll()
            document.getElementById("tae_but").classList.remove("pressed")
        } else {
            document.getElementById("teach").style.display = "block"
            document.getElementById("ed").style.display = "block"
            removeButton()
            document.getElementById("tae_but").classList.add("pressed")
        }
    } else if (button === "proj") {
        proj_down = !proj_down
        exp_down = false
        pub_down = false
        tae_down = false
        misc_down = false
        if (!proj_down) {
            showAll()
            document.getElementById("proj_but").classList.remove("pressed")
        } else {
            document.getElementById("proj").style.display = "block"
            removeButton()
            document.getElementById("proj_but").classList.add("pressed")
        }
    } else if (button === "misc") {
        misc_down = !misc_down
        exp_down = false
        pub_down = false
        tae_down = false
        proj_down = false
        if (!misc_down) {
            showAll()
            document.getElementById("misc_but").classList.remove("pressed")
        } else {
            document.getElementById("xtra").style.display = "block"
            document.getElementById("conf").style.display = "block"
            document.getElementById("read").style.display = "block"
            removeButton()
            document.getElementById("misc_but").classList.add("pressed")
        }
    }
}

function showAll() {
    document.getElementById("res_exp").style.display = "block"
    document.getElementById("prof_exp").style.display = "block"
    document.getElementById("pub").style.display = "block"
    document.getElementById("proj").style.display = "block"
    document.getElementById("teach").style.display = "block"
    document.getElementById("ed").style.display = "block"
    document.getElementById("xtra").style.display = "block"
    document.getElementById("conf").style.display = "block"
    document.getElementById("read").style.display = "block"
}

function removeButton() {
    document.getElementById("exp_but").classList.remove("pressed")
    document.getElementById("pub_but").classList.remove("pressed")
    document.getElementById("tae_but").classList.remove("pressed")
    document.getElementById("proj_but").classList.remove("pressed")
    document.getElementById("misc_but").classList.remove("pressed")
}