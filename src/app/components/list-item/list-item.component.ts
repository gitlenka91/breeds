import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BreedDetail } from '../../models/breed.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() name: string;
  @Input() id: string;
  breedDetail: BreedDetail;
  show = false;

  constructor(private dataService: DataService) {}

  showDetails(id: string) {
    this.show = !this.show;

    if (!this.show) return;
    
    // Additionally we might want to implement some loading animation while the response comes from API.
    // That could be handled purely through HTML - depending if this.image is undefined or not.
    this.dataService.getBreedDetails(id).subscribe(data => {
      this.breedDetail = data;
    });
  }
}
