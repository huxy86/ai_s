// ==UserScript==
// @name         AI_s
// @namespace    可乐
// @version      1.8
// @description  可乐
// @author       可乐
// @match        *://manager.bilibili.co*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// ==/UserScript==
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf30df=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x61\x70\x70\x6C\x79","\x61\x72\x67\x75\x6D\x65\x6E\x74\x73","\x64\x69\x73\x70\x61\x74\x63\x68\x45\x76\x65\x6E\x74","\x70\x75\x73\x68\x53\x74\x61\x74\x65","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x67\x65\x74\x4D\x6F\x6E\x74\x68","\x77\x6F\x72\x6B\x62\x65\x6E\x63\x68\x2F\x74\x6F\x64\x6F\x2F\x76\x69\x64\x65\x6F\x2F\x64\x65\x74\x61\x69\x6C","\x69\x6E\x64\x65\x78\x4F\x66","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x67\x65\x74\x44\x61\x74\x65","\x74\x69\x6D\x65","\x2E\x6D\x6C\x2D\x38","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C","\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2E\x6D\x6C\x2D\x31\x36\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x70\x72\x69\x6D\x61\x72\x79\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x73\x6D\x61\x6C\x6C","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x64\x65\x66\x61\x75\x6C\x74\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x73\x6D\x61\x6C\x6C","\u662F\u5426\u9700\u8981\u91CD\u7F6E\u6570\u636E\u91CF\uFF0C\u5F53\u524D\u6570\u636E\u4E3A\uFF1A","\u65E5\u6570\u636E","\x6D\x79\x43\x61\x74","\x30","\x63\x69\x64","\x31\x31\x31\x31\x31\x31","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x70\x61\x72\x73\x65","","\x6C\x65\x6E\x67\x74\x68","\x68\x69\x73\x74\x6F\x72\x79","\x64\x61\x74\x61","\x2D\x32","\x2D\x34","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x43\x72\x69\x6D\x73\x6F\x6E\x22\x3E","\x63\x74\x69\x6D\x65","\x20","\x75\x5F\x6E\x61\x6D\x65\x73","\x63\x6F\x6E\x74\x65\x6E\x74","\x28\u5907\u6CE8\uFF1A","\x72\x65\x6D\x61\x72\x6B","\uFF09\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x76\x61\x72\x28\x2D\x2D\x73\x75\x63\x63\x65\x73\x73\x2D\x63\x6F\x6C\x6F\x72\x29\x22\x3E","\uFF09\x3C\x62\x72\x2F\x3E","\x66\x75\x6C\x6C\x5F\x63\x6F\x76\x65\x72","\x61\x72\x63\x68\x69\x76\x65","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x76\x61\x72\x28\x2D\x2D\x73\x75\x63\x63\x65\x73\x73\x2D\x63\x6F\x6C\x6F\x72\x29\x22\x3E\u5C01\u9762\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x43\x72\x69\x6D\x73\x6F\x6E\x22\x3E\u5C01\u9762\u4E0D\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x74\x69\x74\x6C\x65","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x76\x61\x72\x28\x2D\x2D\x73\x75\x63\x63\x65\x73\x73\x2D\x63\x6F\x6C\x6F\x72\x29\x22\x3E\u6807\u9898\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x43\x72\x69\x6D\x73\x6F\x6E\x22\x3E\u6807\u9898\u4E0D\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x76\x69\x64\x65\x6F","\x70\x5F\x74\x69\x74\x6C\x65","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x76\x61\x72\x28\x2D\x2D\x73\x75\x63\x63\x65\x73\x73\x2D\x63\x6F\x6C\x6F\x72\x29\x22\x3E\u5206\x50\u6807\u9898\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x43\x72\x69\x6D\x73\x6F\x6E\x22\x3E\u5206\x50\u6807\u9898\u4E0D\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x74\x61\x67","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x76\x61\x72\x28\x2D\x2D\x73\x75\x63\x63\x65\x73\x73\x2D\x63\x6F\x6C\x6F\x72\x29\x22\x3E\x74\x61\x67\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x43\x72\x69\x6D\x73\x6F\x6E\x22\x3E\x74\x61\x67\u4E0D\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x76\x61\x72\x28\x2D\x2D\x73\x75\x63\x63\x65\x73\x73\x2D\x63\x6F\x6C\x6F\x72\x29\x22\x3E\u7B80\u4ECB\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x43\x72\x69\x6D\x73\x6F\x6E\x22\x3E\u7B80\u4ECB\u4E0D\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x64\x79\x6E\x61\x6D\x69\x63","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x76\x61\x72\x28\x2D\x2D\x73\x75\x63\x63\x65\x73\x73\x2D\x63\x6F\x6C\x6F\x72\x29\x22\x3E\u7A3F\u4EF6\u52A8\u6001\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x3C\x65\x6D\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x43\x72\x69\x6D\x73\x6F\x6E\x22\x3E\u7A3F\u4EF6\u52A8\u6001\u4E0D\u4E00\u81F4\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\u4E8C\u5BA1\u64CD\u4F5C\u8BB0\u5F55\uFF1A\x3C\x2F\x65\x6D\x3E\x3C\x62\x72\x2F\x3E","\x6E\x6F\x74\x65","\x68\x65\x69\x73\x5F\x61\x61","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x2E\x63\x6F\x76\x65\x72","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x68\x65\x69\x73\x5F\x73\x73","\x2E\x62\x6F\x78\x2E\x72\x65\x6C\x61\x74\x65\x64\x2D\x73\x74\x61\x74\x65","\x6C\x6F\x67","\x72\x65\x73\x6F\x75\x72\x63\x65","\x73\x69\x6E\x67\x6C\x65\x5F\x64\x69\x73\x70\x61\x74\x63\x68","\x74\x61\x67\x73","\x6F\x6E\x6B\x65\x79\x64\x6F\x77\x6E","\x65\x76\x65\x6E\x74","\x63\x61\x6C\x6C\x65\x72","\x63\x61\x6C\x6C\x65\x65","\x6B\x65\x79\x43\x6F\x64\x65","\x73\x75\x62\x73\x74\x72","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x41\x49\x20\u6298\u7B97\u91CF\uFF1A\x20","\x47\x45\x54","\x68\x74\x74\x70\x3A\x2F\x2F\x6D\x61\x6E\x61\x67\x65\x72\x2E\x62\x69\x6C\x69\x62\x69\x6C\x69\x2E\x63\x6F\x2F\x78\x2F\x61\x64\x6D\x69\x6E\x2F\x61\x65\x67\x69\x73\x2D\x67\x61\x74\x65\x77\x61\x79\x2F\x74\x61\x73\x6B\x2F\x6E\x65\x78\x74\x3F\x62\x75\x73\x69\x6E\x65\x73\x73\x5F\x69\x64\x3D\x32\x39\x26\x74\x6F\x64\x6F\x5F\x69\x64\x3D\x32\x26\x69\x73\x5F\x70\x75\x73\x68\x3D\x31\x26\x74\x6F\x64\x6F\x5F\x69\x64\x73\x3D\x32","\x6F\x70\x65\x6E","\x73\x65\x6E\x64","\x68\x74\x74\x70\x3A\x2F\x2F\x6D\x61\x6E\x61\x67\x65\x72\x2E\x62\x69\x6C\x69\x62\x69\x6C\x69\x2E\x63\x6F\x2F\x78\x2F\x61\x64\x6D\x69\x6E\x2F\x61\x65\x67\x69\x73\x2D\x67\x61\x74\x65\x77\x61\x79\x2F\x61\x72\x63\x68\x69\x76\x65\x2F\x76\x69\x64\x65\x6F\x2F\x69\x6E\x66\x6F\x3F\x63\x69\x64\x3D","\x2E\x65\x6C\x2D\x73\x63\x72\x6F\x6C\x6C\x62\x61\x72\x5F\x5F\x76\x69\x65\x77\x2E\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x6C\x69\x73\x74","\x3C\x75\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x73\x63\x72\x6F\x6C\x6C\x62\x61\x72\x5F\x5F\x76\x69\x65\x77\x20\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x6C\x69\x73\x74\x22\x3E\x3C\x21\x2D\x2D\x2D\x2D\x3E\x3C\x6C\x69\x20\x64\x61\x74\x61\x2D\x76\x2D\x66\x62\x35\x39\x37\x66\x31\x32\x3D\x22\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x69\x74\x65\x6D\x22\x3E\x3C\x73\x70\x61\x6E\x3E\u53CC\u5411\u5C3A\u5EA6\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6C\x69\x3E\x3C\x6C\x69\x20\x64\x61\x74\x61\x2D\x76\x2D\x66\x62\x35\x39\x37\x66\x31\x32\x3D\x22\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x69\x74\x65\x6D\x22\x3E\x3C\x73\x70\x61\x6E\x3E\u89C4\u5219\u4E0D\u4E00\u81F4\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6C\x69\x3E\x3C\x6C\x69\x20\x64\x61\x74\x61\x2D\x76\x2D\x66\x62\x35\x39\x37\x66\x31\x32\x3D\x22\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x69\x74\x65\x6D\x22\x3E\x3C\x73\x70\x61\x6E\x3E\u7A3F\u4EF6\u4E0D\u4E00\u81F4\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6C\x69\x3E\x3C\x6C\x69\x20\x64\x61\x74\x61\x2D\x76\x2D\x66\x62\x35\x39\x37\x66\x31\x32\x3D\x22\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x69\x74\x65\x6D\x22\x3E\x3C\x73\x70\x61\x6E\x3E\x6B\x31\x32\u65E0\u8054\u7CFB\u65B9\u5F0F\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6C\x69\x3E\x3C\x6C\x69\x20\x64\x61\x74\x61\x2D\x76\x2D\x66\x62\x35\x39\x37\x66\x31\x32\x3D\x22\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x69\x74\x65\x6D\x22\x3E\x3C\x73\x70\x61\x6E\x3E\x6B\x31\x32\u9AD8\u4E2D\u8BFE\u7A0B\uFF0C\u65E0\u9700\u89C4\u907F\u81EA\u5E26\u6C34\u5370\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6C\x69\x3E\x3C\x6C\x69\x20\x64\x61\x74\x61\x2D\x76\x2D\x66\x62\x35\x39\x37\x66\x31\x32\x3D\x22\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x69\x74\x65\x6D\x22\x3E\x3C\x73\x70\x61\x6E\x3E\x20\u6B64\u7C7B\u5E7F\u544A\u4E0D\u89C4\u907F\uFF0C\u52FE\u9009\x20\u7EAF\u5E7F\u544A\x74\x61\x67\x20\u5373\u53EF\uFF0C\u8BE6\u89C1\u5E7F\u544A\u89C4\u5219\u8868\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6C\x69\x3E\x3C\x6C\x69\x20\x64\x61\x74\x61\x2D\x76\x2D\x66\x62\x35\x39\x37\x66\x31\x32\x3D\x22\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x69\x74\x65\x6D\x22\x3E\x3C\x73\x70\x61\x6E\x3E\u5DF2\u5F00\u653E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x6C\x69\x3E\x3C\x2F\x75\x6C\x20\x3E","\x2E\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x5F\x5F\x69\x74\x65\x6D","\x2E\x63\x61\x70\x74\x75\x72\x65\x2D\x67\x61\x6C\x6C\x65\x72\x79\x5F\x5F\x68\x65\x61\x64","\x3C\x62\x75\x74\x74\x6F\x6E\x20\x64\x61\x74\x61\x2D\x76\x2D\x36\x39\x62\x36\x31\x35\x33\x38\x3D\x22\x22\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x20\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x64\x65\x66\x61\x75\x6C\x74\x20\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x73\x6D\x61\x6C\x6C\x20\x69\x73\x2D\x74\x69\x6D\x65\x22\x3E\x3C\x21\x2D\x2D\x2D\x2D\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x65\x6C\x2D\x69\x63\x6F\x6E\x2D\x65\x64\x69\x73\x22\x3E\x3C\x2F\x69\x3E\x3C\x73\x70\x61\x6E\x3E\u8DF3\u8F6C\u8FDD\u89C4\u65F6\u95F4\u70B9\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E","\x63\x6C\x69\x63\x6B","\x62\x75\x74\x74\x6F\x6E\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x64\x65\x66\x61\x75\x6C\x74\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x73\x6D\x61\x6C\x6C\x2E\x69\x73\x2D\x70\x6C\x61\x69\x6E","\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x64\x65\x66\x61\x75\x6C\x74\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x73\x6D\x61\x6C\x6C\x2E\x69\x73\x2D\x74\x69\x6D\x65","\x2E\x72\x61\x64\x69\x6F\x2D\x74\x61\x67","\x6F\x6E\x63\x6C\x69\x63\x6B","\x2E\x65\x6C\x2D\x74\x65\x78\x74\x61\x72\x65\x61\x5F\x5F\x69\x6E\x6E\x65\x72","\x76\x61\x6C\x75\x65","\x69\x6E\x70\x75\x74","\x2E\x65\x6C\x2D\x73\x65\x6C\x65\x63\x74\x5F\x5F\x63\x61\x72\x65\x74\x2E\x65\x6C\x2D\x69\x6E\x70\x75\x74\x5F\x5F\x69\x63\x6F\x6E\x2E\x65\x6C\x2D\x69\x63\x6F\x6E\x2D\x61\x72\x72\x6F\x77\x2D\x75\x70\x2E\x69\x73\x2D\x72\x65\x76\x65\x72\x73\x65","\x5B\x63\x6C\x61\x73\x73\x3D\x72\x61\x64\x69\x6F\x2D\x74\x61\x67\x5D","\u3010","\x73\x6C\x69\x63\x65","\x70\x6C\x61\x79\x65\x72","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x64\x75\x72\x61\x74\x69\x6F\x6E","\x63\x75\x72\x72\x65\x6E\x74\x54\x69\x6D\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x61\x6E\x61\x67\x65\x72\x2E\x62\x69\x6C\x69\x62\x69\x6C\x69\x2E\x63\x6F\x2F\x61\x65\x67\x69\x73\x2F\x23\x2F\x61\x72\x63\x68\x69\x76\x65\x2F\x61\x72\x63\x68\x69\x76\x65\x2D\x76\x69\x64\x65\x6F\x2D\x74\x61\x73\x6B\x2F\x72\x65\x73\x6F\x75\x72\x63\x65\x2F\x64\x65\x74\x61\x69\x6C\x3F\x63\x69\x64\x3D","\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75","\x2E\x61\x72\x63\x68\x69\x76\x65\x2D\x69\x6E\x66\x6F","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x61\x6E\x61\x67\x65\x72\x2E\x62\x69\x6C\x69\x62\x69\x6C\x69\x2E\x63\x6F\x2F\x64\x6F\x63\x73\x2F\x70\x6C\x61\x79\x65\x72\x2F\x69\x6E\x6E\x65\x72\x70\x6C\x61\x79\x65\x72\x2E\x68\x74\x6D\x6C\x3F\x63\x69\x64\x3D","\x26\x61\x69\x64\x3D","\x26\x61\x73\x5F\x77\x69\x64\x65\x3D\x31\x26\x69\x6E\x6E\x65\x72\x3D\x31\x26\x64\x61\x6E\x6D\x61\x6B\x75\x3D\x30\x26\x73\x74\x61\x62\x6C\x65\x43\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72\x3D\x31\x26\x68\x69\x64\x65\x49\x6E\x74\x65\x72\x61\x63\x74\x69\x76\x65\x48\x69\x73\x74\x6F\x72\x79\x3D\x31\x26\x63\x72\x6F\x73\x73\x44\x6F\x6D\x61\x69\x6E\x3D\x31","\x2E\x65\x6C\x2D\x69\x6E\x70\x75\x74\x2E\x65\x6C\x2D\x69\x6E\x70\x75\x74\x2D\x2D\x73\x6D\x61\x6C\x6C\x20\x2E\x65\x6C\x2D\x69\x6E\x70\x75\x74\x5F\x5F\x69\x6E\x6E\x65\x72","\x31","\x2E\x64\x69\x61\x6C\x6F\x67\x2D\x66\x6F\x6F\x74\x65\x72\x20\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x70\x72\x69\x6D\x61\x72\x79","\x2E\x72\x61\x64\x69\x6F\x2D\x74\x61\x67\x2E\x72\x61\x64\x69\x6F\x2D\x74\x61\x67\x5F\x5F\x61\x63\x74\x69\x76\x65","\u5907\u6CE8\u4FE1\u606F\u6709\u8BEF\u6216\u672A\u586B\u5199\u5907\u6CE8\uFF0C\u70B9\u51FB\u53D6\u6D88\u53EF\u5FFD\u7565\u6821\u9A8C\u5907\u6CE8","\x61\x72\x63\x68\x69\x76\x65\x2D\x76\x69\x64\x65\x6F\x2D\x74\x61\x73\x6B\x2F\x72\x65\x73\x6F\x75\x72\x63\x65\x2F\x64\x65\x74\x61\x69\x6C\x3F\x63\x69\x64\x3D","\x2E\x69\x6E\x66\x6F\x2D\x72\x6F\x77\x2D\x74\x65\x78\x74","\x61\x76","\x61\x2E\x76","\x72\x65\x70\x6C\x61\x63\x65","\x62\x75\x74\x74\x6F\x6E","\x74\x79\x70\x65","\x70\x61\x72\x61\x5F\x61\x61","\u8BBE\u7F6E\x41\x49\u63D0\u793A","\x2E\x65\x6C\x2D\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73\x5F\x5F\x74\x61\x62\x6C\x65\x2E\x69\x73\x2D\x62\x6F\x72\x64\x65\x72\x65\x64","\x5B\x74\x79\x70\x65\x3D\x70\x61\x72\x61\x5F\x61\x61\x5D","\x72\x65\x61\x64\x54\x65\x78\x74","\x63\x6C\x69\x70\x62\x6F\x61\x72\x64","\x50\x61\x73\x74\x65\x64\x20\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x20","\x3C\x64\x69\x76\x20\x64\x61\x74\x61\x2D\x76\x2D\x33\x61\x31\x62\x38\x33\x30\x38\x3D\x22\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3E\x3C\x64\x69\x76\x20\x64\x61\x74\x61\x2D\x76\x2D\x33\x61\x31\x62\x38\x33\x30\x38\x3D\x22\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x41\x69\x54\x61\x67\x5F\x61\x69\x54\x61\x67\x5F\x33\x63\x61\x51\x41\x22\x20\x64\x61\x74\x61\x2D\x62\x65\x68\x61\x76\x69\x6F\x72\x2D\x74\x72\x61\x63\x6B\x2D\x69\x64\x3D\x22\x61\x69\x2D\x72\x69\x73\x6B\x2D\x74\x61\x67\x22\x3E\x3C\x70\x3E\x3C\x21\x2D\x2D\x2D\x2D\x3E\x3C\x21\x2D\x2D\x2D\x2D\x3E","\x69\x6E\x64\x65\x78","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78","\x22","\x72\x65\x70\x6C\x61\x63\x65\x41\x6C\x6C","\x3A","\x3C\x73\x70\x61\x6E\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x41\x69\x54\x61\x67\x5F\x68\x69\x74\x5F\x32\x61\x53\x50\x34\x22\x3E","\x0A\x3C\x2F\x73\x70\x61\x6E\x3E\x3B\x3C\x2F\x73\x70\x61\x6E\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E\x0A\x5B","\x5D\x0A\x3C\x2F\x73\x70\x61\x6E\x3E","\x66\x6F\x72\x45\x61\x63\x68","\x65\x78\x65\x63","\x3C\x2F\x70\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x2E\x65\x6C\x2D\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73\x2D\x69\x74\x65\x6D\x5F\x5F\x63\x65\x6C\x6C\x2E\x65\x6C\x2D\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73\x2D\x69\x74\x65\x6D\x5F\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x2E\x41\x69\x54\x61\x67\x5F\x68\x69\x74\x5F\x32\x61\x53\x50\x34","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x72\x65\x61\x64\x20\x63\x6C\x69\x70\x62\x6F\x61\x72\x64\x20\x63\x6F\x6E\x74\x65\x6E\x74\x73\x3A\x20","\x65\x72\x72\x6F\x72","\x76","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x61\x6E\x61\x67\x65\x72\x2E\x62\x69\x6C\x69\x62\x69\x6C\x69\x2E\x63\x6F\x2F\x61\x65\x67\x69\x73\x2F\x23\x2F\x76\x32\x2F\x61\x72\x63\x68\x69\x76\x65\x2F\x64\x65\x74\x61\x69\x6C\x3F\x62\x75\x73\x69\x6E\x65\x73\x73\x5F\x69\x64\x3D\x31\x31\x26\x6F\x69\x64\x3D","\x26\x6C\x69\x73\x74\x5F\x74\x79\x70\x65\x3D\x30\x30","\x62\x61\x73\x65\x55\x52\x49","\x3D","\x26","\x66\x69\x72\x73\x74\x2D\x61\x75\x64\x69\x74\x3F\x74\x6F\x64\x6F\x5F\x6E\x61\x6D\x65\x3D","\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x70\x72\x69\x6D\x61\x72\x79\x2E\x65\x6C\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x2D\x73\x6D\x61\x6C\x6C","\x74\x69\x6D\x65\x73","\x6D\x79\x43\x61\x74\x73","\x63\x69\x64\x73","\u4E00\u5BA1\u6298\u7B97\u91CF\uFF1A","\x72\x6F\x75\x6E\x64","\x74\x6F\x64\x6F\x5F\x69\x64\x3D\x31\x38\x30\x30\x32\x30","\x74\x6F\x64\x6F\x5F\x69\x64\x3D\x34\x32\x30\x30\x31\x32","\x74\x6F\x64\x6F\x5F\x69\x64\x3D\x34\x35\x30\x30\x30\x39","\x74\x6F\x64\x6F\x5F\x69\x64\x3D\x32\x31\x30\x30\x32\x36","\x74\x6F\x64\x6F\x5F\x69\x64\x3D\x32\x34\x30\x30\x31\x33","\u4E00\u5BA1\u6298\u7B97\u91CF\uFF1A\x20","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];(function(){__Oxf30df[0x0];var _0x8351x1=function(_0x8351x2){var _0x8351x3=history[_0x8351x2];return function(){var _0x8351x4=_0x8351x3[__Oxf30df[0x1]](this,arguments);var _0x8351x5= new Event(_0x8351x2);_0x8351x5[__Oxf30df[0x2]]= arguments;window[__Oxf30df[0x3]](_0x8351x5);return _0x8351x4}};history[__Oxf30df[0x4]]= _0x8351x1(__Oxf30df[0x4]);window[__Oxf30df[0x5]](__Oxf30df[0x4],function(_0x8351x5){_0x8351x6()});_0x8351x6();function _0x8351x6(){setTimeout(function(){var _0x8351x7= new Date()[__Oxf30df[0x6]]();if(_0x8351x7== 0){if(window[__Oxf30df[0xa]][__Oxf30df[0x9]][__Oxf30df[0x8]](__Oxf30df[0x7])>  -1){var _0x8351x8=1;var _0x8351x9;var _0x8351xa= new Date()[__Oxf30df[0xb]]();var _0x8351xb=GM_getValue(__Oxf30df[0xc]);var _0x8351xc=document[__Oxf30df[0xe]](__Oxf30df[0xd]);var _0x8351xd=document[__Oxf30df[0x10]](__Oxf30df[0xf]);var _0x8351xe=document[__Oxf30df[0x10]](__Oxf30df[0x11]);if(_0x8351xa!= _0x8351xb){if(confirm(__Oxf30df[0x12]+ _0x8351xa+ __Oxf30df[0x13])== true){GM_setValue(__Oxf30df[0x14],__Oxf30df[0x15]);GM_setValue(__Oxf30df[0xc],_0x8351xa);GM_setValue(__Oxf30df[0x16],__Oxf30df[0x17])}};let _0x8351xf= new XMLHttpRequest();let _0x8351x10= new XMLHttpRequest();_0x8351xf[__Oxf30df[0x18]]= function(){if(_0x8351xf[__Oxf30df[0x19]]== 4& _0x8351xf[__Oxf30df[0x1a]]== 200){var _0x8351x11=JSON[__Oxf30df[0x1c]](_0x8351xf[__Oxf30df[0x1b]]);var _0x8351x12=__Oxf30df[0x1d];for(let _0x8351x13=0;_0x8351x13< _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][__Oxf30df[0x1e]];_0x8351x13++){if(_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x1a]]== __Oxf30df[0x21]| _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x1a]]== __Oxf30df[0x22]){_0x8351x12= _0x8351x12+ __Oxf30df[0x23]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x24]]+ __Oxf30df[0x25]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x26]]+ __Oxf30df[0x25]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x27]]+ __Oxf30df[0x28]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x29]]+ __Oxf30df[0x2a];continue};if(_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x1a]]== __Oxf30df[0x15]){_0x8351x12= _0x8351x12+ __Oxf30df[0x2b]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x24]]+ __Oxf30df[0x25]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x26]]+ __Oxf30df[0x25]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x27]]+ __Oxf30df[0x28]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x29]]+ __Oxf30df[0x2a];continue};_0x8351x12= _0x8351x12+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x24]]+ __Oxf30df[0x25]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x26]]+ __Oxf30df[0x25]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x27]]+ __Oxf30df[0x28]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x1f]][_0x8351x13][__Oxf30df[0x29]]+ __Oxf30df[0x2c]};var _0x8351x14=__Oxf30df[0x1d];if(_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x2e]][__Oxf30df[0x2d]]== GM_getValue(__Oxf30df[0x2d])){_0x8351x14= __Oxf30df[0x2f]}else {_0x8351x14= __Oxf30df[0x30]};if(_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x2e]][__Oxf30df[0x31]]== GM_getValue(__Oxf30df[0x31])){_0x8351x14= _0x8351x14+ __Oxf30df[0x32]}else {_0x8351x14= _0x8351x14+ __Oxf30df[0x33]};if(_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x34]][__Oxf30df[0x31]]== GM_getValue(__Oxf30df[0x35])){_0x8351x14= _0x8351x14+ __Oxf30df[0x36]}else {_0x8351x14= _0x8351x14+ __Oxf30df[0x37]};if(_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x2e]][__Oxf30df[0x38]]== GM_getValue(__Oxf30df[0x38])){_0x8351x14= _0x8351x14+ __Oxf30df[0x39]}else {_0x8351x14= _0x8351x14+ __Oxf30df[0x3a]};if(_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x2e]][__Oxf30df[0x27]]== GM_getValue(__Oxf30df[0x27])){_0x8351x14= _0x8351x14+ __Oxf30df[0x3b]}else {_0x8351x14= _0x8351x14+ __Oxf30df[0x3c]};if(_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x2e]][__Oxf30df[0x3d]]== GM_getValue(__Oxf30df[0x3d])){_0x8351x14= _0x8351x14+ __Oxf30df[0x3e]}else {_0x8351x14= _0x8351x14+ __Oxf30df[0x3f]};_0x8351x14= _0x8351x14+ __Oxf30df[0x40]+ _0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x2e]][__Oxf30df[0x41]];var _0x8351x15=document[__Oxf30df[0x10]](__Oxf30df[0x42]);if(_0x8351x15== null){var _0x8351x16=document[__Oxf30df[0x43]](__Oxf30df[0x42]);var _0x8351x17=document[__Oxf30df[0x44]](__Oxf30df[0x1d]);_0x8351x16[__Oxf30df[0x45]](_0x8351x17);var _0x8351x18=document[__Oxf30df[0x10]](__Oxf30df[0x46]);_0x8351x18[__Oxf30df[0x45]](_0x8351x16);_0x8351x15= document[__Oxf30df[0x10]](__Oxf30df[0x42]);_0x8351x15[__Oxf30df[0x47]]= _0x8351x14};setTimeout(function(){var _0x8351x19=document[__Oxf30df[0x10]](__Oxf30df[0x48]);if(_0x8351x19== null){var _0x8351x16=document[__Oxf30df[0x43]](__Oxf30df[0x48]);var _0x8351x17=document[__Oxf30df[0x44]](__Oxf30df[0x1d]);_0x8351x16[__Oxf30df[0x45]](_0x8351x17);var _0x8351x18=document[__Oxf30df[0x10]](__Oxf30df[0x49]);_0x8351x18[__Oxf30df[0x45]](_0x8351x16);_0x8351x19= document[__Oxf30df[0x10]](__Oxf30df[0x48]);_0x8351x19[__Oxf30df[0x47]]= _0x8351x12;GM_setValue(__Oxf30df[0x4a],_0x8351x12)}},6000)}};_0x8351x10[__Oxf30df[0x18]]= function(){if(_0x8351x10[__Oxf30df[0x19]]== 4& _0x8351x10[__Oxf30df[0x1a]]== 200){var _0x8351x11=JSON[__Oxf30df[0x1c]](_0x8351x10[__Oxf30df[0x1b]]);GM_setValue(__Oxf30df[0x31],_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x4c]][__Oxf30df[0x4b]][__Oxf30df[0x31]]);GM_setValue(__Oxf30df[0x35],_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x4c]][__Oxf30df[0x4b]][__Oxf30df[0x35]]);GM_setValue(__Oxf30df[0x38],_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x4c]][__Oxf30df[0x4b]][__Oxf30df[0x4d]][0x0]);GM_setValue(__Oxf30df[0x27],_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x4c]][__Oxf30df[0x4b]][__Oxf30df[0x27]]);GM_setValue(__Oxf30df[0x2d],_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x4c]][__Oxf30df[0x4b]][__Oxf30df[0x2d]]);GM_setValue(__Oxf30df[0x3d],_0x8351x11[__Oxf30df[0x20]][__Oxf30df[0x4c]][__Oxf30df[0x4b]][__Oxf30df[0x3d]])}};document[__Oxf30df[0x4e]]= function(_0x8351x1a){var _0x8351x5=_0x8351x1a|| window[__Oxf30df[0x4f]]|| arguments[__Oxf30df[0x51]][__Oxf30df[0x50]][__Oxf30df[0x2]][0x0];if(_0x8351x5&& _0x8351x5[__Oxf30df[0x52]]== 13){var _0x8351x1b=GM_getValue(__Oxf30df[0x16]);var _0x8351x1c=_0x8351xc[0x1][__Oxf30df[0x54]][__Oxf30df[0x53]](5);if(_0x8351x1c!= _0x8351x1b){var _0x8351x9=GM_getValue(__Oxf30df[0x14]);_0x8351x9= 1.5+  +_0x8351x9;GM_setValue(__Oxf30df[0x14],_0x8351x9);GM_setValue(__Oxf30df[0x16],_0x8351x1c);_0x8351xc[0x2][__Oxf30df[0x54]]= __Oxf30df[0x55]+ _0x8351x9;setTimeout(function(){_0x8351x1d()},1000)}}};_0x8351x1d();function _0x8351x1d(){_0x8351x10[__Oxf30df[0x58]](__Oxf30df[0x56],__Oxf30df[0x57]);_0x8351x10[__Oxf30df[0x59]]();_0x8351xf[__Oxf30df[0x58]](__Oxf30df[0x56],__Oxf30df[0x5a]+ _0x8351xc[0x1][__Oxf30df[0x54]][__Oxf30df[0x53]](5));_0x8351xf[__Oxf30df[0x59]]();var _0x8351x1e=document[__Oxf30df[0x10]](__Oxf30df[0x5b]);_0x8351x1e[__Oxf30df[0x47]]= __Oxf30df[0x5c];var _0x8351x1f=document[__Oxf30df[0xe]](__Oxf30df[0x5d]);var _0x8351x20=document[__Oxf30df[0x10]](__Oxf30df[0x5e]);_0x8351x20[__Oxf30df[0x47]]= __Oxf30df[0x5f];document[__Oxf30df[0xe]](__Oxf30df[0x61])[0x1][__Oxf30df[0x5]](__Oxf30df[0x60],_0x8351x29);document[__Oxf30df[0x10]](__Oxf30df[0x62])[__Oxf30df[0x5]](__Oxf30df[0x60],_0x8351x23);document[__Oxf30df[0x10]](__Oxf30df[0x63])[__Oxf30df[0x5]](__Oxf30df[0x60],_0x8351x2d);for(let _0x8351x13=0;_0x8351x13< _0x8351x1f[__Oxf30df[0x1e]];_0x8351x13++){_0x8351x1f[_0x8351x13][__Oxf30df[0x64]]= function(){var _0x8351x21=document[__Oxf30df[0x10]](__Oxf30df[0x65]);_0x8351x21[__Oxf30df[0x66]]= _0x8351x1f[_0x8351x13][__Oxf30df[0x54]];var _0x8351x22= new Event(__Oxf30df[0x67]);_0x8351x21[__Oxf30df[0x3]](_0x8351x22);document[__Oxf30df[0x10]](__Oxf30df[0x68])[__Oxf30df[0x60]]();document[__Oxf30df[0x10]](__Oxf30df[0x69])[__Oxf30df[0x60]]()}}}_0x8351xc[0x2][__Oxf30df[0x54]]= __Oxf30df[0x55]+ GM_getValue(__Oxf30df[0x14]);function _0x8351x23(){var _0x8351x24=GM_getValue(__Oxf30df[0x4a]);var _0x8351x25=_0x8351x24[__Oxf30df[0x8]](__Oxf30df[0x6a]);var _0x8351x24=_0x8351x24[__Oxf30df[0x6b]](_0x8351x25+ 1,_0x8351x25+ 9);var _0x8351x26=Number(_0x8351x24[__Oxf30df[0x6b]](0,2)* 3600)+ Number(_0x8351x24[__Oxf30df[0x6b]](3,5)* 60)+ Number(_0x8351x24[__Oxf30df[0x6b]](6,8));var _0x8351x27=document[__Oxf30df[0x6d]](__Oxf30df[0x6c]);if(_0x8351x26< _0x8351x27[__Oxf30df[0x6e]]){_0x8351x27[__Oxf30df[0x6f]]= _0x8351x26}}_0x8351xc[0x1][__Oxf30df[0x64]]= function(){window[__Oxf30df[0x58]](__Oxf30df[0x70]+ _0x8351xc[0x1][__Oxf30df[0x54]][__Oxf30df[0x53]](5))};_0x8351xc[0x1][__Oxf30df[0x71]]= function(){var _0x8351x28=document[__Oxf30df[0x10]](__Oxf30df[0x72])[__Oxf30df[0x54]];_0x8351x28= _0x8351x28[__Oxf30df[0x6b]](_0x8351x28[__Oxf30df[0x73]](__Oxf30df[0x25]));window[__Oxf30df[0x58]](__Oxf30df[0x74]+ _0x8351xc[0x1][__Oxf30df[0x54]][__Oxf30df[0x53]](5)+ __Oxf30df[0x75]+ _0x8351x28+ __Oxf30df[0x76])};_0x8351xd[__Oxf30df[0x64]]= function(){var _0x8351x1b=GM_getValue(__Oxf30df[0x16]);var _0x8351x1c=_0x8351xc[0x1][__Oxf30df[0x54]][__Oxf30df[0x53]](5);if(_0x8351x1c!= _0x8351x1b){var _0x8351x9=GM_getValue(__Oxf30df[0x14]);_0x8351x9= 1.5+  +_0x8351x9;GM_setValue(__Oxf30df[0x14],_0x8351x9);GM_setValue(__Oxf30df[0x16],_0x8351x1c);_0x8351xc[0x2][__Oxf30df[0x54]]= __Oxf30df[0x55]+ _0x8351x9;setTimeout(function(){_0x8351x1d()},1000)}};function _0x8351x29(){setTimeout(function(){var _0x8351x2a=setInterval(function(){var _0x8351x2b=document[__Oxf30df[0x10]](__Oxf30df[0x77]);if(_0x8351x2b!= null){_0x8351x2b[__Oxf30df[0x66]]= __Oxf30df[0x78];var _0x8351x22= new Event(__Oxf30df[0x67]);_0x8351x2b[__Oxf30df[0x3]](_0x8351x22);var _0x8351x2c=document[__Oxf30df[0x10]](__Oxf30df[0x79]);_0x8351x2c[__Oxf30df[0x60]]();clearInterval(_0x8351x2a)}},200)},100)}function _0x8351x2d(){if(_0x8351x8== 1){if(document[__Oxf30df[0x10]](__Oxf30df[0x7a])!= null){if(document[__Oxf30df[0x10]](__Oxf30df[0x65])[__Oxf30df[0x66]]== __Oxf30df[0x1d]){if(confirm(__Oxf30df[0x7b])== true){_0x8351x8= 0;document[__Oxf30df[0x10]](__Oxf30df[0x7a])[__Oxf30df[0x60]]();_0x8351x8= 1}else {_0x8351x8= 0}}}}}};if(window[__Oxf30df[0xa]][__Oxf30df[0x9]][__Oxf30df[0x8]](__Oxf30df[0x7c])>  -1){var _0x8351xc=document[__Oxf30df[0x10]](__Oxf30df[0x7d]);var _0x8351x2e=_0x8351xc[__Oxf30df[0x54]][__Oxf30df[0x80]](__Oxf30df[0x7e],__Oxf30df[0x7f]);_0x8351xc[__Oxf30df[0x54]]= _0x8351x2e;var _0x8351x16=document[__Oxf30df[0x43]](__Oxf30df[0x81]);_0x8351x16[__Oxf30df[0x82]]= __Oxf30df[0x83];var _0x8351x17=document[__Oxf30df[0x44]](__Oxf30df[0x84]);_0x8351x16[__Oxf30df[0x45]](_0x8351x17);var _0x8351x18=document[__Oxf30df[0x10]](__Oxf30df[0x85]);_0x8351x18[__Oxf30df[0x45]](_0x8351x16);document[__Oxf30df[0x10]](__Oxf30df[0x86])[__Oxf30df[0x64]]= function(){_0x8351x2f()};async function _0x8351x2f(){try{const _0x8351x30= await navigator[__Oxf30df[0x88]][__Oxf30df[0x87]]();console[__Oxf30df[0x4a]](__Oxf30df[0x89],_0x8351x30);const _0x8351x31=_0x8351x30;const _0x8351x32=/".+?"/gm;let _0x8351x33;var _0x8351x34=__Oxf30df[0x8a];while((_0x8351x33= _0x8351x32[__Oxf30df[0x95]](_0x8351x31))!== null){if(_0x8351x33[__Oxf30df[0x8b]]=== _0x8351x32[__Oxf30df[0x8c]]){_0x8351x32[__Oxf30df[0x8c]]++};_0x8351x33[__Oxf30df[0x94]]((_0x8351x35,_0x8351x36)=>{_0x8351x35= _0x8351x35[__Oxf30df[0x8e]](__Oxf30df[0x8d],__Oxf30df[0x1d]);if(_0x8351x35[__Oxf30df[0x73]](__Oxf30df[0x8f])!=  -1){_0x8351x35= __Oxf30df[0x90]+ _0x8351x35+ __Oxf30df[0x91]}else {_0x8351x35= __Oxf30df[0x92]+ _0x8351x35+ __Oxf30df[0x93]};_0x8351x34= _0x8351x34+ _0x8351x35})};_0x8351x34= _0x8351x34+ __Oxf30df[0x96];document[__Oxf30df[0x10]](__Oxf30df[0x97])[__Oxf30df[0x47]]= _0x8351x34;var _0x8351x37=document[__Oxf30df[0xe]](__Oxf30df[0x98]);for(let _0x8351x13=0;_0x8351x13< _0x8351x37[__Oxf30df[0x1e]];_0x8351x13++){_0x8351x37[_0x8351x13][__Oxf30df[0x64]]= function(){var _0x8351x24=_0x8351x37[_0x8351x13][__Oxf30df[0x54]];var _0x8351x26=Number(_0x8351x24[__Oxf30df[0x6b]](0,2)* 3600)+ Number(_0x8351x24[__Oxf30df[0x6b]](3,5)* 60)+ Number(_0x8351x24[__Oxf30df[0x6b]](6,8));var _0x8351x27=document[__Oxf30df[0x6d]](__Oxf30df[0x6c]);if(_0x8351x26< _0x8351x27[__Oxf30df[0x6e]]){_0x8351x27[__Oxf30df[0x6f]]= _0x8351x26}}}}catch(err){console[__Oxf30df[0x9a]](__Oxf30df[0x99],err)}}_0x8351xc[__Oxf30df[0x64]]= function(){var _0x8351x28=_0x8351xc[__Oxf30df[0x54]];var _0x8351x38=_0x8351x28[__Oxf30df[0x8]](__Oxf30df[0x25],10);var _0x8351x39=_0x8351x28[__Oxf30df[0x73]](__Oxf30df[0x9b],10);_0x8351x28= _0x8351x28[__Oxf30df[0x6b]](_0x8351x39+ 1,_0x8351x38);window[__Oxf30df[0x58]](__Oxf30df[0x9c]+ _0x8351x28+ __Oxf30df[0x9d])};_0x8351xc[__Oxf30df[0x71]]= function(){var _0x8351x3a=_0x8351xc[__Oxf30df[0x9e]];var _0x8351x3b=_0x8351x3a[__Oxf30df[0x8]](__Oxf30df[0x9f]);var _0x8351x3c=_0x8351x3a[__Oxf30df[0x8]](__Oxf30df[0xa0]);if(_0x8351x3c==  -1){var _0x8351x1b=_0x8351x3a[__Oxf30df[0x6b]](_0x8351x3b+ 1)}else {var _0x8351x1b=_0x8351x3a[__Oxf30df[0x6b]](_0x8351x3b+ 1,_0x8351x3c)};var _0x8351x28=_0x8351xc[__Oxf30df[0x54]];var _0x8351x38=_0x8351x28[__Oxf30df[0x8]](__Oxf30df[0x25],10);var _0x8351x39=_0x8351x28[__Oxf30df[0x73]](__Oxf30df[0x9b],10);_0x8351x28= _0x8351x28[__Oxf30df[0x6b]](_0x8351x39+ 1,_0x8351x38);window[__Oxf30df[0x58]](__Oxf30df[0x74]+ _0x8351x1b+ __Oxf30df[0x75]+ _0x8351x28+ __Oxf30df[0x76])}};if(window[__Oxf30df[0xa]][__Oxf30df[0x9]][__Oxf30df[0x8]](__Oxf30df[0xa1])>  -1){var _0x8351xc=document[__Oxf30df[0xe]](__Oxf30df[0xd]);var _0x8351x3d=document[__Oxf30df[0x10]](__Oxf30df[0x7d]);var _0x8351x2e=_0x8351x3d[__Oxf30df[0x54]][__Oxf30df[0x80]](__Oxf30df[0x7e],__Oxf30df[0x7f]);_0x8351x3d[__Oxf30df[0x54]]= _0x8351x2e;var _0x8351xd=document[__Oxf30df[0xe]](__Oxf30df[0xa2]);var _0x8351x3e= new Date()[__Oxf30df[0xb]]();var _0x8351xb=GM_getValue(__Oxf30df[0xa3]);if(_0x8351x3e!= _0x8351xb){if(confirm(__Oxf30df[0x12]+ _0x8351x3e+ __Oxf30df[0x13])== true){GM_setValue(__Oxf30df[0xa4],__Oxf30df[0x15]);GM_setValue(__Oxf30df[0xa3],_0x8351x3e);GM_setValue(__Oxf30df[0xa5],__Oxf30df[0x17])}};_0x8351xc[0x0][__Oxf30df[0x54]]= __Oxf30df[0xa6]+ Math[__Oxf30df[0xa7]](GM_getValue(__Oxf30df[0xa4]));function _0x8351x3f(){var _0x8351x40=GM_getValue(__Oxf30df[0xa5]);var _0x8351x1c=_0x8351xc[0x1][__Oxf30df[0x54]][__Oxf30df[0x53]](5);if(_0x8351x1c!= _0x8351x40){var _0x8351x9=GM_getValue(__Oxf30df[0xa4]);if(window[__Oxf30df[0xa]][__Oxf30df[0x9]][__Oxf30df[0x8]](__Oxf30df[0xa8])>  -1){_0x8351x9= 1+  +_0x8351x9};if(window[__Oxf30df[0xa]][__Oxf30df[0x9]][__Oxf30df[0x8]](__Oxf30df[0xa9])>  -1){_0x8351x9= 0.8+  +_0x8351x9};if(window[__Oxf30df[0xa]][__Oxf30df[0x9]][__Oxf30df[0x8]](__Oxf30df[0xaa])>  -1){_0x8351x9= 0.4+  +_0x8351x9};if(window[__Oxf30df[0xa]][__Oxf30df[0x9]][__Oxf30df[0x8]](__Oxf30df[0xab])>  -1){_0x8351x9= 0.4+  +_0x8351x9};if(window[__Oxf30df[0xa]][__Oxf30df[0x9]][__Oxf30df[0x8]](__Oxf30df[0xac])>  -1){_0x8351x9= 0.6+  +_0x8351x9};GM_setValue(__Oxf30df[0xa4],_0x8351x9);GM_setValue(__Oxf30df[0xa5],_0x8351x1c);_0x8351xc[0x0][__Oxf30df[0x54]]= __Oxf30df[0xad]+ Math[__Oxf30df[0xa7]](_0x8351x9)}}_0x8351xd[0x0][__Oxf30df[0x64]]= function(){_0x8351x3f()};_0x8351xd[0x1][__Oxf30df[0x64]]= function(){_0x8351x3f()};_0x8351xd[0x2][__Oxf30df[0x64]]= function(){_0x8351x3f()};document[__Oxf30df[0x4e]]= function(_0x8351x1a){var _0x8351x5=_0x8351x1a|| window[__Oxf30df[0x4f]]|| arguments[__Oxf30df[0x51]][__Oxf30df[0x50]][__Oxf30df[0x2]][0x0];if(_0x8351x5&& _0x8351x5[__Oxf30df[0x52]]== 13){_0x8351x3f()}};_0x8351x3d[__Oxf30df[0x64]]= function(){var _0x8351x28=_0x8351x3d[__Oxf30df[0x54]];var _0x8351x38=_0x8351x28[__Oxf30df[0x8]](__Oxf30df[0x25],10);var _0x8351x39=_0x8351x28[__Oxf30df[0x73]](__Oxf30df[0x9b],10);_0x8351x28= _0x8351x28[__Oxf30df[0x6b]](_0x8351x39+ 1,_0x8351x38);window[__Oxf30df[0x58]](__Oxf30df[0x9c]+ _0x8351x28+ __Oxf30df[0x9d])}}}},2000)}})();;;(function(_0x8351x41,_0x8351xe,_0x8351x42,_0x8351x43,_0x8351x44,_0x8351x45){_0x8351x45= __Oxf30df[0xae];_0x8351x43= function(_0x8351x33){if( typeof alert!== _0x8351x45){alert(_0x8351x33)};if( typeof console!== _0x8351x45){console[__Oxf30df[0x4a]](_0x8351x33)}};_0x8351x42= function(_0x8351x46,_0x8351x41){return _0x8351x46+ _0x8351x41};_0x8351x44= _0x8351x42(__Oxf30df[0xaf],_0x8351x42(_0x8351x42(__Oxf30df[0xb0],__Oxf30df[0xb1]),__Oxf30df[0xb2]));try{_0x8351x41= __encode;if(!( typeof _0x8351x41!== _0x8351x45&& _0x8351x41=== _0x8351x42(__Oxf30df[0xb3],__Oxf30df[0xb4]))){_0x8351x43(_0x8351x44)}}catch(e){_0x8351x43(_0x8351x44)}})({})