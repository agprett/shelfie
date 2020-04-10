module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db')

    db.get_inventory().then(inventory => {
      res.status(200).send(inventory)
    })
  },

  createProduct: (req, res) => {
    const db = req.app.get('db')
    const {name, price, img} = req.body

    db.create_product([name, price, img]).then(() => {
      res.sendStatus(200)
    })
  }
}