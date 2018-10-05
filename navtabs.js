function myFunction() {
        var nav = document.querySelectorAll('.nav-item');
        var tab = document.querySelectorAll('.tab-pane');
        nav.forEach(function(x) {
            var num = nav.indexOf(x);
            var btn = x.querySelector(x[num])
            btn.addEventListener('click', function() {
                x.classList.toggle('show', 'active')
            })
        })
    }

myFunction()
