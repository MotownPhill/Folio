import axios from "axios";

const temptLogin = {
    endpoint: "https://localhost:50001/api/temp/auth/login/8/gregorio/cto"
};

temptLogin.quick = () => {
    const config = {
        method: "GET",
        url: temptLogin.endpoint,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

export default temptLogin;