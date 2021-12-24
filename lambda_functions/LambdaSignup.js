import * as AWSCognito from 'amazon-cognito-identity-js';

exports.handler = async (event) => {
    var poolData = {
    UserPoolId :'us-east-1_WKujMcOPr',
    ClientId :'2d334oi6mum4onrasl6k64tauq',
    };
    
    var userPool = new AWSCognito.CognitoUserPool(poolData);

var attributeList = [];

var dataUser = {

    Name : 'name',
    Value : event.name
}


var dataPassword = {

    Name : 'password',
    Value : event.password
}


var dataEmail = {
    Name : 'email',
    Value : event.email
};

var dataGender = {
    Name : 'gender',
    Value : event.gender
};
var dataAllergies = {
    Name : 'custom:Allergies',
    Value : 'Peanuts'
};
var dataHeight = {
    Name : 'custom:Height',
    Value : '5.11'
};
var dataWeight = {
    Name : 'custom:Weight',
    Value : '70'
};

var dataDisease = {
    Name : 'custom:Disease',
    Value : 'Diabetes'
};




var attributeEmail = new AWSCognito.CognitoUserAttribute(dataEmail);
var attributeGender = new AWSCognito.CognitoUserAttribute(dataGender);
var attributeAllergies = new AWSCognito.CognitoUserAttribute(dataAllergies);
var attributeWeight = new AWSCognito.CognitoUserAttribute(dataWeight);
var attributeHeight = new AWSCognito.CognitoUserAttribute(dataHeight);
var attributeDisease = new AWSCognito.CognitoUserAttribute(dataDisease);
attributeList.push(attributeEmail);
attributeList.push(attributeGender);
attributeList.push(attributeAllergies);
attributeList.push(attributeHeight);
attributeList.push(attributeWeight);
attributeList.push(attributeDisease);

userPool.signUp(dataUser.Value, dataPassword.Value, attributeList, null, function(err, result){
    if (err) {
        console.log(err);
        return err;
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});
};
