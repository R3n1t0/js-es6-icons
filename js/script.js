const icons = [];

/**************
 FUNCTIONS
 **************/

const getRandomNumbers = (min, max) =>Math.floor(Math.random() + (max - min + 1) + min);

const hexaGenerator = () => {
  let = hexastring = "";
  const chars = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6];
  for(let i = 0; i < 6; i++){
    hexastring += chars[getRandomNumbers(0,chars.length - 1)]
  }
}


const printIcon = (icon) => {
  const{name, prefix, family, color} = icon;
  return `<div class="rl-card d-flex justify-content-center align-items-center">
            <i class="${family} ${prefix}${name} style="color:${hexaGenerator()}"></i>
          </div>`
};

const printIcons = (iconsToPrint) => {

  container.innerHTML= "";
  iconsToPrint.forEach(icon => {
    container.innerHTML += printIcon(icon)
  })
}


const changeSelect = (event) => {

  let iconsFiltered = icons.filter(icon => {
    return icon.type === event.target.value;
  })

  if(event.target.value === "all"){
    iconsFiltered = icons;
  }

  printIcons(iconsFiltered);

}




/**************
 RENDER PAGE
 **************/
const container = document.querySelector(".container");
const select = document.querySelector(".form-select")

select.addEventListener(change, changeSelect)


const option = [];
icons.forEach( icon => {
  if(!option.includes(icon.type)){
    select.innerHTML += `<option valuer = "${icon.type}">${icon.type}</option>`
  }
})

// 1.
printIcons(icons);
