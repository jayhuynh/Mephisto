/*
 * Copyright (c) Meta Platforms and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Link } from "react-router-dom";
import { JSONItem } from "../JSONItem";
import "./GridCollection.css";

function GridCollection({ items, itemRenderer: ItemRenderer = JSONItem }) {
  return items && items.length > 0 ? (
    <div className="default-collection-renderer-container">
      {items.map((item) => {
        return (
          <Link
            to={`/${item.id}`}
            style={{ textDecoration: "none" }}
            key={item.id}
            id={`item-${item.id}`}
          >
            <ItemRenderer item={item} />
          </Link>
        );
      })}
    </div>
  ) : null;
}

export { GridCollection };
