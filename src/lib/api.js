const token = process.env.PETFINDER_ACCESS_TOKEN;

const endpointPets = process.env.PETFINDER_ANIMALS_URL;
const endpointTypes = process.env.PETFINDER_ANIMALTYPES_URL;

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/json",
};

export async function getAnimals() {
  const data = await fetch(endpointPets, {
    method: "GET",
    headers,
  }).then((res) => res.json());

  return data;
}

export async function getAnimalTypes() {
  const data = await fetch(endpointTypes, {
    method: "GET",
    headers,
  }).then((res) => res.json());

  return data;
}
