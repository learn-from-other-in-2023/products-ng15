import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version: string | undefined;

  constructor(private versionService: VersionService) { }

  ngOnInit() {
    console.log('ngOnInit is called in header.component.ts');

    this.version = this.versionService.getVersion();
  }

}

