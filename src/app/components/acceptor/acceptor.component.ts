import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TransmitterService } from '../../services/transmitter.service';

@Component({
  selector: 'app-acceptor',
  templateUrl: './acceptor.component.html',
  styleUrls: ['./acceptor.component.css']
})
export class AcceptorComponent implements OnDestroy {

  data: any = "";
  subscription!: Subscription;
  constructor(private msgService : TransmitterService) {
    this.subscription = msgService.getMessage().subscribe(arriving =>{
      console.log(arriving);
      this.data = arriving;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
