#Author: Janvi Patel
#Description: This is AWS lambda trigger to enter meal plan details into table

import json
import boto3
import random


def lambda_handler(event, context):
    # Store the data into json format
    data = json.loads(event['body'])

    # Connection with DynamoDb
    db = boto3.resource('dynamodb')

    # Connecting to data table
    table = db.Table(data['table'])

    # storing the content provided by user
    content = data['data']

    # #put the id, item name, proice along with customerId into the table
    table.put_item(Item={
        'itemid': content['id'],
        'customerid': content['customerid'],
        'date': content['date'],
        'item': content['name'],
        'price': content['price'],
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
