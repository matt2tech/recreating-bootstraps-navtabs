function myFunction() {
    var nav = document.querySelectorAll(".nav-item");
    var tab = document.querySelectorAll(".tab-pane");
    nav.forEach(function(x) {
        x.addEventListener("click", function() {
            for (var i = 0; i < nav.length; i++) {
                nav[i].classList.remove("active");
                tab[i].classList.remove("active");
                x.classList.add("active");
            }
            num = Array.from(nav).indexOf(x);
            tab[num].classList.add("active");
        });
    });
}

myFunction();
