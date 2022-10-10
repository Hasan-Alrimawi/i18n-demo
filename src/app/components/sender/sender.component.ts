import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransmitterService } from '../../services/transmitter.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent{
  constructor(private msgService :TransmitterService) {
  }

  newMessage(text:string){
    this.msgService.sendMessage(text);
  }
}
