'use client'
import React from 'react'
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

type Props = {
   children: React.ReactNode
};

const ReduxProvider = ({children}:Props) => {
    return (
        
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                {children}
            </PersistGate>
        </Provider>
        
  )
}

export default ReduxProvider