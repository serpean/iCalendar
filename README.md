# iCalendar
iCalendar implementation with a telegram bot

## Installation

### Requirements

* GIT GUI, usaremos SourceTree.
* IDE, para Node podemos usar Visual Studio Code, JetBrains WebStorm u otro similiar.

### Download

1. Abrimos SourceTree
1. Archivo - Clonar
1. Ponemos el link del proyecto (https://github.com/serpean/iCalendar.git) en la primera casilla y en la segunda el path donde queremos ubicarlo. El resto lo dejamos por defecto.

En el caso de que no querer utilizar SourceTree o cualqier otra GUI de Git, los pasos a seguir son:

Crear la carpeta deseada para el proyecto y situarse en ella.
```bash
mkdir -p ~/code/iCalendar
cd code ~/code/iCalendar
```

Clonar el proyecto de Git a local. Si se va a utilizar un branch propio es recomendable crearlo antes.
```bash
git clone https://github.com/serpean/iCalendar.git
```

Crear un fichero config.json en el path raíz del proyecto con los siguientes parámetros:
```json
  {
  "EMAIL": "email",
  "EMAIL_PASSWORD": "password"
}

```

### How to work

1. Os vais a master (doble click)
1. New branch con el nombre que querais
1. Trabajais ahí
1. Una vez terminas, haceis push
1. Lo testeamos un poco más
1. Hacemos merge con master
