import React from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react'

const options = [
  { key: 1, text: 1, value: 1 },
  { key: 2, text: 2, value: 2 },
  { key: 3, text: 3, value: '3' },
  { key: 4, text: 4, value: 4 },
  { key: 5, text: 5, value: 5 },
  { key: 6, text: 6, value: 6 },
  { key: 7, text: 7, value: 7 },
  { key: 8, text: 8, value: 8 },
  { key: 9, text: 9, value: 9 },
  { key: 10, text: 10, value: 10 },
  { key: 11, text: 11, value: 11 },
  { key: 12, text: 12, value: 12 },
  { key: 13, text: 13, value: 13 },
  { key: 14, text: 14, value: 14 },
  { key: 15, text: 15, value: 15 }
]

const MenuForm = ({handleSubmit, handleTop250Change, handlePosReqChange}) => (
    <>
      <Form size="small" style={{width: '50%', marginRight: "auto", marginLeft: "auto"}} onSubmit={handleSubmit}>
        <Form.Dropdown style={{margin: '20px auto', width: '25%'}} placeholder='Number of Players' fluid selection options={options} />
        <Form.Checkbox onChange={handleTop250Change} label="Top 250 Players"/>
        <Form.Checkbox onChange={handlePosReqChange} label="At Least 2 Fowards, Guards and Centers"/>
        <Button color="orange" type='submit' content='Submit' />
      </Form>
    </>
)

export default MenuForm