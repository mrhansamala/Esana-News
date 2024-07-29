var axios = require("axios");
var cheerio = require("cheerio");
var pkg = require("./package.json");
var msg = "Not Allowed Cracked Version.. Please use esana-news.js npm pkg";
var test = () => {
  if (pkg.name != "esana-news.js") {
    throw new Error("Not Allowed Cracked Version.. Please use esana-news.js npm pkg");
  }
};
var _0x312f1d = {
  name: "MR_Hansamala",
  github: "@mrhansamala"
};
async function esana_news(_0x21f2d1) {
  if (pkg.name != "esana-news.js") {
    throw new Error("Not Allowed Cracked Version.. Please use esana-news.js npm pkg");
  }
  test();
  if (!_0x21f2d1) {
    var _0x1a7618 = {
      code: 0x197,
      code_creator: _0x312f1d,
      error: "Need Esana News Id"
    };
    return _0x1a7618;
  }
  var _0x885e26 = await axios.get("https://www.helakuru.lk/esana");
  var _0x2bcf02 = _0x885e26.data.split("csrfHash")[1].split("';")[0].split("'")[1];
  var _0x12e195 = await axios({
    "url": "https://www.helakuru.lk/esana/search",
    "data": "GET_NEWS_BY_ID=true&NEWS_ID=" + _0x21f2d1 + "&LOAD_TYPE=true&csrf=" + _0x2bcf02,
    "headers": {
      "cookie": _0x885e26.headers["set-cookie"][0],
      "Accept-Encoding": "application/json",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33"
    },
    "method": "POST"
  });
  _0x12e195.data.TAGS.sub_img = [];
  var _0x48715c = '';
  var _0x30bf4f = cheerio.load("<div>" + _0x12e195.data.VIEW + "</div>");
  _0x30bf4f("div.news-single-content > img.img-fluid").map((_0x149589, _0x16c263) => {
    _0x12e195.data.TAGS.sub_img.push(_0x30bf4f(_0x16c263).attr("src"));
  });
  _0x30bf4f("div.news-single-content > p.news_text").map((_0x180fc8, _0x3273d5) => {
    _0x48715c += _0x30bf4f(_0x3273d5).text().trim() + "\n\n";
  });
  _0x12e195.data.TAGS.full_news = _0x48715c.trim();
  var _0x3ecead = {
    "news_url": "https://www.helakuru.lk/esana/" + _0x21f2d1,
    "news_id": _0x21f2d1,
    ..._0x12e195.data.TAGS
  };
  var _0x9dc1bd = {
    code: 0xc8,
    code_creator: _0x312f1d,
    results: _0x3ecead
  };
  return _0x9dc1bd;
}
async function esana_news_list() {
  if (pkg.name != "esana-news.js") {
    throw new Error("Not Allowed Cracked Version.. Please use esana-news.js npm pkg");
  }
  test();
  var _0x350412 = await axios.get("https://www.helakuru.lk/esana");
  var _0x3669ca = _0x350412.data.split("csrfHash")[1].split("';")[0].split("'")[1];
  var _0x518eff = await axios({
    "url": "https://www.helakuru.lk/esana/load",
    "headers": {
      "cookie": _0x350412.headers["set-cookie"][0],
      "Accept-Encoding": "application/json",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33"
    },
    "data": " newsLimit=&esanaWidget=false&csrf=" + _0x3669ca,
    "method": "POST"
  });
  const _0x504ed4 = cheerio.load("<div>" + _0x518eff.data.VIEW + "</div>");
  var _0x37111b = [];
  _0x504ed4("div.p-2.news_row_esena").each(function (_0x5b2dd4, _0x448c56) {
    _0x37111b.push({
      "id": _0x504ed4(_0x448c56).attr("onclick").split("getNewsById('")[1].split("'")[0],
      "title": _0x504ed4(_0x448c56).find("div.col-8 > div.news-thum-deatils > p").text(),
      "thumb": _0x504ed4(_0x448c56).find("div.news-thum-inner.rounded-lg-10.overflow-hidden > img").attr("src")
    });
  });
  var _0x217902 = {
    code: 0xc8,
    code_creator: _0x312f1d,
    results: _0x37111b
  };
  return _0x217902;
}
async function esana_latest_news() {
  return await latest_news();
}
async function esana_latest_news_id() {
  return await latest_news(true);
}
async function latest_news(_0x262d0e) {
  if (pkg.name != "esana-news.js") {
    throw new Error("Not Allowed Cracked Version.. Please use esana-news.js npm pkg");
  }
  test();
  var _0x5547fb = await axios.get("https://www.helakuru.lk/esana");
  var _0x38b60c = _0x5547fb.data.split("csrfHash")[1].split("';")[0].split("'")[1];
  var _0x19c9b8 = await axios({
    "url": "https://www.helakuru.lk/esana/load",
    "headers": {
      "cookie": _0x5547fb.headers["set-cookie"][0],
      "Accept-Encoding": "application/json",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33"
    },
    "data": " newsLimit=20&esanaWidget=false&csrf=" + _0x38b60c,
    "method": "POST"
  });
  if (_0x262d0e) {
    return {
      "code": 0xc8,
      "code_creator": _0x312f1d,
      "results": {
        "latest_news_url": "https://www.helakuru.lk/esana/" + _0x19c9b8.data.FIRST_NEWS_ID,
        "news_id": _0x19c9b8.data.FIRST_NEWS_ID
      }
    };
  }
  return await esana_news(_0x19c9b8.data.FIRST_NEWS_ID);
}
async function esana_news_comments(_0x47e480) {
  if (pkg.name != "esana-news.js") {
    throw new Error("Not Allowed Cracked Version.. Please use esana-news.js npm pkg");
  }
  test();
  if (!_0x47e480) {
    var _0x1bc31d = {
      code: 0x197,
      code_creator: _0x312f1d,
      error: "Need Esana News Id"
    };
    return _0x1bc31d;
  }
  var _0x4e75c6 = await axios.get("https://www.helakuru.lk/esana");
  var _0x3ffadf = _0x4e75c6.data.split("csrfHash")[1].split("';")[0].split("'")[1];
  var _0x4d8d86 = await axios({
    "url": "https://www.helakuru.lk/esana/comments",
    "headers": {
      "cookie": _0x4e75c6.headers["set-cookie"][0],
      "Accept-Encoding": "application/json",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33"
    },
    "data": "NewsId=" + _0x47e480 + "&uid=&loadType=true&csrf=" + _0x3ffadf,
    "method": "POST"
  });
  var _0x2a795d = [];
  var _0x59c968 = cheerio.load("<div>" + _0x4d8d86.data.newsList + "</div>");
  _0x59c968("div > div.d-flex").map(function (_0x55e480, _0x3d781c) {
    var _0x276752 = [];
    _0x59c968(_0x3d781c).find("div.comment-content > div > div > p").map(function (_0x478684, _0x552c02) {
      _0x276752.push(_0x59c968(_0x552c02).text().trim());
    });
    _0x2a795d.push({
      "comment_id": _0x59c968(_0x3d781c).find("div.comment-content").attr("data-comment-id"),
      "name": _0x276752[0],
      "comment": _0x276752[1],
      "ago": _0x276752[2] + " Ago",
      "img": _0x59c968(_0x3d781c).find("img").attr("src")
    });
  });
  var _0x429bb5 = {
    code: 0xc8,
    code_creator: _0x312f1d,
    results: _0x2a795d
  };
  return _0x429bb5;
}
var _0x1bf5d1 = {
  esana_news_comments: esana_news_comments,
  esana_latest_news_id: esana_latest_news_id,
  esana_latest_news: esana_latest_news,
  esana_news_list: esana_news_list,
  esana_news: esana_news
};
module.exports = _0x1bf5d1;