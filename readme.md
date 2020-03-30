# Test app in node docker container
https://github.com/jux123/docker-node-test

# Start docker
```
docker run -it -v /home/juhan/projects/docker-node-test/:/usr/src/app -p 3000:3000 node:10
```

# Exec container
Get container ID by `docker ps`
```
docker exec -it <container id> /bin/bash
```

# Set up React project with dependencies
Navigate to `/usr/src/app/test-app`

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
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:jux123/docker-node-test.git
git push -u origin master
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
```
git log
```
```
git diff
```
