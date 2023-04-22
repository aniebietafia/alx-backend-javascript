import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.allSettled([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(data[0].value.body, data[1].value.firstName, data[1].value.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
