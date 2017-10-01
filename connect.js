/** Connect.js - версия 1.0_preview
 *
 *  @author        { Neubauten Software }
 *  @version       { 1.0 }
 *
*/

function CONNECT() {
  // Скоро появится...
}

CONNECT.prototype.Init = function (XMLFileName, XSLTFileName) {
  var Core = new CONNECT();
  var XML = Core.Load(XMLFileName);
  var XSLT = Core.Load(XSLTFileName);
  
  var Processor = new XSLTProcessor();
  Processor.importStylesheet(XSLT);
  
  var Result = Processor.transformToFragment(XML, document);
  
  document.documentElement.appendChild(Result);
};

CONNECT.prototype.Load = function (Path) {
  var Object = new XMLHttpRequest();
  
  Object.open("GET", Path, false);
  Object.send();
  
  return Object.responseXML;
};
