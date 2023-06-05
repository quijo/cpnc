import NewsWrap from './NewsStyle'
import logo59th from '../../images/59th.png'

import SlideShow from '../../component/slide/SlideShow'

const News = ()=>{
    return(
        <NewsWrap>


           <div className="left">
                <div className='logo59th'><img src={logo59th} alt="logo" /></div>
                <h2>GUSTO</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            
           </div>
           <div className="right">
                    <div className='slider'>
                         <SlideShow />
                    </div>
           </div>
        </NewsWrap>
    )
}

export default News