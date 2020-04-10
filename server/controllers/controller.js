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
  },

  deleteProduct: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.delete_product([id]).then(() => {
      res.sendStatus(200)
    })
  },

  updateProduct: (req, res) => {
    const db = req.app.get('db')
    const {name, price, img} = req.body
    const {id} = req.params

    db.update_product([name, price, img, id]).then(() => {
      res.sendStatus(200)
    })
  }
}