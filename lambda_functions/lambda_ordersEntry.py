#Author: Deep Patel
#Description: This is AWS lambda trigger to enter the order values into table

import json
import boto3
import random


def lambda_handler(event, context):
    # Store the data into json format
    data = json.loads(event['body'])

    # Connection with DynamoDb
    db = boto3.resource('dynamodb')

    # Connecting to feedback table
    table = db.Table('order')

    # Storing the content
    content = data['data']
    itemid = content['id']
    qty = int(data['qty'])
    price = int(content['price'])
    name = content['name']

    # Note the list will be automatically reset to null once the payment status is successful
    # Append item id provided customer id
    update_itemId = table.update_item(
        Key={
            'id': data['customerid'],
        },

        UpdateExpression="SET item_ids = list_append(item_ids, :itemid) ",
        ExpressionAttributeValues={
            ":itemid": [itemid]
        }
    )

    # Append qantity list provided customer id
    update_qtyList = table.update_item(
        Key={
            'id': data['customerid'],
        },

        UpdateExpression="SET qty_list = list_append(qty_list, :qty)",
        ExpressionAttributeValues={
            ":qty": [qty]
        }
    )

    # Append cost per item provided customer id
    update_costPerItemList = table.update_item(
        Key={
            'id': data['customerid'],
        },

        UpdateExpression="SET cost_per_item = list_append(cost_per_item, :price)",
        ExpressionAttributeValues={
            ":price": [price]
        }
    )

    # Append item name provided customer id
    update_nameList = table.update_item(
        Key={
            'id': data['customerid'],
        },

        UpdateExpression="SET name_list = list_append(name_list, :name)",
        ExpressionAttributeValues={
            ":name": [name]
        }
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
