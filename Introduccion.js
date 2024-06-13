/*GIT 
para saber la version git --version

EL COMANDO CONFIG: Es fundamental para la configuracion de Git. Te permite definir y ajustar opciones de configuracion que controlan el comportameinto de Git.
--COMO USARLO:
PERO ANTES EXISTE 3 NIVELES DIFERENTES 
1. Sistema(--system): Afecta a todos los usuarios del sistema. El archivo configuracion esta ubicado generalmente en /etc/gitconfig.
2. Global(--global): Afecta a un solo usuario. El archivo de configracion esta ubicacion en ~(alt+126)..
3 local(-- local): Afecta al repositorio actual 

(AHORA SI)
1. Establecer configuracion:
Siguiente formato:git config [--local | --global | --system] clave valor
Ejemplo: git config --global user.name "Gato"
2. Para listar:
Siguiente formato:git config --list [--local | --global | --system]
Ejemplo: git config --global --list
3. Eliminar una configuracion:
siguiente formato: git config [--local | --global | --system] --unset clave
Ejemplo: git config --global --unset user.name

CONFIGURACION COMUNES:
-El user.name y user.email para identificar al autor de los commits
-EL EDITOR QUE QUIERES USAR CUANDO QUIERAS CAMBIAR LA CONFIGURACION DE UNA MANERA MAS RAPIDA Y NO ESTAR USANDO TANTO(EN ESTE CASO CON VSTUDIO CODE)
1. para que permita para vstudicode: git config --global core.editor "code --wait": se utiliza para configurar Visual Studio Code (VS Code) como el editor predeterminado de Git.
2.git config --global -e: abre el archivo de configuracion global de Git en el editor de texto predeterminado que se haya configurado(en este caso visual studio code) y cuando lo cierro se guarda los cambios
-PARA MANERA LAS DIFERENCIAS EN LOS FINALES DE LINEA ENTRE DIFERENTES SISTEMA OPERATIVOS: git config --global core.autocrlf true (para diferentes sistemas operativos)

PARA BUSCAR AYUDA DESDE GITBASH Y DESDE EL DISCO LOCAL de cualquier comando y ver todas las opciones de la configuración en la terminal:
Siguiente formato git help comando y git comando -h
- git config -h
Tambien si quieres verlo en el navegador
- git help config
*/

/*2. INICIALIZANDO GIT 
--- archivo .gitignore: Se utiliza para especificar intencionalmente que archivos y directorios deben ser ignorados por Git, es un archivo oculto, ademas lo listado en este archivo no sera rastreado, no se incluiran en los commits y no se agregarán al repositorio remoto cuando se haga push
--- git init: ES UN COMANDO que se se utiliza para inicializaran un repositorio en git, y solo sejecuta 1 sola vez. Cualquier cambio que hagfa git lo va a poder ir traqueando 
*/


/*FLUJO BASICO: Consta de tres estados locales, es decir en la computadora donde se esta trabajando y uno más de forma remota cuando accedemos al codigo centralizado en plataformas como GitHub, Gitlab, Bitbucket,etc 

Directorio de trabajo          Área de preparación          Repositorio local           Repositorio remoto
     (Modified)       ------>     (Staged)        ------>     (Committed)       ------>       (Remote)
     Cambios en                git add (preparar)              git commit                  git push
     archivos                                                      (confirmar)               (enviar)

1. Para añadir los cambios al staged
- 1 por 1: git add archivo/directorio
- todos de una: git add .

2. Hay 2 formas para hacer commit:
- git commit: habre tu vs code y tienes que poner en la primera linea el comentario
-git commit -m "Mensaje descriptivo del cambio"
3. GITHUB/ REMOTE:
1. primero crea un directorio en git y si ya lo tienes creado pon esto 
git remote add origin https://github.com/SlCristian/youtube-git.git
2. ahorita solo tenemos la rama master(despues se hablara de eso) pones esto git push -u origin master
3. recarga y ya me sale el cambio 
(DATO: Si haces mas cambios pss lo haces lo mismo a diferencia del push que como ya esta conectado a GITHUB al repositorio y al origin/master(rama) solo pones git push y ya se guarda los cambios)

4. el utlimo que seria para descargar los cambios del repositorio con
pull: git pull
/*(DATO: SI QUIERES DESCARGAR DE UN AMIGO DE SU REPOSITORIO SOLO PONES EL git clone y nombre de la carpeta que quieres que se llame, ya que crea una carpeta por ti, eso es opcional ya que si no tendra el nombre por defecto de la descarga
git clone https://github.com/usuario/repo.git nuevo-nombre


) */


/*PASAR DE LA RAMA MASTER A LA MAIN: Es como un estandar que se da por un movimiento encontra del racismo, esto no afecta en nada, ya que por defecto tenemos la rama master pero esto se hace de cambiar de la rama master a la main como principal  
1. PARA REPOSITIORIOS NUEVOS: ahi en su pagina web esta donde crea la rama main (git branch -M main) y ya luego el remote y el git push -u origin main(ya no al master)
2. Para repositorios existentes: o sea que ya han sido pero todavia conectados con el remote:
 Para reemplazar la rama master por main en GitHub: O sea si ya lo conectaste con el remote y quieres cambiar de rama de master a main
//
3. EN CASO EXISTA EL REPOSITORIO PERO YA LO CONECTASTE CON GITHUB Y QUIERES PASAR DE MASTER A MAIN:
# Paso 1
# Crea la rama local main y pásale el historial de la rama master
git branch -m master main (el -m es de mover/renombrar)
(y el de git commit -m(es de mensaje))

# Paso 2
# Haz un push de la nueva rama local main en el repositorio remoto de GitHub
git push -u origin main


# Paso 3
# Cambia el HEAD actual a la rama main
git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main
Pas 4: en el git poner por defecto master
# Paso 5
# Elimina la rama master del repositorio remoto
git push origin --delete master
//
*/

//(PARA ELIMINAR UN DIRECTORIO DE GIT: SIMPLEMENTEMENTE VE A setting y ahi en danger zone ahi esta)


/*IGNORAR ARCHIVOS: con el archivo .gitingnore y ya owo
 */

/*RAMAS: Una rama nos permite aislar una nueva funcionalidad en nuestro codigo que despues podremos añadir a la version principal
1.  git branch: Ver todas las ramas disponibles
2. git branch nombre-rama: Crear una rama
3. git checkout nombre-rama: Cambiar de rama
4 git checkout -b rama: Crear y cambiarte a esa rama que estas creando
5. git  branch -d nombre-rama: Eliminar una rama y si quieres fornzarla es con -D mayuscula
(DATO: Esa rama tienes que ejecutarlo en el remoto o sea porque solo existe de manera local) ESTO: $ git push -u origin html
6: git push origin --delete nombre-rama: PARA ELIMAR RAMAS REMOTAS(o sea que ya fueron incluidas en git)




AWAWA: SI TE PREGUNTAS PORQUE LA RAMA html y css tieneen el index.html ya que solo deberia tener el html, bueno es porque cuando tu creaste la rama css lo hiciste desde la rama html, en la foto se ve, y pss copia todo lo que ya teniael html y por eso, por eso cuidado con eso




//SI PIENSAS QUE LAS RAMAS SON SOLO PARA CREAR SUBDIVISIONES DE TRABAJO PSS TAMBIEN LUEGO DE REALIZAR PUEDES FUCIONAR LAS RAMAS, Y DIVIDIR TRABAJO OWO
*/

/*FUSIONES:
----FAST-FORWARD--------------------------------------
unir dos ramas. pARA HACER UNA FUSIONES NECESITAMOS
1. Situarnos en la rama que se quedara con el contenido fusionado
2. Fusionar
1. vas a la rama principal: git checkout rama-principal
2. ejecutamos el comando merge con la rama secundaria a fusionar:
Con merge git merge rama-secundaria
(LUEGO DE LAS FUSIONES SI QUIERES PUEDES ELIMINAR LAS OTRAS RAMAS con git branch -d name y si quieres eliminar las ramas del repositorio o sea las remotas git push origin --delete name)
----MANUAL MERGE--------------------------------------------
La fusion hay que hacerla manual, para resolver conflictos de duplicacion de contenido(ahorita estamos haciendo esto, ya que a la rama main le agregamos contenido html de index.html diferente al de la rama html)


*/

/*DATO IMPORTANTE DEL PORQUE TODAS LAS RAMAS QUE CREAS NO ES NECESARIO PONERLE EN REPOSITORIO YA QUE TALVEZ EL EQUIPO NO NECESITA ESA RAMAS  
1. OTRO DATO QUE ES APARTE: EN SU EL PUSH SE USA PARA MANDAR AL REMOTO PERO SI QUIERES GUARDAR CAMBIO DE MANERA INTERNA CON EL cmmit basta

(PARA SALIR DE CUALQUIERA Y QUE NO TE SIGA MOSTRANDO COMO POR EJEMPLO LUEGO DE HACER EL git log, mas commmits, simplemente pulsa la letra "q")
*/

/*CAMBIOS: Por si eres weon y te olvidas de algo y ya le hiciste commit pero no quieres hacerle otra vez commit si no editarlo
(RECUERDA CTMR PUEDES USAR ESTOS COMANDOS DE ACTUALIZACION SIEMPRE Y CUANDO NO HALLAS HECHO PUSH PORQUE SI NO YA NO SE PUEDE Y TENDRAS PROBLEMAS DE CAMBiO o sea si se puede,pero trae problemas)

1. git log: es para ver el historial de todos los commits o git log --oneline
2. git commit --amend --no-edit: sin editar el mensaje del último commit
(cuando hay relaciones de conflictos o sea un merge o algo asi en medio, solo te dejara crear un nuevo commit y no actualizarlo , esto sucede porque ese commit ya se le hizo push, mas que todo estos commandos del amend sirva para commit antes de hacerle push CTMR)
*/

/*Cambiar de rama: git checkout nombre-rama 
Cambiar a un commit en particular: git checkout id-commit
*/

/* REGISTRO DEL HISTORIAL
1. git log > commits.txt: Guardar el log en la ruta y archivo que especifiquemos, a menudo se le guarda en un txt owo mira ese archivo txt que dice pachis
2. git log --prety=format:"%h - %an, %ar : %s": muestra el historial con el formato que indicamos

*/


/*RESEO DEL HISTORIAL: Podemos eliminar el historial de cambios del proyecto hacia adelante con respecto de un punto de referencia.
1. git status: Es fundamental en git para proporcionar una vision clara del estado de tu repositorio de trabajo. Cuando ejecutas git status obtienes informacion sobre las siguientes areas claves:
- Estado del área de preparación (staging area): Te muestra qué archivos están listos para ser confirmados (committed). Estos son los archivos que has añadido al área de preparación usando git add.
- Archivos modificados pero no preparados: Te informa sobre los archivos que han sido modificados en tu directorio de trabajo pero que aún no se han añadido al área de preparación.
-Archivos sin seguimiento (untracked files): Te muestra los archivos que no están bajo control de versión, es decir, archivos nuevos que Git aún no está rastreando. (o sea con el git add)
-Información sobre la rama actual: Indica en qué rama estás trabajando y si tu rama local está adelantada o atrasada en comparación con su contraparte remota (si la rama tiene un seguimiento remoto configurado).

-Cambios a ser confirmados: Enumera los archivos que se encuentran en el área de preparación y están listos para ser confirmados.

2. git reset -soft: Borra lo que hay en el HEAD, recuerda el flujo basico ctmr, cuando ya esta en el HEAD/Local ahi recien puedes hacerle cambio a eso en caso no porque no estaria en la cabecezera,
ademas luego de borrar luego de hacer el commit, todo eso del commit se mantendra en el area de preparacion (staged changes)
3. git reset -mixed: borra el head y staging o sea despues de hacerle commit,borra ese commit y todo no lo manda al area de preparacion si no antes del staged changes(antes de hacer git add .) owo y pasa al working creo que se llama
*/

/*Resetear un repositorio
config pasarlo a otro y si haces eso ahora va a fallar
git remote -v: si te preguntas porque hay tanto el fetch como el push pues uno es para subir(push) y otro es para hacer cambios remotos(pull) 
*/


/*ETIQUETAS EN GIT: nos permite asignar un numero de version de nuestro codigo o versionar nuestro codigo, ademas si creas una rama desde una etiqueta puedes trabajar en esa version especifca del codigo como si fuera una rama regular.Esto es muy útil cuando necesitas hacer correcciones o desarrollar nuevas características a partir de un punto específico en la historia del proyecto.*/