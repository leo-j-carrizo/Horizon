# Horizon
Proyecto final coderhouse desde 0
Este proyecto final esta hecho en base a mi proyecto del curso de desarrollo web, el objetivo del mismo es poder darle funcionalidad mediante los nuevos conocimientos adquiridos en este curso

En el archivo se detallaran las funcionalidades de la pagina en forma superficial, para una descripcion detallada del funcionamiento leer los comentarios en el codigo.

Funcionalidades generales

-Se vuelve a home presionado el nombre de la pagina (Titulo Horizon)
-La vista previa del carrito esta presente en todas la secciones menos en el login y en el carrito en si
-El inicio de sesion es funcional y se accede mediante sus respectivos botones en el header
   -Primero se crea el usuario en a traves del link REGISTRARSE, esto redirigira al inicio
   -Luego se entra a iniciar sesion y se introducen los mismos datos introducido en REGISTRARSE, se puede iniciar sesion con el USUARIO o el EMAIL
   -Esto redigira al inicio y ahora se mostraran los datos del usuario, para cerrar sesion presionar el respectivo boton, esto no eliminara los datos del usuario creado y se podra volver a iniciar sesion las veces que se quiera  
   -Problema: solo se puede registrar 1 usuario a la ves, los nuevos datos sobreescribiran los anteriores
-Los productos tienen funcionalidad en todas las secciones que los incorporen

Funcionalidades por elementos

TARJETAS

-Al presionar en la TARJETA redirecciona a un template con la informacion del producto
-Al presionar en comprar ahora el producto se agregara al carrito, se pueden agregar un producto al carrito multiples veces, la cantidad se vera reflejada en el carrito principal
(Ejemplo: presiono 3 veces el boton comprar del producto PS5, en el carrito principal tendre el item con una cantidad de 3)
-Se muestra un mensaje que confirma que el producto se agrego al carrito

CARRITO (vista previa)

-Se almacenan los productos al presionar Comprar ahora
-No se crean items de forma duplicada
-El boton vaciar carrito elimina todos los productos almacenados
-Se accede al carrito principial mendiante el icono o mendiante el boton Procesar compra

Funcionalidades por seccion

INDEX

-Carrusel de banner (boostrap)
-Carrusel de productos destacados (swiperjs)
-Al presionar en la TARJETA redirecciona a un template con la informacion del producto (aplica en todas las secciones que posean tarjeta

CARRITO

-Se crean los items de los productos agregados
-La cantidad individual aparece de acuerdo a cuantas veces se halla agregado el producto al carrito
-los botones + y - aumentan o disminuyen la cantidad del producto
-Se puede ingresar manualmente la cantidad del producto
-El precio se multiplica por la cantidad y refleja el subtotal
-Todos los subtotales se suman para devolver el total
-El boton verde al lado de cada item elimina por completo el producto del carrito
-El boton vaciar carrito elimina por completo TODOS los items del carrito

OFERTAS

-Temporizador con plugin de js (seteado para navidad 2021)
-nada mas destacable

PRODUCTOS(en proceso)

-Espero poder terminar el filtro y las paginas de productos

