import React from "react";

const HistoriqueItem = ({ paragraphs, image, inversed }) => {
  return (
    <div className="columns align-center">
      {inversed ? (
        <>
          <div className="column is-4 is-12-mobile">
            <div className="tile is-ancestor">
              <div className="tile">
                <div className="tile is-parent">
                  <article className={`tile is-child`}>
                    <img src={image} />
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-8 is-12-mobile">
            {paragraphs.map((para) => (
              <p className="is-size-4  is-size-6-mobile">{para}</p>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="column is-8 is-12-mobile">
            {paragraphs.map((para) => (
              <p className="is-size-4  is-size-6-mobile">{para}</p>
            ))}
          </div>
          <div className="column is-4 is-12-mobile">
            <div className="tile is-ancestor">
              <div className="tile">
                <div className="tile is-parent">
                  <article className={`tile is-child`}>
                    <img src={image} />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HistoriqueItem;
