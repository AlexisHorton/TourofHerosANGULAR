import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
