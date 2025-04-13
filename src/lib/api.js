// API ENDPOINTS
const { PETFINDER_ANIMALS_URL, PETFINDER_ANIMALTYPES_URL } = process.env;

// API CREDENTIALS
const { PETFINDER_CLIENT_ID, PETFINDER_CLIENT_SECRET } = process.env;
const credentials = {
  grant_type: "client_credentials",
  client_id: PETFINDER_CLIENT_ID,
  client_secret: PETFINDER_CLIENT_SECRET,
};

let token;

async function getToken() {
  const data = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((res) => res.json());

  return data.access_token;
}

async function getData(api) {
  const data = await fetch(api, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());

  return data;
}

export async function getAnimals() {
  let data;
  try {
    data = await getData(PETFINDER_ANIMALS_URL);

    if (data.status === 401) {
      throw new Error("Token expired!");
    }
  } catch {
    token = await getToken();

    data = await getData(PETFINDER_ANIMALS_URL);
  } finally {
    return data.animals;
  }
}

export async function getSingleAnimal(id) {
  let data;
  try {
    data = await getData(`${PETFINDER_ANIMALS_URL}/${id}`);

    if (data.status === 401) {
      throw new Error("Token expired!");
    }
  } catch {
    token = await getToken();

    data = await getData(`${PETFINDER_ANIMALS_URL}/${id}`);
  } finally {
    return data.animal;
  }
}

export async function getAnimalTypes() {
  let data;
  try {
    data = await getData(PETFINDER_ANIMALTYPES_URL);

    if (data.status === 401) {
      throw new Error("Token expired!");
    }
  } catch {
    token = await getToken();

    data = await getData(PETFINDER_ANIMALTYPES_URL);
  } finally {
    return data.types;
  }
}
