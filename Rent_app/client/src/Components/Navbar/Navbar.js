import react from 'react';
import "./Navbar.css"

const Navbar=()=>{
    return(
        <div>
           <div className='navbar'>
            <header className='nav-header'>
               <div className='nav-margin'>
                  <div className='nav-content'>
                    <div className='nav-content-1'>
                       <div className='nav-logo'>
                          <img alt='RentOk Logo' 
                           src='https://rentok-marketplace.s3.ap-south-1.amazonaws.com/marketplace-dump/blogs/rentok-logo.webp'
                           title='RentOk Logo' />
                       </div>
                       <div>
                        <button className='nav-button'>Find properties</button>
                        <button className='nav-button'>Manager App</button>
                        <button className='nav-button'>Blog</button>
                        <button className='nav-button'>Legal Services</button>
                       </div>
                    </div>
                    <div>
                        <button className='button-list'>List your property</button>
                        <button className='button-app'>Get App</button>
                    </div>
                  </div>
               </div>
            </header>
           </div>
        </div>
    );
}

export default Navbar;