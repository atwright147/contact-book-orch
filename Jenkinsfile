pipeline {
    agent any

    stages {
        stage ('Clone from Github') {
            steps {
                git branch: 'feature/build',
                url: 'git@github.com:atwright147/contact-book-orch.git',
                credentialsId: 'github-ssh--contact-book-orch'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install' 
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
                sh './generateScriptStartup.js development'
                sh './generateScriptMigrations.js development'
            }
        }
        stage ('Deploy to web01') {
            steps {
                sshagent (credentials: ['balance-web-servers']) {
                    sh 'ssh andy@balance-web01 rm -rf /var/www/temp_deploy/dist/'
                    sh 'ssh andy@balance-web01 mkdir -p /var/www/temp_deploy'
                    sh 'scp -r dist andy@balance-web01:/var/www/temp_deploy/dist/'
                    sh 'ssh andy@balance-web01 "rm -rf /var/www/node/ && mv /var/www/temp_deploy/dist/ /var/www/node/"'
                }
            }
        }
        stage ('Deploy to web02') {
            steps {
                sshagent (credentials: ['balance-web-servers']) {
                    sh 'ssh andy@balance-web02 rm -rf /var/www/temp_deploy/dist/'
                    sh 'ssh andy@balance-web02 mkdir -p /var/www/temp_deploy'
                    sh 'scp -r dist andy@balance-web02:/var/www/temp_deploy/dist/'
                    sh 'ssh andy@balance-web02 "rm -rf /var/www/node/ && mv /var/www/temp_deploy/dist/ /var/www/node/"'
                }
            }
        }
    }
}
