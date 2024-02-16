import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import SpinnerLoader from '../../Components/SpinnerLoader/SpinnerLoader';

function ImgLayout({img}) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  };

  
  useEffect(() => {

  }, [loading])

  return (
    <Container className='img-layout-container'>
      <Row>
        <Col xs={6} md={4}>
          {loading && <SpinnerLoader/>}
          <Image
            src={img && img}
            rounded
            loading="lazy"
            onLoad={handleImageLoad}
            style={{ display: loading ? 'none' : 'block' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ImgLayout;