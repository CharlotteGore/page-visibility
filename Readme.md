# page-visibility

  Cross browser PageVisibility helper. Uses the HTML5 PageVisibility API and then falls back to focus/blur stuff for older browsers.

## Installation

    $ component install charlottegore/page-visibility

## API

    var pageVis = require('page-visibility'); 
    
    pageVis.onVisible(function(){
      console.log("Page is visible/focused");
    })
    
    pageVis.onHidden(function(){
      console.log("Page is hidden/blurred");
    })
    
    var callback = function hidden(){
      console.log("The page is hidden!");
    }
    
    pageVis.onHidden( callback );
    pageVis.unbind("hidden", callback);

## License

  MIT
