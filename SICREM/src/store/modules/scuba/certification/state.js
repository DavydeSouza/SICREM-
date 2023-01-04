export default {
	certification: null,
	company: null,
	system: null,
	types: [
		{
			code: '801',
			type: 'cssm',
			maxDepth: 20,
			name: 'Profundidades até 20 metros'
		},
		{
			code: '802',
			type: 'cssm',
			maxDepth: 30,
			name:
				'Profundidades até 30 metros sem necessidade de parada para descompressão'
		},
		{
			code: '802',
			type: 'cssm',
			maxDepth: 30,
			name:
				'Profundidades até 30 metros com necessidade de parada para descompressão'
		},
		{
			code: '803',
			type: 'cssm',
			maxDepth: 50,
			name: 'Profundidades entre 30 e 50 metros'
		},
		{
			code: '804',
			type: 'cssm',
			maxDepth: 90,
			name: 'Profundidades entre 50 e 90 metros'
		},
		{
			code: '805',
			type: 'cssm',
			maxDepth: 300,
			name: 'Profundidades entre 90 e 300 metros'
		}
	],
	certifications: []
}
