import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import './ItemListContainerComponent.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainerComponent = ({ products }) => {
return <div className="itemListContainer">
  {
    products.map((product) => {
      return (
      <Card key={product.id} style={{ width: '18rem', margin: 10 }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary">Ir a detalle</Button>
        </Card.Body>
      </Card>
      );
    })
  }
</div>   
}

export default ItemListContainerComponent;