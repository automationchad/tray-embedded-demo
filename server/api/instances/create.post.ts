export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	var myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${query.userToken}`);
	myHeaders.append('Content-Type', 'application/json');

	var graphql = JSON.stringify({
		query:
			'mutation ($solutionId: ID!, $instanceName: String!){\n   createSolutionInstance(input: {\n       solutionId: $solutionId\n       instanceName: $instanceName\n   }) {\n     solutionInstance {\n       id\n       name\n       enabled\n       authValues{\n           authId\n           externalId\n       }\n     }\n   }\n }',
		variables: {
			solutionId: `${query.solutionId}`,
			instanceName: `${query.solutionId.slice(0,8)}`,
		},
	});

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: graphql,
		redirect: 'follow',
	};
	let res;
	await fetch('https://tray.io/graphql', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			res = JSON.parse(result);
			console.log(result);
		})
		.catch((error) => console.log('error', error));
	res = res.data.createSolutionInstance.solutionInstance;
	return res;
});
