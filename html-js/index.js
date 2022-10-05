let nav_list = document.querySelector("#my_ul");
let about_sect = document.querySelector("#about");
let services_sect = document.querySelector(".services");
let contact_sect = document.querySelector("#contact");

let nav_generate = ["Home", "About", "Services", "Contact"];
let services = [
  {
    service: "Web design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, iure! Reiciendis unde nam assumenda sit maxime impedit tempora necessitatibus esse, dolor dolorum, architecto possimus ex ab adipisci reprehenderit sed eaque.",
    image: "image link",
  },
  {
    service: "Graphic design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, iure! Reiciendis unde nam assumenda sit maxime impedit tempora necessitatibus esse, dolor dolorum, architecto possimus ex ab adipisci reprehenderit sed eaque.",
    image: "image link",
  },
  {
    service: "SEO",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, iure! Reiciendis unde nam assumenda sit maxime impedit tempora necessitatibus esse, dolor dolorum, architecto possimus ex ab adipisci reprehenderit sed eaque.",
    image: "image link",
  },
];
nav_generate.map((item) => {
  // console.log(item)
  let list = document.createElement("li");
  list.innerText = item;
  nav_list.appendChild(list);
});
services.map((service) => {
    // console.log(service.service)
    let new_div = document.createElement('div')
    new_div.innerHTML = `
  <div class="service">
    <div class="service_title">${service.service}</div>
    <div class="service_desc">${service.description}</div>
  </div> 
    `;
    services_sect.appendChild(new_div);
});
