
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function GenderDropDown({genderSelected}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
       Select Gender
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onSelect = {() => genderSelected("men")}>Men</Dropdown.Item>
        <Dropdown.Item onSelect = {() => genderSelected("women")}>Women</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}