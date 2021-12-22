#Author: Janvi Patel

import json
import boto3
import random
import decimal
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):
    
    #Store the data into json format
    data = json.loads(event['body'])

    #Connection with DynamoDb
    db = boto3.resource('dynamodb')
    
    #Item table connection
    table1 = db.Table('order')
    
    #fetching all the entries from item table
    scan = table1.scan(
                FilterExpression=Attr("id").eq(0) 
           )

    scan = scan['Items'][0]
    
    index = scan['qty_list'].index(3)
    print(index)
    
    

    delete_itemId = table1.update_item(
                    Key={
                        'id': 0,
                    },
                    
                    UpdateExpression = "SET #itemid[#index] = :''",
                    ExpressionAttributeName = {
                      "#itemid" : "item_ids",
                    },
                    ExpressionAttributeValues = {
                      "#index": index
                    }
                    
    )

    
 
    
                    
    #returns 200 once successfully entered into database
    return {
        'statusCode':200 ,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
    }

