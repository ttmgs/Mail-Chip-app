import React from "react";
import "../styles/signup.css";
import logo from "../images/crop.png";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormData: {
        firstName:'',
        lastName: '',
        email: '',
      },
    };
  }
  handleFirstNameChanged(event) {
    var FormData        = this.state.FormData;
    FormData.firstName  = event.target.value;

    this.setState({ FormData: FormData });
  }

  handleLastNameChanged(event) {
    var FormData      = this.state.FormData;
    FormData.lastName = event.target.value;

    this.setState({ FormData: FormData });
  }

  handleEmailChanged(event) {
    var FormData    = this.state.FormData;
    FormData.email = event.target.value;

    this.setState({ FormData: FormData });
  }

  handleButtonClicked(event) {
    console.log(this.state.FormData);

    event.preventDefault(); // prevents form from submitting
  }
 


  render() {
    return (
      <div>
        <div id="body" className="text-center">
          <main className="form-signin">
            <form>
              <img
                className="mb-4"
                src={logo}
                alt="logo"
                width="72"
                height="57"
              />
              <h1 className="h3 mb-3 fw-normal">Signup to my Newsletter</h1>

              <input
                type="text"
                name="fname"
                className="form-control top"
                placeholder="Fist Name"
                value={this.state.FormData.firstName} onChange={this.handleFirstNameChanged.bind(this)}
              />
              <input
                type="text"
                name="lname"
                className="form-control middle"
                placeholder="Last Name"
                value={this.state.FormData.lastName} onChange={this.handleLastNameChanged.bind(this)}
              />
              <input
                type="email"
                name="email"
                className="form-control bottom"
                placeholder="Email"
                value={this.state.FormData.email} onChange={this.handleEmailChanged.bind(this)}
              />

              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                onClick={this.handleButtonClicked.bind(this)}              >
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">MAGDI TIEA &copy; 2021</p>
            </form>
          </main>
        </div>
      </div>
    );
  }
}

export default Signup;
