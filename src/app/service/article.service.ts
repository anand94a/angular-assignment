import { Injectable } from '@angular/core';
import { IArticle, Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private listOfArticles: IArticle[] = [
    {
      "id": 1,
      "title": "My trip to Ladakh",
      "body": "My trip to Ladakh was a long awaited one. And Bollywood movies only added fuel to the fire (enchanting scenes from 3 Idiots and Jab Tak Hai Jaan).So in the first week of May, I finally got the opportunity to travel to Ladakh – a trip that has given me memories worth a lifetime, a trip that has permanently inscribed startling ghts of this enchanting place in my mind! Ladakh Here We Come I must say that even the road leading to Ladakh has its own appeal. When you’re about to reach Ladakh, the very first glimpse of this snow laden heaven brings a twinkle to your eyes! Just imagine looking down on a silent, placid, greenish blue lake – beautiful, isn’t it?  Or imagine the sight of magnificent mountains greeting you – that was a welcome I can never forget. There's nothing more enchanting than nature's handiwork in Ladakh... And then as you enter Leh, the characteristic mountains (yes, the ones which our televisions have made very popularJ) greet you with their silent white faces. ",
      "dateOfPublish": '01/06/2020, 11:11:37'
    },
    {
      "id": 2,
      "title": "What is Lorem Ipsum?",
      "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "dateOfPublish": '15/06/2020, 18:20:47'
    },
    {
      "id": 3,
      "title": "Hello World",
      "body": "Hello World Angular 9 !!",
      "dateOfPublish": '17/06/2020, 08:29:48'
    },
    {
      "id": 4,
      "title": "Angular 9",
      "body": "Angular 9 tutorial is the best",
      "dateOfPublish": '17/06/2020, 13:13:58'
    }
  ];

  constructor() { }

  getAllArticleList(): Array<Article> {
    return this.listOfArticles;
  }

  deleteArticle(article: IArticle): IArticle[] {
    const index = this.listOfArticles.findIndex(item => item.id === article.id);
    const deletedItem = this.listOfArticles.splice(index, 1);

    return deletedItem;
  }

  getArticleById(articleId: number) {
    return this.listOfArticles.find(x => x.id === articleId)
  }

  addNewArticleData(article: IArticle): void {
    this.listOfArticles.sort(item => item.id)
    article.id = this.listOfArticles.length + 1
    this.listOfArticles.push(article);
  }

  updateArticleData(article: IArticle): void {
    const index = this.listOfArticles.findIndex(item => item.id === article.id);
    this.listOfArticles[index] = article;
  }

}
