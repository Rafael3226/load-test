import React, { Component, FormEvent } from 'react';
import axios from 'axios';
import NavBar from './containers/NavBar';
import TextField from './containers/TextField';

type Props = {};
type Params = { hilos: string; inicio: string; fin: string };
type State = { params: Params; showLoading: boolean };
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      params: { hilos: '1', inicio: '1', fin: '1' },
      showLoading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent) {
    this.setState({
      ...this.state,
      params: { ...this.state.params, [event.target.name]: event.target.value },
    });
  }

  handleSubmit(event: FormEvent) {
    const params = this.state.params;
    this.setState({
      ...this.state,
      showLoading: true,
    });
    axios
      .get('http://localhost:5000/test/exec', { params })
      .then((response) => {
        alert(JSON.stringify(response.data.message));
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          showLoading: false,
        });
        alert(error);
      })
      .finally(() => {
        this.setState({
          ...this.state,
          showLoading: false,
        });
      });

    event.preventDefault();
  }

  render() {
    const { hilos, inicio, fin } = this.state.params;
    const showLoading = this.state.showLoading;
    return (
      <div>
        <NavBar />
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className="container-md">
            {showLoading ? (
              <div className="mx-auto spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <>
                <TextField
                  className="col-6"
                  label="Hilos"
                  type="number"
                  id="hilos"
                  value={hilos}
                  onChange={(e: ChangeEvent) => {
                    this.handleChange(e);
                  }}
                />
                <TextField
                  className="col-6"
                  label="Id Inicio"
                  type="number"
                  id="inicio"
                  value={inicio}
                  onChange={(e: ChangeEvent) => {
                    this.handleChange(e);
                  }}
                />
                <TextField
                  className="col-6"
                  label="Id Fin"
                  type="number"
                  id="fin"
                  value={fin}
                  onChange={(e: ChangeEvent) => {
                    this.handleChange(e);
                  }}
                />
                <button type="submit" className="btn btn-success">
                  Sumbit
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default App;
