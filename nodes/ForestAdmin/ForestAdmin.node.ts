import {
	INodeType,
	INodeTypeDescription
} from 'n8n-workflow';

export class ForestAdmin implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Forest Admin',
		name: 'ForestAdmin',
		icon: 'file:ForestAdmin.svg',
		group: ['trigger'],
		version: 1,
		description: 'Executes the workflow when an action is triggered on Forest Admin',
		eventTriggerDescription: 'Waiting for you to call the Test URL',
		activationMessage: 'You can now make calls to your production webhook URL.',
		defaults: {
			name: 'Forest Admin',
		},
		inputs: ['main'],
		outputs: ['main'],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [],
	};
}
