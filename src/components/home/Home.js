import img from '../../image/exclusive.png';
import './Home.css';
import { Link } from 'react-router-dom';
import CustomerReview from '../customerReviews/CustomerReview';

const Home = () => {
    return (
        <div>
         <div className='home'>
            <div className='article'>
                <h2> Smart Watch for Our generation</h2>
                <p>
                 smartwatch, a small smartphonelike device worn on the wrist.
                 Many smartwatches are connected to a smartphone that notifies the user of incoming calls,
                  e-mail messages, and notifications from applications. Some smartwatches can even make telephone calls.
                   Many smartwatches have colour displays, but some inexpensive models use a black-and-white “e-paper” display.
                 The user can operate the smartwatch through a touch screen, physical buttons, or a combination of the two.
                 Some smartwatches come with pedometers and heart-rate monitors to help users track their health.
                </p>
                <button className='btn'>live demo</button>
            </div>
            <div className='home-image'>
                <img src={img} alt=''/>
            </div>
        </div>
        <div className='custom'>
            <h2>customer reviews</h2>

            <div className='customer'><CustomerReview></CustomerReview> </div> 
            
        </div>
        <div className='link'>
        <Link to="/review">see all reviews</Link>
        </div>
        </div>
    );
};

export default Home;