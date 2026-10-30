import React, { useState } from 'react';

export default function FaqAccordion({ items, idPrefix = "faq" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <div className="faq-list divide-y divide-line border-t border-line">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${idPrefix}-panel-${idx}`;
        const triggerId = `${idPrefix}-trigger-${idx}`;

        return (
          <div key={idx} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              id={triggerId}
              className="faq-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(idx)}
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true"></span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`faq-panel ${isOpen ? 'is-open' : ''}`}
              style={{ maxHeight: isOpen ? '500px' : '0px' }}
            >
              <div className="faq-panel-inner">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
