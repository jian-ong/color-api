// const bodyParser = require("body-parser");
const body = document.querySelector("body");
const subContainer = document.querySelector(".sub-container");
const exportOptions = document.querySelectorAll(".export-container");
const exportOptionsUl = document.querySelectorAll(".export-container-ul");
const exportBtn = document.querySelectorAll(".export-img");
const userid =  document.querySelector('#useridpalletspg')

// exportBtn.addEventListener("click", (event) => {
//   for (let i = 0; i < event.length; i++) {
//     console.log("HELLO");
//   }
// });

for (let i = 0; i < exportBtn.length; i++) {
  exportBtn[i].addEventListener("click", () => {
    if (exportOptions[i].classList.contains("hidden")) {
      exportOptions[i].classList.remove("hidden");
    } else {
      exportOptions[i].classList.add("hidden");
      //   exportOptionsUl[i].style.animationName = "";
      //   exportOptionsUl[i].style.animationName = "hideExportOptions";
    }
  });
}

const url = `/api/colors/palettes/favourites/${userid.dataset.userid}`;
axios.get(url).then((res) => {
  console.log(res.data)
  for (let i = 0; i < res.data.data.length; i++) {
    let mainDiv = document.createElement("div");

     
    mainDiv.classList.add("pallete-div");
    subContainer.appendChild(mainDiv);

    let primaryColorDiv = document.createElement("div");
    primaryColorDiv.classList.add("primary-color");
    primaryColorDiv.style.backgroundColor = res.data.data[i].primary_color_hex;
    mainDiv.appendChild(primaryColorDiv);

    let primaryColorInput = document.createElement("input");
    primaryColorInput.classList.add("primary-input");
    primaryColorInput.value = res.data.data[i].primary_color_hex;
    primaryColorDiv.appendChild(primaryColorInput);

    let secondaryColorDiv = document.createElement("div");
    secondaryColorDiv.classList.add("secondary-color");
    secondaryColorDiv.style.backgroundColor =
      res.data.data[i].secondary_color_hex;
    mainDiv.appendChild(secondaryColorDiv);

    let secondaryColorInput = document.createElement("input");
    secondaryColorInput.classList.add("secondary-input");
    secondaryColorInput.value = res.data.data[i].secondary_color_hex;
    secondaryColorDiv.appendChild(secondaryColorInput);

    let tertiaryColorDiv = document.createElement("div");
    tertiaryColorDiv.classList.add("tertiary-color");
    tertiaryColorDiv.style.backgroundColor =
      res.data.data[i].tertiary_color_hex;
    mainDiv.appendChild(tertiaryColorDiv);

    let tertiaryColorInput = document.createElement("input");
    tertiaryColorInput.classList.add("tertiary-input");
    tertiaryColorInput.value = res.data.data[i].tertiary_color_hex;
    tertiaryColorDiv.appendChild(tertiaryColorInput);

    let quaternaryColorDiv = document.createElement("div");
    quaternaryColorDiv.classList.add("quaternary-color");
    quaternaryColorDiv.style.backgroundColor =
      res.data.data[i].quaternary_color_hex;
    mainDiv.appendChild(quaternaryColorDiv);

    let quaternaryColorInput = document.createElement("input");
    quaternaryColorInput.classList.add("quaternary-input");
    quaternaryColorInput.value = res.data.data[i].quaternary_color_hex;
    quaternaryColorDiv.appendChild(quaternaryColorInput);

    let quinaryColorDiv = document.createElement("div");
    quinaryColorDiv.classList.add("quinary-color");
    quinaryColorDiv.style.backgroundColor = res.data.data[i].quinary_color_hex;
    mainDiv.appendChild(quinaryColorDiv);

    let quinaryColorInput = document.createElement("input");
    quinaryColorInput.classList.add("quinary-input");
    quinaryColorInput.value = res.data.data[i].quinary_color_hex;
    quinaryColorDiv.appendChild(quinaryColorInput);

    primaryColorDiv.addEventListener("click", () => {
      window.location.href = `/colors/${res.data.data[i].palette_id}`
    })
    secondaryColorDiv.addEventListener("click", () => {
      window.location.href = `/colors/${res.data.data[i].palette_id}`
    })
    tertiaryColorDiv.addEventListener("click", () => {
      window.location.href = `/colors/${res.data.data[i].palette_id}`
    })
    quaternaryColorDiv.addEventListener("click", () => {
      window.location.href = `/colors/${res.data.data[i].palette_id}`
    })
    quinaryColorDiv.addEventListener("click", () => {
      window.location.href = `/colors/${res.data.data[i].palette_id}`
    })
  

    let exportDiv = document.createElement("div");
    exportDiv.classList.add("pallete-img");
    mainDiv.appendChild(exportDiv);
    let deleteImage = document.createElement("img");
    deleteImage.src = "/img/delete.png";
    deleteImage.classList.add("export-img");
    exportDiv.appendChild(deleteImage);

    deleteImage.addEventListener('click', () => {
      axios.get(`/delete/favourites/${res.data.data[i].id}`).then(
        window.location.href = `/palettes`
      )
    })

    // let exportDiv = document.createElement("div");
    // exportDiv.classList.add("pallete-img");
    // mainDiv.appendChild(exportDiv);
    // let exportImg = document.createElement("img");
    // exportImg.src = "/img/export.png";
    // exportImg.classList.add("export-img");
    // exportDiv.appendChild(exportImg);

    // let exportContainer = document.createElement("div");
    // exportContainer.classList.add("export-container");
    // exportContainer.classList.add("hidden");
    // mainDiv.appendChild(exportContainer);

    // let exportContainerUl = document.createElement("ul");
    // exportContainerUl.classList.add("export-container-ul");
    // exportContainer.appendChild(exportContainerUl);

    // let exportContainerLi1 = document.createElement("li");
    // exportContainerUl.appendChild(exportContainerLi1);
    // let exportContainerA1 = document.createElement("a");
    // exportContainerA1.textContent = "Save";
    // exportContainerLi1.appendChild(exportContainerA1);

    // let exportContainerLi2 = document.createElement("li");
    // exportContainerUl.appendChild(exportContainerLi2);
    // let exportContainerA2 = document.createElement("a");
    // exportContainerA2.textContent = "Favorite";
    // exportContainerLi2.appendChild(exportContainerA2);

    // let exportContainerLi3 = document.createElement("li");
    // exportContainerUl.appendChild(exportContainerLi3);
    // let exportContainerA3 = document.createElement("a");
    // exportContainerA3.textContent = "Export";
    // exportContainerLi3.appendChild(exportContainerA3);
    // primaryColor.style.backgroundColor = res.data.data[i].primary_color_hex;
    // primaryInput.value = res.data.data[i].primary_color_hex;
    // secondaryColor.style.backgroundColor = res.data.data[i].secondary_color_hex;
    // secondaryInput.value = res.data.data[i].secondary_color_hex;
    // tertiaryColor.style.backgroundColor = res.data.data[i].tertiary_color_hex;
    // tertiaryInput.value = res.data.data[i].tertiary_color_hex;
    // quaternaryColor.style.backgroundColor =
    //   res.data.data[i].quaternary_color_hex;
    // quaternaryInput.value = res.data.data[i].quaternary_color_hex;
    // quinaryColor.style.backgroundColor = res.data.data[i].quinary_color_hex;
    // quinaryInput.value = res.data.data[i].quinary_color_hex;
  }
});
