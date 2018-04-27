var showPopup = false // active ?

$('input').keyup(function() {
    $(this).val(process($(this).val()));
});

function process(s){
  var res = "";
  for (var c of s) if(c != " ") res += c + (c == s.charAt(s.length) ? " " : ""); 
  return res;
}
