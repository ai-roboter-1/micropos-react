/* tslint:disable */
/* eslint-disable */
/**
 * Cart
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Editable fields of Item
 * @export
 * @interface ItemFiled
 */
export interface ItemFiled {
    /**
     * 
     * @type {number}
     * @memberof ItemFiled
     */
    quantity: number;
}

export function ItemFiledFromJSON(json: any): ItemFiled {
    return ItemFiledFromJSONTyped(json, false);
}

export function ItemFiledFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemFiled {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quantity': json['quantity'],
    };
}

export function ItemFiledToJSON(value?: ItemFiled | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quantity': value.quantity,
    };
}

