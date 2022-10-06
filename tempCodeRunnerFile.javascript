let attributes = [
	{
		id: 0,
		name: 'Size',
		position: 0,
		visible: true,
		variation: true,
		options: ['6', '7', '8'],
	},
	{
		id: 0,
		name: 'Color',
		position: 1,
		visible: true,
		variation: true,
		options: ['red', 'blue', 'black'],
	},
];

const options = attributes.map((o) => {
	return {
		name: o.name,
		options: o.options,
	};
});

console.log(options);