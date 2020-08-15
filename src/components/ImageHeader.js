import React from "react";
import { Form, FormGroup, Input} from 'reactstrap';
function ImageHeader(props){
    const {title, date, changeDate} = props;
    return (
        <div className="img-header">
        <h2>{title}</h2>
        <Form>
            <FormGroup>
                <Input type="date" name="date" id="exampleEmail"  onChange={(e) =>{changeDate(e.target.value)}} />
            </FormGroup>
        </Form>
      </div>
    );
}

export default ImageHeader;