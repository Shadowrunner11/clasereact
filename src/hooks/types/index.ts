
export interface IResponse<T =IData[]>{
  isLoading: boolean;
  data: T | null;
  errors: unknown
}


export interface IData {
  href: string
}
