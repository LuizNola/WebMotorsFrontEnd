import axios from 'axios';

const api = axios.create({
    baseURL: "http://desafioonline.webmotors.com.br"
})

export default {

    getMake: async () => {
        let {data: json} = await api.get('/api/OnlineChallenge/Make')
        return json;
    },

    getModel: async (MakeId) => {
        let {data: json} = await api.get(`/api/OnlineChallenge/Model?MakeId=${MakeId}`)
        return json;
    },
}
