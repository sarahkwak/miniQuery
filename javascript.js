var SweetSelector = (function(){
  return{
    select: function(word) {
      if (word[0]==="#") {
        return document.getElementById(word.slice(1))
      }
      else if (word[0]===".") {
        return document.getElementsByClassName(word.slice(1))
      }
      else if (word ==='a') {
        return document.getElementsByTagName(word)
      }
    } //select
  } //return
})();

DOM.hide('.klass') // hides the div
DOM.show('.klass') // shows the div

var DOM = (function() {
  return{
    var element = SweetSelector.select(word);
    hide: function(word){
      return element.css('display', 'none')
    }
  } //return
})(); //DOM