#Author: Janvi Patel
#Description: This is AWS lambda trigger to enter membership value to the usertable

import json
import boto3
import random

def lambda_handler(event, context):
    # Store the data into json format
    data = json.loads(event['body'])

    # Connection with DynamoDb
    db = boto3.resource('dynamodb')

    # Connecting to user table
    table = db.Table('user')

    # storing the content sent by the user to data
    content = data['data']

    # Updating the membership name for a particular user
    response = table.update_item(
        Key={
            'id': 1
        },
        UpdateExpression='SET membershipid = :content',
        ExpressionAttributeValues={':content': content},
    )

    # returns 200 once successfully entered into database
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
    }