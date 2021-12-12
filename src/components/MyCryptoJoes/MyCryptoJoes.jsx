import React, { useState, useEffect } from "react";
import CryptoJoeNFTImage from "../CryptoJoeNFTImage/CryptoJoeNFTImage";
import MyCryptoJoeNFTDetails from "../MyCryptoJoeNFTDetails/MyCryptoJoeNFTDetails";
import Loading from "../Loading/Loading";

const myCryptoJoes = ({
  accountAddress,
  cryptoJoes,
  totalTokensOwnedByAccount,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCryptoJoes, setMyCryptoJoes] = useState([]);

  useEffect(() => {
    if (cryptoJoes.length !== 0) {
      if (cryptoJoes[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_crypto_joes = cryptoJoes.filter(
      (cryptoJoe) => cryptoJoe.currentOwner === accountAddress
    );
    setMyCryptoJoes(my_crypto_joes);
  }, [cryptoJoes]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CryptoJoe's You Own : {totalTokensOwnedByAccount}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {myCryptoJoes.map((cryptoJoe) => {
          return (
            <div
              key={cryptoJoe.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
                  {!loading ? (
                    <CryptoJoeNFTImage
                      colors={
                        cryptoJoe.metaData !== undefined
                          ? cryptoJoe.metaData.metaData.colors
                          : ""
                      }
                    />
                  ) : (
                    <Loading />
                  )}
                </div>
                <div className="col-md-6 text-center">
                  <MyCryptoJoeNFTDetails
                    cryptoJoe={cryptoJoe}
                    accountAddress={accountAddress}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default myCryptoJoes;
