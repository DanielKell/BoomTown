import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { TextField } from 'material-ui';
import Gravatar from 'react-gravatar';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import {textItemTitle, textItemDescription} from './formInputs';
import './styles.css';
import placeholder from '../../images/item-placeholder.jpg';

//Setting up all the validation for the form

    const validate = values => {
        const errors = {};

        if (!values.itemTitle) {
            errors.itemTitle = "Please add a title";
        }
        if (values.itemTitle && values.itemTitle.length > 10) {
            errors.itemTitle = "Your title is too long.";
        }

        if (!values.itemDescription) {
            errors.itemDescription = "Please add a description";
        }

       if (values.itemDescription && values.itemDescription.length > 10) {
            errors.itemDescription = "Please add a description";
        }
        return errors;
    }

//The Share Component

class Share extends Component {

    //Copied code for the stepper 
    state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

render() {

    const {finished, stepIndex} = this.state;
    console.log(this.props);
    return (
        <div className="share-page"> 
            <div className="left-half">
                <div className="share-card">
                    <Card>
                        <CardMedia>
                        <img src={placeholder} alt="" />
                        </CardMedia>  
                        <CardHeader
                            subtitle="a few seconds ago"
                            avatar={<Gravatar email="" className="gravatar-image"/>}
                        />
                        <CardTitle 
                            title={this.props.newItem.itemTitle}
                            subtitle={this.props.newItem.itemDescription}
                        />
                        <CardText>
                        </CardText>  
                    </Card>
                </div>
            </div>
            <div className="right-half">
                    <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
                    <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Add an Image</StepLabel>
                        <StepContent>
                        <p>
                            We live in a visual culture. Upload an image of the item you're sharing.
                        </p> 
                        {this.renderStepActions(0)} 
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Add Title and Description</StepLabel>
                        <StepContent>
                        <p>Folks need to know what you're sharing. Give them a clue by adding a title & description.</p>
                        <Field
                            name="itemTitle"
                            type="text"
                            component={textItemTitle}
                        />
                        <Field
                            name="itemDescription"
                            type="text"
                            component={textItemDescription}
                        />
                        {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Categorize Your Item</StepLabel>
                        <StepContent>
                        <p>
                            To share an item, you'll add it to our list of categories. You can select multiple categories.
                        </p>
                        {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                        <Step>
                        <StepLabel>Confirm Things!</StepLabel>
                        <StepContent>
                        <p>
                            Great! If you're happy with everything, tap the button.
                        </p>
                        {this.renderStepActions(3)}
                        </StepContent>
                    </Step>
                    </Stepper>
                    {finished && (
                    <p style={{margin: '20px 0', textAlign: 'center'}}>
                        <a
                        href=""
                        onClick={(event) => {
                            event.preventDefault();
                            this.setState({stepIndex: 0, finished: false});
                        }}
                        >
                        Click here
                        </a> to reset the example.
                    </p>
                    )}
                </div>
                </div>
            </div>
        );
    }
}

// export default Share;

//NEED TO PUT IN A MUTATION QUERY HERE TO GET IT TO SEND TO THE SERVER (SLIDE 59-graphql)

const newItemForm =  reduxForm({
    validate,
  form: 'share'
})(Share);

function mapStateToProps(state) {
    const values = formValueSelector('share');
    return {
        newItem: values(state, "itemTitle", "itemDescription") //Include all the 'name's from above fields
    };
}

export default connect (mapStateToProps)(newItemForm);