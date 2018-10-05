function myFunction() {
        var nav = document.querySelectorAll('.nav-item');
        var tab = document.querySelectorAll('.tab-pane');
        nav.forEach(function(x) {
            x.addEventListener('click', function() {
                x.classList.toggle('show')
                x.classList.toggle('active'
            })
        })
    }

myFunction()
