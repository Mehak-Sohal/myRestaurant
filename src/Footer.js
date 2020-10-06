import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
            <div className="footer">
                <div className="row">
                    <div  className="col">
                        <ul>
                            <li>4379, Rollingwood St</li>
                            <li>London, ON</li>
                            <li>N9A 2A7</li>
                            <li>Canada</li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul>
                            <li>647-654-9876</li>
                            <li>myRestaurant@gmail.com</li>
                        </ul>
                    </div>

                    <div className="col">
                        <a href='https://www.facebook.com' target='_blank'><i className="fa fa-facebook social-media"></i></a>{' '}
                        <a href='https://www.instagram.com' target='_blank'><i className="fa fa-instagram social-media"></i></a>{' '}
                        <a href='https://www.gmail.com' target='_blank'><i className="fa fa-envelope social-media"></i></a>
                    </div>
                </div>
                <hr></hr>

                <div className="row">
                  <div className="col">
                    &copy; 2020 All copyrights reserved
                  </div>
                </div>
        </div>
    )
}

export default Footer
