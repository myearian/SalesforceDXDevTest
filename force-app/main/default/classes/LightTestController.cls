public with sharing class LightTestController {
	@AuraEnabled
	public static String findAllPolicies() {
		return 'TestPolicy';
	}

}
