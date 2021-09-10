const friendsService = {
    endpoint: "https://api.remotebootcamp.dev/api/friends"
};

friendsService.add = (payload) => {
    const config = {
        method: "POST",
        url: friendsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

friendsService.all = () => {
    const config = {
        method: "GET",
        url: friendsService.endpoint + "?pageIndex=0&pageSize=10",
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

friendsService.update = (id) => {
    const config = {
        method: "PUT",
        //data: payload,
        url: friendsService.endpoint + "/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

friendsService.delete = (id) => {
    const config = {
        method: "DELETE",
        url: friendsService.endpoint + "/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}