import requests

url = "https://theoldreader.com/reader/api/0/stream/contents?output=json&xt=user/-/state/com.google/read"

payload={}
headers = {
  'Authorization': 'GoogleLogin auth=LyTEJPvTJiSPrCxLu46d',
  'Cookie': '_new_reader_session=BAh7B0kiD3Nlc3Npb25faWQGOgZFVEkiJWI1NDhiZDFkMDJlMmM4NWU0ZjFkNjRiODc2YjhiYzlmBjsAVEkiGXdhcmRlbi51c2VyLnVzZXIua2V5BjsAVFsHWwZVOhpNb3BlZDo6QlNPTjo6T2JqZWN0SWQiEdoDWVxih4FEA7GJXEkiIiQyYSQwNSRwOU1GZzFOM2Y2eXpMQjViZHY2ZFAuBjsAVA%3D%3D--7dcf6e6305a7cf1e50ed3a20ff945ef15c8267d4; i_know_you=maurice.g.washington; remember_user_token=BAhbB1sGVToaTW9wZWQ6OkJTT046Ok9iamVjdElkIhHaA1lcYoeBRAOxiVxJIiIkMmEkMDUkcDlNRmcxTjNmNnl6TEI1YmR2NmRQLgY6BkVU--59a962932b208d66a6b3b6d9be5f2484b1f3c52e; signed_at=1633010722'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
