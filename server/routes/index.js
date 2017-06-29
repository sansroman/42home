var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/data/news', (req, res, next) => {
  res.json({
    "err": "end",
    "data": [
      [
        ["#", "#", "#"],
        ["./images/img3.jpg", "./images/img3.jpg", "./images/img3.jpg"]
      ],
      [
        ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
        ["test5", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10"]
      ],
      [
        ["#", "#", "#"],
        ["img1", "img2", "img3"]
      ]

    ]
  })
})
router.get('/data/softs', (req, res, next) => {
  res.json({
    "err": "null",
    "data": [
      [
        ["#", "#", "#", "#", "#", "#"],
        ["soft1", "test2", "test3", "test1", "test2", "test3", "test2", "test3"]
      ],
      [
        "2mb", "test2", "test3", "test1", "test2", "test3", "test2", "test3"
      ]


    ]
  })
})
router.get('/data/movies', (req, res, next) => {
  res.json({
    "err": "null",
    "data": [
      [
        ["#", "#", "#", "#", "#", "#"],
        ["./images/img3.jpg", "./images/img3.jpg", "./images/img3.jpg", "./images/img3.jpg", "./images/img3.jpg", "./images/img3.jpg"]
      ],
      [
        ["#", "#", "#", "#", "#", "#"],
        ["test1", "test2", "test3", "test1", "test2", "test3"]
      ]

    ]
  })
})

module.exports = router;