pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/your-user/devbook.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t <your-repo>/devbook:latest .'
      }
    }
    stage('Push to DockerHub/ECR') {
      steps {
        withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {
          sh 'echo $DOCKER_TOKEN | docker login -u your-username --password-stdin'
          sh 'docker push <your-repo>/devbook:latest'
        }
      }
    }
  }
}