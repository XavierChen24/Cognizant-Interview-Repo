1. Run the following command in both `frontend` & `backend` directories:
```bash
npm install
```
2. Run the `docker compose` command:
```bash
docker compose up -d
```

2. Check whether the 3 containers are running:
```
docker container ls
```

3. The Backend APIs can be triggered by hitting the following URL:
```
http://localhost:5000
```

4. The Frontend will be served on:
```
http://localhost:3000
```

5. To connect any database UI software with the MongoDB container, use the following details:
```
Host: localhost
Port: 27018
Database Name: library_pod
Database User: local_user
Database Password: Password123
```