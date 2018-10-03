import api from "../service/api";

export const authenticati = ({username, password }) => {
    return async dispacth => {
        try {
            const response = await api.post('/login',{
                username,
                password
            });

            const {token, user} = response.data;

            await localStorage.setItem('@CodeApi:token', token);
            await localStorage.setItem('@COdeApi:user', user);
            
        } catch (error) {
            
        }
    }
}