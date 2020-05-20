import * as React from "react";

class FilterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceTo: "",
      specialization: "",
      sortOrder: "",
      sortOrders: ["Ascending price", "Descending price"],
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.filter(
      this.state.priceTo,
      this.state.specialization,
      this.state.sortOrder
    );
  };

  render() {
    const postcodes = [];
    return (
      <div className="">
        <form className="" onSubmit={this.submitForm}>
          <p className="mb-1">Refine your results</p>
          <div className="columns text-center">
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="price-from">
                    Price up to
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <input
                    className="form-input"
                    min="0"
                    max="10000000"
                    type="number"
                    id="price-from"
                    placeholder="£1,000,000"
                    value={this.state.priceTo}
                    onChange={(event) =>
                      this.setState({ priceTo: Number(event.target.value) })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="specialization">
                    Specialization
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <select
                    className="form-select"
                    id="specialization"
                    value={this.state.specialization}
                    onChange={(event) =>
                      this.setState({ specialization: event.target.value })
                    }
                  >
                    <option value="">Choose...</option>
                    {postcodes.map((pc) => (
                      <option key={pc} value={pc.toLowerCase()}>
                        {pc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="sortorder">
                    Sort Order
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <select
                    className="form-select"
                    id="sortorder"
                    value={this.state.sortOrder}
                    onChange={(event) =>
                      this.setState({ sortOrder: event.target.value })
                    }
                  >
                    <option value="">Choose...</option>
                    {this.state.sortOrders.map((order) => (
                      <option
                        key={order}
                        value={order.replace(" ", "").toLowerCase()}
                      >
                        {order}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FilterBox;
