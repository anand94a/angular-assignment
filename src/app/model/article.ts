export interface IArticle{
  id:number;
  title:string;
  body:string;
  dateOfPublish:String;
}

export class Article {
  id:number;
  title:string;
  body:string;
  dateOfPublish:String;

  constructor(title?:string,body?:string,dateOfPublish?:string){
      this.title = title;
      this.body = body;
      this.dateOfPublish = dateOfPublish;
  }
}
