import { logger } from "../utils/Logger.js";
import BaseController from "../utils/BaseController.js";
import { tanksService } from "../services/TanksService.js";

export class TanksController extends BaseController {

  constructor(){
    super('/api/tanks')

    this.router
      .get('', this.get_all_tanks)
  }

  get_all_tanks(req, res, next){
try {
  let tanks = tanksService.get_all_tanks()
  res.send(tanks)
} catch (error) {
  next(error)
}
  }


}