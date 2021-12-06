#Author: Deep Patel
#Description: This is AWS lambda trigger to fetch from order table and calcualte total bill value

import json
import boto3
import random
import decimal


def lambda_handler(event, context):
    # Store the data into json format
    data = json.loads(event['body'])

    # Connection with DynamoDb
    db = boto3.resource('dynamodb')

    # Connecting to order table
    ordertable = db.Table('order')

    # Fetch all data from order table
    ordertab = ordertable.scan()['Items']

    # Calculate Bill total when customer id is matched
    total = 0
    for item in ordertab:
        if str(item["customer_id"]) == str(data['data']):
            for i, j in zip(item["cost_per_item"], item["qty_list"]):
                total = total + int(i) * int(j)

    # Fetch all data from the table
    ordertab = ordertable.scan()['Items']

    # Store the details to output list when customer id is matched
    output = []
    for item in ordertab:
        if str(item["customer_id"]) == str(data['data']):
            output.append({"ordername": item["name_list"], "costperitem": str(item["cost_per_item"]),
                           "qty": str(item["qty_list"]), "total": total})

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

