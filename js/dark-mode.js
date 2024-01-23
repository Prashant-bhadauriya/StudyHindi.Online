document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
        const darkModeToggle = document.getElementById('darkModeToggle');
        // const toggleLabel = document.querySelector('.toggle-label');
        const icon = document.querySelector('#darkModeToggle i');

        // Check the user's dark mode preference
        const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Initialize dark mode based on user preference
        if (isDarkModePreferred) {
            enableDarkMode();
        }

        // Listen for button click
        darkModeToggle.addEventListener('click', function () {
            toggleDarkMode();
        });

        // Function to toggle between light and dark modes
        function toggleDarkMode() {
            if (body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        }

        // Functions to enable and disable dark mode
        function enableDarkMode() {
            body.classList.add('dark-mode');
            darkModeToggle.classList.add('active');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            // toggleLabel.textContent = 'Light Mode';
        }

        function disableDarkMode() {
            body.classList.remove('dark-mode');
            darkModeToggle.classList.remove('active');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            // toggleLabel.textContent = 'Dark Mode';
        }
    });
