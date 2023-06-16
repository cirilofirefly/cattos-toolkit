export default () => {

    const errorMessage = (key, error) => {

        if(key == 'password' && error.includes('weak-password'))
            return 'Your password is at least 6 characters'

        if(key == 'email') {
            if(error.includes('invalid-email')) 
                return 'Your email is invalid.'
                
            if(error.includes('email-already-in-use')) 
                return 'Email is already exists.'
        }
        
        return ''
    }

    return {
        errorMessage
    }
}