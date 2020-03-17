# OpenAcg api documentation
```

baseUrl: https://openacg.ml

```

## Table of content：

[1、latest updated book list](#1fetch-latest-updated-book-list)<br/>
[2、book detail](#2fetch-book-detail)<br/>
[3、search book](#3search-book)<br/>
[4、chapter list](#4fetch-chapter-list)<br/>
[5、chapter content](#5fetch-chapter-content)<br/>





## api list：

### 1、fetch latest updated book list

#### request URL:  
```
https://openacg.ml/api/v1/novel/latest
```

#### demo：
 [https://openacg.ml/v1/novel/latest?offset=0&limit=20](https://openacg.ml/v1/novel/latest?offset=0&limit=20)

#### request method: 
```
GET
```

#### paramster type：query

|parameter|Optional|Data type|Description|
|:-----|:-------:|:-----|:-----|
|offset      |N       |int  | Displacement value from the beginning|
|limit      |N      |int  | The total number of books being fetched|

#### response demo：

```javascript
{
  "status": 200, 
  "sucess": 1, 
  "server_time": 1584412070, 
  "response": [
    {
      "introduction": "\u6b63\u5728\u7206\u809d\u52a0\u73ed\u7576\u4e2d\u7684\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\uff0c\u904a\u6232\u4e2d\u540d\u70ba\u300c\u4f50\u85e4\u300d\u7684\u9234\u6728\u4e00\u90ce\uff0829\u6b72\uff09\u3002\u539f\u672c\u61c9\u8a72\u5728\u5c0f\u7761\u7247\u523b\u7684\u4ed6\uff0c\u56de\u904e\u795e\u7adf\u767c\u73fe\u81ea\u5df1\u88ab\u653e\u9010\u5230\u4e86\u964c\u751f\u7684\u7570\u4e16\u754c\uff01\n\u9023\u614c\u4e82\u7684\u9592\u6687\u90fd\u6c92\u6709\uff0c\u4e00\u5927\u7fa4\u5f9e\u672a\u898b\u904e\u7684\u602a\u7269\u903c\u8fd1\u773c\u524d\uff0c\u6d41\u661f\u96e8\u81ea\u5929\u7a7a\u50be\u76c6\u800c\u964d\u2014\u2014\u7136\u5f8c\u8f49\u773c\u9593\uff0c\u6700\u5f37\u7b49\u7d1a\u7684\u529b\u91cf\u548c\u9245\u984d\u8ca1\u5bcc\u90fd\u5f97\u624b\u4e86\u2026\u2026\uff01\uff1f\n\u5c31\u9019\u6a23\uff0c\u4f50\u85e4\u300c\u6eab\u99a8\uff0c\u6642\u800c\u56b4\u8085\uff0c\u4f75\u517c\u5177\u5f8c\u5bae\u300d\u7684\u7570\u4e16\u754c\u5192\u967a\u6545\u4e8b\u5c31\u6b64\u5c55\u958b\uff01\n", 
      "title": "\u7206\u809d\u5de5\u7a0b\u5e2b\u7684\u7570\u4e16\u754c\u72c2\u60f3\u66f2(\u7570\u4e16\u754c\u72c2\u60f3\u66f2)", 
      "updated_date": "2020-03-17 01:29:40", 
      "cover_url": "https://openacg.ml/image/1/1715/1715s.jpg", 
      "last_updated_date": "2020-03-17", 
      "word_count": 2540558, 
      "id": 1715, 
      "author": "\u611b\u4e03\u3072\u308d", 
      "created_date": "2019-08-16 07:41:57", 
      "publisher": "\u5bcc\u58eb\u898b\u6587\u5eab", 
      "book_status": "\u9023\u8f09\u4e2d", 
      "last_updated_chapter_name": "\u7b2c\u5341\u516b\u5377 \u5c3e\u8072", 
      "volumes": [
        {
          "name": "\u7b2c\u4e00\u5377", 
          "id": 7315, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e8c\u5377", 
          "id": 7316, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e09\u5377", 
          "id": 7317, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u56db\u5377", 
          "id": 7318, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e94\u5377", 
          "id": 7319, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u516d\u5377", 
          "id": 7320, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e03\u5377", 
          "id": 7321, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u516b\u5377", 
          "id": 7322, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e5d\u5377", 
          "id": 7323, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u5377", 
          "id": 7324, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e00\u5377", 
          "id": 7325, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e8c\u5377", 
          "id": 7326, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e09\u5377", 
          "id": 7327, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u56db\u5377", 
          "id": 7328, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e94\u5377", 
          "id": 7329, 
          "book_id": 1715
        }, 
        {
          "name": "EX \u77ed\u7bc7\u96c6", 
          "id": 7330, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u516d\u5377", 
          "id": 7331, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e03\u5377", 
          "id": 9518, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u516b\u5377", 
          "id": 9725, 
          "book_id": 1715
        }
      ]
    }, 
    {
      "introduction": "\u6211\u6c92\u6709\u8d85\u80fd\u529b\uff0c\u53ea\u662f\u770b\u5f97\u898b\u6b7b\u8457\u7684\u9748\u9b42\u7f77\u4e86\u3002\n\u6708\u5713\u4e4b\u591c\uff0c\u4e09\u540d\u5927\u5b78\u751f\u4e00\u6642\u8208\u8d77\uff0c\n\u7a7f\u8d8a\u6821\u820d\u5f8c\u65b9\u7684\u96dc\u6a39\u6797\uff0c\u4f86\u5230\u50b3\u8aaa\u4e2d\u7684\u9b3c\u5c4b\u63a2\u96aa\u3002\n\u7136\u800c\u5f9e\u9019\u4e00\u591c\u8d77\uff0c\u4e09\u4eba\u4e2d\u7684\u5176\u4e2d\u4e00\u4eba\u4fbf\u9ad8\u71d2\u4e0d\u9000\u3002\n\u70ba\u4e86\u5e6b\u52a9\u5728\u649e\u9b3c\u5f8c\u4e00\u75c5\u4e0d\u8d77\u7684\u53cb\u4eba\uff0c\n\u5c0f\u6fa4\u6674\u9999\u4f86\u5230\u5927\u5b78\u5167\u7684\u300c\u96fb\u5f71\u540c\u597d\u6703\u300d\uff0c\n\u62dc\u8a2a\u4e00\u540d\u64da\u7a31\u64c1\u6709\u795e\u5947\u529b\u91cf\u7684\u7537\u5b50\uff0c\n\u600e\u6599\u5c0d\u65b9\u7adf\u662f\u4e00\u500b\u9802\u8457\u9ce5\u7aa9\u982d\u3001\u9839\u5ee2\u3001\u76ee\u4e2d\u7121\u4eba\u7684\u9752\u5e74\uff01\n\u6674\u9999\u9f13\u8d77\u52c7\u6c23\u5411\u4ed6\u8acb\u6559\u5c0d\u7b56\uff0c\u7d50\u679c\u2026\u2026\uff01\uff1f\n\u9b27\u9b3c\u50b3\u805e\u3001\u5973\u5927\u5b78\u751f\u76e3\u7981\u547d\u6848\u3001\u8a50\u6b7b\u51f6\u6bba\u6848\u2026\u2026\n\u64c1\u6709\u9bae\u7d05\u7684\u5de6\u773c\u3001\u80fd\u7aba\u898b\u6b7b\u8005\u9748\u9b42\u7684\u540d\u5075\u63a2\u2014\u4e00\u9f4a\u85e4\u516b\u96f2\uff0c\n\u5373\u5c07\u89e3\u6c7a\u63a5\u8e35\u800c\u4f86\u7684\u8a6d\u7570\u6848\u4ef6\uff01\n\u4ee4\u4eba\u62cd\u6848\u53eb\u7d55\u3001\u5927\u547c\u904e\u766e\u7684\u9748\u7570\u63a8\u7406\u540d\u4f5c\uff0c\u65b0\u88dd\u767b\u5834\uff01\uff01\n", 
      "title": "\u5fc3\u9748\u5075\u63a2\u516b\u96f2", 
      "updated_date": "2020-03-16 01:50:20", 
      "cover_url": "https://openacg.ml/image/0/821/821s.jpg", 
      "last_updated_date": "2020-03-16", 
      "word_count": 1169426, 
      "id": 821, 
      "author": "\u795e\u6c38\u5b78", 
      "created_date": "2019-08-16 07:41:58", 
      "publisher": "\u89d2\u5ddd\u6587\u5eab", 
      "book_status": "\u9023\u8f09\u4e2d", 
      "last_updated_chapter_name": "\u7b2c\u5341\u5377 \u9748\u9b42\u7684\u9053\u6a19 \u5728\u90a3\u4e4b\u5f8c", 
      "volumes": [
        {
          "name": "\u7b2c\u4e00\u5377 \u6d1e\u6089\u4e00\u5207\u7684\u8d64\u77b3", 
          "id": 3785, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u4e8c\u5377 \u9748\u9b42\u76f8\u7cfb\u4e4b\u7269", 
          "id": 3786, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u4e09\u5377 \u5728\u9ed1\u6697\u5f7c\u7aef\u7684\u5149\u8292", 
          "id": 3787, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u56db\u5377 \u61c9\u7576\u5b88\u8b77\u7684\u60c5\u611f", 
          "id": 3788, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u4e94\u5377 \u7dca\u7dca\u76f8\u7cfb\u7684\u601d\u5ff5", 
          "id": 3789, 
          "book_id": 821
        }, 
        {
          "name": "SECRET FILES \u7d46", 
          "id": 3790, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u516d\u5377 \u5931\u610f\u7684\u76e1\u982d \u4e0a", 
          "id": 3791, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u516d\u5377 \u5931\u610f\u7684\u76e1\u982d \u4e0b", 
          "id": 3792, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u4e03\u5377 \u9748\u9b42\u7684\u53bb\u5411", 
          "id": 3793, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u516b\u5377 \u4e1f\u5931\u7684\u9748\u9b42", 
          "id": 3794, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u4e5d\u5377 \u547c\u6551\u7684\u9748\u9b42 \u66ab\u7f3a", 
          "id": 10108, 
          "book_id": 821
        }, 
        {
          "name": "\u7b2c\u5341\u5377 \u9748\u9b42\u7684\u9053\u6a19", 
          "id": 10109, 
          "book_id": 821
        }
      ]
    }, 
    {
      "introduction": "\u2605\u672c\u4f5c\u69ae\u7372\u7b2c9\u5c46MF\u6587\u5eabJ\u8f15\u5c0f\u8aaa\u65b0\u4eba\u8cde\u512a\u79c0\u8cde\uff01\n\u2605\u4ee5\u689d\u7d0b\u5167\u8932\u70ba\u4e3b\u89d2\u7684\u8b8a\u614b\u7cfb\uff08\u6709\u9ede\u8272\u8272\u7684\uff09\u559c\u5287\uff01\n\u7576\u59ec\u5ddd\u97ff\u5b50\u5728\u4ea4\u901a\u4e8b\u6545\u4e2d\u9677\u5165\u7015\u6b7b\u72c0\u614b\u6642\uff0c\u88ab\u5584\u826f\u7684\u5b87\u5b99\u751f\u547d\u9ad4\u53f2\u5d14\u666e\u5bc4\u751f\u800c\u5f97\u6551\u3002\n\u97ff\u5b50\u5411\u76f4\u63a5\u8207\u5979\u5167\u5fc3\u5c0d\u8a71\u7684\u53f2\u5d14\u666e\uff0c\u5766\u767d\u9053\u51fa\u81ea\u5df1\u6b63\u5728\u5c0b\u627e\u5169\u9031\u524d\u96e2\u5bb6\u51fa\u8d70\u7684\u54e5\u54e5\u79ae\u4e8c\u3002\n\u53f2\u5d14\u666e\u4e5f\u5766\u8aa0\u81ea\u5df1\u5931\u53bb\u4e86\u8a18\u61b6\uff0c\u65bc\u662f\u5169\u4eba\u7d04\u5b9a\u5171\u540c\u5c0b\u627e\u5f7c\u6b64\u7684\u300c\u5931\u7269\u300d\u3002\n\u5c31\u5728\u6b64\u6642\uff0c\u97ff\u5b50\u7684\u5b78\u6821\u88e1\u767c\u751f\u4e86\u5927\u91cf\u5167\u8932\u6d88\u5931\u7684\u4e8b\u4ef6\uff01\n\u97ff\u5b50\u548c\u53f2\u5d14\u666e\u806f\u624b\u5408\u4f5c\u8ffd\u67e5\u5167\u8932\u5c0f\u5077\u5916\u661f\u4eba\u2500\u2500\uff1f\n", 
      "title": "\u7570\u8932\u661f\u4eba\u5927\u4f5c\u6230", 
      "updated_date": null, 
      "cover_url": "https://openacg.ml/image/2/2706/2706s.jpg", 
      "last_updated_date": "2020-03-15", 
      "word_count": 100940, 
      "id": 2706, 
      "author": "\u70ba\u4e09", 
      "created_date": "2020-03-15 02:38:24", 
      "publisher": "MF\u6587\u5eabJ", 
      "book_status": "\u9023\u8f09\u4e2d", 
      "last_updated_chapter_name": "\u7b2c\u4e00\u5377 \u63d2\u5716", 
      "volumes": [
        {
          "name": "\u7b2c\u4e00\u5377", 
          "id": 10101, 
          "book_id": 2706
        }
      ]
    }, 
    {
      "introduction": "\u4e00\u540d\u7537\u5b50\u56e0\u4ea4\u901a\u4e8b\u6545\u55aa\u5931\u6027\u547d\uff0c\u4f46\u662f\u4ed6\u5728\u53e6\u4e00\u500b\u4e16\u754c\u91cd\u7372\u65b0\u751f\uff0c\u4ee5\u4e9e\u65af\u62c9\u9019\u500b\u8eab\u5206\u6210\u529f\u8f49\u4e16\uff0c\u540c\u6642\u4f9d\u7136\u4fdd\u6709\u524d\u4e16\u7684\u8a18\u61b6\u2026\u2026\u4ed6\u8f49\u751f\u5230\u4e00\u500b\u9b54\u6cd5\u9ad8\u5ea6\u767c\u5c55\u7684\u4e16\u754c\u3002\u5728\u90a3\u500b\u4e16\u754c\u88e1\uff0c\u6bcf\u500b\u4eba\u8a95\u751f\u6642\u90fd\u6703\u88ab\u6388\u4e88\u4e00\u9805\u5c6c\u6027\u9b54\u6cd5\uff0c\u5171\u5206\u70ba\u706b\u3001\u6c34\u3001\u98a8\u3001\u571f\u56db\u7a2e\uff0c\u53e6\u5916\u9084\u6709\u50c5\u6388\u4e88\u7279\u5b9a\u7a2e\u65cf\u7684\u795e\u8056\u9b54\u6cd5\u8207\u6697\u9ed1\u9b54\u6cd5\u3002\u5728\u5404\u7a2e\u9b54\u6cd5\u4e2d\uff0c\u6700\u4e0d\u53d7\u6b61\u8fce\u7684\u662f\u6c92\u6709\u4efb\u4f55\u5c6c\u6027\u7684\u7121\u5c6c\u6027\u9b54\u6cd5\u3002\u4e9e\u65af\u62c9\u88ab\u6388\u4e88\u7684\u6070\u6070\u5c31\u662f\u7121\u5c6c\u6027\u9b54\u6cd5\uff0c\u4ed6\u958b\u59cb\u5229\u7528\u524d\u4e16\u7684\u77e5\u8b58\u8207\u7d93\u9a57\uff0c\u514b\u670d\u5404\u7a2e\u56f0\u96e3\u3002\u4ed6\u9047\u898b\u4e86\u5925\u4f34\u3001\u627e\u5230\u81ea\u5df1\u5728\u7570\u4e16\u754c\u7684\u751f\u6d3b\u76ee\u6a19\uff0c\u800c\u7576\u4ed6\u767c\u73fe\u7121\u5c6c\u6027\u9b54\u6cd5\u7684\u771f\u6b63\u529b\u91cf\u6642\uff0c\u6545\u4e8b\u5c07\u6025\u901f\u767c\u5c55\u2500\u2500\n", 
      "title": "\u7121\u5c6c\u6027\u9b54\u6cd5\u7684\u6551\u4e16\u4e3b", 
      "updated_date": "2020-03-15 08:25:58", 
      "cover_url": "https://openacg.ml/image/2/2354/2354s.jpg", 
      "last_updated_date": "2020-03-15", 
      "word_count": 127436, 
      "id": 2354, 
      "author": "\u6b66\u85e4\u5065\u592a", 
      "created_date": "2019-08-16 07:41:58", 
      "publisher": "\u5176\u4ed6\u6587\u5eab", 
      "book_status": "\u9023\u8f09\u4e2d", 
      "last_updated_chapter_name": "\u7b2c\u4e00\u5377 \u63d2\u5716", 
      "volumes": [
        {
          "name": "\u7b2c\u4e00\u5377", 
          "id": 9063, 
          "book_id": 2354
        }
      ]
    }
  ]
}
    , 
```

### 2、fetch book detail

#### request URL：
```
https://openacg.ml/api/v1/novel/getBook
```

#### demo：
[https://openacg.ml/api/v1/novel/getBook?id=1715](https://openacg.ml/api/v1/novel/getBook?id=1715)

#### request method：
```
GET
```

#### parameter type：query

|Parameter|Optional|Data type|Description|
|:-----|:-------:|:-----|:-----|
|id      |Y       |int   |book id |

#### response：
```javascript
{
  "status": 200, 
  "sucess": 1, 
  "server_time": 1584412402, 
  "response": {
    "introduction": "\u6b63\u5728\u7206\u809d\u52a0\u73ed\u7576\u4e2d\u7684\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\uff0c\u904a\u6232\u4e2d\u540d\u70ba\u300c\u4f50\u85e4\u300d\u7684\u9234\u6728\u4e00\u90ce\uff0829\u6b72\uff09\u3002\u539f\u672c\u61c9\u8a72\u5728\u5c0f\u7761\u7247\u523b\u7684\u4ed6\uff0c\u56de\u904e\u795e\u7adf\u767c\u73fe\u81ea\u5df1\u88ab\u653e\u9010\u5230\u4e86\u964c\u751f\u7684\u7570\u4e16\u754c\uff01\n\u9023\u614c\u4e82\u7684\u9592\u6687\u90fd\u6c92\u6709\uff0c\u4e00\u5927\u7fa4\u5f9e\u672a\u898b\u904e\u7684\u602a\u7269\u903c\u8fd1\u773c\u524d\uff0c\u6d41\u661f\u96e8\u81ea\u5929\u7a7a\u50be\u76c6\u800c\u964d\u2014\u2014\u7136\u5f8c\u8f49\u773c\u9593\uff0c\u6700\u5f37\u7b49\u7d1a\u7684\u529b\u91cf\u548c\u9245\u984d\u8ca1\u5bcc\u90fd\u5f97\u624b\u4e86\u2026\u2026\uff01\uff1f\n\u5c31\u9019\u6a23\uff0c\u4f50\u85e4\u300c\u6eab\u99a8\uff0c\u6642\u800c\u56b4\u8085\uff0c\u4f75\u517c\u5177\u5f8c\u5bae\u300d\u7684\u7570\u4e16\u754c\u5192\u967a\u6545\u4e8b\u5c31\u6b64\u5c55\u958b\uff01\n", 
    "title": "\u7206\u809d\u5de5\u7a0b\u5e2b\u7684\u7570\u4e16\u754c\u72c2\u60f3\u66f2(\u7570\u4e16\u754c\u72c2\u60f3\u66f2)", 
    "updated_date": "2020-03-17 01:29:40", 
    "cover_url": "http://img.wenku8.com/image/1/1715/1715s.jpg", 
    "last_updated_date": "2020-03-17", 
    "word_count": 2540558, 
    "id": 1715, 
    "author": "\u611b\u4e03\u3072\u308d", 
    "created_date": "2019-08-16 07:41:57", 
    "publisher": "\u5bcc\u58eb\u898b\u6587\u5eab", 
    "book_status": "\u9023\u8f09\u4e2d", 
    "last_updated_chapter_name": "\u7b2c\u5341\u516b\u5377 \u5c3e\u8072", 
    "volumes": [
      {
        "name": "\u7b2c\u4e00\u5377", 
        "id": 7315, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u4e8c\u5377", 
        "id": 7316, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u4e09\u5377", 
        "id": 7317, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u56db\u5377", 
        "id": 7318, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u4e94\u5377", 
        "id": 7319, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u516d\u5377", 
        "id": 7320, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u4e03\u5377", 
        "id": 7321, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u516b\u5377", 
        "id": 7322, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u4e5d\u5377", 
        "id": 7323, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u5341\u5377", 
        "id": 7324, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u5341\u4e00\u5377", 
        "id": 7325, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u5341\u4e8c\u5377", 
        "id": 7326, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u5341\u4e09\u5377", 
        "id": 7327, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u5341\u56db\u5377", 
        "id": 7328, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u5341\u4e94\u5377", 
        "id": 7329, 
        "book_id": 1715
      }, 
      {
        "name": "EX \u77ed\u7bc7\u96c6", 
        "id": 7330, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u5341\u516d\u5377", 
        "id": 7331, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u5341\u4e03\u5377", 
        "id": 9518, 
        "book_id": 1715
      }, 
      {
        "name": "\u7b2c\u5341\u516b\u5377", 
        "id": 9725, 
        "book_id": 1715
      }
    ]
  }
}

```

### 3、search book

#### request URL：
```
https://openacg.ml/api/v1/novel/search
```

#### demo：
[https://openacg.ml/api/v1/novel/search?offset=0&limit=20&keywords=工程師](https://openacg.ml/api/v1/novel/search?offset=0&limit=20&keywords=%E5%B7%A5%E7%A8%8B%E5%B8%AB)

#### request method：
```
GET
```

#### parameter type：query

|Paramter|Optional|Data type|Description|
|:-----|:-------:|:-----|:-----|
|offset      |N       |int   |Begining Nth|
|limit      |N      |int   |Total number of books being fetched |
|keywords      |N       |string   |title keywords |

#### Response：

```javascript
{
  "status": 200, 
  "sucess": 1, 
  "server_time": 1584413199, 
  "response": [
    {
      "introduction": "\u5e73\u51e1\u7684\u793e\u6703\u65b0\u9bae\u4eba\u2014\u2014\u6afb\u962a\u5de5\u5175\u6b77\u7d93\u56b4\u5cfb\u7684\u5c31\u8077\u6d3b\u52d5\u5f8c\uff0c\u7d42\u65bc\u5f97\u4ee5\u5c31\u8077\u65bc\u67d0\u7cfb\u7d71\u958b\u767c\u516c\u53f8\u3002\u800c\u8ca0\u8cac\u6307\u5c0e\u4ed6\u7684\u5ba4\u898b\u7acb\u83ef\uff0c\u662f\u500b\u5916\u8868\u600e\u9ebc\u770b\u90fd\u53ea\u6709\u5341\u5e7e\u6b72\u5c11\u5973\u822c\u7684\u8d85\u7d1a\u5de5\u4f5c\u72c2!?\u793e\u9577\u53c8\u7121\u8996\u5be6\u969b\u7684\u5de5\u4f5c\u72c0\u6cc1\u80e1\u4e82\u63a5\u4e0b\u8a02\u55ae\uff0c\u5de5\u5175\u53ea\u5f97\u7acb\u523b\u64d4\u8d77\u4e86\u5be6\u6230\u5de5\u4f5c\u7684\u91cd\u4efb\uff0c\u5230\u5e95\u5de5\u5175\u7684\u7cfb\u7d71\u5de5\u7a0b\u5e2b\u751f\u6daf\u80fd\u5426\u9806\u5229\u71ac\u904e\u5462\uff1f\n", 
      "title": "\u596e\u9b25\u5427\uff01\u7cfb\u7d71\u5de5\u7a0b\u5e2b", 
      "updated_date": "2020-02-05 08:28:06", 
      "cover_url": "http://img.wenku8.com/image/1/1016/1016s.jpg", 
      "last_updated_date": null, 
      "word_count": null, 
      "id": 1016, 
      "author": "\u590f\u6d77\u516c\u53f8", 
      "created_date": "2019-08-16 07:41:58", 
      "publisher": "\u96fb\u64ca\u6587\u5eab", 
      "book_status": "\u5df2\u5b8c\u6210", 
      "last_updated_chapter_name": null, 
      "volumes": [
        {
          "name": "\u7b2c\u4e00\u5377 \u5169\u9031\u5167\u5373\u53ef\u4e0a\u624b\uff1fSE\u5165\u9580", 
          "id": 4541, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u4e8c\u5377 \u5f9e\u57fa\u790e\u5b78\u7fd2\uff1f\u904b\u7528\u5efa\u69cb", 
          "id": 4542, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u4e09\u5377 \u7d55\u4e0d\u5931\u6557\uff1f\u63d0\u6848\u6d3b\u52d5", 
          "id": 4543, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u56db\u5377 \u8ab0\u90fd\u80fd\u8fa6\u5230\uff1f\u9805\u76ee\u7ba1\u7406", 
          "id": 4544, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u4e94\u5377 \u6309\u90e8\u5c31\u73ed\uff1f\u5ba2\u670d\u5de5\u7a0b\u5e2b", 
          "id": 4545, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u516d\u5377 \u8f15\u9b06\u5be6\u8e10\uff1f\u517c\u8077\u526f\u696d", 
          "id": 4546, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u4e03\u5377 \u8c41\u7136\u958b\u6717\uff1f\u5ba2\u6236\u7aef\u5e38\u99d0\u6cd5", 
          "id": 4547, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u516b\u5377 \u9632\u885b\u6848\u4ef6\uff1f\u96a8\u8eab\u624b\u518a", 
          "id": 4548, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u4e5d\u5377 \u8f15\u9b06\u8cfa\u9322\uff1f\u670d\u52d9\u958b\u767c", 
          "id": 4549, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u5341\u5377 \u596e\u6230\uff1f\u54e1\u5de5\u65c5\u904a", 
          "id": 4550, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u5341\u4e00\u5377 \u7d55\u5c0d\uff1f\u7ba1\u7406\u8077\u5ba3\u8a00", 
          "id": 4551, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u5341\u4e8c\u5377 \u63d0\u524d\uff1f\u9000\u4f11", 
          "id": 4552, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u5341\u4e09\u5377 \u5fb9\u5e95\u6307\u5357\uff1f\u65b0\u4eba\u7814\u7fd2", 
          "id": 4553, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u5341\u56db\u5377 \u4e16\u754c\u771f\u5947\u5999\uff1f\u5546\u696d\u806f\u76df", 
          "id": 4554, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u5341\u4e94\u5377 \u5927\u52d5\u76ea\uff1f\u5167\u90e8\u7af6\u5408", 
          "id": 4555, 
          "book_id": 1016
        }, 
        {
          "name": "\u7b2c\u5341\u516d\u5377 \u7b2c\u4e8c\u5e74\u624d\u660e\u767d\uff1fSE\u5165\u9580", 
          "id": 4556, 
          "book_id": 1016
        }
      ]
    }, 
    {
      "introduction": "\u6b63\u5728\u7206\u809d\u52a0\u73ed\u7576\u4e2d\u7684\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\uff0c\u904a\u6232\u4e2d\u540d\u70ba\u300c\u4f50\u85e4\u300d\u7684\u9234\u6728\u4e00\u90ce\uff0829\u6b72\uff09\u3002\u539f\u672c\u61c9\u8a72\u5728\u5c0f\u7761\u7247\u523b\u7684\u4ed6\uff0c\u56de\u904e\u795e\u7adf\u767c\u73fe\u81ea\u5df1\u88ab\u653e\u9010\u5230\u4e86\u964c\u751f\u7684\u7570\u4e16\u754c\uff01\n\u9023\u614c\u4e82\u7684\u9592\u6687\u90fd\u6c92\u6709\uff0c\u4e00\u5927\u7fa4\u5f9e\u672a\u898b\u904e\u7684\u602a\u7269\u903c\u8fd1\u773c\u524d\uff0c\u6d41\u661f\u96e8\u81ea\u5929\u7a7a\u50be\u76c6\u800c\u964d\u2014\u2014\u7136\u5f8c\u8f49\u773c\u9593\uff0c\u6700\u5f37\u7b49\u7d1a\u7684\u529b\u91cf\u548c\u9245\u984d\u8ca1\u5bcc\u90fd\u5f97\u624b\u4e86\u2026\u2026\uff01\uff1f\n\u5c31\u9019\u6a23\uff0c\u4f50\u85e4\u300c\u6eab\u99a8\uff0c\u6642\u800c\u56b4\u8085\uff0c\u4f75\u517c\u5177\u5f8c\u5bae\u300d\u7684\u7570\u4e16\u754c\u5192\u967a\u6545\u4e8b\u5c31\u6b64\u5c55\u958b\uff01\n", 
      "title": "\u7206\u809d\u5de5\u7a0b\u5e2b\u7684\u7570\u4e16\u754c\u72c2\u60f3\u66f2(\u7570\u4e16\u754c\u72c2\u60f3\u66f2)", 
      "updated_date": "2020-03-17 01:29:40", 
      "cover_url": "http://img.wenku8.com/image/1/1715/1715s.jpg", 
      "last_updated_date": "2020-03-17", 
      "word_count": 2540558, 
      "id": 1715, 
      "author": "\u611b\u4e03\u3072\u308d", 
      "created_date": "2019-08-16 07:41:57", 
      "publisher": "\u5bcc\u58eb\u898b\u6587\u5eab", 
      "book_status": "\u9023\u8f09\u4e2d", 
      "last_updated_chapter_name": "\u7b2c\u5341\u516b\u5377 \u5c3e\u8072", 
      "volumes": [
        {
          "name": "\u7b2c\u4e00\u5377", 
          "id": 7315, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e8c\u5377", 
          "id": 7316, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e09\u5377", 
          "id": 7317, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u56db\u5377", 
          "id": 7318, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e94\u5377", 
          "id": 7319, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u516d\u5377", 
          "id": 7320, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e03\u5377", 
          "id": 7321, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u516b\u5377", 
          "id": 7322, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u4e5d\u5377", 
          "id": 7323, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u5377", 
          "id": 7324, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e00\u5377", 
          "id": 7325, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e8c\u5377", 
          "id": 7326, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e09\u5377", 
          "id": 7327, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u56db\u5377", 
          "id": 7328, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e94\u5377", 
          "id": 7329, 
          "book_id": 1715
        }, 
        {
          "name": "EX \u77ed\u7bc7\u96c6", 
          "id": 7330, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u516d\u5377", 
          "id": 7331, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u4e03\u5377", 
          "id": 9518, 
          "book_id": 1715
        }, 
        {
          "name": "\u7b2c\u5341\u516b\u5377", 
          "id": 9725, 
          "book_id": 1715
        }
      ]
    }
  ]
}

```

### 4、fetch chapter list

#### request URL：
```
https://openacg.ml/api/v1/novel/chapterList
```

#### demo：
[https://openacg.ml/api/v1/novel/chapterList?bid=1715](https://openacg.ml/api/v1/novel/chapterList?bid=1715)

#### request method：
```
GET
```

#### parameter type：param

|Parameter|Optional|Data type|Description|
|:-----|:-------:|:-----|:-----|
|bid      |N       |int   |book id |

#### response demo：

```javascript
{
  "status": 200, 
  "sucess": 1, 
  "server_time": 1584412396, 
  "response": [
    {
      "name": "\u7b2c\u4e00\u5377", 
      "id": 7315, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7315, 
          "chapter_name": "\u5e8f\u7ae0 \u3010\u5f9e\u52a0\u73ed\u4fee\u7f85\u5834\u958b\u59cb\u7684\u5929\u5730\u7570\u8b8a\u3011", 
          "id": 99084
        }, 
        {
          "volume_id": 7315, 
          "chapter_name": "\u7b2c\u4e8c\u7ae0 \u8056\u7559\u5e02", 
          "id": 99092
        }, 
        {
          "volume_id": 7315, 
          "chapter_name": "\u7b2c\u4e09\u7ae0 \u5e02\u5167\u6563\u6b65", 
          "id": 99099
        }, 
        {
          "volume_id": 7315, 
          "chapter_name": "\u7b2c\u56db\u7ae0 \u7d04\u6703", 
          "id": 99109
        }, 
        {
          "volume_id": 7315, 
          "chapter_name": "\u7b2c\u4e94\u7ae0 \u8ff7\u5bae", 
          "id": 99122
        }, 
        {
          "volume_id": 7315, 
          "chapter_name": "\u7b2c\u516d\u7ae0 \u5230\u5730\u4e0a", 
          "id": 99130
        }, 
        {
          "volume_id": 7315, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 148874
        }, 
        {
          "volume_id": 7315, 
          "chapter_name": "\u63d2\u5716", 
          "id": 148878
        }, 
        {
          "volume_id": 7315, 
          "chapter_name": "\u7b2c\u4e00\u7ae0 \u7b49\u7d1a\u63d0\u5347", 
          "id": 150363
        }
      ]
    }, 
    {
      "name": "\u7b2c\u4e8c\u5377", 
      "id": 7316, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7316, 
          "chapter_name": "\u591c\u88e1\u7684\u9a37\u52d5", 
          "id": 99149
        }, 
        {
          "volume_id": 7316, 
          "chapter_name": "\u4e9e\u91cc\u6c99", 
          "id": 99154
        }, 
        {
          "volume_id": 7316, 
          "chapter_name": "\u8aa4\u6703\u662f\u6200\u611b\u7684\u8abf\u5473\u6599", 
          "id": 99164
        }, 
        {
          "volume_id": 7316, 
          "chapter_name": "\u9580\u524d\u7684\u8972\u64ca\u8005", 
          "id": 99171
        }, 
        {
          "volume_id": 7316, 
          "chapter_name": "\u8001\u9f20\u516c\u4e3b", 
          "id": 99181
        }, 
        {
          "volume_id": 7316, 
          "chapter_name": "\u6258\u62c9\u672d\u5c24\u4e9e\u7684\u6416\u7c43", 
          "id": 99193
        }, 
        {
          "volume_id": 7316, 
          "chapter_name": "\u65b0\u7684\u65c5\u7a0b", 
          "id": 99199
        }, 
        {
          "volume_id": 7316, 
          "chapter_name": "\u7279\u5178 \u5c0f\u7389\u6700\u611b\u5403\u7684\u6771\u897f", 
          "id": 99217
        }, 
        {
          "volume_id": 7316, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 148890
        }, 
        {
          "volume_id": 7316, 
          "chapter_name": "\u63d2\u5716", 
          "id": 148894
        }
      ]
    }, 
    {
      "name": "\u7b2c\u4e09\u5377", 
      "id": 7317, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7317, 
          "chapter_name": "\u65c5\u9014", 
          "id": 99226
        }, 
        {
          "volume_id": 7317, 
          "chapter_name": "\u6230\u5834\u907a\u8e5f", 
          "id": 99235
        }, 
        {
          "volume_id": 7317, 
          "chapter_name": "\u9b54\u7269\u4f86\u8972", 
          "id": 99245
        }, 
        {
          "volume_id": 7317, 
          "chapter_name": "\u518d\u9047\u9670\u8b00", 
          "id": 99253
        }, 
        {
          "volume_id": 7317, 
          "chapter_name": "\u4f86\u88fd\u4f5c\u9b54\u6cd5\u85e5\u5427\uff01", 
          "id": 99259
        }, 
        {
          "volume_id": 7317, 
          "chapter_name": "\u7d19\u5806\u4e4b\u8b0e", 
          "id": 99266
        }, 
        {
          "volume_id": 7317, 
          "chapter_name": "\u7d66\u6f54\u5a1c\u7684\u4fe1", 
          "id": 99271
        }, 
        {
          "volume_id": 7317, 
          "chapter_name": "\u7279\u5178 \u8389\u85a9\u7684\u64d4\u5fc3", 
          "id": 99287
        }, 
        {
          "volume_id": 7317, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 148907
        }, 
        {
          "volume_id": 7317, 
          "chapter_name": "\u63d2\u5716", 
          "id": 148914
        }
      ]
    }, 
    {
      "name": "\u7b2c\u56db\u5377", 
      "id": 7318, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7318, 
          "chapter_name": "\u8073\u52d5\u7684\u5e8f\u5e55", 
          "id": 99299
        }, 
        {
          "volume_id": 7318, 
          "chapter_name": "\u5c11\u5e74\u5c11\u5973\u76dc\u8cca\u5718\u548c\u958b\u62d3\u6751", 
          "id": 99308
        }, 
        {
          "volume_id": 7318, 
          "chapter_name": "\u5de8\u4eba\u4e4b\u68ee", 
          "id": 99320
        }, 
        {
          "volume_id": 7318, 
          "chapter_name": "\u7a46\u8afe\u5e02\u9632\u7dda", 
          "id": 99331
        }, 
        {
          "volume_id": 7318, 
          "chapter_name": "\u65b0\u7684\u59d3\u6c0f", 
          "id": 99340
        }, 
        {
          "volume_id": 7318, 
          "chapter_name": "\u7279\u5178 \u4f0a\u6d85\u91ac\u7684\u9b54\u6cd5\u85e5", 
          "id": 99356
        }, 
        {
          "volume_id": 7318, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 148926
        }, 
        {
          "volume_id": 7318, 
          "chapter_name": "\u63d2\u5716", 
          "id": 148932
        }
      ]
    }, 
    {
      "name": "\u7b2c\u4e94\u5377", 
      "id": 7319, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7319, 
          "chapter_name": "\u7279\u5c3c\u5967\u795e\u6bbf\u7684\u8cfd\u62c9", 
          "id": 99365
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u524d\u5f80\u77ee\u4eba\u4e4b\u6751", 
          "id": 99376
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u5927\u6cb3\u7554", 
          "id": 99386
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u591a\u723e\u746a\u4e00\u5bb6", 
          "id": 99391
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u53e4\u9b6f\u88e1\u5b89\u5e02\u7684\u9a37\u52d5", 
          "id": 99402
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u5927\u6cb3\u4e4b\u65c5", 
          "id": 99409
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u4e0d\u70ba\u4eba\u77e5\u7684\u591c\u665a", 
          "id": 99418
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u5947\u8e5f\u7684\u4ee3\u50f9", 
          "id": 99422
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u7279\u5178 \u5ee2\u589f\u7684\u5c11\u5973", 
          "id": 99440
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 148947
        }, 
        {
          "volume_id": 7319, 
          "chapter_name": "\u63d2\u5716", 
          "id": 148953
        }
      ]
    }, 
    {
      "name": "\u7b2c\u516d\u5377", 
      "id": 7320, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7320, 
          "chapter_name": "\u7433\u683c\u862d\u8482", 
          "id": 99446
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u516c\u7235\u57ce\u5821\u7684\u665a\u9910\u6703", 
          "id": 99454
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u6b66\u8853\u5927\u6703", 
          "id": 99461
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u516c\u90fd\u89c0\u5149", 
          "id": 99467
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u516c\u90fd\u7684\u9a37\u52d5", 
          "id": 99476
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u821e\u6703\u8207\u6599\u7406", 
          "id": 99483
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u6c7a\u8cfd\u7576\u65e5", 
          "id": 99489
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u52c7\u8005\u53ec\u559a", 
          "id": 99494
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u52c7\u8005\u96bc\u4eba", 
          "id": 99500
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u52c7\u8005\u7121\u540d", 
          "id": 99505
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u9be8\u9b5a\u8089\u6d3e\u5c0d", 
          "id": 99513
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u7279\u5178 \u5361\u8389\u5a1c\u5c0f\u59d0\u7684\u6182\u9b31\uff1a\u6210\u9577\u7bc7", 
          "id": 99529
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 148967
        }, 
        {
          "volume_id": 7320, 
          "chapter_name": "\u63d2\u5716", 
          "id": 148973
        }
      ]
    }, 
    {
      "name": "\u7b2c\u4e03\u5377", 
      "id": 7321, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7321, 
          "chapter_name": "\u6885\u59ae\u4e9e\u516c\u4e3b\u7684\u59d4\u8a17", 
          "id": 99540
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u5a5a\u79ae\u548c\u9732\u9732\u679c\u5be6", 
          "id": 99547
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u5de5\u623f\u89c0\u6469\u8207\u9444\u9020\u9b54\u528d", 
          "id": 99554
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u7570\u4e16\u754c\u7684\u65e5\u672c\u4eba\u5011", 
          "id": 99564
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u5730\u4e0b\u62cd\u8ce3\u6703", 
          "id": 99576
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u9b54\u7375\u4eba\u4e4b\u93ae\u2022\u4e0a\u7bc7", 
          "id": 99588
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u9b54\u7375\u4eba\u4e4b\u93ae\u2022\u4e0b\u7bc7", 
          "id": 99596
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u6ce2\u723e\u827e\u5357\u4e4b\u68ee", 
          "id": 99601
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u7279\u5178 \u516c\u90fd\u591c\u665a\u7684\u7955\u5bc6\u8a13\u7df4\uff01", 
          "id": 99620
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 148989
        }, 
        {
          "volume_id": 7321, 
          "chapter_name": "\u63d2\u5716", 
          "id": 148994
        }
      ]
    }, 
    {
      "name": "\u7b2c\u516b\u5377", 
      "id": 7322, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7322, 
          "chapter_name": "\u6ce2\u723e\u827e\u5357\u7684\u7955\u5bc6", 
          "id": 99627
        }, 
        {
          "volume_id": 7322, 
          "chapter_name": "\u4e16\u754c\u6a39", 
          "id": 99633
        }, 
        {
          "volume_id": 7322, 
          "chapter_name": "\u77f3\u821e\u81fa\u7684\u4fee\u884c", 
          "id": 99641
        }, 
        {
          "volume_id": 7322, 
          "chapter_name": "\u5996\u7cbe\u904a\u6232", 
          "id": 99651
        }, 
        {
          "volume_id": 7322, 
          "chapter_name": "\u5996\u7cbe\u4fee\u884c", 
          "id": 99659
        }, 
        {
          "volume_id": 7322, 
          "chapter_name": "\u865b\u7a7a", 
          "id": 99669
        }, 
        {
          "volume_id": 7322, 
          "chapter_name": "\u9a45\u9664\u5bb3\u7378", 
          "id": 99675
        }, 
        {
          "volume_id": 7322, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149010
        }, 
        {
          "volume_id": 7322, 
          "chapter_name": "\u63d2\u5716", 
          "id": 149014
        }, 
        {
          "volume_id": 7322, 
          "chapter_name": "\u544a\u767d", 
          "id": 150443
        }
      ]
    }, 
    {
      "name": "\u7b2c\u4e5d\u5377", 
      "id": 7323, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7323, 
          "chapter_name": "\u6d77\u4e0a\u4e4b\u65c5", 
          "id": 99700
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u5931\u53bb\u8a18\u61b6\u7684\u5c11\u5973", 
          "id": 99713
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u8cbf\u6613\u90fd\u5e02\u8607\u7279\u5b89\u5fb7\u723e", 
          "id": 99721
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u7802\u7cd6\u822a\u7dda", 
          "id": 99729
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u6d77\u6d0b\u570b\u5bb6\u4f0a\u4fee\u62c9\u91cc\u57c3", 
          "id": 99737
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u9b54\u5c0e\u738b\u570b\u62c9\u62c9\u57fa", 
          "id": 99751
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u62c9\u62c9\u5176\u57c3\u822a\u7dda", 
          "id": 99757
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u6d6e\u5cf6\u62c9\u62c9\u5176\u57c3", 
          "id": 99764
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u6c7a\u6230", 
          "id": 99771
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149029
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u63d2\u5716", 
          "id": 149033
        }, 
        {
          "volume_id": 7323, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 150453
        }
      ]
    }, 
    {
      "name": "\u7b2c\u5341\u5377", 
      "id": 7324, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7324, 
          "chapter_name": "\u8ff7\u5bae\u90fd\u5e02\u8cfd\u5229\u7dad\u62c9", 
          "id": 99790
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u6b7b\u4ea1\u884c\u8ecd", 
          "id": 99798
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u6b98\u9177\u7684\u8ff7\u5bae", 
          "id": 99807
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u8526\u4e4b\u9928\u8207\u7a7a\u6bbc\u4f4f\u5bb6", 
          "id": 99825
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u5bb4\u6703", 
          "id": 99834
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u65b0\u7684\u8b49\u64da", 
          "id": 99843
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u7c73\u63d0\u96c5\u516c\u4e3b\u7684\u5192\u96aa", 
          "id": 99850
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u91cd\u9022", 
          "id": 149043
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149055
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u63d2\u5716", 
          "id": 149059
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u6c7a\u6230", 
          "id": 150457
        }, 
        {
          "volume_id": 7324, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 150459
        }
      ]
    }, 
    {
      "name": "\u7b2c\u5341\u4e00\u5377", 
      "id": 7325, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7325, 
          "chapter_name": "\u8073\u52d5\u7684\u8173\u6b65\u8072", 
          "id": 99870
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u8336\u6703", 
          "id": 99880
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u548c\u5e73\u7684\u65e5\u5e38", 
          "id": 99890
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u6f58\u5fb7\u62c9\u525b\u80b2\u5e7c\u9662", 
          "id": 99898
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u524d\u5f80\u516c\u6703", 
          "id": 99905
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u6d88\u6ec5\u8ff7\u8cca", 
          "id": 99917
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u65b0\u4eba\u63a2\u7d22\u8005\u8b1b\u7fd2\u6703", 
          "id": 99926
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u9b54\u9b3c\u7684\u8a98\u60d1", 
          "id": 99931
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u8ff7\u5bae\u90fd\u5e02\u6c7a\u6230", 
          "id": 99942
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149075
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u63d2\u5716", 
          "id": 149081
        }, 
        {
          "volume_id": 7325, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 150463
        }
      ]
    }, 
    {
      "name": "\u7b2c\u5341\u4e8c\u5377", 
      "id": 7326, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7326, 
          "chapter_name": "\u4e45\u9055\u7684\u8ff7\u5bae", 
          "id": 99962
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u611f\u8b1d\u4e4b\u5bb4", 
          "id": 99970
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u675c\u5361\u5229\u6e96\u7537\u7235", 
          "id": 99977
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u8c9d\u5229\u4e9e\u9b54\u6cd5\u85e5", 
          "id": 99982
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u5be6\u529b\u4e0d\u8db3", 
          "id": 99990
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u518d\u8a13\u7df4", 
          "id": 100001
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u9b54\u8a98\u9999", 
          "id": 100007
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u5340\u57df\u4e4b\u4e3b", 
          "id": 100018
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "EX-1\uff1a\u5922\u6676\u9748\u5edf", 
          "id": 100028
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "EX-2\uff1a\u6f54\u5a1c\u968a\u7684\u53d7\u96e3", 
          "id": 100036
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149100
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u63d2\u5716", 
          "id": 149103
        }, 
        {
          "volume_id": 7326, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 150467
        }
      ]
    }, 
    {
      "name": "\u7b2c\u5341\u4e09\u5377", 
      "id": 7327, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7327, 
          "chapter_name": "\u5927\u6c99\u6f20", 
          "id": 100053
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u738b\u90fd", 
          "id": 100062
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u5e0c\u5609\u516b\u528d", 
          "id": 100072
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u9078\u62d4\u5927\u6703", 
          "id": 100079
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u524d\u5f80\u8ff7\u5bae\u4e2d\u5c64", 
          "id": 100091
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u6e96\u5099", 
          "id": 100100
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u72d7\u982d\u53e4\u738b", 
          "id": 100108
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u300c\u6a13\u5c64\u4e4b\u4e3b\u300d\u6230\u5f79", 
          "id": 100113
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "EX\uff1a\u6f54\u5a1c\u968a\u7684\u65c5\u7a0b", 
          "id": 100122
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149124
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u63d2\u5716", 
          "id": 149126
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u9810\u5146", 
          "id": 150470
        }, 
        {
          "volume_id": 7327, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 150471
        }
      ]
    }, 
    {
      "name": "\u7b2c\u5341\u56db\u5377", 
      "id": 7328, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7328, 
          "chapter_name": "\u51f1\u65cb", 
          "id": 100140
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u7b2c\u4e8c\u7ae0\u300a\u518d\u6703\u300b", 
          "id": 100152
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u7b2c\u4e09\u7ae0\u300a\u7b28\u62d9\u7684\u5c11\u5973\u300b", 
          "id": 100162
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u7b2c\u56db\u7ae0\u300a\u8ff7\u5bae\u90fd\u5e02\u7684\u5c11\u5973\u5011\u300b", 
          "id": 100171
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u8ff7\u5bae\u90fd\u5e02\u7684\u65e5\u5e38", 
          "id": 100177
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u9047\u96e3", 
          "id": 100182
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u5e38\u591c\u57ce", 
          "id": 100190
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u9ab8\u8207\u93a7", 
          "id": 100198
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u6700\u5f37\u7684\u8f49\u751f\u8005", 
          "id": 100205
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149146
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u63d2\u5716", 
          "id": 149153
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u5e8f\u7ae0", 
          "id": 150472
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 150473
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u91cd\u9022", 
          "id": 152837
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u7b28\u62d9\u5973\u5b69", 
          "id": 152845
        }, 
        {
          "volume_id": 7328, 
          "chapter_name": "\u8ff7\u5bae\u90fd\u5e02\u7684\u5973\u5b69\u5011", 
          "id": 152853
        }
      ]
    }, 
    {
      "name": "\u7b2c\u5341\u4e94\u5377", 
      "id": 7329, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u4e00\u7ae0\u300a\u6f54\u5a1c\u7684\u4fee\u884c\u300b", 
          "id": 100226
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u4e8c\u7ae0\u300a\u6f5b\u4f0f\u65bc\u9ed1\u6697\u6df1\u8655\u4e4b\u7269\u300b", 
          "id": 100232
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u4e09\u7ae0\u300a\u7a0d\u4f5c\u6b47\u606f\u300b", 
          "id": 100241
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u56db\u7ae0\u300a\u4fee\u884c\u7684\u6210\u679c\u300b", 
          "id": 100249
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u4e94\u7ae0\u300a\u5e74\u7cd5\u6d3e\u5c0d\u300b", 
          "id": 100254
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u516d\u7ae0\u300a\u8ff7\u5bae\u4e0b\u5c64\uff0c\u518d\u4f86\u8a2a\u300b", 
          "id": 100261
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u4e03\u7ae0\u300a\u555f\u7a0b\u300b", 
          "id": 100267
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u516b\u7ae0\u300a\u524d\u5f80\u738b\u90fd\u7684\u65c5\u9014\u300b", 
          "id": 100274
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u4e5d\u7ae0\u300a\u53db\u9006\u7684\u5929\u7a7a\u300b", 
          "id": 100282
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u7b2c\u5341\u7ae0\u300a\u6ce2\u703e\u7684\u822a\u7dda\u300b", 
          "id": 100291
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u300aEX\uff1a\u8482\u6cd5\u9e97\u85a9\u300b", 
          "id": 100299
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149171
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u63d2\u5716", 
          "id": 149177
        }, 
        {
          "volume_id": 7329, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 150474
        }
      ]
    }, 
    {
      "name": "EX \u77ed\u7bc7\u96c6", 
      "id": 7330, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7330, 
          "chapter_name": "\u65b0\u7684\u8abf\u7406\u5668\u5177", 
          "id": 100316
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u6f54\u5a1c\u8207\u4f50\u85e4\u7684\u7d04\u6703", 
          "id": 100320
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5c0f\u7389\u7684\u6700\u611b", 
          "id": 100326
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u548c\u6ce2\u5947\u6d17\u6fa1", 
          "id": 100330
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u6f54\u5a1c\u7684\u751f\u9084", 
          "id": 100335
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u8389\u85a9\u7684\u64d4\u6182", 
          "id": 100340
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5974\u96b8\u516c\u4e3b", 
          "id": 100347
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u9732\u9732\u7684\u4e3b\u4eba", 
          "id": 100352
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u88ab\u56da\u7981\u7684\u516c\u4e3b", 
          "id": 100358
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u6311\u9078\u8863\u670d", 
          "id": 100364
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u4f0a\u6d85\u7684\u9b54\u6cd5\u85e5", 
          "id": 100369
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u8389\u85a9\u7684\u8a13\u7df4", 
          "id": 100374
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5361\u9e97\u5a1c\u8207\u62c9\u5361", 
          "id": 100380
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u6ce2\u5947\u6293\u9b5a", 
          "id": 100385
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5ee2\u589f\u7684\u5c11\u5973", 
          "id": 100390
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u7a46\u8afe\u57ce\u7684\u5973\u50d5\u5011", 
          "id": 100398
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u9732\u9732\u7684\u70f9\u98ea\u4fee\u884c", 
          "id": 100402
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u4e9e\u91cc\u6c99\u7684\u5de5\u4f5c", 
          "id": 100408
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5361\u9e97\u5a1c\u5c0f\u59d0\u7684\u6182\u9b31\uff1a\u6b66\u8853\u7bc7", 
          "id": 100415
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5361\u9e97\u5a1c\u5c0f\u59d0\u7684\u6182\u9b31\uff1a\u793e\u4ea4\u7bc7", 
          "id": 100420
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5361\u9e97\u5a1c\u5c0f\u59d0\u7684\u6182\u9b31\uff1a\u665a\u6703\u7bc7", 
          "id": 100425
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5361\u9e97\u5a1c\u5c0f\u59d0\u7684\u6182\u9b31\uff1a\u6210\u9577\u7bc7", 
          "id": 100430
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u6f84\u6e05\u6e6f\u958b\u767c\u7955\u8f9b", 
          "id": 100438
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5e73\u6c11\u5340\u9152\u9928\u7684\u50b3\u805e", 
          "id": 100444
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u50b3\u805e\u4e2d\u7684\u934a\u91d1\u8853\u5e2b", 
          "id": 100449
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u9ed1\u9aee\u8cb4\u516c\u5b50", 
          "id": 100452
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u516c\u90fd\u591c\u665a\u7684\u7955\u5bc6\u8a13\u7df4\uff01", 
          "id": 100458
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u8cfd\u62c9\u548c\u670d\u52d9\u6d3b\u52d5", 
          "id": 100463
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u6885\u59ae\u4e9e\u516c\u4e3b\u548c\u6728\u982d\u4eba", 
          "id": 100471
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u9b54\u528d\u4e4b\u540d", 
          "id": 100476
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u666e\u5854\u93ae\u7684\u65e5\u5e38", 
          "id": 100482
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u7d05\u8272\u679c\u5be6\u7684\u7955\u5bc6", 
          "id": 100486
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u86cb\u5305\u98ef\u9032\u884c\u66f2", 
          "id": 100492
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u7121\u89d2\u7378", 
          "id": 100496
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u8e66\u8e66\u83c7", 
          "id": 100502
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u7375\u751f\u706b\u817f", 
          "id": 100506
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u539f\u5275\u5496\u54e9", 
          "id": 100512
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u6d77\u9f8d\u7fa4\u5cf6\uff0c\u9047\u96e3\u8a18", 
          "id": 100518
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u6d77\u9f8d\u7fa4\u5cf6\uff0c\u7f8e\u5473\u65e5\u8a18", 
          "id": 100527
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u77ad\u671b\u81fa\u7684\u5e78\u798f", 
          "id": 100532
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u8389\u85a9\u7684\u8001\u670b\u53cb", 
          "id": 100541
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u3008\u4e9e\u91cc\u6c99\u516c\u4e3b\u7684\u7570\u4e16\u754c\u596e\u9b25\u8a18\u3009", 
          "id": 100557
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149235
        }, 
        {
          "volume_id": 7330, 
          "chapter_name": "\u63d2\u5716", 
          "id": 149238
        }
      ]
    }, 
    {
      "name": "\u7b2c\u5341\u516d\u5377", 
      "id": 7331, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u4e00\u7ae0\u300a\u738b\u90fd\u300b", 
          "id": 100572
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u4e8c\u7ae0\u300a\u7537\u7235\u90b8\u300b", 
          "id": 100580
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u4e09\u7ae0\u300a\u6df1\u591c\u7684\u9670\u8b00\u300b", 
          "id": 100586
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u56db\u7ae0\u300a\u738b\u90fd\u89c0\u5149\u300b", 
          "id": 100598
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u4e94\u7ae0\u300a\u6c7a\u9b25\uff01\u5e0c\u5609\u516b\u528d\u300b", 
          "id": 100609
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u516d\u7ae0\u300a\u65b0\u4e8b\u696d\u300b", 
          "id": 100615
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u4e03\u7ae0\u300a\u6f58\u5fb7\u62c9\u8ca2\u5bb6\u7684\u65e5\u5e38\u300b", 
          "id": 100624
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u516b\u7ae0\u300a\u5712\u904a\u6703\u300b", 
          "id": 100631
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u4e5d\u7ae0\u300a\u6bd4\u65af\u5854\u9b6f\u516c\u7235\u90b8\u300b", 
          "id": 100638
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u7b2c\u5341\u7ae0\u300a\u516c\u7235\u90b8\u8972\u64ca\u300b", 
          "id": 100647
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 149253
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 150475
        }, 
        {
          "volume_id": 7331, 
          "chapter_name": "\u63d2\u5716", 
          "id": 150774
        }
      ]
    }, 
    {
      "name": "\u7b2c\u5341\u4e03\u5377", 
      "id": 9518, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 9518, 
          "chapter_name": "\u7b2c\u4e00\u7ae0\u300a\u6388\u52f3\u300b", 
          "id": 148357
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u5e55\u9593", 
          "id": 150476
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u7b2c\u4e8c\u7ae0\u300a\u548c\u5e73\u7684\u738b\u90fd\u300b", 
          "id": 150477
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u7b2c\u4e09\u7ae0\u300a\u7d05\u7e69\u9b54\u7269\u300b", 
          "id": 150478
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u7b2c\u56db\u7ae0\u300a\u7981\u66f8\u5eab\u300b", 
          "id": 150479
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u7b2c\u4e94\u7ae0\u300a\u5404\u81ea\u7684\u8208\u8da3\u300b", 
          "id": 151418
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u7b2c\u516d\u7ae0\u300a\u8ff7\u5075\u63a2\u300b", 
          "id": 151879
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u7b2c\u4e03\u7ae0\u300a\u9a45\u9b54\u5100\u5f0f\u300b", 
          "id": 151883
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u7b2c\u516b\u7ae0\u300a\u795e\u300b", 
          "id": 152381
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 152620
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u5f8c\u8a18", 
          "id": 152621
        }, 
        {
          "volume_id": 9518, 
          "chapter_name": "\u63d2\u5716", 
          "id": 152622
        }
      ]
    }, 
    {
      "name": "\u7b2c\u5341\u516b\u5377", 
      "id": 9725, 
      "book_id": 1715, 
      "chapters": [
        {
          "volume_id": 9725, 
          "chapter_name": "\u7b2c\u4e00\u7ae0\u300a\u65b0\u5e74\u300b", 
          "id": 153014
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u7b2c\u4e8c\u7ae0\u300a\u5c0f\u5149\u300b", 
          "id": 153019
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u7b2c\u4e09\u7ae0\u300a\u7948\u9858\u7684\u6212\u6307\u300b", 
          "id": 153025
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u5e55\u9593\uff1a\u6ce2\u7d0b", 
          "id": 154343
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u7b2c\u56db\u7ae0\u300a\u53cb\u60c5\u8207\u6c7a\u610f\u300b", 
          "id": 154352
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u7b2c\u4e94\u7ae0\u300a\u738b\u7acb\u5b78\u9662\u300b", 
          "id": 154491
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u7b2c\u516d\u7ae0\u300a\u7f8e\u98df\u5bb6\u9910\u6703\u300b", 
          "id": 155127
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u5e55\u9593\uff1a\u8822\u52d5", 
          "id": 155129
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u7b2c\u4e03\u7ae0\u300a\u6ce2\u5947\u8207\u5c0f\u7389\u7684\u90ca\u904a\u300b", 
          "id": 155137
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u5e55\u9593\uff1a\u90ca\u904a\u4e4b\u5f8c", 
          "id": 155141
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u5e55\u9593\uff1a\u62cd\u8ce3\u6703\u524d\u65e5", 
          "id": 155145
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u7b2c\u516b\u7ae0\u300a\u62cd\u8ce3\u6703\u300b", 
          "id": 155152
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u7b2c\u4e5d\u7ae0\u300a\u602a\u76dc\u300b", 
          "id": 155155
        }, 
        {
          "volume_id": 9725, 
          "chapter_name": "\u5c3e\u8072", 
          "id": 158041
        }
      ]
    }
  ]
}

```

### 5、fetch chapter content

#### request URL：
```
https://openacg.ml/api/v1/novel/getChapter
```

#### demo：
[https://openacg.ml/api/v1/novel/getChapter?chapterid=99084](https://openacg.ml/api/v1/novel/getChapter?chapterid=99084)

#### request method：
```
GET
```

#### parameter type：

|Parameter|Optional|data type|Description|
|:-----|:-------:|:-----|:-----|
|chapterid      |N       |int  |chapter id|

#### response demo：

```javascript
{
  "status": 200, 
  "sucess": 1, 
  "server_time": 1584414362, 
  "response": {
    "volume_id": 7315, 
    "content": "\n\r\n\u00a0\u00a0\u00a0\u00a0\u6210\u5343\u4e0a\u842c\uff0c\u4e0d\u8a08\u5176\u6578\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u4f60\u66fe\u7d93\u898b\u904e\u6d41\u661f\u55ce\uff1f\n\r\n\u00a0\u00a0\u00a0\u00a0\u6709\u5c0d\u90a3\u7729\u76ee\u5e7b\u5883\u8457\u8ff7\u4e4b\u4eba\u3001\u6709\u9ad8\u8072\u547c\u558a\u9858\u671b\u4e4b\u4eba\uff0c\u6211\u8a8d\u70ba\u4eba\u5404\u6709\u7570\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7136\u800c\uff0c\u9695\u77f3\u5283\u7834\u5929\u7a7a\u76f4\u589c\u800c\u4e0b\u7684\u666f\u8272\uff0c\u53ef\u6c92\u6709\u89aa\u773c\u77a7\u898b\u904e\u4e86\u5427\uff1f\n\r\n\u00a0\u00a0\u00a0\u00a0\u4f34\u96a8\u8457\u8f5f\u9686\u5de8\u97ff\u5283\u88c2\u5929\u969b\uff0c\u6191\u90a3\u8cea\u91cf\u548c\u58d3\u5012\u6027\u7684\u901f\u5ea6\u885d\u64ca\u5927\u5730\u7684\u6a21\u6a23\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6216\u8a31\u5176\u4e2d\u6709\u4eba\u5728\u96fb\u8996\u53ca\u7db2\u8def\u52d5\u756b\u7db2\u7ad9\u4e0a\u770b\u904e\u4e5f\u8aaa\u4e0d\u5b9a\u3002\u5373\u4f7f\u5982\u6b64\uff0c\u60f3\u5fc5\u6c92\u6709\u4eba\u60f3\u770b\u9695\u77f3\u8fd1\u8ddd\u96e2\u50be\u7009\u800c\u964d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6c92\u932f\uff0c\u73fe\u5728\u6211\u773c\u524d\u7684\u5927\u5730\uff0c\u6709\u903e\u767e\u9846\u7684\u9695\u77f3\u6b63\u63a5\u9023\u4e0d\u65b7\u5730\u6389\u843d\u4e0b\u4f86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u4e0d\u5c0d\uff01\u4e0d\u61c9\u8a72\u8aaa\u5f97\u50cf\u662f\u5225\u4eba\u5bb6\u7684\u4e8b\uff0c\u56e0\u70ba\u5f15\u767c\u9019\u5834\u5929\u5730\u7570\u8b8a\u7684\u4eba\uff0c\u7121\u5eb8\u7f6e\u7591\u5c31\u662f\u6211\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7d04\u83ab\u5341\u5206\u9418\u524d\uff0c\u4e0d\u5047\u601d\u7d22\u7684\u9078\u64c7\uff0c\u5982\u4eca\u5316\u70ba\u6d41\u661f\uff0c\u5c07\u5927\u5730\u5228\u51fa\u4e00\u500b\u53c8\u4e00\u500b\u7684\u5751\u6d1e\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6d41\u661f\u5f9e\u77ed\u77ed\u51e0\u516c\u91cc\u5916\u76f4\u81f3\u9059\u9060\u5f7c\u65b9\u7684\u5927\u5cfd\u8c37\uff0c\u671d\u5bec\u5ee3\u7bc4\u570d\u7684\u5927\u5730\u4e0a\u885d\u649e\uff0c\u8e42\u8eaa\u6211\u63a8\u6e2c\u4f4d\u5728\u90a3\u88e1\u7684\u300c\u6575\u4eba\u300d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u8996\u91ce\u89d2\u843d\u4e0a\u7684\u96f7\u9054\u5149\u9ede\u7336\u5982\u62ed\u53bb\u9ad2\u6c59\u822c\u4e0d\u65b7\u6d88\u5931\uff0c\u96d6\u7136\u5f9e\u6211\u9019\u500b\u5730\u65b9\u5224\u5225\u4e0d\u592a\u51fa\u4f86\u60c5\u6cc1\uff0c\u4f46\u843d\u4e0b\u7684\u5730\u9ede\u61c9\u8a72\u6709\u7121\u6578\u751f\u547d\u6b63\u5728\u901d\u53bb\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7136\u5f8c\u5e7e\u4e4e\u6240\u6709\u6d41\u661f\u6d88\u5931\u65bc\u5730\u8868\u4e4b\u969b\uff0c\u589c\u843d\u8072\u624d\u7d42\u65bc\u5230\u9054\uff0c\u7a0d\u665a\u5730\u9cf4\u4e5f\u8b8a\u6210\u4e86\u9707\u52d5\u50b3\u905e\u800c\u4f86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u530d\u5310\u5927\u5730\u7684\u6c99\u5875\u5de8\u6d6a\u773c\u770b\u5c31\u8981\u903c\u8fd1\u2014\u2014\n\r\n\u00a0\u00a0\u00a0\u00a0\u5ffd\u7136\uff0c\u5b9b\u5982\u5929\u8b74\u4e00\u822c\u7684\u5287\u75db\u611f\u5411\u6211\u8972\u64ca\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u50cf\u662f\u8981\u92f8\u958b\u6211\u7684\u8166\u9580\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u50cf\u662f\u8981\u5c07\u6211\u4e94\u99ac\u5206\u5c4d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u90a3\u4efd\u75db\u89ba\u4f7f\u6211\u55aa\u5931\u4e86\u610f\u8b58\uff0c\u96a8\u5373\uff0c\u6211\u7684\u8eab\u9ad4\u9042\u88ab\u6c99\u5875\u5de8\u6d6a\u7d66\u541e\u6c92\u6b86\u76e1\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u25c6\n\r\n\u00a0\u00a0\u00a0\u00a0\u6642\u9593\u5f80\u524d\u56de\u6eaf\u4e00\u9ede\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u70ba\u4e86\u8b93\u5c8c\u5c8c\u53ef\u5371\u7684\u5c08\u6848\u8d95\u4e0a\u4ea4\u4ef6\u671f\u9650\uff0c\u5047\u65e5\u5230\u516c\u53f8\u52a0\u73ed\u3002\u6211\u7684\u5de5\u4f5c\u662f\u53d7\u5927\u4f01\u696d\u59d4\u8a17\u958b\n\r\n\u00a0\u00a0\u00a0\u00a0\u767c\u667a\u6167\u578b\u624b\u6a5f\u7528\u7684APP\u8207\u96fb\u8166\u7db2\u9801\u904a\u6232\u7684\u5916\u5305\u516c\u53f8\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7121\u8ad6\u9019\u662f\u4e00\u9593\u591a\u9ebc\u9ed1\u5fc3\u7684\u516c\u53f8\uff0c\u5e73\u5e38\u4e26\u4e0d\u6703\u8b93\u4e00\u500b\u4eba\u5206\u914d\u57f7\u884c\u9054\u5169\u500b\u5c08\u6848\u4ee5\u4e0a\uff0c\u7136\u800c\u898f\u683c\u4fee\u6539\u548cBug\u7e41\u591a\u7684\u7de3\u6545\uff0c\u5f8c\u8f29\u7684\u5e74\u8f15\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\u5728\u4ea4\u4ef6\u671f\u9593\u5931\u8e64\u4e86\uff01\u5be6\u5728\u4ee4\u6211\u75db\u5fc3\uff01\n\r\n\u00a0\u00a0\u00a0\u00a0\u7531\u65bc\u8077\u5834\u96e2\u8077\u7387\u9ad8\uff0c\u5c0e\u81f4\u4efb\u8077\u65bc\u9019\u9593\u516c\u53f8\u7684\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\uff0c\u53ea\u6709\u5f8c\u8f29\u548c\u6211\u5169\u500b\u4eba\u800c\u5df2\u3002\u5728\u4e0d\u53ef\u80fd\u671f\u671b\u516c\u53f8\u7dca\u6025\u88dc\u4eba\u7684\u72c0\u6cc1\u4e0b\uff0c\u6211\u9677\u5165\u9664\u4e86\u81ea\u5df1\u7684\u5c08\u6848\u4ee5\u5916\uff0c\u9084\u5f97\u5e6b\u5f8c\u8f29\u706b\u71d2\u5c41\u80a1\u7684\u5c08\u6848\u6536\u62fe\u5584\u5f8c\u7684\u56f0\u5883\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u597d\u4e86\uff0c\u6240\u6709\u985e\u5225\u8f38\u51fa\u5165\u548c\u8a3b\u89e3\u90fd\u5b8c\u6210\u4e86\uff0c\u4e4b\u5f8c\u7528\u81ea\u52d5\u6587\u4ef6\u751f\u6210\u5668\u5f9e\u7a0b\u5f0f\u78bc\u69cb\u6210\u6587\u4ef6\u53ca\u95dc\u806f\u5716\u5c31\u80fd\u6b63\u5f0f\u6392\u9664Bug\u4e86?\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u7a0d\u5fae\u4f38\u4e86\u4f38\u61f6\u8170\u4e26\u5580\u5566\u5580\u5566\u5730\u8f49\u52d5\u8116\u5b50\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u74b0\u9867\u5468\u906d\uff0c\u6240\u6709\u4eba\u90fd\u4f86\u4e0a\u73ed\u7684\u7a0b\u5ea6\uff0c\u6839\u672c\u8b93\u4eba\u4e0d\u89ba\u5f97\u662f\u5047\u65e5\u3002\u5341\u5206\u907a\u61be\uff0c\u9019\u5c31\u662f\u5e73\u6642\u7684\u8077\u5834\u5149\u666f\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u9694\u58c1\u5ea7\u4f4d\u4e0a\u7684\u9664\u932f\u767c\u5305\u8ca0\u8cac\u4eba\uff0c\u4e00\u908a\u5630\u54e9\u5495\u5695\u5730\u788e\u5ff5\u4e00\u908a\u57f7\u884c\u5de5\u4f5c\uff0c\u53ef\u662f\u6c92\u6709\u4eba\u6295\u4ee5\u5947\u7570\u7684\u773c\u5149\u3002\u6839\u672c\u6c92\u6709\u90a3\u7a2e\u7a7a\u9592\u5427\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u56db\u5468\u7684\u7f8e\u8853\u8a2d\u8a08\u53ca\u904a\u6232\u4f01\u5283\u4e5f\u6b63\u4ee5\u6b7b\u4eba\u822c\u7684\u7a7a\u6d1e\u773c\u795e\uff0c\u9ed8\u9ed8\u63a8\u9032\u81ea\u5df1\u7684\u4f5c\u696d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u6ce1\u4e86\u676f\u5496\u5561\u56de\u5230\u5ea7\u4f4d\uff0c\u96fb\u8166\u5df2\u7d93\u7d50\u675f\u5de5\u4f5c\uff0c\u5b8c\u6210\u4e86\u9664\u932f\u6240\u9700\u7684\u8cc7\u6599\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u8a71\u96d6\u5982\u6b64\uff0c\u9023\u8cc7\u6599\u90fd\u6c92\u6709\u5c31\u9032\u884c\u4f5c\u696d\uff0c\u96e3\u602a\u6703\u706b\u71d2\u5c41\u80a1\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5411\u9023\u9032\u884cOJT(\u6ce8\uff1aOn-the-job Training\uff0c\u5728\u8077\u8a13\u7df4)\u7684\u7a7a\u9592\u90fd\u6c92\u6709\uff0c\u5c31\u88ab\u8feb\u6295\u5165\u5be6\u6230\u7684\u5f8c\u8f29\u62b1\u6028\u4e5f\u6c92\u6709\u7528\u5427\uff1f\u534a\u5e74\u524d\u5f8c\u8f29\u9032\u5165\u516c\u53f8\u7684\u6642\u5019\u6709\u56db\u4f4d\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\uff0c\u73fe\u5728\u537b\u5269\u6211\u4e00\u4eba\uff0c\u9019\u4ef6\u4e8b\u516c\u53f8\u65b9\u9762\u4e0d\u66c9\u5f97\u600e\u9ebc\u770b\u5f85\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u4f50\u2026\u2026\u9234\u6728\uff0c\u5ba2\u6236\u62b1\u6028WW\u90a3\u908a\u7684\u96e3\u6613\u5ea6\u5c0d\u65b0\u624b\u4f86\u8aaa\u592a\u96e3\u4e86\uff0c\u9700\u8981\u4fee\u6b63\uff0c\u600e\u9ebc\u8fa6\uff1f\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u56de\u904e\u982d\uff0c\u7e3d\u76e3\u517c\u4f01\u5283\u7684\u80a5\u4ed4\u4e00\u5982\u65e2\u5f80\u4ee5\u56f0\u64fe\u7684\u795e\u60c5\u554f\u9053\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5dee\u4e00\u9ede\u5c31\u8981\u53eb\u6211\u4f50\u85e4\u4e86\u5427\uff0c\u9019\u500b\u6df7\u5e33\u3002\u660e\u660e\u5718\u968a\u90fd\u7d44\u6709\u534a\u5e74\u4e86\uff0c\u4e0d\u8981\u7d66\u6211\u4f86\u5dee\u9ede\u641e\u932f\u9019\u62db\uff01\n\r\n\u00a0\u00a0\u00a0\u00a0\u800c\u4e14\uff0c\u767c\u751f\u4e86\u9ebb\u7169\u4e8b\u5c45\u7136\u9084\u4e00\u526f\u958b\u5fc3\u7684\u6a21\u6a23\u3002\u70ba\u4ec0\u9ebc\u9019\u7a2e\u958b\u767c\u8005M\u5c6c\u6027\u7684\u4eba\u5c45\u591a\u554a\uff1f\n\r\n\u00a0\u00a0\u00a0\u00a0WW\u662f\u73fe\u5728\u4e3b\u529b\u958b\u767c\u4e2d\u7684\u96fb\u8166\u7db2\u9801\u904a\u6232\u300cWAR WORLD\u300d\u7684\u7c21\u7a31\uff0c\u8ffd\u52a0\u4e86\u4e9b\u8a31\u793e\u7fa4\u4ea4\u6d41\u529f\u80fd\uff0c\u662f\u4ee5\u5947\u5e7b\u4e16\u754c\u70ba\u821e\u81fa\u7684\u6230\u7565\u578b\u904a\u6232\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u5982\u679c\u96e3\u6613\u5ea6\u518d\u5f80\u4e0b\u8abf\uff0c\u6211\u5011\u7684\u4e3b\u8981\u76ee\u6a19\u73a9\u5bb6\u7fa4\u5c31\u4e0d\u6703\u4f86\u73a9\u4e86\uff0c\u6240\u4ee5\u4e0d\u884c\u3002\u6211\u6c92\u8aaa\u904e\u55ce\uff1f\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u6c92\u932f\uff0c\u73fe\u5728\u7684\u96e3\u6613\u5ea6\u662f\u591a\u6b21\u4e0d\u65b7\u8207\u5ba2\u6236\u958b\u6703\u5b9a\u4e0b\u7684\u7d50\u679c\u3002\u90a3\u4e9b\u6d6a\u8cbb\u6389\u7684\u6642\u9593\u771f\u7684\u90fd\u6210\u4e86\u4e00\u5834\u7a7a\uff1f\u6211\u8981\u5d29\u6f70\u4e86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u628a\u4e4b\u524d\u6c92\u88ab\u63a1\u7528\u7684\u521d\u6b21\u5275\u89d2\u9650\u5b9a\u734e\u52f5\u7cfb\u7d71\uff0c\u5730\u5716\u5168\u6575\u641c\u7d22\u53ca\u5927\u6982\u4e09\u6b21\u4efd\u91cf\u7684\u5730\u5716\u6bb2\u6ec5\u9b54\u6cd5\u52a0\u53bb\u4e0a\u4e0d\u5c31\u597d\u4e86\u55ce\uff1f\u5982\u679c\u4e0d\u4f7f\u7528\u734e\u52f5\u5c31\u904e\u95dc\uff0c\u8d08\u4e88\u7a00\u6709\u7a31\u865f\u4e4b\u985e\u7684\uff0c\u5f15\u5c0e\u9ad8\u624b\u73a9\u5bb6\u5011\u8da8\u5411\u81ea\u52d5\u81ea\u767c\u4e0d\u53bb\u4f7f\u7528\u5462\uff1f\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u53cd\u6b63\u4e5f\u6c92\u6709\u6642\u9593\u4e86\uff0c\u5148\u7528\u90a3\u500b\u53bb\u505a\u5427?\u90a3\u9ebc\uff0c\u9ebb\u7169\u9234\u6728\u6309\u7167\u90a3\u6a23\u53bb\u5be6\u88dd\u3002\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u80a5\u4ed4\u9084\u662f\u8001\u6a23\u5b50\u4e00\u6d3e\u8f15\u9b06\u5730\u5c0d\u6211\u8aaa\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u7b49\u4e00\u4e0b\uff0c\u73fe\u5728\u6211\u5728\u8d95\u624b\u904aMMORPG\u7684\u9664\u932f\uff0c\u4f60\u5148\u548c\u5ba2\u6236\u53d6\u5f97\u540c\u610f\u5566\uff01\u5982\u679c\u96a8\u4fbf\u653e\u9032\u53bb\u53c8\u88ab\u5426\u6c7a\uff0c\u53ef\u6c92\u6709\u4fee\u6539\u7684\u6642\u9593\u4e86\u3002\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u300cOK ,\u6211\u73fe\u5728\u5c31\u6253\u96fb\u8a71\u78ba\u8a8d?\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u80a5\u4ed4\u6416\u64fa\u8457\u5de8\u8ec0\uff0c\u55ae\u624b\u6301\u8457\u624b\u6a5f\u4fbf\u6d88\u5931\u5728\u5438\u83f8\u5340\u90a3\u982d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5f9e\u9019\u908a\u958b\u59cb\uff0c\u6211\u5c31\u4e00\u9762\u81ea\u8a00\u81ea\u8a9e\u4e00\u9762\u9ed8\u9ed8\u57f7\u884c\u4f5c\u696d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u4e2d\u9014\u6536\u5230\u4e86\u80a5\u4ed4\u300c\u7e7c\u7e8c\u9032\u884c\u300d\u7684\u624b\u52e2\uff0c\u4e26\u7528\u5783\u573e\u98df\u7269\u588a\u4e86\u588a\u80c3\uff0c\u591c\u6108\u4f86\u6108\u6df1\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u4fee\u6539\u5f8c\u8f29\u6240\u7559\u4e0b\u4f86\u7121\u6578\u7c97\u5fc3\u7684\u932f\u8aa4\u5230\u51cc\u6668\uff0c\u5f8c\u7e8c\u4fbf\u4ea4\u7d66\u9664\u932f\u5718\u968a\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u8a71\u8aaa\u56de\u4f86\uff0c\u540d\u5b57\u662f\u4ec0\u9ebc\u4f86\u8457\uff1f\n\r\n\u00a0\u00a0\u00a0\u00a0\u7e3d\u662f\u53ebMMO\u6216\u89d2\u8272\u626e\u6f14\u904a\u6232\u4e4b\u985e\u7684\uff0c\u6b63\u5f0f\u540d\u7a31\u60f3\u4e0d\u8d77\u4f86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5c0d\u4e86\uff0c\u53eb\u4f5c\u300cFREEDOM FANTASY WORLD\u300d\u3002\u56e0\u70ba\u6703\u8207WW\u7684\u820a\u540d\u300cFANTASY WAR WORLD\u300d\u6df7\u6dc6\uff0c\u6240\u4ee5\u8ab0\u4e5f\u4e0d\u76f4\u63a5\u53eb\u540d\u5b57\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u56de\u60f3\u8d77\u4f86\uff0c\u8001\u820a\u7684\u4f01\u756b\u66f8\u4e0a\u9084\u5beb\u6709FFW\u7684\u7c21\u7a31\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u800c\u90a3\u4e4b\u5f8c\uff0cWW\u540d\u7a31\u88e1\u7684\u300cFANTASY\u300d\u88ab\u62ff\u6389\uff0c\u89d2\u8272\u626e\u6f14\u904a\u6232\u4e5f\u6210\u70ba\u4e86\u904e\u5f80\u7684\u66ab\u7a31\uff0c\u5982\u4eca\u6539\u70ba\u300cFREEDOM FANTASY LIFE\u300d\uff0c\u7c21\u7a31\u4ea6\u8b8a\u6210\u4e86FFL\u3002\u56e0\u6b64\u73fe\u5728\u96d6\u4e0d\u81f3\u65bc\u5230\u9054\u6df7\u6dc6\u7684\u7a0b\u5ea6\uff0c\u4f46\u65e9\u77e5\u5982\u6b64\u4f55\u5fc5\u7576\u521d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u9234\u6728\uff0c\u5132\u5009\u6aa2\u6e2c\u7d44\u5831\u544a\u6709Bug!\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u9019\u6b21\u662f\u4ec0\u9ebc\uff1f\u514d\u4ed8\u8cbb\u7684\u9053\u5177\u6536\u7d0d\u5bb9\u91cf\u7121\u4e0a\u9650Bug\u7684\u8a71\uff0c\u6211\u525b\u624d\u8655\u7406\u4e86\u5594\uff1f\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u90a3\u662fFFL\u7684\u5eab\u5b58Bug\u5427\uff1f\u9019\u6b21\u662fWW ,\u597d\u50cf\u662f\u9053\u5177\u8907\u88fd\u7684Bug\uff0c\u8a73\u7d30\u8aaa\u660e\u8acb\u770b\u901a\u8a0a\u8edf\u9ad4\u7684\u9644\u52a0\u6a94\u6848\u3002\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u300cOK\u2014\u2014\u53ef\u60e1\uff0c\u8907\u88fd\u7684Bug\u5f88\u9811\u5f37\u54ea\uff01\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u554a\uff0c\u5169\u908a\u4e00\u65e6\u540c\u6642\u9032\u884c\u5c31\u8b8a\u5f97\u5f88\u9ebb\u7169\u3002\u9806\u5e36\u4e00\u63d0\uff0c\u6240\u8b02\u7684\u5132\u5009\u4e0d\u662f\u6307\u5916\u90e8\u8a18\u61b6\u88dd\u7f6e\uff0c\u800c\u662fWW\u9053\u5177\u6536\u7d0d\u5eab\u7684\u540d\u7a31\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u4e00\u908a\u4fee\u6539WW\uff0c\u4e00\u908a\u9010\u689d\u8655\u7406\u9664\u932f\u5718\u968a\u767c\u4f86\u7684Bug\u6e2c\u8a66\u5831\u544a\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u4e0d\u77e5\u4f55\u6642\uff0c\u80a5\u4ed4\u50b3\u4f86\u4e86\u4e00\u5c01\u8a0a\u606f\uff1a\u300cWW\u5728BETA\u6e2c\u8a66\u7684\u6642\u5019\uff0c\u5e6b\u6211\u628a\u5132\u5009\u5bb9\u91cf\u7684\u9650\u5236\u7d66\u79fb\u9664\u6389\u3002\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u4f60\u9019\u50a2\u4f19\uff0c\u6015\u6703\u6371\u7f75\u5c31\u7528\u50b3\u8a0a\u7684\u65b9\u6cd5\u60f3\u9003\u904e\u4e00\u52ab\u554a\uff01\u7b49\u4e0b\u5403\u98ef\u5c31\u8b93\u4f60\u8acb\u5ba2\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0FFL\u7684\u9664\u932f\u7d44\u4e5f\u56e0\u70ba\u8981\u6e2c\u8a66\u4e0a\u9650\uff0c\u767c\u4f86\u4e86\u66ab\u6642\u89e3\u9664\u7b49\u7d1a\u9650\u5236\u7684\u8981\u6c42\uff0c\u5118\u7ba1\u90a3\u61c9\u8a72\u662f\u4f3a\u670d\u5668\u7d44\u7684\u5de5\u4f5c\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u908a\u7f75\u9ad2\u8a71\u908a\u7e7c\u7e8c\u4fee\u6539\u7684\u5de5\u4f5c\uff0c\u554a\uff0c\u4eca\u665a\u4e5f\u901a\u9704\u55ce\uff1f\n\r\n\u00a0\u00a0\u00a0\u00a0\u6e2c\u8a66\u4e00\u76f4\u6301\u7e8c\u5230\u9694\u5929\u65e9\u4e0a\uff0c\u5947\u8e5f\u4f3c\u7684\u628aFFL\u7684\u5ba2\u6236\u7aef\u61c9\u7528\u7a0b\u5f0f\u4ea4\u4ef6\u51fa\u53bb\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7576\u7136\u4e5f\u8a31\u9084\u6b98\u7559\u4e86Bug,\u4f46\u900f\u904e\u7db2\u8def\u80fd\u767c\u4f48\u4e00\u7a2e\u53eb\u4f5c\u300c\u66f4\u65b0\u6a94\u300d\u7684\u50b3\u5bb6\u4e4b\u5bf6\uff0c\u6211\u60f3\u662f\u6c92\u6709\u64d4\u5fc3\u7684\u5fc5\u8981\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u73a9\u5bb6\u5011\u7684\u6012\u7f75\u8072\u5f77\u4f5b\u80fd\u807d\u5f97\u898b\uff0c\u4e0d\u904e\u6211\u60f3\u7761\u4e86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u628a\u9664\u932f\u5718\u968a\u8655\u7406\u4f5c\u696d\u6642\u6211\u6240\u4fee\u6539\u904e\u7684WW\u57f7\u884c\u7a0b\u5f0f\u5305\uff0c\u7528\u516c\u53f8\u90f5\u4ef6\u8f49\u5bc4\u7d66\u80a5\u4ed4\u5f8c\uff0c\u9042\u5728\u8fa6\u516c\u684c\u4e0b\u7684\u5b89\u7a69\u5929\u5730\u88e1\u9032\u5165\u4e45\u9055\u4e09\u5341\u500b\u9418\u982d\u7684\u597d\u7720\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u554a\uff0c\u81f3\u9ad8\u7121\u4e0a\u7684\u5e78\u798f\u3002\u8981\u7b11\u6211\u662f\u793e\u755c\u5c31\u7b11\u5427\uff0c\u73fe\u5728\u7761\u89ba\u624d\u662f\u6b63\u7fa9\uff01\n\r\n\u00a0\u00a0\u00a0\u00a0\u25c6\n\r\n\u00a0\u00a0\u00a0\u00a0\u4f60\u77e5\u9053\u300c\u6e05\u9192\u5922\u300d\u9019\u500b\u8a5e\u55ce\uff1f\n\r\n\u00a0\u00a0\u00a0\u00a0\u6307\u7684\u662f\u81ea\u5df1\u610f\u8b58\u5230\u662f\u5922\u6642\u6240\u4f5c\u7684\u5922\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u73fe\u5728\u8eab\u8655\u8352\u90ca\u91ce\u5916\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u662f\u7684\uff0c\u8352\u90ca\u91ce\u5916\u3002\u60f3\u50cf\u6210\u662f\u7f8e\u570b\u5927\u5cfd\u8c37\u4e00\u5e36\u5c31\u597d\u4e86\u5427\uff1f\n\r\n\u00a0\u00a0\u00a0\u00a0\u70ba\u4f55\u6211\u6703\u77e5\u9053\u662f\u5922\uff1f\n\r\n\u00a0\u00a0\u00a0\u00a0\u9084\u8a18\u5f97\u525b\u624d\u5728\u8fa6\u516c\u684c\u5e95\u4e0b\u7761\u8457\u662f\u5176\u4e2d\u4e00\u500b\u539f\u56e0\uff0c\u53e6\u4e00\u500b\u539f\u56e0\u662f\u6211\u770b\u5f97\u5230\u8996\u91ce\u53f3\u4e0b\u65b9\u6709\u56db\u500b\u300c\u5716\u6a19\u300d\uff0c\u53f3\u4e0a\u65b9\u9084\u6709\u5beb\u8457\u300c\u4e3b\u9078\u55ae\u300d\u7684\u5de5\u5177\u6b04\uff0c\u4ee5\u53ca\u7528\u4f86\u6212\u5099\u5468\u906d\u7684\u96f7\u9054\u986f\u793a\u5716\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u548c\u6211\u76f4\u5230\u65b9\u624d\u90fd\u5728\u8655\u7406\u7684WW\u4ecb\u9762\u662f\u76f8\u540c\u7684\u6771\u897f\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u53ef\u662f\uff01\u5728\u52a0\u73ed\u4fee\u7f85\u5834\u88e1\u7761\u8457\u6642\uff0c\u5728\u5922\u4e2d\u9664\u932f\u9019\u4e26\u975e\u7b2c\u4e00\u6b21\u3002\u5118\u7ba1\u4e0d\u662f\u5de5\u4f5c\u5ba4\u6216\u81ea\u5df1\u623f\u9593\uff0c\u800c\u662f\u8352\u90ca\u91ce\u5916\u9019\u4ef6\u4e8b\u662f\u500b\u8b0e\uff0c\u53ef\u80fd\u662f\u56e0\u70ba\u623f\u9593\u592a\u4e7e\u71e5\uff0c\u8af8\u5982\u6b64\u985e\u7684\u7406\u7531\u5427\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u4e7e\u71e5\u571f\u58e4\u7684\u6c23\u5473\u523a\u6fc0\u8457\u6211\u7684\u9f3b\u8154\u3002\u5c45\u7136\u805e\u5f97\u5230\u5473\u9053\uff0c\u662f\u5f88\u7a00\u6709\u7684\u5922\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5728\u9032\u884c\u5404\u7a2e\u6e2c\u8a66\u4e4b\u5f8c\uff0c\u6211\u624d\u77e5\u9053\u4e3b\u9078\u55ae\u96bb\u8981\u7528\u60f3\u7684\u5c31\u53ef\u4ee5\u6253\u958b\uff0c\u82e5\u7528\u624b\u53bb\u64cd\u63a7\uff0c\u986f\u793a\u6392\u5e8f\u5c31\u6703\u5012\u904e\u4f86\u4ee5\u81f4\u51fa\u73fe\u4e0d\u80fd\u89f8\u78b0\u7684Bug\uff0c\u771f\u662f\u9ad8\u660e\u3002\u548c\u6253\u958b\u6642\u540c\u6a23\u7684\uff0c\u53ea\u8981\u7528\u60f3\u7684\u5c31\u53ef\u4ee5\u64cd\u63a7\uff0c\u6240\u4ee5\u6c92\u6709\u5927\u7919\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7e3d\u89ba\u5f97\u4e3b\u9078\u55ae\u7684\u9805\u76ee\u82e5\u5e72\u6df7\u96dc\u4e86FFL\u8207WW\uff0c\u4f46\u662f\u5728\u5922\u88e1\u8981\u6c42\u7522\u54c1\u6574\u5408\u6027\u4e5f\u6c92\u6709\u610f\u7fa9\u5427\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u89d2\u8272\u540d\u7a31\u4e00\u5982\u5f80\u5e38\u53eb\u4f5c\u300c\u4f50\u85e4\u300d\uff0c\u56e0\u70ba\u6211\u7d93\u5e38\u88ab\u53eb\u932f\u6210\u4f50\u85e4\uff0c\u6e2c\u8a66\u904a\u6232\u7684\u89d2\u8272\u5927\u591a\u53d6\u9019\u540d\u5b57\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5148\u6487\u958b\u4e0d\u7ba1\u89d2\u8272\u72c0\u614b\u662f\u7b49\u7d1a\u4e00\u7684\u521d\u671f\u60c5\u5f62\uff0c\u88dd\u5099\u54c1\u5c45\u7136\u662f\u7761\u524d\u653e\u5728\u8eab\u4e0a\u7684\u80fd\u91cf\u68d2\u3001\u9322\u5305\u8207\u624b\u6a5f\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u54ce\u5440\uff0c\u78ba\u5be6\u5f88\u6709\u5922\u5883\u7684\u611f\u89ba\uff01\n\r\n\u00a0\u00a0\u00a0\u00a0\u653e\u773c\u671b\u5411\u5468\u906d\uff0c\u5728\u8996\u91ce\u7684\u4e00\u9685\uff0c\u5730\u9762\u88ab\u5b8c\u6574\u5730\u5207\u958b\u3002\u63a8\u6e2c\u662f\u61f8\u5d16\u4ec0\u9ebc\u7684\uff0c\u6211\u8d70\u4e86\u904e\u53bb\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u770b\u4f86\uff0c\u9019\u88e1\u4f3c\u4e4e\u662f\u500b\u9ad8\u81fa\uff0c\u4f4d\u5728\u9ad8\u9054\u4e00\u767e\u516c\u5c3a\u7684\u65b7\u5d16\u4e4b\u4e0a\u3002\u800c\u56db\u5468\u4e5f\u6709\u6578\u500b\u540c\u6a23\u7684\u67f1\u72c0\u9ad8\u81fa\u8073\u7acb\u5728\u5730\u3002\u5d16\u4e0b\u662f\u8207\u9019\u88e1\u76f8\u540c\uff0c\u4e00\u671b\u7121\u969b\u7684\u7d05\u8910\u8272\u8352\u91ce\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5730\u5e73\u7dda\u5f7c\u65b9\u80fd\u770b\u5f97\u898b\u7336\u5982\u5730\u9762\u9f9c\u88c2\u958b\u4f86\u7684\u88c2\u7e2b\uff0c\u6211\u958b\u555f\u5730\u5716\u78ba\u8a8d\uff0c\u76ee\u524d\u6240\u5728\u4f4d\u7f6e\u5468\u908a\u4ee5\u5916\u90fd\u662f\u7a7a\u767d\u3002\u82e5\u9019\u662fWW\u7684\u8a2d\u8a08\uff0c\u9664\u4e86\u5df2\u63a2\u7d22\u5b8c\u7562\u7684\u5834\u666f\uff0c\u90fd\u5c07\u662f\u7a7a\u767d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5de6\u4e0a\u65b9\u7684\u5730\u5716\u540d\u7a31\u986f\u793a\u300c\u9f8d\u4e4b\u8c37\u300d\uff0c\u6240\u4ee5\u90a3\u500b\u9f9c\u88c2\u4e4b\u8655\u5c31\u662f\u9f8d\u4e4b\u8c37\u55ce\uff1f\u6211\u8a66\u8457\u805a\u7cbe\u6703\u795e\u51dd\u8996\uff0c\u4e5f\u6c92\u898b\u5230\u50cf\u662f\u9f8d\u7684\u8eab\u5f71\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5012\u662f\u770b\u898b\u4e86\u5225\u7684\u6771\u897f\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u25c6\n\r\n\u00a0\u00a0\u00a0\u00a0\u96e2\u6211\u6700\u8fd1\u7684\u61f8\u5d16\u5f8c\u65b9\uff0c\u6709\u4ec0\u9ebc\u6771\u897f\u63da\u8d77\u4e86\u6c99\u5875\u5f80\u6b64\u8655\u9760\u8fd1\uff0c\u611f\u89ba\u5982\u540c\u5728\u5947\u5e7b\u96fb\u5f71\u88e1\u770b\u904e\u7684\u9a0e\u5175\u90e8\u968a\u3002 \n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u4e0d\u7d93\u610f\u5730\u51dd\u8996\u8996\u91ce\u53f3\u4e0b\u65b9\u56db\u500b\u5716\u6a19\uff0c\u5206\u5225\u6709\u4e00\u500b\u300c\u63a2\u67e5\u5168\u90e8\u5730\u5716\u300d\u53ca\u4e09\u500b\u300c\u6d41\u661f\u96e8\u300d\uff0c\u9019\u662f\u5728\u548c\u80a5\u4ed4\u8166\u529b\u6fc0\u76ea\u4e0b\u91cf\u8eab\u6253\u9020\u51fa\u4f86\u7684\u65b0\u624b\u6551\u52a9\u65b9\u6848\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u53d7\u5230\u4e0d\u53ef\u601d\u8b70\u7684\u7126\u8e81\u611f\u9a45\u4f7f\uff0c\u6211\u9078\u64c7\u4e86\u300c\u63a2\u7d22\u5168\u5730\u5716\u300d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u96f7\u9054\u641c\u7d22\u5b8c\u6240\u6709\u6575\u4eba\u5f8c\uff0c\u6b63\u5728\u9760\u8fd1\u7684\u96c6\u5718\u88ab\u7d05\u9ede\u6a19\u8a3b\u6210\u6575\u65b9\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7531\u65bc\u96f7\u9054\u7bc4\u570d\u72f9\u5c0f\uff0c\u6211\u958b\u555f\u5730\u5716\u78ba\u8a8d\u6575\u4eba\u7684\u914d\u7f6e\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u9760\u8fd1\u7684\u96c6\u5718\u4f3c\u4e4e\u662f\u6575\u4eba\u7684\u6975\u5c0f\u90e8\u5206\uff0c\u5730\u5716\u7684\u4e0a\u534a\u90e8\u56e0\u6575\u4eba\u904e\u591a\u800c\u88ab\u67d3\u6210\u4e86\u4e00\u7247\u7d05\u8272\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u2026\u2026\u6575\u4eba\uff0c\u4e0d\u6703\u592a\u591a\u4e86\u55ce\uff1f\n\r\n\u00a0\u00a0\u00a0\u00a0\u903c\u8fd1\u800c\u4f86\u7684\u6575\u65b9\u96c6\u5718\u88ab\u6a19\u793a\u70ba\u300c\u8725\u8734\u4eba\u65cf\u7684\u7cbe\u82f1\u300d\uff0c\u7b49\u7d1a\u7d04\u5728\u4e94\u5341\u5de6\u53f3\uff0c\u6578\u91cf\u591a\u9054\u4e09\u767e\u540d\uff0c\u770b\u4f86\u4e0d\u662f\u7b49\u7d1a\u4e00\u7684\u73a9\u5bb6\u80fd\u5f92\u624b\u6253\u8d0f\u7684\u5c0d\u8c61\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u4ed6\u5011\u5728\u96e2\u61f8\u5d16\u908a\u969b\u4e94\u767e\u516c\u5c3a\u9060\u7684\u5730\u65b9\u505c\u6b62\u884c\u9032\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u70ba\u907f\u514d\u88ab\u4eba\u767c\u73fe\uff0c\u66ab\u4e14\u5148\u85cf\u8eab\u65bc\u5ca9\u77f3\u5f8c\u65b9\u89c0\u5bdf\u4ed6\u5011\u7684\u52d5\u4f5c\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u96d6\u7136\u77e5\u9053\u4ed6\u5011\u662f\u9a0e\u5175\u90e8\u968a\uff0c\u4f46\u7528\u8089\u773c\u7121\u6cd5\u77a7\u5f97\u6e05\u695a\u3002\u5f9e\u8f2a\u5ed3\u4e5f\u80fd\u770b\u51fa\u5750\u9a0e\u4e0d\u662f\u99ac\uff0c\u4f46\u96e3\u4ee5\u518d\u505a\u66f4\u9032\u4e00\u6b65\u7684\u5224\u65b7\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5176\u4e2d\u4e00\u500b\u9a0e\u5175\u99d5\u8457\u5750\u9a0e\u671d\u5411\u9019\u88e1\u904e\u4f86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6b78\u529f\u65bc\u4ed6\u5f80\u9019\u88e1\u9760\u8fd1\uff0c\u7e3d\u7b97\u80fd\u660e\u78ba\u77e5\u66c9\u4ed6\u7684\u6a23\u8c8c\u3002\u4ed6\u5011\u6240\u4e58\u5750\u7684\u751f\u7269\u4e26\u4e0d\u662f\u99ac\uff0c\u800c\u662f\u5982\u8fc5\u731b\u9f8d\u4e00\u822c\u7684\u6050\u9f8d\uff1b\u9a0e\u4e58\u65bc\u4e0a\u7684\u93a7\u7532\u6230\u58eb\u4e5f\u4e0d\u662f\u4eba\uff0c\u800c\u662f\u8725\u8734\u4eba\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\uff01\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\uff01 \u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\uff01\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u8725\u8734\u4eba\u6b63\u4ee5\u4e0d\u77e5\u540d\u7684\u8a9e\u8a00\u5436\u558a\uff0c\u5f88\u660e\u986f\u5730\uff0c\u9019\u662f\u5b9b\u5982\u78ba\u4fe1\u6211\u4eba\u8eb2\u5728\u9019\u88e1\u624d\u6703\u6709\u7684\u8209\u52d5\u3002\u9019\u7a31\u5f97\u4e0a\u662f\u5922\u5883\u624d\u6703\u6709\u7684\u8352\u8b2c\u60c5\u7bc0\u5427\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u90a3\u50a2\u4f19\u7b49\u5f85\u6211\u7684\u8ff4\u61c9\u597d\u4e00\u6703\u5152\uff0c\u6216\u8a31\u662f\u5c0d\u65bc\u6beb\u7121\u7b54\u8986\u611f\u5230\u4e0d\u8010\uff0c\u96a8\u5373\u5c55\u958b\u4e86\u884c\u52d5\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u4ed6\u5c07\u624b\u4e2d\u5927\u5f13\u671d\u5411\u9019\u88e1\u5099\u6230\uff0c\u4e26\u4f7f\u52c1\u5730\u62c9\u7dca\u5f13\u5f26\uff0c\u7e3d\u89ba\u5f97\u90a3\u50a2\u4f19\u7684\u8eab\u9ad4\u5468\u906d\u6563\u767c\u51fa\u4e86\u7d05\u5149\uff0c\u53ef\u662f\u4e0d\u4e45\uff0c\u6211\u4fbf\u7d72\u6beb\u6c92\u6709\u5728\u4e4e\u90a3\u7a2e\u4e8b\u7684\u9918\u88d5\u4e86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u90a3\u50a2\u4f19\u5c04\u51fa\u7684\u7bad\u77e2\uff0c\u767c\u51fa\u4e86\u9cf4\u93d1\u822c\u7684\u547c\u562f\u97ff\u8072\uff0c\u7b46\u76f4\u5730\u98db\u4e86\u904e\u4f86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5c0d\uff0c\u662f\u7b46\u76f4\u5730\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u800c\u4e14\u4e0d\u56e0\u91cd\u529b\u5f71\u97ff\u800c\u504f\u96e2\u8ecc\u9053\uff0c\u4e00\u5f91\u7b46\u76f4\u5730\u5411\u6211\u98db\u4f86\u3002\u524e\u90a3\u4e4b\u9593\uff0c\u6211\u5df2\u7d93\u5728\u5922\u88e1\u505a\u597d\u4e86\u6b7b\u4ea1\u7684\u89ba\u609f\uff0c\u7bad\u77e2\u537b\u64e6\u904e\u81c9\u9830\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u81c9\u9830\u50cf\u71c3\u71d2\u822c\u767c\u71d9\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u4e0b\u610f\u8b58\u89f8\u78b0\u81c9\u9830\uff0c\u6ed1\u6e9c\u6e9c\u7684\u89f8\u611f\u50b3\u5230\u4e86\u624b\u4e0a\u3002\u5f80\u638c\u5fc3\u4e00\u77a7\uff0c\u5982\u6211\u6240\u6599\uff0c\u67d3\u4e0a\u4e86\u9bae\u7d05\u8272\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u8214\u4e86\u8214\u624b\u6240\u6cbe\u5230\u7684\u8840\u8de1\uff0c\u6709\u4e00\u80a1\u9435\u93fd\u5473\u2014\u2014\u9019\u771f\u7684\u662f\u5728\u5922\u5883\u88e1\u55ce\u2014\u2014\u9019\u6a23\u7684\u7591\u554f\u5728\u8166\u6d77\u88e1\u6d6e\u73fe\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5530\u2014\u2014\u5b9b\u82e5\u50be\u76c6\u5927\u96e8\u7684\u8072\u97ff\u50b3\u5165\u8033\u4e2d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u8ecd\u968a\u58eb\u5175\u5011\u6240\u5c04\u51fa\u7684\u5f13\u7bad\uff0c\u63cf\u756b\u51fa\u5f27\u5f62\u98db\u99b3\u800c\u4f86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u8fc5\u901f\u6ed1\u9032\u5ca9\u77f3\u5f8c\u65b9\u7684\u5751\u6d1e\u88e1\uff0c\u5be6\u969b\u4e0a\uff0c\u8aaa\u662f\u72fc\u72fd\u5730\u8dcc\u843d\u9032\u53bb\u66f4\u70ba\u6b63\u78ba\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u9023\u5598\u606f\u7684\u7a7a\u9593\u90fd\u6c92\u6709\uff0c\u7121\u6578\u7bad\u77e2\u63d2\u5165\u65b9\u624d\u6211\u4eba\u9084\u5728\u7684\u5730\u65b9\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5148\u5c04\u5230\u5730\u4e0a\u7684\u7bad\u88ab\u4f86\u5c45\u4e0a\u7684\u7bad\u7d66\u5f48\u958b\u800c\u5012\u584c\uff0c\u6211\u77a7\u898b\u90a3\u5c16\u92b3\u7121\u6bd4\u7684\u7bad\u982d\uff0c\u5f77\u4f5b\u80cc\u4e0a\u88ab\u6f86\u4e86\u51b7\u6c34\uff0c\u6e3e\u8eab\u767c\u986b\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7bad\u77e2\u4ee5\u6211\u6240\u5728\u7684\u5ca9\u77f3\u70ba\u4e2d\u5fc3\uff0c\u96c6\u4e2d\u653b\u64ca\u534a\u5f91\u5341\u516c\u5c3a\u4ee5\u5167\u3002\u8aaa\u662f\u9ad8\u624b\u96f2\u96c6\u4e5f\u4e0d\u70ba\u904e\uff0c\u4f46\u6b64\u6642\u7684\u6211\uff0c\u6c92\u6709\u7a7a\u6a94\u53bb\u8b9a\u6b4e\u90a3\u7a2e\u4e8b\u60c5\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5728\u6211\u8166\u6d77\u88e1\u51fa\u73fe\u7684\uff0c\u662f\u6050\u61fc\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5982\u679c\u6709\u5728\u5922\u4e2d\u88ab\u602a\u7269\u8ffd\u6bba\u904e\u7684\u4eba\uff0c\u61c9\u8a72\u80fd\u7406\u89e3\u9019\u4efd\u6050\u61fc\u611f\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u6240\u64c1\u6709\u7684\u9078\u64c7\u9805\u76ee\u4e0d\u591a\uff0c\u8981\u4e0d\u5c31\u9019\u6a23\u5750\u8457\u7b49\u6b7b\u3001\u8981\u4e0d\u7e8c\u5165\u7bad\u96e8\u7684\u7a7a\u9699\u9593\u9003\u8dd1\u2014\u2014\u8981\u4e0d\u5c31\u300c\u53cd\u64ca\u300d\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u9078\u64c7\u4e86\u81ea\u59cb\u81f3\u7d42\u90fd\u986f\u793a\u5728\u8996\u91ce\u4e00\u9685\u7684\u4e09\u500b\u6d41\u661f\u96e8\u5716\u6a19\u7684\u5176\u4e2d\u4e00\u500b\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u5f92\u7559\u4e0b\u5df2\u4f7f\u7528\u7684\u6a21\u5f0f\u5f8c\uff0c\u5716\u6a19\u6d88\u5931\u4e86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7136\u800c\uff0c\u53ea\u662f\u90a3\u6a23\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u5582\u5582\uff0c\u5230\u982d\u4f86\u662f\u9084\u6c92\u6709\u5b89\u88dd\u5594\u2026\u2026\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u5c31\u50cf\u662f\u8981\u523a\u6fc0\u7126\u6025\u7684\u6211\uff0c\u7bad\u96e8\u50be\u76c6\u964d\u4e0b\u3002\u5118\u7ba1\u7de9\u6162\uff0c\u6211\u85cf\u533f\u7684\u5ca9\u77f3\u6b63\u9010\u6f38\u88ab\u78e8\u524a\u6389\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u9019\u5f13\u5230\u5e95\u662f\u6709\u591a\u5927\u7684\u5a01\u529b\u554a\uff01\u90a3\u7fa4\u50a2\u4f19\u662f\u8207\u4e00(\u6ce8\uff1a\u8207\u4e00\uff0c\u65e5\u672c\u5e73\u5b89\u6642\u4ee3\u6642\u6e90\u6c0f\u7684\u6b66\u5c07\uff0c\u56e0\u4e00\u4e00\u516b\u56db\u5e74\u6e90\u5e73\u5408\u6230\u4e2d\uff0c\u65bc\u5c4b\u5cf6\u4e4b\u6230\u6642\u7684\u9ad8\u8d85\u5f13\u8853\u800c\u540d\u7559\u5f8c\u4e16)\u8ecd\u5718\u55ce\uff1f\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u4e00\u908a\u7f75\uff0c\u4e00\u908a\u7e7c\u7e8c\u9078\u64c7\u5269\u9918\u7684\u5169\u500b\u6d41\u661f\u96e8\u5716\u6a19\uff0c\u53ef\u662f\uff0c\u5716\u6a19\u6de8\u662f\u6d88\u5931\uff0c\u4ec0\u9ebc\u4e5f\u6c92\u6709\u751f\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7d42\u65bc\u6709\u4e00\u652f\u7bad\uff0c\u524a\u5e73\u5ca9\u77f3\u63a0\u904e\u6211\u7684\u80a9\u8180\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u300c\u53ef\u60e1\uff01\u56e0\u70baBug\u6557\u5317\u4ec0\u9ebc\u7684\uff0c\u58de\u7d50\u5c40\u4e5f\u8a72\u6709\u9650\u5ea6\u2014\u2014\u300d\n\r\n\u00a0\u00a0\u00a0\u00a0\u6417\u4e82\u4e0d\u5b89\u611f\u7684\u5492\u7f75\u8072\u9010\u6f38\u6d88\u5931\uff0c\u82e5\u8aaa\u70ba\u4ec0\u9ebc\uff0c\u662f\u56e0\u70ba\u7a7f\u7834\u96f2\u5c64\u98db\u8d8a\u800c\u4f86\u7684\u7121\u6578\u6d41\u661f\u51fa\u73fe\u4e86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u6211\u76ee\u77aa\u53e3\u5446\uff0c\u88ab\u90a3\u756a\u5149\u666f\u7d66\u6df1\u6df1\u5438\u5f15\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u4e45\u7b49\u4e86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u7e3d\u7b97\u56de\u5230\u958b\u982d\u7684\u5834\u666f\u4e86\u3002\n\r\n\u00a0\u00a0\u00a0\u00a0\u672c\u540d\uff1a\u9234\u6728\u4e00\u90ce\u3002\u89d2\u8272\u540d\uff1a\u4f50\u85e4\u3002\u6211\u7684\u7570\u4e16\u754c\u751f\u6d3b\u5c31\u9019\u6a23\u5c55\u958b\u3002\r\n\n", 
    "chapter_name": "\u5e8f\u7ae0 \u3010\u5f9e\u52a0\u73ed\u4fee\u7f85\u5834\u958b\u59cb\u7684\u5929\u5730\u7570\u8b8a\u3011", 
    "id": 99084
  }
}
