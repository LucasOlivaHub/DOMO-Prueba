import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function CardItem() {

 


  return (
    <Card className='card-item'>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <button className='card-arrow-btn'><i class="bi bi-arrow-return-right"></i></button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;