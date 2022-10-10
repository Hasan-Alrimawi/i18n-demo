import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TransmitterService {
  private subject = new Subject();
  
  sendMessage(message:string){
    this.subject.next({text: message});
  }

  getMessage(){
    return this.subject.asObservable();
  }
}
