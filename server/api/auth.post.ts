export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	var myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${process.env.GQL_TOKEN}`);
	myHeaders.append('Content-Type', 'application/json');

	var graphql = JSON.stringify({
		query: `mutation ($userId: ID!) {
  generateAuthorizationCode( input: {
    userId: $userId
  }) {
    authorizationCode
  }
}`,
		variables: {
			userId: `${query.userId}`,
		},
	});
	var requestOptions = {
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

	res = res.data.generateAuthorizationCode;

	return res;
});
