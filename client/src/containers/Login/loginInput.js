import React from 'react';
import { TextField } from 'material-ui';

export const usernameInput = field => (
    <div>
        <TextField
            hintText="Please enter your email"
            id="email"
            type="email"
            {...field.input}
        />
        {!field.meta.pristine && field.input.value.length < 14 ? 
            <div className="text-help">
                Please enter an email (try mandi@email.com)
            </div> 
            : false
        }
    </div>
);

export const passwordInput = field => (

    <div>
        <TextField
            hintText="Please enter your password"
            id="password"
            type="password"
            {...field.input}
            />
            {!field.meta.pristine && field.input.value.length < 8 ?
            <div className="text-help">
               Please enter a password (try redredred)
            </div> 
            : false
        }
    </div>
    );

