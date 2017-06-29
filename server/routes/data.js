var express = require('express');
var router = express.Router();

router.get('/', (req, res,next) => {
    res.json([{
        'name': 'wangzhe',
        'type': 'pig',
        'age': '18'
    },{
        'name': 'wangzhe',
        'type': 'pig',
        'age': '18'
    },{
        'name': 'wangzhe',
        'type': 'pig',
        'age': '18'
    }])
})
router.post('/', (req, res, next) => {
    
})
module.exports = router;