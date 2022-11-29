export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	var myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${query.userToken}`);
	myHeaders.append('Content-Type', 'application/json');

	var graphql = JSON.stringify({
		query: `mutation ($solutionInstanceId: ID!, $enabled: Boolean!) {
  updateSolutionInstance(input: {
      solutionInstanceId: $solutionInstanceId,
      enabled: $enabled
  }) {
    solutionInstance {
      id
      name
      enabled
      created
      authValues {
        externalId
        authId
      }
      configValues {
        externalId
        value
      }     
      workflows {
        edges{
          node {
            id
            sourceWorkflowName
            sourceWorkflowId
            triggerUrl            
          }
        }
      }
    }
  }
}`,
		variables: {
			solutionInstanceId: `${query.solutionInstanceId}`,
			enabled: query.enabled === 'true' ? true : false,
		},
	});

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: graphql,
		redirect: 'follow',
	};

	await fetch('https://tray.io/graphql', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			console.log(result);
		})
		.catch((error) => console.log('error', error));
	return 'Success';
});
