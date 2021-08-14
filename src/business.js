export default class ExchangeRate {
  static getRate(target_code, base_code){
    return new Promise(function(resolve,reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base_code}/${target_code}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };

      request.open("GET", url, true);
      request.send();
    });
  }
}    

