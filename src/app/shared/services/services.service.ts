import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Services {
  private data!: boolean;

  setData(data: boolean) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
