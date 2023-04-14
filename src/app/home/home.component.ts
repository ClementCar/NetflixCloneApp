import { Component, OnInit } from '@angular/core';
import { Faq } from '../shared/faq';
import { FAQ } from '../shared/faq-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html' ,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions!: Faq[];

  constructor() { }

  ngOnInit(): void {
    this.questions = FAQ;
  }

}
