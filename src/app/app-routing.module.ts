import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { EditarticleComponent } from './editarticle/editarticle.component';


const routes: Routes = [
  {path: '', redirectTo:'/blog', pathMatch: 'full'},
  {path: 'blog', component: ArticlelistComponent},
  {path: 'addblog', component: AddarticleComponent},
  {path: 'editBlog/:id',  component: EditarticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
