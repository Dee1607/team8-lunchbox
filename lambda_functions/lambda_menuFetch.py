#Author: Deep Patel
#Description: This is AWS lambda trigger to fetch from menu table

import json
import boto3
import random
import decimal


def lambda_handler(event, context):
    # Store the data into json format
    data = json.loads(event['body'])

    # Connection with DynamoDb
    db = boto3.resource('dynamodb')

    # Item table connection
    table = db.Table('item')

    # fetching all the entries from item table
    tab = table.scan()['Items']
    output = []

    # to store output into list
    for item in tab:
        output.append(
            {"id": str(item["id"]), "URL": item["image_url"], "name": item["name"], "nutrition": item["nutrition"],
             "type": item["type"], "price": str(item["price"])})

    # returns 200 once successfully entered into database
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(output)
    }
