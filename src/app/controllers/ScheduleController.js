const { Appointment } = require('../models')

class ScheduleController {
  async index (req, res) {
    const { provider } = req.params
    const itens = await Appointment.findAll({
      where: { provider_id: provider }
    })
    console.log(req.params)
    console.log(itens)
    return res.render('appointments/schedule', { itens })
  }
}
module.exports = new ScheduleController()
