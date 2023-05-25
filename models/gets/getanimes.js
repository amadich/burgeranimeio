const animeModel = require("../CreateAnime");

const getanimes = (app) => {
   app.get("/getanimes", async (req, res) => {
      try {
         const mycatalog = await animeModel.find();
         res.status(200).json({ mycatalog });
      } catch (error) {
         console.log("Error in getanimes:", error);
         res.status(500).json({ message: "An error occurred. Please try again later.", ok: 0 });
      }
   });
};

module.exports = getanimes;
