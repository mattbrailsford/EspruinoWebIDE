/**
 Copyright 2014 Gordon Williams (gw@pur3.co.uk)

 This Source Code is subject to the terms of the Mozilla Public
 License, v2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 
 ------------------------------------------------------------------
  Settings Page for the Espruimno Flasher
 ------------------------------------------------------------------
**/
"use strict";
(function(){
  
  function init() {
    Espruino.Core.Config.addSection("Flasher", {
      description : "Writing a new version of Espruino onto the board",
      sortOrder : 10000,
      getHTML : function(callback) {      
        $.get("/data/settings_flasher.html", function(data) {
          callback(data);

          // Set up warning
          var chromeVer = navigator.userAgent.replace(/.*Chrome\/([0-9]*).*/,"$1");
          if (chromeVer < 31) {
            $(".flash_info").css("color","red").html("Your Chrome version is "+chromeVer+". Please upgrade it before trying to flash your Espruino board.");
          }     
          
          // Start button
          $('.flash_start').click( function() {
            Espruino.Core.App.closePopup();
            Espruino.Core.MenuFlasher.showFlasher();
          });
          // Advanced start
          
          $('.flash_start_advanced').click( function() {
            var url = $('.flash_url').val();
            if (url!="") {              
              Espruino.Core.App.closePopup();
              Espruino.Core.MenuFlasher.showFlasher( url );
            }
          });
        });
      }
    });
  }
  
  function startFlashing() {

  }
  
  Espruino.Core.SettingsFlasher = {
    init : init,
  };
}());
