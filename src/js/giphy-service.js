export default class GiphyService {
  static getTrending() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/trending?&api_key=${process.env.API_KEY}&limit=5`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  static searchGiphy(image) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/search?q=${image}&api_key=${process.env.API_KEY}&limit=5`;
      request.onload = function() {
        if (this.status ===200) {
        resolve(request.response);
      } else {
        reject(request.response);
      }
    }
    request.open("GET", url, true);
    request.send();
    });
  }
  static getRandom() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/random?&api_key=${process.env.API_KEY}&limit=5`;
      request.onload = function() {
        if (this.status ===200) {
        resolve(request.response);
      } else {
        reject(request.response);
      }
    }
    request.open("GET", url, true);
    request.send();
    });
  }
}