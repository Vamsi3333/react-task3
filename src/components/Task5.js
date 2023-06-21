import React from 'react';

class Task5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: '',
      age: '',
    };
  }

  calculateAge = () => {
    const { birthDate } = this.state;
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    const ageInMillis = today - birthDateObj;
    const ageInYears = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000));
    this.setState({ age: ageInYears });
  };

  handleDateChange = (e) => {
    this.setState({ birthDate: e.target.value });
  };

  render() {
    const { birthDate, age } = this.state;

    return (
      <div className='container'>
        <p id='header'>Age Calculator</p>
        <p id="info">Enter your birthdate:</p>
        <input type="date" id="birthdate" value={birthDate} onChange={this.handleDateChange}/>
        <button className='movehover' onClick={this.calculateAge}>Calculate Age</button>
        {age && <p>Your age is {age} years.</p>}
      </div>
    );
  }
}

export default Task5;
