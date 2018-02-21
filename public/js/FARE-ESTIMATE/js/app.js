var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.uber.com/v1.2/products?latitude=37.7759792&longitude=-122.41823');
xhr.setRequestHeader("Authorization", "Token G1QV-BUwGiR6iwzCCO8aGWqwSFsdFb0qF8NOcGxR");
xhr.send();



/*--------- json de productos estimacion de distancias e precios -----------*/

///https://api.uber.com/v1/products?server_token=G1QV-BUwGiR6iwzCCO8aGWqwSFsdFb0qF8NOcGxR&latitude=-12.122932&longitude=-77.014693



/*casa: -12.160327, -76.967643

punto de inicio: latitude=-12.122932&longitude=-77.014693



'https://api.uber.com/v1.2/estimates/price?server_token=G1QV-BUwGiR6iwzCCO8aGWqwSFsdFb0qF8NOcGxR&start_latitude=-12.122932&start_longitude=-77.014693&end_latitude=-12.160327&end_longitude=-76.967643'*/