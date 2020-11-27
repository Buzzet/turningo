# Turningo




# Starten der Anwendung:

Docker muss installiert sein! https://hub.docker.com/editions/community/docker-ce-desktop-windows

Starten von MongoDB:
Im Verzeichniss wo das docker-compose.yml file liegt folgenden Befehl ausführen.
```sh
$ docker-compose up -d
```

Danach einfach IDEA starten, das Projekt öffnen und warten bis er fertig ist das Gradle Project zu laden.
Unter den Einstellungen vom IDEA muss der Annoation Processor noch angeschaltet werden!


wichtige Seiten:

localhost:8081 <- Mongo Express
http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/ <- Ausprobieren der Schnittstelle

Viel Erfolg
