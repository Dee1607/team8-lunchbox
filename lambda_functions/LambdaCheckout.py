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
    print(scan)  
    
    table2 = db.Table('previousOrders')

    update_itemId = table2.update_item(
                    Key={
                        'id': 0,
                    },
                    
                    UpdateExpression = "SET item_ids = list_append(item_ids,:itemid)",
                    ExpressionAttributeValues = {
                      ":itemid" : scan["item_ids"]
                    }
                    
    )
    delete_itemId = table1.update_item(
                    Key={
                        'id': 0,
                    },
                    
                    UpdateExpression = "SET item_ids = :itemid",
                    ExpressionAttributeValues = {
                      ":itemid" : []
                    }
                    
    )
    
    update_costperitem = table2.update_item(
                    Key={
                        'id': 0,
                    },
                    
                    UpdateExpression = "SET cost_per_item = list_append(cost_per_item,:costperitem)",
                    ExpressionAttributeValues = {
                      ":costperitem" : scan["cost_per_item"]
                    }
                    
    )
    
    delete_costperitem = table1.update_item(
                    Key={
                        'id': 0,
                    },
                    
                    UpdateExpression = "SET cost_per_item = :costperitem",
                    ExpressionAttributeValues = {
                      ":costperitem" : []
                    }
                    
    )
    
    update_namelist = table2.update_item(
                    Key={
                        'id': 0,
                    },
                    
                    UpdateExpression = "SET name_list = list_append(name_list,:namelist)",
                    ExpressionAttributeValues = {
                      ":namelist" : scan["name_list"]
                    }
                    
    )
    delete_namelist = table1.update_item(
                    Key={
                        'id': 0,
                    },
                    
                    UpdateExpression = "SET name_list = :namelist",
                    ExpressionAttributeValues = {
                      ":namelist" : []
                    }
                    
    )
    
    update_qtylist = table2.update_item(
                    Key={
                        'id': 0,
                    },
                    
                    UpdateExpression = "SET qty_list = list_append(qty_list,:qtylist)",
                    ExpressionAttributeValues = {
                      ":qtylist" : scan["qty_list"]
                    }
                    
    )
    
    delete_qtylist = table.update_item(
                    Key={
                        'id': 0,
                    },
                    
                    UpdateExpression = "SET qty_list = :qtylist",
                    ExpressionAttributeValues = {
                      ":qtylist" : []
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

