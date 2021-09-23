$("tr.active").click(function () { 
  $(this).next("tr.no-active").toggle(); 
}); 