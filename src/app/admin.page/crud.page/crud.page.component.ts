import { Component } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { ArticleService } from 'src/app/service/aticle.service';

@Component({
  selector: 'app-crud.page',
  templateUrl: './crud.page.component.html',
  styleUrls: ['./crud.page.component.scss']
})
export class CrudPageComponent {
  articles: Article[]= [];

  columns: any[]=[];

  constructor(private articleService: ArticleService) {
    this.columns = [
      { dataField: 'id', allowEditing: false },
      { dataField: 'name' },
      { dataField: 'description' },
      { dataField: 'price' },
      { dataField: 'quantity' },
      { dataField: 'image'}
    ];
    articleService.getAllArticles().subscribe(data => {this.articles = data;});
    console.log("load data")
  }

  onRowInserted(event: any) {
    event.data.id = 0
    this.articleService.addArticle(event.data).subscribe(data => {});
  }
  onRowRemoved(event: any) {
    this.articleService.deleteArticle(event.data.id).subscribe(data => {});
  }
  onRowUpdated(event: any) {
    this.articleService.updateArticle( event.data).subscribe(data => {
    });
  }
}
