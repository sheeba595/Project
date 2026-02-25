// Menu array
const menuItems = [
    { name: "Dashboard", link: "#" },
    { name: "Users", link: "#", submenu: [
        { name: "Add User", link: "#" },
        { name: "Manage Users", link: "#" },
    ]},
    { name: "Products", link: "#", submenu: [
        { name: "Add Product", link: "#" },
        { name: "Manage Products", link: "#" },
    ]},
    { name: "Settings", link: "#" },
];

// Function to generate menu
function generateMenu(menuArray, parentElement) {
    const ul = document.createElement('ul');
    menuArray.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;

        if (item.submenu) {
            li.classList.add('has-submenu');
            const submenu = generateMenu(item.submenu, li);
            submenu.classList.add('submenu');
            li.appendChild(submenu);

            li.addEventListener('click', (e) => {
                e.stopPropagation();
                li.classList.toggle('active');
            });
        } else {
            li.addEventListener('click', () => {
                alert(`You clicked: ${item.name}`);
            });
        }

        ul.appendChild(li);
    });
    parentElement.appendChild(ul);
    return ul;
}

// Generate the menu on page load
const sidebar = document.getElementById('sidebar');
generateMenu(menuItems, sidebar);