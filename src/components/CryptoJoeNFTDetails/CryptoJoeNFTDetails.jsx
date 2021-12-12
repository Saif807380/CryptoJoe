import React, { Component } from "react";

class CryptoJoeNFTDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCryptoJoePrice: "",
    };
  }

  callChangeTokenPriceFromApp = (tokenId, newPrice) => {
    this.props.changeTokenPrice(tokenId, newPrice);
  };

  render() {
    return (
      <div key={this.props.cryptoJoe.tokenId.toNumber()} className="mt-4">
        <p>
          <span className="font-weight-bold">Token Id</span> :{" "}
          {this.props.cryptoJoe.tokenId.toNumber()}
        </p>
        <p>
          <span className="font-weight-bold">Name</span> :{" "}
          {this.props.cryptoJoe.tokenName}
        </p>
        <p>
          <span className="font-weight-bold">Minted By</span> :{" "}
          {this.props.cryptoJoe.mintedBy.substr(0, 5) +
            "..." +
            this.props.cryptoJoe.mintedBy.slice(
              this.props.cryptoJoe.mintedBy.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Owned By</span> :{" "}
          {this.props.cryptoJoe.currentOwner.substr(0, 5) +
            "..." +
            this.props.cryptoJoe.currentOwner.slice(
              this.props.cryptoJoe.currentOwner.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Previous Owner</span> :{" "}
          {this.props.cryptoJoe.previousOwner.substr(0, 5) +
            "..." +
            this.props.cryptoJoe.previousOwner.slice(
              this.props.cryptoJoe.previousOwner.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Price</span> :{" "}
          {window.web3.utils.fromWei(
            this.props.cryptoJoe.price.toString(),
            "Ether"
          )}{" "}
          ETH
        </p>
        <p>
          <span className="font-weight-bold">No. of Transfers</span> :{" "}
          {this.props.cryptoJoe.numberOfTransfers.toNumber()}
        </p>
        <div>
          {this.props.accountAddress === this.props.cryptoJoe.currentOwner ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.callChangeTokenPriceFromApp(
                  this.props.cryptoJoe.tokenId.toNumber(),
                  this.state.newCryptoJoePrice
                );
              }}
            >
              <div className="form-group mt-4 ">
                <label htmlFor="newCryptoJoePrice">
                  <span className="font-weight-bold">Change Token Price</span> :
                </label>{" "}
                <input
                  required
                  type="number"
                  name="newCryptoJoePrice"
                  id="newCryptoJoePrice"
                  value={this.state.newCryptoJoePrice}
                  className="form-control w-50"
                  placeholder="Enter new price"
                  onChange={(e) =>
                    this.setState({
                      newCryptoJoePrice: e.target.value,
                    })
                  }
                />
              </div>
              <button
                type="submit"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                className="btn btn-outline-info mt-0 w-50"
              >
                change price
              </button>
            </form>
          ) : null}
        </div>
        <div>
          {this.props.accountAddress === this.props.cryptoJoe.currentOwner ? (
            this.props.cryptoJoe.forSale ? (
              <button
                className="btn btn-outline-danger mt-4 w-50"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleForSale(
                    this.props.cryptoJoe.tokenId.toNumber()
                  )
                }
              >
                Remove from sale
              </button>
            ) : (
              <button
                className="btn btn-outline-success mt-4 w-50"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleForSale(
                    this.props.cryptoJoe.tokenId.toNumber()
                  )
                }
              >
                Keep for sale
              </button>
            )
          ) : null}
        </div>
        <div>
          {this.props.accountAddress !== this.props.cryptoJoe.currentOwner ? (
            this.props.cryptoJoe.forSale ? (
              <button
                className="btn btn-outline-primary mt-3 w-50"
                value={this.props.cryptoJoe.price}
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={(e) =>
                  this.props.buyCryptoJoe(
                    this.props.cryptoJoe.tokenId.toNumber(),
                    e.target.value
                  )
                }
              >
                Buy For{" "}
                {window.web3.utils.fromWei(
                  this.props.cryptoJoe.price.toString(),
                  "Ether"
                )}{" "}
                ETH
              </button>
            ) : (
              <>
                <button
                  disabled
                  style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                  className="btn btn-outline-primary mt-3 w-50"
                >
                  Buy For{" "}
                  {window.web3.utils.fromWei(
                    this.props.cryptoJoe.price.toString(),
                    "Ether"
                  )}{" "}
                  Ξ
                </button>
                <p className="mt-2">Currently not for sale!</p>
              </>
            )
          ) : null}
        </div>
      </div>
    );
  }
}

export default CryptoJoeNFTDetails;
