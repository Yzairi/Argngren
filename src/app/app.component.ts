import { Component } from '@angular/core';
import { Article } from './model/article.model';
import { ArticleService } from './service/aticle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private articleService: ArticleService) {

  }
}
