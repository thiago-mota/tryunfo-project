import propTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>

        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="cardName"
            type="text"
            data-testid="name-input"
            placeholder="Insira o nome da carta"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            name="cardDescription"
            type="textarea"
            data-testid="description-input"
            placeholder="Insira a descrição da carta"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Atributo 1:
          <input
            id="attr1"
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            placeholder="1º atributo"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2:
          <input
            id="attr2"
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            placeholder="2º atributo"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3:
          <input
            id="attr3"
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            placeholder="3º atributo"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          Caminho da imagem:
          <input
            id="image"
            name="cardImage"
            type="text"
            data-testid="image-input"
            placeholder="Caminho da imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          Raridade
          <select
            id="rare"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {
          hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="trunfo">
              É Super Trunfo?
              <input
                id="trunfo"
                name="cardTrunfo"
                type="checkbox"
                data-testid="trunfo-input"
                value={ cardTrunfo }
                onChange={ onInputChange }
                checked={ cardTrunfo }
              />
            </label>
          )
        }

        <button
          name="button"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

        {/* https://tutorial.eyehunts.com/js/add-disabled-attribute-javascript-disable-html-elements-example/ */}

      </form>

    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
