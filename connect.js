/** Connect.js - версия 1.0_preview
 *
 *  @author        { Neubauten Software }
 *  @version       { 1.0 }
 *
*/

function Load(FileName) {
  var Object = new XMLHttpRequest();
  
  Object.open("GET", FileName, false);
  Object.send();
}
