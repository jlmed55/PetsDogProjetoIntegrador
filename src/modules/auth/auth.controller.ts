import type { Request, Response } from "express"
import authService from "./auth.service.js"

class AuthController {

    async login(_req: Request, res: Response): Promise<Response> {
        const response = authService.login()

        return res.status(200).json(response)
    }

}

export default new AuthController()
