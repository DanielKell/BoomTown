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
import Gravatar from 'react-gravatar';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { setImageUpload, setImageUploadPlaceHolder } from '../../redux/modules/share_data';
import {textItemTitle, textItemDescription} from './formInputs';
import './styles.css';
import placeholder from '../../images/item-placeholder.jpg';
import firebase from '../../firebaseSetup';


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

    const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField
        multiple
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        {...custom}
    >
        {children}
    </SelectField>
);

    const renderMenuItems = (tags) => {

        return tags.map((tag) => (
            <MenuItem
                key={tag.id}
                insetChildren
                checked={
                    this.props.newItem &&
                    this.props.newItem.values &&
                    this.props.newItem.values.tags &&
                    this.props.newItem.values.tags.includes(tag.title)
                }
                value={tag.title} //May need to change this back to tag.id for query
                primaryText={tag.title}
            />
        ));        
    };

    const listOfTags = [
        { id: 8, title: 'Tools' },
        { id: 9, title: 'Household Items' },
        { id: 10, title: 'Physical Media' },
        { id: 11, title: 'Musical Instruments' },
        { id: 12, title: 'Sporting Goods' },
        { id: 13, title: 'Electronics' },
        { id: 14, title: 'Recreational Equipment' },
    ];

//Handling image upload
  const handleImageUpload = (input) => {
     if (input.target.files && input.target.files[0]) {
       const reader = new FileReader();
       this.props.dispatch(setImageUpload(input.target.files[0]));
       reader.onload = (e) => {
         this.props.dispatch(setImageUploadPlaceHolder(e.target.result));
       };
       reader.readAsDataURL(input.target.files[0]);
     }
   }

//Handling submittal to server

  let submitShareItem = async () => {
    //  const { imageFile, selectedTags, user, mutate, shareDateNow } = this.props;
    //  const { itemTitle, itemDescription } = this.props.inputValues;
    //  var storageRef = firebase.storage().ref();
    //  const imageURL = await storageRef.child(`images/${user.id}/${imageFile.name}-${shareDateNow}`)
    //         .put(imageFile)
    //         .then((snapshot) => {
    //            return snapshot.downloadURL;
    //         })
 
    //  const allSelectedTagsID = selectedTags.map((tags) => tags.id);
 
    const { mutate } = this.props;
     mutate({ 
    //    variables: { 
    //      title: itemTitle,
    //      description: itemDescription,
    //      imageurl: imageURL,
    //      tags: allSelectedTagsID,
    //      itemowner: user.id
    //    }
       variables: { 
         title: 'testTitle',
         description: 'testDescription',
         imageurl: 'https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fcamp-stove.jpg?alt=media',
         tags: '5',
         itemowner: 'K6SdzpduXQfulaIR88K7s99lcOo1'
       }
     })
     .then( res => {
       console.log(res);
     });
   }

    const {finished, stepIndex} = this.state;
    
    console.log(this.props.newItem);
    
    return (
        <div className="share-page"> 
            <div className="left-half">
                <div className="share-card">
                    <Card>
                        <CardMedia>
                        <img src={this.props.imageData ? this.props.imageData : placeholder} alt="" />
                        </CardMedia>  
                        <CardHeader
                            subtitle="a few seconds ago"
                            avatar={<Gravatar email="" className="gravatar-image"/>}
                        />
                        <CardTitle 
                            title={this.props.newItem.itemTitle ? this.props.newItem.itemTitle : "Amazing Item Title"}
                            
                            subtitle={this.props.newItem.tags ? this.props.newItem.tags.join(', ') : ""}
                        />
                        <CardTitle
                            subtitle={this.props.newItem.itemDescription ? this.props.newItem.itemDescription : "Profound item description."}
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
                        <input name="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} />
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

                            <Field
                                name="tags"
                                label="Item Categories"
                                component={renderSelectField}
                            >
                                {renderMenuItems(listOfTags)}
                            </Field>

                        {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                        <Step>
                        <StepLabel>Confirm Things!</StepLabel>
                        <StepContent>
                        <p>
                            Great! If you're happy with everything, tap the button.
                        </p>
                        <button onClick={submitShareItem}>
                            Submit
                        </button>
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
                        </a> to reset.
                    </p>
                    )}
                </div>
                </div>
            </div>
        );
    }
}

//NEED TO PUT IN A MUTATION QUERY HERE TO SEND DATA TO THE SERVER (SLIDE 59-graphql)

const addItem = gql`
   mutation addItem(
     $title: String!
     $description: String
     $imageurl: String
     $tags: [String]
     $itemowner: ID!
   ) {
     addItem(
       title:$title
       description:$description
       imageurl:$imageurl
       tags:$tags
       itemowner:$itemowner
     ){
       title
       description
     }
   }
 `

const newItemForm =  reduxForm({
    validate,
  form: 'share'
})(Share);

function mapStateToProps(state) {
    const values = formValueSelector('share');
    return {
        newItem: values(state, "itemTitle", "itemDescription", "tags"),
        imageFile: state.share.imageFile,
        imageData: state.share.imageData
         //Include all the 'name's from above fields
    };
}

const share1 = graphql(addItem)(newItemForm);

export default connect (mapStateToProps)(share1);