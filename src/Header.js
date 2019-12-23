
import { Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width

const header = (title) => {  
    return {
        title,  
        headerStyle: {  
            backgroundColor: '#0E71FF',  
        },  
        headerTintColor: '#ffffff',  
        headerTitleStyle: {  
            fontWeight: 'bold', 
            width: WIDTH - 75,
        },  
    }
}

export default header