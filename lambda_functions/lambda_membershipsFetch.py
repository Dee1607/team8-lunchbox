#Author: Janvi Patel
#Description: This is AWS lambda trigger to fetch all the memberships from the table

import json
import boto3
import random
import decimal


def lambda_handler(event, context):
    # Connection with DynamoDb
    db = boto3.resource('dynamodb')

    # Connecting to membership table
    table = db.Table('membership')

    # fetched all the entries from the table
    tab = table.scan()['Items']

    # Storing membership details into output list
    output = []
    for item in tab:
        output.append(
            {"id": str(item["id"]), "name": item["name"], "detail1": item["detail1"], "detail2": item["detail2"],
             "detail3": item["detail3"], "price": str(item["price"]), "URL": item["URL"]})

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
