db.películas.find() /* Muestra todos los documentos de la colección */
db.películas.find({"película":"El Padrino"}) /* Muestra una película en concreto  */
db.películas.find({"género":"comedia"}) /* Muestra todas las  película de un género en concreto  */
db.películas.find({"valoración":{$gte:8}}) /* Muestra todas las  película cuya valoración es superior a 8 */
db.películas.find({"valoración":{$lt:8}}) /* Muestra todas las  película cuya valoración es inferior a 8 */
db.películas.find({"género": {$ne:"dramático"}}) /* Muestra todas las  películas salvo las del género dramático */
db.películas.find({"valoración": {$eq:7}}) /* Muestra todas las  películas que tengan una valoración igual a 7 */