import { number } from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>

        Nome da carta
        <input
          type="text"
          data-testid="name-input"
          placeholder="Insira o nome da carta"
        />

        Descrição
        <input
          type="textarea"
          data-testid="description-input"
          placeholder="Insira a descrição da carta"
        />

        Attr01
        <input
          type="number"
          data-testid="attr1-input"
          placeholder="1º atributo"
        />

        Attr02
        <input
          type="number"
          data-testid="attr2-input"
          placeholder="2º atributo"
        />

        Attr03
        <input
          type="number"
          data-testid="attr3-input"
          placeholder="3º atributo"
        />

        Imagem
        <input
          type="text"
          data-testid="image-input"
          placeholder="Caminho da imagem"
        />

        Raridade
        <select data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        Super Trybe Trunfo
        <input
          type="checkbox"
          data-testid="trunfo-input"
          value="É Super Trunfo?"
        />

        <input
          type="button"
          data-testid="save-button"
          value="Salvar"
        />

      </form>

    );
  }
}

export default Form;
