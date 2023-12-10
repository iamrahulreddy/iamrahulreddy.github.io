var menu = document.getElementById('menu');
        var menuBtn = document.getElementById('menuBtn');
        var closeBtn = document.getElementById('closeBtn');

        menuBtn.addEventListener('click', function() {
            toggleMenu();
        });

        closeBtn.addEventListener('click', function() {
            toggleMenu();
        });

        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && e.target !== menuBtn) {
                if (menu.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });

        function toggleMenu() {
            menu.classList.toggle('active');

            if (menu.classList.contains('active')) {
                gsap.from('.menu a', {opacity: 0, y: -50, stagger: 0.2, delay: 0.2});
            }
        }