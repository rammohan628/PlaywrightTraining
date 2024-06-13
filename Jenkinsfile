pipeline {
    agent any
    environment {
        DOCKER_REGISTRY = "your-docker-registry"
        DOCKER_IMAGE = "your-docker-image"
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/e-commerce-app.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t $DOCKER_REGISTRY/$DOCKER_IMAGE:latest .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run $DOCKER_REGISTRY/$DOCKER_IMAGE:latest npm test'
            }
        }
        stage('Push') {
            steps {
                sh 'docker push $DOCKER_REGISTRY/$DOCKER_IMAGE:latest'
            }
        }
        stage('Deploy') {
            steps {
                sshagent (credentials: ['your-server-credentials']) {
                    sh 'ssh your-username@your-server "docker pull $DOCKER_REGISTRY/$DOCKER_IMAGE:latest && docker-compose up -d"'
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
