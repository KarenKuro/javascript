pipeline {
    agent any 
    triggers {
    GenericTrigger(
        genericVariables: [
            [defaultValue: '', key: 'base', regexpFilter: '', value: '$.ref'],
            ],
     causeString: 'Triggered on $ref',
     token: 'KKK',
     tokenCredentialId: '' )
  }
    stages {
        stage ("hello"){
            steps {
                echo "Hello world"
            }
        }
    }
}
