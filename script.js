const menu = [
    {
      id: 1,
      title: "Blueberry Pie",
      category: "Snacks",
      price: 4.99,
      img: "./images/item-1.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum i corruptiaccusamus id nemo molestias, eum aliquid? Accusantium, culpa.`,
    }, 
    {
      id: 2,
      title: "Vanilla Cup",
      category: "Icecream",
      price: 6.99,
      img: "./images/item-2.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam . Quae officia vitae sit ea in expedita, harum obcaecati quibusdam iste.`,
    }, 
    {
      id: 3,
      title: "Dark Choclate",
      category: "Brownie",
      price: 5.99,
      img: "./images/item-3.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius accusamus ullam, obcaecati ipsum exercitationem quidem, nam, reiciendis obis, error esse.`,
    }, 
    {
      id: 4,
      title: "Creamy Donut",
      category: "Snacks",
      price: 3.99,
      img: "./images/item-4.jpg",
      desc: `Lorem ipsum dolor sit amet. Maxime, nemo amet maiores autem harum ea impedit nihil.`,
    }, 
    {
      id: 5,
      title: "Coconut Balls",
      category: "Snacks",
      price: 4.99,
      img: "./images/item-5.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis incidunt debitis minus corporis ratione, repudiandae laborum optio beatae.`,
    }, 
    {
      id: 6,
      title: "Strawberry-shake",
      category: "Shake",
      price: 4.99,
      img: "./images/item-6.jpg",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam sapiente veniam. Officiis quis aperiam incidunt aspernatur pariatur? Autem aliquam voluptates enim.`,
    }, 
    {
      id: 7,
      title: "Chocolate-shake",
      category: "Shake",
      price: 4.99,
      img: "./images/item-7.jpg",
      desc: `Lorem, ipsum dolor.  Incidunt nam sapiente veniam. Officiis quis aperiam incidunt aspernatur pariatur? sit amet consectetur adipisicing elit. Autem aliquam  enimvolupta tes.`,
    }, 
    {
      id: 8,
      title: "Fruit-shot Ice",
      category: "Icecream",
      price: 5.99,
      img: "./images/item-8.jpg",
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero quibusdam id, illum harum omnis exercitationem distinctio similique possimus voluptas.`,
    }, 
    {
      id: 9,
      title: "Fruit-stream",
      category: "Brownie",
      price: 6.99,
      img: "./images/item-9.jpg",
      desc: `Lorem ipsum, dolor. Vero quibusdam id, illum harum omnis exercitationem distinctio similique possimus voluet consectetur.  adipisicing elit. sit amet consectetur adipisicing`,
    }, 
    {
      id: 10,
      title: "Bran bread",
      category: "Bakery",
      price: 3.99,
      img: "./images/item-10.jpg",
      desc: `Lorem ipsum, dolor. Vero quibusdam id, illum harum omnis exercitationem distinctio similique possimus voluptas.sit amet consectetur adipisicing elit. Incidunt nam sapiente veniam.`,
    }, 
    {
      id: 11,
      title: "Vanilla Cookies",
      category: "Snacks",
      price: 4.99,
      img: "./images/item-11.jpg",
      desc: `Lorem ipsum, dolor. Vero quibusdam id, illum harum omnis exercitationem distinctio similique possimus voluptas.sit amet consectetur adipisicing elit. sit amet consectetur adipisicing`,
    }, 
    {
      id: 12,
      title: "Cheesey Pastry",
      category: "Bakery",
      price: 3.99,
      img: "./images/item-12.jpg",
      desc: `Lorem ipsum, dolor. ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt mollitia voluptatum saepe corrupti vitae adipisci accusamus id nemo.`,
    }, 
]

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayCategoryItems();

})

const sectionElement = document.querySelector(".center");
const categoryElement = document.querySelector(".btn-container");

function displayMenuItems(menuList){

    let sectionContent = "";

    menuList.forEach((x) => {
        sectionContent += `
        <article class="menu-item">
        <div class="photo-container">
            <img src=${x.img} alt="menu item" class="photo">
        </div>
        <div class="item-info">
          <header>
            <h4>${x.title}</h4>
            <h4 class="price">$${x.price}</h4>
          </header>
          <p class="item-text">
            ${x.desc}
          </p>
        </div>
      </article>
        `
    } )

    sectionElement.innerHTML = sectionContent;
} 

function displayCategoryItems() {

    // Here we pick up the categories avoiding repetition

    let categoryList = [];

    menu.forEach((x) => {
        if ( categoryList.indexOf(x.category) === -1) {
            categoryList.push(x.category);
        }
    })

    let categoryContent = '<button type="button" class="filter-btn" data-id="all">All</button>';

    categoryList.forEach((x) => {
        categoryContent += `<button type="button" class="filter-btn" data-id="${x}">${x}</button>`;
        console.log(x)
    })

    categoryElement.innerHTML = categoryContent;
    console.log(categoryElement.innerHTML);

    // Now we'll filter the menu by selected categogy name with buttons

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((x) => {
        // event
        x.addEventListener("click", function (e) {
        // Filtering the menu
            const selectedCategoryName = e.target.getAttribute("data-id");
            const filteredMenu = menu.filter(
                (item) => item.category === selectedCategoryName
            );

        console.log("selectedCategoryName: " + selectedCategoryName);

        if (selectedCategoryName == "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(filteredMenu);
        }
    });
  });
}



