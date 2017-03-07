var express = require('express');
var router = express.Router();

var trainers = [
  {
    id: 1,
    name: 'David',
    speciality: 'JavaScript'
  },
  {
    id: 2,
    name: 'Trainer 2',
    speciality: 'nothing'
  }
];

/* GET all trainers */
router.get('/', function (req, res, next) {

  var trainerArr = [];

  for(var i =0; i< trainers.length; i++){
    trainerArr.push(trainers[i].name);
  }

  var parsedList = trainerArr.toString();
  res.render('trainers', { title: 'Trainers', trainers: parsedList });
});

/* GET all trainers */
router.get('/:id', function (req, res, next) {  

  var parsedTrainer = trainers.filter(x => x.id == req.params.id)[0];
  //parsedTrainer = req.params.id;
  res.render('trainers', { title: 'Trainer ' + parsedTrainer.id, trainers: parsedTrainer.name });
});

module.exports = router;