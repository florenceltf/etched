  var origDocHeight = document.body.offsetHeight;

  var clone=$("body").contents().clone();
  clone.appendTo("body");
  clone.prependTo("body");

  $(document).scroll(function(){ 

      var scrollWindowPos = $(document).scrollTop(); 

      if(scrollWindowPos >= origDocHeight ) { 
          $(document).scrollTop(0); 
      }
      if(scrollWindowPos <= 0 ) { 
           $(document).scrollTop(origDocHeight); 
       }        
  });
