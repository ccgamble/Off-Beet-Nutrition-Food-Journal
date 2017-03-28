import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Form extends Component {
	constructor() {
		super();
	}

	render() {
    return(
    <form>
    <input type='date'/><br/>
    Breakfast:<br/>
    <input type='time'/><br/>
    <textarea cols="40" name="what" placeholder="What was it?"/><br/>
    <textarea cols="40" name="conditions" placeholder="Describe the conditions of the meal."/><br/>
    <textarea cols="40" name="feel-before" placeholder="How did you feel before?"/><br/>
    <textarea cols="40" name="feel-during" placeholder="How did you feel during?"/><br/>
    <textarea cols ="40" name="feel-after" placeholder="How did you feel after?"/><br/>
    Lunch:<br/>
    <input type='time'/><br/>
    <textarea cols="40" name="what" placeholder="What was it?"/><br/>
    <textarea cols="40" name="conditions" placeholder="Describe the conditions of the meal."/><br/>
    <textarea cols="40" name="feel-before" placeholder="How did you feel before?"/><br/>
    <textarea cols="40" name="feel-during" placeholder="How did you feel during?"/><br/>
    <textarea cols ="40" name="feel-after" placeholder="How did you feel after?"/><br/>
    Dinner:<br/>
    <input type='time'/><br/>
    <textarea cols="40" name="what" placeholder="What was it?"/><br/>
    <textarea cols="40" name="conditions" placeholder="Describe the conditions of the meal."/><br/>
    <textarea cols="40" name="feel-before" placeholder="How did you feel before?"/><br/>
    <textarea cols="40" name="feel-during" placeholder="How did you feel during?"/><br/>
    <textarea cols ="40" name="feel-after" placeholder="How did you feel after?"/><br/>
    Snacks:<br/>
    <input type='time'/><br/>
    <textarea cols="40" name="what" placeholder="What was it?"/><br/>
    <textarea cols="40" name="conditions" placeholder="Describe the conditions of the meal."/><br/>
    <textarea cols="40" name="feel-before" placeholder="How did you feel before?"/><br/>
    <textarea cols="40" name="feel-during" placeholder="How did you feel during?"/><br/>
    <textarea cols ="40" name="feel-after" placeholder="How did you feel after?"/><br/>
    <input type="submit"/>
  </form>
  );
};
}