const {Router} = require('express');
const router = Router();

router.get('/',(req,res) => {
    const data = {
        "name": "Itati",
        "webSite": "watch.com"
    }
    res.json(data);
})

module.exports = router;