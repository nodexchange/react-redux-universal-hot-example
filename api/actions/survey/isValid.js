export default function survey(req) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errors = {};
      let valid = true;
      // eslint-disable-next-line no-bitwise
      if (~['bobby@gmail.com', 'timmy@microsoft.com'].indexOf(req.body.email)) {
        errors.email = 'Email address already used';
        valid = false;
      }
      if (valid) {
        resolve();
      } else {
        reject(errors);
      }
    }, 1000);
  });
}
