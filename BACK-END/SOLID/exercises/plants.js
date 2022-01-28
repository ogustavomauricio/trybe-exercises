const defaultPlants = [
    {
      id: 1,
      breed: "Bromelia",
      needsSun: false,
      origin: "Argentina",
      size: 102,
      specialCare: {
        waterFrequency: 3,
      },
    },
    {
      id: 2,
      breed: "Orquidea",
      size: 99,
      needsSun: false,
      origin: "Brazil",
    },
  ];
  
  let createdPlants = 0;
  

  const calculeteWaterFrequency = (needsSun, size, origin) => {
    needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  } 


  const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
   const waterFrequency = calculeteWaterFrequency(needsSun, size, origin);
    const newPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        waterFrequency,
        ...specialCare,
      },
      size,
    };
    return newPlant;
  };
  
  
  const getPlants = () => {
    return defaultPlants;
  };
  
  const getPlantById = (id) => {
    return defaultPlants.filter((plant) => plant.id === id);
  };
  
  const removePlantById = (id) => {
    return defaultPlants.filter((plant) => plant.id !== id);
  };
  
  const getPlantsThatNeedsSunWithId = (id) => {
    return defaultPlants.filter((plant) => {
    return needsSun(plant) && plant.id === id;
      })
    };
  
  const editPlant = (plantId, newPlant) => {
    return defaultPlants.map((plant) => {
      if (plant.id === plantId) {
        return newPlant;
      }
      return plant;
    });
  };
  
  const createNewPlant = (plant) => {
    createdPlants++;
    const mappedPlant = initPlant( createdPlants, { ...plant });
    defaultPlants.push(mappedPlant);
    
    return defaultPlants;
  };

  module.exports = {
    createNewPlant,
    editPlant,
    getPlantsThatNeedsSunWithId,
    removePlantById,
    getPlantById,
    getPlants,
  };