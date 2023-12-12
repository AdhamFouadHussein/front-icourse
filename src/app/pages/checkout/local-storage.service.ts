import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  // Get the window object from the document
  get window(): Window | null {
    return this.document.defaultView;
  }

  // Get the data from the localStorage by a key
  get(key: string): any {
    // Use the nullish coalescing operator to provide a default value
    return JSON.parse(this.window?.localStorage.getItem(key) ?? '{}');
  }

  // Set the data to the localStorage by a key and a value
  set(key: string, value: any): void {
    // Use the optional chaining operator to access the localStorage only if the window is not null
    this.window?.localStorage.setItem(key, JSON.stringify(value));
  }

  // Remove the data from the localStorage by a key
  remove(key: string): void {
    // Use the optional chaining operator to access the localStorage only if the window is not null
    this.window?.localStorage.removeItem(key);
  }
}
