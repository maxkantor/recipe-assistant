import { defineBackend } from '@aws-amplify/backend';
import { auth } from '@aws-amplify/backend-auth';
import { data } from '@aws-amplify/backend-data';

const backend = defineBackend({
  auth: auth({
    loginWith: {
      email: true, // enable email login
    },
  }),
  data: data({
    models: {
      Recipe: {
        fields: {
          id: { type: 'ID', required: true },
          title: { type: 'String', required: true },
          ingredients: { type: 'String', required: true },
          steps: { type: 'String', required: true },
          imageUrl: { type: 'String' },
          owner: { type: 'String', authorization: 'owner' },
        },
        authorization: {
          allow: ['owner'], // only the creator can edit/delete
        },
      },
    },
  }),
});

export default backend;
