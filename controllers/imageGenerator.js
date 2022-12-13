const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req,res) => {
    try {
        const { prompt, size } = req.body;
        const imgsize = size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size:imgsize
        }) 
        const imageUrl = response.data.data[0].url;
        res.status(200).send({
            success: true,
            url:imageUrl
        })

    } catch (error) {
        if (error.response) {
            res.status(500).send(error.response.data);
          } else {
            console.log(error.message);
            res.status(500).send(err.message);
          }
       
    }
}
module.exports = { generateImage };