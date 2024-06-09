/*Comandos
1. pwd: te imprime en pantalla el directorio en donde te encuentras
2. whoami: el nombre del usuario actual 
3. help: sirve para buscar ayuda de un comando(help pwd)
4. -h: igualmente de arriba pwd -h
5. --help: pwd --help
6. clear: limpiar la terminal
7. ls: Listar todos los archivos donde se encuentra ahorita la ruta del directorio
*combinaciones:
--ls -l: Lista los archivos y directorios en formato largo, mostrando detalles como permisos, número de enlaces,propietario,grupo , tamaño y fecha
(-rw-r--r-- 1 CRISTHIAN 197121  358 Jun  7 12:16 ComandosBasicos.js)
-- ls -a: Lista todos los archivos incluidos los archivos oculto(aquellos que comienzan con un punto)
--ls -la: lista todos los archivos(incluidos los ocultos) en formato largo
--ls -d:Lista solo los directorios en el directorio actual
(./)
8. cd: Cambiar el directorio(carpetas)
9. cat: Ver el contenido del archivo en el terminal
10. (IMPORTANTE: Copiar el archivo a otro directorio "cp ComandosBasicos.js /ruta/al/directorio/destino/")
10. rm : Eliminar el archivo ( rm ctmr.js)
*/
/* ATAJOS PENDEJOS
1. el tabuldar(es aquel que esta arriba de Bloq Mayusc) si estas escribiendo un comando ejemplo cd y pones cd C y si usas el tabulador lo autocompleta de manera rapida cd ComandosBasicos.js Listo asi.
2. Atajo de arrastrar a una carpeta al termijnal
*/

/*El cd es muy versatil y tiene varias formas de usarse para navegar por el sistema de archvios:
1. ~: representa el directorio home: o sea del usuario este "/c/Users/CRISTHIAN"
2. /: representa el directorio raiz "/" ese ya de ahi puedo elegir el disco c o d xd
3. .: representa el directorio actual donde se encuentra
4: ..: representa el directorio padre, subir un nivel del actual.
(si quieres escalar no slo del padre si no del padre del padre ../.. y asi si quieres mas)
5: -: representa regresar al directorio anterior 
6: "": directorios o archivos con espacios en blanco deben nombrarse entre comillas

*/

/*---Touch:  Para crear un archivo
---echo: crea un archivo y le pone contenido, en caso ya este creado, solo le pone contenido
--mkdir: crear un directorio
--rm: eliminar directorios con contenido(los de abajo) y tambien archivos:
1. rm -r:elimina un directorio y su contenido
2. rm -rf:forza a eliminar un directorio y su contenido, es decir cuando es muy pesada y aveces se bugea y eso pss con esto si o si lo eliminas y matas procesos
*/
/*mv: Para mover un archivo o carpetas a otro lugar
mv archivo_o_carpeta destino/ ( mv FORMATO_ACEPTACION_BECA.pdf GIT/)
1. tambie sirve para archivos creados realizarle una actualizacion de nombre y tambien de extension, es decor si tengo un txt, lo cambio a js y tambien el nombre
(mv ochurus.txt  index.js
)

*/
/*cp: copiar archivos(cp name_archivo  destino) 
1. cp -r: copiar directorios y si contenido(cp -r name_file  destino)
*/
//PARA PARAR UNA EJECUCION DE COMANDOS (ctrl+z)
/*FIND: comando para buscar archivos y carpetas que se nos complique buscar 

1. Buscar archivo por extension: find /ruta/a/carpeta -name "*.txt" (find -name "*.txt"
)
2. Buscar archivos que comienzan con test: find /ruta/a/carpeta -name "test*"
3. Buscar archivos que tengan una letra especificada : en este caso buscara aquellos archivos que contengan una letra minuscula en su nombre (find /ruta/a/carpeta -name "*[a-z]*")
4. Buscar archivos por nombre sin distinguir entre mayusculas y minusculas: find /ruta/al/directorio -iname "nombre_del_archivo"

CON EXPRESIONES REGULARES:
1. Buscar archivos que terminan en .txt o .log: find -regex ".*\.\(txt\|log\)$"
2.Buscar archivos cuyo nombre contegan numeros: en este caso buscara archivos que cotnegan numeros en su nombre( find -regex ".*[0-9].*"
)


OTRAS OPCIONES UTILES:
--BUSCAR SOLO CARPETAS: find -type d -name "A*"
---BUSCAR SOLO ARCHIVOS: find -type f -name "*.txt"

*/

/*Para abrir vs code desde el terminal
code: abrir el editor en el home o sea el usuario,
2. si quieres abrir vs code en una carpeta especifica es asi: code ruta 
3. si quieres abrir code en tu ruta actual: code . */
