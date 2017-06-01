/**
 * box-sizing: Polyfill border-box model for IE6(maybe) and IE7
 *
 * @author Roy Surjano http://codex-media.com/
 * @version 0.0.1, License MIT
 *
 **/

var borderBoxModel = (function(elements, value) {
  var element, cs, s, width, height;


  for (var i=0, max=elements.length; i < max; i++) {
    element = elements[i];
    s = element.style;
    cs = element.currentStyle;

    if(s.boxSizing == value || s["box-sizing"] == value || cs.boxSizing == value || cs["box-sizing"] == value) {

      try {
        apply();
      } catch(e) {}
    }
  }

  function apply() {

    width = parseInt(cs.width, 10) || parseInt(s.width, 10);
    height = parseInt(cs.height, 10) || parseInt(s.height, 10);


    if(width) {

      var borderLeft = parseInt(cs.borderLeftWidth || s.borderLeftWidth, 10) || 0,
          borderRight = parseInt(cs.borderRightWidth || s.borderRightWidth, 10) || 0,

          paddingLeft = parseInt(cs.paddingLeft || s.paddingLeft, 10),
          paddingRight = parseInt(cs.paddingRight || s.paddingRight, 10),

          horizSum = borderLeft + paddingLeft + paddingRight + borderRight;


      if(horizSum) {
        s.width = width - horizSum;
      }
    }

    if(height) {

      var borderTop = parseInt(cs.borderTopWidth || s.borderTopWidth, 10) || 0,
          borderBottom = parseInt(cs.borderBottomWidth || s.borderBottomWidth, 10) || 0,

          paddingTop = parseInt(cs.paddingTop || s.paddingTop, 10),
          paddingBottom = parseInt(cs.paddingBottom || s.paddingBottom, 10),

          vertSum = borderTop + paddingTop + paddingBottom + borderBottom;

      if(vertSum) {
        s.height = height - vertSum;
      }
    }
  }

})(document.getElementsByTagName('*'), 'border-box');