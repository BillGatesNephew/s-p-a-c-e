var showPopup = false // active ?

$('input').keyup(function() {
    $(this).val(process($(this).val()));
});

function process(s){
  var res = ""
  for (var i = 0;i<s.length;i++){
    if (!(s[i]==" ")){
      res+=s[i];
      if (i<s.length-1 ){
        res+=" ";
      }
    }
  }
    return res
}
