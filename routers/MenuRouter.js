const router = require('express').Router();
const MenuCtrl = require('../controllers/MenuCtrl')

router.get("/getAllmenu",MenuCtrl.getAllMenu);
router.post("/getMenu",MenuCtrl.getMenu);
router.post("/addMenu",MenuCtrl.addMenu);

module.exports = router;