'use client'
import React from 'react'
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Auth0Provider } from '@auth0/auth0-react';
import CustomProvider from '@/Components/CustomProvider/CustomProvider';

const Providers = ({ children }: {
   children: React.ReactNode
}) => {
    return (
    
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <CustomProvider>
                        <Auth0Provider
                            domain={`${process.env.NEXT_PUBLIC_REACT_APP_AUTH0_DOMAIN}`}
                            clientId={`${process.env.NEXT_PUBLIC_REACT_APP_AUTH0_CLIENT_ID}`}
                            authorizationParams={{
                                // redirect_uri: window?.location?.origin,
                                redirect_uri: process.env.NEXT_PUBLIC_AUTH0_BASE_URL,
                                audience: process.env.NEXT_PUBLIC_REACT_APP_AUTH0_AUDIENCE,
                            }}
                        >
                        {children}
                        </Auth0Provider>
                </CustomProvider>
            </PersistGate>
        </Provider>
    

  )
}

export default Providers