export const MyApplicationsPromise = (email) => {
  return fetch(`https://career-code-server-blond.vercel.app/applications?email=${email}`,{credentials: 'include'}).then(
    (res) => res.json(),
  );
};
