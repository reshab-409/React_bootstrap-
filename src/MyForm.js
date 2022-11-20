import React from 'react'

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '' };
    // this.state = { password: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, [event.target.password]: event.target.value });
  }

  handleSubmit = (event) => {
    console.log('A form was submitted: ' + this.state);

    fetch('http://localhost:4000/store-data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state)
    }).then(function (res) {
      console.log(res)
      return res.json();
    });

    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {/* <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
          
          <input type="number" value={this.state.value} name="password" onChange={this.handleChange} /> */}
          {/* input boxes */}
          <div className="container">
            <lab>Name</lab>
            <div className="col">
              <input type="text" className="form-control" style={{ width: "25%" }} placeholder="Name" aria-label="Name" name="name" onChange={this.handleChange} />
            </div>
            <lab>Password</lab>
            <div className="col">
              <input type="number" className="form-control" style={{ width: "25%" }} placeholder="Password" aria-label="Password" name="password" onChange={this.handleChange} />
            </div>
          </div>
          <br></br>
          {/* submit button  */}
          <div className="col-12 container">
            <button className="btn btn-success" type="submit">Submit form</button>


            {/* loading... symbol */}

            <button className="btn btn-success" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button> </div>

        </form>
      </>
    );
  }
}
export default MyForm;