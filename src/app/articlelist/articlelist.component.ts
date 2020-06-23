import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { IArticle, Article } from '../model/article';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})

export class ArticlelistComponent implements OnInit {

  articles: Array<Article>;

  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.articles = this.articleService.getAllArticleList();
  }

  deleteArticle(article: any): void {
    const result = this.articleService.deleteArticle(article);
    confirm("Are you sure you want to delete the record ? This operation cannot be undone");
  }

  editArticle(articleId: Number): void {
    this.router.navigate(['/editBlog', articleId])
  }

}
