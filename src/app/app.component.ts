import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from './services/data.service';
import { Breed } from './models/breed.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  BREEDS_LIMIT = 10;
  breeds: Breed[] = [];
  filteredBreeds: Breed[] = [];

  constructor(private dataService: DataService) {
    this.getBreeds();
  }

  filterBreeds(breed: EventTarget | null) {
    const breedName = (breed as HTMLInputElement)?.value;
    this.filteredBreeds = this.breeds.filter(b => (b.name.toLowerCase()).startsWith(breedName.toLowerCase()));
  }

  getBreeds(): void {
    this.dataService.getBreeds(this.BREEDS_LIMIT).pipe(takeUntilDestroyed()).subscribe(breeds => {
      this.breeds = breeds;
      this.filteredBreeds = breeds;
    });
  }
}
