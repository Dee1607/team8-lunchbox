#Author: Janvi Patel
#Description: This is AWS lambda trigger to insert feedback entry into table

import json
import boto3
import random

def lambda_handler(event, context):
    # Store the data into json format
    data = json.loads(event['body'])

    # Connection with DynamoDb
    db = boto3.resource('dynamodb')

    # Connecting to testimonials table
    table = db.Table('testimonials')

    # Setting up content from the data provided by user
    content = data['data']

    # put the feedback, id, image, name into the table
    table.put_item(Item={
        'feedback': content,
        'id': 4,
        'Image': 'https://console.aws.amazon.com/console/home?region=us-east-1#',
        'name': 'Varun Patel'
    })

    # returns 200 once successfully entered into database
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
    }