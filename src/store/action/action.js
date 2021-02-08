import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SelectBlood = (BloodGrp) => {
    return (dispatch) => {
        dispatch({ type: 'BloodType', payload: BloodGrp })
    }
}

const SelectProvince = (province) => {
    return (dispatch) => {
        dispatch({ type: 'Province', payload: province })
    }
}

const SelectCityName = (city, navig) => {
    return (dispatch) => {
        dispatch({ type: 'City', payload: city })
        navig.navigate('searchblood')
    }
}

const SignUp = (data, props) => {
    return (dispatch) => {
        const dataEmail = data.email
        const emailsplit = dataEmail.split('')
        for (var i = 0; i < emailsplit.length; i++) {
            if (emailsplit[i] === "!") {
                emailsplit.splice(i, 1, 1)
            } else if (emailsplit[i] === '@') {
                emailsplit.splice(i, 1, 2)
            } else if (emailsplit[i] === '#') {
                emailsplit.splice(i, 1, 3)
            } else if (emailsplit[i] === '$') {
                emailsplit.splice(i, 1, 4)
            } else if (emailsplit[i] === '%') {
                emailsplit.splice(i, 1, 5)
            } else if (emailsplit[i] === '^') {
                emailsplit.splice(i, 1, 6)
            } else if (emailsplit[i] === '&') {
                emailsplit.splice(i, 1, 7)
            } else if (emailsplit[i] === '*') {
                emailsplit.splice(i, 1, 8)
            } else if (emailsplit[i] === '(') {
                emailsplit.splice(i, 1, 9)
            } else if (emailsplit[i] === ')') {
                emailsplit.splice(i, 1, 0)
            } else if (emailsplit[i] === '/') {
                emailsplit.splice(i, 1, 10)
            } else if (emailsplit[i] === '<') {
                emailsplit.splice(i, 1, 11)
            } else if (emailsplit[i] === '>') {
                emailsplit.splice(i, 1, 12)
            } else if (emailsplit[i] === '"') {
                emailsplit.splice(i, 1, 13)
            } else if (emailsplit[i] === "'") {
                emailsplit.splice(i, 1, 14)
            } else if (emailsplit[i] === "{") {
                emailsplit.splice(i, 1, 15)
            } else if (emailsplit[i] === "}") {
                emailsplit.splice(i, 1, 16)
            } else if (emailsplit[i] === ".") {
                emailsplit.splice(i, 1, 17)
            } else if (emailsplit[i] === "+") {
                emailsplit.splice(i, 1, 18)
            } else if (emailsplit[i] === "-") {
                emailsplit.splice(i, 1, 19)
            } else if (emailsplit[i] === "_") {
                emailsplit.splice(i, 1, 20)
            } else if (emailsplit[i] === "=") {
                emailsplit.splice(i, 1, 21)
            } else if (emailsplit[i] === "|") {
                emailsplit.splice(i, 1, 22)
            } else if (emailsplit[i] === "`") {
                emailsplit.splice(i, 1, 23)
            } else if (emailsplit[i] === ";") {
                emailsplit.splice(i, 1, 24)
            } else if (emailsplit[i] === ":") {
                emailsplit.splice(i, 1, 25)
            } else if (emailsplit[i] === "]") {
                emailsplit.splice(i, 1, 26)
            } else if (emailsplit[i] === "[") {
                emailsplit.splice(i, 1, 27)
            } else if (emailsplit[i] === "~") {
                emailsplit.splice(i, 1, 28)
            }
        }
        const joining = emailsplit.join('')

        auth()
            .createUserWithEmailAndPassword(data.email, data.pass)
            .then((val) => {
                database().ref("users/" + joining).set({ ...data, key: joining }).then(() => {
                    const jsonData = JSON.stringify(data)
                    AsyncStorage.setItem('data', jsonData)
                    props.navigation.navigate('main')
                }).catch((err) => {
                    console.log('error', err)
                });

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    }
}



const SignIn = (data, nav) => {
    return (dispatch) => {
        auth().signInWithEmailAndPassword(data.email, data.pass)
            .then((userCredential) => {
                var user = userCredential.user;
                user.email

                const dataEmail = user.email
                const emailsplit = dataEmail.split('')
                for (var i = 0; i < emailsplit.length; i++) {
                    if (emailsplit[i] === "!") {
                        emailsplit.splice(i, 1, 1)
                    } else if (emailsplit[i] === '@') {
                        emailsplit.splice(i, 1, 2)
                    } else if (emailsplit[i] === '#') {
                        emailsplit.splice(i, 1, 3)
                    } else if (emailsplit[i] === '$') {
                        emailsplit.splice(i, 1, 4)
                    } else if (emailsplit[i] === '%') {
                        emailsplit.splice(i, 1, 5)
                    } else if (emailsplit[i] === '^') {
                        emailsplit.splice(i, 1, 6)
                    } else if (emailsplit[i] === '&') {
                        emailsplit.splice(i, 1, 7)
                    } else if (emailsplit[i] === '*') {
                        emailsplit.splice(i, 1, 8)
                    } else if (emailsplit[i] === '(') {
                        emailsplit.splice(i, 1, 9)
                    } else if (emailsplit[i] === ')') {
                        emailsplit.splice(i, 1, 0)
                    } else if (emailsplit[i] === '/') {
                        emailsplit.splice(i, 1, 10)
                    } else if (emailsplit[i] === '<') {
                        emailsplit.splice(i, 1, 11)
                    } else if (emailsplit[i] === '>') {
                        emailsplit.splice(i, 1, 12)
                    } else if (emailsplit[i] === '"') {
                        emailsplit.splice(i, 1, 13)
                    } else if (emailsplit[i] === "'") {
                        emailsplit.splice(i, 1, 14)
                    } else if (emailsplit[i] === "{") {
                        emailsplit.splice(i, 1, 15)
                    } else if (emailsplit[i] === "}") {
                        emailsplit.splice(i, 1, 16)
                    } else if (emailsplit[i] === ".") {
                        emailsplit.splice(i, 1, 17)
                    } else if (emailsplit[i] === "+") {
                        emailsplit.splice(i, 1, 18)
                    } else if (emailsplit[i] === "-") {
                        emailsplit.splice(i, 1, 19)
                    } else if (emailsplit[i] === "_") {
                        emailsplit.splice(i, 1, 20)
                    } else if (emailsplit[i] === "=") {
                        emailsplit.splice(i, 1, 21)
                    } else if (emailsplit[i] === "|") {
                        emailsplit.splice(i, 1, 22)
                    } else if (emailsplit[i] === "`") {
                        emailsplit.splice(i, 1, 23)
                    } else if (emailsplit[i] === ";") {
                        emailsplit.splice(i, 1, 24)
                    } else if (emailsplit[i] === ":") {
                        emailsplit.splice(i, 1, 25)
                    } else if (emailsplit[i] === "]") {
                        emailsplit.splice(i, 1, 26)
                    } else if (emailsplit[i] === "[") {
                        emailsplit.splice(i, 1, 27)
                    } else if (emailsplit[i] === "~") {
                        emailsplit.splice(i, 1, 28)
                    }
                }
                const joining = emailsplit.join('')
                database()
                    .ref('users/' + joining)
                    .on('value', snapshot => {
                        // console.log('User data: ', snapshot.val());
                        AsyncStorage.setItem('data', JSON.stringify(snapshot.val()));
                        nav.navigate('main')
                    });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                dispatch({ type: 'LoginError', payload: errorMessage })
            });
    }
}


const GettingFromAsyncStorage = () => {
    return async (dispatch) => {
        try {
            const jsonValue = await AsyncStorage.getItem('data')
            const pureVal = JSON.parse(jsonValue)
            const first = pureVal.name.slice(0, 1)
            dispatch({ type: 'userData', payload: { ...pureVal, first } })
        } catch (e) {
            console.log('error', e)
        }

    }
}


const GettingFromFirebase = () => {
    return (dispatch) => {
        database()
            .ref('data')
            .on('value', snapshot => {
                Object.keys(snapshot.val());

                Object.values(snapshot.val());

                const obj = Object.entries(snapshot.val());
                dispatch({ type: 'bloodData', payload: obj })

                // AsyncStorage.setItem('bloodData', JSON.stringify(snapshot.val()));
            });
    }
}


// const GettingFromAsyncStorageForSearchBlood = () => {
//     return async (dispatch) => {
//         try {
//             const jsonValue = await AsyncStorage.getItem('bloodData')
//             const pureVal = JSON.parse(jsonValue)
//             dispatch({ type: 'bloodData', payload: pureVal})

//         } catch (e) {
//             console.log('error', e)
//         }

//     }
// }

const SendingDonation = (donation, navigation) => {
    return (dispatch) => {
        const dataKey = Math.random() * 94297789438793
        const fixing = Math.floor(dataKey)
        database().ref("data/" + fixing).set(donation).then((e) => {
            // console.log('dataSend')
            navigation.navigate('main')
        }).catch((err) => {
            console.log('error', err)
        });
    }
}


const SignOut = ( navigation) => {
    return (dispatch) => {
        auth()
            .signOut()
            .then(() => {
                navigation.navigate('Login')
            });

    }
}



const EmptyError =( )=>{
    return(dispatch) =>{
        dispatch({type:'LoginError',payload:''})
        // dispatch({type:'FillError',payload:''})
    }
}


const GettingTotalUsers =() =>{
    var a = 0
    return (dispatch)=>{
        database().ref('data').on('value', (snapshot) =>{
            snapshot.forEach(function(childSnap){
                a = a+1
            })
        })
        setTimeout(()=>{
            dispatch({type:'totalUsers',payload:a})
            a = 0
        },3000)
    }
}

export {
    SelectBlood,
    SelectProvince,
    SignUp,
    SignIn,
    GettingFromAsyncStorage,
    SendingDonation,
    GettingFromFirebase,
    SelectCityName,
    SignOut,
    EmptyError,
    GettingTotalUsers
}