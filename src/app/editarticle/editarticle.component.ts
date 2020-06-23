import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle, Article } from '../model/article';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})

export class EditarticleComponent implements OnInit {

  articleForm: FormGroup;
  articleId: any;
  date: Date;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    })

    this.route.paramMap.subscribe(params => {
      const articleId = +params.get('id');
      if (articleId) {
        this.getArticleById(articleId)
        this.articleId = articleId;
      }
    })
  }

  getArticleById(articleId: number) {
    const editArticle = this.articleService.getArticleById(articleId);
    this.patchArticleDetailsOnForm(editArticle);
  }

  patchArticleDetailsOnForm(editArticle: IArticle) {
    this.articleForm.patchValue({
      title: editArticle.title,
      body: editArticle.body
    })
  }

  onSubmit() {
    this.updateArticleData();
  }

  updateArticleData() {
    const article = new Article();
    this.date = new Date();
    article.id = this.articleId;
    article.title = this.articleForm.get('title').value;
    article.body = this.articleForm.get('body').value;
    article.dateOfPublish = this.date.toLocaleString() + "\n (Edited)";

    this.articleService.updateArticleData(article);
    alert("Data has been edited");
    this.router.navigate(['/blog']);
  }
}
