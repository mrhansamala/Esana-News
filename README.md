<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="Esana.png" alt="Esana"></a>
</p>

<h2 align="center">Esana News Scraper</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/mrhansamala/Esana-News.svg)](https://github.com/mrhansamala/Esana-News/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/mrhansamala/Esana-News.svg)](https://github.com/mrhansamala/Esana-News/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> The unofficial Scrap [Esana]
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

The unofficial Scrap [Esana]

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing


```sh
yarn add @mrhansamala/esana-news
```

or

```sh
npm i @mrhansamala/esana-news
```

## 🎈 Usage <a name="usage"></a>

```ts
const Esana = require('@mrhansamala/esana-news')

var api = new Esana()
```
## get news 
```ts
await api.news('98691')
```


```ts
{
  news_url: 'https://www.helakuru.lk/esana/98967',
  news_id: 98967,
  TITLE: 'ශ්‍රී ලංකා රුපියල ආසියාවේ දුර්වලතම මුදල් ඒකකය බවට පත් වී ඇති බව Bloomberg වාර්තා කරයි',
  DESCRIPTION: ' ',
  COVER: 'https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/dollar-rupee.jpg',
  URL: 'https://www.helakuru.lk/esana/98967',
  PUBLISHED: '2023-07-25 19:16:49',
  sub_img: [],
  full_news: 'මේ වසරේ මුල් භාගය තුළ ආසියාවේ හොඳම ක්‍රියාකාරීම මුදල් ඒකකය බවට පත්වූ ශ්‍රී ලංකා රුපියල, මේ වන විට ආසියාවේ දුර්වලතම මුදල් ඒකකය බවට පවත්ව ඇති බව Bloomberg වෙබ් අඩවිය වාර්තා කර තිබෙනවා.\n' +
    '\n' +
    'ඒ අනුව එම වෙබ් අඩවිය පෙන්වා දෙන්නේ අඛණ්ඩව දින 14 ක කාලයක් තුළ රුපියල 6% කින් අවප්‍රමාණයවී ඇති බවයි.\n' +
    '\n' +
    'පොලී අනුපාත කප්පාදුව සහ ආනයන පාලනයන් ලිහිල් කිරීම හේතුවෙන් තවදුරටත් රුපියල අවප්‍රමාණය විය හැකි බවත් වසර අවසානය වන විට ඩොලරය රුපියල් 355 ක් දක්වා ඉහළ යනු ඇති බවත් එම වෙබ් අඩවිය වැඩිදුරටත් සඳහන් කර තිබෙනවා.'
}
```
## get latest news id

```ts
await api.latest_id()
```
```ts
{
  code: 200,
  code_creator: { name: 'MR_Hansamala', github: '@mrhansamala' },
  results: {
    latest_news_url: 'https://www.helakuru.lk/esana/98691',
    news_id: 98691
  }
}
```
## get news Comments

```ts
await api.comments('98691')
```
```ts
{
  code: 200,
  code_creator: { name: 'MR_Hansamala', github: '@mrhansamala' },
  results: [
    {
      comment_id: '5070483',
      name: 'Tharani De Silva',
      comment: 'අපේ කකුල් කඩලා රෝද පුටුවක් දුන්නා කියලා උඹලට ආයේ රැවටෙන්නේ නෑ',
      ago: '30m Ago',
      img: 'https://esana.helakuru.lk/p/g/59255a58332310011e17a4ba9b16ec53.png'
    },
    {
      comment_id: '5070482',
      name: 'Indhunil Gamage',
      comment: 'නිකමිි දුන්නත් × වානා',
      ago: '35m Ago',
      img: 'https://esana.helakuru.lk/p/g/5e2bef68694fd3592fd3dc0eda4be484.png'
    },
    {
      comment_id: '5070481',
      name: 'Ravee Kumara',
      comment: 'hodai',
      ago: '46m Ago',
      img: 'https://esana.helakuru.lk/p/g/53dcda3cecd5495051accd2ddd89249c.png'
    },
    {
      comment_id: '5070479',
      name: 'Gaminda Tennakoon',
      comment: 'සතුටින් හිටප්ස්ල්ලා,EPF එකට කෙලවෙනකං...',
      ago: '56m Ago',
      img: 'https://esana.helakuru.lk/p/g/ceb401a4f5217e836b886c92e19e100b.png'
    },
    ... 283 more items
  ]
}
```
## get news list

```ts
await api.list()
```
```ts
{
  code: 200,
  code_creator: { name: 'MR_Hansamala', github: '@mrhansamala' },
  results: [
    {
      id: '98691',
      title: 'ලිට්‍රෝ ගෑස් මිල හෙට සිට අඩු වෙයි‍',
      thumb: 'https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/litro-gas[1].jpg'
    },
    {
      id: '98690',
      title: 'පෞද්ගලික විශ්ව විද්‍යාලවල අධ්‍යාපනය හැදැරීමට පොලී රහිත ණය සඳහා අයදුම් කිරීම හෙට ආරම්භ වෙයි',
      thumb: 'https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/exam-re.jpg'
    },
    {
      id: '98689',
      title: 'මේ වසරේ ඩෙංගු වැළඳීමෙන් පුද්ගලයින් 31 ක් මරුට',
      thumb: 'https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/dengue[1].jpg'
    },
    {
      id: '98687',
      title: 'අධි ඇසළ පොහොය අදයි',
      thumb: 'https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/poya[1].jpg'
    },
    {
      id: '98688',
      title: 'දේශීය ණය ප්‍රතිව්‍යුහගතකරණයට පසුබිම සකස් කිරීම සඳහා දේශීය ආදායම් බදු පනත සංශෝධනය කරන්න වෙනවා - මුදල් රාජ්‍ය අමාත්‍ය',
      thumb: 'https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/ranjith-siyabalapitiya-new[1].jpg'
    },
    ... 33 more items
  ]
}
```

## Loop For New News

```ts
var callback = async (full_news) => {
  console.log(full_news)
}
var ms = 60*1000 // 60 seconds
await api.news_loop(callback,ms)
```
## Clear Loop

```ts
await api.clear_loop()
```
## ✍️ Authors <a name = "authors"></a>

- [@mrhansamala](https://github.com/mrhansamala) - scraped author
