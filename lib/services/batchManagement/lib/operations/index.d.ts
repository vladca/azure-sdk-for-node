/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Account
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the BatchManagementClient.
 */
export interface Account {

    /**
     * Creates a new Batch account with the specified parameters. Existing
     * accounts cannot be updated with this API and should instead be updated
     * with the Update Batch Account API.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the new Batch account.
     * 
     * @param {string} accountName A name for the Batch account which must be
     * unique within the region. Batch account names must be between 3 and 24
     * characters in length and must use only numbers and lowercase letters. This
     * name is used as part of the DNS name that is used to access the Batch
     * service in the region in which the account is created. For example:
     * http://accountname.region.batch.azure.com/.
     * 
     * @param {object} parameters Additional parameters for account creation.
     * 
     * @param {string} [parameters.location] The region in which the account is
     * created.
     * 
     * @param {object} [parameters.tags] The user specified tags associated with
     * the account.
     * 
     * @param {object} [parameters.autoStorage] The properties related to auto
     * storage account.
     * 
     * @param {string} [parameters.autoStorage.storageAccountId] The resource id
     * of the storage account to be used for auto storage account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(resourceGroupName: string, accountName: string, parameters: models.BatchAccountCreateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AccountResource>): void;
    create(resourceGroupName: string, accountName: string, parameters: models.BatchAccountCreateParameters, callback: ServiceCallback<models.AccountResource>): void;

    /**
     * Creates a new Batch account with the specified parameters. Existing
     * accounts cannot be updated with this API and should instead be updated
     * with the Update Batch Account API.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the new Batch account.
     * 
     * @param {string} accountName A name for the Batch account which must be
     * unique within the region. Batch account names must be between 3 and 24
     * characters in length and must use only numbers and lowercase letters. This
     * name is used as part of the DNS name that is used to access the Batch
     * service in the region in which the account is created. For example:
     * http://accountname.region.batch.azure.com/.
     * 
     * @param {object} parameters Additional parameters for account creation.
     * 
     * @param {string} [parameters.location] The region in which the account is
     * created.
     * 
     * @param {object} [parameters.tags] The user specified tags associated with
     * the account.
     * 
     * @param {object} [parameters.autoStorage] The properties related to auto
     * storage account.
     * 
     * @param {string} [parameters.autoStorage.storageAccountId] The resource id
     * of the storage account to be used for auto storage account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginCreate(resourceGroupName: string, accountName: string, parameters: models.BatchAccountCreateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AccountResource>): void;
    beginCreate(resourceGroupName: string, accountName: string, parameters: models.BatchAccountCreateParameters, callback: ServiceCallback<models.AccountResource>): void;

    /**
     * Updates the properties of an existing Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the account.
     * 
     * @param {object} parameters Additional parameters for account update.
     * 
     * @param {object} [parameters.tags] The user specified tags associated with
     * the account.
     * 
     * @param {object} [parameters.autoStorage] The properties related to auto
     * storage account.
     * 
     * @param {string} [parameters.autoStorage.storageAccountId] The resource id
     * of the storage account to be used for auto storage account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    update(resourceGroupName: string, accountName: string, parameters: models.BatchAccountUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AccountResource>): void;
    update(resourceGroupName: string, accountName: string, parameters: models.BatchAccountUpdateParameters, callback: ServiceCallback<models.AccountResource>): void;

    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account to be deleted.
     * 
     * @param {string} accountName The name of the account to be deleted.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account to be deleted.
     * 
     * @param {string} accountName The name of the account to be deleted.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets information about the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AccountResource>): void;
    get(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.AccountResource>): void;

    /**
     * Gets information about the Batch accounts associated with the subscription.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BatchAccountListResult>): void;
    list(callback: ServiceCallback<models.BatchAccountListResult>): void;

    /**
     * Gets information about the Batch accounts associated within the specified
     * resource group.
     *
     * @param {string} resourceGroupName The name of the resource group whose
     * Batch accounts to list.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroup(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BatchAccountListResult>): void;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.BatchAccountListResult>): void;

    /**
     * Synchronizes access keys for the auto storage account configured for the
     * specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Regenerates the specified account key for the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the account.
     * 
     * @param {string} keyName The type of account key to regenerate. Possible
     * values include: 'Primary', 'Secondary'
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    regenerateKey(resourceGroupName: string, accountName: string, keyName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BatchAccountRegenerateKeyResult>): void;
    regenerateKey(resourceGroupName: string, accountName: string, keyName: string, callback: ServiceCallback<models.BatchAccountRegenerateKeyResult>): void;

    /**
     * Lists the account keys for the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listKeys(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BatchAccountListKeyResult>): void;
    listKeys(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.BatchAccountListKeyResult>): void;

    /**
     * Gets information about the Batch accounts associated with the subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BatchAccountListResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.BatchAccountListResult>): void;

    /**
     * Gets information about the Batch accounts associated within the specified
     * resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BatchAccountListResult>): void;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.BatchAccountListResult>): void;
}

/**
 * @class
 * ApplicationOperations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the BatchManagementClient.
 */
export interface ApplicationOperations {

    /**
     * Activates the specified application package.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {string} id The id of the application.
     * 
     * @param {string} version The version of the application to activate.
     * 
     * @param {string} format The format of the application package binary file.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    activateApplicationPackage(resourceGroupName: string, accountName: string, id: string, version: string, format: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    activateApplicationPackage(resourceGroupName: string, accountName: string, id: string, version: string, format: string, callback: ServiceCallback<void>): void;

    /**
     * Adds an application to the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {string} applicationId The id of the application.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.parameters] The parameters for the request.
     * 
     * @param {boolean} [options.parameters.allowUpdates] A value indicating
     * whether packages within the application may be overwritten using the same
     * version string.
     * 
     * @param {string} [options.parameters.displayName] The display name for the
     * application.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    addApplication(resourceGroupName: string, accountName: string, applicationId: string, options: { parameters? : models.AddApplicationParameters, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Application>): void;
    addApplication(resourceGroupName: string, accountName: string, applicationId: string, callback: ServiceCallback<models.Application>): void;

    /**
     * Deletes an application.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {string} applicationId The id of the application.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteApplication(resourceGroupName: string, accountName: string, applicationId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteApplication(resourceGroupName: string, accountName: string, applicationId: string, callback: ServiceCallback<void>): void;

    /**
     * Gets information about the specified application.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {string} applicationId The id of the application.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getApplication(resourceGroupName: string, accountName: string, applicationId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Application>): void;
    getApplication(resourceGroupName: string, accountName: string, applicationId: string, callback: ServiceCallback<models.Application>): void;

    /**
     * Updates settings for the specified application.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {string} applicationId The id of the application.
     * 
     * @param {object} parameters The parameters for the request.
     * 
     * @param {boolean} [parameters.allowUpdates] A value indicating whether
     * packages within the application may be overwritten using the same version
     * string.
     * 
     * @param {string} [parameters.defaultVersion] The package to use if a client
     * requests the application but does not specify a version.
     * 
     * @param {string} [parameters.displayName] The display name for the
     * application.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    updateApplication(resourceGroupName: string, accountName: string, applicationId: string, parameters: models.UpdateApplicationParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    updateApplication(resourceGroupName: string, accountName: string, applicationId: string, parameters: models.UpdateApplicationParameters, callback: ServiceCallback<void>): void;

    /**
     * Creates an application package record.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {string} applicationId The id of the application.
     * 
     * @param {string} version The version of the application.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    addApplicationPackage(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AddApplicationPackageResult>): void;
    addApplicationPackage(resourceGroupName: string, accountName: string, applicationId: string, version: string, callback: ServiceCallback<models.AddApplicationPackageResult>): void;

    /**
     * Deletes an application package record and its associated binary file.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {string} applicationId The id of the application.
     * 
     * @param {string} version The version of the application to delete.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteApplicationPackage(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteApplicationPackage(resourceGroupName: string, accountName: string, applicationId: string, version: string, callback: ServiceCallback<void>): void;

    /**
     * Gets information about the specified application package.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {string} applicationId The id of the application.
     * 
     * @param {string} version The version of the application.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getApplicationPackage(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GetApplicationPackageResult>): void;
    getApplicationPackage(resourceGroupName: string, accountName: string, applicationId: string, version: string, callback: ServiceCallback<models.GetApplicationPackageResult>): void;

    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     * 
     * @param {string} accountName The name of the Batch account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.maxresults] The maximum number of items to return
     * in the response.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(resourceGroupName: string, accountName: string, options: { maxresults? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListApplicationsResult>): void;
    list(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.ListApplicationsResult>): void;

    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListApplicationsResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.ListApplicationsResult>): void;
}

/**
 * @class
 * Subscription
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the BatchManagementClient.
 */
export interface Subscription {

    /**
     * Gets the Batch service quotas for the specified suscription.
     *
     * @param {string} locationName The desired region for the quotas.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getSubscriptionQuotas(locationName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SubscriptionQuotasGetResult>): void;
    getSubscriptionQuotas(locationName: string, callback: ServiceCallback<models.SubscriptionQuotasGetResult>): void;
}
