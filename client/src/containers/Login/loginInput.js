import React from 'react';
import { TextField } from 'material-ui';

export const usernameInput = field => (
<TextField
    hintText="Please enter your email"
    id="email"
    type="email"
    {...field.input}
    />
);

export const passwordInput = field => (
<TextField
    hintText="Please enter your password"
    id="password"
    type="password"
    {...field.input}
    />
);

