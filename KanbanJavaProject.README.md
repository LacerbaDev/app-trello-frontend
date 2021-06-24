# Branch details

This branch is to be considered a special version built to be run in an integrated environment like a Java Servlet Container.
The aim is to build a pluggable release that can be published into the "/kanban" web app and web API "Java Learning" application.
The pointers to the backend API make this version available to be published into, for instance, a Tomcat Web Server that usually runs on port 8080

## Purpose

Running the application inside the same container in which the backend API is processed is just for learning purposes, to avoid the CORS browser's limitations

## Spec

### Main API pointer
Mainly, the index.ts main service make this version use the backend API on http://localhost:8080/kanban

### Server absolute URL's to relative paths

Some URL's are changed from absolute server path (like "/mydir/myresource") to a relative path (like "./mydir/myresource") to allow the execution of the client application into a web server sub-context (like "/kanban")
Some routes are moved from "/" to "/kanban"

