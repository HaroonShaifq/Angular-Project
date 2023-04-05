import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  postId;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post<Article>('https://reqres.in/api/posts', { name: 'Haroon' }).subscribe(data => {
        this.postId = data.name;
    })
}
}

interface Article {
  id: number;
  name: string;
}