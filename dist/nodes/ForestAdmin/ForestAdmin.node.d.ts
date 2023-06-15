import { INodeType, INodeTypeDescription, IWebhookFunctions, IWebhookResponseData } from 'n8n-workflow';
export declare class ForestAdmin implements INodeType {
    description: INodeTypeDescription;
    webhook(this: IWebhookFunctions): Promise<IWebhookResponseData>;
}
