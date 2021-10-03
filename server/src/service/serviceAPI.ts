import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

//TODO maybe create a class instead of a type to enforece domain string rules etc..
// type Addresss = {
//   url: string;
// }

class WhoisAPI extends RESTDataSource {
  apiKey = 'at_0MqjezweEuyS9awhmoCjpQqReeOHp';

  constructor() {
    super();
    
    //TODO refactor the baseURL into an envirnoments file
    this.baseURL = 'https://www.whoisxmlapi.com/whoisserver/WhoisService';
  }

  getIPInfo(address: string) {
    return this.get(`${this.baseURL}?apiKey=${this.apiKey}&domainName=${address}&outputFormat=JSON `)
  }
}

export default WhoisAPI;