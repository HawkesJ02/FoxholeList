import { fakeDb } from "../db/FakeDb.js";
import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { logger } from "../utils/Logger.js";

class TanksService {
  get_all_tanks(){
    return fakeDb.Tanks
  }
}

export const tanksService = new TanksService();
