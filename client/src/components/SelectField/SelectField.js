import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const FilterField = () => {

    return(
        <div>
            <SelectField 
                floatingLabelText="Filters">

                <MenuItem value={1} primaryText="Electronics" />
                <MenuItem value={2} primaryText="Household Items" />
                <MenuItem value={3} primaryText="Musical Instruments" />
                <MenuItem value={4} primaryText="Physical Media" />
                <MenuItem value={5} primaryText="Recreational Equipment" />
                <MenuItem value={6} primaryText="Sporting Goods" />
                <MenuItem value={7} primaryText="Tools" />
            
            </SelectField>
        </div>
    );
}

export default FilterField;