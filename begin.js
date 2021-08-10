
// array of dishes(name, isVegetarian)
const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

// to use without index.html
// function getVegetarian(menu){
// const veg_menu = menu.filter(option => option.isVegetarian);
// veg_menu.forEach((item) => {
//     console.log(item.name);
// });
//
// }

// to use with index.html
function getVegetarian(menu){
// get html element <ul> by id to change
const menutext = document.querySelector("#menu");
const veg_menu = menu.filter(option => option.isVegetarian);
// dinamically generate list items
veg_menu.forEach((item) => {
    console.log(item.name);
  let dish = document.createElement("li");
  dish.textContent = item.name;
  menutext.appendChild(dish);
});

}
getVegetarian(menu);
