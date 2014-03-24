/**
 Copyright 2014 Gordon Williams (gw@pur3.co.uk)

 This Source Code is subject to the terms of the Mozilla Public
 License, v2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 
 ------------------------------------------------------------------
  An Example Plugin
 ------------------------------------------------------------------
**/
"use strict";
(function(){
  
  var hotKeysMap = {
    "saveFile": "ctrl+s",
    "openFile": "ctrl+o",
    "deploy": "ctrl+d"
  };

  function init() {
    
    for(var id in hotKeysMap)
    {
      // Force a closure so we can acces id in event handler
      (function(id){

        $(document).on("keydown", null, hotKeysMap[id], function(e){
          $("#icon-"+ id).trigger("click");
        });

      })(id);
    }

  }
  
  Espruino.Plugins.ExamplePlugin = {
    init : init,
  };
}());