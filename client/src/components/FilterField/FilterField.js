import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const FilterField = ({ handleChange, dispatch, tags }) => {

    const tagList = ["Electronics", "Household Items", "Musical Instruments", "Physical Media", "Recreational Equipment", "Sporting Goods", "Tools"]

    return (
        <div>
            <SelectField 
                floatingLabelText="Filter by Tag"
                multiple
                onChange={(event, index, values) => dispatch(handleChange(values))}
                value={tags}
            >
                {tagList.map((tag) => (
                    <MenuItem 
                        key={tag}
                        value={tag}
                        primaryText={tag}
                        insetChildren={true}
                        checked={tags && tags.includes(tag)}
                    />
                ))}
            </SelectField>
        </div>
    );
}

export default FilterField;