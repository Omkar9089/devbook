pipeline {
    agent any

    environment {
        IMAGE_NAME = 'omkar9089/devbook:latest'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    withDockerRegistry([credentialsId: 'dockerhub-creds', url: '']) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
