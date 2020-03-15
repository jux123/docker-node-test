# Start docker
```
docker run -it -v /home/juhan/projects/docker-node-test/:/usr/src/app -p 3000:3000 node:10
```

# Exec container
```
docker exec -it <container id> /bin/bash
```

# Set up React project with dependencies
 - Install create-react-app tool
```
npm install create-react-app -g
```
 - Generate project
```
create-react-app test-app
```

# Start app (localhost:3000)
```
yarn start
```

# Build for production
```
yarn build
```




# GIT commands
```
git init
```
```
git status
```
```
git add -A
```
```
git reset <file>
```
