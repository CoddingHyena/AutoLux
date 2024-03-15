import React, { useState } from 'react';
import styles from './Accordion.module.css';

const AccordionItem = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={styles.accordion}>
        <div className={styles.accordionHeader} onClick={toggleAccordion}>
          {title}
          <span>{isOpen ? '▲' : '▼'}</span>
        </div>
        {isOpen && (
          <ul className={styles.accordionBody}> {/* Изменен div на ul */}
            {items.map((item, index) => ( /* Добавлен index в качестве ключа */
              <li key={index} className={styles.listItem}> {/* Изменен div на li */}
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default AccordionItem;