

pipeline {
    agent any

    stages {
        stage('get dependency') {
            steps {
                echo 'Building..'
				bat 'npm install '
            }
        }

        stage('build') {
            steps {
                echo 'Deploying....'
				bat 'ng build'
            }
        }
    }
}
