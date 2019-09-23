import React from 'react';
import psd from '../../../assets/file/Shopno_one_page.psd';
import '../../../scss/layout/footer.scss';

const FooterView = () => {
  return (
    <div className="wrapperFooter">
      <div className="footer">
        <div className="topFooter">
          <h3>FOLLOW US</h3>
          <ul>
            <li>
              <a href="/#">
                <i className="icon-pinterest" />
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="icon-facebook-1" />
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="icon-dribbble-1" />
              </a>
            </li>
          </ul>
          <p>Copyright Masum Parvej, All Rights Reserved</p>
        </div>
        <div className="bottomFooter">
          <div className="gitHub">
            <p>GitHub:</p>
            <p>
              <a href="https://github.com/shpp-syakovenko/ReactOnix">
                Ссылка на GitHub
              </a>
            </p>
          </div>
          <div className="psd">
            <p><a href={psd}>Скачать шаблон</a></p>
            <p>
              <a href="http://psd-html-css.ru/templates/besplatnyy-psd-shablon-lendingovoy-stranicy-agenstva">
                Ссылка на исходный шаблон
              </a>
            </p>
          </div>
          <div className="autor">
            <p>Автор:</p>
            <p>Сергей Яковенко</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterView;
