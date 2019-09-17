import React from "react";
import Button from "../../../elements/Button/Button";


const FormAddBiography = (props) => {
    const {handleSubmit, handleChangeYear, year, errorYear, handleChangeText, text, handleReset} = props;
    return (
        <div className="wrapperFormYear">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="new-todo"> Добавить событие:</label>
                </div>
                <div className="formYear">
                    <input
                        id="new-todo"
                        onChange={handleChangeYear}
                        value={year}
                        placeholder='year...'
                    />
                    <span className='errorYear'>{errorYear ? 'Вы ввели не корректно год, введите YYYY:' : ''}</span>
                </div>
                <div className="formText">
                        <textarea
                            onChange={handleChangeText}
                            value={text}
                            placeholder='text...'
                        />
                </div>
                <Button title={'Reset'} onButtonClick={handleReset}/>
                <Button title={'Add new date'} onButtonClick={handleSubmit}/>


            </form>
        </div>
    )
};

export default FormAddBiography;