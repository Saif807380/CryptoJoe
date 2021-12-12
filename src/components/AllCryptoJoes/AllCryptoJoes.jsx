import React, { useState, useEffect } from "react";
import CryptoJoeNFTImage from "../CryptoJoeNFTImage/CryptoJoeNFTImage";
import CryptoJoeNFTDetails from "../CryptoJoeNFTDetails/CryptoJoeNFTDetails";
import Loading from "../Loading/Loading";

const AllCryptoJoes = ({
  cryptoJoes,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  toggleForSale,
  buyCryptoJoe,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cryptoJoes.length !== 0) {
      if (cryptoJoes[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [cryptoJoes]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CryptoJoe's Minted On The Platform :{" "}
            {totalTokensMinted}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {cryptoJoes.map((cryptoJoe) => {
          return (
            <div
              key={cryptoJoe.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
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
              <CryptoJoeNFTDetails
                cryptoJoe={cryptoJoe}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                toggleForSale={toggleForSale}
                buyCryptoJoe={buyCryptoJoe}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCryptoJoes;
