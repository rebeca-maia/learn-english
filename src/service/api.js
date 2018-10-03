import { create } from 'apisauce';

const api = create({
    baseURL: 'http://localhost:8080',
})

api.addAsyncRequestTransform(request => async () => {
    const token = await localStorage.getItem('@CodeApi:token');

    if (token)
        request.headers['Authorization'] = `Bearer ${token}`;
});

api.addResponseTransform((response) => {
    if (!response.ok) throw response;
});

export default api;