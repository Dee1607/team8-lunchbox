#Author: Janvi Patel

import json
import boto3
import random
import decimal

def lambda_handler(event, context):
    # TODO implement

    print(event);
    #Store the data into json format
    data = json.loads(event['body'])
    print(data)
    
    #Connection with DynamoDb
    db = boto3.resource('dynamodb')
    
    #Connecting to feedback table
    ordertable = db.Table('previousOrders')

    ordertab = ordertable.scan()['Items']
    
    price = ""
    qty = ""
    for item in ordertab:
        if str(item["id"]) == str(data['data']):
            print(item["cost_per_item"])
            print(item["qty_list"])
            for i,j in zip(item["cost_per_item"], item["qty_list"]):
                price = price + str(i) + ","
                qty = qty + str(j) + ","
                
    ordertab = ordertable.scan()
      
    output =[]
    for item in ordertab['Items']:
        if str(item["id"]) == str(data['data']):
            output.append({"ordername": item["name_list"],  "costperitem": price,  "qty":qty})

    print("output")
    print(output)
    
    #returns 200 once successfully entered into database
    return {
        'statusCode':200 ,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body':json.dumps(output)
    }

 