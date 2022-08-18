function getPasswordChecker(password) {
    return (function Checker(userpassword) {
        if (password === userpassword) {
            return (true)
        } else { return (false) }
    })
}

let userpass = getPasswordChecker('qwertyu');

console.log(userpass('asw'));
console.log(userpass('gthfecr'));
console.log(userpass('qwertyu'));