import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface coffee {
  title: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  url = 'https://api.sampleapis.com/coffee/iced';

  getAPI(): Observable<coffee[]> {
    return this.http.get<coffee[]>(this.url);
  }

  private theCoffee = new BehaviorSubject<coffee | null>(null);
  buyCoffe$ = this.theCoffee.asObservable();

  private mainOverlay = new BehaviorSubject<boolean>(false);
  openOverlay$ = this.mainOverlay.asObservable();

  private addtoFavorite = new BehaviorSubject<coffee[]>([]);
  addCoffe$ = this.addtoFavorite.asObservable();

  setCoffe(value: coffee) {
    this.theCoffee.next(value);
  }

  sendOverlay(value: boolean) {
    this.mainOverlay.next(value);
  }

  addFavorite(value: coffee) {
    const current = this.addtoFavorite.getValue();
    this.addtoFavorite.next([...current, value]);
  }
}
