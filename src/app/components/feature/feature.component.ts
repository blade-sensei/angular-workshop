import { Component, Input } from '@angular/core';
type Feature = {
  title: string;
  imgPath: string;

}
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
  @Input()
  feature: Feature | undefined;
}
