import { Injectable } from '@angular/core';
import { ElementoNav } from '../models/elementoNav';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ElementoFooter } from '../models/elementoFooter';
import { EtichettaLingua } from '../models/etichetteLingua';

@Injectable()
export class ContextService {
  private urlRandomUser = 'https://randomuser.me/api';
  private titolo = 'RANDOMUSER';
  private language = 'fr';
  private vociMenuItaliano: ElementoNav[] = [];
  private vociMenuInglese: ElementoNav[] = [];
  private vociMenuFrancese: ElementoNav[] = [];
  private elementiFooter: ElementoFooter[] = [];
  private etichetteFrancesi: EtichettaLingua;
  private etichetteInglesi: EtichettaLingua;
  private etichetteItaliane: EtichettaLingua;
  constructor() {
    this.vociMenuItaliano = [
      {nome: 'Principale', indirizzo: '/home', ordine: 1},
      {nome: 'Galleria', indirizzo: '/gallery', ordine: 2},
      {nome: 'Contattaci', indirizzo: '/contact', ordine: 3},
      {nome: 'Impostazioni', indirizzo: '/impostazioni', ordine: 4}
    ];

    this.vociMenuInglese = [
      {nome: 'Home', indirizzo: '/home', ordine: 1},
      {nome: 'Gallery', indirizzo: '/gallery', ordine: 2},
      {nome: 'Contact us', indirizzo: '/contact', ordine: 3},
      {nome: 'Settings', indirizzo: '/impostazioni', ordine: 4}
    ];

    this.vociMenuFrancese = [
      {nome: 'Page d\'accueil', indirizzo: '/home', ordine: 1},
      {nome: 'Galerie', indirizzo: '/gallery', ordine: 2},
      {nome: 'Contactez noez', indirizzo: '/contact', ordine: 3},
      {nome: 'Paramétres', indirizzo: '/impostazioni', ordine: 4}
    ];

    this.elementiFooter = [
      {href: 'https://www.facebook.com/wired', class: 'marginFooter fab fa-facebook-f fa-2x'},
      {href: 'http://www.twitter.com/wired', class: 'marginFooter fab fa-twitter fa-2x'},
      {href: 'https://pinterest.com/wired', class: 'marginFooter fab fa-google-plus fa-2x'},
      {href: 'http://www.dsgroup.it', class: 'marginFooter fa fa-envelope-square fa-2x'}
    ];

    this.etichetteFrancesi = new EtichettaLingua(
      'Nom',
      'Prenom',
      'Date de naissance',
      'Adresse',
      'Photo',
      'Telephone',
      'Adresse e-mail',
      'Détails',
      'Arrière'
    );

    this.etichetteInglesi = new EtichettaLingua(
      'Name',
      'Surname',
      'Date of birth',
      'Address',
      'Photo',
      'Phone',
      'E-Mail',
      'Details',
      'Back'
    );

    this.etichetteItaliane = new EtichettaLingua(
      'Nome',
      'Cognome',
      'Data di nascita',
      'Indirizzo',
      'Foto',
      'Telefono',
      'Posta elettronica',
      'Dettagli',
      'Ritorna'
    );
  }

  getTitle(): string {
    return this.titolo;
  }

  getMenu(lang: string): Observable<ElementoNav[]> {
      switch (lang) {
        case 'it':
          return of(this.vociMenuItaliano.sort((a, b) => {
            return a.ordine - b.ordine;
          })
        );
        case 'en':
          return of(this.vociMenuInglese.sort((a, b) => {
            return a.ordine - b.ordine;
          })
        );
        case 'fr':
          return of(this.vociMenuFrancese.sort((a, b) => {
            return a.ordine - b.ordine;
          })
        );
        default:
          return of(this.vociMenuInglese.sort((a, b) => {
            return a.ordine - b.ordine;
          })
        );
      }
  }

  getLanguage(): string {
    return this.language;
  }

  getElementiFooter(): Observable<ElementoFooter[]> {
    return of(this.elementiFooter);
  }

  getUrlRandomUser(): string {
    return this.urlRandomUser;
  }

  getEtichetteLingua(lang: string): EtichettaLingua {
    switch (lang) {
      case 'it':
          return this.etichetteItaliane;
        case 'en':
          return this.etichetteInglesi;
        case 'fr':
          return this.etichetteFrancesi;
        default:
          return this.etichetteInglesi;
    }
  }
}
