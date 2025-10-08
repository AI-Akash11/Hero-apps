import React from 'react';

const Copyright = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-[#001931] text-white p-4">
  <aside>
    <p className='text-sm font-light'>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-bold'>HERO.IO</span> Ltd</p>
  </aside>
</footer>
    );
};

export default Copyright;