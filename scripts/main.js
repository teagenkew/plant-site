import { PlantsAPI } from "./newPlants.js";

const backend = new PlantsAPI("plants", 9);
async function fetchPlants() {
  try {
    const response = await backend.getPlants();
    return response;
  } catch (error) {
    console.log(error);
  }
}

const plants = await fetchPlants();
console.log("plants", plants);

const plantImageUrls = [];
const plantNames = [];
plants.forEach((plant) => {
  plantImageUrls.push(plant.src.tiny);
  plantNames.push(plant.photographer);
});

console.log(plantImageUrls);
console.log(plantNames);

async function addPlantCards() {
  const newPlants = document.querySelector(".new-plants__cards");
  newPlants.innerHTML = "";
  for (let i = 0; i < plantImageUrls.length; i++) {
    const plantCard = document.createElement("article");
    plantCard.classList.add("plant-card");

    const plantImage = document.createElement("img");
    plantImage.classList.add("plant-card__image");
    const plantTitle = document.createElement("h3");
    plantTitle.classList.add("plant-card__title");
    plantTitle.innerText = plantNames[i];
    plantImage.src = plantImageUrls[i];

    plantCard.appendChild(plantImage);
    plantCard.appendChild(plantTitle);
    newPlants.appendChild(plantCard);
  }
}

addPlantCards();
