import '@styles/reset.css';

import React from 'react';
import store from '@states/store';

// eslint-disable-next-line react/prop-types,react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default store.withRedux(MyApp);
