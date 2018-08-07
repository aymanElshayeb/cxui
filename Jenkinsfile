

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
				bat 'npm install '
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
				bat 'ng test '
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
				bat 'ng serve'
            }
        }
    }
}

