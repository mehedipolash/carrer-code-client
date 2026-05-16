export const jobsCreatedByPromise = (email) => {
  return fetch(`https://career-code-server-blond.vercel.app/jobs/applications?email=${email}`,{credentials: 'include'}).then(
    (res) => res.json(),
  );
};

