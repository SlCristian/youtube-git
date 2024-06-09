<!--el # signfica un encabezado de nivel h1 y los _ representan ponerlo en cursiva-->

# Aprendiendo _Markdown_
<!--Parrafos-->
Esto es un parrafo

Este es otro parrafo

Aplicando _cursiva_ y **negrita** , **_cursiva y negro racista_**

<!--Encabezado por nivel-->
# Nivel 1
## Nivel 2
### Nivel 3

<!--Enlaces-->
[ONICHAN](https://youtube.com)
<!--Enlace a un encabezado: todos los encabezados no importan el nivel, cuando quieras poner enlaces internos Marldown los reconoce ya como anclas internas-->
[Aprendiendo_Markdown](#aprendiendo-markdown)
<!--Imagen en markdown: ![Texto alternativo](ruta/de/la/imagen)
-->
![This is onichan](https://jonmircha.com/img/blog/this-is-javascript.jpg)

<!--linea divisoria-->

# Listas

<!--listas-->

1. Primer elemento
  - Sub-elemento 1.1
  - oni chan yamete
2. Segundo elemento
3. Tercer elemento

* Primavera
* Verano
  - Julio
  - Agosto
  - Septiembre
    - Mes patrio
* Otoño
<!--Cita en linea-->
> Siempres tienes opcion de larguarte a la mierda

<!--Citas en bloque-->

>Todo lo que escuchamos es una opnion, no un hecho
>
>Todo lo que vemos es una perspectiva, no la verdad
>
> Marco Aurelio.

<!--Tablas-->
| Nombre | Edad | Correo |
| --- | --- | --- |
| Cristian | 19 | cristianronaldo@gmail.com|
| Daniel | 21 | daniel@gmail.com|

<!--Codigos en linea-->
Esto es un `Codigo` en linea

En javascript una variable se define asi: `let saludo= "Hola mundo";`

<!--Codigo en bloque-->

```js
function sumar(a,b){
 if(typeof a !== "number" || typeof b !== "number"){
    return false;
 }
 let c= a+b;
 return c;
}
```


<!--Todo lo que sea codigo html, markdown dentro de su soporte puede utilizar cualquier etiqueta de html -->

<form>
<label for="q" >Buscar:</label>
<input type="search" name="q" id="q" required />
<input type="submit" value="♥"/>
</form>


<!--Escape de caracteres: Se le llama escape de caracteres al proceso que hace un lenguaje de marcado o programacion para omitir los caracteres especiales que usa para la definicion de su sintaxis-->
Texto en \_cursiva\_ y en \*\*negrita\*\*