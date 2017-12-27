import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-name-mean',
  templateUrl: './name-mean.component.html',
  styleUrls: ['./name-mean.component.scss']
})
export class NameMeanComponent implements OnInit {
  private sub: any;
  name: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }

}
