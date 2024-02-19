document.addEventListener('DOMContentLoaded', function () {
    // Profile Dropdown Toggle
    const profileDropdown = document.getElementById('profile-dropdown');
    const chevronDownIcon = document.getElementById('chevron-down-icon');
    const containerProfile = document.querySelector('.container-profile');

    if (profileDropdown && chevronDownIcon && containerProfile) {
        profileDropdown.addEventListener('click', function () {
            chevronDownIcon.classList.toggle('rotate');
            containerProfile.style.display = containerProfile.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Mobile Navigation Toggle
    const navToggle = document.getElementById("navToggle");
    const hamburgerLines = document.querySelector(".hamburger-lines");
    const dropdownMenu = document.getElementById("dropDownMenu");

    if (navToggle && hamburgerLines && dropdownMenu) {
        navToggle.addEventListener("change", function () {
            hamburgerLines.classList.toggle("checked", this.checked);
            dropdownMenu.style.transform = this.checked ? "translateX(0)" : "translateX(-150%)";
        });
    }

    // Toggle Notification and Messages Menus
    toggleMenuOnClick('.notification', '.notification > .menu');
    toggleMenuOnClick('.messages', '.messages > .menu');

    // Close Menus When Clicking Outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.notification, .messages, .right-profile')) {
            closeAllMenus(['notification', 'messages']);
        }
    });

    function toggleMenuOnClick(triggerSelector, menuSelector) {
        const trigger = document.querySelector(triggerSelector);
        const menu = document.querySelector(menuSelector);

        if (trigger && menu) {
            trigger.addEventListener('click', function (e) {
                e.stopPropagation(); // Prevent click from reaching document
                menu.classList.toggle('--active');
            });

            menu.addEventListener('click', function (e) {
                e.stopPropagation(); // Prevent menu click from closing itself
            });
        }
    }

    function closeAllMenus(selectors) {
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(`.${selector} > .menu`);
            elements.forEach(element => {
                if (element.classList.contains('--active')) {
                    element.classList.remove('--active');
                }
            });
        });
    }
});
