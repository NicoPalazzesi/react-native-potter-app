# React Native Potter App

## Requisitos
* [Node](https://nodejs.org/es/)
* [npm](https://www.npmjs.com/)
* [react-native-cli](https://reactnative.dev/docs/0.8/getting-started)
* [Android Studio](https://developer.android.com/studio)
* [xCode](https://developer.apple.com/xcode/) (opcional para iOS)
* [cocoapods](https://cocoapods.org/) (opcional para iOS)
* [Git](https://git-scm.com/)

## Instalación

### Descargar el repositorio
Ejecutar en una terminal los siguientes comandos:
``` bash
git clone https://github.com/NicoPalazzesi/react-native-potter-app.git
cd potterApp
```

### Instalar las dependencias
Ejecutar en una terminal
``` bash
npm install
```

### Android
Abrir un simulador de Android. Puede usar el de Android Studio, Genymotion o 
cualquiera de su preferencia.

Ejecutar en una terminal
``` bash
react-native start
```

A su vez, en otra terminal, ejecutar el comando:
``` bash
react-native run-android
```

### iOS
**Nota:** No cuento con una maquina propia con Mac OS para configurar el proyecto y 
que funcione tambien en esta plataforma.

Ejecutar en una terminal
``` bash
cd ios && pod install
```

Con el programa _xCode_ abrimos el proyecto __potterApp.xworkspace__
Seleccionar un simulador para correr la aplicación y correrlo con bóton _Run_.

## Usuario y contraseña
**Nota:** en ambiente de desarrollo el usuario y contraseña para iniciar sesión
se carga automaticamente.

*Usuario:* nicolas

*Contraseña:* alohomora