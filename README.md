# lmx_app
aplicacion letrimex v2
Requisito
- nodejs
-android studio

....INSTALACION.
npm i
npm install -g @ionic/cli

"Si sale algun error, la consola te dira que necesitas instalar"

COMANDOS
ionic serve (iniciar aplicacion)
npx cap add android (generar archivo android, en caso de ios solo sustituir)

Abren la aplicacion en la web: npm start, npm run dev, ionic serve


ionic build (generar carpeta www para crear index, asi se puede hacer apk o subir a servidor)
npx cap sync android o ios (si se cambia el codigo se debera hacer ionic build y luego este comando para sincronizar laa carpetas)
npx cap open android o ios (abre la aplicacion en android studio)
