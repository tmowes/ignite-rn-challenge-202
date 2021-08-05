import React from 'react'
import { View } from 'react-native'

import { AnimatePresence } from 'framer-motion'
import { useTheme } from 'styled-components'

import { useAuth } from './hooks/useAuth'
import { SignIn } from './screens/SignIn'
import { Home } from './screens/Home'

export function Routes() {
  const theme = useTheme()
  const { user } = useAuth()

  return (
    <View style={{ backgroundColor: theme.colors.black, flex: 1 }}>
      <AnimatePresence exitBeforeEnter>
        {user.id ? <Home key="home" /> : <SignIn key="signIn" />}
      </AnimatePresence>
    </View>
  )
}
