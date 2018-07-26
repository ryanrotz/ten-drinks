import { TestBed, inject } from '@angular/core/testing';

import { DrinksListsService } from './drinks-lists.service';

describe('DrinksListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrinksListsService]
    });
  });

  it('should be created', inject([DrinksListsService], (service: DrinksListsService) => {
    expect(service).toBeTruthy();
  }));
});
