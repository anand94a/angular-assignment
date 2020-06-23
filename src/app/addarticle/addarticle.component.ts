import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../service/article.service';
import { Article } from '../model/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})

export class AddarticleComponent implements OnInit {
  
  articleForm: FormGroup;
  date: Date;

  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit(): void { 
    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    })
  }

  saveArticleDetails():void{
    this.date = new Date();
    const title = this.articleForm.get('title').value;
    const body = this.articleForm.get('body').value;
    
    this.articleService.addNewArticleData(new Article(title, body,this.date.toLocaleString()));
  }

  onSubmit(): void {
    this.saveArticleDetails();
    alert("Blog Added Succesfully!!")
    this.router.navigate(['/blog']);
  }
  
}
