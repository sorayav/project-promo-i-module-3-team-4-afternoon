import React from 'react';
import CardPreview from './CardPreview';


class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="CardForm">
            <CardPreview />
        </div>
    );
  }
}

export default CardForm;