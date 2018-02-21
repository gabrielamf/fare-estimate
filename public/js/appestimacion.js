$(document).ready(function() { 
  const $containerUber = $('#estimTarifa');
    
  $('#estimatePrice').on('click',function(e){
        e.preventDefault();
      let cslat = parseFloat($('#cslat').text());
      let cslog = parseFloat($('#cslog').text());
      let celat = parseFloat($('#celat').text());
      let celog = parseFloat($('#celog').text());

    $.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://api.uber.com/v1.2/estimates/price?server_token=G1QV-BUwGiR6iwzCCO8aGWqwSFsdFb0qF8NOcGxR&start_latitude=${cslat}&start_longitude=${cslog}&end_latitude=${celat}&end_longitude=${celog}`,
    contentType: 'application/json',                                                                                                                                                                                   
    method: 'GET',
      success: function(response) {

      // console.log(response.prices);
      $.each(response.prices,function(i,obj){
          $containerUber.append('<h2 class="price-name"><h2/>');
          $containerUber.append('<p class="high-cost"><p/>');
          $containerUber.append('<p class="low-cost"><p/>');  
         $containerUber.find('.price-name').eq(i).text(response.prices[i].localized_display_name);
         $containerUber.find('.high-cost').eq(i).text('Precio alto:  S/.' + response.prices[i].high_estimate );
         $containerUber.find('.low-cost').eq(i).text('Precio bajo: S/.' + response.prices[i].low_estimate);    
         })     
     },
    fail: function(request) {
      if (request) {
        alert(request.message);
        }
     }        
   });
});
});