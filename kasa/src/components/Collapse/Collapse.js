import React, { useState, useRef } from 'react';
import './Collapse.scss';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            <button
                className={`collapsible ${isOpen ? 'active' : ''}`}
                onClick={toggleCollapse}
            >
                {title}
            </button>
            <div
                className="content"
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
                }}
                ref={contentRef}
            >
                {children}
            </div>
        </div>
    );
};

export default Collapse;