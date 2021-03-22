import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'
import KeepController from '../controllers/KeepController'

const routes = Router()
const keepController = new KeepController()

routes.get('/keep', keepController.index)

routes.get(
  '/keep/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  keepController.show
)

routes.post(
  '/keep',
  celebrate({
    [Segments.BODY]: {
      label: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  keepController.create
)

routes.put(
  '/keep/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
      label: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  keepController.update
)

routes.delete(
  '/keep/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  keepController.delete
)

export default routes
