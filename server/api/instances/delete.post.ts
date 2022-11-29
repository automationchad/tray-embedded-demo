export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	var myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${query.userToken}`);
	myHeaders.append('Content-Type', 'application/json');

	var graphql = JSON.stringify({
		query: `mutation ($solutionInstanceId: ID!){
  removeSolutionInstance(input: {solutionInstanceId: $solutionInstanceId}) {
   clientMutationId
 }
}`,
		variables: {
			solutionInstanceId: `${query.solutionInstanceId}`,
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
