const express = require('express');
const { get } = require('express/lib/response');
const plantsModule = require('./plants');
const app = express()
const port = 3000
app.use(express.json())

app.get('/plants', (req, res) =>{
	const plants = plantsModule.getPlants();
	res.send(plants)
});

app.get('/plant/:id', (req, res) => {
	const { id } = req.params;
	const plants = plantsModule.getPlantById(id)
	res.send(plants);
});

app.delete('/plant/:id', (req, res) => {
	const { id } = req.params;
	const plants = plantsModule.removePlantById(id)
	res.send(plants);
});

get.post('/plant/:id', (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const plants = plantsModule.editPlant(id, data)
	res.send(plants);
});

app.post("/plant", (req, res) => {
  const newPlant = req.body.plant;
  const plant = plantsModule.createNewPlant(newPlant);
  res.send(plant);
});

app.get("/sunny/:id", (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(id);
  res.send(plant);
});



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
