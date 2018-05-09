import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
    $(document).ready(function() {
      console.log("ye we are in");
      var ref=$("#click-me");
      
      ref.click(function(e) {
        console.log("now we are using jquery");
      });

      ref.mouseenter(function() {
        console.log("yes we enter");
      })

      $("button").click(function(){
        console.log("we got it");
      })
    });
  }
}
