import axios from "axios";

const BASE_URL = "https://wedev-api.sky.pro/api/user";

export const loginUser = async (email, password) => {
    const data = await axios.post(BASE_URL + '/login',
        { login: email, password },
        {
            headers: {
                'content-type': '',
            },
        },
    )
    return data.data.user
}

export const registerUser = async (email, name, password) => {
    const data = await axios.post(BASE_URL,
        { login: email, name, password },
        {
            headers: {
                'content-type': '',
            }
        })
    return data
}
