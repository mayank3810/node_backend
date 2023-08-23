const registerUser = async () => {
    const payload = { email: 'mayank@distinctcloud.io', role: 'admin' };
    let token = await generateApiJWT({ payload });
}