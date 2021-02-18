const {Question} = require('../models/index')

class Controller{
  static fetchData(req,res,next){
    Question.findAll()
      .then((result) => {
        res.status(200).json(result)
      }).catch((err) => {
        res.status(500).json(err)
      });
  }

  static getData(req,res,next){
    const id = + req.params.id
    Question.findByPk(id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = Controller