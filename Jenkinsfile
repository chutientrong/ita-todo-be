pipeline {
  agent any

  options {
    timeout(time: 10, unit: 'MINUTES')
  }

  environment {
    ARTIFACT_ID = "chutientrong/ita-image:v1.0.0"
  }

  stages {
    stage('Build') {
      steps {
        script {
          dockerImage = docker.build "${env.ARTIFACT_ID}"
        }
      }
    }

    stage('Login to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'DockerHubTest', usernameVariable:  'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
          sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
        }
      }
    }

    stage('Publish to Docker Hub') {
      steps {
        script {
            dockerImage.push()
        }
      }
    }
  }
}
// pipeline {
//     agent {
//         docker {
//             image 'node:18-alpine' 
//             args '-p 3000:3000' 
//         }
//     }

//     environment {
//         DOCKER_REGISTRY = 'docker.io'
//         DOCKER_REPO = 'chutientrong/ita-image'
//         APP_NAME = 'ita-app'
//         KUBE_NAMESPACE = 'default'
//         HELM_CHART_NAME = 'node-chart'
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 script {
//                     checkout scm
//                 }
//             }
//         }
//        stage('Test ') {
//             steps {
//                 sh 'npm test'
//             }
//         }
//         stage('Build ') {
//             steps {
//                 sh 'npm run build'
//             }
//         }
//         stage('Build Image') {
//             steps {
//                 sh 'docker build -t chutientrong/ita-image:v1.0.0 .'
//             }
//         }
      
//         // stage('Build and Push Docker Image') {
//         //     steps {
//         //         withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
//         //             sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
//         //             sh 'docker tag $DOCKER_REPO:v1.0.1 $DOCKER_REPO:$BUILD_NUMBER'
//         //             sh 'docker push $DOCKER_REPO:$BUILD_NUMBER'
                    
//         //         }
//         //     }
//         // }

//         // stage('Update Helm Values') {
//         //     steps {
//         //         script {
//         //             // Update the image tag in the values.yaml file of your Helm chart
//         //             sh "sed -i 's|imageTag:.*|imageTag: ${BUILD_NUMBER}|' ${WORKSPACE}/node-chart/values.yaml"
//         //         }
//         //     }
//         // }

//         // stage('Zip Helm Chart') {
//         //     steps {
//         //         script {
//         //             // Zip the Helm chart
//         //             sh "cd ${WORKSPACE} && tar -czf ${WORKSPACE}/${APP_NAME}-${BUILD_NUMBER}.tgz ."
//         //         }
//         //     }
//         // }

//         // stage('Push Helm Chart to Registry') {
//         //     steps {
//         //         script {
//         //             // Push the Helm chart to a registry
//         //             docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker_cred') {
//         //                 def dockerImage = docker.image("${DOCKER_REGISTRY}/${DOCKER_REPO}/${APP_NAME}:${BUILD_NUMBER}")
//         //                 dockerImage.push()
//         //                 sh "docker tag ${DOCKER_REGISTRY}/${DOCKER_REPO}/${APP_NAME}:${BUILD_NUMBER} ${DOCKER_REGISTRY}/${DOCKER_REPO}/${APP_NAME}:latest"
//         //                 sh "docker push ${DOCKER_REGISTRY}/${DOCKER_REPO}/${APP_NAME}:latest"
//         //             }
//         //         }
//         //     }
//         // }
//     }
// }
