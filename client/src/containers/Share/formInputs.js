import React from 'react';
import { TextField } from 'material-ui';

export const textItemTitle = field => (
<TextField
    label="Title for Post"
    hintText="Title"
    id="itemTitle"
    {...field.input}
    />
);
                        <TextField 
                            label="Title for Post"
                            hintText="Title"
                        />

export const textItemDescription = field => (
    <TextField
        label= "Description for Post"
        hintText = "Description"
        id="itemDescription"
        {...field.input}
    />
    );