$.getJSON("data.json", function(data) {
  var items = [];
  $.each(data, function(key, val){
    items.push("<tr>");
    items.push("<td id=''"+key+"''>"+val.name+"</td>");
    items.push("<td id=''"+key+"''>"+val.rotation_period+" Hours"+"</td>");
    items.push("<td id=''"+key+"''>"+val.orbital_period+" Days"+"</td>");
    items.push("<td id=''"+key+"''>"+val.diameter+" KM"+"</td>");
    items.push("<td id=''"+key+"''>"+val.climate+"</td>");
    items.push("<td id=''"+key+"''>"+val.gravity+"</td>");
    items.push("<td id=''"+key+"''>"+val.terrain+"</td>");
    items.push("<td id=''"+key+"''>"+val.surface_water+"%"+"</td>");
    items.push("<td id=''"+key+"''>"+val.population+"</td>");
    // items.push("<td id=''"+key+"''>"+val.residents+"</td>");
    // items.push("<td id=''"+key+"''>"+val.films+"</td>");
    // items.push("<td id=''"+key+"''>"+val.created+"</td>");
    // items.push("<td id=''"+key+"''>"+val.edited+"</td>");
    // items.push("<td id=''"+key+"''>"+val.url+"</td>");
    items.push("</tr>");
  });
  $("<tbody/>", {html: items.join("")}).appendTo("table");
});

$(document).ready( function(){
  $("tbody").attr("id", "myTable");
})

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});