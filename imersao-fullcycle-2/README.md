```export DOCKER_DEFAULT_PLATFORM=linux/amd64```

**Executando o container do simulador:**
```bash
docker-compose up -d --build
go run main.go
```

**Executando o container do kafka:**
```bash
docker exec -it kafka_kafka_1 bash

//producer
kafka-console-producer --bootstrap-server=localhost:9092 --topic=route.new-direction

//consumer
kafka-console-consumer --bootstrap-server=localhost:9092 --topic=route.new-position --group=terminal
```

**Rotas de exemplos**
// {"clientId":"1","routeId":"1"}
// {"clientId":"2","routeId":"2"}
// {"clientId":"3","routeId":"3"}
