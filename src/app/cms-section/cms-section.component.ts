import { Component, OnInit,Input,ViewEncapsulation  } from '@angular/core';
import { CmsServiceService } from '../cms-service.service';

@Component({
  selector: 'app-cms-section',
  templateUrl: './cms-section.component.html',
  styleUrls: ['./cms-section.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CmsSectionComponent implements OnInit {

  constructor(private cmsServiceService: CmsServiceService) { }

  content:string;
  @Input() url: string;

  ngOnInit() {
    this.getContent();
  }

  getContent():void{

    this.cmsServiceService.getContent(this.url).subscribe(contentString => this.content = contentString);
  }

}
