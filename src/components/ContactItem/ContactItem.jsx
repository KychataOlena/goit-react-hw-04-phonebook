import React from 'react';
import PropTypes from 'prop-types';
import { TextItem, ButtonItem } from './ContactItem.styled';

export const ContactItem = ({ id, contact, number, onDeletedContact }) => {
  return (
    <>
      <TextItem>
        {contact}: {number}
      </TextItem>

      <ButtonItem onClick={() => onDeletedContact(id)}>Deleted</ButtonItem>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeletedContact: PropTypes.func.isRequired,
};
