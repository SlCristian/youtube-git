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
2. ahorita solo tenemos la rama master(despues se hablara de eso) pones esto 
3. recarga y ya me sale el cambio 
*/