import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      const { body } = data[0].value;
      const { firstName } = data[1].value;
      const { lastName } = data[1].value;
      console.log(`${body}, ${firstName}, ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
