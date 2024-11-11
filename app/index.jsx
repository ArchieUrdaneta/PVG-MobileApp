import {Link} from
import React from 'react'
import {view, Text} from 'react-native'


const App = () => {
  return(
    <view>
      <Text>Welcome to Mang Inasal</Text>
      <Link href="/profile">Go to Profile</Link>     
    </view>
  )
}
export default App;