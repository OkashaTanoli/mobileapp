const Initial = {
    Blood:'',
    Province:'',
    City:'',
    userData:{},
    LoginError:'',
    bloodData:null,
    totalUsers:'...',
    fillError:'Please fill all fields'
}

export default (state = Initial, action) => {
    switch (action.type) {
        case 'BloodType':
            return ({
                ...state,
                Blood:action.payload
        })
        
        case 'Province':
            return ({
                ...state,
                Province:action.payload
        })

        case 'City':
            return ({
                ...state,
                City:action.payload
        })
        
        case 'userData':
            return ({
                ...state,
                userData:action.payload
        })

        case 'bloodData':
            return ({
                ...state,
                bloodData:action.payload
        })

        case 'totalUsers':
            return ({
                ...state,
                totalUsers:action.payload
        })

        case 'LoginError':
            return ({
                ...state,
                LoginError:action.payload
        })

        case 'FillError':
            return ({
                ...state,
                fillError:action.payload
        })

    }
    return state;
}