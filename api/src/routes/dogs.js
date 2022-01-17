const {Router} = require ("express");
const { Dog, Temperament} = require ("../db");
const router = Router();
const {getAllDogs} = require("./auxiliars")


// Ruta para todas las razas y por nombre de raza (via query)
router.get("/", async(req, res, next) => {
    try{
        const {name} = req.query;
        let totalDogs = await getAllDogs();
        
        if(name) {
            let dogName = await totalDogs.filter (el => el.name.toUpperCase().includes(name.toUpperCase()));
            dogName.length ?
            res.status(200).send(dogName):
            res.status(404).send("Error: Invalid breed")
        } else {
            res.status(200).json(totalDogs? totalDogs : "No dogs found")
        }
    }
    catch(error){
        console.log(error)
    }
});


router.get("/:id", async (req, res) => {
    try{
        const {id}= req.params;
        const totalDogs = await getAllDogs()
        if (id) {
            let dogId = await totalDogs.filter (el => el.id == id);
            dogId.length?
            res.status(200).json(dogId):
            res.status(404).send("Error: Invalid ID")
        }
    }
    catch(error) {
        console.log(error)
        res.status(404).send("Error: Invalid ID")
    }
});

router.post("/", async (req, res) => {
    let {name, life_span, min_weight, max_weight, min_height, max_height, image, temperament} = req.body;
    try{
        let postDog = await Dog.create ({
            name,
            min_weight,
            max_weight,
            min_height,
            max_height,
            life_span,
            image
        })
    let temperamentDb = await Temperament.findAll ({
        where: {name:temperament}
    })
    postDog.addTemperament(temperamentDb)
    res.send("Dog add successfully")
    }
    catch (error) {
        res.status(500).send("Error: Post failed")

    }
})

module.exports = router;