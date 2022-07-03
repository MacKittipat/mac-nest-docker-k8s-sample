## Build 

```shell script
 docker build -t devpro9/mac-nest-web  .
```

## Run
```shell script
docker run -p8080:3000 devpro9/mac-nest-web
```

## Push to repo
```shell script
docker push devpro9/mac-nest-web:latest
```

## Deploy to GKE
```shell script
kubectl apply -f k8s/deploy.yaml
kubectl apply -f k8s/service.yaml
```
