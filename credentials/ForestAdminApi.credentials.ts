import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ForestAdminApi implements ICredentialType {
	name = 'forestAdminApi';
	displayName = 'Forest Admin API';
	properties: INodeProperties[] = [
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.forestadmin.com',
			url: '',
		},
	};
}