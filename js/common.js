
const main_menu = document.querySelectorAll('.main_menu > li');
const sub_menus = document.querySelectorAll('.depth_2');

main_menu.forEach(menu_item => {
    menu_item.addEventListener('mouseover', () => {
        const submenu = menu_item.querySelector('.depth_2');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });

    menu_item.addEventListener('mouseout', () => {
        const submenu = menu_item.querySelector('.depth_2');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});
