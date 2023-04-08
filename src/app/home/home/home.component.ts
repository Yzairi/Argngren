import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article.model';
import { ArticleService } from 'src/app/service/aticle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  articles: Article[]= [];
  constructor(private articleService: ArticleService,private router: Router) {

    this.articleService.getAllArticles().subscribe(data => {this.articles = data;});
  }
  onClick(article : Article): void {
    this.router.navigate(['/detaile', article.id]);
  }
}
