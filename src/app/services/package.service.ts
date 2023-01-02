import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  packages: any[] = [
    {
      title: 'החבילה המוזלת',
      price: '49.9',
      pMonth: 'לחודש',
      detail1: 'ללא הגבלת אסמס שיחות והודעות',
      detail2: "חבילת גלישה בנפח 10 ג'יגה ",
      detail3: 'מחיר קבוע לשנתיים',
      surpriseBox: 'המחיר נשאר לשנתיים',
    },
    {
      title: 'החבילה הבסיסית',
      price: '59.9',
      pMonth: 'לחודש',
      detail1: 'ללא הגבלת אסמס שיחות והודעות',
      detail2: "חבילת גלישה בנפח 10 ג'יגה ",
      detail3: 'מחיר קבוע לשנתיים',
      surpriseBox: 'המחיר נשאר לשנתיים',
    },
    {
      title: 'החבילה המורחבת',
      price: '69.9',
      pMonth: 'לחודש',
      detail1: 'ללא הגבלת אסמס שיחות והודעות',
      detail2: "חבילת גלישה בנפח 10 ג'יגה ",
      detail3: 'מחיר קבוע לשנתיים',
      surpriseBox: 'המחיר נשאר לשנתיים',
    },
  ];
  constructor() {}

  getPackages(): any[] {
    return this.packages;
  }
}
