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
            let dogName = await totalDogs.filter (el => el.name.toLowerCase().includes(name.toLowerCase()));
            dogName.length ?
            res.status(200).send(dogName):
            res.status(404).send("Invalid breed")
        } else {
            res.status(200).send(totalDogs)
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

module.exports = router;