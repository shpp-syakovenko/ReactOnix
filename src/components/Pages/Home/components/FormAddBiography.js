import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../elements/Button/Button';
import ThemeContext from '../../../../context/ThemeContext';


const FormAddBiography = ({
  handleSubmit, handleChangeYear, year, errorYear, handleChangeText, text, handleReset
}) => {
  return (
    <ThemeContext.Consumer>
      {
        (theme) => (
          <div className="wrapperFormYear">
            <form onSubmit={handleSubmit}>
              <div>
                <span> Добавить событие:</span>
              </div>
              <div className="formYear">
                <input
                  className={`formYearTheme${theme}`}
                  id="new-todo"
                  onChange={handleChangeYear}
                  value={year}
                  placeholder="year..."
                />
                <span className="errorYear">{errorYear ? 'Заполните поля пожалуйста коректно' : ''}</span>
              </div>
              <div className="formText">
                <textarea
                  className={`formTextTheme${theme}`}
                  onChange={handleChangeText}
                  value={text}
                  placeholder="text..."
                />
              </div>
              <Button title="Reset" onButtonClick={handleReset} />
              <Button title="Add new date" onButtonClick={handleSubmit} />

            </form>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
};

FormAddBiography.propTypes = {
  handleSubmit: PropTypes.func,
  handleChangeYear: PropTypes.func,
  year: PropTypes.string,
  errorYear: PropTypes.bool,
  handleChangeText: PropTypes.func,
  text: PropTypes.string,
  handleReset: PropTypes.func
};

FormAddBiography.defaultProps = {
  handleSubmit: undefined,
  handleChangeYear: undefined,
  year: '',
  errorYear: false,
  handleChangeText: undefined,
  text: '',
  handleReset: undefined

};

export default FormAddBiography;
