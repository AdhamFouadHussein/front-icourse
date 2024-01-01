import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  private reloadSource = new BehaviorSubject<boolean>(false);
  reloadObservable = this.reloadSource.asObservable();

  triggerReload(value: boolean) {
    this.reloadSource.next(value);
  }
}
