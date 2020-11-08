const { get } = require("../http/http.service")
let { getData } = require("./fetchData.service")

jest.mock("../http/http.service")

describe("getdata FUNC TEST", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  const requestParams1 = {
    filter: 'censoring',
    level: 'Censored'
  }
  const requestParams2 = {
    filter: 'censoring',
    level: 'Uncensored'
  }
  it("it should pass requestParams1", async () => {
    get.mockImplementation(() =>
      Promise.resolve(getDummyResponse)
    )
    const response = await getData(requestParams1)
    expect(typeof response).toBe("object")
    expect(response).toEqual(getDataDummyResponse1)
  })

  it("it should pass requestParams2", async () => {
    get.mockImplementation(() =>
      Promise.resolve(getDummyResponse)
    )
    const response = await getData(requestParams2)
    expect(typeof response).toBe("object")
    expect(response).toEqual(getDataDummyResponse2)
  })

  it("it should fail", async () => {
    get.mockImplementation(() =>
      Promise.resolve(getDummyResponse)
    )
    const response = await getData({})
    expect(typeof response).toBe("object")
    expect(response).not.toBe(null)
    expect(response.responseCode).toBe(404)
    expect(response.responseMessage).toBe("Failure")
  })

  it("it should fail as API error", async () => {
    get.mockImplementation(() =>
      Promise.reject("API error")
    )
    const response = await getData(requestParams1)
    expect(typeof response).toBe("object")
    expect(response).not.toBe(null)
    expect(response.responseMessage).toBe("Failure")
  })
})

const getDummyResponse = {
  data: {
    "titles": [
      {
        "titleId": "158063144080",
        "title": "THE KING",
        "sortTitle": "THE KING",
        "description": "Filmmaker Eugene Jarecki travels in a 1963 Rolls Royce Phantom V once owned by Elvis Presley on a musical road trip across America.",
        "longDescription": "Filmmaker Eugene Jarecki travels in a 1963 Rolls Royce Phantom V once owned by Elvis Presley on a musical road trip across America. From Memphis to New York, Las Vegas, and beyond, the journey traces the rise and fall of Elvis as a metaphor for the country he left behind.",
        "shortDescription": "Filmmaker Eugene Jarecki travels in a 1963 Rolls Royce Phantom V once owned by Elvis Presley on a musical road trip across America.",
        "titleLocalized": {
          "ar": "ذا كينغ",
          "en": "THE KING"
        },
        "sortTitleLocalized": {
          "ar": "ذا كينغ",
          "en": "THE KING"
        },
        "descriptionLocalized": {
          "ar": "فيلم سيرة ذاتية تاريخي. أمير ضال ووريث للعرش الإنجليزي، يتوج ملكاً بعد وفاة والده المستبد. الآن يجب على الملك الشاب أن يتنقل في سياسات القصر، والحرب التي تركها والده وراءه، باللإضافة إلى المشاكل العاطفية في حياته الماضية.",
          "en": "Filmmaker Eugene Jarecki travels in a 1963 Rolls Royce Phantom V once owned by Elvis Presley on a musical road trip across America."
        },
        "longDescriptionLocalized": {
          "ar": "فيلم سيرة ذاتية تاريخي. أمير ضال ووريث للعرش الإنجليزي، يتوج ملكاً بعد وفاة والده المستبد. الآن يجب على الملك الشاب أن يتنقل في سياسات القصر، والحرب التي تركها والده وراءه، باللإضافة إلى المشاكل العاطفية في حياته الماضية.",
          "en": "Filmmaker Eugene Jarecki travels in a 1963 Rolls Royce Phantom V once owned by Elvis Presley on a musical road trip across America. From Memphis to New York, Las Vegas, and beyond, the journey traces the rise and fall of Elvis as a metaphor for the country he left behind."
        },
        "shortDescriptionLocalized": {
          "ar": "فيلم سيرة ذاتية تاريخي. أمير ضال ووريث للعرش الإنجليزي، يتوج ملكاً بعد وفاة والده المستبد. الآن يجب على الملك الشاب أن يتنقل في سياسات القصر، والحرب التي تركها والده وراءه، باللإضافة إلى المشاكل العاطفية في حياته الماضية.",
          "en": "Filmmaker Eugene Jarecki travels in a 1963 Rolls Royce Phantom V once owned by Elvis Presley on a musical road trip across America."
        },
        "titleCredits": [
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/158063144082",
            "creditType": "Director",
            "isCameo": false,
            "isInactive": false,
            "order": 0,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONTOMGLYNNCARNEY_1",
            "personName": "Tom Glynn-Carney"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/158063144081",
            "creditType": "Director",
            "isCameo": false,
            "isInactive": false,
            "order": 0,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONDAVIDMICHOD_1",
            "personName": "David Michod"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/158063144083",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 1,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONSTEVENELDER_1",
            "personName": "Steven Elder"
          }
        ],
        "languages": [
          "en"
        ],
        "tagIds": [
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400359",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400370",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/57556008079",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/58562600378"
        ],
        "tags": [
          {
            "tagTitle": "Drama",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Movies",
            "tagScheme": "urn:peg:category"
          },
          {
            "tagTitle": "Biography",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "History",
            "tagScheme": "urn:peg:genre"
          }
        ],
        "imageMediaIds": [
          {
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/guid/2458698081/THEKINGY2019M",
            "isPrimary": true,
            "imageType": "thumb"
          }
        ],
        "year": 2019,
        "media": [
          {
            "ratings": [],
            "introStartSeconds": 0,
            "introEndSeconds": 0,
            "outroStartSeconds": 0,
            "outroEndSeconds": 0,
            "recapStartSeconds": 0,
            "recapEndSeconds": 0,
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/630642245319",
            "mediaTitle": "THE KING",
            "mediaGuid": "THEKINGY2019M",
            "availableDate": "2020-10-06T05:00Z",
            "expirationDate": 1633118100000,
            "content": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668357173",
                "guid": "Og92k9RYc2iNI_phi48Qoa60MgMuOI84",
                "bitrate": 0,
                "duration": 6499.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/225515077038"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/Download/OD_THEKINGY2019M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "lstvE6JBxNag",
                    "url": "http://link.theplatform.eu/s/qaJAph/lstvE6JBxNag",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668357177",
                "guid": "XNGdz23yaWTSh5sce8kWig8RiBMRl2g2",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/5416517342"
                ],
                "assetTypes": [
                  "filmstrip_199x110"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019M.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "mSXjHekoBQ9W",
                    "url": "http://link.theplatform.eu/s/qaJAph/mSXjHekoBQ9W",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668357180",
                "guid": "BHFiP3K0J_Jju4xQvy3svGtGkhCOpd7F",
                "bitrate": 0,
                "duration": 6499.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965302"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019MHEVC/THEKINGY2019MHEVC.ism/THEKINGY2019MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "99g3etmS0_0Q",
                    "url": "http://link.theplatform.eu/s/qaJAph/99g3etmS0_0Q",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668357182",
                "guid": "Il6T_UyQlxQl18SEJeBH6gv_YYpg2sE4",
                "bitrate": 0,
                "duration": 6499.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965306"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/Download/THEKINGY2019MHEVC/OD_THEKINGY2019MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "NAxkQtUsYDxB",
                    "url": "http://link.theplatform.eu/s/qaJAph/NAxkQtUsYDxB",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668357185",
                "guid": "o4rgm7m_TTox54WUR_e2Bwi8NOgc8qmw",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "ar",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965359"
                ],
                "assetTypes": [
                  "dfxp_ar_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019M_ara.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "d5UoSgcPx32c",
                    "url": "http://link.theplatform.eu/s/qaJAph/d5UoSgcPx32c",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668357189",
                "guid": "BOX_Ty_diYEuChhip4pNGuJuFJsPd_1H",
                "bitrate": 0,
                "duration": 0,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453431"
                ],
                "assetTypes": [
                  "video",
                  "dash_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019MTRAILER/THEKINGY2019MTRAILER.ism/THEKINGY2019MTRAILER.mpd",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "fiwRYNiQgjg4",
                    "url": "http://link.theplatform.eu/s/qaJAph/fiwRYNiQgjg4",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668357194",
                "guid": "q_ZVpwKv9RALJYyTQLNEa8cLQAqTnD5N",
                "bitrate": 0,
                "duration": 0,
                "format": "ISM",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941497"
                ],
                "assetTypes": [
                  "video",
                  "hss_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019MTRAILER/THEKINGY2019MTRAILER.ism/Manifest",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "TAmFlryPpgxZ",
                    "url": "http://link.theplatform.eu/s/qaJAph/TAmFlryPpgxZ",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668357196",
                "guid": "vbEIhBR6ztAY_zjaBxVkrWjM0H47F9Ew",
                "bitrate": 0,
                "duration": 0,
                "format": "M3U",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477004"
                ],
                "assetTypes": [
                  "video",
                  "hls_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019MTRAILER/THEKINGY2019MTRAILER.ism/THEKINGY2019MTRAILER.m3u8",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "mdFikV_nL08f",
                    "url": "http://link.theplatform.eu/s/qaJAph/mdFikV_nL08f",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668869072",
                "guid": "B8Y_Z5IyLdc3wqgy4TmCqvOo6Qzn3Xmw",
                "bitrate": 0,
                "duration": 6499.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941470"
                ],
                "assetTypes": [
                  "video",
                  "dash_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019M.ism/THEKINGY2019M.mpd",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "lTJIDzdHPjrY",
                    "url": "http://link.theplatform.eu/s/qaJAph/lTJIDzdHPjrY",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668869077",
                "guid": "voU5MBYixu_iHupZfHTyiX5CYe98nSeH",
                "bitrate": 0,
                "duration": 6499.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941465"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019M.ism/THEKINGY2019M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "c8TCnzgsHpsR",
                    "url": "http://link.theplatform.eu/s/qaJAph/c8TCnzgsHpsR",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668869083",
                "guid": "I_rhsUvmvscmJzRysMY8NGfz340THqa9",
                "bitrate": 0,
                "duration": 6499.12,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941466"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019M.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "6akxpo9zMRAR",
                    "url": "http://link.theplatform.eu/s/qaJAph/6akxpo9zMRAR",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668869086",
                "guid": "FMJRoQj7J7LZjkGRST2MLvsmNpv_pKaR",
                "bitrate": 0,
                "duration": 6499.12,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453408"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019M_fairplay.ism/THEKINGY2019M_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "t9CkKUe0s4GV",
                    "url": "http://link.theplatform.eu/s/qaJAph/t9CkKUe0s4GV",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668869090",
                "guid": "KzzvI27h7tDBuQQF3CO7dSrEIiC0TeBQ",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/245197893472"
                ],
                "assetTypes": [
                  "filmstrip_bs"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019M_bs.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "Stf2m5G8zo7t",
                    "url": "http://link.theplatform.eu/s/qaJAph/Stf2m5G8zo7t",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668869091",
                "guid": "9QCzIgBopQqhnEMoayyH8k1CNQ_MriU_",
                "bitrate": 0,
                "duration": 6499.12,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965322"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019MHEVC/THEKINGY2019MHEVC_fairplay.ism/THEKINGY2019MHEVC_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "RUbvLqNI520t",
                    "url": "http://link.theplatform.eu/s/qaJAph/RUbvLqNI520t",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668869092",
                "guid": "Xxc7D_rSwfxvh7LykQXyD5YgA2huuQWL",
                "bitrate": 0,
                "duration": 6499.12,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/338290757188"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019MHEVC/THEKINGY2019MHEVC.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "uB2m7vDe3cGj",
                    "url": "http://link.theplatform.eu/s/qaJAph/uB2m7vDe3cGj",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668869096",
                "guid": "HJAEs9_1rlH8lb8wEkh78OqRGvz8c27i",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965365"
                ],
                "assetTypes": [
                  "dfxp_en_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019M_eng.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "ly3on8knrBbz",
                    "url": "http://link.theplatform.eu/s/qaJAph/ly3on8knrBbz",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630668869104",
                "guid": "i_00QYumhaUqw6wSWeVf_i9jifitW9fK",
                "bitrate": 0,
                "duration": 0,
                "format": "F4M",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477007"
                ],
                "assetTypes": [
                  "video",
                  "hds_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019MTRAILER/THEKINGY2019MTRAILER.ism/THEKINGY2019MTRAILER.f4m",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "BVvMkbFNt8Wv",
                    "url": "http://link.theplatform.eu/s/qaJAph/BVvMkbFNt8Wv",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              }
            ],
            "thumbnails": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630642245350",
                "guid": "pyLf_2lpQ6tISL__KGoX_h03tXIjV9iL",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 678,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Poster.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581441"
                ],
                "assetTypes": [
                  "src_poster"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Poster.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630642245360",
                "guid": "iuFahzRMHzbQI7SL0OpypKNcAuQTKZNS",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_HeroMain.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581474"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero_main"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_HeroMain.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630642757151",
                "guid": "oKpNCfvcGsuCfu8HxfqHQ22Z44UrdaEl",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Screenshot.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581475"
                ],
                "assetTypes": [
                  "src_screenshot"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Screenshot.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630642757158",
                "guid": "O3eU25BcxbAwShkziCmONoAKKVRLg5nC",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Character.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581430"
                ],
                "assetTypes": [
                  "src_character"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Character.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630643269211",
                "guid": "DF1o__MMSefcCzpC1zH5zbEikRdorp7j",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 615,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Hero.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581434"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Hero.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630644805123",
                "guid": "LgVwZc7PorhlXRKYUGbB5KoDN1XLOA3U",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 677,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/THEKINGY2019M/THEKINGY2019M-474x677-PST.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581427"
                ],
                "assetTypes": [
                  "dsk_tab_poster_474x677"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/THEKINGY2019M/THEKINGY2019M-474x677-PST.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630644805126",
                "guid": "mzkBuMf6qBLYBLBxIA0x8yqzOMA6zlv6",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 614,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/THEKINGY2019M/THEKINGY2019M-1536x614-DHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581423"
                ],
                "assetTypes": [
                  "hero_1536x614"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/THEKINGY2019M/THEKINGY2019M-1536x614-DHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              }
            ]
          }
        ],
        "arAgeRating": "18",
        "countryOfOrigin": "United States",
        "studio": "Universal_01",
        "friendlyTitle4Url": "the-king",
        "has4K": "no",
        "fourkProgramId": "",
        "programType": "movie",
        "mediaContentDownloadUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEKINGY2019M/7a55601004320c80bd1c01966dc2d5cc/THEKINGY2019M_fairplay.ism/THEKINGY2019M_fairplay.m3u8",
        "addonContent": "starz",
        "userRating": 0,
        "thumbnails": {
          "thumb-0x0": {
            "assetTypes": [
              "src_character"
            ],
            "height": 0,
            "title": "THEKINGY2019M_Character.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Character.jpg",
            "width": 0
          },
          "thumb-614x1536": {
            "assetTypes": [
              "hero_1536x614"
            ],
            "height": 614,
            "title": "THEKINGY2019M-1536x614-DHE.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/THEKINGY2019M/THEKINGY2019M-1536x614-DHE.jpg",
            "width": 1536
          },
          "thumb-678x474": {
            "assetTypes": [
              "src_poster"
            ],
            "height": 678,
            "title": "THEKINGY2019M_Poster.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Poster.jpg",
            "width": 474
          },
          "thumb-677x474": {
            "assetTypes": [
              "dsk_tab_poster_474x677"
            ],
            "height": 677,
            "title": "THEKINGY2019M-474x677-PST.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/THEKINGY2019M/THEKINGY2019M-474x677-PST.jpg",
            "width": 474
          },
          "thumb-615x1536": {
            "assetTypes": [
              "src_dsk_tab_hero"
            ],
            "height": 615,
            "title": "THEKINGY2019M_Hero.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEKINGY2019M/THEKINGY2019M_Hero.jpg",
            "width": 1536
          }
        }
      },
      {
        "titleId": "157658664188",
        "title": "HOVER",
        "sortTitle": "HOVER",
        "description": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing.",
        "longDescription": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing.",
        "shortDescription": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing.",
        "titleLocalized": {
          "ar": "هوفر",
          "en": "HOVER"
        },
        "sortTitleLocalized": {
          "ar": "هوفر",
          "en": "HOVER"
        },
        "descriptionLocalized": {
          "ar": "في عالم خيالي حيث تستخدم طائرات الدرونز للزراعة وللحراسة، يكتشف أحد الموظفين صلة بين مدرائه في العمل وبين مصنعي هذه الطائرات.",
          "en": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing."
        },
        "longDescriptionLocalized": {
          "ar": "في عالم خيالي حيث تستخدم طائرات الدرونز للزراعة وللحراسة، يكتشف أحد الموظفين صلة بين مدرائه في العمل وبين مصنعي هذه الطائرات.",
          "en": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing."
        },
        "shortDescriptionLocalized": {
          "ar": "في عالم خيالي حيث تستخدم طائرات الدرونز للزراعة وللحراسة، يكتشف أحد الموظفين صلة بين مدرائه في العمل وبين مصنعي هذه الطائرات.",
          "en": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing."
        },
        "titleCredits": [
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157658664189",
            "creditType": "Director",
            "isCameo": false,
            "isInactive": false,
            "order": 0,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONMATTOSTERMAN_1",
            "personName": "Matt Osterman"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157658664190",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 1,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONCLEOPATRACOLEMAN_1",
            "personName": "Cleopatra Coleman"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157658664191",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 2,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONSHANECOFFEY_1",
            "personName": "Shane Coffey"
          }
        ],
        "languages": [
          "en"
        ],
        "tagIds": [
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400362",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400370",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/57556008094"
        ],
        "tags": [
          {
            "tagTitle": "Action",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Movies",
            "tagScheme": "urn:peg:category"
          },
          {
            "tagTitle": "Sci-Fi",
            "tagScheme": "urn:peg:genre"
          }
        ],
        "imageMediaIds": [
          {
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/guid/2458698081/HOVERY2018M",
            "isPrimary": true,
            "imageType": "thumb"
          }
        ],
        "year": 2018,
        "media": [
          {
            "ratings": [],
            "introStartSeconds": 0,
            "introEndSeconds": 0,
            "outroStartSeconds": 0,
            "outroEndSeconds": 0,
            "recapStartSeconds": 0,
            "recapEndSeconds": 0,
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/624435269142",
            "mediaTitle": "HOVER",
            "mediaGuid": "HOVERY2018M",
            "availableDate": "2020-10-06T05:00Z",
            "expirationDate": 1633118112000,
            "content": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605382",
                "guid": "MoRaoufPzbSYszlLQmAqeOd3JaxORL34",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941466"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "Lc_hU8gfPf21",
                    "url": "http://link.theplatform.eu/s/qaJAph/Lc_hU8gfPf21",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605388",
                "guid": "sTKa72e74ewdr6ULYep8bB0iUR021__D",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453408"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_fairplay.ism/HOVERY2018M_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "v6NH82UEwGqv",
                    "url": "http://link.theplatform.eu/s/qaJAph/v6NH82UEwGqv",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605401",
                "guid": "JZfZcOTpYlGwYIUcwq70lbghALfRdeMN",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/5416517342"
                ],
                "assetTypes": [
                  "filmstrip_199x110"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "e6J_057yKWBE",
                    "url": "http://link.theplatform.eu/s/qaJAph/e6J_057yKWBE",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605408",
                "guid": "oW2C48_kdtkDt3A_lQAeKUCIemCXz91K",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965302"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC.ism/HOVERY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "8mhnW0iwaaNe",
                    "url": "http://link.theplatform.eu/s/qaJAph/8mhnW0iwaaNe",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605413",
                "guid": "dwu0IzTufgqbCsxI2LguiAuPDmCtDKpU",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965306"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/Download/HOVERY2018MHEVC/OD_HOVERY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "JgCVWpwi57TA",
                    "url": "http://link.theplatform.eu/s/qaJAph/JgCVWpwi57TA",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605418",
                "guid": "qsBJ8KbIbdE7cw9cp4S6ZC3EC4PLCwFn",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/338290757188"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "exGzf3Dv6T1J",
                    "url": "http://link.theplatform.eu/s/qaJAph/exGzf3Dv6T1J",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605421",
                "guid": "Xjnvb2W8BfsXQcPEra_sBH6IBPFMfLnx",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "ar",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965359"
                ],
                "assetTypes": [
                  "dfxp_ar_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_ara.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "zDFFeorTCquA",
                    "url": "http://link.theplatform.eu/s/qaJAph/zDFFeorTCquA",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605422",
                "guid": "OYEfCvwnweI1rbSP7iMVK5oGpfOLu6DV",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965365"
                ],
                "assetTypes": [
                  "dfxp_en_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_eng.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "tNS21NTyPbRo",
                    "url": "http://link.theplatform.eu/s/qaJAph/tNS21NTyPbRo",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605425",
                "guid": "hXs9eGo17ycU4wTo7ZafqfVuKTPytHMV",
                "bitrate": 0,
                "duration": 0,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453431"
                ],
                "assetTypes": [
                  "video",
                  "dash_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/HOVERY2018MTRAILER.mpd",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "YCEL02_4NWf5",
                    "url": "http://link.theplatform.eu/s/qaJAph/YCEL02_4NWf5",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605427",
                "guid": "WNj0GvWmalF8P0MwxoBTZKA2Ke3X89Rw",
                "bitrate": 0,
                "duration": 0,
                "format": "ISM",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941497"
                ],
                "assetTypes": [
                  "video",
                  "hss_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/Manifest",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "LDtzVItU1YaD",
                    "url": "http://link.theplatform.eu/s/qaJAph/LDtzVItU1YaD",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605428",
                "guid": "Del5a7FlsD_VxzaDqscCq6mlKyQ4Ab0A",
                "bitrate": 0,
                "duration": 0,
                "format": "M3U",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477004"
                ],
                "assetTypes": [
                  "video",
                  "hls_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/HOVERY2018MTRAILER.m3u8",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "MQdKgW8WDfbG",
                    "url": "http://link.theplatform.eu/s/qaJAph/MQdKgW8WDfbG",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605433",
                "guid": "xLphzR67EHWCMbuHf_olHpZSpycPl2Kz",
                "bitrate": 0,
                "duration": 0,
                "format": "F4M",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477007"
                ],
                "assetTypes": [
                  "video",
                  "hds_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/HOVERY2018MTRAILER.f4m",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "dH4QI2WhXS4R",
                    "url": "http://link.theplatform.eu/s/qaJAph/dH4QI2WhXS4R",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658117261",
                "guid": "FjWosHohHh7gRNVh7swfHKww4PVhzhy9",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941470"
                ],
                "assetTypes": [
                  "video",
                  "dash_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.ism/HOVERY2018M.mpd",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "VoeRs0J4wn3F",
                    "url": "http://link.theplatform.eu/s/qaJAph/VoeRs0J4wn3F",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658117268",
                "guid": "qawsZkiG0X_mimmcPCYUnwwO5mM2xG6D",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941465"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.ism/HOVERY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "_0jo1Sm_IQQT",
                    "url": "http://link.theplatform.eu/s/qaJAph/_0jo1Sm_IQQT",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658117298",
                "guid": "_VLKraz4yt19Z7kwblIgZ709mOku5Qi2",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965322"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC_fairplay.ism/HOVERY2018MHEVC_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "aH2dafAJQ7Zb",
                    "url": "http://link.theplatform.eu/s/qaJAph/aH2dafAJQ7Zb",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658629012",
                "guid": "290_wVMdGn84LX9cQ81qIR6f4J01_ZBJ",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/225515077038"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/Download/OD_HOVERY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "p__AvhQid7SD",
                    "url": "http://link.theplatform.eu/s/qaJAph/p__AvhQid7SD",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658629017",
                "guid": "OnKu_u0Vh5nv7RjM_F4aHbuTSVjMl_hS",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/245197893472"
                ],
                "assetTypes": [
                  "filmstrip_bs"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_bs.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "6pn3q1VBsVNx",
                    "url": "http://link.theplatform.eu/s/qaJAph/6pn3q1VBsVNx",
                    "restrictionId": ""
                  }
                ]
              }
            ],
            "thumbnails": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757322",
                "guid": "xiRnU2bUWZq2rhhI688KwPRK6ZATrYcy",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 615,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Hero.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581434"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Hero.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757337",
                "guid": "i1gmE8W0HxG_KsxOjwJTx0jSuxaBEqpv",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_HeroMain.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581474"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero_main"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_HeroMain.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757359",
                "guid": "bvkeo8jK8nTDO4mWx9JPdUjxBXTPeVxd",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Character.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581430"
                ],
                "assetTypes": [
                  "src_character"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Character.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757365",
                "guid": "6sQRrCgyp_vP_0xWPWJSV9HAw_1s9Xeb",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Screenshot.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581475"
                ],
                "assetTypes": [
                  "src_screenshot"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Screenshot.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624435269179",
                "guid": "un4WlIAfcctzcv10eHOjQI3A0hlrkkp1",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 678,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Poster.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581441"
                ],
                "assetTypes": [
                  "src_poster"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Poster.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630639173408",
                "guid": "vmGt9wmCSvfjrkyb2xLjUAlCWCnlcWGt",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 677,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/HOVERY2018M/HOVERY2018M-474x677-PST.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581427"
                ],
                "assetTypes": [
                  "dsk_tab_poster_474x677"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-474x677-PST.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630639173412",
                "guid": "eYtRtL36TxJDX5bTMTTl31bGq16_pp14",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 614,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/HOVERY2018M/HOVERY2018M-1536x614-DHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581423"
                ],
                "assetTypes": [
                  "hero_1536x614"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-1536x614-DHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              }
            ]
          },
          {
            "ratings": [],
            "introStartSeconds": 0,
            "introEndSeconds": 0,
            "outroStartSeconds": 0,
            "outroEndSeconds": 0,
            "recapStartSeconds": 0,
            "recapEndSeconds": 0,
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/624435269142",
            "mediaTitle": "HOVER",
            "mediaGuid": "HOVERY2018MC",
            "availableDate": "2020-10-06T05:00Z",
            "expirationDate": 1633118112000,
            "content": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605382",
                "guid": "MoRaoufPzbSYszlLQmAqeOd3JaxORL34C",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941466"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "Lc_hU8gfPf21",
                    "url": "http://link.theplatform.eu/s/qaJAph/Lc_hU8gfPf21",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605388",
                "guid": "sTKa72e74ewdr6ULYep8bB0iUR021__DC",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453408"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_fairplay.ism/HOVERY2018M_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "v6NH82UEwGqv",
                    "url": "http://link.theplatform.eu/s/qaJAph/v6NH82UEwGqv",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605401",
                "guid": "JZfZcOTpYlGwYIUcwq70lbghALfRdeMNC",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/5416517342"
                ],
                "assetTypes": [
                  "filmstrip_199x110"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "e6J_057yKWBE",
                    "url": "http://link.theplatform.eu/s/qaJAph/e6J_057yKWBE",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605408",
                "guid": "oW2C48_kdtkDt3A_lQAeKUCIemCXz91KC",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965302"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC.ism/HOVERY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "8mhnW0iwaaNe",
                    "url": "http://link.theplatform.eu/s/qaJAph/8mhnW0iwaaNe",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605413",
                "guid": "dwu0IzTufgqbCsxI2LguiAuPDmCtDKpUC",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965306"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/Download/HOVERY2018MHEVC/OD_HOVERY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "JgCVWpwi57TA",
                    "url": "http://link.theplatform.eu/s/qaJAph/JgCVWpwi57TA",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605418",
                "guid": "qsBJ8KbIbdE7cw9cp4S6ZC3EC4PLCwFnC",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/338290757188"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "exGzf3Dv6T1J",
                    "url": "http://link.theplatform.eu/s/qaJAph/exGzf3Dv6T1J",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605421",
                "guid": "Xjnvb2W8BfsXQcPEra_sBH6IBPFMfLnxC",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "ar",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965359"
                ],
                "assetTypes": [
                  "dfxp_ar_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_ara.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "zDFFeorTCquA",
                    "url": "http://link.theplatform.eu/s/qaJAph/zDFFeorTCquA",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605422",
                "guid": "OYEfCvwnweI1rbSP7iMVK5oGpfOLu6DVC",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965365"
                ],
                "assetTypes": [
                  "dfxp_en_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_eng.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "tNS21NTyPbRo",
                    "url": "http://link.theplatform.eu/s/qaJAph/tNS21NTyPbRo",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605425",
                "guid": "hXs9eGo17ycU4wTo7ZafqfVuKTPytHMVC",
                "bitrate": 0,
                "duration": 0,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453431"
                ],
                "assetTypes": [
                  "video",
                  "dash_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/HOVERY2018MTRAILER.mpd",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "YCEL02_4NWf5",
                    "url": "http://link.theplatform.eu/s/qaJAph/YCEL02_4NWf5",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605427",
                "guid": "WNj0GvWmalF8P0MwxoBTZKA2Ke3X89RwC",
                "bitrate": 0,
                "duration": 0,
                "format": "ISM",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941497"
                ],
                "assetTypes": [
                  "video",
                  "hss_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/Manifest",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "LDtzVItU1YaD",
                    "url": "http://link.theplatform.eu/s/qaJAph/LDtzVItU1YaD",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605428",
                "guid": "Del5a7FlsD_VxzaDqscCq6mlKyQ4Ab0AC",
                "bitrate": 0,
                "duration": 0,
                "format": "M3U",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477004"
                ],
                "assetTypes": [
                  "video",
                  "hls_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/HOVERY2018MTRAILER.m3u8",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "MQdKgW8WDfbG",
                    "url": "http://link.theplatform.eu/s/qaJAph/MQdKgW8WDfbG",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605433",
                "guid": "xLphzR67EHWCMbuHf_olHpZSpycPl2KzC",
                "bitrate": 0,
                "duration": 0,
                "format": "F4M",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477007"
                ],
                "assetTypes": [
                  "video",
                  "hds_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/HOVERY2018MTRAILER.f4m",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "dH4QI2WhXS4R",
                    "url": "http://link.theplatform.eu/s/qaJAph/dH4QI2WhXS4R",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658117261",
                "guid": "FjWosHohHh7gRNVh7swfHKww4PVhzhy9C",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941470"
                ],
                "assetTypes": [
                  "video",
                  "dash_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.ism/HOVERY2018M.mpd",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "VoeRs0J4wn3F",
                    "url": "http://link.theplatform.eu/s/qaJAph/VoeRs0J4wn3F",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658117268",
                "guid": "qawsZkiG0X_mimmcPCYUnwwO5mM2xG6DC",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941465"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.ism/HOVERY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "_0jo1Sm_IQQT",
                    "url": "http://link.theplatform.eu/s/qaJAph/_0jo1Sm_IQQT",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658117298",
                "guid": "_VLKraz4yt19Z7kwblIgZ709mOku5Qi2C",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965322"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC_fairplay.ism/HOVERY2018MHEVC_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "aH2dafAJQ7Zb",
                    "url": "http://link.theplatform.eu/s/qaJAph/aH2dafAJQ7Zb",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658629012",
                "guid": "290_wVMdGn84LX9cQ81qIR6f4J01_ZBJC",
                "bitrate": 0,
                "duration": 5188.6,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/225515077038"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/Download/OD_HOVERY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "p__AvhQid7SD",
                    "url": "http://link.theplatform.eu/s/qaJAph/p__AvhQid7SD",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658629017",
                "guid": "OnKu_u0Vh5nv7RjM_F4aHbuTSVjMl_hSC",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/245197893472"
                ],
                "assetTypes": [
                  "filmstrip_bs"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_bs.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "6pn3q1VBsVNx",
                    "url": "http://link.theplatform.eu/s/qaJAph/6pn3q1VBsVNx",
                    "restrictionId": ""
                  }
                ]
              }
            ],
            "thumbnails": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757322",
                "guid": "xiRnU2bUWZq2rhhI688KwPRK6ZATrYcy",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 615,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Hero.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581434"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Hero.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757337",
                "guid": "i1gmE8W0HxG_KsxOjwJTx0jSuxaBEqpv",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_HeroMain.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581474"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero_main"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_HeroMain.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757359",
                "guid": "bvkeo8jK8nTDO4mWx9JPdUjxBXTPeVxd",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Character.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581430"
                ],
                "assetTypes": [
                  "src_character"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Character.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757365",
                "guid": "6sQRrCgyp_vP_0xWPWJSV9HAw_1s9Xeb",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Screenshot.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581475"
                ],
                "assetTypes": [
                  "src_screenshot"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Screenshot.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624435269179",
                "guid": "un4WlIAfcctzcv10eHOjQI3A0hlrkkp1",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 678,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Poster.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581441"
                ],
                "assetTypes": [
                  "src_poster"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Poster.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630639173408",
                "guid": "vmGt9wmCSvfjrkyb2xLjUAlCWCnlcWGt",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 677,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/HOVERY2018M/HOVERY2018M-474x677-PST.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581427"
                ],
                "assetTypes": [
                  "dsk_tab_poster_474x677"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-474x677-PST.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/630639173412",
                "guid": "eYtRtL36TxJDX5bTMTTl31bGq16_pp14",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 614,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/HOVERY2018M/HOVERY2018M-1536x614-DHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581423"
                ],
                "assetTypes": [
                  "hero_1536x614"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-1536x614-DHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              }
            ]
          }
        ],
        "arAgeRating": "15",
        "contentClassification": "Censored",
        "countryOfOrigin": "United States",
        "studio": "Universal_01",
        "friendlyTitle4Url": "hover",
        "has4K": "no",
        "fourkProgramId": "",
        "programType": "movie",
        "mediaContentDownloadUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC_fairplay.ism/HOVERY2018MHEVC_fairplay.m3u8",
        "addonContent": "starz",
        "userRating": 0,
        "thumbnails": {
          "thumb-0x0": {
            "assetTypes": [
              "src_screenshot"
            ],
            "height": 0,
            "title": "HOVERY2018M_Screenshot.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Screenshot.jpg",
            "width": 0
          },
          "thumb-614x1536": {
            "assetTypes": [
              "hero_1536x614"
            ],
            "height": 614,
            "title": "HOVERY2018M-1536x614-DHE.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-1536x614-DHE.jpg",
            "width": 1536
          },
          "thumb-678x474": {
            "assetTypes": [
              "src_poster"
            ],
            "height": 678,
            "title": "HOVERY2018M_Poster.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Poster.jpg",
            "width": 474
          },
          "thumb-677x474": {
            "assetTypes": [
              "dsk_tab_poster_474x677"
            ],
            "height": 677,
            "title": "HOVERY2018M-474x677-PST.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-474x677-PST.jpg",
            "width": 474
          },
          "thumb-615x1536": {
            "assetTypes": [
              "src_dsk_tab_hero"
            ],
            "height": 615,
            "title": "HOVERY2018M_Hero.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Hero.jpg",
            "width": 1536
          }
        }
      },
      {
        "titleId": "157657640162",
        "title": "BLACKKKLANSMAN",
        "sortTitle": "BLACKKKLANSMAN",
        "description": "Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
        "longDescription": "Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
        "shortDescription": "Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
        "titleLocalized": {
          "ar": "بلاككلانزمان",
          "en": "BLACKKKLANSMAN",
          "fr": "BlacKkKlansman - J'ai infiltré le Ku Klux Klan"
        },
        "sortTitleLocalized": {
          "ar": "بلاككلانزمان",
          "en": "BLACKKKLANSMAN",
          "fr": "BlacKkKlansman - J'ai infiltré le Ku Klux Klan"
        },
        "descriptionLocalized": {
          "ar": "مستوحى من أحداث حقيقية. ضابط شرطة أمريكي من أصل أفريقي في كولورادو سبرينغز، ينجح في التسلل إلى فرع كو كلوكس كلان المحلي بمساعدة وكيل يهودي ليصبح قائده في النهاية.",
          "en": "Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
          "fr": "L'histoire vraie de Ron Stallworth, devenu le premier officier Noir américain du Colorado Springs Police Department. Avec l'aide d'un substitut juif, il se fixe une mission des plus périlleuses : infiltrer le Ku Klux Klan pour en dénoncer les exactions."
        },
        "longDescriptionLocalized": {
          "ar": "مستوحى من أحداث حقيقية. ضابط شرطة أمريكي من أصل أفريقي في كولورادو سبرينغز، ينجح في التسلل إلى فرع كو كلوكس كلان المحلي بمساعدة وكيل يهودي ليصبح قائده في النهاية.",
          "en": "Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
          "fr": "L'histoire vraie de Ron Stallworth, devenu le premier officier Noir américain du Colorado Springs Police Department. Avec l'aide d'un substitut juif, il se fixe une mission des plus périlleuses : infiltrer le Ku Klux Klan pour en dénoncer les exactions."
        },
        "shortDescriptionLocalized": {
          "ar": "مستوحى من أحداث حقيقية. ضابط شرطة أمريكي من أصل أفريقي في كولورادو سبرينغز، ينجح في التسلل إلى فرع كو كلوكس كلان المحلي بمساعدة وكيل يهودي ليصبح قائده في النهاية.",
          "en": "Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
          "fr": "L'histoire vraie de Ron Stallworth, devenu le premier officier Noir américain du Colorado Springs Police Department. Avec l'aide d'un substitut juif, il se fixe une mission des plus périlleuses : infiltrer le Ku Klux Klan pour en dénoncer les exactions."
        },
        "titleCredits": [
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640163",
            "creditType": "Director",
            "isCameo": false,
            "isInactive": false,
            "order": 0,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONSPIKELEE_1",
            "personName": "Spike Lee"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640167",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 1,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONALECBALDWIN_1",
            "personName": "Alec Baldwin"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640164",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 2,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONJOHNDAVIDWASHINGTON_1",
            "personName": "John David Washington"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640166",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 3,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONROBERTJOHNBURKE_2",
            "personName": "Robert John Burke"
          }
        ],
        "languages": [
          "en"
        ],
        "tagIds": [
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400359",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400370",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/56819240179",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/57556008079"
        ],
        "tags": [
          {
            "tagTitle": "Drama",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Movies",
            "tagScheme": "urn:peg:category"
          },
          {
            "tagTitle": "Crime",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Biography",
            "tagScheme": "urn:peg:genre"
          }
        ],
        "imageMediaIds": [
          {
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/guid/2458698081/BLACKKKLANSMANY2018M",
            "isPrimary": true,
            "imageType": "thumb"
          }
        ],
        "year": 2018,
        "media": [
          {
            "ratings": [],
            "introStartSeconds": 0,
            "introEndSeconds": 0,
            "outroStartSeconds": 0,
            "outroEndSeconds": 0,
            "recapStartSeconds": 0,
            "recapEndSeconds": 0,
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/624381509031",
            "mediaTitle": "BLACKKKLANSMAN",
            "mediaGuid": "BLACKKKLANSMANY2018M",
            "availableDate": "2020-10-02T05:00Z",
            "expirationDate": 1633118100000,
            "content": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624622149441",
                "guid": "r9VUVdyYsMUQpaFATLYFsK1okSH9E6cX",
                "bitrate": 0,
                "duration": 8112.12,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453408"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M_fairplay.ism/BLACKKKLANSMANY2018M_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "9HpPYeauAcz8",
                    "url": "http://link.theplatform.eu/s/qaJAph/9HpPYeauAcz8",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624622149472",
                "guid": "dGetLJudOgIZOI6v3zU9SARKhaqfjiQT",
                "bitrate": 0,
                "duration": 8112.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965302"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MHEVC/BLACKKKLANSMANY2018MHEVC.ism/BLACKKKLANSMANY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "_xwUaFa__KXC",
                    "url": "http://link.theplatform.eu/s/qaJAph/_xwUaFa__KXC",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624622149488",
                "guid": "NITrsou5Rf0czAWdFbEGLOuFfDPpJ_VU",
                "bitrate": 0,
                "duration": 8112.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965306"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/Download/BLACKKKLANSMANY2018MHEVC/OD_BLACKKKLANSMANY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "0cgLf04uYL7C",
                    "url": "http://link.theplatform.eu/s/qaJAph/0cgLf04uYL7C",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624623173288",
                "guid": "TtVKk8EHcTvNKSwSJm509BwKL3obHoNq",
                "bitrate": 0,
                "duration": 8112.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941470"
                ],
                "assetTypes": [
                  "video",
                  "dash_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.ism/BLACKKKLANSMANY2018M.mpd",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "hkz_xSm4Fl3J",
                    "url": "http://link.theplatform.eu/s/qaJAph/hkz_xSm4Fl3J",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624623173314",
                "guid": "tUhWLht5Gku_TMQfo2K_ei323EtbjV1L",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/245197893472"
                ],
                "assetTypes": [
                  "filmstrip_bs"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M_bs.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "LYO9UIls9Tg6",
                    "url": "http://link.theplatform.eu/s/qaJAph/LYO9UIls9Tg6",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624623173343",
                "guid": "jQupHq6gIuTl_IvSIkK_KMV1PNYLsWXz",
                "bitrate": 0,
                "duration": 8112.12,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965322"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MHEVC/BLACKKKLANSMANY2018MHEVC_fairplay.ism/BLACKKKLANSMANY2018MHEVC_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "pMsCCvCLMmp2",
                    "url": "http://link.theplatform.eu/s/qaJAph/pMsCCvCLMmp2",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624623173383",
                "guid": "r0BjXyU9xrbbBwgHOUPKMuIYYVDxTDPg",
                "bitrate": 0,
                "duration": 0,
                "format": "F4M",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477007"
                ],
                "assetTypes": [
                  "video",
                  "hds_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MTRAILER/BLACKKKLANSMANY2018MTRAILER.ism/BLACKKKLANSMANY2018MTRAILER.f4m",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "cIoHb2OXKBQJ",
                    "url": "http://link.theplatform.eu/s/qaJAph/cIoHb2OXKBQJ",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624623685008",
                "guid": "D5FYo5NOUsBy9D_Jr_eaHa52VEO7sP05",
                "bitrate": 0,
                "duration": 8112.12,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/338290757188"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MHEVC/BLACKKKLANSMANY2018MHEVC.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "B0VI8L2jXmQK",
                    "url": "http://link.theplatform.eu/s/qaJAph/B0VI8L2jXmQK",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624623685028",
                "guid": "W62Ws6_tE1KrLgin3Otkr46MoGW9BcHk",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "ar",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965359"
                ],
                "assetTypes": [
                  "dfxp_ar_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M_ara.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "WlI7SkV5O0CO",
                    "url": "http://link.theplatform.eu/s/qaJAph/WlI7SkV5O0CO",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624623685053",
                "guid": "AMpJVr1KKRCcHsQEKdz0kpg_x_gvfqO9",
                "bitrate": 0,
                "duration": 0,
                "format": "M3U",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477004"
                ],
                "assetTypes": [
                  "video",
                  "hls_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MTRAILER/BLACKKKLANSMANY2018MTRAILER.ism/BLACKKKLANSMANY2018MTRAILER.m3u8",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "s0ID_Smnx7Vb",
                    "url": "http://link.theplatform.eu/s/qaJAph/s0ID_Smnx7Vb",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624624197084",
                "guid": "1ncBmFAVQnFHNW9H7nnIB8HkqK1SJSBr",
                "bitrate": 0,
                "duration": 8112.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941465"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.ism/BLACKKKLANSMANY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "ozJAgvnDbbQM",
                    "url": "http://link.theplatform.eu/s/qaJAph/ozJAgvnDbbQM",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624624197090",
                "guid": "32ZJc_KfPCwAgAWtAQt8BvHVWEIv7nNO",
                "bitrate": 0,
                "duration": 8112.12,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/225515077038"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/Download/OD_BLACKKKLANSMANY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "i_m1H56uDoR5",
                    "url": "http://link.theplatform.eu/s/qaJAph/i_m1H56uDoR5",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624624197097",
                "guid": "LEBLqjQed35HQhaeLr_G3_rwM_NwbugB",
                "bitrate": 0,
                "duration": 8112.12,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941466"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "6WLSE_YOkZkQ",
                    "url": "http://link.theplatform.eu/s/qaJAph/6WLSE_YOkZkQ",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624624197117",
                "guid": "_KMCGhtT825PKhWw63IJSLs_sDmbUhtE",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/5416517342"
                ],
                "assetTypes": [
                  "filmstrip_199x110"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "Yd3IJ3PMSSKQ",
                    "url": "http://link.theplatform.eu/s/qaJAph/Yd3IJ3PMSSKQ",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624624197176",
                "guid": "MSMYhC_Lw7e1ndx_8Npy6s9KrqQ_2nan",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965365"
                ],
                "assetTypes": [
                  "dfxp_en_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M_eng.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "H1x_2iS9AMeG",
                    "url": "http://link.theplatform.eu/s/qaJAph/H1x_2iS9AMeG",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624624197182",
                "guid": "GXfKh9Vs_ANjZMR_AyQ91rE7WsyoOSzY",
                "bitrate": 0,
                "duration": 0,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453431"
                ],
                "assetTypes": [
                  "video",
                  "dash_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MTRAILER/BLACKKKLANSMANY2018MTRAILER.ism/BLACKKKLANSMANY2018MTRAILER.mpd",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "hIBw2BiTPs_Y",
                    "url": "http://link.theplatform.eu/s/qaJAph/hIBw2BiTPs_Y",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624624197184",
                "guid": "vkRxzg_wdNXlnGdXU_4Z_zoTPGht5b5e",
                "bitrate": 0,
                "duration": 0,
                "format": "ISM",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941497"
                ],
                "assetTypes": [
                  "video",
                  "hss_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MTRAILER/BLACKKKLANSMANY2018MTRAILER.ism/Manifest",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "TcrMwCz2buYd",
                    "url": "http://link.theplatform.eu/s/qaJAph/TcrMwCz2buYd",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              }
            ],
            "thumbnails": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624380997352",
                "guid": "ghB8Z_n_8m_PFBnVh8ghrK_W_9aeAztq",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Character.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581430"
                ],
                "assetTypes": [
                  "src_character"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Character.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624380997374",
                "guid": "NWKW2c8gwovDlDnwshBH9rhzfLdryaAi",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 615,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Hero.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581434"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Hero.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624381509032",
                "guid": "_ZwfKvu64DPYwTbAmAnbbaV9p3hYkRpB",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Screenshot.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581475"
                ],
                "assetTypes": [
                  "src_screenshot"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Screenshot.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624381509033",
                "guid": "jptMaMzaQW1aSa5tJpKMjrTrzAb_roaX",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 678,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Poster.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581441"
                ],
                "assetTypes": [
                  "src_poster"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Poster.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624382021191",
                "guid": "6NXVW2BPaKuduNqAPY3lBgDrS8BaT7j_",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 801,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_HeroMain.jpg",
                "width": 2000,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581474"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero_main"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_HeroMain.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624416325386",
                "guid": "7EJAOx_ctKJkvAWUsn1nN3vygl8gQQPg",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 677,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-474x677-PST.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581427"
                ],
                "assetTypes": [
                  "dsk_tab_poster_474x677"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-474x677-PST.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624417861049",
                "guid": "hJrzlvllQ8VugyihDxXyqIVKmOhCjJdR",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 614,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x614-DHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581423"
                ],
                "assetTypes": [
                  "hero_1536x614"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x614-DHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/629529157052",
                "guid": "h0xV_8KBMNRGqnuWwpdGxWoWDeGoPzGY",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 613,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x613-DMHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581425"
                ],
                "assetTypes": [
                  "hero_main_1536x613"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x613-DMHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              }
            ]
          }
        ],
        "arAgeRating": "18",
        "contentClassification": "Uncensored",
        "countryOfOrigin": "United States",
        "studio": "Universal_01",
        "friendlyTitle4Url": "blackkklansman",
        "has4K": "no",
        "fourkProgramId": "",
        "programType": "movie",
        "mediaContentDownloadUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.ism/BLACKKKLANSMANY2018M.mpd",
        "addonContent": "starz",
        "userRating": 0,
        "thumbnails": {
          "thumb-0x0": {
            "assetTypes": [
              "src_screenshot"
            ],
            "height": 0,
            "title": "BLACKKKLANSMANY2018M_Screenshot.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Screenshot.jpg",
            "width": 0
          },
          "thumb-614x1536": {
            "assetTypes": [
              "hero_1536x614"
            ],
            "height": 614,
            "title": "BLACKKKLANSMANY2018M-1536x614-DHE.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x614-DHE.jpg",
            "width": 1536
          },
          "thumb-613x1536": {
            "assetTypes": [
              "hero_main_1536x613"
            ],
            "height": 613,
            "title": "BLACKKKLANSMANY2018M-1536x613-DMHE.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x613-DMHE.jpg",
            "width": 1536
          },
          "thumb-801x2000": {
            "assetTypes": [
              "src_dsk_tab_hero_main"
            ],
            "height": 801,
            "title": "BLACKKKLANSMANY2018M_HeroMain.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_HeroMain.jpg",
            "width": 2000
          },
          "thumb-678x474": {
            "assetTypes": [
              "src_poster"
            ],
            "height": 678,
            "title": "BLACKKKLANSMANY2018M_Poster.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Poster.jpg",
            "width": 474
          },
          "thumb-677x474": {
            "assetTypes": [
              "dsk_tab_poster_474x677"
            ],
            "height": 677,
            "title": "BLACKKKLANSMANY2018M-474x677-PST.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-474x677-PST.jpg",
            "width": 474
          },
          "thumb-615x1536": {
            "assetTypes": [
              "src_dsk_tab_hero"
            ],
            "height": 615,
            "title": "BLACKKKLANSMANY2018M_Hero.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Hero.jpg",
            "width": 1536
          }
        }
      },
      {
        "titleId": "157657128333",
        "title": "THE FIRST PURGE",
        "sortTitle": "THE FIRST PURGE",
        "description": "The First Purge takes us all the way back to when it all began! The New Founding Fathers of America started an experiment of 12 hours of no laws... but what happens next will change the nation all together!",
        "longDescription": "The First Purge takes us all the way back to when it all began! The New Founding Fathers of America started an experiment of 12 hours of no laws... but what happens next will change the nation all together!",
        "shortDescription": "The First Purge takes us all the way back to when it all began! The New Founding Fathers of America started an experiment of 12 hours of no laws... but what happens next will change the nation all together!",
        "titleLocalized": {
          "ar": "ذا فيرست بيردج",
          "en": "THE FIRST PURGE"
        },
        "sortTitleLocalized": {
          "ar": "ذا فيرست بيردج",
          "en": "THE FIRST PURGE"
        },
        "descriptionLocalized": {
          "ar": "فيلم رعب دموي غني عن التعريف! تأخذنا أحداث هذا الجزء إلى البداية، حيث بدأ الآباء المؤسسون الجدد لأمريكا تجربة مدتها 12 ساعة من عدم وجود قوانين ... لكن ما سيحدث بعد ذلك سيغير الأمة تماماً!",
          "en": "The First Purge takes us all the way back to when it all began! The New Founding Fathers of America started an experiment of 12 hours of no laws... but what happens next will change the nation all together!"
        },
        "longDescriptionLocalized": {
          "ar": "فيلم رعب دموي غني عن التعريف! تأخذنا أحداث هذا الجزء إلى البداية، حيث بدأ الآباء المؤسسون الجدد لأمريكا تجربة مدتها 12 ساعة من عدم وجود قوانين ... لكن ما سيحدث بعد ذلك سيغير الأمة تماماً!",
          "en": "The First Purge takes us all the way back to when it all began! The New Founding Fathers of America started an experiment of 12 hours of no laws... but what happens next will change the nation all together!"
        },
        "shortDescriptionLocalized": {
          "ar": "فيلم رعب دموي غني عن التعريف! تأخذنا أحداث هذا الجزء إلى البداية، حيث بدأ الآباء المؤسسون الجدد لأمريكا تجربة مدتها 12 ساعة من عدم وجود قوانين ... لكن ما سيحدث بعد ذلك سيغير الأمة تماماً!",
          "en": "The First Purge takes us all the way back to when it all began! The New Founding Fathers of America started an experiment of 12 hours of no laws... but what happens next will change the nation all together!"
        },
        "languages": [
          "en"
        ],
        "tagIds": [
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400362",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400370",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/57216552285",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/57556008094"
        ],
        "tags": [
          {
            "tagTitle": "Action",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Movies",
            "tagScheme": "urn:peg:category"
          },
          {
            "tagTitle": "Horror",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Sci-Fi",
            "tagScheme": "urn:peg:genre"
          }
        ],
        "imageMediaIds": [
          {
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/guid/2458698081/THEFIRSTPURGEY2018M",
            "isPrimary": true,
            "imageType": "thumb"
          }
        ],
        "year": 2018,
        "media": [
          {
            "ratings": [],
            "introStartSeconds": 0,
            "introEndSeconds": 0,
            "outroStartSeconds": 0,
            "outroEndSeconds": 0,
            "recapStartSeconds": 0,
            "recapEndSeconds": 0,
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/624382021149",
            "mediaTitle": "THE FIRST PURGE",
            "mediaGuid": "THEFIRSTPURGEY2018M",
            "availableDate": "2020-10-02T05:00Z",
            "expirationDate": 1633118100000,
            "content": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624471109399",
                "guid": "TZZVZZ_y159v5HTNZzHbuaLZ8GDa_gxc",
                "bitrate": 0,
                "duration": 5844.28,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941466"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018M.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "h9slSG2rtap4",
                    "url": "http://link.theplatform.eu/s/qaJAph/h9slSG2rtap4",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624471109409",
                "guid": "2bJK8RWN2GfMYeO4jFCAgtGjTor0oiHP",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/5416517342"
                ],
                "assetTypes": [
                  "filmstrip_199x110"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018M.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "CUbcVQjwSiLj",
                    "url": "http://link.theplatform.eu/s/qaJAph/CUbcVQjwSiLj",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624471109417",
                "guid": "JTiVdW4eqbJ9L8JwMx2XXe6hMY6LwqRr",
                "bitrate": 0,
                "duration": 5844.28,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965322"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018MHEVC/THEFIRSTPURGEY2018MHEVC_fairplay.ism/THEFIRSTPURGEY2018MHEVC_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "jwOena5m0T6q",
                    "url": "http://link.theplatform.eu/s/qaJAph/jwOena5m0T6q",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624471109479",
                "guid": "2z38fSIPU3cg2_lbFWBGI6MM_CCpdC1Z",
                "bitrate": 0,
                "duration": 0,
                "format": "F4M",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477007"
                ],
                "assetTypes": [
                  "video",
                  "hds_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018MTRAILER/THEFIRSTPURGEY2018MTRAILER.ism/THEFIRSTPURGEY2018MTRAILER.f4m",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "PySRpbz9yptZ",
                    "url": "http://link.theplatform.eu/s/qaJAph/PySRpbz9yptZ",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624471621175",
                "guid": "oN_ku0WmpJyUCv16qk52lNc3yEpvOXZV",
                "bitrate": 0,
                "duration": 5844.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965302"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018MHEVC/THEFIRSTPURGEY2018MHEVC.ism/THEFIRSTPURGEY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "yQuOvX9kpfq0",
                    "url": "http://link.theplatform.eu/s/qaJAph/yQuOvX9kpfq0",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624471621186",
                "guid": "hUu8zkx7AJAZEY_Qa2uuZuzwtJgSpIyx",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "ar",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965359"
                ],
                "assetTypes": [
                  "dfxp_ar_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018M_ara.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "eMBG71W8_Wo8",
                    "url": "http://link.theplatform.eu/s/qaJAph/eMBG71W8_Wo8",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624471621203",
                "guid": "bpQO6R7VhDa3VkEFNp4_Eo37hZen4E6U",
                "bitrate": 0,
                "duration": 0,
                "format": "ISM",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941497"
                ],
                "assetTypes": [
                  "video",
                  "hss_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018MTRAILER/THEFIRSTPURGEY2018MTRAILER.ism/Manifest",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "6CePUpj6Pnfu",
                    "url": "http://link.theplatform.eu/s/qaJAph/6CePUpj6Pnfu",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624471621204",
                "guid": "5xF_plWGNlZGI6UCa9XsRYHlAIuq4ubz",
                "bitrate": 0,
                "duration": 0,
                "format": "M3U",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477004"
                ],
                "assetTypes": [
                  "video",
                  "hls_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018MTRAILER/THEFIRSTPURGEY2018MTRAILER.ism/THEFIRSTPURGEY2018MTRAILER.m3u8",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "ll2lqngIBsdo",
                    "url": "http://link.theplatform.eu/s/qaJAph/ll2lqngIBsdo",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624473157113",
                "guid": "PsjU8lbFHtY_I50QKVTANewKUSrtu9L2",
                "bitrate": 0,
                "duration": 5844.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941470"
                ],
                "assetTypes": [
                  "video",
                  "dash_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018M.ism/THEFIRSTPURGEY2018M.mpd",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "yjDAenksQ9NO",
                    "url": "http://link.theplatform.eu/s/qaJAph/yjDAenksQ9NO",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624473157128",
                "guid": "r_KqQt_8Vr_hrlqDCCSe4lR64OO8HizM",
                "bitrate": 0,
                "duration": 5844.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941465"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018M.ism/THEFIRSTPURGEY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "2QVZuieG_Waq",
                    "url": "http://link.theplatform.eu/s/qaJAph/2QVZuieG_Waq",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624473157134",
                "guid": "inT_GG9I9KhHxC4GfO3eCw7F_Kn0wJxO",
                "bitrate": 0,
                "duration": 5844.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/225515077038"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/Download/OD_THEFIRSTPURGEY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "sOVrgDUWa5Zq",
                    "url": "http://link.theplatform.eu/s/qaJAph/sOVrgDUWa5Zq",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624473157141",
                "guid": "j2DHuuHUAgD7z5FJtsAfwfNKoIQy3_ym",
                "bitrate": 0,
                "duration": 5844.28,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453408"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018M_fairplay.ism/THEFIRSTPURGEY2018M_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "6MeHJClWmJhS",
                    "url": "http://link.theplatform.eu/s/qaJAph/6MeHJClWmJhS",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624473157192",
                "guid": "x_fgBFiwxwlZcIleagbq3JZ1bsRbux6P",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/245197893472"
                ],
                "assetTypes": [
                  "filmstrip_bs"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018M_bs.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "3_v6jaIhl_wC",
                    "url": "http://link.theplatform.eu/s/qaJAph/3_v6jaIhl_wC",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624473157197",
                "guid": "s3msBEZ7XtalfYPf29bhEAJksXy_XwBN",
                "bitrate": 0,
                "duration": 5844.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965306"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/Download/THEFIRSTPURGEY2018MHEVC/OD_THEFIRSTPURGEY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "rEY_VwDGurVM",
                    "url": "http://link.theplatform.eu/s/qaJAph/rEY_VwDGurVM",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624473157208",
                "guid": "82IqPy11BdOq14_gUXr3aUcY8L9YdgGt",
                "bitrate": 0,
                "duration": 5844.28,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/338290757188"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018MHEVC/THEFIRSTPURGEY2018MHEVC.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "U9vj_59CG14r",
                    "url": "http://link.theplatform.eu/s/qaJAph/U9vj_59CG14r",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624473157228",
                "guid": "_lo3T34PVN294kBQ5N5LxXqwfrXikNdv",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965365"
                ],
                "assetTypes": [
                  "dfxp_en_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018M_eng.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "ODHW_Bp0uBrX",
                    "url": "http://link.theplatform.eu/s/qaJAph/ODHW_Bp0uBrX",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624473157238",
                "guid": "bJi4s1gUgVLKIacZdjHnonGoEdtTOM1y",
                "bitrate": 0,
                "duration": 0,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453431"
                ],
                "assetTypes": [
                  "video",
                  "dash_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/THEFIRSTPURGEY2018MTRAILER/THEFIRSTPURGEY2018MTRAILER.ism/THEFIRSTPURGEY2018MTRAILER.mpd",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "NnPuqsgpMWP_",
                    "url": "http://link.theplatform.eu/s/qaJAph/NnPuqsgpMWP_",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              }
            ],
            "thumbnails": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624381509013",
                "guid": "Zazsq8FtP2A7IXXRha8B_sNpjmssh29b",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 615,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Hero.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581434"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Hero.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624382021151",
                "guid": "4kU7aEqt2OykCZ0G6A0_LMKXsPX9LEup",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Character.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581430"
                ],
                "assetTypes": [
                  "src_character"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Character.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624382021153",
                "guid": "_i9dey_yymZVywyIPBM1ejHC_wyyqVZv",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_HeroMain.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581474"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero_main"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_HeroMain.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624382021154",
                "guid": "xJ_WxnXij_U3gldggAtihM5uVBZCa45X",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 678,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Poster.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581441"
                ],
                "assetTypes": [
                  "src_poster"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Poster.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624382021155",
                "guid": "E_xcUjDGFlC_IWeF1zsAwfDTVjlpgBNa",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Screenshot.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581475"
                ],
                "assetTypes": [
                  "src_screenshot"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Screenshot.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624417349345",
                "guid": "14zkd1vIwHxf7RFpYLHy8Xoo6M6P4nzu",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 614,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M-1536x614-DHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581423"
                ],
                "assetTypes": [
                  "hero_1536x614"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M-1536x614-DHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624417861047",
                "guid": "hTMavQWfkF06Oho_k4FQALUIDRmrMfnu",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 677,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M-474x677-PST.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581427"
                ],
                "assetTypes": [
                  "dsk_tab_poster_474x677"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M-474x677-PST.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              }
            ]
          }
        ],
        "arAgeRating": "18",
        "countryOfOrigin": "United States",
        "studio": "Universal_01",
        "friendlyTitle4Url": "the-first-purge",
        "has4K": "no",
        "fourkProgramId": "",
        "programType": "movie",
        "mediaContentDownloadUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/THEFIRSTPURGEY2018M/3be8aafff670604e6e54a4a7ffc506d7/Download/OD_THEFIRSTPURGEY2018M.mpd",
        "addonContent": "starz",
        "userRating": 0,
        "thumbnails": {
          "thumb-0x0": {
            "assetTypes": [
              "src_screenshot"
            ],
            "height": 0,
            "title": "THEFIRSTPURGEY2018M_Screenshot.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Screenshot.jpg",
            "width": 0
          },
          "thumb-614x1536": {
            "assetTypes": [
              "hero_1536x614"
            ],
            "height": 614,
            "title": "THEFIRSTPURGEY2018M-1536x614-DHE.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M-1536x614-DHE.jpg",
            "width": 1536
          },
          "thumb-678x474": {
            "assetTypes": [
              "src_poster"
            ],
            "height": 678,
            "title": "THEFIRSTPURGEY2018M_Poster.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Poster.jpg",
            "width": 474
          },
          "thumb-677x474": {
            "assetTypes": [
              "dsk_tab_poster_474x677"
            ],
            "height": 677,
            "title": "THEFIRSTPURGEY2018M-474x677-PST.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M-474x677-PST.jpg",
            "width": 474
          },
          "thumb-615x1536": {
            "assetTypes": [
              "src_dsk_tab_hero"
            ],
            "height": 615,
            "title": "THEFIRSTPURGEY2018M_Hero.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/THEFIRSTPURGEY2018M/THEFIRSTPURGEY2018M_Hero.jpg",
            "width": 1536
          }
        }
      },
      {
        "titleId": "157657640157",
        "title": "SKYSCRAPER",
        "sortTitle": "SKYSCRAPER",
        "description": "In a desperate attempt to save his family from a burning 225 stories skyscraper, Dwayne The Rock Johnson races against time to save the day!",
        "longDescription": "In a desperate attempt to save his family from a burning 225 stories skyscraper, Dwayne The Rock Johnson races against time to save the day!",
        "shortDescription": "In a desperate attempt to save his family from a burning 225 stories skyscraper, Dwayne The Rock Johnson races against time to save the day!",
        "titleLocalized": {
          "ar": "سكايسكريبر",
          "en": "SKYSCRAPER",
          "fr": "SKYSCRAPER"
        },
        "sortTitleLocalized": {
          "ar": "سكايسكريبر",
          "en": "SKYSCRAPER",
          "fr": "SKYSCRAPER"
        },
        "descriptionLocalized": {
          "ar": "في محاولة يائسة لإنقاذ عائلته من برج يحترق، يحاول دواين ذا روك جونسون إنقاذهم من قلب النيران الحارقة.",
          "en": "In a desperate attempt to save his family from a burning 225 stories skyscraper, Dwayne The Rock Johnson races against time to save the day!",
          "fr": "Dans une tentative désespérée pour sauver sa famille d'un gratte-ciel de 225 étages en flammes, Dwayne The Rock Johnson défie le temps pour sauver la situation !"
        },
        "longDescriptionLocalized": {
          "ar": "في محاولة يائسة لإنقاذ عائلته من برج يحترق، يحاول دواين ذا روك جونسون إنقاذهم من قلب النيران الحارقة.",
          "en": "In a desperate attempt to save his family from a burning 225 stories skyscraper, Dwayne The Rock Johnson races against time to save the day!",
          "fr": "Dans une tentative désespérée pour sauver sa famille d'un gratte-ciel de 225 étages en flammes, Dwayne The Rock Johnson défie le temps pour sauver la situation !"
        },
        "shortDescriptionLocalized": {
          "ar": "في محاولة يائسة لإنقاذ عائلته من برج يحترق، يحاول دواين ذا روك جونسون إنقاذهم من قلب النيران الحارقة.",
          "en": "In a desperate attempt to save his family from a burning 225 stories skyscraper, Dwayne The Rock Johnson races against time to save the day!",
          "fr": "Dans une tentative désespérée pour sauver sa famille d'un gratte-ciel de 225 étages en flammes, Dwayne The Rock Johnson défie le temps pour sauver la situation !"
        },
        "titleCredits": [
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640158",
            "creditType": "Director",
            "isCameo": false,
            "isInactive": false,
            "order": 0,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONRAWSONMARSHALLTHURBER_1",
            "personName": "Rawson Marshall Thurber"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640161",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 1,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONDWAYNEJOHNSON_1",
            "personName": "Dwayne Johnson"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640159",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 2,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONNEVECAMPBELL_1",
            "personName": "Neve Campbell"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640160",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 3,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONCHINHAN_1",
            "personName": "Chin Han"
          }
        ],
        "languages": [
          "en"
        ],
        "tagIds": [
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400357",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400362",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400370",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/57149480034"
        ],
        "tags": [
          {
            "tagTitle": "Thriller",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Action",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Movies",
            "tagScheme": "urn:peg:category"
          },
          {
            "tagTitle": "Adventure",
            "tagScheme": "urn:peg:genre"
          }
        ],
        "imageMediaIds": [
          {
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/guid/2458698081/SKYSCRAPERY2018M",
            "isPrimary": true,
            "imageType": "thumb"
          }
        ],
        "year": 2018,
        "media": [
          {
            "ratings": [],
            "introStartSeconds": 0,
            "introEndSeconds": 0,
            "outroStartSeconds": 0,
            "outroEndSeconds": 0,
            "recapStartSeconds": 0,
            "recapEndSeconds": 0,
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/624379973473",
            "mediaTitle": "SKYSCRAPER",
            "mediaGuid": "SKYSCRAPERY2018M",
            "availableDate": "2020-10-02T05:00Z",
            "expirationDate": 1633118100000,
            "content": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624478789219",
                "guid": "hufVm2pUxjMstLuAsPeGcn91IJiCN_hM",
                "bitrate": 0,
                "duration": 6143.28,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453408"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018M_fairplay.ism/SKYSCRAPERY2018M_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "kgxK_HY_oQsp",
                    "url": "http://link.theplatform.eu/s/qaJAph/kgxK_HY_oQsp",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624478789224",
                "guid": "U3ejGlGLHlTCH4cBg75JifIXiRHZQsBd",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/5416517342"
                ],
                "assetTypes": [
                  "filmstrip_199x110"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018M.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "_13vu1cl_m8I",
                    "url": "http://link.theplatform.eu/s/qaJAph/_13vu1cl_m8I",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624478789270",
                "guid": "y9L5jPF4ncCh2ZMtdeIkIlrzvvLRgcdv",
                "bitrate": 0,
                "duration": 0,
                "format": "M3U",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477004"
                ],
                "assetTypes": [
                  "video",
                  "hls_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018MTRAILER/SKYSCRAPERY2018MTRAILER.ism/SKYSCRAPERY2018MTRAILER.m3u8",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "oL36Qrl8XPaO",
                    "url": "http://link.theplatform.eu/s/qaJAph/oL36Qrl8XPaO",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624478789277",
                "guid": "m0XCoOv9FN4AMPZdobhFZE1wrYtpq4FR",
                "bitrate": 0,
                "duration": 0,
                "format": "F4M",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477007"
                ],
                "assetTypes": [
                  "video",
                  "hds_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018MTRAILER/SKYSCRAPERY2018MTRAILER.ism/SKYSCRAPERY2018MTRAILER.f4m",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "2XBANbkwIq8K",
                    "url": "http://link.theplatform.eu/s/qaJAph/2XBANbkwIq8K",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479301163",
                "guid": "P8mxIZZPAnLY9o3rSy6MN3WFBsQ_rqcR",
                "bitrate": 0,
                "duration": 6143.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941465"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018M.ism/SKYSCRAPERY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "s9ocUeWycerv",
                    "url": "http://link.theplatform.eu/s/qaJAph/s9ocUeWycerv",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479301184",
                "guid": "_bmJPpHwMZQM5FqIZ80Ydl_KlNsDOc4U",
                "bitrate": 0,
                "duration": 6143.28,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941466"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018M.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "2a4jENCThT_x",
                    "url": "http://link.theplatform.eu/s/qaJAph/2a4jENCThT_x",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479301191",
                "guid": "jZBVxU0yh698JN50I6t6W0_aTQGxv7Ju",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/245197893472"
                ],
                "assetTypes": [
                  "filmstrip_bs"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018M_bs.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "IFrQNWh2n27u",
                    "url": "http://link.theplatform.eu/s/qaJAph/IFrQNWh2n27u",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479301193",
                "guid": "awY04I44ciWAyfL7LfayTsaOeFhK0HZf",
                "bitrate": 0,
                "duration": 6143.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965302"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018MHEVC/SKYSCRAPERY2018MHEVC.ism/SKYSCRAPERY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "pRr8Q_D0Rod3",
                    "url": "http://link.theplatform.eu/s/qaJAph/pRr8Q_D0Rod3",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479301194",
                "guid": "8z4ja0ZYo0utsRbE33w1x0tqdOTQFexC",
                "bitrate": 0,
                "duration": 6143.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965306"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/Download/SKYSCRAPERY2018MHEVC/OD_SKYSCRAPERY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "4sZzOuvFt2nt",
                    "url": "http://link.theplatform.eu/s/qaJAph/4sZzOuvFt2nt",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479301196",
                "guid": "rpCYnZY812eh15R8V8qrjSAcy6XjNpkw",
                "bitrate": 0,
                "duration": 6143.28,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965322"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018MHEVC/SKYSCRAPERY2018MHEVC_fairplay.ism/SKYSCRAPERY2018MHEVC_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "YYAG6LgIzqOu",
                    "url": "http://link.theplatform.eu/s/qaJAph/YYAG6LgIzqOu",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479301202",
                "guid": "7iy5hjbTa2zvdG5ZfKi8KnNSEy4c4Jma",
                "bitrate": 0,
                "duration": 6143.28,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/338290757188"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018MHEVC/SKYSCRAPERY2018MHEVC.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "eCK1xWBUH_xd",
                    "url": "http://link.theplatform.eu/s/qaJAph/eCK1xWBUH_xd",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479301252",
                "guid": "EzjD_zXV2J5P8bjeiIgTgbRrdDoyBXu3",
                "bitrate": 0,
                "duration": 0,
                "format": "ISM",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941497"
                ],
                "assetTypes": [
                  "video",
                  "hss_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018MTRAILER/SKYSCRAPERY2018MTRAILER.ism/Manifest",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "FyYc08ReNwhq",
                    "url": "http://link.theplatform.eu/s/qaJAph/FyYc08ReNwhq",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479813004",
                "guid": "pe_CibLPjhTAkvewfp5IKL2GVxTZ3ZR3",
                "bitrate": 0,
                "duration": 6143.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941470"
                ],
                "assetTypes": [
                  "video",
                  "dash_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018M.ism/SKYSCRAPERY2018M.mpd",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "l8lpKO1lYhJ0",
                    "url": "http://link.theplatform.eu/s/qaJAph/l8lpKO1lYhJ0",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479813015",
                "guid": "QyP91JicLhraAktjab__jQvjB9SupXaw",
                "bitrate": 0,
                "duration": 6143.28,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/225515077038"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/Download/OD_SKYSCRAPERY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "vG5C_RGTpXpD",
                    "url": "http://link.theplatform.eu/s/qaJAph/vG5C_RGTpXpD",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479813030",
                "guid": "__RWjs0JBtDGmmBivfujuDgoopERk_QS",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "ar",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965359"
                ],
                "assetTypes": [
                  "dfxp_ar_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018M_ara.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "TgRAPorqOJPm",
                    "url": "http://link.theplatform.eu/s/qaJAph/TgRAPorqOJPm",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479813034",
                "guid": "pEQhD8N3k1tP1gfqTce6Bt4ki5Y_qZ7r",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965365"
                ],
                "assetTypes": [
                  "dfxp_en_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018M_eng.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "eectkyIhcdQi",
                    "url": "http://link.theplatform.eu/s/qaJAph/eectkyIhcdQi",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624479813045",
                "guid": "cdq7R2Fu8BOFCd2_d_jdgxbZq2gErUM1",
                "bitrate": 0,
                "duration": 0,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453431"
                ],
                "assetTypes": [
                  "video",
                  "dash_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/SKYSCRAPERY2018MTRAILER/SKYSCRAPERY2018MTRAILER.ism/SKYSCRAPERY2018MTRAILER.mpd",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "tCZ3WWCDn4NM",
                    "url": "http://link.theplatform.eu/s/qaJAph/tCZ3WWCDn4NM",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              }
            ],
            "thumbnails": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624379973485",
                "guid": "1YShuz__IDHApq7VuMlMEocdCg8S6iRC",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 801,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_HeroMain.jpg",
                "width": 2000,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581474"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero_main"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_HeroMain.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624380997253",
                "guid": "Kh_Cer4AhWhLijT5hZekdJ4zowdqjBP_",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Screenshot.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581475"
                ],
                "assetTypes": [
                  "src_screenshot"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Screenshot.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624382021115",
                "guid": "nGutATQ4gtt6e9_JjhAVJllqJ8qXbmxe",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 615,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Hero.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581434"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Hero.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624382021121",
                "guid": "Rhnvum7qxZQWQFBsUoIeMEharbZ4eaVl",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 678,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Poster.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581441"
                ],
                "assetTypes": [
                  "src_poster"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Poster.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624382021144",
                "guid": "P5rstnF38uK7aH6ynYQsztBxXtGXp5aB",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Character.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581430"
                ],
                "assetTypes": [
                  "src_character"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Character.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624416837439",
                "guid": "el4vA26RcCZYlY26FO6JFF95dn_Lygpd",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 613,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/SKYSCRAPERY2018M/SKYSCRAPERY2018M-1536x613-DMHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581425"
                ],
                "assetTypes": [
                  "hero_main_1536x613"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/SKYSCRAPERY2018M/SKYSCRAPERY2018M-1536x613-DMHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624417861048",
                "guid": "KNZsjb3Z2N05fInyeTDeZ_W4sLiYjrio",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 677,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/SKYSCRAPERY2018M/SKYSCRAPERY2018M-474x677-PST.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581427"
                ],
                "assetTypes": [
                  "dsk_tab_poster_474x677"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/SKYSCRAPERY2018M/SKYSCRAPERY2018M-474x677-PST.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624417861050",
                "guid": "TtP0W11CL_VI2baddlKfpPAajCbucJCm",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 614,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/SKYSCRAPERY2018M/SKYSCRAPERY2018M-1536x614-DHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581423"
                ],
                "assetTypes": [
                  "hero_1536x614"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/SKYSCRAPERY2018M/SKYSCRAPERY2018M-1536x614-DHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              }
            ]
          }
        ],
        "arAgeRating": "15",
        "countryOfOrigin": "United States",
        "studio": "Universal_01",
        "friendlyTitle4Url": "skyscraper",
        "has4K": "no",
        "fourkProgramId": "",
        "programType": "movie",
        "mediaContentDownloadUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/SKYSCRAPERY2018M/7d8e5b6d86b9938375ff47f13e0307ed/Download/SKYSCRAPERY2018MHEVC/OD_SKYSCRAPERY2018MHEVC.mpd",
        "addonContent": "starz",
        "userRating": 0,
        "thumbnails": {
          "thumb-0x0": {
            "assetTypes": [
              "src_character"
            ],
            "height": 0,
            "title": "SKYSCRAPERY2018M_Character.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Character.jpg",
            "width": 0
          },
          "thumb-614x1536": {
            "assetTypes": [
              "hero_1536x614"
            ],
            "height": 614,
            "title": "SKYSCRAPERY2018M-1536x614-DHE.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/SKYSCRAPERY2018M/SKYSCRAPERY2018M-1536x614-DHE.jpg",
            "width": 1536
          },
          "thumb-613x1536": {
            "assetTypes": [
              "hero_main_1536x613"
            ],
            "height": 613,
            "title": "SKYSCRAPERY2018M-1536x613-DMHE.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/SKYSCRAPERY2018M/SKYSCRAPERY2018M-1536x613-DMHE.jpg",
            "width": 1536
          },
          "thumb-801x2000": {
            "assetTypes": [
              "src_dsk_tab_hero_main"
            ],
            "height": 801,
            "title": "SKYSCRAPERY2018M_HeroMain.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_HeroMain.jpg",
            "width": 2000
          },
          "thumb-678x474": {
            "assetTypes": [
              "src_poster"
            ],
            "height": 678,
            "title": "SKYSCRAPERY2018M_Poster.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Poster.jpg",
            "width": 474
          },
          "thumb-677x474": {
            "assetTypes": [
              "dsk_tab_poster_474x677"
            ],
            "height": 677,
            "title": "SKYSCRAPERY2018M-474x677-PST.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/SKYSCRAPERY2018M/SKYSCRAPERY2018M-474x677-PST.jpg",
            "width": 474
          },
          "thumb-615x1536": {
            "assetTypes": [
              "src_dsk_tab_hero"
            ],
            "height": 615,
            "title": "SKYSCRAPERY2018M_Hero.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/SKYSCRAPERY2018M/SKYSCRAPERY2018M_Hero.jpg",
            "width": 1536
          }
        }
      },
      {
        "titleId": "157657640151",
        "title": "MAMMA MIA HERE WE GO AGAIN",
        "sortTitle": "MAMMA MIA HERE WE GO AGAIN",
        "description": "Mamma Mia Here we go again, and this time we dive into young Donna's past when she met all the possible dads of Sophie. Singing, dancing and more singing with the most talented cast ever!",
        "longDescription": "Mamma Mia Here we go again, and this time we dive into young Donna's past when she met all the possible dads of Sophie. Singing, dancing and more singing with the most talented cast ever!",
        "shortDescription": "Mamma Mia Here we go again, and this time we dive into young Donna's past when she met all the possible dads of Sophie. Singing, dancing and more singing with the most talented cast ever!",
        "titleLocalized": {
          "ar": "ماما ميا هير وي غو أغين",
          "en": "MAMMA MIA HERE WE GO AGAIN",
          "fr": "MAMMA MIA! HERE WE GO AGAIN"
        },
        "sortTitleLocalized": {
          "ar": "ماما ميا هير وي غو أغين",
          "en": "MAMMA MIA HERE WE GO AGAIN",
          "fr": "MAMMA MIA! HERE WE GO AGAIN"
        },
        "descriptionLocalized": {
          "ar": "الجزء الثاني لواحد من أروع أفلام الموسيقى والغناء على الإطلاق! تأخذنا الأحداث إلى ماضي دونا في الوقت الذي التقت فيه الثلاثة شباب الذين تعرفنا عليهم في الجزء الاول.",
          "en": "Mamma Mia Here we go again, and this time we dive into young Donna's past when she met all the possible dads of Sophie. Singing, dancing and more singing with the most talented cast ever!",
          "fr": "Mamma Mia, nous y revoilà ! flash-backs sur la jeunesse de Donna Sheridan, sa rencontre avec les 3 possibles pères de Sophie ! Dansez, chantez encore et encore avec la nouvelle génération de comédiens."
        },
        "longDescriptionLocalized": {
          "ar": "الجزء الثاني لواحد من أروع أفلام الموسيقى والغناء على الإطلاق! تأخذنا الأحداث إلى ماضي دونا في الوقت الذي التقت فيه الثلاثة شباب الذين تعرفنا عليهم في الجزء الاول.",
          "en": "Mamma Mia Here we go again, and this time we dive into young Donna's past when she met all the possible dads of Sophie. Singing, dancing and more singing with the most talented cast ever!",
          "fr": "Mamma Mia, nous y revoilà ! flash-backs sur la jeunesse de Donna Sheridan, sa rencontre avec les 3 possibles pères de Sophie ! Dansez, chantez encore et encore avec la nouvelle génération de comédiens."
        },
        "shortDescriptionLocalized": {
          "ar": "الجزء الثاني لواحد من أروع أفلام الموسيقى والغناء على الإطلاق! تأخذنا الأحداث إلى ماضي دونا في الوقت الذي التقت فيه الثلاثة شباب الذين تعرفنا عليهم في الجزء الاول.",
          "en": "Mamma Mia Here we go again, and this time we dive into young Donna's past when she met all the possible dads of Sophie. Singing, dancing and more singing with the most talented cast ever!",
          "fr": "Mamma Mia, nous y revoilà ! flash-backs sur la jeunesse de Donna Sheridan, sa rencontre avec les 3 possibles pères de Sophie ! Dansez, chantez encore et encore avec la nouvelle génération de comédiens."
        },
        "titleCredits": [
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640152",
            "creditType": "Director",
            "isCameo": false,
            "isInactive": false,
            "order": 0,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONOLPARKER_1",
            "personName": "Ol Parker"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640155",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 1,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONAMANDASEYFRIED_1",
            "personName": "Amanda Seyfried"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640156",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 2,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONANDYGARCIA_1",
            "personName": "Andy Garcia"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640154",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 3,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONLILYJAMES_1",
            "personName": "Lily James"
          },
          {
            "characterName": "",
            "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640153",
            "creditType": "Actor",
            "isCameo": false,
            "isInactive": false,
            "order": 4,
            "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONDOMINICCOOPER_1",
            "personName": "Dominic Cooper"
          }
        ],
        "languages": [
          "en"
        ],
        "tagIds": [
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400358",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400360",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400370",
          "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/57508904156"
        ],
        "tags": [
          {
            "tagTitle": "Romance",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Comedy",
            "tagScheme": "urn:peg:genre"
          },
          {
            "tagTitle": "Movies",
            "tagScheme": "urn:peg:category"
          },
          {
            "tagTitle": "Musical",
            "tagScheme": "urn:peg:genre"
          }
        ],
        "imageMediaIds": [
          {
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/guid/2458698081/MAMMAMIAHEREWEGOAGAINY2018M",
            "isPrimary": true,
            "imageType": "thumb"
          }
        ],
        "year": 2018,
        "media": [
          {
            "ratings": [],
            "introStartSeconds": 0,
            "introEndSeconds": 0,
            "outroStartSeconds": 0,
            "outroEndSeconds": 0,
            "recapStartSeconds": 0,
            "recapEndSeconds": 0,
            "mediaId": "http://data.media.theplatform.eu/media/data/Media/624379973388",
            "mediaTitle": "MAMMA MIA HERE WE GO AGAIN",
            "mediaGuid": "MAMMAMIAHEREWEGOAGAINY2018M",
            "availableDate": "2020-10-02T05:00Z",
            "expirationDate": 1633118100000,
            "content": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624546373392",
                "guid": "2MsTjenFJo16revS3Pi0URGAI7Bqee1w",
                "bitrate": 0,
                "duration": 6818.8,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941470"
                ],
                "assetTypes": [
                  "video",
                  "dash_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018M.ism/MAMMAMIAHEREWEGOAGAINY2018M.mpd",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "7yLf5gKifPol",
                    "url": "http://link.theplatform.eu/s/qaJAph/7yLf5gKifPol",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624546373418",
                "guid": "58a_3SPFuLFegRetZLqTKQq1nnbKoGUS",
                "bitrate": 0,
                "duration": 6818.8,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941465"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018M.ism/MAMMAMIAHEREWEGOAGAINY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "ClwoM7eI_Bco",
                    "url": "http://link.theplatform.eu/s/qaJAph/ClwoM7eI_Bco",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624546373433",
                "guid": "LjOGjgK6NIX2SOM_gw6w5B82mp6o2e7B",
                "bitrate": 0,
                "duration": 6818.8,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941466"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018M.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "xNFNL_kfAu7m",
                    "url": "http://link.theplatform.eu/s/qaJAph/xNFNL_kfAu7m",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624546373468",
                "guid": "dp3kZdkuSAQ_f42L2O4w7j_tLnvVEtKl",
                "bitrate": 0,
                "duration": 6818.8,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965302"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018MHEVC/MAMMAMIAHEREWEGOAGAINY2018MHEVC.ism/MAMMAMIAHEREWEGOAGAINY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "WBY_Bdi4bCSv",
                    "url": "http://link.theplatform.eu/s/qaJAph/WBY_Bdi4bCSv",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624546373494",
                "guid": "kdpNcv8ZmC_JzgDB8qjuC4iWcMQqd6Er",
                "bitrate": 0,
                "duration": 6818.8,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965322"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018MHEVC/MAMMAMIAHEREWEGOAGAINY2018MHEVC_fairplay.ism/MAMMAMIAHEREWEGOAGAINY2018MHEVC_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "d7IN_K93xPRt",
                    "url": "http://link.theplatform.eu/s/qaJAph/d7IN_K93xPRt",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624546885371",
                "guid": "NGrHd8JibzuPZS_EK1ZdXJzAOTGCLXv3",
                "bitrate": 0,
                "duration": 6818.8,
                "format": "M3U",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453408"
                ],
                "assetTypes": [
                  "video",
                  "hls_fairplay_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018M_fairplay.ism/MAMMAMIAHEREWEGOAGAINY2018M_fairplay.m3u8",
                "protectionScheme": "fairplay",
                "releases": [
                  {
                    "pid": "KVqmwWp_r_we",
                    "url": "http://link.theplatform.eu/s/qaJAph/KVqmwWp_r_we",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624546885381",
                "guid": "vYXfgkGSoENeSjhfLHNIs3htqQcwTtw7",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/5416517342"
                ],
                "assetTypes": [
                  "filmstrip_199x110"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018M.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "D9SFiIiC0yly",
                    "url": "http://link.theplatform.eu/s/qaJAph/D9SFiIiC0yly",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624546885385",
                "guid": "hbA_t8dKE2Jj8mAqBfVThzcsek0Qb1_n",
                "bitrate": 0,
                "duration": 0,
                "format": "Filmstrip",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/245197893472"
                ],
                "assetTypes": [
                  "filmstrip_bs"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018M_bs.fs",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "H4Ztm_D5s_Q4",
                    "url": "http://link.theplatform.eu/s/qaJAph/H4Ztm_D5s_Q4",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624546885388",
                "guid": "CPPKT8yk_zwlV_WEoNlAJHsjm_VQvhRV",
                "bitrate": 0,
                "duration": 6818.8,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/326864965306"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_hevc_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/Download/MAMMAMIAHEREWEGOAGAINY2018MHEVC/OD_MAMMAMIAHEREWEGOAGAINY2018MHEVC.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "yhDx1Z_qXqwq",
                    "url": "http://link.theplatform.eu/s/qaJAph/yhDx1Z_qXqwq",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624547397127",
                "guid": "UY7vxc1gZWnlYux2mtw72OoHSBYmgBZS",
                "bitrate": 0,
                "duration": 6818.8,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/225515077038"
                ],
                "assetTypes": [
                  "video",
                  "dash_widevine_od_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/Download/OD_MAMMAMIAHEREWEGOAGAINY2018M.mpd",
                "protectionScheme": "widevine",
                "releases": [
                  {
                    "pid": "9ny00d3jG9yy",
                    "url": "http://link.theplatform.eu/s/qaJAph/9ny00d3jG9yy",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624547397153",
                "guid": "gFPN1S4W2nUvXHH88jq_C8EMpiR6t2ev",
                "bitrate": 0,
                "duration": 6818.8,
                "format": "ISM",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/338290757188"
                ],
                "assetTypes": [
                  "video",
                  "hss_playready_hevc_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018MHEVC/MAMMAMIAHEREWEGOAGAINY2018MHEVC.ism/Manifest",
                "protectionScheme": "playReady",
                "releases": [
                  {
                    "pid": "S39y_8CTRHgd",
                    "url": "http://link.theplatform.eu/s/qaJAph/S39y_8CTRHgd",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624547397154",
                "guid": "XRctgKIs90JpOX6pk37H53H4qsHY0yZR",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "ar",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965359"
                ],
                "assetTypes": [
                  "dfxp_ar_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018M_ara.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "iP7yUFNH89UE",
                    "url": "http://link.theplatform.eu/s/qaJAph/iP7yUFNH89UE",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624547397157",
                "guid": "YSEK9dkMAkMB2W0GLk9I3QGCdcX8Ez7P",
                "bitrate": 0,
                "duration": 0,
                "format": "MPEG-DASH",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114448453431"
                ],
                "assetTypes": [
                  "video",
                  "dash_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018MTRAILER/MAMMAMIAHEREWEGOAGAINY2018MTRAILER.ism/MAMMAMIAHEREWEGOAGAINY2018MTRAILER.mpd",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "LBkXdD7Vwuvm",
                    "url": "http://link.theplatform.eu/s/qaJAph/LBkXdD7Vwuvm",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624548421006",
                "guid": "b_kOAbACYYePElSDQBfcEk_s8rrefgor",
                "bitrate": 0,
                "duration": 0,
                "format": "DFXP",
                "height": 0,
                "language": "en",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/114448965365"
                ],
                "assetTypes": [
                  "dfxp_en_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018M_eng.xml",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "XRiiQtObI8Yb",
                    "url": "http://link.theplatform.eu/s/qaJAph/XRiiQtObI8Yb",
                    "restrictionId": ""
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624548421009",
                "guid": "bi6b_tYonIYLnmwV07VS34jsLL8UqjWw",
                "bitrate": 0,
                "duration": 0,
                "format": "ISM",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114447941497"
                ],
                "assetTypes": [
                  "video",
                  "hss_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018MTRAILER/MAMMAMIAHEREWEGOAGAINY2018MTRAILER.ism/Manifest",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "AUAqN6IiqxL3",
                    "url": "http://link.theplatform.eu/s/qaJAph/AUAqN6IiqxL3",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624548421023",
                "guid": "1yIc3sE3npQjYlM3HqZPcIkmcmYehEN4",
                "bitrate": 0,
                "duration": 0,
                "format": "M3U",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477004"
                ],
                "assetTypes": [
                  "video",
                  "hls_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018MTRAILER/MAMMAMIAHEREWEGOAGAINY2018MTRAILER.ism/MAMMAMIAHEREWEGOAGAINY2018MTRAILER.m3u8",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "sbJRR9DBYULj",
                    "url": "http://link.theplatform.eu/s/qaJAph/sbJRR9DBYULj",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624548421052",
                "guid": "lEum48lTWRpdmvuXVAqgoKpGpX405Blf",
                "bitrate": 0,
                "duration": 0,
                "format": "F4M",
                "height": 0,
                "language": "",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                  "http://data.media.theplatform.eu/media/data/AssetType/114449477007"
                ],
                "assetTypes": [
                  "video",
                  "hds_t01_movie_spa"
                ],
                "serverId": "",
                "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/MAMMAMIAHEREWEGOAGAINY2018MTRAILER/MAMMAMIAHEREWEGOAGAINY2018MTRAILER.ism/MAMMAMIAHEREWEGOAGAINY2018MTRAILER.f4m",
                "protectionScheme": "",
                "releases": [
                  {
                    "pid": "sp63XuN_H5eY",
                    "url": "http://link.theplatform.eu/s/qaJAph/sp63XuN_H5eY",
                    "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                  }
                ]
              }
            ],
            "thumbnails": [
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624379973390",
                "guid": "76bJn4X_Ga0wnaZE6SzQj0E4pIH_CrSv",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Character.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581430"
                ],
                "assetTypes": [
                  "src_character"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Character.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624379973400",
                "guid": "RzpfX2VrmnnJKR1mliByEOVbXkvU4OGP",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 801,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_HeroMain.jpg",
                "width": 2000,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581474"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero_main"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_HeroMain.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624379973420",
                "guid": "z9P73v5HQOm5fzPTzLnuQdg52XsJ4R_O",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 678,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Poster.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581441"
                ],
                "assetTypes": [
                  "src_poster"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Poster.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624379973439",
                "guid": "jLsehboCq1SWNq3ADEZn8ogSXQR5sY0D",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 0,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Screenshot.jpg",
                "width": 0,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581475"
                ],
                "assetTypes": [
                  "src_screenshot"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Screenshot.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624382021041",
                "guid": "wddzagxndB9mNHRL0TN9ke8_L2ZP8cU0",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 615,
                "language": "",
                "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Hero.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581434"
                ],
                "assetTypes": [
                  "src_dsk_tab_hero"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
                "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Hero.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624416325304",
                "guid": "Ig_v9LfsaKOUuwlqPUjLfArMyaKiPX6k",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 613,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M-1536x613-DMHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581425"
                ],
                "assetTypes": [
                  "hero_main_1536x613"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M-1536x613-DMHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624416325387",
                "guid": "eCvujh01SOz6JGTbFeJ0yDgAnTvHywBy",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 614,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M-1536x614-DHE.jpg",
                "width": 1536,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581423"
                ],
                "assetTypes": [
                  "hero_1536x614"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M-1536x614-DHE.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              },
              {
                "id": "http://data.media.theplatform.eu/media/data/MediaFile/624417349344",
                "guid": "Kgcncjsd7rVzkMlP_PgisRcmJYki8jib",
                "bitrate": 0,
                "duration": 0,
                "format": "JPEG",
                "height": 677,
                "language": "",
                "url": "s3://mena-origin.s3.amazonaws.com/universal/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M-474x677-PST.jpg",
                "width": 474,
                "assetTypeIds": [
                  "http://data.media.theplatform.eu/media/data/AssetType/4480581427"
                ],
                "assetTypes": [
                  "dsk_tab_poster_474x677"
                ],
                "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
                "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M-474x677-PST.jpg",
                "protectionScheme": "",
                "downloadUrl": "",
                "releases": []
              }
            ]
          }
        ],
        "arAgeRating": "15",
        "countryOfOrigin": "United States",
        "studio": "Universal_01",
        "friendlyTitle4Url": "mamma-mia-here-we-go-again",
        "has4K": "no",
        "fourkProgramId": "",
        "programType": "movie",
        "mediaContentDownloadUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/MAMMAMIAHEREWEGOAGAINY2018M/39d95b813e7f8a2210a4b5a7be6ae7bc/Download/MAMMAMIAHEREWEGOAGAINY2018MHEVC/OD_MAMMAMIAHEREWEGOAGAINY2018MHEVC.mpd",
        "addonContent": "starz",
        "userRating": 0,
        "thumbnails": {
          "thumb-0x0": {
            "assetTypes": [
              "src_screenshot"
            ],
            "height": 0,
            "title": "MAMMAMIAHEREWEGOAGAINY2018M_Screenshot.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Screenshot.jpg",
            "width": 0
          },
          "thumb-614x1536": {
            "assetTypes": [
              "hero_1536x614"
            ],
            "height": 614,
            "title": "MAMMAMIAHEREWEGOAGAINY2018M-1536x614-DHE.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M-1536x614-DHE.jpg",
            "width": 1536
          },
          "thumb-613x1536": {
            "assetTypes": [
              "hero_main_1536x613"
            ],
            "height": 613,
            "title": "MAMMAMIAHEREWEGOAGAINY2018M-1536x613-DMHE.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M-1536x613-DMHE.jpg",
            "width": 1536
          },
          "thumb-801x2000": {
            "assetTypes": [
              "src_dsk_tab_hero_main"
            ],
            "height": 801,
            "title": "MAMMAMIAHEREWEGOAGAINY2018M_HeroMain.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_HeroMain.jpg",
            "width": 2000
          },
          "thumb-678x474": {
            "assetTypes": [
              "src_poster"
            ],
            "height": 678,
            "title": "MAMMAMIAHEREWEGOAGAINY2018M_Poster.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Poster.jpg",
            "width": 474
          },
          "thumb-677x474": {
            "assetTypes": [
              "dsk_tab_poster_474x677"
            ],
            "height": 677,
            "title": "MAMMAMIAHEREWEGOAGAINY2018M-474x677-PST.jpg",
            "url": "http://mena-img-cdn-lb.aws.playco.com/universal/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M-474x677-PST.jpg",
            "width": 474
          },
          "thumb-615x1536": {
            "assetTypes": [
              "src_dsk_tab_hero"
            ],
            "height": 615,
            "title": "MAMMAMIAHEREWEGOAGAINY2018M_Hero.jpg",
            "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/MAMMAMIAHEREWEGOAGAINY2018M/MAMMAMIAHEREWEGOAGAINY2018M_Hero.jpg",
            "width": 1536
          }
        }
      }
    ]
  }
}
const getDataDummyResponse1 = [
  {
    "titleId": "157658664188",
    "title": "HOVER",
    "sortTitle": "HOVER",
    "description": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing.",
    "longDescription": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing.",
    "shortDescription": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing.",
    "titleLocalized": {
      "ar": "هوفر",
      "en": "HOVER"
    },
    "sortTitleLocalized": {
      "ar": "هوفر",
      "en": "HOVER"
    },
    "descriptionLocalized": {
      "ar": "في عالم خيالي حيث تستخدم طائرات الدرونز للزراعة وللحراسة، يكتشف أحد الموظفين صلة بين مدرائه في العمل وبين مصنعي هذه الطائرات.",
      "en": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing."
    },
    "longDescriptionLocalized": {
      "ar": "في عالم خيالي حيث تستخدم طائرات الدرونز للزراعة وللحراسة، يكتشف أحد الموظفين صلة بين مدرائه في العمل وبين مصنعي هذه الطائرات.",
      "en": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing."
    },
    "shortDescriptionLocalized": {
      "ar": "في عالم خيالي حيث تستخدم طائرات الدرونز للزراعة وللحراسة، يكتشف أحد الموظفين صلة بين مدرائه في العمل وبين مصنعي هذه الطائرات.",
      "en": "Drones are used in agriculture to optimize production and as sentinels. An employee discovers a connection between his job assisting in suicides and his employers' ownership of the drone manufacturing."
    },
    "titleCredits": [
      {
        "characterName": "",
        "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157658664189",
        "creditType": "Director",
        "isCameo": false,
        "isInactive": false,
        "order": 0,
        "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONMATTOSTERMAN_1",
        "personName": "Matt Osterman"
      },
      {
        "characterName": "",
        "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157658664190",
        "creditType": "Actor",
        "isCameo": false,
        "isInactive": false,
        "order": 1,
        "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONCLEOPATRACOLEMAN_1",
        "personName": "Cleopatra Coleman"
      },
      {
        "characterName": "",
        "creditId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157658664191",
        "creditType": "Actor",
        "isCameo": false,
        "isInactive": false,
        "order": 2,
        "personId": "http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONSHANECOFFEY_1",
        "personName": "Shane Coffey"
      }
    ],
    "languages": [
      "en"
    ],
    "tagIds": [
      "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400362",
      "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400370",
      "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/57556008094"
    ],
    "tags": [
      {
        "tagTitle": "Action",
        "tagScheme": "urn:peg:genre"
      },
      {
        "tagTitle": "Movies",
        "tagScheme": "urn:peg:category"
      },
      {
        "tagTitle": "Sci-Fi",
        "tagScheme": "urn:peg:genre"
      }
    ],
    "imageMediaIds": [
      {
        "mediaId": "http://data.media.theplatform.eu/media/data/Media/guid/2458698081/HOVERY2018M",
        "isPrimary": true,
        "imageType": "thumb"
      }
    ],
    "year": 2018,
    "media": [
      {
        "ratings": [

        ],
        "introStartSeconds": 0,
        "introEndSeconds": 0,
        "outroStartSeconds": 0,
        "outroEndSeconds": 0,
        "recapStartSeconds": 0,
        "recapEndSeconds": 0,
        "mediaId": "http://data.media.theplatform.eu/media/data/Media/624435269142",
        "mediaTitle": "HOVER",
        "mediaGuid": "HOVERY2018MC",
        "availableDate": "2020-10-06T05:00Z",
        "expirationDate": 1633118112000,
        "content": [
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605382",
            "guid": "MoRaoufPzbSYszlLQmAqeOd3JaxORL34C",
            "bitrate": 0,
            "duration": 5188.6,
            "format": "ISM",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/114447941466"
            ],
            "assetTypes": [
              "video",
              "hss_playready_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.ism/Manifest",
            "protectionScheme": "playReady",
            "releases": [
              {
                "pid": "Lc_hU8gfPf21",
                "url": "http://link.theplatform.eu/s/qaJAph/Lc_hU8gfPf21",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605388",
            "guid": "sTKa72e74ewdr6ULYep8bB0iUR021__DC",
            "bitrate": 0,
            "duration": 5188.6,
            "format": "M3U",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/114448453408"
            ],
            "assetTypes": [
              "video",
              "hls_fairplay_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_fairplay.ism/HOVERY2018M_fairplay.m3u8",
            "protectionScheme": "fairplay",
            "releases": [
              {
                "pid": "v6NH82UEwGqv",
                "url": "http://link.theplatform.eu/s/qaJAph/v6NH82UEwGqv",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605401",
            "guid": "JZfZcOTpYlGwYIUcwq70lbghALfRdeMNC",
            "bitrate": 0,
            "duration": 0,
            "format": "Filmstrip",
            "height": 0,
            "language": "",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/5416517342"
            ],
            "assetTypes": [
              "filmstrip_199x110"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.fs",
            "protectionScheme": "",
            "releases": [
              {
                "pid": "e6J_057yKWBE",
                "url": "http://link.theplatform.eu/s/qaJAph/e6J_057yKWBE",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605408",
            "guid": "oW2C48_kdtkDt3A_lQAeKUCIemCXz91KC",
            "bitrate": 0,
            "duration": 5188.6,
            "format": "MPEG-DASH",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/326864965302"
            ],
            "assetTypes": [
              "video",
              "dash_widevine_hevc_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC.ism/HOVERY2018MHEVC.mpd",
            "protectionScheme": "widevine",
            "releases": [
              {
                "pid": "8mhnW0iwaaNe",
                "url": "http://link.theplatform.eu/s/qaJAph/8mhnW0iwaaNe",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605413",
            "guid": "dwu0IzTufgqbCsxI2LguiAuPDmCtDKpUC",
            "bitrate": 0,
            "duration": 5188.6,
            "format": "MPEG-DASH",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/326864965306"
            ],
            "assetTypes": [
              "video",
              "dash_widevine_hevc_od_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/Download/HOVERY2018MHEVC/OD_HOVERY2018MHEVC.mpd",
            "protectionScheme": "widevine",
            "releases": [
              {
                "pid": "JgCVWpwi57TA",
                "url": "http://link.theplatform.eu/s/qaJAph/JgCVWpwi57TA",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605418",
            "guid": "qsBJ8KbIbdE7cw9cp4S6ZC3EC4PLCwFnC",
            "bitrate": 0,
            "duration": 5188.6,
            "format": "ISM",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/338290757188"
            ],
            "assetTypes": [
              "video",
              "hss_playready_hevc_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC.ism/Manifest",
            "protectionScheme": "playReady",
            "releases": [
              {
                "pid": "exGzf3Dv6T1J",
                "url": "http://link.theplatform.eu/s/qaJAph/exGzf3Dv6T1J",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605421",
            "guid": "Xjnvb2W8BfsXQcPEra_sBH6IBPFMfLnxC",
            "bitrate": 0,
            "duration": 0,
            "format": "DFXP",
            "height": 0,
            "language": "ar",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/114448965359"
            ],
            "assetTypes": [
              "dfxp_ar_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_ara.xml",
            "protectionScheme": "",
            "releases": [
              {
                "pid": "zDFFeorTCquA",
                "url": "http://link.theplatform.eu/s/qaJAph/zDFFeorTCquA",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605422",
            "guid": "OYEfCvwnweI1rbSP7iMVK5oGpfOLu6DVC",
            "bitrate": 0,
            "duration": 0,
            "format": "DFXP",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/114448965365"
            ],
            "assetTypes": [
              "dfxp_en_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_eng.xml",
            "protectionScheme": "",
            "releases": [
              {
                "pid": "tNS21NTyPbRo",
                "url": "http://link.theplatform.eu/s/qaJAph/tNS21NTyPbRo",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605425",
            "guid": "hXs9eGo17ycU4wTo7ZafqfVuKTPytHMVC",
            "bitrate": 0,
            "duration": 0,
            "format": "MPEG-DASH",
            "height": 0,
            "language": "",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/114448453431"
            ],
            "assetTypes": [
              "video",
              "dash_t01_movie_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/HOVERY2018MTRAILER.mpd",
            "protectionScheme": "",
            "releases": [
              {
                "pid": "YCEL02_4NWf5",
                "url": "http://link.theplatform.eu/s/qaJAph/YCEL02_4NWf5",
                "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605427",
            "guid": "WNj0GvWmalF8P0MwxoBTZKA2Ke3X89RwC",
            "bitrate": 0,
            "duration": 0,
            "format": "ISM",
            "height": 0,
            "language": "",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/114447941497"
            ],
            "assetTypes": [
              "video",
              "hss_t01_movie_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/Manifest",
            "protectionScheme": "",
            "releases": [
              {
                "pid": "LDtzVItU1YaD",
                "url": "http://link.theplatform.eu/s/qaJAph/LDtzVItU1YaD",
                "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605428",
            "guid": "Del5a7FlsD_VxzaDqscCq6mlKyQ4Ab0AC",
            "bitrate": 0,
            "duration": 0,
            "format": "M3U",
            "height": 0,
            "language": "",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/114449477004"
            ],
            "assetTypes": [
              "video",
              "hls_t01_movie_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/HOVERY2018MTRAILER.m3u8",
            "protectionScheme": "",
            "releases": [
              {
                "pid": "MQdKgW8WDfbG",
                "url": "http://link.theplatform.eu/s/qaJAph/MQdKgW8WDfbG",
                "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630657605433",
            "guid": "xLphzR67EHWCMbuHf_olHpZSpycPl2KzC",
            "bitrate": 0,
            "duration": 0,
            "format": "F4M",
            "height": 0,
            "language": "",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/114449477007"
            ],
            "assetTypes": [
              "video",
              "hds_t01_movie_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MTRAILER/HOVERY2018MTRAILER.ism/HOVERY2018MTRAILER.f4m",
            "protectionScheme": "",
            "releases": [
              {
                "pid": "dH4QI2WhXS4R",
                "url": "http://link.theplatform.eu/s/qaJAph/dH4QI2WhXS4R",
                "restrictionId": "http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658117261",
            "guid": "FjWosHohHh7gRNVh7swfHKww4PVhzhy9C",
            "bitrate": 0,
            "duration": 5188.6,
            "format": "MPEG-DASH",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/114447941470"
            ],
            "assetTypes": [
              "video",
              "dash_playready_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.ism/HOVERY2018M.mpd",
            "protectionScheme": "playReady",
            "releases": [
              {
                "pid": "VoeRs0J4wn3F",
                "url": "http://link.theplatform.eu/s/qaJAph/VoeRs0J4wn3F",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658117268",
            "guid": "qawsZkiG0X_mimmcPCYUnwwO5mM2xG6DC",
            "bitrate": 0,
            "duration": 5188.6,
            "format": "MPEG-DASH",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/114447941465"
            ],
            "assetTypes": [
              "video",
              "dash_widevine_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M.ism/HOVERY2018M.mpd",
            "protectionScheme": "widevine",
            "releases": [
              {
                "pid": "_0jo1Sm_IQQT",
                "url": "http://link.theplatform.eu/s/qaJAph/_0jo1Sm_IQQT",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658117298",
            "guid": "_VLKraz4yt19Z7kwblIgZ709mOku5Qi2C",
            "bitrate": 0,
            "duration": 5188.6,
            "format": "M3U",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/326864965322"
            ],
            "assetTypes": [
              "video",
              "hls_fairplay_hevc_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC_fairplay.ism/HOVERY2018MHEVC_fairplay.m3u8",
            "protectionScheme": "fairplay",
            "releases": [
              {
                "pid": "aH2dafAJQ7Zb",
                "url": "http://link.theplatform.eu/s/qaJAph/aH2dafAJQ7Zb",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658629012",
            "guid": "290_wVMdGn84LX9cQ81qIR6f4J01_ZBJC",
            "bitrate": 0,
            "duration": 5188.6,
            "format": "MPEG-DASH",
            "height": 0,
            "language": "en",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
              "http://data.media.theplatform.eu/media/data/AssetType/225515077038"
            ],
            "assetTypes": [
              "video",
              "dash_widevine_od_spa"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/Download/OD_HOVERY2018M.mpd",
            "protectionScheme": "widevine",
            "releases": [
              {
                "pid": "p__AvhQid7SD",
                "url": "http://link.theplatform.eu/s/qaJAph/p__AvhQid7SD",
                "restrictionId": ""
              }
            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630658629017",
            "guid": "OnKu_u0Vh5nv7RjM_F4aHbuTSVjMl_hSC",
            "bitrate": 0,
            "duration": 0,
            "format": "Filmstrip",
            "height": 0,
            "language": "",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/245197893472"
            ],
            "assetTypes": [
              "filmstrip_bs"
            ],
            "serverId": "",
            "streamingUrl": "http://mena-cdn-lb.aws.playco.com/SPA/universal/HOVERY2018MC/a11e43ae34ee1565530d7d0830d15529/HOVERY2018M_bs.fs",
            "protectionScheme": "",
            "releases": [
              {
                "pid": "6pn3q1VBsVNx",
                "url": "http://link.theplatform.eu/s/qaJAph/6pn3q1VBsVNx",
                "restrictionId": ""
              }
            ]
          }
        ],
        "thumbnails": [
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757322",
            "guid": "xiRnU2bUWZq2rhhI688KwPRK6ZATrYcy",
            "bitrate": 0,
            "duration": 0,
            "format": "JPEG",
            "height": 615,
            "language": "",
            "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Hero.jpg",
            "width": 1536,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/4480581434"
            ],
            "assetTypes": [
              "src_dsk_tab_hero"
            ],
            "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
            "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Hero.jpg",
            "protectionScheme": "",
            "downloadUrl": "",
            "releases": [

            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757337",
            "guid": "i1gmE8W0HxG_KsxOjwJTx0jSuxaBEqpv",
            "bitrate": 0,
            "duration": 0,
            "format": "JPEG",
            "height": 0,
            "language": "",
            "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_HeroMain.jpg",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/4480581474"
            ],
            "assetTypes": [
              "src_dsk_tab_hero_main"
            ],
            "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
            "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_HeroMain.jpg",
            "protectionScheme": "",
            "downloadUrl": "",
            "releases": [

            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757359",
            "guid": "bvkeo8jK8nTDO4mWx9JPdUjxBXTPeVxd",
            "bitrate": 0,
            "duration": 0,
            "format": "JPEG",
            "height": 0,
            "language": "",
            "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Character.jpg",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/4480581430"
            ],
            "assetTypes": [
              "src_character"
            ],
            "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
            "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Character.jpg",
            "protectionScheme": "",
            "downloadUrl": "",
            "releases": [

            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/624434757365",
            "guid": "6sQRrCgyp_vP_0xWPWJSV9HAw_1s9Xeb",
            "bitrate": 0,
            "duration": 0,
            "format": "JPEG",
            "height": 0,
            "language": "",
            "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Screenshot.jpg",
            "width": 0,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/4480581475"
            ],
            "assetTypes": [
              "src_screenshot"
            ],
            "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
            "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Screenshot.jpg",
            "protectionScheme": "",
            "downloadUrl": "",
            "releases": [

            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/624435269179",
            "guid": "un4WlIAfcctzcv10eHOjQI3A0hlrkkp1",
            "bitrate": 0,
            "duration": 0,
            "format": "JPEG",
            "height": 678,
            "language": "",
            "url": "s3://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Poster.jpg",
            "width": 474,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/4480581441"
            ],
            "assetTypes": [
              "src_poster"
            ],
            "serverId": "http://data.media.theplatform.eu/media/data/Server/83722309125",
            "streamingUrl": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Poster.jpg",
            "protectionScheme": "",
            "downloadUrl": "",
            "releases": [

            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630639173408",
            "guid": "vmGt9wmCSvfjrkyb2xLjUAlCWCnlcWGt",
            "bitrate": 0,
            "duration": 0,
            "format": "JPEG",
            "height": 677,
            "language": "",
            "url": "s3://mena-origin.s3.amazonaws.com/universal/HOVERY2018M/HOVERY2018M-474x677-PST.jpg",
            "width": 474,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/4480581427"
            ],
            "assetTypes": [
              "dsk_tab_poster_474x677"
            ],
            "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
            "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-474x677-PST.jpg",
            "protectionScheme": "",
            "downloadUrl": "",
            "releases": [

            ]
          },
          {
            "id": "http://data.media.theplatform.eu/media/data/MediaFile/630639173412",
            "guid": "eYtRtL36TxJDX5bTMTTl31bGq16_pp14",
            "bitrate": 0,
            "duration": 0,
            "format": "JPEG",
            "height": 614,
            "language": "",
            "url": "s3://mena-origin.s3.amazonaws.com/universal/HOVERY2018M/HOVERY2018M-1536x614-DHE.jpg",
            "width": 1536,
            "assetTypeIds": [
              "http://data.media.theplatform.eu/media/data/AssetType/4480581423"
            ],
            "assetTypes": [
              "hero_1536x614"
            ],
            "serverId": "http://data.media.theplatform.eu/media/data/Server/4538437053",
            "streamingUrl": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-1536x614-DHE.jpg",
            "protectionScheme": "",
            "downloadUrl": "",
            "releases": [

            ]
          }
        ]
      }
    ],
    "arAgeRating": "15",
    "contentClassification": "Censored",
    "countryOfOrigin": "United States",
    "studio": "Universal_01",
    "friendlyTitle4Url": "hover",
    "has4K": "no",
    "fourkProgramId": "",
    "programType": "movie",
    "mediaContentDownloadUrl": "http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/HOVERY2018M/a11e43ae34ee1565530d7d0830d15529/HOVERY2018MHEVC/HOVERY2018MHEVC_fairplay.ism/HOVERY2018MHEVC_fairplay.m3u8",
    "addonContent": "starz",
    "userRating": 0,
    "thumbnails": {
      "thumb-0x0": {
        "assetTypes": [
          "src_screenshot"
        ],
        "height": 0,
        "title": "HOVERY2018M_Screenshot.jpg",
        "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Screenshot.jpg",
        "width": 0
      },
      "thumb-614x1536": {
        "assetTypes": [
          "hero_1536x614"
        ],
        "height": 614,
        "title": "HOVERY2018M-1536x614-DHE.jpg",
        "url": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-1536x614-DHE.jpg",
        "width": 1536
      },
      "thumb-678x474": {
        "assetTypes": [
          "src_poster"
        ],
        "height": 678,
        "title": "HOVERY2018M_Poster.jpg",
        "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Poster.jpg",
        "width": 474
      },
      "thumb-677x474": {
        "assetTypes": [
          "dsk_tab_poster_474x677"
        ],
        "height": 677,
        "title": "HOVERY2018M-474x677-PST.jpg",
        "url": "http://mena-img-cdn-lb.aws.playco.com/universal/HOVERY2018M/HOVERY2018M-474x677-PST.jpg",
        "width": 474
      },
      "thumb-615x1536": {
        "assetTypes": [
          "src_dsk_tab_hero"
        ],
        "height": 615,
        "title": "HOVERY2018M_Hero.jpg",
        "url": "http://mena-ingest-universal.s3.amazonaws.com/Ready/HOVERY2018M/HOVERY2018M_Hero.jpg",
        "width": 1536
      }
    }
  }
]
const getDataDummyResponse2 = [
  {
     "titleId":"157657640162",
     "title":"BLACKKKLANSMAN",
     "sortTitle":"BLACKKKLANSMAN",
     "description":"Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
     "longDescription":"Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
     "shortDescription":"Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
     "titleLocalized":{
        "ar":"بلاككلانزمان",
        "en":"BLACKKKLANSMAN",
        "fr":"BlacKkKlansman - J'ai infiltré le Ku Klux Klan"
     },
     "sortTitleLocalized":{
        "ar":"بلاككلانزمان",
        "en":"BLACKKKLANSMAN",
        "fr":"BlacKkKlansman - J'ai infiltré le Ku Klux Klan"
     },
     "descriptionLocalized":{
        "ar":"مستوحى من أحداث حقيقية. ضابط شرطة أمريكي من أصل أفريقي في كولورادو سبرينغز، ينجح في التسلل إلى فرع كو كلوكس كلان المحلي بمساعدة وكيل يهودي ليصبح قائده في النهاية.",
        "en":"Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
        "fr":"L'histoire vraie de Ron Stallworth, devenu le premier officier Noir américain du Colorado Springs Police Department. Avec l'aide d'un substitut juif, il se fixe une mission des plus périlleuses : infiltrer le Ku Klux Klan pour en dénoncer les exactions."
     },
     "longDescriptionLocalized":{
        "ar":"مستوحى من أحداث حقيقية. ضابط شرطة أمريكي من أصل أفريقي في كولورادو سبرينغز، ينجح في التسلل إلى فرع كو كلوكس كلان المحلي بمساعدة وكيل يهودي ليصبح قائده في النهاية.",
        "en":"Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
        "fr":"L'histoire vraie de Ron Stallworth, devenu le premier officier Noir américain du Colorado Springs Police Department. Avec l'aide d'un substitut juif, il se fixe une mission des plus périlleuses : infiltrer le Ku Klux Klan pour en dénoncer les exactions."
     },
     "shortDescriptionLocalized":{
        "ar":"مستوحى من أحداث حقيقية. ضابط شرطة أمريكي من أصل أفريقي في كولورادو سبرينغز، ينجح في التسلل إلى فرع كو كلوكس كلان المحلي بمساعدة وكيل يهودي ليصبح قائده في النهاية.",
        "en":"Based on true events. An African American police officer from Colorado Springs, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
        "fr":"L'histoire vraie de Ron Stallworth, devenu le premier officier Noir américain du Colorado Springs Police Department. Avec l'aide d'un substitut juif, il se fixe une mission des plus périlleuses : infiltrer le Ku Klux Klan pour en dénoncer les exactions."
     },
     "titleCredits":[
        {
           "characterName":"",
           "creditId":"http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640163",
           "creditType":"Director",
           "isCameo":false,
           "isInactive":false,
           "order":0,
           "personId":"http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONSPIKELEE_1",
           "personName":"Spike Lee"
        },
        {
           "characterName":"",
           "creditId":"http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640167",
           "creditType":"Actor",
           "isCameo":false,
           "isInactive":false,
           "order":1,
           "personId":"http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONALECBALDWIN_1",
           "personName":"Alec Baldwin"
        },
        {
           "characterName":"",
           "creditId":"http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640164",
           "creditType":"Actor",
           "isCameo":false,
           "isInactive":false,
           "order":2,
           "personId":"http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONJOHNDAVIDWASHINGTON_1",
           "personName":"John David Washington"
        },
        {
           "characterName":"",
           "creditId":"http://data.entertainment.tv.theplatform.eu/entertainment/data/Credit/157657640166",
           "creditType":"Actor",
           "isCameo":false,
           "isInactive":false,
           "order":3,
           "personId":"http://data.entertainment.tv.theplatform.eu/entertainment/data/Person/guid/2458698081/PERSONROBERTJOHNBURKE_2",
           "personName":"Robert John Burke"
        }
     ],
     "languages":[
        "en"
     ],
     "tagIds":[
        "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400359",
        "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/23375400370",
        "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/56819240179",
        "http://data.entertainment.tv.theplatform.eu/entertainment/data/Tag/57556008079"
     ],
     "tags":[
        {
           "tagTitle":"Drama",
           "tagScheme":"urn:peg:genre"
        },
        {
           "tagTitle":"Movies",
           "tagScheme":"urn:peg:category"
        },
        {
           "tagTitle":"Crime",
           "tagScheme":"urn:peg:genre"
        },
        {
           "tagTitle":"Biography",
           "tagScheme":"urn:peg:genre"
        }
     ],
     "imageMediaIds":[
        {
           "mediaId":"http://data.media.theplatform.eu/media/data/Media/guid/2458698081/BLACKKKLANSMANY2018M",
           "isPrimary":true,
           "imageType":"thumb"
        }
     ],
     "year":2018,
     "media":[
        {
           "ratings":[
              
           ],
           "introStartSeconds":0,
           "introEndSeconds":0,
           "outroStartSeconds":0,
           "outroEndSeconds":0,
           "recapStartSeconds":0,
           "recapEndSeconds":0,
           "mediaId":"http://data.media.theplatform.eu/media/data/Media/624381509031",
           "mediaTitle":"BLACKKKLANSMAN",
           "mediaGuid":"BLACKKKLANSMANY2018M",
           "availableDate":"2020-10-02T05:00Z",
           "expirationDate":1633118100000,
           "content":[
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624622149441",
                 "guid":"r9VUVdyYsMUQpaFATLYFsK1okSH9E6cX",
                 "bitrate":0,
                 "duration":8112.12,
                 "format":"M3U",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/114448453408"
                 ],
                 "assetTypes":[
                    "video",
                    "hls_fairplay_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M_fairplay.ism/BLACKKKLANSMANY2018M_fairplay.m3u8",
                 "protectionScheme":"fairplay",
                 "releases":[
                    {
                       "pid":"9HpPYeauAcz8",
                       "url":"http://link.theplatform.eu/s/qaJAph/9HpPYeauAcz8",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624622149472",
                 "guid":"dGetLJudOgIZOI6v3zU9SARKhaqfjiQT",
                 "bitrate":0,
                 "duration":8112.12,
                 "format":"MPEG-DASH",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/326864965302"
                 ],
                 "assetTypes":[
                    "video",
                    "dash_widevine_hevc_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MHEVC/BLACKKKLANSMANY2018MHEVC.ism/BLACKKKLANSMANY2018MHEVC.mpd",
                 "protectionScheme":"widevine",
                 "releases":[
                    {
                       "pid":"_xwUaFa__KXC",
                       "url":"http://link.theplatform.eu/s/qaJAph/_xwUaFa__KXC",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624622149488",
                 "guid":"NITrsou5Rf0czAWdFbEGLOuFfDPpJ_VU",
                 "bitrate":0,
                 "duration":8112.12,
                 "format":"MPEG-DASH",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/326864965306"
                 ],
                 "assetTypes":[
                    "video",
                    "dash_widevine_hevc_od_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-cdn-lb.aws.playco.com/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/Download/BLACKKKLANSMANY2018MHEVC/OD_BLACKKKLANSMANY2018MHEVC.mpd",
                 "protectionScheme":"widevine",
                 "releases":[
                    {
                       "pid":"0cgLf04uYL7C",
                       "url":"http://link.theplatform.eu/s/qaJAph/0cgLf04uYL7C",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624623173288",
                 "guid":"TtVKk8EHcTvNKSwSJm509BwKL3obHoNq",
                 "bitrate":0,
                 "duration":8112.12,
                 "format":"MPEG-DASH",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/114447941470"
                 ],
                 "assetTypes":[
                    "video",
                    "dash_playready_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.ism/BLACKKKLANSMANY2018M.mpd",
                 "protectionScheme":"playReady",
                 "releases":[
                    {
                       "pid":"hkz_xSm4Fl3J",
                       "url":"http://link.theplatform.eu/s/qaJAph/hkz_xSm4Fl3J",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624623173314",
                 "guid":"tUhWLht5Gku_TMQfo2K_ei323EtbjV1L",
                 "bitrate":0,
                 "duration":0,
                 "format":"Filmstrip",
                 "height":0,
                 "language":"",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/245197893472"
                 ],
                 "assetTypes":[
                    "filmstrip_bs"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-cdn-lb.aws.playco.com/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M_bs.fs",
                 "protectionScheme":"",
                 "releases":[
                    {
                       "pid":"LYO9UIls9Tg6",
                       "url":"http://link.theplatform.eu/s/qaJAph/LYO9UIls9Tg6",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624623173343",
                 "guid":"jQupHq6gIuTl_IvSIkK_KMV1PNYLsWXz",
                 "bitrate":0,
                 "duration":8112.12,
                 "format":"M3U",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/326864965322"
                 ],
                 "assetTypes":[
                    "video",
                    "hls_fairplay_hevc_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MHEVC/BLACKKKLANSMANY2018MHEVC_fairplay.ism/BLACKKKLANSMANY2018MHEVC_fairplay.m3u8",
                 "protectionScheme":"fairplay",
                 "releases":[
                    {
                       "pid":"pMsCCvCLMmp2",
                       "url":"http://link.theplatform.eu/s/qaJAph/pMsCCvCLMmp2",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624623173383",
                 "guid":"r0BjXyU9xrbbBwgHOUPKMuIYYVDxTDPg",
                 "bitrate":0,
                 "duration":0,
                 "format":"F4M",
                 "height":0,
                 "language":"",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/114449477007"
                 ],
                 "assetTypes":[
                    "video",
                    "hds_t01_movie_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MTRAILER/BLACKKKLANSMANY2018MTRAILER.ism/BLACKKKLANSMANY2018MTRAILER.f4m",
                 "protectionScheme":"",
                 "releases":[
                    {
                       "pid":"cIoHb2OXKBQJ",
                       "url":"http://link.theplatform.eu/s/qaJAph/cIoHb2OXKBQJ",
                       "restrictionId":"http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624623685008",
                 "guid":"D5FYo5NOUsBy9D_Jr_eaHa52VEO7sP05",
                 "bitrate":0,
                 "duration":8112.12,
                 "format":"ISM",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/338290757188"
                 ],
                 "assetTypes":[
                    "video",
                    "hss_playready_hevc_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn.starzplayarabia.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MHEVC/BLACKKKLANSMANY2018MHEVC.ism/Manifest",
                 "protectionScheme":"playReady",
                 "releases":[
                    {
                       "pid":"B0VI8L2jXmQK",
                       "url":"http://link.theplatform.eu/s/qaJAph/B0VI8L2jXmQK",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624623685028",
                 "guid":"W62Ws6_tE1KrLgin3Otkr46MoGW9BcHk",
                 "bitrate":0,
                 "duration":0,
                 "format":"DFXP",
                 "height":0,
                 "language":"ar",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/114448965359"
                 ],
                 "assetTypes":[
                    "dfxp_ar_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M_ara.xml",
                 "protectionScheme":"",
                 "releases":[
                    {
                       "pid":"WlI7SkV5O0CO",
                       "url":"http://link.theplatform.eu/s/qaJAph/WlI7SkV5O0CO",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624623685053",
                 "guid":"AMpJVr1KKRCcHsQEKdz0kpg_x_gvfqO9",
                 "bitrate":0,
                 "duration":0,
                 "format":"M3U",
                 "height":0,
                 "language":"",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/114449477004"
                 ],
                 "assetTypes":[
                    "video",
                    "hls_t01_movie_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MTRAILER/BLACKKKLANSMANY2018MTRAILER.ism/BLACKKKLANSMANY2018MTRAILER.m3u8",
                 "protectionScheme":"",
                 "releases":[
                    {
                       "pid":"s0ID_Smnx7Vb",
                       "url":"http://link.theplatform.eu/s/qaJAph/s0ID_Smnx7Vb",
                       "restrictionId":"http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624624197084",
                 "guid":"1ncBmFAVQnFHNW9H7nnIB8HkqK1SJSBr",
                 "bitrate":0,
                 "duration":8112.12,
                 "format":"MPEG-DASH",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/114447941465"
                 ],
                 "assetTypes":[
                    "video",
                    "dash_widevine_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.ism/BLACKKKLANSMANY2018M.mpd",
                 "protectionScheme":"widevine",
                 "releases":[
                    {
                       "pid":"ozJAgvnDbbQM",
                       "url":"http://link.theplatform.eu/s/qaJAph/ozJAgvnDbbQM",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624624197090",
                 "guid":"32ZJc_KfPCwAgAWtAQt8BvHVWEIv7nNO",
                 "bitrate":0,
                 "duration":8112.12,
                 "format":"MPEG-DASH",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/225515077038"
                 ],
                 "assetTypes":[
                    "video",
                    "dash_widevine_od_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-cdn-lb.aws.playco.com/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/Download/OD_BLACKKKLANSMANY2018M.mpd",
                 "protectionScheme":"widevine",
                 "releases":[
                    {
                       "pid":"i_m1H56uDoR5",
                       "url":"http://link.theplatform.eu/s/qaJAph/i_m1H56uDoR5",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624624197097",
                 "guid":"LEBLqjQed35HQhaeLr_G3_rwM_NwbugB",
                 "bitrate":0,
                 "duration":8112.12,
                 "format":"ISM",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/114447941466"
                 ],
                 "assetTypes":[
                    "video",
                    "hss_playready_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.ism/Manifest",
                 "protectionScheme":"playReady",
                 "releases":[
                    {
                       "pid":"6WLSE_YOkZkQ",
                       "url":"http://link.theplatform.eu/s/qaJAph/6WLSE_YOkZkQ",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624624197117",
                 "guid":"_KMCGhtT825PKhWw63IJSLs_sDmbUhtE",
                 "bitrate":0,
                 "duration":0,
                 "format":"Filmstrip",
                 "height":0,
                 "language":"",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/5416517342"
                 ],
                 "assetTypes":[
                    "filmstrip_199x110"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-cdn-lb.aws.playco.com/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.fs",
                 "protectionScheme":"",
                 "releases":[
                    {
                       "pid":"Yd3IJ3PMSSKQ",
                       "url":"http://link.theplatform.eu/s/qaJAph/Yd3IJ3PMSSKQ",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624624197176",
                 "guid":"MSMYhC_Lw7e1ndx_8Npy6s9KrqQ_2nan",
                 "bitrate":0,
                 "duration":0,
                 "format":"DFXP",
                 "height":0,
                 "language":"en",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/114448965365"
                 ],
                 "assetTypes":[
                    "dfxp_en_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M_eng.xml",
                 "protectionScheme":"",
                 "releases":[
                    {
                       "pid":"H1x_2iS9AMeG",
                       "url":"http://link.theplatform.eu/s/qaJAph/H1x_2iS9AMeG",
                       "restrictionId":""
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624624197182",
                 "guid":"GXfKh9Vs_ANjZMR_AyQ91rE7WsyoOSzY",
                 "bitrate":0,
                 "duration":0,
                 "format":"MPEG-DASH",
                 "height":0,
                 "language":"",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/114448453431"
                 ],
                 "assetTypes":[
                    "video",
                    "dash_t01_movie_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MTRAILER/BLACKKKLANSMANY2018MTRAILER.ism/BLACKKKLANSMANY2018MTRAILER.mpd",
                 "protectionScheme":"",
                 "releases":[
                    {
                       "pid":"hIBw2BiTPs_Y",
                       "url":"http://link.theplatform.eu/s/qaJAph/hIBw2BiTPs_Y",
                       "restrictionId":"http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                    }
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624624197184",
                 "guid":"vkRxzg_wdNXlnGdXU_4Z_zoTPGht5b5e",
                 "bitrate":0,
                 "duration":0,
                 "format":"ISM",
                 "height":0,
                 "language":"",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/23584325314",
                    "http://data.media.theplatform.eu/media/data/AssetType/114447941497"
                 ],
                 "assetTypes":[
                    "video",
                    "hss_t01_movie_spa"
                 ],
                 "serverId":"",
                 "streamingUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018MTRAILER/BLACKKKLANSMANY2018MTRAILER.ism/Manifest",
                 "protectionScheme":"",
                 "releases":[
                    {
                       "pid":"TcrMwCz2buYd",
                       "url":"http://link.theplatform.eu/s/qaJAph/TcrMwCz2buYd",
                       "restrictionId":"http://data.delivery.theplatform.eu/delivery/data/Restriction/6298738"
                    }
                 ]
              }
           ],
           "thumbnails":[
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624380997352",
                 "guid":"ghB8Z_n_8m_PFBnVh8ghrK_W_9aeAztq",
                 "bitrate":0,
                 "duration":0,
                 "format":"JPEG",
                 "height":0,
                 "language":"",
                 "url":"s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Character.jpg",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/4480581430"
                 ],
                 "assetTypes":[
                    "src_character"
                 ],
                 "serverId":"http://data.media.theplatform.eu/media/data/Server/83722309125",
                 "streamingUrl":"http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Character.jpg",
                 "protectionScheme":"",
                 "downloadUrl":"",
                 "releases":[
                    
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624380997374",
                 "guid":"NWKW2c8gwovDlDnwshBH9rhzfLdryaAi",
                 "bitrate":0,
                 "duration":0,
                 "format":"JPEG",
                 "height":615,
                 "language":"",
                 "url":"s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Hero.jpg",
                 "width":1536,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/4480581434"
                 ],
                 "assetTypes":[
                    "src_dsk_tab_hero"
                 ],
                 "serverId":"http://data.media.theplatform.eu/media/data/Server/83722309125",
                 "streamingUrl":"http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Hero.jpg",
                 "protectionScheme":"",
                 "downloadUrl":"",
                 "releases":[
                    
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624381509032",
                 "guid":"_ZwfKvu64DPYwTbAmAnbbaV9p3hYkRpB",
                 "bitrate":0,
                 "duration":0,
                 "format":"JPEG",
                 "height":0,
                 "language":"",
                 "url":"s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Screenshot.jpg",
                 "width":0,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/4480581475"
                 ],
                 "assetTypes":[
                    "src_screenshot"
                 ],
                 "serverId":"http://data.media.theplatform.eu/media/data/Server/83722309125",
                 "streamingUrl":"http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Screenshot.jpg",
                 "protectionScheme":"",
                 "downloadUrl":"",
                 "releases":[
                    
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624381509033",
                 "guid":"jptMaMzaQW1aSa5tJpKMjrTrzAb_roaX",
                 "bitrate":0,
                 "duration":0,
                 "format":"JPEG",
                 "height":678,
                 "language":"",
                 "url":"s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Poster.jpg",
                 "width":474,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/4480581441"
                 ],
                 "assetTypes":[
                    "src_poster"
                 ],
                 "serverId":"http://data.media.theplatform.eu/media/data/Server/83722309125",
                 "streamingUrl":"http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Poster.jpg",
                 "protectionScheme":"",
                 "downloadUrl":"",
                 "releases":[
                    
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624382021191",
                 "guid":"6NXVW2BPaKuduNqAPY3lBgDrS8BaT7j_",
                 "bitrate":0,
                 "duration":0,
                 "format":"JPEG",
                 "height":801,
                 "language":"",
                 "url":"s3://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_HeroMain.jpg",
                 "width":2000,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/4480581474"
                 ],
                 "assetTypes":[
                    "src_dsk_tab_hero_main"
                 ],
                 "serverId":"http://data.media.theplatform.eu/media/data/Server/83722309125",
                 "streamingUrl":"http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_HeroMain.jpg",
                 "protectionScheme":"",
                 "downloadUrl":"",
                 "releases":[
                    
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624416325386",
                 "guid":"7EJAOx_ctKJkvAWUsn1nN3vygl8gQQPg",
                 "bitrate":0,
                 "duration":0,
                 "format":"JPEG",
                 "height":677,
                 "language":"",
                 "url":"s3://mena-origin.s3.amazonaws.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-474x677-PST.jpg",
                 "width":474,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/4480581427"
                 ],
                 "assetTypes":[
                    "dsk_tab_poster_474x677"
                 ],
                 "serverId":"http://data.media.theplatform.eu/media/data/Server/4538437053",
                 "streamingUrl":"http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-474x677-PST.jpg",
                 "protectionScheme":"",
                 "downloadUrl":"",
                 "releases":[
                    
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/624417861049",
                 "guid":"hJrzlvllQ8VugyihDxXyqIVKmOhCjJdR",
                 "bitrate":0,
                 "duration":0,
                 "format":"JPEG",
                 "height":614,
                 "language":"",
                 "url":"s3://mena-origin.s3.amazonaws.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x614-DHE.jpg",
                 "width":1536,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/4480581423"
                 ],
                 "assetTypes":[
                    "hero_1536x614"
                 ],
                 "serverId":"http://data.media.theplatform.eu/media/data/Server/4538437053",
                 "streamingUrl":"http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x614-DHE.jpg",
                 "protectionScheme":"",
                 "downloadUrl":"",
                 "releases":[
                    
                 ]
              },
              {
                 "id":"http://data.media.theplatform.eu/media/data/MediaFile/629529157052",
                 "guid":"h0xV_8KBMNRGqnuWwpdGxWoWDeGoPzGY",
                 "bitrate":0,
                 "duration":0,
                 "format":"JPEG",
                 "height":613,
                 "language":"",
                 "url":"s3://mena-origin.s3.amazonaws.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x613-DMHE.jpg",
                 "width":1536,
                 "assetTypeIds":[
                    "http://data.media.theplatform.eu/media/data/AssetType/4480581425"
                 ],
                 "assetTypes":[
                    "hero_main_1536x613"
                 ],
                 "serverId":"http://data.media.theplatform.eu/media/data/Server/4538437053",
                 "streamingUrl":"http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x613-DMHE.jpg",
                 "protectionScheme":"",
                 "downloadUrl":"",
                 "releases":[
                    
                 ]
              }
           ]
        }
     ],
     "arAgeRating":"18",
     "contentClassification":"Uncensored",
     "countryOfOrigin":"United States",
     "studio":"Universal_01",
     "friendlyTitle4Url":"blackkklansman",
     "has4K":"no",
     "fourkProgramId":"",
     "programType":"movie",
     "mediaContentDownloadUrl":"http://mena-jit-cdn-lb.aws.playco.com/JIT/SPA/universal/BLACKKKLANSMANY2018M/2e600f8bda5db84df087201224c31d6d/BLACKKKLANSMANY2018M.ism/BLACKKKLANSMANY2018M.mpd",
     "addonContent":"starz",
     "userRating":0,
     "thumbnails":{
        "thumb-0x0":{
           "assetTypes":[
              "src_screenshot"
           ],
           "height":0,
           "title":"BLACKKKLANSMANY2018M_Screenshot.jpg",
           "url":"http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Screenshot.jpg",
           "width":0
        },
        "thumb-614x1536":{
           "assetTypes":[
              "hero_1536x614"
           ],
           "height":614,
           "title":"BLACKKKLANSMANY2018M-1536x614-DHE.jpg",
           "url":"http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x614-DHE.jpg",
           "width":1536
        },
        "thumb-613x1536":{
           "assetTypes":[
              "hero_main_1536x613"
           ],
           "height":613,
           "title":"BLACKKKLANSMANY2018M-1536x613-DMHE.jpg",
           "url":"http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-1536x613-DMHE.jpg",
           "width":1536
        },
        "thumb-801x2000":{
           "assetTypes":[
              "src_dsk_tab_hero_main"
           ],
           "height":801,
           "title":"BLACKKKLANSMANY2018M_HeroMain.jpg",
           "url":"http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_HeroMain.jpg",
           "width":2000
        },
        "thumb-678x474":{
           "assetTypes":[
              "src_poster"
           ],
           "height":678,
           "title":"BLACKKKLANSMANY2018M_Poster.jpg",
           "url":"http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Poster.jpg",
           "width":474
        },
        "thumb-677x474":{
           "assetTypes":[
              "dsk_tab_poster_474x677"
           ],
           "height":677,
           "title":"BLACKKKLANSMANY2018M-474x677-PST.jpg",
           "url":"http://mena-img-cdn-lb.aws.playco.com/universal/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M-474x677-PST.jpg",
           "width":474
        },
        "thumb-615x1536":{
           "assetTypes":[
              "src_dsk_tab_hero"
           ],
           "height":615,
           "title":"BLACKKKLANSMANY2018M_Hero.jpg",
           "url":"http://mena-ingest-universal.s3.amazonaws.com/Ready/BLACKKKLANSMANY2018M/BLACKKKLANSMANY2018M_Hero.jpg",
           "width":1536
        }
     }
  }
]