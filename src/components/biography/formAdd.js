import React, {Component} from "react";


class FormAdd extends Component {
    render() {
        const {handleSubmit, handleChangeYear, year, errorYear, handleChangeInfo, text, handelReset} = this.props;
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
                        <span className='errorYears'>{errorYear ? 'Вы ввели не корректно год, введите YYYY:' : ''}</span>
                    </div>
                    <div className="formText">
                        <textarea
                            onChange={handleChangeInfo}
                            value={text}
                            placeholder='text...'
                        />
                    </div>
                    <button onClick={handelReset} className='bth-add'>
                        Reset
                    </button>
                    <button className='bth-add'>
                        Add new date
                    </button>

                </form>
            </div>
        );
    }
}

export default FormAdd