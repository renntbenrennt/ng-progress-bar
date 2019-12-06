import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  widthProgress = 0;
  flexBasisProgress = 0;

  widthProgressObj = {
    limit: 160,
    progress: 0
  };

  flexBasisProgressObj = {
    limit: 50,
    progress: 0
  }

  ngOnInit(): void {
    this.widthProgressing();
    this.flexBasisProgressing();
  }

  timeoutFunc(limit, progress) {
    setTimeout(() => {
      if (progress < limit) {
        // this.time += 10;
        this.timeoutFunc(limit, progress += 10);
        console.log(progress);
      }
    }, 1000);
  }

  timeoutFuncWithObj(progressObj) {
    setTimeout(() => {
      if (progressObj.progress < progressObj.limit) {
        progressObj.progress += 10;
        this.timeoutFuncWithObj(progressObj);
        console.log(progressObj.progress);
      }
    }, 1000);
  }  

  widthProgressing() {
    // this.timeoutFunc(160, this.widthProgress);
    this.timeoutFuncWithObj(this.widthProgressObj);
  }

  flexBasisProgressing() {
    // this.timeoutFunc(50, this.flexBasisProgress);
    this.timeoutFuncWithObj(this.flexBasisProgressObj);
  }
}
