const axios = require('axios').default;
require('dotenv').config()

console.log(process.env.JAJA_GULOSO)

setInterval(async () => {
    try {
        const response = await axios.get('https://api.publicapis.org/entries');
        console.log(Object.values(response).length + "\n");
    } catch (error) {
        console.error(error);
    }
}, 5000)
