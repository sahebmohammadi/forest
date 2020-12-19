import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MainContext from '../context/MainContext';
import drag from '../../assets/images/drag.svg';
import info from '../../assets/images/info.svg';
import opacity from '../../assets/images/opacity.svg';

const ProductInfo = () => {
  const context = useContext(MainContext);

  const { hiddenProduct, setHiddenProduct } = context;
  const [display, setDisplay] = useState(true);

  const handleClose = (index1, index2) => {
    const productsState = [...hiddenProduct];
    productsState[index1].products[index2].checked = false;
    productsState[index1].products[index2].hidden = true;
    setHiddenProduct(productsState);
  };

  const handle = (index1, index2) => {
    const productsState = [...hiddenProduct];
    productsState[index1].products[index2].accordionOpen = !productsState[index1]
      .products[index2].accordionOpen;
    setHiddenProduct(productsState);
  };
  console.log(display);

  const Accordion = styled.div`
    background: #fff;
    border: 2px solid #eee;
    border-radius: 4px;
    width: 100%;
    margin: 7px auto;
    padding: 0;
  `;

  const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
  `;

  const Description = styled.div`
    width: 84%;
    padding: 10px 8%;
    transition: all 1s;
    font-size:12px;
  `;

  const ProductTitle = styled.div`
    font-size:14px;
    padding:1px 0 0 0;
  `;

  return (
    <>
      {hiddenProduct.map((products, index1) =>
        products.products.map((product, index2) => (
          <Accordion hidden={product.hidden}>
            <Title>
              <div style={{ display: 'flex' }}>
                <img src={drag} width="13" height="13" style={{ margin: '4px 10px' }} />

                  <ProductTitle>
                  {product.title}
                  </ProductTitle>
              </div>

              <div>
                <img
                  src={opacity}
                  width="13"
                  height="13"
                  style={{ margin: '-3px 7px' }}
                />
                <img src={info} width="13" height="13" style={{ margin: '-3px 2px' }} />
                <IconButton
                  style={{ padding: '5px 5px', margin: '0 0' }}
                  aria-label="close"
                  onClick={() => handleClose(index1, index2)}
                >
                  <CloseIcon style={{ fontSize: 19 }} />
                </IconButton>
              </div>
            </Title>

            {product.accordionOpen ? (
              <Description>{product.description}</Description>
            ) : null}
            <div style={{ backgroundColor: '#FAFAFA', textAlign: 'center', padding: 0 }}>
              <IconButton
                style={{ padding: 0, width: '100%', margin: '0 0', borderRadius: 0 }}
                aria-label="close"
                onClick={() => handle(index1, index2)}
              >
                {product.accordionOpen ? (
                  <ExpandLessIcon style={{ fontSize: 17 }} />
                ) : (
                  <ExpandMoreIcon style={{ fontSize: 17 }} />
                )}
              </IconButton>
            </div>
          </Accordion>
        )),
      )}
    </>
  );
};

export default ProductInfo;
