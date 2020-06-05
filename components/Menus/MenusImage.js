import React from "react";
import { v4 as uuidv4 } from "uuid";

const MenusImageItem = ({ menuItem }) => {
  return (
    <div>
      <div className="tile is-ancestor">
        <div className="tile">
          {menuItem.map((item) => (
            <React.Fragment key={uuidv4()}>
              <div className="tile is-parent">
                <article
                  className={`tile is-child`}
                >
                    <img src={item.image}/>
                </article>
              </div>
              <div className="tile is-parent columns is-hidden-desktop">
                <div className="column is-full">
                  <p className="is-size-5 has-text-centered has-text-weight-bold has-text-black">
                    {item.title}
                  </p>
                  <p className="is-size-6 has-text-centered has-text-weight-light has-text-black-bis">
                    {item.description}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="tile is-ancestor is-hidden-mobile" key={uuidv4()}>
        <div className="tile" key={uuidv4()}>
          {menuItem.map((item) => (
            <React.Fragment key={uuidv4()}>
              <div className="tile is-parent columns">
                <div className="column is-full">
                  <p className="is-size-5 has-text-centered has-text-weight-bold has-text-black">
                    {item.title}
                  </p>
                  <p className="is-size-6 has-text-centered has-text-weight-light has-text-black-bis">
                    {item.description}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenusImageItem;
