import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-name-mean',
  templateUrl: './name-mean.component.html',
  styleUrls: ['./name-mean.component.scss']
})
export class NameMeanComponent implements OnInit {
  private sub: any;
  name: number;
  constructor(private route: ActivatedRoute,
              private titleService: Title,
              private metaService: Meta) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']; // (+) converts string 'id' to a number
      this.renderInfo(name);
      // In a real app: dispatch action to load the details here.
    });
  }

  renderInfo(name) {
    this.titleService.setTitle('chao ' + name + ' chuc mot ngay tot lanh');
    this.metaService.addTag({name: 'description', content: 'Day la y nhia ten ban'});
  }
}
