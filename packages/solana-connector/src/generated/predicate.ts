export const predicates = {
  'verification-predicate': {
    abi: {
      encoding: '1',
      types: [
        {
          typeId: 0,
          type: 'b256',
          components: null,
          typeParameters: null,
        },
        {
          typeId: 1,
          type: 'bool',
          components: null,
          typeParameters: null,
        },
        {
          typeId: 2,
          type: 'u64',
          components: null,
          typeParameters: null,
        },
      ],
      functions: [
        {
          inputs: [
            {
              name: 'witness_index',
              type: 2,
              typeArguments: null,
            },
          ],
          name: 'main',
          output: {
            name: '',
            type: 1,
            typeArguments: null,
          },
          attributes: null,
        },
      ],
      loggedTypes: [],
      messagesTypes: [],
      configurables: [
        {
          name: 'SIGNER',
          configurableType: {
            name: '',
            type: 0,
            typeArguments: null,
          },
          offset: 2568,
        },
      ],
    },
    bytecode: base64ToUint8Array(
      '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',
    ),
  },
};

function base64ToUint8Array(base64: string) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
