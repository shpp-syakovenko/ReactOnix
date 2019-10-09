import React from 'react';

const withActive = (WrapperComponent) => {
  class Wrapper extends React.Component {
    // Active element in the biographyList
    activeYear = (e) => {
      const arrTr = e.currentTarget.childNodes;
      const currentTr = e.target.closest('tr');

      if (currentTr === null || e.target.type === 'button') return;

      for (let i = 0; i < arrTr.length; i += 1) {
        if (arrTr[i] !== currentTr) {
          arrTr[i].classList.remove('activeYears');
        }
      }
      currentTr.classList.toggle('activeYears');
    };

    render() {
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WrapperComponent activeYear={this.activeYear} {...this.props} />
      );
    }
  }
  return Wrapper;
};

export default withActive;
