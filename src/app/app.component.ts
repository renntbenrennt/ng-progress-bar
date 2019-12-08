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
  };

  test = {
    t: 0
  }

  ngOnInit(): void {
    this.widthProgressing();
    this.flexBasisProgressing();

    // function tt(test) {
    //   setTimeout(() => {
    //     if (test.t < 10) {
    //       test.t += 1;
    //       tt(test);
    //     }
    //   }, 1000);
    // }

    // console.log(tt(this.test));
  }

  timeoutFunc(limit, progress) {
    setTimeout(() => {
      if (this[progress] < limit) {
        this[progress] += 10;
        this.timeoutFunc(limit, progress);
      }
    }, 1000);
  }

  /// todo:
  /// find out why the value is calculated, seemingly,
  /// twice...
  // timeoutFuncWithObj(progressObj) {
  //   setTimeout(() => {
  //     if (progressObj.progress < progressObj.limit) {
  //       console.log("this 1 === ", this);
  //       progressObj.progress += 10;
  //       console.log(progressObj.progress);
  //       console.log("this 2 === ", this);
  //       this.timeoutFuncWithObj(progressObj);
  //       console.log("this 3 === ", this);
  //     }
  //   }, 1000);
  // }

  widthProgressing() {
    this.timeoutFunc(160, 'widthProgress');
    // this.timeoutFuncWithObj(this.widthProgressObj);
  }

  flexBasisProgressing() {
    this.timeoutFunc(90, 'flexBasisProgress');
    // this.timeoutFuncWithObj(this.flexBasisProgressObj);
  }
}
