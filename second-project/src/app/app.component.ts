import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-project';
  
  constructor(private svc : TestService, private  http:HttpClient) {
    svc.printToConsole("In app Component getting TestService !")
  }
  ngOnInit()
  {
    /*
    let obs = this.http.get("https://api.github.com/users/ashishsriv");
    obs.subscribe((response) => {
      console.log(response);
    });*/
  }
}

