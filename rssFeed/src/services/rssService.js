import axios from "axios";
import cors from "cors";

const rssService = {
    endpoint: "https://theoldreader.com/reader/api/0"
}

rssService.starredFeeds = () => {
    const config = {
        method: "GET",
        mode: cors,
        url: rssService.endpoint + "/stream/contents?output=json&s=user/-/state/com.google/starred",
        crossdomain: true,
        headers: { 
            'Authorization': 'GoogleLogin auth=LyTEJPvTJiSPrCxLu46d', 
            'Cookie': '_new_reader_session=BAh7CkkiD3Nlc3Npb25faWQGOgZFVEkiJWY2OTYzMmY1MGRkZjM4NTdmMGM1YzZlZWFkZTE1MGYzBjsAVEkiGXdhcmRlbi51c2VyLnVzZXIua2V5BjsAVFsHWwZVOhpNb3BlZDo6QlNPTjo6T2JqZWN0SWQiEdoDWVxih4FEA7GJXEkiIiQyYSQwNSRwOU1GZzFOM2Y2eXpMQjViZHY2ZFAuBjsAVEkiDWxhbmd1YWdlBjsARjoHZW5JIhByZWRpcmVjdF90bwY7AEZJIhsvcG9zdHMvYWxsP291dHB1dD1qc29uBjsARkkiEF9jc3JmX3Rva2VuBjsARkkiMXl5V0Zna1IwSGlXNjVia1pJZWVsdTg0RkU0UVRNSlhWaFZSN3hHbS9mc2s9BjsARg%3D%3D--4f9494a6fc220ea8028028681f511f1b2b769bd6; i_know_you=maurice.g.washington; remember_user_token=BAhbB1sGVToaTW9wZWQ6OkJTT046Ok9iamVjdElkIhHaA1lcYoeBRAOxiVxJIiIkMmEkMDUkcDlNRmcxTjNmNnl6TEI1YmR2NmRQLgY6BkVU--59a962932b208d66a6b3b6d9be5f2484b1f3c52e; signed_at=1633010722'
          }
    }

    return axios(config)
}

export default rssService