class AuthService {

    login() {
        return {
            access_token: "23242",
            user: {
                name: "Usuário Admin",
                email: "admin@email.com",
                role: "admin"
            }
        }
    }

}

export default new AuthService()
