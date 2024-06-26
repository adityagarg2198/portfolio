import { motion } from 'framer-motion';
import { Page, usePortfolioContext } from '../../Context/portfolio.context';
import './SideBar.css';
import { useEffect, useState } from 'react';

const SideBar = () => {
  const { updatePage, page } = usePortfolioContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (type: Page) => {
    updatePage(type);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 600);
  }, []);

  return (
    <motion.button layout data-isOpen={isOpen} className='sibebar-container'>
      <motion.section layout>
        <button
          className={`${
            page === 'intro' ? 'icon-button-active' : 'icon-button'
          }`}
          onClick={() => handleButtonClick('intro')}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Layer_1'
            data-name='Layer 1'
            viewBox='0 0 24 24'>
            <path d='M22,5.724V2c0-.552-.447-1-1-1s-1,.448-1,1v2.366L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.203,5.579c-1.379,.931-2.203,2.48-2.203,4.145v9.276c0,2.757,2.243,5,5,5h3c.553,0,1-.448,1-1V15c0-.551,.448-1,1-1h4c.552,0,1,.449,1,1v8c0,.552,.447,1,1,1h3c2.757,0,5-2.243,5-5V9.724c0-1.581-.744-3.058-2-4Zm0,13.276c0,1.654-1.346,3-3,3h-2v-7c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v7h-2c-1.654,0-3-1.346-3-3V9.724c0-.999,.494-1.929,1.322-2.487L10.322,2.513c1.02-.688,2.336-.688,3.355,0l7,4.724c.828,.558,1.322,1.488,1.322,2.487v9.276Z' />
          </svg>
        </button>
        <button
          className={`${
            page === 'about' ? 'icon-button-active' : 'icon-button'
          }`}
          onClick={() => handleButtonClick('about')}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Layer_1'
            data-name='Layer 1'
            viewBox='0 0 24 24'>
            <path d='m12,10c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm0,5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Zm7.949-9.464l-3.484-3.486c-1.323-1.322-3.081-2.05-4.95-2.05h-4.515C4.243,0,2,2.243,2,5v14c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-8.515c0-1.871-.729-3.628-2.051-4.95Zm-1.414,1.415c.318.317.587.67.805,1.05h-4.341c-.552,0-1-.449-1-1V2.659c.38.218.733.487,1.051.805l3.484,3.486Zm-9.363,15.05c.413-1.164,1.524-2,2.828-2s2.415.836,2.828,2h-5.656Zm10.828-3c0,1.654-1.346,3-3,3h-.101c-.465-2.279-2.485-4-4.899-4s-4.435,1.721-4.899,4h-.101c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h4.515c.163,0,.325.008.485.023v4.977c0,1.654,1.346,3,3,3h4.977c.015.16.023.322.023.485v8.515Z' />
          </svg>
        </button>
        <button
          className={`${
            page === 'skills' ? 'icon-button-active' : 'icon-button'
          }`}
          onClick={() => handleButtonClick('skills')}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Layer_1'
            data-name='Layer 1'
            viewBox='0 0 24 24'>
            <path d='m24,10v6c0,2.757-2.243,5-5,5h-6v1h3c.553,0,1,.447,1,1s-.447,1-1,1h-8c-.553,0-1-.447-1-1s.447-1,1-1h3v-1h-6c-2.757,0-5-2.243-5-5v-6c0-2.283,1.542-4.274,3.751-4.842.531-.134,1.08.184,1.218.719.138.535-.185,1.08-.72,1.217-1.324.341-2.249,1.536-2.249,2.906v6c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3v-6c0-1.37-.925-2.565-2.249-2.906-.535-.137-.857-.683-.72-1.217.138-.535.689-.854,1.218-.719,2.209.568,3.751,2.559,3.751,4.842Zm-17.696-.866l.953-.55c-.167-.498-.257-1.03-.257-1.583s.091-1.086.257-1.583l-.953-.55c-.479-.276-.643-.888-.366-1.366.276-.479.888-.643,1.366-.366l.956.552c.706-.795,1.66-1.365,2.74-1.585v-1.101c0-.552.447-1,1-1s1,.448,1,1v1.101c1.08.22,2.035.79,2.74,1.585l.956-.552c.476-.277,1.089-.113,1.366.366.276.479.112,1.09-.366,1.366l-.953.55c.167.498.257,1.03.257,1.583s-.091,1.086-.257,1.583l.953.55c.479.276.643.888.366,1.366-.186.321-.521.5-.867.5-.17,0-.342-.043-.499-.134l-.956-.552c-.706.795-1.66,1.365-2.74,1.585v1.101c0,.553-.447,1-1,1s-1-.447-1-1v-1.101c-1.08-.22-2.035-.79-2.74-1.585l-.956.552c-.157.091-.329.134-.499.134-.346,0-.682-.179-.867-.5-.276-.479-.112-1.09.366-1.366Zm2.696-2.134c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Z' />
            <path d='m12,8.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5' />
          </svg>
        </button>
        <button
          className={`${
            page === 'projects' ? 'icon-button-active' : 'icon-button'
          }`}
          onClick={() => handleButtonClick('projects')}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Layer_1'
            data-name='Layer 1'
            viewBox='0 0 24 24'>
            <path d='m12.126,21.68c-.052-.042-.095-.07-.15-.116-.678-.718-1.752-1.977-2.688-3.586h1.571l-.684-2h-1.873c-.493-1.234-.825-2.587-.825-4s.334-2.765.829-4h7.334c.294.736.54,1.508.683,2.317l2.103.72c-.091-1.062-.329-2.078-.653-3.036h3.363c.491,1.119.775,2.345.822,3.632.005.123.008.532.006.615l1.966.673c.023-.305.047-.609.047-.919h0C23.978,5.361,18.594-.022,11.978-.022S-.022,5.361-.022,11.978s5.383,12,12,12h0c.31,0,.616-.016.921-.039l-.773-2.259Zm-2.838-15.702c.933-1.603,2.013-2.868,2.69-3.586.676.716,1.75,1.985,2.681,3.586h-5.371Zm10.67,0h-3.019c-.723-1.451-1.591-2.689-2.36-3.645,2.177.588,4.057,1.891,5.379,3.645Zm-10.593-3.642c-.768.953-1.631,2.198-2.353,3.642h-3.017c1.32-1.751,3.197-3.053,5.369-3.642ZM2.818,7.978h3.36c-.422,1.245-.7,2.587-.7,4s.278,2.755.7,4h-3.36c-.538-1.226-.841-2.578-.841-4s.303-2.774.841-4Zm1.178,10h3.017c.728,1.457,1.599,2.689,2.371,3.647-2.181-.587-4.064-1.891-5.388-3.647Zm20.026-2.935l-6.108,2.874-2.874,6.106-4.67-13.651,13.652,4.671Z' />
          </svg>
        </button>
        <button
          className={`${
            page === 'contact' ? 'icon-button-active' : 'icon-button'
          }`}
          onClick={() => handleButtonClick('contact')}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Layer_1'
            data-name='Layer 1'
            viewBox='0 0 24 24'>
            <path d='M18,0H8A5,5,0,0,0,3.424,3H2A1,1,0,0,0,2,5H3V7H2A1,1,0,0,0,2,9H3v2H2a1,1,0,0,0,0,2H3v2H2a1,1,0,0,0,0,2H3v2H2a1,1,0,0,0,0,2H3.424A5,5,0,0,0,8,24H18a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,18,0Zm3,19a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V5A3,3,0,0,1,8,2H18a3,3,0,0,1,3,3Zm-8-7a3,3,0,0,0,0-6A3,3,0,0,0,13,12Zm5,6a1,1,0,0,1-2,0,3,3,0,0,0-6,0,1,1,0,0,1-2,0C8.211,11.392,17.791,11.394,18,18Z' />
          </svg>
        </button>
      </motion.section>
    </motion.button>
  );
};

export default SideBar;
