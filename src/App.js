import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }), () => this.isSaveButtonDisabled());
  }

  isSaveButtonDisabled() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const minAllowedPower = 0;
    const maxAllowedPower = 90;
    const maxCombinedPower = 210;
    const totalCombinedPower = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    let btnDisabled = false;

    if (totalCombinedPower > maxCombinedPower) btnDisabled = true;
    if (!cardName || !cardImage || !cardDescription) btnDisabled = true;
    if (cardAttr1 > maxAllowedPower || cardAttr1 < minAllowedPower) btnDisabled = true;
    if (cardAttr2 > maxAllowedPower || cardAttr2 < minAllowedPower) btnDisabled = true;
    if (cardAttr3 > maxAllowedPower || cardAttr3 < minAllowedPower) btnDisabled = true;

    console.log(btnDisabled);
    this.setState(() => ({
      isSaveButtonDisabled: btnDisabled,
    }));
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }

        />
      </div>
    );
  }
}

export default App;
