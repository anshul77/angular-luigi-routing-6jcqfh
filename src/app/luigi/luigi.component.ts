import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luigi',
  templateUrl: './luigi.component.html',
  styleUrls: ['./luigi.component.css']
})
export class LuigiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Luigi.initialized = false
    Luigi.setConfig({
      navigation: {
        nodes: [{
          pathSegment: 'home',
          hideFromNav: true,
          children: [{
            pathSegment: 'hello',
            label: 'Hello Luigi',
            viewUrl: 'https://fiddle.luigi-project.io/examples/microfrontends/multipurpose.html',
            isolateView: true,
            context: {
              title: 'Hello Luigi!',
              content: " ",
              imgUrl: "https://fiddle.luigi-project.io/img/logos/Luigi-logo_rgb.svg",
              imgWidth: "300",
              imgTopMargin: true
            }
          },{
            pathSegment: 'hello2',
            label: 'Hello Maryna',
            viewUrl: 'https://fiddle.luigi-project.io/examples/microfrontends/multipurpose.html',
            isolateView: true,
            context: {
              title: 'Hello Maryna!',
              content: " ",
              imgUrl: "https://fiddle.luigi-project.io/img/logos/Luigi-logo_rgb.svg",
              imgWidth: "300",
              imgTopMargin: true
            }
          }]
        }]
      },
      routing: {
        useHashRouting: true
      },
      settings: {
        responsiveNavigation: 'semiCollapsible',
        header: {
          title: 'Hello Luigi',
          logo: 'https://fiddle.luigi-project.io/img/luigi.png'
        }
      }
    });
  }

}