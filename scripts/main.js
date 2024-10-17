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
plants.forEach((plant) => {
  plantImageUrls.push(plant.url);
});

console.log(plantImageUrls);
