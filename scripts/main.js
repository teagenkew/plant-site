import { PlantsAPI } from "./newPlants.js";

const backend = new PlantsAPI("plants", 9);
async function fetchPlants() {
  try {
    const response = await backend.getPlants();
  } catch (error) {
    console.log(error);
  }
}
fetchPlants();

const plantImageUrls = [];
