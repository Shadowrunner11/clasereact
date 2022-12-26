export default class ApiFetcher{
  private baseURL;
  
  constructor(baseURL: string){
    this.baseURL = baseURL;
  }

  async get(url: string){
    try {
      const response = await fetch(new URL(url, this.baseURL));
  
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error(error);
      
      throw error;      
    }
  }
  post(url: string, body: Record<string, unknown>){
    return fetch(new URL(url, this.baseURL), {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }
}
