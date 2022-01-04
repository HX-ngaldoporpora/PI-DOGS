const {Router} = require ("express");
const axios = require ("axios");
const {Temperament} = require("../db");
const router = Router();
const {YOUR_API_KEY} = process.env 

router.get("/", async (req, res) => {
    try {
        const temperamentApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)

        const temperament = temperamentApi.data.map (el => el.temperament).join(", ").split(", ").filter(el => el !="")

        temperament.forEach(el => {
            Temperament.findOrCreate ({
                where: {name:el}
            })
        });

        const dogTemperament = await Temperament.findAll();
        res.send(dogTemperament)
    }
    catch(error){
        res.status(404).send("Error: Invalid Temperament")
    }
});

module.exports = router;