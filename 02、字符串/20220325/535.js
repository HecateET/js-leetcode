/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let map = {}
const str = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

var getRandom = function(str){
    let res = ''
    for(let i=0;i<6;i++){
        res += str[Math.floor(Math.random()*61)];
    }
    return res;

}
 var encode = function(longUrl) {
    let res = getRandom(str);
    while(map[res]){
        res = getRandom(str)
    }
    map[res] = longUrl;
    return 'http://tinyurl.con/' + res;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let key = shortUrl.slice(-6)
    return map[key]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */