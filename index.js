
// fetch and return dog breeds using map() 
async function fetchDogBreeds() {
    try {
      const response = await fetch('https://dogapi.dog/api/v2/breeds');
      if(!response.ok) {
        throw new Error("Failed to fetch dog breeds")
      }
      const data = await response.json();
      return data.data.map(breed => breed.attributes.name);
    } catch (error) {
      console.error('Error fetching dog breeds:', error.message);
      throw error;
    }
}

// display dog breeds in console from fetchDogBreeds()
async function displayDogBreeds() {
    try {
      const breedNames = await fetchDogBreeds();
      console.log('List of dog breeds:', breedNames);
    } catch (error) {
      console.error('Error displaying dog breeds:', error.message);
      throw error;
    }
}

//fetch dog breed details of specific ID and display in console
async function fetchBreedDetails(breedId) {
    try {
        const response = await fetch(`https://dogapi.dog/api/v2/breeds/${breedId}`);
        if(!response.ok) {
            throw new Error("Failed to fetch dog breeds")
        }
        const data = await response.json();
        // Display detailed information (name, description, etc.)
        console.log('Breed Details:', data.data.attributes);
    } catch (error) {
        console.error('Error fetching breed details:', error.message);
        throw error;
    }
}

// fetch random dog fact and display in console (when rerunning node.js different fact may appear)
async function fetchDogFacts() {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/facts');
        if(!response.ok) {
            throw new Error("Failed to fetch dog facts")
        }
        const data = await response.json();
        console.log('Random Dog Fact:', data.data);
    } catch (error) {
        console.error('Error fetching dog facts:', error.message);
        throw error;
    }
}

// fetch all the dog groups and display in console 
async function fetchDogGroups() {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/groups');
        if(!response.ok) {
            throw new Error("Failed to fetch dog groups")
        }
        const data = await response.json();
        console.log('Dog Groups:', data.data);
    } catch {
        console.error('Error fetching dog groups:', error.message);
        throw error;
    }
}

 // Call the function to display dog breeds
 displayDogBreeds();

 // Example: Fetch details for a breed with ID '68f47c5a-5115-47cd-9849-e45d3c378f12' 
 fetchBreedDetails('68f47c5a-5115-47cd-9849-e45d3c378f12');

 // Call the function to display random dog facts 
 fetchDogFacts();

 // Call the function to display dog groups
 fetchDogGroups();

  
 
  