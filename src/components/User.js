function User ({name, surname, isLoggedIn, age}) {
    return <h1>{isLoggedIn ? `${name} ${surname} ${age}` : "Giriş Yapmadınız."}</h1>;
}

export default User;

