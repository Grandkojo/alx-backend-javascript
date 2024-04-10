import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  const [signUpResult, uploadResult] = await Promise.allSettled([signUp, upload]);

  return [signUpResult, uploadResult].map(({ status, value }) => ({
    status,
    value: status === 'fulfilled' ? value : undefined,
  }));
}
