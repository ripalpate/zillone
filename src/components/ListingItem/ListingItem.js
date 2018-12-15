import React from 'react';
import listingShape from '../../helpers/propz/listingShape';
import formatPrice from '../../helpers/formatPrice';
import './ListingItem.scss';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
  }

  render() {
    const { listing } = this.props;
    return (
      <li className= "listing-item text-center">
        <span className="col-7">{listing.address}</span>
        <span className="col-3">{formatPrice(listing.price)}</span>
      </li>
    );
  }
}

export default ListingItem;