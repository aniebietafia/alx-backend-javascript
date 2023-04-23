import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoData = await uploadPhoto();
    const userData = await createUser();
    return {
      photo: photoData,
      user: userData,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
