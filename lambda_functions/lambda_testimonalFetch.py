#Author: Janvi Patel
#Description: This is AWS lambda trigger to fetch feedback from table

import json
import boto3
import random
import decimal


def lambda_handler(event, context):
    # Connection with DynamoDb
    db = boto3.resource('dynamodb')

    # Connecting to testimonial table
    table = db.Table('testimonials')

    # Fetching all the entries from the testimonial table
    tab = table.scan()['Items']
    output = []

    # store the details of each entry into output list
    for item in tab:
        output.append({"id": str(item["id"]), "feedback": item["feedback"], "name": item["name"], "URL": item["Image"]})

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
