import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstname, lastname, filename) {
  const signUpPromise = signUpUser(firstname, lastname);
  const uploadPromise = uploadPhoto(filename);

  const result = await Promise.allSettled([signUpPromise, uploadPromise]);
  console.log(result);

  return result.map(({ status, value, reason }) => ({
    status,
    value: status === 'fulfilled' ? value : reason,
  }));
}
