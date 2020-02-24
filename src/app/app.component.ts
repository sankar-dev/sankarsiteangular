import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'mysite';

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
      });
    })(jQuery);
  }
}
